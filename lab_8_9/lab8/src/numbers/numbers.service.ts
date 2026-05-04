import { Injectable, Logger } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

export interface GenerateInput {
  fileName: string;
  min: number;
  max: number;
  count: number;
}

export interface ReadInput {
  fileName: string;
}

@Injectable()
export class NumbersService {
  private readonly logger = new Logger(NumbersService.name);
  private readonly dataDir = process.env.LAB8_DATA_DIR ?? '/data';

  async generate(input: GenerateInput) {
    const { fileName, min, max, count } = input;
    if (min > max) throw new Error('min must be <= max');
    if (count <= 0) throw new Error('count must be > 0');

    const filePath = this.resolvePath(fileName);
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
      const n = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(n);
    }

    const existed = await this.exists(filePath);
    await fs.writeFile(filePath, numbers.join(' '), { encoding: 'utf8' });
    this.logger.log(`wrote ${count} numbers to ${filePath} (existed=${existed})`);

    return {
      fileName,
      filePath,
      range: { min, max },
      count,
      numbers,
      created: !existed,
    };
  }

  async read(input: ReadInput) {
    const filePath = this.resolvePath(input.fileName);
    if (!(await this.exists(filePath))) {
      return {
        fileName: input.fileName,
        filePath,
        exists: false,
        numbers: [] as number[],
        raw: '',
      };
    }
    const raw = await fs.readFile(filePath, 'utf8');
    const numbers = raw
      .split(/\s+/)
      .filter((token) => token.length > 0)
      .map((token) => Number(token))
      .filter((n) => Number.isFinite(n));
    return {
      fileName: input.fileName,
      filePath,
      exists: true,
      numbers,
      raw,
    };
  }

  private resolvePath(fileName: string) {
    const safe = path.basename(fileName);
    return path.join(this.dataDir, safe);
  }

  private async exists(p: string) {
    try {
      await fs.access(p);
      return true;
    } catch {
      return false;
    }
  }
}
