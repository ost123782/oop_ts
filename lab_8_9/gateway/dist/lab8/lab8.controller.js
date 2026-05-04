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
exports.Lab8Controller = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lab8_service_1 = require("./lab8.service");
const dto_1 = require("./dto");
let Lab8Controller = class Lab8Controller {
    service;
    constructor(service) {
        this.service = service;
    }
    generate(dto) {
        return this.service.generate(dto);
    }
    read(dto) {
        return this.service.read(dto);
    }
};
exports.Lab8Controller = Lab8Controller;
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GenerateNumbersDto]),
    __metadata("design:returntype", void 0)
], Lab8Controller.prototype, "generate", null);
__decorate([
    (0, common_1.Post)('read'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ReadNumbersDto]),
    __metadata("design:returntype", void 0)
], Lab8Controller.prototype, "read", null);
exports.Lab8Controller = Lab8Controller = __decorate([
    (0, swagger_1.ApiTags)('lab8'),
    (0, common_1.Controller)('lab8/numbers'),
    __metadata("design:paramtypes", [lab8_service_1.Lab8Service])
], Lab8Controller);
//# sourceMappingURL=lab8.controller.js.map