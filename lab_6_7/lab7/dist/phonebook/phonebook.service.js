"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonebookService = void 0;
const common_1 = require("@nestjs/common");
const INITIAL = [
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
let PhonebookService = class PhonebookService {
    demo() {
        const book = new Map(INITIAL);
        const actions = [];
        actions.push(`Початковий розмір: ${book.size}`);
        book.set('Малишко', '+380509876543');
        actions.push('put("Малишко", "+380509876543") — додано');
        const franko = book.get('Франко');
        actions.push(`get("Франко") → ${franko}`);
        const missing = book.get('Невідомий');
        actions.push(missing
            ? `get("Невідомий") → ${missing}`
            : 'У книзі відсутній такий абонент: Невідомий');
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
};
exports.PhonebookService = PhonebookService;
exports.PhonebookService = PhonebookService = __decorate([
    (0, common_1.Injectable)()
], PhonebookService);
//# sourceMappingURL=phonebook.service.js.map