"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab8Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const lab8_controller_1 = require("./lab8.controller");
const lab8_service_1 = require("./lab8.service");
const rmq_constants_1 = require("../rmq/rmq.constants");
const events_module_1 = require("../events/events.module");
let Lab8Module = class Lab8Module {
};
exports.Lab8Module = Lab8Module;
exports.Lab8Module = Lab8Module = __decorate([
    (0, common_1.Module)({
        imports: [events_module_1.EventsModule],
        controllers: [lab8_controller_1.Lab8Controller],
        providers: [
            lab8_service_1.Lab8Service,
            {
                provide: rmq_constants_1.LAB8_CLIENT,
                inject: [config_1.ConfigService],
                useFactory: (config) => microservices_1.ClientProxyFactory.create({
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [
                            config.get('RABBITMQ_URL', 'amqp://guest:guest@rabbitmq:5672'),
                        ],
                        queue: config.get('LAB8_QUEUE', 'lab8_queue'),
                        queueOptions: { durable: true },
                    },
                }),
            },
        ],
        exports: [rmq_constants_1.LAB8_CLIENT],
    })
], Lab8Module);
//# sourceMappingURL=lab8.module.js.map