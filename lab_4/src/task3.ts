import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("\n--- Завдання 3: Сума елементів масиву ---");

class InvalidInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidInputError";
  }
}

function readNumber(message: string): number {
  const value = Number(prompt(message));
  if (isNaN(value)) {
    throw new InvalidInputError("Помилка! Має бути число!");
  }
  return value;
}

function arraySum() {
  let n: number;

  while (true) {
    try {
      n = readNumber("Введіть кількість елементів масиву (n): ");
      break;
    } catch (e) {
      if (e instanceof InvalidInputError) {
        console.log(e.message);
        console.log(e.name);
      }
    }
  }

  const arr: number[] = [];

  for (let i = 0; i < n; i++) {
    try {
      const value = readNumber(`Введіть елемент arr[${i}]: `);
      arr.push(value);
    } catch (e) {
      if (e instanceof InvalidInputError) {
        console.log(e.message);
        i--;
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]!;
  }

  console.log(`\nМасив: [${arr.join(", ")}]`);
  console.log(`Сума елементів масиву: ${sum}`);
}

arraySum();
  