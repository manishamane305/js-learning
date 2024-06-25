function squareOfWordLength(argOne){
    var len = argOne.length;
    var result = len * len;
    return result;
}
 var returnValue = squareOfWordLength("Javascript");
console.log(`Length square of word "JavaScript is: ${returnValue}`);

 var returnValue2 = squareOfWordLength("Google Chrome");
 console.log(`Length square of word "Google Chrome is: ${returnValue2}`);

 var returnValue3 = squareOfWordLength("Developer Smart");
console.log(`Length square of word "Developer Smart is: ${returnValue3}`);

console.log(`==================== ====================`);
 
var str = "I am Angular Developer";
console.log(`Given string is: ${str}`);
var len = str.length;

var words = str.split(' ');
var numberOfWords = words.length;


var divideTotalNum =  len / numberOfWords;
console.log(`String length of divide by total number of word is: ${divideTotalNum}`);

var multiplicationTotalNum = len * numberOfWords;
console.log(`String length of multiplication by total number of word is: ${multiplicationTotalNum}`);
