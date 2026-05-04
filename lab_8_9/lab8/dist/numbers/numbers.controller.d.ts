import { Prisma } from '@prisma/client';
import { NumbersService } from './numbers.service';
import { NumbersRepository } from './numbers.repository';
import type { GenerateInput, ReadInput } from './numbers.service';
export declare class NumbersController {
    private readonly service;
    private readonly repo;
    constructor(service: NumbersService, repo: NumbersRepository);
    generate(payload: GenerateInput): Promise<{
        lab: "lab8";
        id: string;
        operation: string;
        title: string | null;
        inputs: Prisma.JsonValue;
        output: Prisma.JsonValue;
        createdAt: Date;
    }>;
    read(payload: ReadInput): Promise<{
        lab: "lab8";
        id: string;
        operation: string;
        title: string | null;
        inputs: Prisma.JsonValue;
        output: Prisma.JsonValue;
        createdAt: Date;
    }>;
    list(): Promise<{
        lab: "lab8";
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
        lab: "lab8";
        id: string;
        deleted: boolean;
    }>;
}
