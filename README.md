console.dog
===========

[![Build Status](https://travis-ci.org/leemm/console.dog.svg?branch=master)](https://travis-ci.org/leemm/console.dog)

Without a doubt the most useful module you will ever find on NPM.
"Replaces" console.log with a better alternative which prints a random ASCII dog above the standard console.log output.

# Install

```
npm install console.dog --save
```

# Usage

```javascript
require('console.dog');

console.dog('Woof!');

/*
    
    // -> '            __
    // -> (\,--------'()'--o
    // -> (_    ___    /~"
    // -> (_)_)  (_)_)'

    // -> 'Woof!' */

/*
    You can override the random colour with one of those available through the 'colors' module using 'color'.
    https://www.npmjs.com/package/colors
*/
console.dog('color', 'cyan');
console.dog('Woof!');

```

# To do

* Needs more dog.
