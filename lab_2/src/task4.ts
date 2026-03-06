console.log("\n--- Завдання 4.2.3 (Кількість днів у місяці) ---");

const monthNum: number = 2;
const isLeapYear: boolean = true;

switch (monthNum) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log(`Місяць ${monthNum} має 31 день`);
    break;
  case 4: case 6: case 9: case 11:
    console.log(`Місяць ${monthNum} має 30 днів`);
    break;
  case 2:
    const days = isLeapYear ? 29 : 28;
    console.log(`Місяць ${monthNum} має ${days} днів (${isLeapYear ? "високосний" : "невисокосний"} рік)`);
    break;
  default:
    console.log("Помилка: номер місяця має бути від 1 до 12");
}
