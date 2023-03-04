export class Schedule {
    constructor(id, employee, initialDate, finalDate  ){
        this.id = id;
        this.employee = employee;
        this.initialDate = initialDate;
        this.finalDate = finalDate;
        this.details = [];
    }
    addDetail(scheduleDetail){
        this.details.push(scheduleDetail);
        return this;
    }
    addDetails(scheduleDetails){
        this.details.push(...scheduleDetails);
        return this;
    }
    build() {
        return {
            id: this.id,
            employee: this.employee,
            initialDate: this.initialDate,
            finalDate: this.finalDate,
            details: this.details
        };
    }

}
export class ScheduleDetail {
    constructor(day, checkIn, checkOut, ) {
        this.day = day;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}




