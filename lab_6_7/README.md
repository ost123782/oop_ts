# Лабораторні роботи 6 та 7 — Мікросервіси

Об'єднана реалізація лабораторних робіт №6 (робота з класами / ООП) та №7
(робота з колекціями) у вигляді мікросервісної архітектури на NestJS
з обміном повідомленнями через RabbitMQ.

## Архітектура

```
            ┌──────────────┐      HTTP / Swagger
 клієнт ───▶│   gateway    │──────────────────┐
            │  (NestJS +   │                  │
            │   Swagger)   │                  │
            └──────┬───────┘                  ▼
                   │ RPC через RabbitMQ   http://localhost:3000/api
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
  ┌───────────┐         ┌───────────┐
  │   lab6    │         │   lab7    │
  │ (ООП)     │         │(колекції) │
  └─────┬─────┘         └─────┬─────┘
        │                     │
        └────────┬────────────┘
                 ▼
          ┌──────────────┐
          │   RabbitMQ   │
          │  (broker)    │
          └──────────────┘
```

| Сервіс   | Роль                                   | Порт        |
|----------|----------------------------------------|-------------|
| gateway  | HTTP API + Swagger; клієнт RMQ         | 3000        |
| lab6     | NestJS мікросервіс (Transport.RMQ)     | —           |
| lab7     | NestJS мікросервіс (Transport.RMQ)     | —           |
| rabbitmq | Брокер повідомлень                     | 5672, 15672 |

## Як запустити

```bash
cd lab_6_7
docker compose up --build
```

Після старту:

- **Swagger UI:** http://localhost:3000/api
- **RabbitMQ UI:** http://localhost:15672 (guest / guest)

Зупинити:

```bash
docker compose down
```

## Зміст лабораторних

### Лабораторна 6 — робота з класами

Завдання: `lab6/src/*`

1. **Person** (`person/`) — клас із полями `fullName`, `age`, методами
   `move()`/`talk()`, двома конструкторами. Endpoint `POST /lab6/person/demo`.
2. **Phone** (`phone/`) — три конструктори, перевантажений `receiveCall`,
   `sendMessage` з rest-параметрами. Endpoint `POST /lab6/phone/demo`.
3. **Car → Sedan / Truck** (`car/`) — абстрактний клас `Car` з абстрактним
   `brake()` і звичайним `gas()`. Endpoint `POST /lab6/car/demo`.
4. **LibraryCard** (`library-card/`) — варіант 6: бібліотечна картка.
   Endpoints:
   - `POST /lab6/library-card` — створити картку;
   - `POST /lab6/library-card/change-books` — збільшити / зменшити кількість книг;
   - `POST /lab6/library-card/special` — клас-спадкоємець `SpecialLibraryCard`
     з двома додатковими полями (`cardId`, `fine`) та перевизначеним методом
     виведення.

### Лабораторна 7 — робота з колекціями

Завдання: `lab7/src/*`

1. **Taxi** (`taxi/`) — сервіс таксі з класами `Car`, `Driver`, допоміжним
   класом `TaxiHelper`. Генерує автопарк (10–20 авто), ремонтує половину
   (+10 % потужності, нові водії), кожній другій — +10 % потужності та +5 %
   ціни, відправляє водіїв на курси підвищення кваліфікації (якщо досвід < 5
   та вік > 25), випадково вибирає авто та виводить повідомлення про
   відправлення/прибуття. Endpoint `POST /lab7/taxi/run`.
2. **Phonebook** (`phonebook/`) — телефонна книга на базі `Map`
   (аналог `HashMap`). Демонструє `put`, `get`, `remove`, `containsKey`,
   `containsValue`, `size`. Endpoint `POST /lab7/phonebook/demo`.

## Структура проекту

```
lab_6_7/
├── docker-compose.yml
├── gateway/              # HTTP API + Swagger, RMQ клієнт
│   ├── Dockerfile
│   └── src/
│       ├── main.ts
│       ├── app.module.ts
│       ├── lab6/         # контролери → RMQ send('...pattern...')
│       └── lab7/
├── lab6/                 # NestJS мікросервіс (RMQ)
│   ├── Dockerfile
│   └── src/
│       ├── main.ts       # createMicroservice(Transport.RMQ)
│       ├── person/
│       ├── phone/
│       ├── car/
│       └── library-card/
└── lab7/                 # NestJS мікросервіс (RMQ)
    ├── Dockerfile
    └── src/
        ├── main.ts
        ├── taxi/
        └── phonebook/
```

## Комунікація через RabbitMQ

Gateway надсилає запити через `ClientProxy.send(pattern, payload)` — це
відповідь/запит (RPC) поверх RabbitMQ. Сервіси `lab6` та `lab7` обробляють
ті ж самі повідомлення за допомогою `@MessagePattern('...')`.

Черги:
- `lab6_queue` — для повідомлень до сервісу lab6
- `lab7_queue` — для повідомлень до сервісу lab7

## Використані технології

| Технологія          | Призначення                            |
|---------------------|----------------------------------------|
| NestJS 11           | Фреймворк для всіх сервісів            |
| TypeScript 5.7      | Мова програмування                     |
| @nestjs/microservices | Транспорт RMQ                        |
| @nestjs/swagger     | OpenAPI документація gateway           |
| RabbitMQ 3.13       | Брокер повідомлень                     |
| Docker / Compose    | Контейнеризація та оркестрація         |

## Автор

**Ostap Dmytriv, LPNU student, AP-22** — [dmitrivostap8@gmail.com](mailto:dmitrivostap8@gmail.com)
