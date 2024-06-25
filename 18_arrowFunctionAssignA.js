console.log(`============= Step 1 ============`);

var statement = () => {
console.log(`Arrow function with no args and no return values: "Good Morning, Today is Friday"`);
}
statement();

console.log(`============= Step 2 =============`);
var statement = (arg1, arg2, arg3=1) => {
  const multiplication  = arg1 * arg2 * arg3;
  console.log(`Multiplication of ${arg1}, ${arg2}, ${arg3} is: ${multiplication}`);
} 
statement(5, 5, 2);
statement(10, 4);

console.log(`============= Step 3 =============`);

var add= (arg1, arg2, arg3, arg4, arg5) => {
    if (typeof arg1 === "string" || typeof arg2 === "string" || typeof arg3 === "string" || typeof arg4 === "string" || typeof arg5 === "string") {
        const result = `${arg1} ${arg2} ${arg3} ${arg4} ${arg5}`;
        console.log(`Addition of ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5} is : "${result}"`);
    } else {
        const result = arg1 + arg2 + arg3 + arg4 + arg5;
        console.log(`Addition of ${arg1}, ${arg2}, ${arg3}, ${arg4}, ${arg5} is: ${result}`);
    }
}
add(100, 100, 200, 349, 756);
add("I am", "learning", "ES6", "features", "in depth");