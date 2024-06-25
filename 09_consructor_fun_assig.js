function Bank(bankName, location, ifscCode, branchCode){
this.bankName = bankName;
this.location = location;
this.ifscCode = ifscCode;
this.branchCode = branchCode;
}

const yesBank = new Bank("Yes Bank", "Chinchwad", "YESB0000082", 123456);
console.log(`Yes Bank Details:
     Bank Name:${yesBank.bankName},
     Bank Locaion: ${yesBank.location},
     IFSC Code: ${yesBank.ifscCode},
     Branch Code: ${yesBank.branchCode}`);

const bankOfMaharashtra = new Bank("Bank Of Maharashtra", "Nigadi", "BOM0000082", 345098);
console.log(`Bank of Maharashtra Bank Details:
    Bank Name:${bankOfMaharashtra.bankName},
    Bank Locaion: ${bankOfMaharashtra.location},
    IFSC Code: ${bankOfMaharashtra.ifscCode},
    Branch Code: ${bankOfMaharashtra.branchCode}`);
          
const hdfc = new Bank("HDFC Bank", "Chinchwad", "HDFC0000082", 708436);
console.log(`HDFC Bank Details:
    Bank Name:${hdfc.bankName},
    Bank Locaion: ${hdfc.location},
    IFSC Code: ${hdfc.ifscCode},
    Branch Code: ${hdfc.branchCode}`);
               
               
const bankOfIndia = new Bank("Bank of India", "Akurdi", "BOI0000082", 279283);
console.log(`Bank of India Bank Details:
    Bank Name:${bankOfIndia.bankName},
    Bank Locaion: ${bankOfIndia.location},
    IFSC Code: ${bankOfIndia.ifscCode},
    Branch Code: ${bankOfIndia.branchCode}`);  
    console.log(`============ open and close time ============`);
    Bank.prototype.openTime = "9 AM IST";
    Bank.prototype.closeTime = "6 PM IST";

    console.log(`HDFC bank open time is: ${hdfc.openTime} and it's close time is: ${hdfc.closeTime}`);
    console.log(`Bank of India open time is: ${bankOfIndia.openTime} and it's close time is: ${bankOfIndia.closeTime}`);

    console.log(`=========== Yes bank modified details are below: ===========
        Bank Name:${yesBank.bankName},
        Branch Code: ${yesBank.branchCode},
        Bank open time: ${yesBank.openTime}`);