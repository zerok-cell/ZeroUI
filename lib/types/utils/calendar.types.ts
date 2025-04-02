import dayjsInstance from "@/utils/dayjs.instance.ts";
import CalendarDjs from "@/utils/calendar.ts";

//Типы для ципочек вызовов -----------------

/**
 * @description Полная противоположность `"RFFClosing"`, использовать когда функция продолжает цепочку
 */
type RFTChain = CalendarDjs
/**
 * @description Использовать когда функция закрывает цепочку вызов и не возвращает больше this
 */
type RFTClosing<TData> = TData


//-----------------------------------------

type FTWorkingWithDayjs<FTRData> = (data: dayjsInstance.Dayjs) => FTRData
type FTChainWorkingWithDayjs = FTWorkingWithDayjs<RFTChain>
type FTGenerateDayMap = FTWorkingWithDayjs<RFTClosing<number[]>>

type TLastMonthEndDayIndex = {
    readonly humanReadableName: string
    readonly indexDayJs: number
}
type FTReadLastMonthEndDayIndex = () => RFTClosing<TLastMonthEndDayIndex>

// type RFTGetLastMonthEndDayIndex = ReturnType<TGetLastMonthEndDayIndex>


export type {
    FTGenerateDayMap,
    FTWorkingWithDayjs,
    TLastMonthEndDayIndex,
    RFTClosing,
    RFTChain,
    FTReadLastMonthEndDayIndex,
    FTChainWorkingWithDayjs
}