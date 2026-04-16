import { LibraryCardService } from './library-card.service';
export declare class LibraryCardController {
    private readonly service;
    constructor(service: LibraryCardService);
    create(payload: {
        name: string;
        surname: string;
        booksTaken: number;
    }): {
        card: {
            name: string;
            surname: string;
            booksTaken: number;
        };
        printed: string;
    };
    changeBooks(payload: {
        name: string;
        surname: string;
        booksTaken: number;
        delta: number;
    }): {
        before: string;
        after: string;
        card: {
            name: string;
            surname: string;
            booksTaken: number;
        };
    };
    special(payload: {
        name: string;
        surname: string;
        booksTaken: number;
        cardId: string;
        fine: number;
    }): {
        card: {
            cardId: string;
            fine: number;
            name: string;
            surname: string;
            booksTaken: number;
        };
        printed: string;
    };
}
