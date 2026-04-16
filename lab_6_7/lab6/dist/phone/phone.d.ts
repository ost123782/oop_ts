export declare class Phone {
    number: string;
    model: string;
    weight: number;
    constructor();
    constructor(number: string, model: string);
    constructor(number: string, model: string, weight: number);
    receiveCall(caller: string): string;
    receiveCall(caller: string, phoneNumber: string): string;
    getNumber(): string;
    sendMessage(...numbers: string[]): string[];
}
