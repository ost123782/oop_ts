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
exports.Lab9Service = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const rmq_constants_1 = require("../rmq/rmq.constants");
const events_gateway_1 = require("../events/events.gateway");
let Lab9Service = class Lab9Service {
    client;
    events;
    constructor(client, events) {
        this.client = client;
        this.events = events;
    }
    async calculate(dto) {
        const row = await (0, rxjs_1.firstValueFrom)(this.client.send('lab9.formula.calculate', dto));
        this.events.broadcastResultCreated(row);
        return row;
    }
};
exports.Lab9Service = Lab9Service;
exports.Lab9Service = Lab9Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(rmq_constants_1.LAB9_CLIENT)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        events_gateway_1.EventsGateway])
], Lab9Service);
//# sourceMappingURL=lab9.service.js.map