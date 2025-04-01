import CalendarButton from "@/ui/Calendar/CalendarButton.tsx";
import {TCalendarLine} from "@/types/ui/calendar.types.ts";
import {lineStyle} from "@/ui/Calendar/calendar.css.ts";
import {useEffect, useState} from "react";
import ErrorComponent from "@/ui/Errors/Error.tsx";

const CalendarLine: TCalendarLine = ({size}) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(size > 100);
    }, [size]);

    const sizeLine = !error ? Array.from({length: size}, (_, i) => i + 1) : [];

    return (
        <div className={lineStyle}>
            {error ? (
                <ErrorComponent text={`The number ${size} is greater than 100, pass no more than 100!`}/>
            ) : (
                sizeLine.map((month) => (
                    <CalendarButton key={month} num={month}/>
                ))
            )}
        </div>
    );
};

export default CalendarLine;
