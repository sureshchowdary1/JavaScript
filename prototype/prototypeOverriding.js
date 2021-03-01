// overRiding the parent class functionality with child class functionality called as prototypeOverriding

// We should need to assign same property/ variable name to perform overRiding
// Ex:

    function parent(){}
    parent.prototype.dbFun = function () {
        return ' mySql database soon....'
    }

    function child() {}
    child.prototype = Object.create(parent.prototype)

    child.prototype.dbFun = function () {
        return 'mongoDb database soon...'
    }

    let obj = new child()

    console.log(obj.dbFun())                // mongoDb database soon...