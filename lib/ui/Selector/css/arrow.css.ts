import {varsGlobalTheme} from "@/main.ts";
import {recipe} from "@vanilla-extract/recipes";


export const arrowStyle = recipe({
    base: {
        transition: ".1s ease-in-out",
        width: 20,
        right: "35px",
        pointerEvents: 'none',
        height: "max-content",
        fill: varsGlobalTheme.colors.accent,
    },
    variants: {
        rotate: {
            true: {
                opacity: '0.5',
                transform: "rotate(180deg)",
            },
        }
    }
})