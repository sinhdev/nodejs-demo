const util = require('util');

function someFunction(){}
function someOtherFunction(){}
let someMessage = "Deprecate function ..."
let someOtherMessage = "Deprecate function ...."

const fn1 = util.deprecate(someFunction, someMessage, 'DEP0001');
const fn2 = util.deprecate(someOtherFunction, someOtherMessage, 'DEP0002');
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code

util.format('%s:%s', 'foo');