"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const url = process.env.RABBITMQ_URL ?? 'amqp://rabbitmq:5672';
    const queue = process.env.LAB7_QUEUE ?? 'lab7_queue';
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [url],
            queue,
            queueOptions: { durable: true },
            noAck: false,
        },
    });
    await app.listen();
    console.log(`lab7 microservice listening on queue "${queue}" at ${url}`);
}
void bootstrap();
//# sourceMappingURL=main.js.map