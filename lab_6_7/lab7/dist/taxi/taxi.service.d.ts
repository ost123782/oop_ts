export declare class TaxiService {
    run(input?: {
        fleetSize?: number;
    }): {
        fleetSize: number;
        initial: {
            brand: string;
            enginePower: number;
            price: number;
            year: number;
            driver: {
                name: string;
                age: number;
                experienceYears: number;
            };
        }[];
        final: {
            brand: string;
            enginePower: number;
            price: number;
            year: number;
            driver: {
                name: string;
                age: number;
                experienceYears: number;
            };
        }[];
        upskilled: string[];
        pickedCar: {
            brand: string;
            enginePower: number;
            price: number;
            year: number;
            driver: {
                name: string;
                age: number;
                experienceYears: number;
            };
        };
        actions: string[];
    };
    private snapshot;
}
