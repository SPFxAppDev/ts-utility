import isset from "../isset";
import firstDayOfWeek from "./firstDayOfWeek";
import { Weekday } from "./Weekday.enum";

/**
 * Determines the last day of week of the current or specified date
 * @param {Date|null} [date] Optional date from which the last day of the week should be determined. If no date is specified, the current date is used.
 * @param {Weekday} [startDay] Optional specification on which day a week starts. The enum can be used or the values 0-6 (0 = Sunday, 1 = Monday... 6 = Saturday). Monday is used by default
 * @return {Date} Returns the last day/date of week of current or specified date
 * @since 1.2.0
 */
export default function lastDayOfWeek(date?: Date|null, startDay: Weekday = Weekday.Monday): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const lastDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const firstDay = firstDayOfWeek(date, startDay);

    lastDayOfWeek.setDate(firstDay.getDate() + 6);

    return lastDayOfWeek;
}