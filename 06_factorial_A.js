function factorialOfNum(num) {
    if (num == null || num == undefined) {
        console.log(`Invalid Input: ${num}`);
        return;
    }
    if (num === 0) {
        console.log(`Factorial of 0 is: 1`);
        return;
    }
    let fact = 1;
    for (let index = num; index >= 1; index--) {
        fact = fact * index;
    }
    console.log(`Factorial of ${num} is: ${fact}`);
}

factorialOfNum(5);       // Factorial of 5 is: 120
factorialOfNum(3);       // Factorial of 3 is: 6
factorialOfNum(null);    // Invalid Input: null
factorialOfNum(8);       // Factorial of 8 is: 40320
factorialOfNum(undefined); // Invalid Input: undefined
factorialOfNum(9);       // Factorial of 9 is: 362880
factorialOfNum(0);       // Factorial of 0 is: 1
