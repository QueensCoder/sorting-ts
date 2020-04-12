import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
// sort numbers
const numberCollection = new NumbersCollection([10, 3, -5, 0]);

const sorter = new Sorter(numberCollection);
sorter.bubbleSort();
console.log(numberCollection.data);

// sort characters
const charCollection = new CharacterCollection('Xaayb');
const sortChar = new Sorter(charCollection);

sortChar.bubbleSort();
console.log(charCollection.data);

const listValues = [500, -10, -3, 4];
const linkedList = new LinkedList();

listValues.forEach((value) => linkedList.add(value));

const listSorter = new Sorter(linkedList);

listSorter.bubbleSort();
linkedList.print();
