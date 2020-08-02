// Public & Private & Readonly Properties & Methods
class User {
	public name: string;
	public readonly age: number;
	private _password: string;

	public constructor(name: string, age: number, password: string) {
		this.name = name;
		this.age = age;
		this._password = password;
	}

	public logName() {
		console.log(this.name);
	}

	public get password() {
		return 'The password is: ' + this._password;
	}
}

// const user = new User('Seif', 17, 'abcd');

// user.name = 'Hyperstroke';

// console.log(user.password);

class User1 {
	public constructor(
		public name: string,
		public readonly age: number,
		private _password: string
	) {
		this.name = name;
		this.age = age;
		this._password = _password;
	}
}

// Properties with default values
class UserDef {
	public verified = false;
	public name: string;
	public age: number;

	public constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

const userDef = new UserDef('Shadow', 27);
// console.log(userDef.verified); //

// Extending Classes (Inheritence)
class Animal {
	public constructor(
		public name: string,
		public age: number
	) {
		this.name = name;
		this.age = age;
	}
}

class Dog extends Animal {
	public constructor(name: string, age: number, public withSpots: boolean) {
		super(name, age);
		this.withSpots = withSpots;
	}
}

const rex = new Dog('shadow', 3, true);

class Cat extends Animal {
	public talk() {
		console.log('meow');
	}
}

const mimi = new Cat('Mimi', 13);

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

const bird = new Parrot('Canari', 2);
bird.feedMultiple(5);

// Accessors
const maxNameLength = 10;

class Employee {
	private _fullname: string = '';

	public get fullName(): string {
		return this._fullname;
	}

	public set fullName(name: string) {
		if (name && name.length > maxNameLength) {
			throw new Error('Exceeded max name length');
		}
		this._fullname = name;
	}
}

const employee = new Employee();
employee.fullName = '512';

// Static Properties and Methods
class Grid {
	public static origin = { x: 0, y: 0 };

	public static defaultScale() {
		return 1;
	}

	public calculateDistance(point: { x: number; y: number }) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist ** 2 + yDist ** 2) / Grid.defaultScale();
	}
}

// Abstract Classes
abstract class AnimalAbs {
	public constructor(
		public name: string,
		public age: number
	) {
		this.name = name;
		this.age = age;
	}
}

class DogAbs extends AnimalAbs {
	public withSpots = false;
}

const bolbol = new DogAbs('Bolbol', 6);

