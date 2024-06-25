console.log(`================ Print number from 0 to 100 ==============`);
for (let index = 0; index <= 100; index++) {
   console.log(index);
}

console.log(`================ Print EVEN Number from 0 to 50 ==============`);
for (let index = 0; index <= 50; index = index + 2) {
 console.log(index); 
}

console.log(`================ Print number 10 to 0 ==============`);
for (let index = 10; index >= 0; index--) {
 console.log(index); 

}

 console.log(`========= Switch Case =========`);
var daySeven = 5;
 switch (daySeven) {
   case 1:
      console.log("Monday");
      break;
      case 2:
         console.log("Tuesday");
         break;
    
         case 3:
      console.log("Wed");
      break;
 
      case 4:
      console.log("Thursday");
      break;
 
      case 5:
      console.log("Friday");
      break;
 
      case 6:
      console.log("Saturday");
      break;
 
      case 7:
      console.log("Sunday");
      break;
 

   default:
      console.log(`Invalid day: ${daySeven}`);
      break;
 }

 console.log(`========= Switch Case =========`);

 console.log("========== Months ===========");
 function monthOfYear(month){
   switch (month) {
      case 1:
         console.log("Jan");
         break;

         case 2:
         console.log("Feb");
         break;
         
         case 3:
         console.log("March");
         break;
         
         case 4:
         console.log("April");
         break;
         
         case 5:
         console.log("May");
         break;
         
         case 6:
         console.log("June");
         break;
         
         case 7:
         console.log("July");
         break;
         
         case 8:
         console.log("Aug");
         break;
         
         case 9:
         console.log("Sep");
         break;
         case 10:
         console.log("Oct");
         break;
         case 11:
         console.log("Nov");
         break;
         
         case 11:
         console.log("Dec");
         break;
         
         
         
   
      default:
         console.log(`Invalid month: ${month}`);
         break;
   }

 }
 monthOfYear(0);