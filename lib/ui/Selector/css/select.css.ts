import {recipe} from "@vanilla-extract/recipes";
import varsGlobalTheme from "@/theme/base.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";
import {paddingSize} from "@s/padding/padding.css.ts";
import {clickElement} from "@s/generalBehaviour.css.ts";
import arrow from "public/images/arrow-select.svg"
import {createVar, globalStyle} from "@vanilla-extract/css";


export const reserveSpaceFromArrow = createVar()
globalStyle(":root", {
    vars: {
        [reserveSpaceFromArrow]: "30px",
    },
});

export const selectStyle = recipe({
    base: [
        borderStyle['outlined'],
        borderWidth['md'],
        paddingSize["sm"],
        clickElement,

        {
            paddingRight: reserveSpaceFromArrow,
            backgroundImage: `url("${arrow}")`,
            backgroundPosition: "right 10px center",
            backgroundSize: "20px 20px",
            outline: "none",
            cursor: 'pointer',
            backgroundRepeat: "no-repeat",
            appearance: "none",
            backgroundColor: varsGlobalTheme.colors.primary,
            borderRadius: varsGlobalTheme.roundedPx.md,
            borderColor: varsGlobalTheme.colors.accent,
            color: varsGlobalTheme.colors.accent,
         
        },
    ]
})