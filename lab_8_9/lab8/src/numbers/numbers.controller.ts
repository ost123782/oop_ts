import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Prisma } from '@prisma/client';
import { NumbersService } from './numbers.service';
import { NumbersRepository } from './numbers.repository';
import type { GenerateInput, ReadInput } from './numbers.service';

const LAB = 'lab8' as const;

@Controller()
export class NumbersController {
  constructor(
    private readonly service: NumbersService,
    private readonly repo: NumbersRepository,
  ) {}

  @MessagePattern('lab8.numbers.generate')
  async generate(@Payload() payload: GenerateInput) {
    const output = await this.service.generate(payload);
    const saved = await this.repo.create({
      operation: 'generate',
      title: `Random numbers → ${output.fileName}`,
      inputs: payload as unknown as Prisma.InputJsonValue,
      output: output as unknown as Prisma.InputJsonValue,
    });
    return { ...saved, lab: LAB };
  }

  @MessagePattern('lab8.numbers.read')
  async read(@Payload() payload: ReadInput) {
    const output = await this.service.read(payload);
    const saved = await this.repo.create({
      operation: 'read',
      title: `Read ${output.fileName}`,
      inputs: payload as unknown as Prisma.InputJsonValue,
      output: output as unknown as Prisma.InputJsonValue,
    });
    return { ...saved, lab: LAB };
  }

  @MessagePattern('lab8.results.list')
  async list() {
    const rows = await this.repo.findMany();
    return rows.map((r) => ({ ...r, lab: LAB }));
  }

  @MessagePattern('lab8.results.delete')
  async remove(@Payload() payload: { id: string }) {
    const ok = await this.repo.deleteIfExists(payload.id);
    return { lab: LAB, id: payload.id, deleted: ok };
  }
}
