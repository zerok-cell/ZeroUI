import {FC, HTMLAttributes} from "react";
import {TVariant} from "@/types/stateElement.css.types.ts";
import {borderSize, paddingSize} from "@s/generalBehaviour.css.ts";


export type TButtonProps = {
    text: string,
    variant?: TVariant,
    padding?: keyof typeof paddingSize
    borderWh?: keyof typeof borderSize
} &
    HTMLAttributes<HTMLButtonElement>

type TButton = FC<TButtonProps
>
export default TButton