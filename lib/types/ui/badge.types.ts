import {TBaseText} from "@/types";
import {FC} from "react";
import badgeStyle from "@/ui/Badge/badge.css.ts";
import {RecipeVariants} from "@vanilla-extract/recipes";

type TBadge = FC<Pick<TBaseText, "text"> & RecipeVariants<typeof badgeStyle>
>
export default TBadge