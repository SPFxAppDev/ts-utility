import isset from "../isset";
import { Weekday } from "./Weekday.enum";

/**
 * Determines the first day of week of the current or specified date
 * @param {Date|null} [date] Optional date from which the first day of the week should be determined. If no date is specified, the current date is used.
 * @param {Weekday} [startDay] Optional specification on which day a week starts. The enum can be used or the values 0-6 (0 = Sunday, 1 = Monday... 6 = Saturday). Monday is used by default
 * @return {Date} Returns the first day/date of week of current or specified date
 * @since 1.2.0
 */
export default function firstDayOfWeek(date?: Date|null, startDay: Weekday = Weekday.Monday): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const firstDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = firstDayOfWeek.getDay();

    if(day == startDay) {
        return firstDayOfWeek;
    }
    
    const diff = day >= startDay ? day - startDay : 7 - (startDay - day);

    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - diff);

    return firstDayOfWeek;
}