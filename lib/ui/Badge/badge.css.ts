import {style} from "@vanilla-extract/css";
import {clickElement, colorBaseStyle} from "@s/generalBehaviour.css.ts";
import {flexBox} from "@s/flex.types.ts";
import {varsGlobalTheme} from "@/main.ts";


const badgeStyle = style([colorBaseStyle, flexBox, clickElement, {
    borderRadius: "100px",
    height: "max-content",
    padding: "1px 20px 1px 20px",
    width: "max-content",
    userSelect: "none",

}])

export const borderStyle = style({
    borderStyle: "solid",
    borderColor: varsGlobalTheme.colors.accent
})

export const paragraphBadgeStyle = style({
    margin: "0px",
    height: "max-content",

})
export default badgeStyle