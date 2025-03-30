import {tagStyle} from "./tag.css.ts";
import TTag from "@/types/ui/tag.types.ts";
import classNames from "classnames";
import addSymbolConditionExist from "@/utils/addSymbolConditionExist.ts";
import {Button} from "@/ui";

const ButtonTag: TTag = ({selected, text, variant, sharp, ...props}) => {
    const style = classNames(tagStyle)
    const sharpAdd = addSymbolConditionExist(sharp, "#")
    const inlineText = sharpAdd + addSymbolConditionExist(text, text)

    return <Button className={style} text={inlineText}
                   borderWh={selected ? "lg" : "sm"}
                   variant={variant} {...props}/>
}


export default ButtonTag
