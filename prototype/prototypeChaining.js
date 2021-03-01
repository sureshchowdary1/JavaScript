//  getting the data from parent to child function called as prototypeChaining

// Ex-1:

    function  parent() {}
    parent.prototype.var_one = "parent_element"

    function  child() {}
    child.prototype = Object.create(parent.prototype)

    child.prototype.var_two = "child_element"

    let obj1 = new parent()
    console.log(obj1.var_one)           // parent_element

    let obj2 = new child()
    console.log(obj2.var_one , obj2.var_two)        // parent_element child_element




// Ex-2         acquiring properties from parent to child
/*  good pratice is giving data dynamically
        function parent() {
            this.parent_ele = "Hello"
        }
        function child() {
            this.child_ele = "suresh"
        }

        child.prototype = Object.create(parent.prototype)

        // let obj1 = new parent()
        // console.log(obj1.parent_ele)            // Hello

        let obj2 = new child()
        console.log(obj2.parent_ele , obj2.child_ele)       // undefined suresh but Hello suresh correct
        console.log(obj2)                           //parent { child_ele: 'suresh' }
*/

