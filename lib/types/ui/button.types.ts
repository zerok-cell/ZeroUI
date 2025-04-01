import {FC, HTMLAttributes} from "react";
import {TBaseText} from "@/types";
import {buttonStyle} from "@/ui/Button/button.css.ts";
import {RecipeVariants} from "@vanilla-extract/recipes";


export type TButtonProps =
    HTMLAttributes<HTMLButtonElement>
    & Pick<TBaseText, "text"> & RecipeVariants<typeof buttonStyle>

type TButton = FC<TButtonProps>


export default TButton