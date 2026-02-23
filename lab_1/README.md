# Lab 1 — Generators and Iterables in TypeScript

> Laboratory work on exploring generator functions, iterable protocols, and custom reducers in TypeScript.

## Table of Contents

- [Description](#description)
- [Tasks](#tasks)
  - [Task 1 — Arithmetic Reduction of a Number Sequence](#task-1--arithmetic-reduction-of-a-number-sequence)
  - [Task 2 — Sentence Construction from a Word Generator](#task-2--sentence-construction-from-a-word-generator)
  - [Task 3 — Aggregation of User Data](#task-3--aggregation-of-user-data)
  - [Task 4 — Aggregation of Car Data](#task-4--aggregation-of-car-data)
  - [Task 5 — Reversing a Three-Digit Number](#task-5--reversing-a-three-digit-number)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Output](#output)
- [Technologies](#technologies)
- [Author](#author)
- [License](#license)

## Description

This laboratory work demonstrates the use of **generator functions** (`function*`) and the **iterable/iterator protocol** in TypeScript. Each task uses generators to produce sequences of values and processes them with custom higher-order functions such as `reduceIterable`, `mapIterable`, and `sumIterable` — without relying on built-in array methods.

## Tasks

### Task 1 — Arithmetic Reduction of a Number Sequence

**File:** [`src/task1.ts`](lab_1/src/task1.ts)

A generator yields 10 predefined numbers. A generic `reduceIterable` function applies arithmetic operations (sum, difference, product, quotient) over the iterable.

**Key concepts:** `yield*`, custom `reduceIterable` with optional initial value, `Symbol.iterator`.

### Task 2 — Sentence Construction from a Word Generator

**File:** [`src/task2.ts`](lab_1/src/task2.ts)

A generator yields individual words. The words are collected into an array via `Array.from()` and joined into a sentence.

**Key concepts:** `yield*`, converting iterables to arrays.

### Task 3 — Aggregation of User Data

**File:** [`src/task3.ts`](lab_1/src/task3.ts)

A `User` class holds demographic data (age, weight, height). A generator yields 10 user instances. Generic `mapIterable` and `sumIterable` functions compute totals for each numeric field.

**Key concepts:** class-based data modeling, generic generator `mapIterable<T, U>`, lazy evaluation.

### Task 4 — Aggregation of Car Data

**File:** [`src/task4.ts`](lab_1/src/task4.ts)

A `Car` class holds vehicle specifications. A generator yields 10 car instances. The same `mapIterable`/`sumIterable` pattern computes totals for engine volume and horsepower.

**Key concepts:** reusable iterable utilities, separation of data generation from data processing.

### Task 5 — Reversing a Three-Digit Number

**File:** [`src/task5.ts`](lab_1/src/task5.ts)

Two generators work together: `extractDigits` yields individual digits of a three-digit number, and `reverseNumber` reassembles them in reverse order using positional multipliers.

**Key concepts:** generator composition, mathematical digit extraction.

## Project Structure

```
lab_1/
├── src/
│   ├── index.ts        # Entry point — imports all tasks
│   ├── task1.ts        # Arithmetic reduction
│   ├── task2.ts        # Sentence construction
│   ├── task3.ts        # User data aggregation
│   ├── task4.ts        # Car data aggregation
│   └── task5.ts        # Number reversal
├── package.json
├── tsconfig.json
└── package-lock.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- npm (comes with Node.js)

## Installation

```bash
cd lab_1
npm install
```

## Usage

```bash
npm start
```

This runs `tsx src/index.ts`, which executes all five tasks sequentially.

## Output

```
--- Завдання 1 ---
Сума: 55
Різниця: -35
Добуток: 3628800
Частка: 0.00002755731922398589

--- Завдання 2 ---
Генератори в TypeScript дозволяють елегантно керувати потоком даних та ітераціями.

--- Завдання 3 ---
Сума віку всіх користувачів: 299
Сума ваги всіх користувачів: 709.5
Сума зросту всіх користувачів: 1728.0

--- Завдання 4 ---
Сума об'ємів двигунів: 23.5 л
Сума потужностей: 2340 к.с.

--- Завдання 5 ---
Початкове число: 412
Реверсоване число: 214
```

## Technologies

| Technology | Version |
|------------|---------|
| Node.js    | 24.13.0 |
| TypeScript | 5.9.3   |
| tsx        | 4.21.0  |

## Author

**Ostap Dmytriv, LPNU student, AP-22** — [dmitrivostap8@gmail.com](mailto:dmitrivostap8@gmail.com)

## License

ISC
