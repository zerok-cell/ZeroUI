import {FC} from "react";
import {TFReadDayMap} from "@/types/utils/calendar.types.ts";

type TCalendarButtonProps = {
    num: string
}

type TCalendarLineProps = {
    data: ReturnType<TFReadDayMap>,
}
type TCalendarLine = FC<TCalendarLineProps>
type TCalendarButton = FC<TCalendarButtonProps>
export default TCalendarButton
export type {TCalendarLine}