import { Injectable } from '@nestjs/common';
import { LibraryCard, SpecialLibraryCard } from './library-card';

@Injectable()
export class LibraryCardService {
  create(input: { name: string; surname: string; booksTaken: number }) {
    const card = new LibraryCard(input.name, input.surname, input.booksTaken);
    return { card: this.snapshot(card), printed: card.print() };
  }

  changeBooks(input: {
    name: string;
    surname: string;
    booksTaken: number;
    delta: number;
  }) {
    const card = new LibraryCard(input.name, input.surname, input.booksTaken);
    const before = card.print();
    if (input.delta >= 0) {
      card.increaseBooks(input.delta);
    } else {
      card.decreaseBooks(-input.delta);
    }
    return {
      before,
      after: card.print(),
      card: this.snapshot(card),
    };
  }

  special(input: {
    name: string;
    surname: string;
    booksTaken: number;
    cardId: string;
    fine: number;
  }) {
    const card = new SpecialLibraryCard(
      input.name,
      input.surname,
      input.booksTaken,
      input.cardId,
      input.fine,
    );
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

  private snapshot(card: LibraryCard) {
    return {
      name: card.name,
      surname: card.surname,
      booksTaken: card.booksTaken,
    };
  }
}
