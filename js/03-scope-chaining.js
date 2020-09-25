/**
 * By default scope is Global
*/

// Global variable declaration
var a = 1;


function first(){
    // This function can use variables a and b, however b is inaccessble outside first()
    // local variable to first()
    var b = 2;
    function second(){
        // This function can access a,b and c variable.
        var c =3;
        console.log("a : " + a + " b : " + b + " c : " + c);
        third();
    }
    second();
}

function third(){
    // This function can use variables a and d, however d is inaccessble outside third()
    var d = 4;
    console.log("d : " +  d);
    // declare a local variable `a`
    // This do not overwrite value of global variable.
    var a=10;
    console.log("a : " +  a);
    // Below statement will raise error: ReferenceError: b is not defined
    //console.log("a : " + a + " b : " + b + " c : " + c);
}

first();
// Prints value of global variable a, i.e. 1
console.log("a : " +  a);