/**
 * Hoising in Javascript
*/

/*******************
 * In case of functions
*/
// Function statements are loaded before execution of code
// The following statements executes without any error.
display("Richa");
function display(name){
    console.log(name);
}


// Functional expressions are not loaded befor beginning of code execution. 
// It is because the variables are assigned undefined value if not declared and assigned a value before using them.
// If we uncomment the following statement, it will generate an error. 
// max(10,20); Generates an error: Uncaught TypeError: max is not a function

var max = function(a,b){
    var c = a>=b?a:b;
    console.log("Max = " + c);
}
// The following code execute as the function expression is above the function call.
max(10,20);


/*******************
 * In case of variables
*/

// The following statement returns undefine 
console.log("Age = "+ age)

var age =18;
console.log("Age = " + age);


