import varsGlobalTheme from "@s/theme/base.css.ts";
import {style} from "@vanilla-extract/css";
import {clickElement} from "@s/generalBehaviour.css.ts";

export const base = style([{
    color: varsGlobalTheme.colors.accent,
    padding: "5px 10px",
    borderRadius: varsGlobalTheme.roundedPx.md,
    width: "max-content",
    height: "max-content",

},

    clickElement])

