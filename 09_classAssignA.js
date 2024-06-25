class Vehicle{
    constructor(vehicleName, vehicleCompany, vehicleModel, vehicleColor, vehicleTransmission ){
        this.vehicleName = vehicleName;
        this.vehicleCompany = vehicleCompany;
        this.vehicleModel = vehicleModel;
        this.vehicleColor = vehicleColor;
        this.vehicleTransmission = vehicleTransmission;
    }
    details(){
        console.log(`Vehicle Details:
          vehicleName        : ${this.vehicleName},
          vehicleCompany     : ${this.vehicleCompany},
          vehicleModel       : ${this.vehicleModel},
          vehicleColor       : ${this.vehicleColor}, 
          vehicleTransmission: ${this.vehicleTransmission} `);
    }
}
const vehicleOne = new Vehicle("Thar Car", "Mahindra & Mahindra Limited", "2010-present", "Black", "Manual");
vehicleOne.details();
const vehicleTwo = new Vehicle("Activa Scooter", "Honda Motorcycle and Scooter India", "2022", "Red", "Automatic");
vehicleTwo.details();
const vehicleThree = new Vehicle("Electric Bicycle", "BMC", "2023", "Black", "Automatic");
vehicleThree.details();
const vehicleFour = new Vehicle("Yamaha MT 15 V2", "SharmaYamaha Motor Company", "2024", "Black", "Automatic");
vehicleFour.details();
const vehicleFive = new Vehicle("Tata Curvv EV", "Tata motors", "2024", "Blue", "Automatic");
vehicleFive.details();


console.log(`================= Step 2 ================`);

class College{
    constructor(collegeName, CollegeCity, collegeProfessor, collegeAddress){
        this.collegeName = collegeName;
        this.CollegeCity = CollegeCity;
        this.collegeProfessor = collegeProfessor;
        this.collegeAddress = collegeAddress;
    }
    display(){
        console.log(`College Details:
          collegeName        : ${this.collegeName},
          CollegeCity        : ${this.CollegeCity},
          collegeProfessor   : ${this.collegeProfessor},
          collegeAddress     : ${this.collegeAddress},`);
    }
}
const collegeOne = new College("Wadia college Pune", "Pune", "Aditya Farsole", "Bund Garden Road Pune");
collegeOne.display();
const collegeTwo = new College("Bharati Vidyapeeth Deemed University", "Pune", "Dr.Vaishali S Jadhav", "Sadashiv Peth Pune");
collegeTwo.display();
const collegeThree = new College("Savitribai Phule Pune University", "Pune", "Vijay Khare", "Ganesh Khind, University Pune");
collegeThree.display();
const collegeFour = new College("Fergusson College", "Pune", "Nitin Madhukar Kulkarni", "Address: Deccan, Pune – 411 004");
collegeFour.display();