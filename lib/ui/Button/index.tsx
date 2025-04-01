import {TButton} from "@/types";
import {buttonStyle} from "@/ui/Button/button.css.ts";
import {classConcat} from "@/utils/classConcat.ts";

/**
 *
 * @param text Pass the parameter for text button, or pass text button wit children
 * @param variant Variant button, can to be filled, outlined, dashed
 * @param className
 * @param props
 * @constructor
 */
const Button: TButton = ({
                             text,
                             children,
                             className = '',
                             borderStyle,
                             border,
                             padding,
                             ...props
                         }) => {

    const style = classConcat(buttonStyle({
        border,
        borderStyle,
        padding
    }), className)
    return <button
        className={style}
        {...props}
    >{text}{children}</button>

}
export {default as IconButton} from "./IconButton"
export default Button