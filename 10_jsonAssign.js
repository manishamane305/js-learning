const employeeInfo = `{
"name": "Aleix Melon",

"id": "E00245",

"role": ["Dev", "DBA"],

"age": 23,

"doj": "11-12-2019",

"married": false,

"address": {

"street": "32, Laham St.",

"city": "Innsbruck",

"country": "Austria"

},

"referred-by": "E0012"

}`


console.log(`============ Converted in Object   ============`);
const employee = JSON.parse(employeeInfo);
console.log(employee);

console.log(`============ Log role on console ===========`);
for (const role of employee.role) {
    if (role === "Dev") {
        console.log(`Log role "Dev" : ${role}`);
    }
}

console.log(`============ Log last name on console ===========`);
const lastName = employee.name.split(' ')[1];
console.log(`Last name is: ${lastName}`);

console.log(`============ Log joining year on console ===========`);
const joiningYear = employee.doj.split('-')[2];
console.log(`Joining year is: ${joiningYear}`);