import {styleVariants} from "@vanilla-extract/css";

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

