import isset from "../isset";

/**
 * Determines the week number of the current or specified date (ISO 8601 = the week with the starting year's first Thursday in it)
 * @param {Date} [date] Optional date which the week number is to be returned. If no date is specified, the current date is used.
 * @return {number} Returns the week number of current or specified date
 * @since 1.2.0
 */
export default function weekNumber(date?: Date): number {

    if(!isset(date)) {
        date = new Date();
    }

    const currentDate: Date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // Set to nearest Thursday: current date + 4 - current day number
    // If currentDate is Sunday, then calculate with -7 instead of 0
    currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay()||7));
    

    const firstJanuary: Date = new Date(Date.UTC(currentDate.getFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    const weekNo: number = Math.ceil(( ( (currentDate.getTime() - firstJanuary.getTime()) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}