var number = require('./numberToCLPFormater.js');

// Test 1
console.log('\n# Test 1: 876142 -> $876.142');
console.log( number.numberToCLPFormater(876142) );

// Test 2
console.log('\n# Test 2: 981426719 -> $981.426.719');
console.log( number.numberToCLPFormater(981426719) );

// Test 3
console.log('\n# Test 3: 1001 -> $1.001');
console.log( number.numberToCLPFormater(1001) );