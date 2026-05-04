import { Injectable } from '@nestjs/common';

export type FormulaVariant =
  | 'ohm'
  | 'kinetic-energy'
  | 'projectile-height'
  | 'pressure-column'
  | 'work';

export interface FormulaInput {
  variant: FormulaVariant;
  inputs: Record<string, number>;
}

export interface FormulaResult {
  variant: FormulaVariant;
  title: string;
  formula: string;
  inputs: Record<string, number>;
  output: { name: string; value: number; unit: string };
}

const G = 9.80665;

@Injectable()
export class FormulaService {
  calculate(payload: FormulaInput): FormulaResult {
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

  private ohm(inputs: Record<string, number>): FormulaResult {
    const u = inputs.u;
    const r = inputs.r;
    if (r === 0) throw new Error('R must be non-zero');
    const i = u / r;
    return {
      variant: 'ohm',
      title: 'Закон Ома',
      formula: 'I = U / R',
      inputs: { U: u, R: r },
      output: { name: 'I', value: i, unit: 'А' },
    };
  }

  private kineticEnergy(inputs: Record<string, number>): FormulaResult {
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

  private projectileHeight(inputs: Record<string, number>): FormulaResult {
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

  private pressureColumn(inputs: Record<string, number>): FormulaResult {
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

  private work(inputs: Record<string, number>): FormulaResult {
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
}
