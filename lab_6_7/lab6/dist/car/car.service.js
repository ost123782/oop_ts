"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const car_1 = require("./car");
let CarService = class CarService {
    demo() {
        const sedan = new car_1.Sedan('Toyota Camry', 'білий', 220);
        const truck = new car_1.Truck('MAN TGX', 'червоний', 130, 20);
        return {
            cars: [
                {
                    type: 'Sedan',
                    model: sedan.model,
                    color: sedan.color,
                    maxSpeed: sedan.maxSpeed,
                },
                {
                    type: 'Truck',
                    model: truck.model,
                    color: truck.color,
                    maxSpeed: truck.maxSpeed,
                    loadCapacityTons: truck.loadCapacityTons,
                },
            ],
            actions: [sedan.gas(), sedan.brake(), truck.gas(), truck.brake()],
        };
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)()
], CarService);
//# sourceMappingURL=car.service.js.map