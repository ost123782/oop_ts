export declare const FORMULA_VARIANTS: readonly ["ohm", "kinetic-energy", "projectile-height", "pressure-column", "work"];
export type FormulaVariant = (typeof FORMULA_VARIANTS)[number];
export declare class CalculateFormulaDto {
    variant: FormulaVariant;
    inputs: Record<string, number>;
}
