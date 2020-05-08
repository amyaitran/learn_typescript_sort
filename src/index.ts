import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const sorter = new Sorter([10, 3, -5, 0]);
// sorter.sort();
// console.log(sorter.collection);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
const numbersCollection = new NumbersCollection([9, 3, 94, 3, 0, -1, 3]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
// console.log(charactersCollection.data);
console.log(numbersCollection.data);
