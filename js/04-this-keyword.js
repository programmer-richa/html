/**
 *  Using this keyword
 * this refers to the caller element.
 * All the variables and functions have a Global Scope. Therefore, they belongs to window object.
*/

var raman = {
    // Define attribute of an object
    name: "Raman",
    birthYear: 1989,
    hasCitizenship: true,
    // Defining method
    display: function () {
        // Prints the calling variable object
        console.log(this);
        console.log(this.name + " " + this.birthYear + " " + citizenshipStatus(this.name,this.hasCitizenship));
        // defining local function
        function citizenshipStatus(name,hasCitizenship) {
            // the below statement prints reference of window object.
            // It is because all the variable and functions fall under global scope in JS. 
            console.log(this);
            return hasCitizenship ? name + " is a Canadian Citizen." : name + " is not a Canadian Citizen.";
        }
    },
}

raman.display();


/**
 * Creating object by using new object syntax
 */

var preet = new Object();
preet.name = "Preet";
preet.birthYear = 1990;
preet.hasCitizenship = false;
// Copy defination from one object to other
preet.display = raman.display;

// The following statement prints data of preet variable object (VO) 
preet.display();