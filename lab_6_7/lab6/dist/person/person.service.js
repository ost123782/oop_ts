"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const person_1 = require("./person");
let PersonService = class PersonService {
    demo(input) {
        const p1 = new person_1.Person();
        const p2 = new person_1.Person(input?.fullName ?? 'Іван Петренко', input?.age ?? 25);
        return {
            persons: [
                { constructor: 'Person()', fullName: p1.fullName, age: p1.age },
                {
                    constructor: 'Person(fullName, age)',
                    fullName: p2.fullName,
                    age: p2.age,
                },
            ],
            actions: [p1.talk(), p1.move(), p2.talk(), p2.move()],
        };
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)()
], PersonService);
//# sourceMappingURL=person.service.js.map