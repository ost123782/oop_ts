export declare class Driver {
    name: string;
    age: number;
    experienceYears: number;
    constructor(name: string, age: number, experienceYears: number);
}
export declare class Car {
    brand: string;
    enginePower: number;
    driver: Driver;
    price: number;
    year: number;
    constructor(brand: string, enginePower: number, driver: Driver, price: number, year: number);
}
export declare class TaxiHelper {
    static pickRandom(cars: Car[]): Car;
    static dispatch(car: Car): string;
    static arrive(car: Car): string;
}
