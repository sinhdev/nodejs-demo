const util = require('util');

util.types.isAnyArrayBuffer(new ArrayBuffer());  // Returns true

function foo() {
    util.types.isArgumentsObject(arguments);  // Returns true
}
util.types.isAsyncFunction(foo); //return false

const ab = new ArrayBuffer(20);
util.types.isDataView(new DataView(ab));  // Returns true
util.types.isDataView(new Float64Array());  // Returns false

util.types.isDate(new Date());  // Returns true
