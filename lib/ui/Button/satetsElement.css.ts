import {styleVariants} from "@vanilla-extract/css";
import {base} from "@/ui/Button/button.css.ts";
import {varsGlobalTheme} from "@/main.ts";

export const stateElement = styleVariants({
    filled: [base, {
        border: `none`,
    }],
    outlined: [base, {
        border: `1px solid ${varsGlobalTheme.colors.accent}`,
    }],
    dashed: [base, {
        border: `1px dashed ${varsGlobalTheme.colors.accent}`,
    }]
})