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
exports.Task3Controller = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task3_service_1 = require("./task3.service");
const task3_dto_1 = require("./task3.dto");
let Task3Controller = class Task3Controller {
    task3Service;
    constructor(task3Service) {
        this.task3Service = task3Service;
    }
    printArray(dto) {
        const formatted = this.task3Service.printArray(dto.array);
        return { array: dto.array, formatted, length: dto.array.length };
    }
};
exports.Task3Controller = Task3Controller;
__decorate([
    (0, common_1.Post)('print-array'),
    (0, swagger_1.ApiOperation)({
        summary: 'Вивести масив',
        description: 'Приймає масив чисел і повертає його у форматованому рядковому вигляді.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Масив відформатовано успішно',
        type: task3_dto_1.PrintArrayResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Некоректні вхідні дані' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task3_dto_1.PrintArrayDto]),
    __metadata("design:returntype", task3_dto_1.PrintArrayResponseDto)
], Task3Controller.prototype, "printArray", null);
exports.Task3Controller = Task3Controller = __decorate([
    (0, swagger_1.ApiTags)('task3'),
    (0, common_1.Controller)('task3'),
    __metadata("design:paramtypes", [task3_service_1.Task3Service])
], Task3Controller);
//# sourceMappingURL=task3.controller.js.map