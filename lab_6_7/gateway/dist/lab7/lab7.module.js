"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab7Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const lab7_controller_1 = require("./lab7.controller");
const lab7_constants_1 = require("./lab7.constants");
let Lab7Module = class Lab7Module {
};
exports.Lab7Module = Lab7Module;
exports.Lab7Module = Lab7Module = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: lab7_constants_1.LAB7_CLIENT,
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: (config) => ({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: [config.get('RABBITMQ_URL', 'amqp://rabbitmq:5672')],
                            queue: config.get('LAB7_QUEUE', 'lab7_queue'),
                            queueOptions: { durable: true },
                        },
                    }),
                },
            ]),
        ],
        controllers: [lab7_controller_1.Lab7Controller],
    })
], Lab7Module);
//# sourceMappingURL=lab7.module.js.map