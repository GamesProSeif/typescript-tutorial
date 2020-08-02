// Introduction
function add(x: number, y: number) {
	return x + y;
}

const addArrow = (x: number, y: number): number => x + y;

const sum = addArrow(5, 3);

// Optional Parameters
function optionalAdd(x: number, y: number, z?: number) {
	let sum = x + y;
	if (z) sum += z;
	return sum;
}

function optionalAdd2(x: number, y: number, z = 0) {
	return x + y + z;
}

// Rest Parameters
function logName(first: string, second: string, ...other: any[]) {
	console.log(first, second, ...other);
}

logName('Foo', 'Bar', 5, 15, 20, 'nope');
