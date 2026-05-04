import { Prisma, Result } from '@prisma/client';
import { PrismaService } from './prisma.service';
export declare class FormulaRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        operation: string;
        title: string;
        inputs: Prisma.InputJsonValue;
        output: Prisma.InputJsonValue;
    }): Promise<Result>;
    findMany(): Promise<Result[]>;
    deleteIfExists(id: string): Promise<boolean>;
}
