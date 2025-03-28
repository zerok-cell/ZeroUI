import {style} from "@vanilla-extract/css";
import varsGlobalTheme from "./theme/base.css.ts";


export const clickElement = style({
    backgroundColor: varsGlobalTheme.colors.primary,
    ':active': {
        backgroundColor: varsGlobalTheme.colors.active,
    }
})