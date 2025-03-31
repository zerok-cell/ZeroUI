import varsGlobalTheme from "@/theme/base.css.ts";
import {createVar, style} from "@vanilla-extract/css";
import {clickElement} from "@s/generalBehaviour.css.ts";


const buttonSize = createVar()

export const base = style([{
    vars: {
        [buttonSize]: "max-content"
    },
    color: varsGlobalTheme.colors.accent,
    borderRadius: varsGlobalTheme.roundedPx.md,
    width: buttonSize,
    height: buttonSize,
}, clickElement])

