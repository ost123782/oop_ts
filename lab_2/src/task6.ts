console.log("\n--- Завдання 4.2.5 (Розклад пар) ---");

const pairNumber: number = 3;

console.log(`Пара №${pairNumber}:`);

switch (pairNumber) {
  case 1:
    console.log("Математичний аналіз");
    break;
  case 2:
    console.log("Об'єктно-орієнтоване програмування");
    break;
  case 3:
    console.log("Фізика");
    break;
  case 4:
    console.log("Англійська мова");
    break;
  default:
    console.log("Помилка: номер пари має бути від 1 до 4");
}
