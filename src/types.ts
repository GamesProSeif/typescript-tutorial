// Boolean
const isCold: boolean = false;

// Number
const temperature: number = 0xFFFAAA;

// String
const name: string = 'Takio';

// Any
const id: any = 1;

// Array
const users: string[] = ['Murtaja', 'Rami', 'Yatsuki'];
const temperatures: number[] = [25, 48, 50];

// Void => undefined;

function greet(): void {
	console.log('Hello world');
	return;
}

// Never
function neverFunction(): never {
	while (true) {}
	throw new Error('This does not work');
}

// Object
const nameObject: object = {
	first: 'John',
	last: 'Doe'
}

// The 'type' keyword
type Phone = string | number;

const myPhone: Phone = '+965 555555';
