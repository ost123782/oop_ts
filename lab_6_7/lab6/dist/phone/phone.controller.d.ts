import { PhoneService } from './phone.service';
export declare class PhoneController {
    private readonly service;
    constructor(service: PhoneService);
    demo(): {
        phones: {
            number: string;
            model: string;
            weight: number;
        }[];
        actions: string[];
    };
}
