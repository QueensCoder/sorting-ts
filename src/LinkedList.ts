import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  constructor() {
    super();
  }
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(idx: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === idx) {
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error('Index out of bounds');
  }

  compare(left: number, right: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(left).data > this.at(right).data;
  }

  //   simple and bad swap method that just swaps the values of nodes and not the actual nodes
  swap(left: number, right: number): void {
    const leftNode = this.at(left);
    const rightNode = this.at(right);

    const leftData = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftData;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
