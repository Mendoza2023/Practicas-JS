import Employee from "./Employee.js"
import {Schedule, ScheduleDetail} from "./Schedule.js"
import {Grade} from "./Grade.js";
import {Day} from "./Day.js";
import CheckInOut from "./CheckInOut.js";


const employee = new Employee(1,"Ambrosio Cardoso Jimenez",
    new Date("2009/05/16"), Grade.MASTER,"CAJA741207HOCRMM06","1234");

const details = [new ScheduleDetail(Day.TUESDAY,"08:00","16:00"),
                 new ScheduleDetail(Day.WEDNESDAY,"07:00","15:00"),
                 new ScheduleDetail(Day.THURSDAY,"09:00","17:00"),
                 new ScheduleDetail(Day.FRIDAY,"08:00","16:00")
                ];
const schedule = new Schedule(1,employee,new Date("2023/01/01"), new Date("2023/06/31"))
    .addDetail(new ScheduleDetail(Day.MONDAY,"07:00", "15:00"))
    .addDetails(details)
    .build()

console.log(schedule);

const checkInOut = new CheckInOut(employee,new Date("2023/02/23"),"08:00","16:00");

console.log(checkInOut.isAbsenceForIncorrectRegistration(schedule,[]));