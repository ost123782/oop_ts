# Лабораторні роботи 8 та 9

Об'єднана реалізація лабораторних робіт **№8** (потоки введення/виведення —
робота з файлами) та **№9** (графічний інтерфейс — обчислення прикладних
задач) у вигляді мікросервісної архітектури:

* **gateway** — NestJS HTTP API + WebSocket-шлюз + PostgreSQL (історія результатів);
* **lab8** — NestJS-мікросервіс (файлові операції);
* **lab9** — NestJS-мікросервіс (фізичні формули);
* **frontend** — React + Vite (UI замість Swing);
* **rabbitmq** — брокер для RPC між шлюзом і мікросервісами;
* **postgres** — зберігання результатів обчислень.

Усі результати, що користувач зберігає, з'являються в усіх відкритих вкладках
браузера у режимі реального часу — без перезавантаження сторінки — через
Socket.IO.

## Документація

* [UML-діаграми](UML.md)

## Архітектура

```
                     ┌─────────────────────────────┐
   browser ◀─HTTP/WS─▶│  gateway (NestJS, :3000)    │
                      │  REST + Swagger + Socket.IO │
                      │  TypeORM ─▶ PostgreSQL      │
                      └──┬───────────────────────┬──┘
            ClientProxy  │                       │  ClientProxy
            (RMQ)        ▼                       ▼   (RMQ)
                  ┌──────────────┐         ┌──────────────┐
                  │  RabbitMQ    │         │  RabbitMQ    │
                  │ lab8_queue   │         │ lab9_queue   │
                  └──────┬───────┘         └──────┬───────┘
                         │                        │
                         ▼                        ▼
                  ┌──────────────┐         ┌──────────────┐
                  │   lab8       │         │   lab9       │
                  │ (file I/O)   │         │ (формули)    │
                  └──────┬───────┘         └──────────────┘
                         │
                         ▼
                  ┌──────────────┐
                  │  ./data      │   (volume)
                  │  *.txt       │
                  └──────────────┘
```

| Сервіс    | Роль                                           | Порт (host)        |
|-----------|------------------------------------------------|--------------------|
| frontend  | React + Vite (статика, віддається через nginx) | 5173               |
| gateway   | HTTP API + Swagger + WebSocket                 | 3000               |
| lab8      | Мікросервіс (Transport.RMQ)                    | —                  |
| lab9      | Мікросервіс (Transport.RMQ)                    | —                  |
| rabbitmq  | Брокер повідомлень                             | 5673, 15673        |
| postgres  | База даних                                     | 5433               |

> Нестандартні порти `5673`, `15673`, `5433` навмисні — щоб не конфліктувати
> зі стеком lab 6–7, який користується портами `5672` / `15672`.

## Як запустити

```bash
cd lab_8_9
docker compose up --build
```

Після старту:

* **UI:**         http://localhost:5173
* **Swagger:**    http://localhost:3000/api
* **RabbitMQ UI:** http://localhost:15673 (guest / guest)

Зупинити та прибрати:

```bash
docker compose down -v
```

## Зміст лабораторних

### Лабораторна 8 — потоки вводу/виводу

Завдання: записати у файл (`.txt`) послідовність випадкових цілих чисел у
заданому діапазоні `[min, max]`. Ім'я файлу та межі — параметри (тут — поля
форми UI замість командного рядка). Перед записом виконується перевірка
існування файлу; якщо файлу немає — він створюється. Прочитати щойно
записаний файл і вивести його вміст.

| Endpoint                       | Pattern                | Що робить                        |
|--------------------------------|------------------------|----------------------------------|
| `POST /lab8/numbers/generate`  | `lab8.numbers.generate` | створити/перезаписати файл і повернути числа |
| `POST /lab8/numbers/read`      | `lab8.numbers.read`     | прочитати файл, повернути числа               |

Файли пишуться у каталог `./data` (через bind-mount).

### Лабораторна 9 — графічний інтерфейс (UI замість Swing)

Завдання: реалізувати простий GUI для розв'язку прикладної обчислювальної
задачі. Замість Swing використано React. Підтримуються 5 варіантів
(включаючи варіант 16 — Закон Ома з прикладу методички):

| Варіант              | Формула                | Поля   |
|----------------------|------------------------|--------|
| `ohm`                | `I = U / R`            | U, R   |
| `kinetic-energy`     | `Wₖ = m·v² / 2`        | m, v   |
| `projectile-height`  | `hmax = (v₀·sin α)²/2g` | v₀, α |
| `pressure-column`    | `p = ρ·g·h`            | ρ, h   |
| `work`               | `A = F·S`              | F, S   |

| Endpoint                       | Pattern                  |
|--------------------------------|--------------------------|
| `POST /lab9/formula/calculate` | `lab9.formula.calculate` |

## Збереження та live-оновлення

* Кожен виклик у `lab8` / `lab9` зберігається в таблиці `results` в Postgres
  (`lab`, `operation`, `inputs`, `output`, `created_at`).
* Після `INSERT` шлюз шле `result.created` через Socket.IO усім клієнтам.
* `DELETE /results/:id` шле `result.deleted`.

Колонка `inputs`/`output` — `jsonb`, що дає змогу зберігати довільну форму
результату (масив випадкових чисел, JSON-структуру з формулою, тощо).

## REST API (gateway)

| Метод | URL                            | Опис                              |
|-------|--------------------------------|-----------------------------------|
| POST  | `/lab8/numbers/generate`       | згенерувати числа і записати у файл |
| POST  | `/lab8/numbers/read`           | прочитати файл                    |
| POST  | `/lab9/formula/calculate`      | обчислити формулу                 |
| GET   | `/results?lab=lab8|lab9`       | історія останніх 100 результатів  |
| DELETE| `/results/:id`                 | видалити результат                |
| WS    | `/socket.io`                   | події `result.created`, `result.deleted` |

## Структура проєкту

```
lab_8_9/
├── docker-compose.yml
├── data/                          # bind-mount для файлів lab8
├── frontend/                      # Vite + React + Socket.IO client
│   ├── Dockerfile, nginx.conf
│   └── src/
│       ├── api.ts, socket.ts
│       └── components/
│           ├── Lab8Form.tsx
│           ├── Lab9Form.tsx
│           └── ResultsList.tsx
├── gateway/                       # HTTP + WebSocket + Postgres
│   ├── Dockerfile
│   └── src/
│       ├── main.ts, app.module.ts
│       ├── results/   (TypeORM Entity, REST)
│       ├── events/    (WebSocketGateway)
│       ├── lab8/      (controller + service + RMQ ClientProxy)
│       └── lab9/
├── lab8/                          # NestJS microservice (RMQ)
│   ├── Dockerfile
│   └── src/
│       ├── main.ts (Transport.RMQ)
│       └── numbers/   (FileWriter / FileReader)
└── lab9/                          # NestJS microservice (RMQ)
    ├── Dockerfile
    └── src/
        ├── main.ts (Transport.RMQ)
        └── formula/   (5 варіантів)
```

## Технології

| Стек                         | Призначення                          |
|------------------------------|--------------------------------------|
| NestJS 11 + `@nestjs/cli`    | gateway, lab8, lab9                  |
| `@nestjs/microservices` (RMQ)| RPC між сервісами                    |
| `@nestjs/websockets` + Socket.IO | live-стрічка результатів         |
| `@nestjs/typeorm` + `pg`     | історія в PostgreSQL                 |
| `@nestjs/swagger`            | OpenAPI                              |
| React 19 + Vite 8            | UI                                   |
| `socket.io-client`, `axios`  | клієнт                               |
| RabbitMQ 3.13, PostgreSQL 16 | інфраструктура                       |
| Docker Compose               | оркестрація                          |

## Автор

**Ostap Dmytriv, LPNU student, AP-22** — [dmitrivostap8@gmail.com](mailto:dmitrivostap8@gmail.com)
