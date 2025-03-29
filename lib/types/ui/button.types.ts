import {FC, HTMLAttributes} from "react";
import {borderSize, paddingSize} from "@s/generalBehaviour.css.ts";
import {TBaseText, TVariant} from "@/types";


export type TButtonProps = {
    variant?: TVariant,
    padding?: keyof typeof paddingSize
    borderWh?: keyof typeof borderSize
} &
    HTMLAttributes<HTMLButtonElement>
    & Pick<TBaseText, "text">

type TButton = FC<TButtonProps
>
export default TButton