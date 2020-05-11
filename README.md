# badwords
Javascript filter for badwords. Work in browser & node.
Open for contribution. You can text me on discord Kawacrepe#8492 for any questions.

## Installation

``` npm i @kawacrepe/badwords ```

## Testing

``` npm test ```

## Usage

```javascript
const Filter = require('@kawacrepe/badwords');
const filter = new Filter();

console.log(filter.clean("Don't be an asshole"));
// 'Don't be an ******
```

```javascript
const Filter = require('@kawacrepe/badwords');
const filter = new Filter();

console.log(filter.doesContainBadwords("Don't be an asshole"));
// [true, 'asshole']
```


```javascript
const Filter = require('@kawacrepe/badwords');
const filter = new Filter({list: ['test', 'github'], placeHolder: 'x'});

console.log(filter.clean('Github is really helpful, asshole'));
// xxxxxx is really helpful, asshole
```
