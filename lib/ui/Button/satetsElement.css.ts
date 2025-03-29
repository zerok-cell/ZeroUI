import {styleVariants} from "@vanilla-extract/css";
import {base} from "@/ui/Button/button.css.ts";
import {varsGlobalTheme} from "@/main.ts";

export const stateElement = styleVariants({
    filled: [base, {
        borderStyle: "none",

    }],


    outlined: [base, {
        borderStyle: "solid",
        borderColor: varsGlobalTheme.colors.accent
    }],
    dashed: [base, {
        borderStyle: "dashed",
        borderColor: varsGlobalTheme.colors.accent

    }],

})