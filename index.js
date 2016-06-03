var colors = require('colors'),
	allColors = Object.keys(colors.styles),
	log = console.log;

let color = 'white'; // default

/**
 * Random number seed (uses random.js)
 * @param  {Number} lower
 * @param  {Number} upper
 * @return {Number}
 */
var randomNumber = function(lower, upper) {

	lower = lower || 0;
	upper = upper || 0;

	const Random = require('random-js');

	let random = new Random(Random.engines.mt19937().autoSeed());
	return random.integer(lower, upper);

};

/**
 * "Extends" console.log adding in a pointless ascii drawing of a dog
 */
console.dog = function() {

	if (arguments && arguments[0] === 'color'){
		color = arguments[1] && allColors.map(color => { return color === arguments[1]; }).indexOf(true) > -1 ? arguments[1] : allColors[randomNumber(1, allColors.length) - 1];
		return;
	}

	let animals = [
		"            __\n(\\,--------'()'--o\n (_    ___    /~\"\n  (_)_)  (_)_)",
		"    _.-.\n  '( ^{_}    (\n    `~\\`-----'\\\n       )_)---)_) ",
		"     __\n(___()'`;\n/,    /`\n\\\\\"--\\\\"
	];

	let animal = animals[randomNumber(1, animals.length) - 1];

    log(animal[color] + '\n\n');

    log.apply(console, arguments);
};
