// (
//     ()=>{

//     }
// ) ()

// (
//     (arg1)=>{
//         console.log(arg1)
//     }
// ) ('hello')             // hello

// to over come the bug of var keyword in for loop

// for( var i=0;i<5;i++ ){

//     (
//         (i)=>{
//             setTimeout(()=>{
//                 console.log(i)
//             },5000)
//         }
//     )(i)

// }               // 0 1 2 3 4

// let res = ((arg1,arg2,arg3)=>{
//     return `${arg1} ${arg2} ${arg3}`
// })('hello' , 'welcome to', 'all')
// console.log(res)                //hello welcome to all