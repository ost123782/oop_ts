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
exports.LibraryCardController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const library_card_service_1 = require("./library-card.service");
let LibraryCardController = class LibraryCardController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(payload) {
        return this.service.create(payload);
    }
    changeBooks(payload) {
        return this.service.changeBooks(payload);
    }
    special(payload) {
        return this.service.special(payload);
    }
};
exports.LibraryCardController = LibraryCardController;
__decorate([
    (0, microservices_1.MessagePattern)('library-card.create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibraryCardController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('library-card.change-books'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibraryCardController.prototype, "changeBooks", null);
__decorate([
    (0, microservices_1.MessagePattern)('library-card.special'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LibraryCardController.prototype, "special", null);
exports.LibraryCardController = LibraryCardController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [library_card_service_1.LibraryCardService])
], LibraryCardController);
//# sourceMappingURL=library-card.controller.js.map