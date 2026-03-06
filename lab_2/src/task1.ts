function computeF(x: number): number {
  if (x <= 0.5) {
    return Math.abs(3 - Math.tan(x));
  } else if (x > 0.5 && x < 1) {
    return Math.pow(2 - Math.pow(x, 3), 1 / 5);
  } else {
    return Math.sin(x) - (1 / 3) * Math.pow(Math.cos(x), 5);
  }
}

console.log("--- Завдання 4.1 (Варіант 6) ---");

const testValues = [-1, 0, 0.5, 0.7, 1, 2, 5];

for (const x of testValues) {
  const result = computeF(x);
  console.log(`f(${x}) = ${result.toFixed(6)}`);
}
