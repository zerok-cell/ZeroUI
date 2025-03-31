import {TButton} from "@/types";
import {stateElement} from "@/ui/Button/satetsElement.css.ts";
import {borderSize, paddingSize} from "@s/generalBehaviour.css.ts";
import classNames from "classnames";

/**
 *
 * @param text Pass the parameter for text button, or pass text button wit children
 * @param variant Variant button, can to be filled, outlined, dashed
 * @param className
 * @param padding Size padding, should to be "lg", "md","sm"
 * @param borderSize Size border, should to be "lg", "md","sm"
 * @param props
 * @constructor
 */
const Button: TButton = ({
                             text,
                             variant = "outlined",
                             children,
                             className,
                             padding = "sm",
                             borderWh = 'sm',
                             ...props
                         }) => {
    const variantButton = stateElement[variant] || stateElement["outlined"]
    const style = classNames(borderSize[borderWh], variantButton, className, paddingSize[padding],
    )
    return <button

        className={`${style}`}
        {...props}
    >{text}{children}</button>

}
export {default as IconButton} from "./IconButton"
export default Button