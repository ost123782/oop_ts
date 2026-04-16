export declare class LibraryCard {
    name: string;
    surname: string;
    booksTaken: number;
    constructor(name: string, surname: string, booksTaken: number);
    input(name: string, surname: string, booksTaken: number): void;
    increaseBooks(by?: number): void;
    decreaseBooks(by?: number): void;
    print(): string;
}
export declare class SpecialLibraryCard extends LibraryCard {
    cardId: string;
    fine: number;
    constructor(name: string, surname: string, booksTaken: number, cardId: string, fine: number);
    print(): string;
}
