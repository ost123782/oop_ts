"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lab6Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const lab6_controller_1 = require("./lab6.controller");
const lab6_constants_1 = require("./lab6.constants");
let Lab6Module = class Lab6Module {
};
exports.Lab6Module = Lab6Module;
exports.Lab6Module = Lab6Module = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: lab6_constants_1.LAB6_CLIENT,
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: (config) => ({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: [config.get('RABBITMQ_URL', 'amqp://rabbitmq:5672')],
                            queue: config.get('LAB6_QUEUE', 'lab6_queue'),
                            queueOptions: { durable: true },
                        },
                    }),
                },
            ]),
        ],
        controllers: [lab6_controller_1.Lab6Controller],
    })
], Lab6Module);
//# sourceMappingURL=lab6.module.js.map