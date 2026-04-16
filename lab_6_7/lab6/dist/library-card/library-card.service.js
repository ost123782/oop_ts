"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryCardService = void 0;
const common_1 = require("@nestjs/common");
const library_card_1 = require("./library-card");
let LibraryCardService = class LibraryCardService {
    create(input) {
        const card = new library_card_1.LibraryCard(input.name, input.surname, input.booksTaken);
        return { card: this.snapshot(card), printed: card.print() };
    }
    changeBooks(input) {
        const card = new library_card_1.LibraryCard(input.name, input.surname, input.booksTaken);
        const before = card.print();
        if (input.delta >= 0) {
            card.increaseBooks(input.delta);
        }
        else {
            card.decreaseBooks(-input.delta);
        }
        return {
            before,
            after: card.print(),
            card: this.snapshot(card),
        };
    }
    special(input) {
        const card = new library_card_1.SpecialLibraryCard(input.name, input.surname, input.booksTaken, input.cardId, input.fine);
        card.increaseBooks();
        return {
            card: {
                ...this.snapshot(card),
                cardId: card.cardId,
                fine: card.fine,
            },
            printed: card.print(),
        };
    }
    snapshot(card) {
        return {
            name: card.name,
            surname: card.surname,
            booksTaken: card.booksTaken,
        };
    }
};
exports.LibraryCardService = LibraryCardService;
exports.LibraryCardService = LibraryCardService = __decorate([
    (0, common_1.Injectable)()
], LibraryCardService);
//# sourceMappingURL=library-card.service.js.map