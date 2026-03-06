console.log("\n--- Завдання 4.2.2 (Пора року) ---");

const month: number = 8;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log(`Місяць ${month} — зима`);
    break;
  case 3:
  case 4:
  case 5:
    console.log(`Місяць ${month} — весна`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(`Місяць ${month} — літо`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(`Місяць ${month} — осінь`);
    break;
  default:
    console.log("Помилка: номер місяця має бути від 1 до 12");
}
