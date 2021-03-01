// function f_one(arg1?:string,arg2?:string):void{
//     console.log(arg1,arg2)       //undefined undefined
// }
// f_one()
function f_two(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "hello_2"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
//f_two();            // Expected at least 1 arguments, but got 0.
f_two('hello_1');
f_two('hello_1', undefined, 'hello_3', 'hello_4', "hello_5");
