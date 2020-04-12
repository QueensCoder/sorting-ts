import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length() {
    return this.data.length;
  }
  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    const left = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = left;
  }
}
