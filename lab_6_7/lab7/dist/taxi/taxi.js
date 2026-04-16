"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxiHelper = exports.Car = exports.Driver = void 0;
class Driver {
    name;
    age;
    experienceYears;
    constructor(name, age, experienceYears) {
        this.name = name;
        this.age = age;
        this.experienceYears = experienceYears;
    }
}
exports.Driver = Driver;
class Car {
    brand;
    enginePower;
    driver;
    price;
    year;
    constructor(brand, enginePower, driver, price, year) {
        this.brand = brand;
        this.enginePower = enginePower;
        this.driver = driver;
        this.price = price;
        this.year = year;
    }
}
exports.Car = Car;
class TaxiHelper {
    static pickRandom(cars) {
        const idx = Math.floor(Math.random() * cars.length);
        return cars[idx];
    }
    static dispatch(car) {
        return `Автомобіль марки ${car.brand} з водієм ${car.driver.name} виїхав за вами`;
    }
    static arrive(car) {
        return `Водій ${car.driver.name} прибув на місце`;
    }
}
exports.TaxiHelper = TaxiHelper;
//# sourceMappingURL=taxi.js.map