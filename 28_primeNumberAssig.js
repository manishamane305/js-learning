function isPrime(num){
    for(let index = 2; index < num; index++){
        if(num % index == 0 ){
            return false;
        }

    }
    return true;
}
const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;
 for (const num of array) {
    if(isPrime(num)){
        count = count + 1;
    }
 }
 console.log(`Total number of prime numbers in array: ${count}`);