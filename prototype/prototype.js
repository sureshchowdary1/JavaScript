

// prototype is the pre-defined property, used to add the members dynamically

// acquiring properties from parent to child

// Ex-1
/*
    function class_one(){}

    // Adding variables dynamically
        class_one.prototype.var_one = "Angular"
        class_one.prototype.var_two = "Node"

    // Adding function dynamically
        class_one.prototype.fun_one = function () {
            return this.var_one
        }

        class_one.prototype.fun_two = function () {
            return this.var_two
        }

    // creating object to class_one
        let obj = new class_one()

        console.log(obj.fun_one() , obj.fun_two())          // Angular Node
*/

