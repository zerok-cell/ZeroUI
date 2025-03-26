import {FC} from "react";
import {DTypes} from "../../types";

const Button:FC<{text:DTypes}> = ({text})=>{
    return <button>{text}</button>

}
export default Button