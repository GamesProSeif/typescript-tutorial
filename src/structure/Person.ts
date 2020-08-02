import { Name } from './typings';

class Person {
	public name: Name = { first: '', last: '' }
}

const point = { x: 0, y: 1, z: 3};

// Destructuring
const { x } = point;
