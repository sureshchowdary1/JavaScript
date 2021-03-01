// function f_one(arg1?:string,arg2?:string):void{
//     console.log(arg1,arg2)       //undefined undefined
// }
// f_one()

function f_two(arg1:any, arg2:any="hello_2" , arg3?:any , ...arg4:any):void {
    console.log(arg1 , arg2 , arg3 ,arg4)
}

//f_two();            // Expected at least 1 arguments, but got 0.
f_two('hello_1')      // hello_1 hello_2 undefined []
f_two('hello_1' , undefined , 'hello_3' , 'hello_4' , "hello_5")    //hello_1 hello_2 hello_3 [ 'hello_4', 'hello_5' ]