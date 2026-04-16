"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
const common_1 = require("@nestjs/common");
const phone_1 = require("./phone");
let PhoneService = class PhoneService {
    demo() {
        const p1 = new phone_1.Phone('+380501112233', 'iPhone 15', 171);
        const p2 = new phone_1.Phone('+380671234567', 'Samsung Galaxy S24');
        const p3 = new phone_1.Phone();
        p3.number = '+380931010101';
        p3.model = 'Xiaomi Redmi';
        p3.weight = 190;
        const phones = [p1, p2, p3].map((p) => ({
            number: p.number,
            model: p.model,
            weight: p.weight,
        }));
        const actions = [];
        actions.push(p1.receiveCall('Іван'));
        actions.push(p2.receiveCall('Олена', '+380971234567'));
        actions.push(`getNumber() → ${p3.getNumber()}`);
        actions.push(...p1.sendMessage(p2.getNumber(), p3.getNumber(), '+380931112244'));
        return { phones, actions };
    }
};
exports.PhoneService = PhoneService;
exports.PhoneService = PhoneService = __decorate([
    (0, common_1.Injectable)()
], PhoneService);
//# sourceMappingURL=phone.service.js.map