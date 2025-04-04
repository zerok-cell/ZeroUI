import CalendarDjs from "@/utils/calendar.ts";
import dayjs from "dayjs";


//Типы для цепочек вызовов -----------------
/**
 * @description Полная противоположность `"RFFClosing"`, использовать когда функция продолжает цепочку
 */
type RFTChain = InstanceType<typeof CalendarDjs>
/**
 * @description Использовать когда функция закрывает цепочку вызов и не возвращает больше this
 */
type RFTClosing<TData> = TData

//-----------------------------------------
type TBaseFunctionParameters = {
    data: dayjs.Dayjs
}

export enum EGetNameWeekdayOrMonth {
    month = "MMMM",
    day = "dddd"
}

type FTExtendedFunction<FRTData, FTData = TBaseFunctionParameters, > = (data: FTData) => FRTData
type FTExtendFunctionChain = FTExtendedFunction<RFTChain>
type FTGenerateDayMap = FTExtendedFunction<RFTClosing<number[]>, TBaseFunctionParameters & {
    mapFn?: (v: unknown, k: number) => number
}>


type FTReadLastMonthDayIdx = FTExtendedFunction<RFTClosing<{
    humanReadableName: string
    indexDayJs: 0 | 1 | 2 | 3 | 4 | 5 | 6
}>, void>
type TFReadDayMap = FTExtendedFunction<RFTClosing<number[]>, void>
type TFGenerateLines = FTExtendedFunction<RFTClosing<number[][]>, { chunkSize: number }>
type TNameMonth = {
    fullNames: { msv: string[] } & Record<number, string>;
    shortNames: {
        msv: string[]

    } & Record<number, string>;

}
// type FTMemoFunction<FTFuntion extends (...args: any[]) => any> = FTFuntion & memoizee.Memoized<FTFuntion>
type FTAddValue = FTExtendedFunction<RFTClosing<void>, { month: number, name: string, sliceName: string }>

type FTGetNameWeekdayOrMonth = FTExtendedFunction<RFTClosing<TNameMonth>, { whatsGet: EGetNameWeekdayOrMonth }>

export type {
    FTAddValue,
    FTGetNameWeekdayOrMonth,
    TNameMonth,
    TFGenerateLines,
    TFReadDayMap,
    FTExtendFunctionChain,
    FTGenerateDayMap,
    FTReadLastMonthDayIdx,
    FTExtendedFunction,
    TBaseFunctionParameters,
    RFTChain,
    RFTClosing
}