console.log("--- Завдання 1: Вивести фразу 50 разів ---");

const phrase = "Львівська Політехніка — найкращий університет!";

console.log("\n--- Цикл for ---");
for (let i = 1; i <= 50; i++) {
  console.log(`${i}. ${phrase}`);
}

console.log("\n--- Цикл while ---");
let j = 1;
while (j <= 50) {
  console.log(`${j}. ${phrase}`);
  j++;
}
