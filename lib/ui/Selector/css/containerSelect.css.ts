import {style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";


export const containerStyle = style([flexBox,
    {
        flexDirection: 'column',
        height: "max-content",
        width: 'max-content',

    }])

