console.log(`------------- Step 1 -------------`);
var reverseString = "Software";
var result = " ";
for (let index= reverseString.length-1; index >= 0; index--) {
   var character = reverseString.charAt(index);
   result=result + character;
}
console.log(`Reversed string is: ${result}`);
 
console.log(`------------- Step 2 -------------`);
var reverseString = "UI Developer";
var result = "";
for (let index  =  reverseString.length-1; index >= 0; index--) {
   var ch =  reverseString.charAt(index);
   result = result+ch;
}
console.log(`Reversed string is: ${result}`);


console.log(`------------- Reversed string without using pre-defined method -------------`);
var reverseString = function(argOne){
var result ="";
for (let index = argOne.length-1; index >= 0; index--) {
    var ch = argOne.charAt(index);
    result = result + ch;
}
return result;
};
var value = reverseString("Web Developer");
console.log(`Reversed string is: ${value}`);
var value= reverseString("Billon Dollar");
console.log(`Reversed string is:${value}`);
var value = reverseString("Java");
console.log(`Reversed string is: ${value}`);


