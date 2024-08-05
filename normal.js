// var a=5, b= "Manisha", c= 7;
// console.log(b);

// console.log(city);
// let city = "Pune";



// var str = true;
// var btr  = "7";
// console.log(str-btr);

// let array = ["MAnisha", 1233, true]


var array = [10, 20, 30, 40, 32];
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index%2==0) {
        sum = sum+element;
        
    }
    
}
console.log(sum);
