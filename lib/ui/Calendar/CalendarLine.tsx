import CalendarButton from "@/ui/Calendar/CalendarButton.tsx";
import {TCalendarLine} from "@/types/ui/calendar.types.ts";
import {lineStyle} from "@/ui/Calendar/calendar.css.ts";
import {useState} from "react";
import ErrorComponent from "@/ui/Errors/Error.tsx";

const CalendarLine: TCalendarLine = ({data}) => {
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     setError(data > 100);
    // }, [data]);

    // const sizeLine = !error ? Array.from({length: data}, (_, i) => i + 1) : [];

    return (
        <div className={lineStyle}>
            {error ? (
                <ErrorComponent text={`The number ${size} is greater than 100, pass no more than 100!`}/>
            ) : (
                data.map((month) => (
                    <CalendarButton key={month} num={month === 0 ? '' : month}/>
                ))
            )}
        </div>
    );
};

export default CalendarLine;
