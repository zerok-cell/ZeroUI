import {recipe} from "@vanilla-extract/recipes";
import varsGlobalTheme from "@/theme/base.css.ts";
import {globalStyle, style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {clickElement} from "@s/generalBehaviour.css.ts";

const calendarButtonStyle = recipe({
    base: [flexBox, borderStyle["filled"], borderWidth['none'], clickElement,
        {
            width: 20,
            height: 20,
            borderRadius: varsGlobalTheme.roundedPx.md
        }
    ]
})


export const lineStyle = style([
    flexBox,
    {
        background: varsGlobalTheme.colors.primary,
        gap: 4
    }
])

export const calendarStyle = style([
    {
        flexDirection: "column", justifyContent: "left",
        alignItems: "flex-start"
    }
    , flexBox])

globalStyle(`${calendarButtonStyle()} *`, {
    margin: 0
})

export default calendarButtonStyle;