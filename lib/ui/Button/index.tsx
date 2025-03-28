import {stateElement} from "@/ui/Button/satetsElement.css.ts";
import {TButton} from "@/types";
import classNames from "classnames";
import {base} from "@/ui/Button/button.css.ts";

/**
 *
 * @param text Pass the parameter for text button, or pass text button wit children
 * @param variant Variant button, can to be filled, outlined, dashed
 * @param props
 * @constructor
 */
const Index: TButton = ({text, variant = "outlined", ...props}) => {
    const style = classNames(base, stateElement[variant])
    console.log(variant)
    return <button className={`${style}`}
                   {...props}
    >{text}</button>

}
export default Index