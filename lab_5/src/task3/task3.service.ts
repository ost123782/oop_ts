import { Injectable } from '@nestjs/common';

@Injectable()
export class Task3Service {
  printArray(arr: number[]): string {
    return `[${arr.join(', ')}]`;
  }
}
