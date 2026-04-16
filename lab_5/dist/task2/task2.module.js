"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task2Module = void 0;
const common_1 = require("@nestjs/common");
const task2_controller_1 = require("./task2.controller");
const task2_service_1 = require("./task2.service");
let Task2Module = class Task2Module {
};
exports.Task2Module = Task2Module;
exports.Task2Module = Task2Module = __decorate([
    (0, common_1.Module)({
        controllers: [task2_controller_1.Task2Controller],
        providers: [task2_service_1.Task2Service],
    })
], Task2Module);
//# sourceMappingURL=task2.module.js.map