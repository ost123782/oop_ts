const n1 = 10, n2 = 5, n3 = 2, n4 = 8, n5 = 4;
const n6 = 1, n7 = 3, n8 = 7, n9 = 6, n10 = 9;

function* getNumbers() {
  yield* [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
}

const reduceIterable = (iterable: Iterable<number>, reducer: (a: number, b: number) => number, initial?: number) => {
  const iterator = iterable[Symbol.iterator]();
  let result = initial !== undefined ? initial : iterator.next().value;
  
  for (const value of iterator) {
    result = reducer(result, value);
  }
  return result;
};

console.log("--- Завдання 1 ---");
console.log(`Сума: ${reduceIterable(getNumbers(), (a, b) => a + b)}`);
console.log(`Різниця: ${reduceIterable(getNumbers(), (a, b) => a - b)}`);
console.log(`Добуток: ${reduceIterable(getNumbers(), (a, b) => a * b)}`);
console.log(`Частка: ${reduceIterable(getNumbers(), (a, b) => a / b)}`);