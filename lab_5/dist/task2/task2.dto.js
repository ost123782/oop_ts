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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMinResponseDto = exports.FindMinDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FindMinDto {
    a;
    b;
    c;
}
exports.FindMinDto = FindMinDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Перше число', example: 15 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindMinDto.prototype, "a", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Друге число', example: 7 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindMinDto.prototype, "b", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Третє число', example: 23 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindMinDto.prototype, "c", void 0);
class FindMinResponseDto {
    a;
    b;
    c;
    min;
    steps;
}
exports.FindMinResponseDto = FindMinResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Перше число', example: 15 }),
    __metadata("design:type", Number)
], FindMinResponseDto.prototype, "a", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Друге число', example: 7 }),
    __metadata("design:type", Number)
], FindMinResponseDto.prototype, "b", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Третє число', example: 23 }),
    __metadata("design:type", Number)
], FindMinResponseDto.prototype, "c", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Найменше число', example: 7 }),
    __metadata("design:type", Number)
], FindMinResponseDto.prototype, "min", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Проміжні значення мінімуму (генератор)',
        example: [15, 7, 7],
        type: [Number],
    }),
    __metadata("design:type", Array)
], FindMinResponseDto.prototype, "steps", void 0);
//# sourceMappingURL=task2.dto.js.map