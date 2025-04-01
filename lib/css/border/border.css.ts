import {styleVariants} from "@vanilla-extract/css";

export const borderWidth = styleVariants({
    none: {
        borderWidth: "0px",
    },
    xxs: {
        borderWidth: "0.5px",
    },
    xs: {
        borderWidth: "0.75px",
    },
    sm: {
        borderWidth: "1px",
    },
    md: {
        borderWidth: "2px",
    },
    lg: {
        borderWidth: "3px",
    },
    xl: {
        borderWidth: "4px",
    },
    xxl: {
        borderWidth: "5px",
    },
})

export const borderStyle = styleVariants({
    filled: {
        borderStyle: "none"
    },

    outlined: {
        borderStyle: "solid"
    },
    dashed: {
        borderStyle: "dashed"
    }
})