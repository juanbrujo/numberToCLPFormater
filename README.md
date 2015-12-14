# numberToCLPFormater
transforms a number to currency used in Chile (Chilean Pesos).

[![npm version](https://badge.fury.io/js/numbertoclpformater.svg)](https://badge.fury.io/js/numbertoclpformater)

### USE: 

```
var number = require('./numberToCLPFormater.js');

numberToCLPFormater(876142) 
// $876.142
```

##### Change currency symbol:

```
numberToCLPFormater(981426719, 'CLP$');
// CLP$981.426.719
```

##### Display cents, remove currency symbol

```
numberToCLPFormater(1001, false, true);
// 1.001,00
```

##### Negative number

```
number.numberToCLPFormater(-89163729);
// $-89.163.729
```
