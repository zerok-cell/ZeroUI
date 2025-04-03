import CalendarDjs from "@/utils/calendar.ts";
import CalendarLine from "@/ui/Calendar/CalendarLine.tsx";
import dayjs from "dayjs";
import {calendarNameMonth, calendarStyle, panelWithMonth} from "@/ui/Calendar/calendar.css.ts";
import {useState} from "react";

const Calendar = () => {
    const calendar = new CalendarDjs
    const [currentMonth] = useState(calendar.generateDayMapWithPastMonth({data: dayjs("2025-5-31")}).generateLines({chunkSize: 7}))
    const nameMonth = calendar.getNameWeekday()
    console.log(currentMonth)

    return <div className={calendarStyle()}>
        <div className={panelWithMonth}>
            {nameMonth.shortNames.msv.map((month) => (
                <p key={month} className={calendarNameMonth}>
                    {month}
                </p>
            ))}
        </div>
        {currentMonth.map((month,) => <CalendarLine data={month}/>)}
    </div>

}

export default Calendar
