import {styleVariants} from "@vanilla-extract/css";

export const paddingSize = styleVariants({
    none: {
        padding: "0px",
    },
    xxs: {
        padding: "1px 3px",
    },
    xs: {
        padding: "3px 5px",
    },
    sm: {
        padding: "5px 10px",
    },
    md: {
        padding: "10px 15px",
    },
    lg: {
        padding: "15px 20px",
    },
    xl: {
        padding: "20px 25px",
    },
    xxl: {
        padding: "25px 30px",
    },
});
