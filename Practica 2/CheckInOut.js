import {timeDiff} from "./Time.js";
import {RETARDANT_LOWER_LIMIT, RETARDANT_UPPER_LIMIT} from "./Constants.js";
import {hasPermission} from "./Utils.js";

export default class CheckInOut{
    constructor(employee, date, checkIn, checkOut ) {
        this.employee = employee;
        this.date = date;
        this.checkIn =  checkIn;
        this.checkOut = checkOut;
    }


    isDelay(currentSchedule, permissions){
        const scheduledRegistration= this.#scheduledRegistration(currentSchedule);
        const timeElapsed = timeDiff(scheduledRegistration.checkIn, this.checkIn);
        return (timeElapsed>RETARDANT_LOWER_LIMIT && timeElapsed<=RETARDANT_UPPER_LIMIT
            && !hasPermission(this.employee, this.date, permissions));
    }
    isAbsenceForIncorrectRegistration (currentSchedule, permissions){
        const scheduledRegistration= this.#scheduledRegistration(currentSchedule);
        const isCheckOutBefore = this.checkOut < scheduledRegistration.checkOut;
        const _hasPermission = hasPermission(this.employee, this.date, permissions);
        return (timeDiff(this.checkIn, scheduledRegistration.checkIn)>RETARDANT_UPPER_LIMIT &&
            !_hasPermission ||
            (isCheckOutBefore && !_hasPermission));
    }

    #scheduledRegistration(currentSchedule) {
        const details = currentSchedule.details;
        const currentDay =  this.date.getDay();
        return details.find(scheduleDetail => scheduleDetail.day == currentDay);
    }

}