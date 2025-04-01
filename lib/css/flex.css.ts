import {style} from "@vanilla-extract/css";


export const horizontalCenter = style({
    display: "flex",
    justifyContent: "center"
})

const flexBox = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",

})
export {flexBox}