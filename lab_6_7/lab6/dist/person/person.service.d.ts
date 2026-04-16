export declare class PersonService {
    demo(input?: {
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
