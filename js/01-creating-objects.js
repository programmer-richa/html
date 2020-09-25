/*******************************************
 * Creating object by using object literal
 */

var raman ={
    name:"Raman",
    age:28,
    hasCitizenship:true,
    display:function(){
        console.log(this.name+" "+ this.age+" "+ this.citizenshipStatus());
    },
    citizenshipStatus:function(){
        return this.hasCitizenship ? this.name + " is a Canadian Citizen." :  this.name + " is not a Canadian Citizen.";
    }
}

raman.display();


/**
 * Creating object by using new object syntax
 */

 var preet = new Object();
 preet.name = "Preet";
 preet.age = 18
 preet.display=function(){
    console.log(this.name+" "+ this.age);
}

preet.display();