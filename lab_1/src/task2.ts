const w1 = "Генератори", w2 = "в", w3 = "TypeScript", w4 = "дозволяють", w5 = "елегантно";
const w6 = "керувати", w7 = "потоком", w8 = "даних", w9 = "та", w10 = "ітераціями.";

function* sentenceStream() {
  yield* [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];
}

console.log("\n--- Завдання 2 ---");
console.log(Array.from(sentenceStream()).join(" "));