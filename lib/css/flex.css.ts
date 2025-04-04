import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";


export const horizontalCenter = style({
    display: "flex",
    justifyContent: "center"
})

export const flexBox = recipe({
    base: {
        display: "flex",
    },
    variants: {
        flexDirection: {
            row: {flexDirection: "row"},
            column: {flexDirection: "column"},
        },
        justifyContent: {
            start: {justifyContent: "flex-start"},
            center: {justifyContent: "center"},
            end: {justifyContent: "flex-end"},
            between: {justifyContent: "space-between"},
            around: {justifyContent: "space-around"},
            evenly: {justifyContent: "space-evenly"},
        },
        alignItems: {
            start: {alignItems: "flex-start"},
            center: {alignItems: "center"},
            end: {alignItems: "flex-end"},
            stretch: {alignItems: "stretch"},
        },
        alignContent: {
            start: {alignContent: "flex-start"},
            center: {alignContent: "center"},
            end: {alignContent: "flex-end"},
            stretch: {alignContent: "stretch"},
            between: {alignContent: "space-between"},
            around: {alignContent: "space-around"},
        },
    },
    defaultVariants: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    compoundVariants: []
});
export default flexBox