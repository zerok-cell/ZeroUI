import TCalendarButton from "@/types/ui/calendar.types.ts";
import calendarButtonStyle from "@/ui/Calendar/calendar.css.ts";
import ErrorComponent from "@/ui/Errors/Error.tsx";


/**
 * @description Кнопка для календаря. Числов внутри кнопки не может превышать 2 символа
 * @param num
 * @constructor
 */
const CalendarButton: TCalendarButton = ({num}) => {
    console.log(num)
    const numStr = num.toString()
    if (numStr.length > 2) return <ErrorComponent
        text={` The numStr size is more than two (${numStr}), the number in the calendar cannot be more than two in length.`}/>
    return <button className={calendarButtonStyle()}>
        {numStr}
    </button>
}

export default CalendarButton