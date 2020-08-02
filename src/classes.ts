// Public & Private Properties & Methods
class User {
	public name: string;
	public age: number;
	private _password: string;

	public constructor(name: string, age: number, password: string) {
		this.name = name;
		this.age = age;
		this._password = password;
	}

	public get password(): string {
		return this.password;
	}
}

const user = new User('Seif', 17, 'abcd');
// console.log(user._password); //

// Properties with default values
class UserDef {
	public verified = false;

	public constructor(
		public name: string,
		public age: number,
	) {
		this.name = name;
		this.age = age;
	}
}

const userDef = new UserDef('Seif', 17);
console.log(userDef.verified);

// Readonly Properties
class Client {
	public readonly id: string;

	public constructor(id: string) {
		this.id = id;
	}
}

const client = new Client('1');
// client.id = '2'; //

// Extending Classes
class Animal {
	public constructor(
		public name: string,
		public age: number,
	) {
		this.name = name;
		this.age = age;
	}
}

class Dog extends Animal {
	public constructor(
		name: string, age: number,
		public withSpots: boolean
	) {
		super(name, age);
		this.withSpots = withSpots;
	}
}

class Cat extends Animal {
	public talk() {
		console.log('meow');
	}
}

const cat = new Cat('Mimi', 5);
cat.talk();

// Protected Properties
class Bird extends Animal {
	public readonly hasWings = true;
	public hungerLevel = 0;

	protected feed() {
		this.hungerLevel++;
	}
}

class Parrot extends Bird {
	feedMultiple(amount: number) {
		for (let i = 0; i < amount; i++) {
			this.feed();
		}
	}
}

// Accessors
const maxNameLength = 10;

class Employee {
	private _fullName: string = '';

	public get fullName() {
		return this._fullName;
	}

	public set fullName(name: string) {
		if (name && name.length > maxNameLength) {
			throw new Error('Exceeded max name length');
		}
		this._fullName = name;
	}
}

// Static Properties and Methods
class Grid {
	public static origin = { x: 0, y: 0 };

	public static getDefaultScale() {
		return 1;
	}

	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / Grid.getDefaultScale();
	}
}

// Abstract Classes
abstract class AnimalAbstract {
	public constructor(
		public name: string,
		public age: number
	) {
		this.name = name;
		this.age = age;
	}
}

// const animal = new AnimalAbstract('rex', 5); //

class DogAbstract extends AnimalAbstract {
	public withSpots = false;
}

const dog = new DogAbstract('rex', 5);
