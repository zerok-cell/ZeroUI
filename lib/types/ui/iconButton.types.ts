import {FC, JSX} from "react";
import {TButtonProps} from "@/types/ui/button.types.ts";


export type TIconButtonProps = {
    children: Required<JSX.Element>
}

export type TIconButton = FC<TIconButtonProps & Omit<TButtonProps, "text">>