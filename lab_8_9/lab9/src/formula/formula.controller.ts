import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { FormulaService } from './formula.service';
import { FormulaRepository } from './formula.repository';
import type { FormulaInput } from './formula.service';

const LAB = 'lab9' as const;

@Controller()
export class FormulaController {
  constructor(
    private readonly service: FormulaService,
    private readonly repo: FormulaRepository,
  ) {}

  @MessagePattern('lab9.formula.calculate')
  async calculate(@Payload() payload: FormulaInput) {
    const output = this.service.calculate(payload);
    const saved = await this.repo.create({
      operation: payload.variant,
      title: output.title,
      inputs: output.inputs as unknown as Prisma.InputJsonValue,
      output: output as unknown as Prisma.InputJsonValue,
    });
    return { ...saved, lab: LAB };
  }

  @MessagePattern('lab9.results.list')
  async list() {
    const rows = await this.repo.findMany();
    return rows.map((r) => ({ ...r, lab: LAB }));
  }

  @MessagePattern('lab9.results.delete')
  async remove(@Payload() payload: { id: string }) {
    const ok = await this.repo.deleteIfExists(payload.id);
    return { lab: LAB, id: payload.id, deleted: ok };
  }
}
