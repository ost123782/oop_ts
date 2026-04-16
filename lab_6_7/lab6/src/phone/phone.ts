export class Phone {
  number: string;
  model: string;
  weight: number;

  constructor();
  constructor(number: string, model: string);
  constructor(number: string, model: string, weight: number);
  constructor(number?: string, model?: string, weight?: number) {
    this.number = number ?? '';
    this.model = model ?? '';
    this.weight = weight ?? 0;
  }

  receiveCall(caller: string): string;
  receiveCall(caller: string, phoneNumber: string): string;
  receiveCall(caller: string, phoneNumber?: string): string {
    if (phoneNumber !== undefined) {
      return `Дзвонить ${caller} (${phoneNumber})`;
    }
    return `Дзвонить ${caller}`;
  }

  getNumber(): string {
    return this.number;
  }

  sendMessage(...numbers: string[]): string[] {
    return numbers.map((n) => `Повідомлення надіслано на номер ${n}`);
  }
}
