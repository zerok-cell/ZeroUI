import {recipe, RecipeVariants} from "@vanilla-extract/recipes";
import {varsGlobalTheme} from "@/main.ts";


export const scrollStyle = recipe({
    base: {
        scrollbarWidth: "thin",
        scrollbarColor: `${varsGlobalTheme.colors.accent} ${varsGlobalTheme.colors.active}`,
        scrollbarGutter: "stable both-edges",
    }
})


export type TScrollStyle = RecipeVariants<typeof scrollStyle>