# UML-діаграми

Діаграми виконано у нотації Mermaid (рендериться напряму у GitHub / VS Code).

---

## 1. Діаграма компонентів (мікросервісна архітектура)

```mermaid
flowchart LR
    client([Клієнт / Swagger UI])

    subgraph Docker["Docker Compose network (lab67-net)"]
        gateway["<b>gateway</b><br/>NestJS HTTP + Swagger<br/>:3000"]
        rabbitmq[("<b>rabbitmq</b><br/>broker<br/>:5672 / :15672")]
        lab6["<b>lab6</b><br/>NestJS microservice<br/>Transport.RMQ"]
        lab7["<b>lab7</b><br/>NestJS microservice<br/>Transport.RMQ"]
    end

    client -- "HTTP / JSON" --> gateway
    gateway -- "send(pattern, payload)<br/>lab6_queue" --> rabbitmq
    gateway -- "send(pattern, payload)<br/>lab7_queue" --> rabbitmq
    rabbitmq -- "MessagePattern" --> lab6
    rabbitmq -- "MessagePattern" --> lab7
    lab6 -- "reply" --> rabbitmq
    lab7 -- "reply" --> rabbitmq
    rabbitmq -- "reply" --> gateway
    gateway -- "HTTP / JSON" --> client
```

---

## 2. Діаграма розгортання

```mermaid
flowchart TB
    subgraph Host["Host machine (darwin)"]
        subgraph Compose["docker compose"]
            direction LR
            C1["container: lab67-gateway<br/>image: lab_6_7-gateway<br/>node:22-alpine"]
            C2["container: lab67-lab6<br/>image: lab_6_7-lab6<br/>node:22-alpine"]
            C3["container: lab67-lab7<br/>image: lab_6_7-lab7<br/>node:22-alpine"]
            C4["container: lab67-rabbitmq<br/>image: rabbitmq:3.13-management-alpine"]
        end
    end

    P1["tcp :3000 — Swagger UI"] --- C1
    P2["tcp :5672 — AMQP"] --- C4
    P3["tcp :15672 — RabbitMQ UI"] --- C4

    C1 -->|amqp://rabbitmq:5672| C4
    C2 -->|amqp://rabbitmq:5672| C4
    C3 -->|amqp://rabbitmq:5672| C4
```

---

## 3. Sequence-діаграма — типовий виклик

Приклад: `POST /lab6/person/demo`.

```mermaid
sequenceDiagram
    actor User
    participant GW as gateway (Lab6Controller)
    participant MQ as RabbitMQ (lab6_queue)
    participant L6 as lab6 (PersonController)
    participant SVC as PersonService

    User->>+GW: POST /lab6/person/demo { fullName, age }
    GW->>+MQ: send('person.demo', payload)
    MQ->>+L6: deliver on queue lab6_queue
    L6->>+SVC: demo(payload)
    SVC-->>-L6: { persons, actions }
    L6-->>-MQ: reply
    MQ-->>-GW: reply
    GW-->>-User: 201 { persons, actions }
```

---

## 4. Діаграма класів — Lab 6 (ООП)

```mermaid
classDiagram
    class Person {
        +fullName: string
        +age: number
        +Person()
        +Person(fullName, age)
        +move() string
        +talk() string
    }

    class Phone {
        +number: string
        +model: string
        +weight: number
        +Phone()
        +Phone(number, model)
        +Phone(number, model, weight)
        +receiveCall(caller) string
        +receiveCall(caller, phoneNumber) string
        +getNumber() string
        +sendMessage(...numbers) string[]
    }

    class Car {
        <<abstract>>
        +model: string
        +color: string
        +maxSpeed: number
        +gas() string
        +brake()* string
    }

    class Sedan {
        +brake() string
    }

    class Truck {
        +loadCapacityTons: number
        +brake() string
    }

    class LibraryCard {
        +name: string
        +surname: string
        +booksTaken: number
        +input(name, surname, booksTaken) void
        +increaseBooks(by) void
        +decreaseBooks(by) void
        +print() string
    }

    class SpecialLibraryCard {
        +cardId: string
        +fine: number
        +print() string
    }

    Car <|-- Sedan
    Car <|-- Truck
    LibraryCard <|-- SpecialLibraryCard
```

---

## 5. Діаграма класів — Lab 7 (Колекції)

```mermaid
classDiagram
    class Car {
        +brand: string
        +enginePower: number
        +driver: Driver
        +price: number
        +year: number
    }

    class Driver {
        +name: string
        +age: number
        +experienceYears: number
    }

    class TaxiHelper {
        <<utility>>
        +pickRandom(cars)$ Car
        +dispatch(car)$ string
        +arrive(car)$ string
    }

    class Phonebook {
        <<Map~string,string~>>
        +put(surname, phone) void
        +get(surname) string
        +remove(surname) boolean
        +containsKey(surname) boolean
        +containsValue(phone) boolean
        +size() number
    }

    Car "1" *-- "1" Driver : driver
    TaxiHelper ..> Car : uses
```

---

## 6. Модульна структура NestJS

```mermaid
flowchart TB
    subgraph gateway_app["gateway · AppModule"]
        direction TB
        GWL6["Lab6Module<br/>ClientsModule(RMQ, lab6_queue)"]
        GWL7["Lab7Module<br/>ClientsModule(RMQ, lab7_queue)"]
    end

    subgraph lab6_app["lab6 · AppModule"]
        direction TB
        PM["PersonModule"]
        PhM["PhoneModule"]
        CM["CarModule"]
        LCM["LibraryCardModule"]
    end

    subgraph lab7_app["lab7 · AppModule"]
        direction TB
        TM["TaxiModule"]
        PbM["PhonebookModule"]
    end

    GWL6 -. "MessagePattern<br/>person.*, phone.*, car.*, library-card.*" .-> lab6_app
    GWL7 -. "MessagePattern<br/>taxi.*, phonebook.*" .-> lab7_app
```

---

## 7. Патерни повідомлень (RMQ)

| Pattern                       | Черга        | Сервіс | Контролер                |
|-------------------------------|--------------|--------|--------------------------|
| `person.demo`                 | `lab6_queue` | lab6   | `PersonController`       |
| `phone.demo`                  | `lab6_queue` | lab6   | `PhoneController`        |
| `car.demo`                    | `lab6_queue` | lab6   | `CarController`          |
| `library-card.create`         | `lab6_queue` | lab6   | `LibraryCardController`  |
| `library-card.change-books`   | `lab6_queue` | lab6   | `LibraryCardController`  |
| `library-card.special`        | `lab6_queue` | lab6   | `LibraryCardController`  |
| `taxi.run`                    | `lab7_queue` | lab7   | `TaxiController`         |
| `phonebook.demo`              | `lab7_queue` | lab7   | `PhonebookController`    |
