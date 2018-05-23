# numberToCLPFormater
transforms a number to currency used in Chile (Chilean Pesos).

[![npm version](https://badge.fury.io/js/numbertoclpformater.svg)](https://badge.fury.io/js/numbertoclpformater)
![circleci status](https://circleci.com/gh/juanbrujo/numberToCLPFormater.svg?style=shield&circle-token=:circle-token)

**[NPM package](https://www.npmjs.com/package/numbertoclpformater)**

### USE: 

```javascript
var number = require('numbertoclpformater').numberToCLPFormater

number(876142) 
// $876.142
```

##### Change currency symbol:

```javascript
number(981426719, 'CLP$')
// CLP$981.426.719
```

##### Display cents, remove currency symbol

```javascript
number(1001, false, true)
// 1.001,00
```

##### Negative number

```javascript
number(-89163729)
// $-89.163.729
```
