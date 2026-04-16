"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = exports.Sedan = exports.Car = void 0;
class Car {
    model;
    color;
    maxSpeed;
    constructor(model, color, maxSpeed) {
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    gas() {
        return `${this.model}: Газуємо!`;
    }
}
exports.Car = Car;
class Sedan extends Car {
    brake() {
        return `Седан ${this.model} плавно гальмує зі швидкості ${this.maxSpeed} км/год`;
    }
}
exports.Sedan = Sedan;
class Truck extends Car {
    loadCapacityTons;
    constructor(model, color, maxSpeed, loadCapacityTons) {
        super(model, color, maxSpeed);
        this.loadCapacityTons = loadCapacityTons;
    }
    brake() {
        return `Вантажівка ${this.model} (${this.loadCapacityTons} т) довго гальмує`;
    }
}
exports.Truck = Truck;
//# sourceMappingURL=car.js.map