import { PersonService } from './person.service';
export declare class PersonController {
    private readonly service;
    constructor(service: PersonService);
    demo(payload: {
        fullName?: string;
        age?: number;
    }): {
        persons: {
            constructor: string;
            fullName: string;
            age: number;
        }[];
        actions: string[];
    };
}
