
// Converting of Tightly coupled business logic to lightly coupled business logic is called currying

// Tightly coupled code
/*
    let add = (num1,num2)=>{
        console.log('Addition' , (num1+num2))

        return (num1,num2)=>{
            console.log('Subtraction' , (num1-num2))

            return (num1,num2)=>{
                console.log('Multiplication' , (num1*num2))

                return (num1,num2)=>{
                    console.log("Division", (num1/num2))
                }
            }
        }
    }

    add(10,10)                              // Addition 20
    add(10,10)(10,10)                       // Addition 20 Subtraction 0
    add(10,10)(10,10)(10,10)                // Addition 20 Subtraction 0 Multiplication 100
    add(10,10)(10,10)(10,10)(10,10)         // Addition 20 Subtraction 0 Multiplication 100 Division 1

*/

// EX: Loosely coupled code

let add = (num1,num2)=>{
    console.log('Addition' , (num1+num2) )

    return sub
}
let sub = (num1,num2)=>{
    console.log('Subtraction' , (num1-num2) )

    return mul
}
let mul = (num1,num2)=>{
    console.log('Multplication' , (num1*num2) )

    return div
}
let div = (num1,num2)=>{
    console.log('Division' , (num1/num2) )

}

    add(10,10)                              // Addition 20
    add(10,10)(10,10)                       // Addition 20 Subtraction 0
    add(10,10)(10,10)(10,10)                // Addition 20 Subtraction 0 Multiplication 100
    add(10,10)(10,10)(10,10)(10,10)         // Addition 20 Subtraction 0 Multiplication 100 Division 1