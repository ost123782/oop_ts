export type FormulaVariant = 'ohm' | 'kinetic-energy' | 'projectile-height' | 'pressure-column' | 'work';
export interface FormulaInput {
    variant: FormulaVariant;
    inputs: Record<string, number>;
}
export interface FormulaResult {
    variant: FormulaVariant;
    title: string;
    formula: string;
    inputs: Record<string, number>;
    output: {
        name: string;
        value: number;
        unit: string;
    };
}
export declare class FormulaService {
    calculate(payload: FormulaInput): FormulaResult;
    private ohm;
    private kineticEnergy;
    private projectileHeight;
    private pressureColumn;
    private work;
}
