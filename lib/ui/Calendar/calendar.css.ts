import {recipe} from "@vanilla-extract/recipes";
import varsGlobalTheme from "@/theme/base.css.ts";
import {globalStyle, style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {clickElement, colorBaseStyle} from "@s/generalBehaviour.css.ts";
import {paddingSizeAll} from "@s/padding/padding.css.ts";

const calendarButtonStyle = recipe({
    base: [flexBox, borderStyle["filled"], borderWidth['none'], clickElement,
        {
            width: 40,
            height: 40,
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

export const calendarStyle = recipe({
    base: [
        flexBox,
        paddingSizeAll['xxl'],
        colorBaseStyle,
        borderStyle['outlined'],
        borderWidth['sm'],

        {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: varsGlobalTheme.roundedPx.md

        }
    ]
})
//
// export const calendarStyle = style([
//     {
//         padding: 10,
//         borderRadius: varsGlobalTheme.roundedPx.lg,
//         display: "flex",
//         background: varsGlobalTheme.colors.primary,
//         flexDirection: "column", justifyContent: "left",
//         alignItems: "flex-start"
//     }])

globalStyle(`${calendarButtonStyle()} *`, {
    margin: 0
})

export default calendarButtonStyle;