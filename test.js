var number = require('./index.js').numberToCLPFormater;

// Test 1: default
console.log('\n# Test 1: 876142 -> $876.142');
console.log( number(876142) );

// Test 2: change currency symbol
console.log('\n# Test 2: 981426719 -> CLP$981.426.719');
console.log( number(981426719, 'CLP$') );

// Test 3: display cents, remove currency symbol
console.log('\n# Test 3: 1001 -> 1.001,00');
console.log( number(1001, false, true) );

// Test 4: input is not a number
console.log('\n# Test 4: "lorem ipsum" -> [error]');
console.log( number('lorem ipsum') );

// Test 5: negative number
console.log('\n# Test 5: -89163729 -> $-89.163.729');
console.log( number(-89163729) );