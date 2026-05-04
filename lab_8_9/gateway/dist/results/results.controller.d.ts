import { ResultsService } from './results.service';
import type { LabKind } from './results.service';
export declare class ResultsController {
    private readonly service;
    constructor(service: ResultsService);
    list(lab?: LabKind): Promise<import("../events/events.gateway").ResultRow[]>;
    remove(lab: LabKind, id: string): Promise<void>;
}
