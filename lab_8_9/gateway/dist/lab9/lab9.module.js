"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab9Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const lab9_controller_1 = require("./lab9.controller");
const lab9_service_1 = require("./lab9.service");
const rmq_constants_1 = require("../rmq/rmq.constants");
const events_module_1 = require("../events/events.module");
let Lab9Module = class Lab9Module {
};
exports.Lab9Module = Lab9Module;
exports.Lab9Module = Lab9Module = __decorate([
    (0, common_1.Module)({
        imports: [events_module_1.EventsModule],
        controllers: [lab9_controller_1.Lab9Controller],
        providers: [
            lab9_service_1.Lab9Service,
            {
                provide: rmq_constants_1.LAB9_CLIENT,
                inject: [config_1.ConfigService],
                useFactory: (config) => microservices_1.ClientProxyFactory.create({
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [
                            config.get('RABBITMQ_URL', 'amqp://guest:guest@rabbitmq:5672'),
                        ],
                        queue: config.get('LAB9_QUEUE', 'lab9_queue'),
                        queueOptions: { durable: true },
                    },
                }),
            },
        ],
        exports: [rmq_constants_1.LAB9_CLIENT],
    })
], Lab9Module);
//# sourceMappingURL=lab9.module.js.map