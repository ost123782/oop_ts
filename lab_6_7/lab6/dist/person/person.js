"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    fullName;
    age;
    constructor(fullName, age) {
        this.fullName = fullName ?? 'Unknown';
        this.age = age ?? 0;
    }
    move() {
        return `${this.fullName} рухається`;
    }
    talk() {
        return `Такий-то Person ${this.fullName} говорить`;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map