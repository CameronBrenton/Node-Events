/* Emitter */

/*
let Emitter = require('events');
let emt = new Emitter();

emt.on('newUser', function () {
	console.log('Set up user.');
});

emt.on('newUser', function () {
	console.log('Activate user.');
});

emt.addListener('newUser', function () {
	console.log('Notify user.');
});

emt.on('newUser', function() {
	console.log('sdsdgg')
});

emt.addListener('newUser', function() {
	console.log('hghg')
});

const addNewUser = function() {
	emt.emit('newUser');
}

addNewUser();

*/

const { EventEmitter } = require('events');

const emitter = new EventEmitter();
//emitter.setMaxListeners(2);

const topic = "LevelCompleted!";
const playVictorySound = (type) => {
	console.log("Congratulations! You completed the level: ", type);
}

emitter.on(topic, playVictorySound);

const selectCharacter = (type) => {
	if(type === "") {
		console.error("No character selected");
	}
	else {
		console.log("You have selected the character: ", type);
		setTimeout(() => {
			emitter.emit(topic, type);
		}, 2e3);
	}
};

selectCharacter("Genji");


const pickupHealth = () => {
	console.log("Picked up health");
};

emitter.addListener(topic, pickupHealth);

const openDoorInGameWorld = () => {
	console.log("This door has been opened");
}


emitter.addListener(topic, openDoorInGameWorld);

openDoorInGameWorld()

pickupHealth()



console.log("Listeners: ", emitter.listeners(topic));