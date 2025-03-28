import * as stl from "./button.css.ts";
import {base} from "./button.css.ts";
import {TButton} from "../../types";
import classNames from "classnames";

/**
 *
 * @param text Pass the parametr for text button, or pass text button wit children
 * @param variant Variant button, can to be filled, outlined, dashed
 * @param props
 * @constructor
 */
const Index: TButton = ({text, variant, ...props}) => {
    const style = classNames(base, stl[variant ? variant : "outlined"])
    return <button className={`${style}`}
                   {...props}
    >{text}</button>

}
export default Index