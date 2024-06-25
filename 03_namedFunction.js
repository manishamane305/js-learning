//1. Named function with no argument and no return value
function show(){
    console.log("Hey.. Manisha");
}
show();

console.log("======== square() ========");
function square(){
    console.log("Finding the square of 10...");
    var result = 10* 10;
    console.log("Square is:", result);
}
square();
//square();

console.log("======== squareNumber() ========");
//2. Named function with argument and no return value
function squareNumber(num){
    console.log("Given number is:", num);
    var result = num * num; // num is argument
    console.log("Square is:", result);
}
squareNumber(5);
squareNumber(25);

// WAP with name areaOfRectangle and it's two arguments namely as length and width
function areaOfRectangle(length, width){ // length and width is argument if we use only one value for calling  at that time length= 30, width= Undefined or 
    
    console.log("Given Length and width is:", length, width);
    var result = length * width;
    console.log("Area of rectangle is:", result);
}
areaOfRectangle(30, 20);

//3. Named function with argument and return value

// Write a function to find cube of given number
console.log("======= cubeOfNum() =======");
function cubeOfNum(num){
console.log("Given number is:", num);
var result = num * num * num;
 return result;

}
 var cube = cubeOfNum(3);
 console.log("Cube is:", cube);