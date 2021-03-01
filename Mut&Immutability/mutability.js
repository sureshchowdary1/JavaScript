// same memory

// There will be a communication between prent and child 

// changing parent / child will results in effecting/changing the sibling also 


let  obj1 = {key1: 'angular'}
let obj2 = obj1

obj1.key2 = 'node'
obj2.key2 = 'deno'

console.log(obj1)               // { key1: 'angular', key2: 'deno' }
console.log(obj2)               // { key1: 'angular', key2: 'deno' }



/*
let  obj1 = {key1: 'angular'}
let obj2 = obj1

obj1.key2 = 'node'
obj2.key3 = 'deno'

console.log(obj1)               // { key1: 'angular', key2: 'node', key3: 'deno' }
console.log(obj2)               // { key1: 'angular', key2: 'node', key3: 'deno' }
*/