// Boolean
const isCold: boolean = true;

// Number
const temperature: number = 28;

// String
const name: string = 'Seif';

// Array
const members: string[] = ['Seif', 'Zuma', 'Jakeo'];

// Any
const age: any = '26';

// Void
function greet(): void {
	console.log('Hello world');
	return;
}

// Never
function neverFunction(): never {
	while (true) {}
	throw new Error('lol');
}

// Object
const nameObject: object = {
	first: 'Seif',
	second: 'Mansour'
}

// The `type` keyword
type phone = string | number;

const myPhone = '+965666666';
