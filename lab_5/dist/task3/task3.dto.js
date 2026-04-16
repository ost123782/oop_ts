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
exports.PrintArrayResponseDto = exports.PrintArrayDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PrintArrayDto {
    array;
}
exports.PrintArrayDto = PrintArrayDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Масив чисел для виведення',
        example: [1, 2, 3, 4, 5],
        type: [Number],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], PrintArrayDto.prototype, "array", void 0);
class PrintArrayResponseDto {
    array;
    formatted;
    length;
}
exports.PrintArrayResponseDto = PrintArrayResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Вхідний масив',
        example: [1, 2, 3, 4, 5],
        type: [Number],
    }),
    __metadata("design:type", Array)
], PrintArrayResponseDto.prototype, "array", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Форматований рядок масиву',
        example: '[1, 2, 3, 4, 5]',
    }),
    __metadata("design:type", String)
], PrintArrayResponseDto.prototype, "formatted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Кількість елементів', example: 5 }),
    __metadata("design:type", Number)
], PrintArrayResponseDto.prototype, "length", void 0);
//# sourceMappingURL=task3.dto.js.map