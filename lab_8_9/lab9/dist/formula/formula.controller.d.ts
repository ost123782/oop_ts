import { Prisma } from '@prisma/client';
import { FormulaService } from './formula.service';
import { FormulaRepository } from './formula.repository';
import type { FormulaInput } from './formula.service';
export declare class FormulaController {
    private readonly service;
    private readonly repo;
    constructor(service: FormulaService, repo: FormulaRepository);
    calculate(payload: FormulaInput): Promise<{
        lab: "lab9";
        id: string;
        operation: string;
        title: string | null;
        inputs: Prisma.JsonValue;
        output: Prisma.JsonValue;
        createdAt: Date;
    }>;
    list(): Promise<{
        lab: "lab9";
        id: string;
        operation: string;
        title: string | null;
        inputs: Prisma.JsonValue;
        output: Prisma.JsonValue;
        createdAt: Date;
    }[]>;
    remove(payload: {
        id: string;
    }): Promise<{
        lab: "lab9";
        id: string;
        deleted: boolean;
    }>;
}
