//1. Named function with no argument and no return value
console.log("======== Stage-01 No argument and no return ===========");
function demo(){
    console.log("01. The world is at your feet, full of opportunities waiting to be seized.");
}
demo();

function text(){
    console.log("02. Remember, every great achievement starts with a single step.");
}
text();

//1. Named function with no argument and no return value
console.log("======== Stage-02  ==========");
function personalDetails(firstName, lastName, collegeName){
console.log("My first name is:", firstName);
console.log("My last name is:", lastName);
console.log("My college name is:", collegeName);
}
personalDetails("Manisha", "Mane", "D.BatuLonere");

console.log("======== Stage-03 ===========");
function addThreeValues(numOne, numTwo, numThree){
    
    console.log("Addition of three values is:", numOne + numTwo + numThree);
    
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");