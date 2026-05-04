import { Injectable } from '@nestjs/common';
import { Prisma, Result } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class NumbersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    operation: string;
    title: string;
    inputs: Prisma.InputJsonValue;
    output: Prisma.InputJsonValue;
  }): Promise<Result> {
    return this.prisma.result.create({ data });
  }

  findMany(): Promise<Result[]> {
    return this.prisma.result.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async deleteIfExists(id: string): Promise<boolean> {
    try {
      await this.prisma.result.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
