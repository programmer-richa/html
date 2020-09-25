/*******************************************
 * Creating object by prototyping
 * 
 * Use function statements to create prototype
 */

 let Person = function(name,gender,birthYear){
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
    this.calculateAge = ()=>{
        // This method belongs to person.
        console.log("Age: " + (2020-birthYear));
    }
 }

 Person.prototype.commonProperty="This property is accessible in all child objects using this keyword.";
Person.prototype.Age= function(){
    // This method belongs to person.
    console.log("Age: " + (2020-this.birthYear));
}
 Person.prototype.display = function(){
    console.log("Name: " + this.name);
    console.log("DOB: " + this.birthYear);
    console.log("Gender: " + this.gender);
 }

 let raman = new Person("Raman","Male",1989);
 raman.display();
 raman.calculateAge();


 let Student = function(course){
    this.course = course;
 }
// Inheriting Person Prototype
 Student.prototype=Person

 // Creating an object of type Student
 let sahil = new Student("BBA");
 
 // Defining values of student proptotype. This is necessary to assign data to Person prototype
 sahil.prototype.name="Sahil Chawla";
 sahil.prototype.birthYear=1990;
 sahil.prototype.gender="Male";

// This line will add a name property to sahil object.
  sahil.name = "Sahil";
  
// The below line will generate error as the calculateAge() method is not defined as prototype in Person.
// sahil.calculateAge();
 

 // Accessing attributes and functions of the Person prototype
 console.log(sahil.prototype.commonProperty);
 sahil.prototype.display();
 sahil.prototype.Age();
 
