import {globalStyle, style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";
import {flexBox} from "@s/flex.css.ts";


export const tagStyle = recipe({
    base: [flexBox, {}]
})

export const tagSelected = style({
    borderWidth: "5px"
})

globalStyle(`${tagStyle()} *`, {
    margin: '0'
})
