const professor = {
    pName: "Jayati Ghoshs",
    pAge: 69,
    pDeparment: "Economics",
    pEducaion: "Economic Studies and Planning",
    pCity: "Pune",

    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        BA: "Economics Fundamental",
        BSC: "Adv leaning",
        MCA: "Economics",
    },
    certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificat in Adv Programming"] 
}
console.log(professor);
professor.totalExperice = "14 Years";
console.log(professor);
console.log(`Total Experince is: ${professor.totalExperice}`);


console.log(`Before modifing property`);
console.log(professor);
console.log(`After modifing propery`);
professor.pEducaion = "Research and Development"
console.log(professor);

console.log(`========= Add element in array ==========`);

const addElement = professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);

console.log(`===== Log  the last element of array =====`);
 
const lastElement = (professor.certificates[professor.certificates.length - 1]);
console.log(`Last element in array is: ${lastElement}`);


console.log(`====== Log the complete the object ========`);
console.log(professor);