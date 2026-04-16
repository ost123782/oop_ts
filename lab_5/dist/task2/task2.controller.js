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
exports.Task2Controller = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task2_service_1 = require("./task2.service");
const task2_dto_1 = require("./task2.dto");
let Task2Controller = class Task2Controller {
    task2Service;
    constructor(task2Service) {
        this.task2Service = task2Service;
    }
    findMin(dto) {
        const { min, steps } = this.task2Service.findMin(dto.a, dto.b, dto.c);
        return { a: dto.a, b: dto.b, c: dto.c, min, steps };
    }
};
exports.Task2Controller = Task2Controller;
__decorate([
    (0, common_1.Post)('find-min'),
    (0, swagger_1.ApiOperation)({
        summary: 'Знайти найменше з трьох чисел',
        description: 'Приймає три числа, повертає найменше. Використовує генератор для покрокового обчислення мінімуму.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Найменше число знайдено',
        type: task2_dto_1.FindMinResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Некоректні вхідні дані' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task2_dto_1.FindMinDto]),
    __metadata("design:returntype", task2_dto_1.FindMinResponseDto)
], Task2Controller.prototype, "findMin", null);
exports.Task2Controller = Task2Controller = __decorate([
    (0, swagger_1.ApiTags)('task2'),
    (0, common_1.Controller)('task2'),
    __metadata("design:paramtypes", [task2_service_1.Task2Service])
], Task2Controller);
//# sourceMappingURL=task2.controller.js.map