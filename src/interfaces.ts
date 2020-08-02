// Properties
interface Person {
	name: string;
	age: number;
	job: string;
}

const seif: Person = {
	name: 'Seif Mansour',
	age: 17,
	job: 'student'
};

// Optional Properties

interface PersonOptional {
	name: string;
	age: number;
	job?: string;
}

const seifOptional: PersonOptional = {
	name: 'Seif Mansour',
	age: 17,
	job: 'student'
};

// Readonly Properties
interface Problem {
	readonly x: number;
	readonly y: number;
	solution?: number;
}

const problem: Problem = {
	x: 5, y: 3
};

problem.solution = 8;

// problem.x = 2; //

// Nesting Interfaces
interface PersonNested {
	name: Name;
	age: number;
	job?: string;
}

interface Name {
	first: string;
	last: string;
}

const seifNested: PersonNested = {
	name: { first: 'Seif', last: 'Mansour' },
	age: 17,
	job: 'student'
};

// The 'implements' keyword

class PersonClass implements Person {
	public name: string;
	public age: number;
	public job: string;

	public constructor(name: string, age: number, job: string) {
		this.name = name;
		this.age = age;
		this.job = job;
	}
}

// Extending Interfaces
interface Animal {
	name: string;
	age: number;
}

interface Dog extends Animal {
	withSpots: boolean;
}

const doge: Dog = {
	name: 'Doge',
	age: 5,
	withSpots: false
};
