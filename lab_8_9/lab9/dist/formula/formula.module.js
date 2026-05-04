"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaModule = void 0;
const common_1 = require("@nestjs/common");
const formula_controller_1 = require("./formula.controller");
const formula_service_1 = require("./formula.service");
const formula_repository_1 = require("./formula.repository");
const prisma_service_1 = require("./prisma.service");
let FormulaModule = class FormulaModule {
};
exports.FormulaModule = FormulaModule;
exports.FormulaModule = FormulaModule = __decorate([
    (0, common_1.Module)({
        controllers: [formula_controller_1.FormulaController],
        providers: [formula_service_1.FormulaService, formula_repository_1.FormulaRepository, prisma_service_1.PrismaService],
    })
], FormulaModule);
//# sourceMappingURL=formula.module.js.map