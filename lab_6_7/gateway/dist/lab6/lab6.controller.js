"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab6Controller = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const lab6_constants_1 = require("./lab6.constants");
const lab6_dto_1 = require("./lab6.dto");
let Lab6Controller = class Lab6Controller {
    client;
    constructor(client) {
        this.client = client;
    }
    personDemo(dto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('person.demo', dto));
    }
    phoneDemo() {
        return (0, rxjs_1.firstValueFrom)(this.client.send('phone.demo', {}));
    }
    carDemo() {
        return (0, rxjs_1.firstValueFrom)(this.client.send('car.demo', {}));
    }
    createLibraryCard(dto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('library-card.create', dto));
    }
    changeBooks(dto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('library-card.change-books', dto));
    }
    specialLibraryCard(dto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('library-card.special', dto));
    }
};
exports.Lab6Controller = Lab6Controller;
__decorate([
    (0, common_1.Post)('person/demo'),
    (0, swagger_1.ApiTags)('lab6/person'),
    (0, swagger_1.ApiOperation)({
        summary: 'Демонстрація класу Person',
        description: 'Створює два об’єкти: один через Person(), інший через Person(fullName, age). Викликає методи move() і talk().',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lab6_dto_1.PersonDto]),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "personDemo", null);
__decorate([
    (0, common_1.Post)('phone/demo'),
    (0, swagger_1.ApiTags)('lab6/phone'),
    (0, swagger_1.ApiOperation)({
        summary: 'Демонстрація класу Phone',
        description: 'Створює 3 екземпляри (через різні конструктори), демонструє receiveCall, getNumber, sendMessage та перевантажений receiveCall.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "phoneDemo", null);
__decorate([
    (0, common_1.Post)('car/demo'),
    (0, swagger_1.ApiTags)('lab6/car'),
    (0, swagger_1.ApiOperation)({
        summary: 'Демонстрація ієрархії Car → Sedan / Truck',
        description: 'Створює об’єкти Sedan та Truck, викликає gas() та brake() (абстрактний метод реалізовано в нащадках).',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "carDemo", null);
__decorate([
    (0, common_1.Post)('library-card'),
    (0, swagger_1.ApiTags)('lab6/library-card'),
    (0, swagger_1.ApiOperation)({
        summary: 'Створити бібліотечну картку (варіант 6)',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lab6_dto_1.CreateLibraryCardDto]),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "createLibraryCard", null);
__decorate([
    (0, common_1.Post)('library-card/change-books'),
    (0, swagger_1.ApiTags)('lab6/library-card'),
    (0, swagger_1.ApiOperation)({
        summary: 'Збільшити / зменшити кількість взятих книг',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lab6_dto_1.ChangeBooksDto]),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "changeBooks", null);
__decorate([
    (0, common_1.Post)('library-card/special'),
    (0, swagger_1.ApiTags)('lab6/library-card'),
    (0, swagger_1.ApiOperation)({
        summary: 'Спадкоємець LibraryCard з номером квитка та штрафом',
        description: 'Клас SpecialLibraryCard розширює LibraryCard двома полями (cardId, fine) та перевизначає метод виведення даних.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lab6_dto_1.SpecialLibraryCardDto]),
    __metadata("design:returntype", void 0)
], Lab6Controller.prototype, "specialLibraryCard", null);
exports.Lab6Controller = Lab6Controller = __decorate([
    (0, common_1.Controller)('lab6'),
    __param(0, (0, common_1.Inject)(lab6_constants_1.LAB6_CLIENT)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], Lab6Controller);
//# sourceMappingURL=lab6.controller.js.map