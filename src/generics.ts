// Introduction
const serverMembers: Map<string, string> = new Map();

serverMembers.set('123', 'Takio');

interface Guild<T> {
	members: T
}

const guild: Guild<Map<string, string>> = {
	members: new Map()
}

// Extending Generics
class Collection<K, V> extends Map<K, V> {
	public first(): V {
		return this.values().next().value;
	}
}

class VoiceChannel {
	public members: Collection<string, string> = new Collection();
}

const streamChannel = new VoiceChannel();

streamChannel.members.set('1', 'Takio');
streamChannel.members.set('2', 'Rami');

streamChannel.members.first();
