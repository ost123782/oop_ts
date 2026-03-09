console.log("--- Завдання 1: Заповнення масивів парними та непарними числами ---");

const evenArray: number[] = [];
const oddArray: number[] = [];

for (let i = 0; i < 50; i++) {
  evenArray.push((i + 1) * 2);
}

for (let i = 0; i < 50; i++) {
  oddArray.push(i * 2 + 1);
}

console.log("\nМасив з 50 парних чисел:");
console.log(evenArray.join(", "));

console.log("\nМасив з 50 непарних чисел:");
console.log(oddArray.join(", "));
