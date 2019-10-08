let arr = []
let arr2 = [1, "Hi", {a:2}, () => {console.log('boo')}]
let arr3 = new Array()
let arr4 = new Array(1,"Hi", {a:2}, () => {console.log('boo')})
arr4[3]() // boo