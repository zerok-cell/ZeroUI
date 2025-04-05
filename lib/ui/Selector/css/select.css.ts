import {recipe} from "@vanilla-extract/recipes";
import varsGlobalTheme from "@/theme/base.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {paddingSize} from "@s/padding/padding.css.ts";
import {clickElement} from "@s/generalBehaviour.css.ts";
import {createVar, globalStyle, style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";


export const reserveSpaceFromArrow = createVar()
globalStyle(":root", {
    vars: {
        [reserveSpaceFromArrow]: "30px",
    },
});

export const selectStyle = recipe({
    base: [
        clickElement,

        {
            outline: "none",
            width: "100%",
            cursor: 'pointer',
            appearance: "none",
            borderRadius: varsGlobalTheme.roundedPx.md,
            borderColor: varsGlobalTheme.colors.accent,
        },

    ],
    variants: {
        paddingSize,
        borderStyle,
        borderWidth,
    },
    defaultVariants: {
        paddingSize: "sm",
        borderStyle: "outlined",
        borderWidth: "md",
    }
})

export const selectContainer = style([flexBox(), {
    flexDirection: "row",
    height: "max-content",
    width: 'max-content',
}])