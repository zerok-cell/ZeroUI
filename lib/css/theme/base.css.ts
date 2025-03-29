import {createGlobalTheme, createGlobalThemeContract} from "@vanilla-extract/css";


/**
 * @description Contract theme for theme. If you want to create own theme from Vanilla Extract, use this contract.
 * @example
 * import { varsGlobalTheme } from '@zeroui/zeroui'
 * createGlobalTheme(":root",varsGlobalTheme,{
 *     colors: {
 *         primary: "#10110C",
 *         accent: "#FAFAFA",
 *         active: "#1E1E1E",
 *     },
 *     roundedPx: {
 *         sm: "12px",
 *         md: "26px",
 *         lg:"150px"
 *     }
 * })
 *@contract
 */
const varsGlobalTheme = createGlobalThemeContract({
    colors: {
        primary: 'color-primary',
        accent: 'color-accent',
        active: 'color-active',
    },
    roundedPx: {
        sm: "small-rounded",
        md: "middle-rounded",
        lg: "large-rounded"
    },


});


createGlobalTheme(":root", varsGlobalTheme, {
    colors: {
        primary: "#10110C",
        accent: "#FAFAFA",
        active: "#1E1E1E",
    },
    roundedPx: {
        sm: "1px",
        md: "6px",
        lg: "10px"
    }
})

export default varsGlobalTheme




