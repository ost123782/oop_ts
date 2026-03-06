console.log("\n--- Завдання 4: Години, хвилини та секунди ---");

for (let h = 0; h <= 2; h++) {
  for (let m = 0; m <= 59; m++) {
    for (let s = 0; s <= 59; s++) {
      console.log(`${h} h ${m} min ${s} sec`);
    }
  }
}
