// Introduction
const members: Map<string, string> = new Map();

members.set('key', 'value');

// Extending
class Collection<K, V> extends Map<K, V> {
	public first() {
		return this.values().next().value;
	}
}

class Guild<T extends Map<string, any>> {
	public members: T;

	public constructor(members: T) {
		this.members = members;
	}
}

const guild = new Guild<Collection<string, string>>(
	new Collection()
);

guild.members.set('0', '1');
