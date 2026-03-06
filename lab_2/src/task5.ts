import promptSync from 'prompt-sync';

console.log("\n--- Завдання 4.2.4 (Текстове меню) ---");

const prompt = promptSync();

console.log("Меню:");
console.log("1 — Привітання");
console.log("2 — Запрошення до роботи");
console.log("3 — Завершити роботу");

const menuChoice: number = Number(prompt("Введіть номер меню (1-3): "));

console.log(`Вибір: ${menuChoice}`);

switch (menuChoice) {
  case 1:
    console.log("Вітаємо вас! Раді бачити!");
    break;
  case 2:
    console.log("Запрошуємо вас до роботи на комп'ютері!");
    break;
  case 3:
    console.log("Дякуємо за роботу. До побачення!");
    break;
  default:
    console.log("Помилка: оберіть пункт від 1 до 3");
}
