console.log("\n--- Завдання 4: Зміна знаку непарних елементів масиву ---");

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Масив до зміни:");
console.log(arr.join(", "));

for (let i = 0; i < arr.length; i++) {
  if (arr[i]! % 2 !== 0) {
    arr[i] = -arr[i]!;
  }
}

console.log("\nМасив після зміни знаку непарних елементів:");
console.log(arr.join(", "));
