import { PhonebookService } from './phonebook.service';
export declare class PhonebookController {
    private readonly service;
    constructor(service: PhonebookService);
    demo(): {
        entries: {
            surname: string;
            phone: string;
        }[];
        actions: string[];
        size: number;
    };
}
