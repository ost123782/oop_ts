export interface GenerateInput {
    fileName: string;
    min: number;
    max: number;
    count: number;
}
export interface ReadInput {
    fileName: string;
}
export declare class NumbersService {
    private readonly logger;
    private readonly dataDir;
    generate(input: GenerateInput): Promise<{
        fileName: string;
        filePath: string;
        range: {
            min: number;
            max: number;
        };
        count: number;
        numbers: number[];
        created: boolean;
    }>;
    read(input: ReadInput): Promise<{
        fileName: string;
        filePath: string;
        exists: boolean;
        numbers: number[];
        raw: string;
    }>;
    private resolvePath;
    private exists;
}
