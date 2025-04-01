import {style} from "@vanilla-extract/css";
import varsGlobalTheme from "@/theme/base.css.ts";

/**
 * @description Базовые стили цветов для элементов.
 * Имеет интеграцию с темой.
 * @see varsGlobalTheme
 */
export const colorBaseStyle = style({
    backgroundColor: varsGlobalTheme.colors.primary,
    color: varsGlobalTheme.colors.accent,
})


/**
 * @description Базовые стили для события `":active"`.
 * Имеет интеграцию с темой. И с классом `"colorBaseStyle"`
 * @see colorBaseStyle
 * @see varsGlobalTheme
 */
export const clickElement = style([colorBaseStyle, {
    ':active': {
        backgroundColor: varsGlobalTheme.colors.active,
    }
}])