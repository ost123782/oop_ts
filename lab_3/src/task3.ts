console.log("\n--- Завдання 3: Години та хвилини (цикл while) ---");

let h = 0;
while (h <= 2) {
  let m = 0;
  while (m <= 59) {
    console.log(`${h} h ${m} min`);
    m++;
  }
  h++;
}
