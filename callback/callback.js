// Passing one function to another function as argument is called as callback
// In general we use callback while making network call

// Ex:
    // function fun_one(arg1) {
    //     console.log(arg1())              // hello
    // }

    // fun_one(
    // function fun_two() {
    //     return 'hello'
    // })

// EX: multiple functions calling as arguments
    // function f_one(arg1,arg2,arg3) {
    //     console.log(arg1() , arg2() , arg3())       //Welcome, back suresh
    // }

    // f_one( ()=>{return 'Welcome,'}, ()=>{return 'back'} , ()=>{return "suresh"} )

// ex:
    // function f_one(para){
    //     return para('hello')
    // }
    // f_one((arg1)=>{console.log(arg1)})                      //hello

//  EX: calculation (add, sub, div , mul)       
    // the below code is known as callback hell code
        // A callback inside another callback is called as callback hell code
/*
function add(num,callback) {
    return callback(num+5 , false)
}
function sub(num,callback) {
    return callback(num -3  , false)
}
function mul(num,callback) {
    return callback(num*2 , false)
}
function div(num,callback) {
    return callback(num/7 , false)
}

add(5 , (addRes ,error)=>{
    if(!error){
        // console.log(addRes)                 // 10
        sub(addRes ,(subRes ,error)=>
        {
            if(!error){
                // console.log(subRes)             // 7

                mul(subRes, (mulRes,error)=>{
                    if(!error){
                        console.log(mulRes)         // 14
                        div(mulRes, (divRes,error)=>{
                            if(!error){
                                console.log(divRes) // 2
                            }
                        })
                    }
                })
            }
        })
    }
})

// if one of the case failed to excute then the restof the other cases alsofailed 
*/

// EX: Solution for callback hell code 
    function add(num){
        return new Promise((resolve,reject)=>{
            resolve (num+5)
        })
    }
    function sub(num){
        return new Promise((resolve,reject)=>{
            resolve (num -3)
        })
    }
    function mul(num){
        return new Promise((resolve,reject)=>{
            resolve (num*2)
        })
    }
    function div(num){
        return new Promise((resolve,reject)=>{
            resolve (num/7)
        })
    }

    async function consumer() {
        let addRes = await add(5)
        let subRes = await sub(addRes)
        let mulRes = await mul(subRes)
        let divRes = await div(mulRes)

        console.log(addRes ,subRes , mulRes ,divRes)        // 10 7 14 2
    }

    consumer()