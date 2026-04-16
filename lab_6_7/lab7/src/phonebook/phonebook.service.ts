import { Injectable } from '@nestjs/common';

const INITIAL: Array<[string, string]> = [
  ['Шевченко', '+380501112233'],
  ['Франко', '+380672223344'],
  ['Леся', '+380933334455'],
  ['Сковорода', '+380504445566'],
  ['Гончар', '+380675556677'],
  ['Костенко', '+380936667788'],
  ['Стус', '+380507778899'],
  ['Винниченко', '+380678889900'],
  ['Хвильовий', '+380939990011'],
  ['Тичина', '+380501010101'],
  ['Рильський', '+380672020202'],
];

@Injectable()
export class PhonebookService {
  demo() {
    const book = new Map<string, string>(INITIAL);
    const actions: string[] = [];

    actions.push(`Початковий розмір: ${book.size}`);

    book.set('Малишко', '+380509876543');
    actions.push('put("Малишко", "+380509876543") — додано');

    const franko = book.get('Франко');
    actions.push(`get("Франко") → ${franko}`);

    const missing = book.get('Невідомий');
    actions.push(
      missing
        ? `get("Невідомий") → ${missing}`
        : 'У книзі відсутній такий абонент: Невідомий',
    );

    actions.push(`containsKey("Стус") → ${book.has('Стус')}`);

    const searchValue = '+380501112233';
    const hasValue = Array.from(book.values()).includes(searchValue);
    actions.push(`containsValue("${searchValue}") → ${hasValue}`);

    const removed = book.delete('Гончар');
    actions.push(`remove("Гончар") → ${removed}`);

    const entries = Array.from(book.entries()).map(([surname, phone]) => ({
      surname,
      phone,
    }));

    actions.push(`Остаточний розмір: ${book.size}`);

    return {
      entries,
      actions,
      size: book.size,
    };
  }
}
