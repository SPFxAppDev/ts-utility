import isset from "../isset";

export default function firstDayOfMonth(date?: Date): Date {

    if(!isset(date)) {
        date = new Date();
    }

    const firstDayOfMonth = new Date(date.toDateString());

    firstDayOfMonth.setDate(1);

    return firstDayOfMonth;
}