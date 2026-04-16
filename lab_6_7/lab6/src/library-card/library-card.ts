export class LibraryCard {
  constructor(
    public name: string,
    public surname: string,
    public booksTaken: number,
  ) {}

  input(name: string, surname: string, booksTaken: number): void {
    this.name = name;
    this.surname = surname;
    this.booksTaken = booksTaken;
  }

  increaseBooks(by = 1): void {
    this.booksTaken += by;
  }

  decreaseBooks(by = 1): void {
    this.booksTaken = Math.max(0, this.booksTaken - by);
  }

  print(): string {
    return `Читач: ${this.surname} ${this.name}, взято книг: ${this.booksTaken}`;
  }
}

export class SpecialLibraryCard extends LibraryCard {
  constructor(
    name: string,
    surname: string,
    booksTaken: number,
    public cardId: string,
    public fine: number,
  ) {
    super(name, surname, booksTaken);
  }

  override print(): string {
    return (
      `Квиток №${this.cardId} — ${this.surname} ${this.name}, ` +
      `книг: ${this.booksTaken}, штраф: ${this.fine.toFixed(2)} грн`
    );
  }
}
