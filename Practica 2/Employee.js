export default class Employee {
    constructor(id, fullName, dateOfAdmission, grade, curp, budgetCode){
        this.id = id;
        this.fullName = fullName;
        this.budgetCode = budgetCode;
        this.curp = curp;
        this.grade = grade;
        this.dateOfAdmission = dateOfAdmission;
    }
    antiquity () {
        const currentDate = new Date();
        const currentDay= currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1 ;
        const currentYear =  currentDate.getFullYear();
        //---
        const dayOfAdmission =  this.dateOfAdmission.getDate();
        const monthOfAdmission = this.dateOfAdmission.getMonth() + 1;
        const yearOfAdmission = this.dateOfAdmission.getFullYear();

        let antiquity = currentYear - yearOfAdmission;
        if ((currentMonth == monthOfAdmission && currentDay<dayOfAdmission) ||
            currentMonth<monthOfAdmission)
            antiquity --;
        return antiquity;

    }

}