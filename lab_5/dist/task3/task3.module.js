"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task3Module = void 0;
const common_1 = require("@nestjs/common");
const task3_controller_1 = require("./task3.controller");
const task3_service_1 = require("./task3.service");
let Task3Module = class Task3Module {
};
exports.Task3Module = Task3Module;
exports.Task3Module = Task3Module = __decorate([
    (0, common_1.Module)({
        controllers: [task3_controller_1.Task3Controller],
        providers: [task3_service_1.Task3Service],
    })
], Task3Module);
//# sourceMappingURL=task3.module.js.map