function f1() {
    console.log('Hi')
    return true
}
const f2 = function() {
    console.log('Hi')
    return true
}
// outer "this"
const f3 = () => {
    // still outer "this"
    console.log('Hi')
    return true
}
const f4 = function f() {
    console.log('Hi')
    return true
}
const f = function() {console.log('Boo')} 
f.boo = 1
f() //outputs Boo*
console.log(f.boo) //outputs 1*
