import {style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";

// export const tagStyle = style({
//     padding: "2px 10px"
//
// })


export const tagStyle = recipe({
    base: {}
})

export const tagSelected = style({
    borderWidth: "5px"
})


