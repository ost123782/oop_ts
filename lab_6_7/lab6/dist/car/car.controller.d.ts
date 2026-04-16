import { CarService } from './car.service';
export declare class CarController {
    private readonly service;
    constructor(service: CarService);
    demo(): {
        cars: ({
            type: string;
            model: string;
            color: string;
            maxSpeed: number;
            loadCapacityTons?: undefined;
        } | {
            type: string;
            model: string;
            color: string;
            maxSpeed: number;
            loadCapacityTons: number;
        })[];
        actions: string[];
    };
}
