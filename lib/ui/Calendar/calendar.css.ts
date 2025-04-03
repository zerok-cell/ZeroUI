import {recipe} from "@vanilla-extract/recipes";
import varsGlobalTheme from "@/theme/base.css.ts";
import {createVar, globalStyle, style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {clickElement, colorBaseStyle} from "@s/generalBehaviour.css.ts";
import {paddingSizeAll} from "@s/padding/padding.css.ts";


export const buttonSize = createVar()


const calendarButtonStyle = recipe({
    base: [flexBox, borderStyle["filled"], borderWidth['none'], clickElement,
        {
            width: buttonSize,
            height: buttonSize,
            borderRadius: varsGlobalTheme.roundedPx.md
        }

    ],
    variants: {
        disable: {
            true: {
                ":active": {
                    background: "transparent",
                }
            },
            false: {},
        },
    },
    defaultVariants: {
        disable: false,
    },
})


export const lineStyle = style([
    flexBox,
    {
        justifyContent: "space-between",
        width: "100%",
        background: varsGlobalTheme.colors.primary,
        gap: 4
    }
])

export const panelWithMonth = style({
    display: "flex",
    flexDirection: "row",
    padding: 4,
    gap: 4,
    justifyContent: "space-between",

    background: varsGlobalTheme.colors.primary,
    borderRadius: varsGlobalTheme.roundedPx.md
})


export const calendarNameMonth = style([flexBox, {
    width: buttonSize,
    display: "flex",
    fontSize: 15,
    opacity: .5
}])

export const calendarStyle = recipe({
    base: [
        paddingSizeAll['xxl'],
        colorBaseStyle,
        borderStyle['outlined'],
        borderWidth['sm'],
        {
            width: 300,
            borderRadius: varsGlobalTheme.roundedPx.md,
            vars: {
                [buttonSize]: "40px"
            }
        }
    ]
})
globalStyle(`${calendarButtonStyle()} *`, {
    margin: 0,

})

export default calendarButtonStyle;