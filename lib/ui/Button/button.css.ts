import varsGlobalTheme from "@/theme/base.css.ts";
import {createVar} from "@vanilla-extract/css";
import {clickElement} from "@s/generalBehaviour.css.ts";
import {recipe} from "@vanilla-extract/recipes";
import {paddingSize} from "@s/padding/padding.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {flexBox} from "@s/flex.css.ts";


const buttonSize = createVar()


export const buttonStyle = recipe({
    base: [
        {
            vars: {
                [buttonSize]: "max-content"
            },
            borderColor: varsGlobalTheme.colors.accent,
            borderRadius: varsGlobalTheme.roundedPx.md,
            width: buttonSize,
            height: buttonSize,
        },
        flexBox,
        clickElement
    ],
    variants: {
        border: borderWidth,
        borderStyle: borderStyle,
        padding: paddingSize
    },
    defaultVariants: {
        border: "sm",
        borderStyle: "outlined",
        padding: "sm"
    }
})

