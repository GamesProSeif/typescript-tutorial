const enum MEMBER_TYPE {
	NORMAL = 1,
	HELPER,
	MOD,
	ADMIN
}

const member = {
	name: 'Seif',
	level: MEMBER_TYPE.ADMIN
}

console.log('This is a message during runtime'); // winston

// logger.info('This is a message during runtime')

// [API][INFO][READY][21:00]: This is a message during runtime

const enum EVENTS {
	START = 'START',
	ERROR = 'ERROR',
	SETUP = 'SETUP'
}

// logger.info('This is a message during runtime', { event: EVENTS.START });