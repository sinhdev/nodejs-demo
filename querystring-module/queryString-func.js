const querystring = require('querystring');

console.log(querystring.stringify({ foo: 'bar bar', baz: ['qux npx', 'quux abc'], corge: '' }));
// Returns 'foo=bar&baz=qux&baz=quux&corge='

console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'));
// returns 'foo:bar;baz:qux'

var q = querystring.parse('year=2017&month=february');
console.log(q.month); 
console.log(q.year); 
console.log(querystring.parse('foo=bar%20bar&baz=qux%20npx&baz=quux%20abc&corge='))