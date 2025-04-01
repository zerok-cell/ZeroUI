import {TButton} from "@/types";
import {buttonStyle} from "@/ui/Button/button.css.ts";
import {classConcat} from "@/utils/classConcat.ts";

/**
 *
 * @param children
 * @param className
 * @param borderStyle
 * @param border
 * @param padding
 * @param props
 * @constructor
 */
const Button: TButton = ({
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
    >{children}</button>

}
export default Button