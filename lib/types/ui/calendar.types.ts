import {FC} from "react";

type TCalendarButtonProps = {
    num: number
}

type TCalendarLineProps = {
    size: number,
}
type TCalendarLine = FC<TCalendarLineProps>
type TCalendarButton = FC<TCalendarButtonProps>
export default TCalendarButton
export type {TCalendarLine}