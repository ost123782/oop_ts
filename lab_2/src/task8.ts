console.log("\n--- Завдання 4.2.7 (Калькулятор) ---");

const a: number = 15;
const b: number = 7;
const operation: number = 1;

console.log("Меню операцій:");
console.log("1 — Добуток");
console.log("2 — Сума");
console.log("3 — Різниця");
console.log(`Числа: a = ${a}, b = ${b}`);
console.log(`Вибір операції: ${operation}`);

switch (operation) {
  case 1:
    console.log(`Добуток: ${a} * ${b} = ${a * b}`);
    break;
  case 2:
    console.log(`Сума: ${a} + ${b} = ${a + b}`);
    break;
  case 3:
    console.log(`Різниця: ${a} - ${b} = ${a - b}`);
    break;
  default:
    console.log("Помилка: оберіть операцію від 1 до 3");
}
