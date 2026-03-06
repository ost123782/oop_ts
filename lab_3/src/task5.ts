import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("\n--- Завдання 5: Табулювання функції (Варіант 6) ---");
console.log("Функція: 2 * x * sin(x) - cos(x)");
console.log("Проміжок: [-2; 2], крок: 0.2\n");

const lowerBound = Number(prompt("Введіть нижню границю діапазону: "));
const upperBound = Number(prompt("Введіть верхню границю діапазону: "));

const a = -2;
const b = 2;
const step = 0.2;

function f(x: number): number {
  return 2 * x * Math.sin(x) - Math.cos(x);
}

console.log("\n--- Спосіб 1: цикл for ---");
let countFor = 0;
console.log("   x\t\t   y");
for (let x = a; x <= b; x += step) {
  const y = f(x);
  console.log(`${x.toFixed(1)}\t\t${y.toFixed(6)}`);
  if (y >= lowerBound && y <= upperBound) {
    countFor++;
  }
}

if (countFor > 0) {
  console.log(`\nКількість значень у діапазоні [${lowerBound}; ${upperBound}]: ${countFor}`);
} else {
  console.log(`\nЗначень функції у діапазоні [${lowerBound}; ${upperBound}] не знайдено.`);
}

console.log("\n--- Спосіб 2: цикл while ---");
let countWhile = 0;
let x = a;
console.log("   x\t\t   y");
while (x <= b) {
  const y = f(x);
  console.log(`${x.toFixed(1)}\t\t${y.toFixed(6)}`);
  if (y >= lowerBound && y <= upperBound) {
    countWhile++;
  }
  x += step;
}

if (countWhile > 0) {
  console.log(`\nКількість значень у діапазоні [${lowerBound}; ${upperBound}]: ${countWhile}`);
} else {
  console.log(`\nЗначень функції у діапазоні [${lowerBound}; ${upperBound}] не знайдено.`);
}
