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
exports.Lab7Controller = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const lab7_constants_1 = require("./lab7.constants");
const lab7_dto_1 = require("./lab7.dto");
let Lab7Controller = class Lab7Controller {
    client;
    constructor(client) {
        this.client = client;
    }
    taxiRun(dto) {
        return (0, rxjs_1.firstValueFrom)(this.client.send('taxi.run', dto));
    }
    phonebookDemo() {
        return (0, rxjs_1.firstValueFrom)(this.client.send('phonebook.demo', {}));
    }
};
exports.Lab7Controller = Lab7Controller;
__decorate([
    (0, common_1.Post)('taxi/run'),
    (0, swagger_1.ApiTags)('lab7/taxi'),
    (0, swagger_1.ApiOperation)({
        summary: 'Повний сценарій сервісу таксі (Завдання 1)',
        description: 'Генерує автопарк, ремонтує половину, підвищує потужність/ціну кожній другій, ' +
            'відправляє водіїв на курси (якщо treba), випадково вибирає авто та відправляє водія на замовлення.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lab7_dto_1.TaxiRunDto]),
    __metadata("design:returntype", void 0)
], Lab7Controller.prototype, "taxiRun", null);
__decorate([
    (0, common_1.Post)('phonebook/demo'),
    (0, swagger_1.ApiTags)('lab7/phonebook'),
    (0, swagger_1.ApiOperation)({
        summary: 'Демонстрація телефонної книги (Завдання 2)',
        description: 'Заповнює книгу 10+ записами, демонструє put/get/remove/containsKey/containsValue/size, ' +
            'шукає абонента за прізвищем, видаляє довільний запис.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Lab7Controller.prototype, "phonebookDemo", null);
exports.Lab7Controller = Lab7Controller = __decorate([
    (0, common_1.Controller)('lab7'),
    __param(0, (0, common_1.Inject)(lab7_constants_1.LAB7_CLIENT)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], Lab7Controller);
//# sourceMappingURL=lab7.controller.js.map