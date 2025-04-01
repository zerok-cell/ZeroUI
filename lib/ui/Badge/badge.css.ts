import {createVar, style} from "@vanilla-extract/css";
import {recipe} from "@vanilla-extract/recipes";
import {clickElement} from "@s/generalBehaviour.css.ts";
import {flexBox} from "@s/flex.css.ts";
import {borderStyle, borderWidth} from "@s/border/border.css.ts";


export const paragraphBadgeStyle = style({
    margin: "0px",
    height: "max-content",

})

const maxContent = createVar()

const badgeStyle = recipe({
    base: [clickElement, flexBox,
        {
            vars: {
                [maxContent]: "max-content",
            },
            borderRadius: "100px",
            height: maxContent,
            padding: "1px 20px 1px 20px",
            width: maxContent,
            userSelect: "none",
        }
    ],
    variants: {
        borderWidth,
        borderStyle

    },
    defaultVariants: {
        borderStyle: "filled",
        borderWidth: 'none'
    }
})

export default badgeStyle