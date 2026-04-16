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
exports.TrapezoidAreaResponseDto = exports.TrapezoidAreaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class TrapezoidAreaDto {
    a;
    b;
    h;
}
exports.TrapezoidAreaDto = TrapezoidAreaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Основа a трапеції', example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], TrapezoidAreaDto.prototype, "a", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Основа b трапеції', example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], TrapezoidAreaDto.prototype, "b", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Висота h трапеції', example: 4 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], TrapezoidAreaDto.prototype, "h", void 0);
class TrapezoidAreaResponseDto {
    a;
    b;
    h;
    area;
}
exports.TrapezoidAreaResponseDto = TrapezoidAreaResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Основа a', example: 5 }),
    __metadata("design:type", Number)
], TrapezoidAreaResponseDto.prototype, "a", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Основа b', example: 10 }),
    __metadata("design:type", Number)
], TrapezoidAreaResponseDto.prototype, "b", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Висота h', example: 4 }),
    __metadata("design:type", Number)
], TrapezoidAreaResponseDto.prototype, "h", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Площа трапеції', example: 30 }),
    __metadata("design:type", Number)
], TrapezoidAreaResponseDto.prototype, "area", void 0);
//# sourceMappingURL=task1.dto.js.map