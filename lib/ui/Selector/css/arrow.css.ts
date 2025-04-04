import {style} from "@vanilla-extract/css";
import {varsGlobalTheme} from "@/main.ts";
import {reserveSpaceFromArrow} from "@/ui/Selector/css/select.css.ts";


export const arrowStyle = style({
    width: reserveSpaceFromArrow,
    position: "relative",
    right: "35px",
    pointerEvents: 'none',
    height: "max-content",
    fill: varsGlobalTheme.colors.accent,
})