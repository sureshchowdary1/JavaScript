// call() - we will give arguments independently

// apply() - we will give arguments in Array

// bind()  - Used to create the new element 
/*
    // Ex:
        let obj = {num1:10 , num2:20}

        function myFun(arg1,arg2,arg3){
            console.log(arg1,arg2,arg3)
        }

        myFun(30,40,50)                     // 30 40 50
*/

// code we want to excute will return error due to calling failed  because obj present into one memory location and function in another memory location
/*
// Ex:

    let obj = {num1:10 , num2:20}

        function myFun(arg1,arg2,arg3){
            console.log(this.num1 ,this.num2 ,arg1,arg2,arg3)
        }

        myFun(30,40,50)             // undefined undefined 30 40 50
*/
// - By using call() , apply() , bind() we allocate them to same memory locations


    let obj = {num1:10 , num2:20}

    function myFun(arg1,arg2,arg3){
        console.log(this.num1 ,this.num2 ,arg1,arg2,arg3)
    }
// call()
    // myFun.call(obj,30,40,50)            // 10 20 30 40 50

// apply()
    // myFun.apply(obj,[30,40,50])            // 10 20 30 40 50

// bind()  // by using bind we will create new object

    let newFun = myFun.bind(obj)
    newFun(30,40,50)                        // 10 20 30 40 50