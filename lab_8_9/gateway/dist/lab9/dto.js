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
exports.CalculateFormulaDto = exports.FORMULA_VARIANTS = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
exports.FORMULA_VARIANTS = [
    'ohm',
    'kinetic-energy',
    'projectile-height',
    'pressure-column',
    'work',
];
class CalculateFormulaDto {
    variant;
    inputs;
}
exports.CalculateFormulaDto = CalculateFormulaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.FORMULA_VARIANTS, example: 'ohm' }),
    (0, class_validator_1.IsIn)(exports.FORMULA_VARIANTS),
    __metadata("design:type", String)
], CalculateFormulaDto.prototype, "variant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { u: 12, r: 4 },
        description: 'ohm: {u, r}; kinetic-energy: {m, v}; projectile-height: {v0, alpha}; pressure-column: {rho, h}; work: {f, s}',
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CalculateFormulaDto.prototype, "inputs", void 0);
//# sourceMappingURL=dto.js.map