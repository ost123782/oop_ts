export declare abstract class Car {
    model: string;
    color: string;
    maxSpeed: number;
    constructor(model: string, color: string, maxSpeed: number);
    gas(): string;
    abstract brake(): string;
}
export declare class Sedan extends Car {
    brake(): string;
}
export declare class Truck extends Car {
    loadCapacityTons: number;
    constructor(model: string, color: string, maxSpeed: number, loadCapacityTons: number);
    brake(): string;
}
