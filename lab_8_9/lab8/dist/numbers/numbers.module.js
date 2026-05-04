"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersModule = void 0;
const common_1 = require("@nestjs/common");
const numbers_controller_1 = require("./numbers.controller");
const numbers_service_1 = require("./numbers.service");
const numbers_repository_1 = require("./numbers.repository");
const prisma_service_1 = require("./prisma.service");
let NumbersModule = class NumbersModule {
};
exports.NumbersModule = NumbersModule;
exports.NumbersModule = NumbersModule = __decorate([
    (0, common_1.Module)({
        controllers: [numbers_controller_1.NumbersController],
        providers: [numbers_service_1.NumbersService, numbers_repository_1.NumbersRepository, prisma_service_1.PrismaService],
    })
], NumbersModule);
//# sourceMappingURL=numbers.module.js.map