import TCalendarButton from "@/types/ui/calendar.types.ts";
import calendarButtonStyle from "@/ui/Calendar/calendar.css.ts";


/**
 * @description Кнопка для календаря. Числов внутри кнопки не может превышать 2 символа
 * @param num
 * @constructor
 */
const CalendarButton: TCalendarButton = ({num}) => {
    console.log(num)
    const numStr = num.toString()
    if (numStr.length > 2) return
    return <button className={calendarButtonStyle()}>
        {numStr}
    </button>
}

export default CalendarButton