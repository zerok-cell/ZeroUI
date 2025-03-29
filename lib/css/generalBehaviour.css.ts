import {style, styleVariants} from "@vanilla-extract/css";
import varsGlobalTheme from "./theme/base.css.ts";


export const paddingSize = styleVariants({
    sm: {
        padding: "5px 10px"
    },
    md: {
        padding: "10px 15px"
    },
    lg: {
        padding: "15px 20px"
    }
})

export const borderSize = styleVariants({
    sm: {
        borderWidth: "1px"
    },
    md: {
        borderWidth: "2px"
    },
    lg: {
        borderWidth: "3px"
    }
})

export const clickElement = style({
    backgroundColor: varsGlobalTheme.colors.primary,
    ':active': {
        backgroundColor: varsGlobalTheme.colors.active,
    }
})