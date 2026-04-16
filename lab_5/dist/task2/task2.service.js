"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task2Service = void 0;
const common_1 = require("@nestjs/common");
let Task2Service = class Task2Service {
    *numbersGenerator(...nums) {
        let min = nums[0];
        yield min;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
            yield min;
        }
        return min;
    }
    findMin(a, b, c) {
        const gen = this.numbersGenerator(a, b, c);
        const steps = [];
        let result;
        do {
            result = gen.next();
            steps.push(result.value);
        } while (!result.done);
        return { min: result.value, steps };
    }
};
exports.Task2Service = Task2Service;
exports.Task2Service = Task2Service = __decorate([
    (0, common_1.Injectable)()
], Task2Service);
//# sourceMappingURL=task2.service.js.map