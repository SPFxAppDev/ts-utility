import isset from "../isset";

export default function lastDayOfMonth(date?: Date): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const lastDayOfMonth = new Date(date.toDateString());

    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
    lastDayOfMonth.setDate(0);

    return lastDayOfMonth;
}