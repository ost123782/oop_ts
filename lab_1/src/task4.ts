class Car {
  constructor(
    public horsepower: number,
    public engineVolume: number,
    public brand: string,
    public model: string,
    public year: number,
    public color: string,
    public maxSpeed: number,
  ) {}
}

function* getCars() {
  yield new Car(150, 1.6, "Toyota", "Corolla", 2020, "білий", 200);
  yield new Car(200, 2.0, "Honda", "Civic", 2021, "чорний", 220);
  yield new Car(250, 2.5, "BMW", "320i", 2019, "синій", 240);
  yield new Car(180, 1.8, "Mazda", "3", 2022, "червоний", 210);
  yield new Car(300, 3.0, "Audi", "A6", 2020, "сірий", 250);
  yield new Car(120, 1.4, "Volkswagen", "Golf", 2018, "зелений", 190);
  yield new Car(400, 4.0, "Mercedes", "E-Class", 2023, "чорний", 270);
  yield new Car(170, 1.5, "Hyundai", "Elantra", 2021, "білий", 205);
  yield new Car(220, 2.2, "Kia", "Optima", 2020, "синій", 230);
  yield new Car(350, 3.5, "Lexus", "IS", 2022, "сріблястий", 260);
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

const totalVolume = sumIterable(mapIterable(getCars(), (c) => c.engineVolume));
const totalHorsepower = sumIterable(mapIterable(getCars(), (c) => c.horsepower));

console.log("\n--- Завдання 4 ---");
console.log(`Сума об'ємів двигунів: ${totalVolume.toFixed(1)} л`);
console.log(`Сума потужностей: ${totalHorsepower} к.с.`);
