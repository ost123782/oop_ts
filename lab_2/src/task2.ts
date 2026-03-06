console.log("\n--- Завдання 4.2.1 (День тижня) ---");

const day: number = 6;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`День ${day} — робочий день`);
    break;
  case 6:
  case 7:
    console.log(`День ${day} — вихідний`);
    break;
  default:
    console.log("Помилка: номер дня має бути від 1 до 7");
}
