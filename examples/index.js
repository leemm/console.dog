require('../index');

console.dog('Cheese Burger');

/*
	You can override the random colour with one of those available through the 'colors' module using the 'set' command.
	https://www.npmjs.com/package/colors
*/
console.dog('color', 'cyan');
console.dog('Cheese Burger');

console.dog('color', 'red');
console.dog('Cheese Burger');
