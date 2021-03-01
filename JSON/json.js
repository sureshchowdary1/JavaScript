// JSON means - JavaScript Object Notation
        // also called as JavaScript Object
// JSon used to transfer the data over the network
// JSON is the light weight
// parsing(reading) of JSPON is easy compared to XML

// syntax :
    object => {}
    array  => []
    // data   => key and value pairs , key and values are seperated by " : "
                // key and value pairs are seperated by " , "
/*
        // Ex:
        let obj = {
                sub_one : "Angular",
                "sub_two" : "Node"          // quotes for keys are optional
        }

        console.log(obj.sub_one , obj.sub_two)      //Angular Node
*/

/*
         EX: Iteration of Object

        let obj = {
                sub_one : "Angular",
                "sub_two" : "Node"          // quotes for keys are optional
        }
        for (let key in obj){
                console.log(key)
                console.log( typeof(key) )                      // sub_one string  Angular
                console.log( obj[key])                          // sub_two string  Node   
        }                       

*/
/*
        Ex: Using functions in Object

        let obj = {
                'logIn' : LOGIN,
                'logOut' : LOGOUT
        }

        function LOGIN(){
                return ' Welcome to LOGIN'
        }

        function LOGOUT() {
                return ' Bye you LoggedOUT'
        }

        console.log(obj.logIn())                //  Welcome to LOGIN
        console.log(obj.logOut())               //  Bye you LoggedOUT

*/

let db = {
        'mysql' : ()=> {return 'mysql data base.....'},
        'oracle' : ()=> {return 'oracle data base.....'},
        'mongo' : ()=> {return 'mongo data base.....'}
}

console.log(db.mysql() )                //  mysql data base.....
console.log(db.oracle())                // oracle data base.....
console.log(db.mongo())                 // mongo data base.....