import firstDayOfMonth from "./firstDayOfMonth";
import lastDayOfMonth from "./lastDayOfMonth";
import { Weekday } from "./Weekday.enum";
import '../../extensions/ArrayExtensions';
import isNullOrEmpty from "../isNullOrEmpty";

/**
 * A type that can be used to pass the values to the countWorkdays function. 
 * @since 1.2.0
 */
export type CountWorkdaysValues = {
    startDate?: Date, 
    endDate?: Date, 
    fromWeekDay?: Weekday, 
    toWeekDay?: Weekday, 
    excludedDates?: Date[]
}

/**
 * Counts all working days from a given date to another date. 
 * @param {Date|null} [startDate] Optional date from when the calculation should start. If no start date is specified, the calculation starts from the first day of the current month. 
 * @param {Date|null} [endDate] Optional date up to which the working days should be calculated. If no end date is specified, the calculation ends with the last day of the current month or with the last day of the passed startDate
 * @param {Weekday|null} [fromWeekDay] Optional specification on which day a working week starts. The enum can be used or the values 0-6 (0 = Sunday, 1 = Monday... 6 = Saturday). Monday is used by default
 * @param {Weekday|null} [toWeekDay] Optional specification on which day a working week ends. The enum can be used or the values 0-6 (0 = Sunday, 1 = Monday... 6 = Saturday). Friday is used by default
 * @param {Date[]|null} [excludedDates] Optional specification of dates that should not be counted (e.g. holidays). 
 * @return {number} Returns the total number of working days
 * @since 1.2.0
 */
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
    let fromDate: Date = new Date(Date.UTC(values.startDate.getFullYear(), values.startDate.getMonth(), values.startDate.getDate()));
    let toDate: Date = new Date(Date.UTC(values.endDate.getFullYear(), values.endDate.getMonth(), values.endDate.getDate()));
    while (fromDate <= toDate) 
    {
        const dayOfWeek = fromDate.getDay();
        if (!(dayOfWeek >= values.fromWeekDay && dayOfWeek <= values.toWeekDay)) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
    
        
        if (!isNullOrEmpty(excludedDates) && excludedDates.Contains(excludedDate => { const h = new Date(Date.UTC(excludedDate.getFullYear(), excludedDate.getMonth(), excludedDate.getDate())); return h.getTime() == fromDate.getTime() })) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }    
    
        fromDate.setDate(fromDate.getDate() + 1);
        workday++;
    }
    
    return workday;

}