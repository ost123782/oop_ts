export declare class CarService {
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
