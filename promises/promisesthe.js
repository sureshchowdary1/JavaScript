// communication between producer and consumer called as promise
// promises are special java script objects
// producer will generate promises
// consumer will consume promises
// we will create the promises by using promise class
// we can consume the promises in 2 ways
    // 1) then()    (<ES6 version)
    // 1) async and await    ( ES6 version)

    // syntax : 
        let var_name = new Promise((resolve,reject)=>{ return })

        var_name.then( (posRes)=>{} , (errRes)=>{} )

// we can create n no.of promises
/*
// generating the promise
    let promise1 = new Promise((resolve,reject)=>{
        resolve('hello')
    })
// consume the promise
    promise1.then((posRes)=>{
        console.log(posRes)
    },(errRes)=>{
        console.log(errRes)
    })
            // hello

*/

// ex:Multiple promises

    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise1')
        },0)
    })
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise2')
        },5000)
    })
    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise3')
        },10000)
    })

    // consuming promises individualy

    // promise1.then( (posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})       // promise1  after 0sec
    // promise2.then( (posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})       // promise2  after 5sec
    // promise3.then( (posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})       // promise3  after 10sec

    // consuming all promises

    // Promise.all([promise1 , promise2, promise3]).then((posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})

                    //  [ 'promise1', 'promise2', 'promise3' ]      after 10 sec all will excute

    // - MAIN bug in the all() is if there is any error promise it only excute error and stop excuting o/p => error

    // To over come all() bug we have allSettled()

    // consuming allSettled()    - it will print both posRes and errRes

    // Promise.allSettled([promise1 , promise2, promise3]).then((posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})
                                                        // [
                                                        //     { status: 'fulfilled', value: 'promise1' },
                                                        //     { status: 'fulfilled', value: 'promise2' },
                                                        //     { status: 'fulfilled', value: 'promise3' }
                                                        //   ]

    // To know which function will excutes first we have race()

    // Promise.race([promise1 , promise2, promise3]).then((posRes)=>{console.log(posRes)} , (errRes)=>{console.log(errRes)})
    // - it will only exute first excte value and stop excuting                                  // promise1

