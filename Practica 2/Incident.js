import CheckInOut from "./CheckInOut.js";
import {ANTIQUITY_EXEMPT_FOR_APPLY_RETARDANT, NUMBER_OF_RETARDANT_EQUIVALENT_TO_ONE_ABSENCE} from "./Constants.js";
import addDays, {hasPermission} from "./Utils.js";

export default class  Incident {
    constructor (employee, currentSchedule, checksInOut,
        permissions, initialDate, finalDate) {
        this.employee = employee;
        this.currentSchedule = currentSchedule;
        this.checksInOut = checksInOut;
        this.permissions = permissions;
        this.initialDate = initialDate;
        this.finalDate = finalDate;
    }
    #getRetardant() {
        const checks= this.checksInOut.filter (
            item => item.employee==this.employee &&
                item.date>=this.initialDate && item.date<=this.finalDate
        );
        return (checks.filter(item => item.isDelay(this.currentSchedule,this.permissions)).length);
    }
    #getExpectedChecks() {
        const expectedChecks= [];
        let dayOfWeek= this.initialDate.getDay();
        let expectedDateOfRegistration =this.initialDate;
        const scheduleDetails= this.currentSchedule.details;
        while (expectedDateOfRegistration<=this.finalDate ) {
            let dayScheduleDetail = scheduleDetails.find( item => item.day==dayOfWeek);
            if (dayScheduleDetail != null) {
                expectedChecks.add(new CheckInOut(expectedDateOfRegistration,
                    this.employee,dayScheduleDetail.checkIn, dayScheduleDetail.checkOut))
            }
            dayOfWeek = dayOfWeek++;
            expectedDateOfRegistration = addDays(expectedDateOfRegistration,1);
        }
        return expectedChecks;
    }
    getAbsences() {
        const checks = this.checksInOut.filter(item => item.employee == this.employee &&
            item.date >= this.initialDate && item.date <= this.finalDate);
        const expectedChecks = this.#getExpectedChecks();
        const retardant = this.#getRetardant();
        const isApplyRetardant =  this.employee.antiquity() < ANTIQUITY_EXEMPT_FOR_APPLY_RETARDANT;
        const absencesForRetardant = isApplyRetardant?(retardant / NUMBER_OF_RETARDANT_EQUIVALENT_TO_ONE_ABSENCE):0;

        const absenceForIncorrectRegistration = checks.filter(item =>
            item.isAbsenceForIncorrectRegistration(this.currentSchedule, this.permissions)).length;

        const absences = absenceForIncorrectRegistration + expectedChecks.filter(item =>
            checks.find(check => check.date == item.date) == null &&
            !hasPermission(this.employee, item.date, this.permissions)).length;

        return (absences + absencesForRetardant);
    }
}