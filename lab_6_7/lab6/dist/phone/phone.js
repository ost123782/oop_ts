"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    number;
    model;
    weight;
    constructor(number, model, weight) {
        this.number = number ?? '';
        this.model = model ?? '';
        this.weight = weight ?? 0;
    }
    receiveCall(caller, phoneNumber) {
        if (phoneNumber !== undefined) {
            return `Дзвонить ${caller} (${phoneNumber})`;
        }
        return `Дзвонить ${caller}`;
    }
    getNumber() {
        return this.number;
    }
    sendMessage(...numbers) {
        return numbers.map((n) => `Повідомлення надіслано на номер ${n}`);
    }
}
exports.Phone = Phone;
//# sourceMappingURL=phone.js.map