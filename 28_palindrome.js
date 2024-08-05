
// Palindrome number check from both side 
function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    if (str === reverseStr) {
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome.`);
    }
}

let stringsToTest = ["madam", "141", "Sunday", "mom", "listen", "dad"];

stringsToTest.forEach(isPalindrome);
