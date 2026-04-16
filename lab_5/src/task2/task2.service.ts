import { Injectable } from '@nestjs/common';

@Injectable()
export class Task2Service {
  private *numbersGenerator(
    ...nums: number[]
  ): Generator<number, number, undefined> {
    let min = nums[0];
    yield min;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i]!;
      }
      yield min;
    }
    return min;
  }

  findMin(a: number, b: number, c: number): { min: number; steps: number[] } {
    const gen = this.numbersGenerator(a, b, c);
    const steps: number[] = [];
    let result: IteratorResult<number, number>;
    do {
      result = gen.next();
      steps.push(result.value);
    } while (!result.done);

    return { min: result.value, steps };
  }
}
