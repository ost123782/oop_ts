"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaService = void 0;
const common_1 = require("@nestjs/common");
const G = 9.80665;
let FormulaService = class FormulaService {
    calculate(payload) {
        switch (payload.variant) {
            case 'ohm':
                return this.ohm(payload.inputs);
            case 'kinetic-energy':
                return this.kineticEnergy(payload.inputs);
            case 'projectile-height':
                return this.projectileHeight(payload.inputs);
            case 'pressure-column':
                return this.pressureColumn(payload.inputs);
            case 'work':
                return this.work(payload.inputs);
            default:
                throw new Error(`unknown variant: ${String(payload.variant)}`);
        }
    }
    ohm(inputs) {
        const u = inputs.u;
        const r = inputs.r;
        if (r === 0)
            throw new Error('R must be non-zero');
        const i = u / r;
        return {
            variant: 'ohm',
            title: 'Закон Ома',
            formula: 'I = U / R',
            inputs: { U: u, R: r },
            output: { name: 'I', value: i, unit: 'А' },
        };
    }
    kineticEnergy(inputs) {
        const m = inputs.m;
        const v = inputs.v;
        const wk = (m * v * v) / 2;
        return {
            variant: 'kinetic-energy',
            title: 'Кінетична енергія',
            formula: 'Wₖ = m·v² / 2',
            inputs: { m, v },
            output: { name: 'Wₖ', value: wk, unit: 'Дж' },
        };
    }
    projectileHeight(inputs) {
        const v0 = inputs.v0;
        const alphaDeg = inputs.alpha;
        if (alphaDeg <= 0 || alphaDeg >= 90) {
            throw new Error('alpha must be in (0, 90) degrees');
        }
        const a = (alphaDeg * Math.PI) / 180;
        const h = (v0 * Math.sin(a)) ** 2 / (2 * G);
        return {
            variant: 'projectile-height',
            title: 'Максимальна висота польоту тіла',
            formula: 'hmax = (v₀·sin α)² / (2g)',
            inputs: { v0, alpha: alphaDeg },
            output: { name: 'hmax', value: h, unit: 'м' },
        };
    }
    pressureColumn(inputs) {
        const rho = inputs.rho;
        const h = inputs.h;
        const p = rho * G * h;
        return {
            variant: 'pressure-column',
            title: 'Тиск стовпа рідини',
            formula: 'p = ρ·g·h',
            inputs: { rho, h },
            output: { name: 'p', value: p, unit: 'Па' },
        };
    }
    work(inputs) {
        const f = inputs.f;
        const s = inputs.s;
        const a = f * s;
        return {
            variant: 'work',
            title: 'Робота сили',
            formula: 'A = F·S',
            inputs: { F: f, S: s },
            output: { name: 'A', value: a, unit: 'Дж' },
        };
    }
};
exports.FormulaService = FormulaService;
exports.FormulaService = FormulaService = __decorate([
    (0, common_1.Injectable)()
], FormulaService);
//# sourceMappingURL=formula.service.js.map