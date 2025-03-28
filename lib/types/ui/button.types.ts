import {FC, HTMLAttributes} from "react";
import {TVariant} from "@/types/stateElement.css.types.ts";


export type TButtonProps = {
    text: string,
    variant?: TVariant
} &
    HTMLAttributes<HTMLButtonElement>

type TButton = FC<TButtonProps
>
export default TButton