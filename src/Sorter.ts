interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

// we used this because several classes wanted to use the bubbleSort method
// makes our factor cleaner
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  bubbleSort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
