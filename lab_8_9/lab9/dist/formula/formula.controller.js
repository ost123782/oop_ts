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
exports.FormulaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const formula_service_1 = require("./formula.service");
const formula_repository_1 = require("./formula.repository");
const LAB = 'lab9';
let FormulaController = class FormulaController {
    service;
    repo;
    constructor(service, repo) {
        this.service = service;
        this.repo = repo;
    }
    async calculate(payload) {
        const output = this.service.calculate(payload);
        const saved = await this.repo.create({
            operation: payload.variant,
            title: output.title,
            inputs: output.inputs,
            output: output,
        });
        return { ...saved, lab: LAB };
    }
    async list() {
        const rows = await this.repo.findMany();
        return rows.map((r) => ({ ...r, lab: LAB }));
    }
    async remove(payload) {
        const ok = await this.repo.deleteIfExists(payload.id);
        return { lab: LAB, id: payload.id, deleted: ok };
    }
};
exports.FormulaController = FormulaController;
__decorate([
    (0, microservices_1.MessagePattern)('lab9.formula.calculate'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormulaController.prototype, "calculate", null);
__decorate([
    (0, microservices_1.MessagePattern)('lab9.results.list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormulaController.prototype, "list", null);
__decorate([
    (0, microservices_1.MessagePattern)('lab9.results.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormulaController.prototype, "remove", null);
exports.FormulaController = FormulaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [formula_service_1.FormulaService,
        formula_repository_1.FormulaRepository])
], FormulaController);
//# sourceMappingURL=formula.controller.js.map