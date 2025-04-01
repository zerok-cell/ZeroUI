import {styleVariants} from "@vanilla-extract/css";

export const marginSize = styleVariants({
    none: {
        margin: "0px",
    },
    xxs: {
        margin: "2px",
    },
    xs: {
        margin: "4px",
    },
    sm: {
        margin: "8px",
    },
    md: {
        margin: "12px",
    },
    lg: {
        margin: "16px",
    },
    xl: {
        margin: "24px",
    },
    xxl: {
        margin: "32px",
    },
});