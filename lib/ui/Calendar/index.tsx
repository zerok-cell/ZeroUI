import CalendarDjs from "@/utils/calendar.ts";
import CalendarLine from "@/ui/Calendar/CalendarLine.tsx";
import dayjs from "dayjs";
import {calendarStyle} from "@/ui/Calendar/calendar.css.ts";
import {useState} from "react";

const Calendar = () => {
    const calendar = new CalendarDjs
    const [currentMonth] = useState(calendar.generateDayMapWithPastMonth({data: dayjs("2025-5-31")}).generateLines({chunkSize: 6}))
    console.log(currentMonth)

    return <div className={calendarStyle()}>
        {currentMonth.map((month,) => <CalendarLine data={month}/>)}
    </div>

}

export default Calendar
