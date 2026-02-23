const num: number = 412;

function* extractDigits(n: number) {
  yield n % 10;
  yield Math.floor(n / 10) % 10;
  yield Math.floor(n / 100);
}

function* reverseNumber(n: number) {
  let multiplier = 100;
  for (const digit of extractDigits(n)) {
    yield digit * multiplier;
    multiplier /= 10;
  }
}

let reversed = 0;
for (const part of reverseNumber(num)) {
  reversed += part;
}

console.log("\n--- Завдання 5 ---");
console.log(`Початкове число: ${num}`);
console.log(`Реверсоване число: ${reversed}`);
