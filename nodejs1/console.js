const string = 'abc';
const number =1;
const boolean = true;
const obj = { outside: { inside: {key: 'value',},},};

console.time ('total time');
console.log('Normal logs');
console.error('The error message');
console.table([{name: 'Jake', birth: 1973}, {name: 'cindy', birth: 2004}]);

console.time('start loop');
for (let i=0; i < 100000; i++) {}
console.timeEnd('start loop');

console.timeEnd('total time');