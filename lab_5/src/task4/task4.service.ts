import { Injectable } from '@nestjs/common';

@Injectable()
export class Task4Service {
  findMax(arr: number[]): number {
    return Math.max(...arr);
  }
}
