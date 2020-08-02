// Introduction
function add(x: number, y: number): number {
	return x + y;
}

add(5, 3);

// Optional Parameters
function optionalAdd(x: number, y: number, z?: number) {
	let sum = x + y;
	if (z) sum += z;
	return sum;
}

optionalAdd(5, 3); optionalAdd(5, 3, 2);

function optionalAdd2(x: number, y: number, z = 0) {
	return x + y + z;
}

// Rest Parameters
function logName(first: string, second: string, ...other: string[]) {
	console.log(first, second, ...other);
}

logName('Foo', 'Bar', 'Baz', 'Lol');
