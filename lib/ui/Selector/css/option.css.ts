import {colorBaseStyle} from "@s/generalBehaviour.css.ts";
import varsGlobalTheme from "@/theme/base.css.ts";
import {flexBox} from "@s/flex.css.ts";
import {recipe} from "@vanilla-extract/recipes";
import {scrollStyle} from "@s/scroll.css.ts";


export const optionBlock = recipe({
    base: [scrollStyle(), flexBox({alignItems: "start", flexDirection: "column",}), colorBaseStyle, {
        padding: 5,
        overflowY: "auto",
        maxHeight: "100%",
        position: "relative",
        borderRadius: varsGlobalTheme.roundedPx.md,
        transition: 'padding 0.1s ease-in-out, height 0.2s ease-in-out',

    }],
    variants: {
        active: {
            true: {
                padding: 0,
                height: "0px",
            },
            false: {
                height: "100%"
            }


        },

    }

})


