class User {
  constructor(
    public id: number,
    public age: number,
    public name: string,
    public surname: string,
    public weight: number,
    public height: number,
  ) {}
}

function* getUsers() {
  yield new User(1, 22, "Олександр", "Петренко", 75.5, 180.2);
  yield new User(2, 30, "Марія", "Іваненко", 58.3, 165.0);
  yield new User(3, 19, "Дмитро", "Коваленко", 82.1, 175.5);
  yield new User(4, 45, "Ольга", "Шевченко", 63.7, 170.3);
  yield new User(5, 28, "Андрій", "Бондаренко", 90.0, 185.1);
  yield new User(6, 35, "Наталія", "Кравченко", 55.2, 162.4);
  yield new User(7, 21, "Ігор", "Мельник", 78.9, 178.0);
  yield new User(8, 40, "Тетяна", "Ткаченко", 67.4, 168.7);
  yield new User(9, 26, "Сергій", "Олійник", 85.6, 182.3);
  yield new User(10, 33, "Юлія", "Лисенко", 52.8, 160.5);
}

function* mapIterable<T, U>(iterable: Iterable<T>, fn: (item: T) => U) {
  for (const item of iterable) {
    yield fn(item);
  }
}

const sumIterable = (iterable: Iterable<number>): number => {
  let total = 0;
  for (const value of iterable) {
    total += value;
  }
  return total;
};

const totalAge = sumIterable(mapIterable(getUsers(), (u) => u.age));
const totalWeight = sumIterable(mapIterable(getUsers(), (u) => u.weight));
const totalHeight = sumIterable(mapIterable(getUsers(), (u) => u.height));

console.log("\n--- Завдання 3 ---");
console.log(`Сума віку всіх користувачів: ${totalAge}`);
console.log(`Сума ваги всіх користувачів: ${totalWeight.toFixed(1)}`);
console.log(`Сума зросту всіх користувачів: ${totalHeight.toFixed(1)}`);
