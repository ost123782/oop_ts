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
exports.Task1Controller = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const task1_service_1 = require("./task1.service");
const task1_dto_1 = require("./task1.dto");
let Task1Controller = class Task1Controller {
    task1Service;
    constructor(task1Service) {
        this.task1Service = task1Service;
    }
    calculateArea(dto) {
        const area = this.task1Service.trapezoidArea(dto.a, dto.b, dto.h);
        return { a: dto.a, b: dto.b, h: dto.h, area };
    }
};
exports.Task1Controller = Task1Controller;
__decorate([
    (0, common_1.Post)('trapezoid-area'),
    (0, swagger_1.ApiOperation)({
        summary: 'Обчислити площу трапеції',
        description: 'Обчислює площу трапеції за формулою S = ((a + b) / 2) * h, де a і b — основи, h — висота.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Площу трапеції обчислено успішно',
        type: task1_dto_1.TrapezoidAreaResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Некоректні вхідні дані' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task1_dto_1.TrapezoidAreaDto]),
    __metadata("design:returntype", task1_dto_1.TrapezoidAreaResponseDto)
], Task1Controller.prototype, "calculateArea", null);
exports.Task1Controller = Task1Controller = __decorate([
    (0, swagger_1.ApiTags)('task1'),
    (0, common_1.Controller)('task1'),
    __metadata("design:paramtypes", [task1_service_1.Task1Service])
], Task1Controller);
//# sourceMappingURL=task1.controller.js.map