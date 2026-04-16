export declare class CreateLibraryCardDto {
    name: string;
    surname: string;
    booksTaken: number;
}
export declare class ChangeBooksDto {
    name: string;
    surname: string;
    booksTaken: number;
    delta: number;
}
export declare class SpecialLibraryCardDto {
    name: string;
    surname: string;
    booksTaken: number;
    cardId: string;
    fine: number;
}
export declare class PersonDto {
    fullName?: string;
    age?: number;
}
