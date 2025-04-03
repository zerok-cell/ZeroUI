import CalendarDjs from "@/utils/calendar.ts";
import CalendarLine from "@/ui/Calendar/CalendarLine.tsx";
import dayjs from "dayjs";
import {calendarStyle} from "@/ui/Calendar/calendar.css.ts";

const Calendar = () => {
    const calendar = new CalendarDjs
    const currentMonth = calendar.generateDayMapWithPastMonth({data: dayjs("2025-12-31")}).generateLines({chunkSize: 7})
    console.log(currentMonth)

    return <div className={calendarStyle}>
        {currentMonth.map((month, i) => <CalendarLine data={month}/>)}
    </div>

}

export default Calendar
