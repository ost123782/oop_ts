# UML-діаграми

Діаграми в нотації Mermaid (рендеряться напряму у GitHub / VS Code).

---

## 1. Діаграма компонентів

```mermaid
flowchart LR
    browser([browser])

    subgraph Docker["Docker Compose · lab89-net"]
        FE["<b>frontend</b><br/>React + Vite (nginx)<br/>:5173"]
        GW["<b>gateway</b><br/>NestJS HTTP + WS<br/>+ TypeORM<br/>:3000"]
        L8["<b>lab8</b><br/>NestJS µservice<br/>(file I/O)"]
        L9["<b>lab9</b><br/>NestJS µservice<br/>(formulas)"]
        RMQ[("<b>rabbitmq</b><br/>broker<br/>:5673 / :15673")]
        PG[("<b>postgres</b><br/>:5433")]
        FILES[("<b>./data</b><br/>volume<br/>*.txt")]
    end

    browser -- "HTTP REST" --> GW
    browser -- "WebSocket / socket.io" --> GW
    browser -- "static UI" --> FE
    GW -- "send(pattern)<br/>lab8_queue" --> RMQ
    GW -- "send(pattern)<br/>lab9_queue" --> RMQ
    RMQ -- "MessagePattern" --> L8
    RMQ -- "MessagePattern" --> L9
    L8 -- "fs.read/write" --> FILES
    GW -- "TypeORM (pg)" --> PG
    GW -- "broadcast<br/>result.created" --> browser
```

---

## 2. Діаграма розгортання

```mermaid
flowchart TB
    subgraph Host["Host (darwin)"]
        subgraph Compose["docker compose"]
            direction LR
            F1["lab89-frontend<br/>nginx:1.27-alpine<br/>Vite build"]
            F2["lab89-gateway<br/>node:22-alpine"]
            F3["lab89-lab8<br/>node:22-alpine"]
            F4["lab89-lab9<br/>node:22-alpine"]
            F5["lab89-rabbitmq<br/>rabbitmq:3.13-management"]
            F6["lab89-postgres<br/>postgres:16-alpine"]
        end
    end

    P1["tcp :5173"] --- F1
    P2["tcp :3000"] --- F2
    P3["tcp :5673 / :15673"] --- F5
    P4["tcp :5433"] --- F6
    V1["./data (bind)"] --- F3
    V2["lab89-pgdata (vol)"] --- F6

    F2 -->|amqp| F5
    F3 -->|amqp| F5
    F4 -->|amqp| F5
    F2 -->|tcp 5432| F6
    F1 -->|HTTP| F2
```

---

## 3. Sequence — `POST /lab8/numbers/generate` (з live-оновленням)

```mermaid
sequenceDiagram
    actor U as User (browser)
    participant FE as frontend
    participant GW as gateway (Lab8Controller)
    participant SVC as Lab8Service (gateway)
    participant MQ as RabbitMQ (lab8_queue)
    participant L8 as lab8 NumbersController
    participant FS as filesystem (./data)
    participant PG as PostgreSQL
    participant WS as Socket.IO server

    U->>FE: submit form (fileName, min, max, count)
    FE->>+GW: POST /lab8/numbers/generate
    GW->>+SVC: generate(dto)
    SVC->>+MQ: send('lab8.numbers.generate')
    MQ->>+L8: deliver
    L8->>FS: writeFile(...)
    L8-->>-MQ: { numbers, filePath }
    MQ-->>-SVC: payload
    SVC->>+PG: INSERT INTO results (...)
    PG-->>-SVC: row
    SVC->>WS: broadcastResultCreated(row)
    SVC-->>-GW: { result, output }
    GW-->>-FE: 201 JSON

    par live broadcast
        WS-->>U: emit('result.created', row)
        WS-->>FE: emit('result.created', row) [other tabs]
    end
```

---

## 4. Sequence — `POST /lab9/formula/calculate`

```mermaid
sequenceDiagram
    actor U as User
    participant GW as gateway (Lab9Controller)
    participant SVC as Lab9Service (gateway)
    participant MQ as RabbitMQ (lab9_queue)
    participant L9 as lab9 FormulaController
    participant PG as PostgreSQL
    participant WS as Socket.IO

    U->>+GW: POST /lab9/formula/calculate { variant, inputs }
    GW->>+SVC: calculate(dto)
    SVC->>+MQ: send('lab9.formula.calculate')
    MQ->>+L9: deliver
    L9->>L9: switch(variant) → формула
    L9-->>-MQ: { title, formula, output }
    MQ-->>-SVC: payload
    SVC->>+PG: INSERT INTO results
    PG-->>-SVC: row
    SVC->>WS: broadcastResultCreated(row)
    SVC-->>-GW: { result, output }
    GW-->>-U: 201 JSON
    WS-->>U: emit('result.created', row)
```

---

## 5. Діаграма класів — gateway

```mermaid
classDiagram
    class Result {
        +id: uuid
        +lab: 'lab8' | 'lab9'
        +operation: string
        +title: string
        +inputs: jsonb
        +output: jsonb
        +createdAt: timestamp
    }

    class ResultsService {
        -repo: Repository~Result~
        -events: EventsGateway
        +save(input) Promise~Result~
        +list(lab?) Promise~Result[]~
        +remove(id) Promise~void~
    }

    class EventsGateway {
        +server: Server
        +broadcastResultCreated(r) void
        +broadcastResultDeleted(id) void
    }

    class Lab8Service {
        -client: ClientProxy(RMQ)
        -results: ResultsService
        +generate(dto) Promise
        +read(dto) Promise
    }

    class Lab9Service {
        -client: ClientProxy(RMQ)
        -results: ResultsService
        +calculate(dto) Promise
    }

    Lab8Service ..> ResultsService : uses
    Lab9Service ..> ResultsService : uses
    ResultsService ..> EventsGateway : uses
    ResultsService o-- Result
```

---

## 6. Діаграма класів — Lab 8 (мікросервіс)

```mermaid
classDiagram
    class NumbersController {
        +generate(payload) Promise
        +read(payload) Promise
    }

    class NumbersService {
        -dataDir: string
        +generate(input) Promise
        +read(input) Promise
        -resolvePath(name) string
        -exists(p) Promise~boolean~
    }

    class GenerateInput {
        +fileName: string
        +min: number
        +max: number
        +count: number
    }

    class ReadInput {
        +fileName: string
    }

    NumbersController ..> NumbersService
    NumbersService ..> GenerateInput
    NumbersService ..> ReadInput
```

---

## 7. Діаграма класів — Lab 9 (мікросервіс)

```mermaid
classDiagram
    class FormulaController {
        +calculate(payload) FormulaResult
    }

    class FormulaService {
        +calculate(payload) FormulaResult
        -ohm(inputs) FormulaResult
        -kineticEnergy(inputs) FormulaResult
        -projectileHeight(inputs) FormulaResult
        -pressureColumn(inputs) FormulaResult
        -work(inputs) FormulaResult
    }

    class FormulaInput {
        +variant: FormulaVariant
        +inputs: Record~string,number~
    }

    class FormulaResult {
        +variant: string
        +title: string
        +formula: string
        +inputs: Record
        +output: { name, value, unit }
    }

    FormulaController ..> FormulaService
    FormulaService ..> FormulaInput
    FormulaService ..> FormulaResult
```

---

## 8. Модульна структура

```mermaid
flowchart TB
    subgraph gw["gateway · AppModule"]
        direction TB
        TOM["TypeOrmModule(forRoot)"]
        EM["EventsModule<br/>(WS Gateway)"]
        RM["ResultsModule<br/>(REST + service)"]
        L8M["Lab8Module<br/>ClientProxy(RMQ, lab8_queue)"]
        L9M["Lab9Module<br/>ClientProxy(RMQ, lab9_queue)"]
    end

    subgraph l8["lab8 · AppModule"]
        NM["NumbersModule"]
    end

    subgraph l9["lab9 · AppModule"]
        FM["FormulaModule"]
    end

    L8M -. "lab8.numbers.*" .-> l8
    L9M -. "lab9.formula.*" .-> l9
```

---

## 9. Патерни повідомлень (RMQ)

| Pattern                  | Черга         | Сервіс | Контролер           |
|--------------------------|---------------|--------|---------------------|
| `lab8.numbers.generate`  | `lab8_queue`  | lab8   | `NumbersController` |
| `lab8.numbers.read`      | `lab8_queue`  | lab8   | `NumbersController` |
| `lab9.formula.calculate` | `lab9_queue`  | lab9   | `FormulaController` |

## 10. WebSocket-події (gateway → клієнт)

| Event             | Payload                | Тригер                     |
|-------------------|------------------------|----------------------------|
| `result.created`  | повний рядок `Result`  | після `INSERT` у Postgres  |
| `result.deleted`  | `{ id: string }`       | після `DELETE`             |
