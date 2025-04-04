import {style} from "@vanilla-extract/css";
import {clickElement} from "@s/generalBehaviour.css.ts";
import varsGlobalTheme from "@/theme/base.css.ts";
import {flexBox} from "@s/flex.css.ts";


export const optionBlock = style([flexBox, {
    flexDirection: "column",
    justifyContent: "left"

}])

export const optionCss = style([clickElement,
    {
        width: "100%",
        borderRadius: 0, /* В некоторых случаях работает */
        color: varsGlobalTheme.colors.accent,
        backgroundColor: varsGlobalTheme.colors.primary
    }

])