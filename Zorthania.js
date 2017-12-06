/**
 * Author: Joakim Rydberg
 * Date:   19/11/2017
 */

var Zorthania = (function(){
	'use strict';

	//Processes the incoming commands
	var handleInput = function(msg) {
		var args;

		if (msg.type !== "api") {
			return;
		}

		args = msg.content.split(/\s+/);
		switch (args[0]) {

			//TODO Shadow Cipher
			case '!Cipher':

			//TODO Foraging for ingredients
			case '!Forage':
		}
	},

	//Listens for commands from chat
	registerEventHandlers = function() {
		on('chat:message', handleInput);
	};

	return {
		registerEventHandlers: registerEventHandlers
	};
}());

//Fires when the page is loaded
on('ready', function() {
	'use strict';

	Zorthania.registerEventHandlers();
});