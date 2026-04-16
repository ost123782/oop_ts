"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialLibraryCard = exports.LibraryCard = void 0;
class LibraryCard {
    name;
    surname;
    booksTaken;
    constructor(name, surname, booksTaken) {
        this.name = name;
        this.surname = surname;
        this.booksTaken = booksTaken;
    }
    input(name, surname, booksTaken) {
        this.name = name;
        this.surname = surname;
        this.booksTaken = booksTaken;
    }
    increaseBooks(by = 1) {
        this.booksTaken += by;
    }
    decreaseBooks(by = 1) {
        this.booksTaken = Math.max(0, this.booksTaken - by);
    }
    print() {
        return `Читач: ${this.surname} ${this.name}, взято книг: ${this.booksTaken}`;
    }
}
exports.LibraryCard = LibraryCard;
class SpecialLibraryCard extends LibraryCard {
    cardId;
    fine;
    constructor(name, surname, booksTaken, cardId, fine) {
        super(name, surname, booksTaken);
        this.cardId = cardId;
        this.fine = fine;
    }
    print() {
        return (`Квиток №${this.cardId} — ${this.surname} ${this.name}, ` +
            `книг: ${this.booksTaken}, штраф: ${this.fine.toFixed(2)} грн`);
    }
}
exports.SpecialLibraryCard = SpecialLibraryCard;
//# sourceMappingURL=library-card.js.map