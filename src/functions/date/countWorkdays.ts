import firstDayOfMonth from "./firstDayOfMonth";
import lastDayOfMonth from "./lastDayOfMonth";
import { Weekday } from "./Weekday.enum";
import '../../extensions/ArrayExtensions';
import isNullOrEmpty from "../isNullOrEmpty";

export type CountWorkdaysValues = {
    startDate?: Date, 
    endDate?: Date, 
    fromWeekDay?: Weekday, 
    toWeekDay?: Weekday, 
    excludedDates?: Date[]
}

export default function countWorkdays(startDate?: Date|null, endDate?: Date|null, fromWeekDay?: Weekday|null, toWeekDay?: Weekday|null, excludedDates?: Date[]|null): number {

    const defaultValues: CountWorkdaysValues = {
        startDate: firstDayOfMonth(),
        endDate: lastDayOfMonth(startDate),
        fromWeekDay: 1,
        toWeekDay: 5,
        excludedDates: []
    };

    const values: CountWorkdaysValues = {
        startDate: startDate||defaultValues.startDate,
        endDate: endDate||defaultValues.endDate,
        fromWeekDay: fromWeekDay||defaultValues.fromWeekDay,
        toWeekDay: toWeekDay||defaultValues.toWeekDay,
        excludedDates: excludedDates||defaultValues.excludedDates
    };

    let workday: number = 0;
    let fromDate: Date = new Date(values.startDate.toDateString());
    let toDate: Date = new Date(values.endDate.toDateString());
    while (fromDate <= toDate) 
    {
        const dayOfWeek = fromDate.getDay();
        if (!(dayOfWeek >= values.fromWeekDay && dayOfWeek <= values.toWeekDay)) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
    
        if (!isNullOrEmpty(excludedDates) && excludedDates.Contains(excludedDate => { const h = new Date(excludedDate.toDateString()); return h.getTime() == fromDate.getTime() })) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }    
    
        fromDate.setDate(fromDate.getDate() + 1);
        workday++;
    }
    
    return workday;

}