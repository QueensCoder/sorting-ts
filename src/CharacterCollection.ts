export class CharacterCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  //   compare takes in two indexs and then performs the comparison
  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    //   split string to array, mutate array and then set data to arr.join
    const chars = this.data.split('');
    const left = chars[leftIdx];
    chars[leftIdx] = chars[rightIdx];
    chars[rightIdx] = left;
    this.data = chars.join('');
  }
}
