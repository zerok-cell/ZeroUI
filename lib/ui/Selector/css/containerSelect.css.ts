import {style} from "@vanilla-extract/css";
import {flexBox} from "@s/flex.css.ts";


export const containerStyle = style([flexBox({justifyContent: "start"}),
    {
        flexDirection: 'column',
        height: "100px",
        width: 'max-content',

    }])

