import varsGlobalTheme from "../../css/theme/base.css.ts";
import {style} from "@vanilla-extract/css";

console.log(varsGlobalTheme)
export const base = style({
    backgroundColor: varsGlobalTheme.colors.primary,
    color: varsGlobalTheme.colors.accent,
    padding: "5px 10px",
    borderRadius: varsGlobalTheme.roundedPx.md,
    width: "max-content",
    height: "max-content",
    ':active': {
        backgroundColor: varsGlobalTheme.colors.active,
    }
})

export const outlined = style({
    border: `1px solid ${varsGlobalTheme.colors.accent}`,


})
export const filled = style({
    border: `none`,
})

export const dashed = style({
    border: `1px dashed ${varsGlobalTheme.colors.accent}`,

})