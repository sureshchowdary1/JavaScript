// function f_one(arg1=1 ,arg2=2){
//     console.log(arg1 , arg2)
// }
// f_one()                         // 1 2
// f_one('hello' , 'suresh')       // hello suresh
// f_one(undefined , undefined)    // 1 2
// f_one(null , null)              //null null
// f_one(undefined , null)         //1 null
// f_one(undefined,'suresh')       //1 suresh

// function f_one( arg1=1, arg2=[] , arg3={} ){
//     console.log(arg1,arg2,arg3)
// }

// f_one()                             // 1 [] {}
// f_one('hello')                      // hello [] {}
// f_one('hello', 'hell' , 'ok')       // hello hell ok
// f_one('hello', ['hell'] , {key1 : 'hello'})       // hello [ 'hell' ] { key1: 'hello' }
// f_one(undefined , undefined , undefined)    // 1 [] {}
// f_one(null ,null, null)              //null null null

