console.log("\n--- Завдання 4.2.6 (Чверть години) ---");

const min: number = 42;

const quarter = Math.floor(min / 15);

console.log(`Хвилина: ${min}`);

switch (quarter) {
  case 0:
    console.log("Перша чверть години (0–14 хв)");
    break;
  case 1:
    console.log("Друга чверть години (15–29 хв)");
    break;
  case 2:
    console.log("Третя чверть години (30–44 хв)");
    break;
  case 3:
    console.log("Четверта чверть години (45–59 хв)");
    break;
  default:
    console.log("Помилка: значення має бути від 0 до 59");
}
