import {styleVariants} from "@vanilla-extract/css";

export const borderWidth = styleVariants({
    none: {
        borderWidth: "0px"
    },
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