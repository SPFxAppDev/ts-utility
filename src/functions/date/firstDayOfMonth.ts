import isset from "../isset";

/**
 * Determines the first day of month of the current or specified date
 * @param {Date} [date] Optional date from which the first day of the month should be determined. If no date is specified, the current date is used.
 * @return {Date} Returns the first day/date of current or specified date
 * @since 1.2.0
 */
export default function firstDayOfMonth(date?: Date): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const firstDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    firstDayOfMonth.setDate(1);

    return firstDayOfMonth;
}