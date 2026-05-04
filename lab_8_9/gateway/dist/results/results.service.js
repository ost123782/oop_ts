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
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const rmq_constants_1 = require("../rmq/rmq.constants");
const events_gateway_1 = require("../events/events.gateway");
let ResultsService = class ResultsService {
    lab8;
    lab9;
    events;
    constructor(lab8, lab9, events) {
        this.lab8 = lab8;
        this.lab9 = lab9;
        this.events = events;
    }
    async list(lab) {
        const calls = [];
        if (!lab || lab === 'lab8') {
            calls.push((0, rxjs_1.firstValueFrom)(this.lab8.send('lab8.results.list', {})));
        }
        if (!lab || lab === 'lab9') {
            calls.push((0, rxjs_1.firstValueFrom)(this.lab9.send('lab9.results.list', {})));
        }
        const buckets = await Promise.all(calls);
        return buckets
            .flat()
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    async remove(lab, id) {
        const client = lab === 'lab8' ? this.lab8 : this.lab9;
        const result = await (0, rxjs_1.firstValueFrom)(client.send(`${lab}.results.delete`, { id }));
        if (!result.deleted) {
            throw new common_1.NotFoundException(`result ${id} not found in ${lab}`);
        }
        this.events.broadcastResultDeleted({ id, lab });
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(rmq_constants_1.LAB8_CLIENT)),
    __param(1, (0, common_1.Inject)(rmq_constants_1.LAB9_CLIENT)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        events_gateway_1.EventsGateway])
], ResultsService);
//# sourceMappingURL=results.service.js.map