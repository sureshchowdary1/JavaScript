// It is used to control the flow of excution inside function call, then we will choose Generator

// generate function will prefex with " * '"
// inside generate function, each statement will prefix with " yield "

// after return yield will not be excute

/*
function *f_one(){
    yield ' heloo_1';
    yield ' heloo_2';
    yield ' heloo_3';
    yield ' heloo_4';
    yield ' heloo_5'
}

let cursor = f_one()

console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())      // { value: ' heloo_1', done: false }
                                { value: ' heloo_2', done: false }
                                { value: ' heloo_3', done: false }
                                { value: ' heloo_4', done: false }
                                { value: ' heloo_5', done: false }
                                { value: undefined, done: true }
*/


// function *f_one(){
//     yield ' heloo_1';
//     yield ' heloo_2';
//     yield ' heloo_3';
//     yield ' heloo_4';
//     return 'hello';
//     yield ' heloo_5'
// }

// let cursor = f_one()

// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())      // { value: ' heloo_1', done: false }
//                                 // { value: ' heloo_2', done: false }
//                                 // { value: ' heloo_3', done: false }
//                                 // { value: ' heloo_4', done: false }
//                                 // { value: 'hello', done: true }
//                                 // { value: undefined, done: true }


// we can also give function in yield state to call

    function *f_one(){
        yield 'hello1'
    }
    function *f_two(){
        yield 'hello2'
    }
    function *f_three(){
        yield 'hello3'
    }

    function *fun(){
        yield f_one()
        yield f_two()
        yield f_three()
    }

    let cursor = fun()

    console.log(cursor.next())
    console.log(cursor.next())
    console.log(cursor.next())
    console.log(cursor.next())      //{ value: Object [Generator] {}, done: false }
                                    // { value: Object [Generator] {}, done: false }
                                    // { value: Object [Generator] {}, done: false }
                                    // { value: undefined, done: true }