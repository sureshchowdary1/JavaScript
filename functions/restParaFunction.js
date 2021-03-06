// - We will store 'more than one value in function argument'
// we will represent rest parameter with ' ... '
// ' ... ' operator called as spread operator
// We should need to place spread operator in last argument in parameters
// We cant take more than one spread operator in argument
// synatx:
    // function name(...arg) {
        
    // }
    // name(1,2,3,)

// only rest para meter is allowed
// rest parameter should be placed last

// function f_one(...arg){
//     console.log(arg)
// }

// f_one(10,20,30,40,50)        //[ 10, 20, 30, 40, 50 ]

// function f_one(arg1,...arg2){
//     console.log(arg1,arg2)
// }

// f_one(10,20,30,40,50)       //10 [ 20, 30, 40, 50 ]
// f_one('h','e','l','l','o')      // h [ 'e', 'l', 'l', 'o' ]
// f_one(undefined ,undefined)         //undefined [ undefined ]
// f_one(null ,null )       // null [null]

