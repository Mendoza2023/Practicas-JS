export default class Person {
    fullName
    genre
    dateOfBirth
    singleMother

    constructor(fullName, dateOfBirth, genre, singleMother) {
        this.dateOfBirth = dateOfBirth;
        this.singleMother = singleMother;
        this.genre = genre;
        this.fullName = fullName;
    }
    age() {
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        //---
        const dayOfBirth = this.dateOfBirth.getDate();
        const monthOfBirth = this.dateOfBirth.getMonth() + 1;
        const yearOfBirth = this.dateOfBirth.getFullYear();

        let age = currentYear - yearOfBirth;
        if ((currentMonth == monthOfBirth && currentDay < dayOfBirth) ||
            currentMonth < monthOfBirth)
            age--;
        return age;
    }
}



