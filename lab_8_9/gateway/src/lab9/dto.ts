import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsObject } from 'class-validator';

export const FORMULA_VARIANTS = [
  'ohm',
  'kinetic-energy',
  'projectile-height',
  'pressure-column',
  'work',
] as const;

export type FormulaVariant = (typeof FORMULA_VARIANTS)[number];

export class CalculateFormulaDto {
  @ApiProperty({ enum: FORMULA_VARIANTS, example: 'ohm' })
  @IsIn(FORMULA_VARIANTS as readonly string[])
  variant!: FormulaVariant;

  @ApiProperty({
    example: { u: 12, r: 4 },
    description:
      'ohm: {u, r}; kinetic-energy: {m, v}; projectile-height: {v0, alpha}; pressure-column: {rho, h}; work: {f, s}',
  })
  @IsObject()
  inputs!: Record<string, number>;
}
