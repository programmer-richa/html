/*******************************************************
 * Creating functions 
*/


/*******************************************************
 *  Declaring function with multiple arguments
 *  The below function expression is equivallent of writing
 * 
 *  function max(a,b){
 *      return a<=b?a:b;
 * }
*/
const max = (a,b)=>{
    return a<=b?a:b;
}

console.log(max(10,20));


/*******************************************************
 * Declaring function with single argument
*/
const print = (msg)=>{ 
    console.log(msg);
}

print("Hello");


/*******************************************************
 * Declaring function with single argument and with single return statement
*/
const square = (num)=> num*num

console.log(square(5));
