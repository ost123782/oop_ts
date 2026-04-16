export declare class LibraryCardService {
    create(input: {
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
    changeBooks(input: {
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
    special(input: {
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
    private snapshot;
}
