/*************************************************************
 * Creating class
 */

 class Person{
     constructor(name,birthYear,gender){
         this.name = name;
         this.birthYear = birthYear;
         this.gender = gender;
     }

     display(){
        console.log("Name: "+this.name);
        console.log("BirthYear: "+this.birthYear);
        console.log("Gender: "+this.gender);
     }

     calculateAge(){
        console.log("Age: "+ (2020 - this.birthYear) );
     }
 }


 let sahil = new Person("Sahil",1990,"Male");
 sahil.display();
/**********************************
 *  Inheritance example
 */

 class Student extends Person{
     constructor(name,birthYear,gender,course){
         super(name,birthYear,gender);
         this.course = course;
     }

     display(){
         super.display();
         console.log("Course: " + this.course);
     }
 }

 let raman = new Student("Raman",1989,"Male","BBA");
 raman.display();