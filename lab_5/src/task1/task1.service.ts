import { Injectable } from '@nestjs/common';

@Injectable()
export class Task1Service {
  trapezoidArea(a: number, b: number, h: number): number {
    return ((a + b) / 2) * h;
  }
}
