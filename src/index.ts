import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// sort numbers
const numberCollection = new NumbersCollection([10, 3, -5, 0]);
numberCollection.bubbleSort();
console.log(numberCollection.data);

// // sort characters
const charCollection = new CharacterCollection('Xaayb');
charCollection.bubbleSort();
console.log(charCollection.data);

// sort values in a linked list
const listValues = [500, -10, -3, 4];
const linkedList = new LinkedList();
listValues.forEach((value) => linkedList.add(value));
linkedList.bubbleSort();
linkedList.print();
