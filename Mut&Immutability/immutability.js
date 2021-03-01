// different memory 

// There will be no connection between parent and child is called immutability

// ex:

let obj1 = {key1 : "angular"}
let obj2 = {...obj1}

obj1.key2 = "nodeJS"
obj2.key2 = "Deno"

console.log(obj1)               // { key1: 'angular', key2: 'nodeJS' }
console.log(obj2)               // { key1: 'angular', key2: 'Deno' }