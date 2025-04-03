import CalendarButton from "@/ui/Calendar/CalendarButton.tsx";
import {TCalendarLine} from "@/types/ui/calendar.types.ts";
import {lineStyle} from "@/ui/Calendar/calendar.css.ts";
import {useState} from "react";

const CalendarLine: TCalendarLine = ({data}) => {
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     setError(data > 100);
    // }, [data]);

    // const sizeLine = !error ? Array.from({length: data}, (_, i) => i + 1) : [];

    return (
        <div className={lineStyle}>
            {data.map((month) => (

                <CalendarButton key={month} num={month === 0 ? '' : month.toString()}/>
            ))}
        </div>
    );
};

export default CalendarLine;
