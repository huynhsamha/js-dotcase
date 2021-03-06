const toDotCase = require('../index');

console.log(toDotCase('string')); // => string
console.log(toDotCase('camelCase')); // => camel.case
console.log(toDotCase('param-case')); // => param.case
console.log(toDotCase('PascalCase')); // => pascal.case
console.log(toDotCase('UPPER_CASE')); // => upper.case
console.log(toDotCase('snake_case')); // => snake.case
console.log(toDotCase('sentence case')); // => sentence.case
console.log(toDotCase('Title Case')); // => title.case
console.log(toDotCase('dot.case')); // => // dot.case

console.log(toDotCase('')); // => ''
console.log(toDotCase(null)); // => ''
console.log(toDotCase(undefined)); // => ''

console.log(toDotCase('Abc ___ 123 ___ xYz')); // => abc.123.x.yz
console.log(toDotCase('123__abc  ... ?// {#} def 12')); // => 123.abc.def.12
console.log(toDotCase('	tab space ??? ________')); // => tab.space
console.log(toDotCase('___?||123  abc|| 123..123')); // => 123.abc.123.123
console.log(toDotCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abc.xy.z.g123h
console.log(toDotCase(' ^&* #DEFine x: 15 + ==')); // => define.x.15
console.log(toDotCase('123456789')); // => 123456789
