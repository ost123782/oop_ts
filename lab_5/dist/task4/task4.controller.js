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
exports.Task4Controller = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task4_service_1 = require("./task4.service");
const task4_dto_1 = require("./task4.dto");
let Task4Controller = class Task4Controller {
    task4Service;
    constructor(task4Service) {
        this.task4Service = task4Service;
    }
    findMax(dto) {
        const max = this.task4Service.findMax(dto.array);
        return { array: dto.array, max };
    }
};
exports.Task4Controller = Task4Controller;
__decorate([
    (0, common_1.Post)('find-max'),
    (0, swagger_1.ApiOperation)({
        summary: 'Знайти найбільше число з масиву',
        description: 'Приймає масив чисел і повертає найбільший елемент.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Найбільше число знайдено',
        type: task4_dto_1.FindMaxResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Некоректні вхідні дані' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task4_dto_1.FindMaxDto]),
    __metadata("design:returntype", task4_dto_1.FindMaxResponseDto)
], Task4Controller.prototype, "findMax", null);
exports.Task4Controller = Task4Controller = __decorate([
    (0, swagger_1.ApiTags)('task4'),
    (0, common_1.Controller)('task4'),
    __metadata("design:paramtypes", [task4_service_1.Task4Service])
], Task4Controller);
//# sourceMappingURL=task4.controller.js.map