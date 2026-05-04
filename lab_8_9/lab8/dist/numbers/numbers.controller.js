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
exports.NumbersController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const numbers_service_1 = require("./numbers.service");
const numbers_repository_1 = require("./numbers.repository");
const LAB = 'lab8';
let NumbersController = class NumbersController {
    service;
    repo;
    constructor(service, repo) {
        this.service = service;
        this.repo = repo;
    }
    async generate(payload) {
        const output = await this.service.generate(payload);
        const saved = await this.repo.create({
            operation: 'generate',
            title: `Random numbers → ${output.fileName}`,
            inputs: payload,
            output: output,
        });
        return { ...saved, lab: LAB };
    }
    async read(payload) {
        const output = await this.service.read(payload);
        const saved = await this.repo.create({
            operation: 'read',
            title: `Read ${output.fileName}`,
            inputs: payload,
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
exports.NumbersController = NumbersController;
__decorate([
    (0, microservices_1.MessagePattern)('lab8.numbers.generate'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "generate", null);
__decorate([
    (0, microservices_1.MessagePattern)('lab8.numbers.read'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "read", null);
__decorate([
    (0, microservices_1.MessagePattern)('lab8.results.list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "list", null);
__decorate([
    (0, microservices_1.MessagePattern)('lab8.results.delete'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "remove", null);
exports.NumbersController = NumbersController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [numbers_service_1.NumbersService,
        numbers_repository_1.NumbersRepository])
], NumbersController);
//# sourceMappingURL=numbers.controller.js.map