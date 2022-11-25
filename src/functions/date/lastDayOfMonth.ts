import isset from "../isset";

/**
 * Determines the last day of month of the current or specified date
 * @param {Date} [date] Optional date from which the last day of the month should be determined. If no date is specified, the current date is used.
 * @return {Date} Returns the last day/date of current or specified date
 * @since 1.2.0
 */
export default function lastDayOfMonth(date?: Date): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const lastDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
    lastDayOfMonth.setDate(0);

    return lastDayOfMonth;
}