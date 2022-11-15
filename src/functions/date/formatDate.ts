import isset from "../isset";
import '../../extensions/StringExtensions';

export default function formatDate(format: string, date?: Date): string {

    if(!isset(date)) {
        date = new Date();
    }

    //YY and YYYY
    const yyyy: number = date.getFullYear();
    const yy: string = yyyy.toString().substring(2);

    //MM or M
    const M: number = date.getMonth() + 1;
    const MM: string = M <= 9 ? `0${M}` : M.toString();

    //d or dd
    const d: number = date.getDate();
    const dd: string = d <= 9 ? `0${d}` : d.toString();

    //H or HH
    const H: number = date.getHours();
    const HH: string = H <= 9 ? `0${H}` : H.toString();

    //m or mm
    const m: number = date.getMinutes();
    const mm: string = m <= 9 ? `0${m}` : m.toString();
    
    //s or ss
    const s: number = date.getSeconds();
    const ss: string = s <= 9 ? `0${s}` : s.toString();

    format = format.ReplaceAll("yyyy", yyyy.toString());
    format = format.ReplaceAll("yy", yy);
    format = format.ReplaceAll("MM", MM);
    format = format.ReplaceAll("M", M.toString());
    format = format.ReplaceAll("dd", dd);
    format = format.ReplaceAll("d", d.toString());
    format = format.ReplaceAll("HH", HH);
    format = format.ReplaceAll("H", H.toString());
    format = format.ReplaceAll("mm", mm);
    format = format.ReplaceAll("m", m.toString());
    format = format.ReplaceAll("ss", ss);
    format = format.ReplaceAll("s", s.toString());
    return format;
}