import Index from "../Button";
import {tagSelected, tagStyle} from "./tag.css.ts";
import TTag from "@/types/ui/tag.types.ts";
import classNames from "classnames";

const ButtonTag: TTag = ({selected, text, variant, ...props}) => {
    const style = classNames(tagStyle, selected && tagSelected)
    console.log(variant)
    return <Index className={style} text={`#${text}`} variant={variant} {...props}/>
}


export default ButtonTag