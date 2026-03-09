console.log("\n--- Завдання 2: Робота з масивом [2,17,13,6,22,31,45,66,100,-18] ---");

const arr: number[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log("\n--- Перебір циклом while ---");
let i = 0;
while (i < arr.length) {
  console.log(`arr[${i}] = ${arr[i]}`);
  i++;
}

console.log("\n--- Перебір циклом for ---");
for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}] = ${arr[i]}`);
}

console.log("\n--- Цикл while: числа з непарним індексом ---");
let j = 0;
while (j < arr.length) {
  if (j % 2 !== 0) {
    console.log(`arr[${j}] = ${arr[j]}`);
  }
  j++;
}

console.log("\n--- Цикл for: числа з парним індексом ---");
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(`arr[${i}] = ${arr[i]}`);
  }
}

console.log("\n--- Масив у зворотньому порядку ---");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(`arr[${i}] = ${arr[i]}`);
}
