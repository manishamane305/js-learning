function charCount(argOne){
    var result = "";
    var counter = 0;
for (let index = 0; index < argOne.length; index++) {
    var charOf = argOne.charAt(index);
    charOf = charOf + result;
    if (charOf == "a") {
        counter++;  
    }
} 
return counter; 
}
var charValue = charCount("JavaScript");
console.log(`Count of "a" in string is: ${charValue}`);
var charValue = charCount("Do or Die");
console.log(`Count of "a" in string is: ${charValue}`);
var charValue = charCount("Learn with us, Job with us");
console.log(`Count of "a" in string is: ${charValue}`);
var charValue = charCount("Empowering Dreams, Guaranteeing Futures");
console.log(`Count of "a" in string is: ${charValue}`);
var charValue = charCount("Anny, My favorite fruit is Apple");
console.log(`Count of "a" in string is: ${charValue}`);

console.log(`================= Program to count vowels ==================`);
function vowelsCount(argOne){
    var result = "aeiou";
    var counter = 0;
    for (let index = 0; index < argOne.length; index++) {
        var charOf = argOne.charAt(index);
        var lowerCase = charOf.toLowerCase();
        if (result.includes(lowerCase)) {
            counter++;
        }
    }
    return counter;
}
var countValue = vowelsCount("JavaScript");
console.log(`Total vowels in string "JavaScript" is: ${countValue}`);
var countValue = vowelsCount("HTML and CSS");
console.log(`Total vowels in string "HTML and CSS" is: ${countValue}`);
var countValue = vowelsCount("Language Of Internet");
console.log(`Total vowels in string "Language Of Internet" is: ${countValue}`);
var countValue = vowelsCount("I am an UI Developer");
console.log(`Total vowels in string "I am an UI Developer" is: ${countValue}`);
var countValue = vowelsCount("Do or Die");
console.log(`Total vowels in string "Do or Die" is: ${countValue}`);


console.log(`=============== Program to count words ==============`);

function wordCount(argOne){
    var wordsArray = argOne.split(' ');
    return wordsArray.length;
}
var totalWord= wordCount("JavaScript The language of Internet");
console.log(`Total number of words in given string "JavaScript The language of Internet" is: ${totalWord}`);
var totalWord= wordCount("Enhance Your Learning Journey with Exclusive Add-ons ");
console.log(`Total number of words in given string "Enhance Your Learning Journey with Exclusive Add-ons" is: ${totalWord}`);
var totalWord= wordCount("Beyond frameworks, Beyond imagination");
console.log(`Total number of words in given string "Beyond frameworks, Beyond imagination" is: ${totalWord}`);
var totalWord= wordCount("I am passionate software developer");
console.log(`Total number of words in given string "I am passionate software developer" is: ${totalWord}`);

