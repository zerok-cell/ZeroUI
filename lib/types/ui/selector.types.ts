import {FC} from "react";
import {RecipeVariants} from "@vanilla-extract/recipes";
import {selectStyle} from "@/ui/Selector/css/select.css.ts";

export type TSelector = FC<{
    options: Array<number | string>
} & RecipeVariants<typeof selectStyle>>