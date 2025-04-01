import {tagStyle} from "./tag.css.ts";
import TTag from "@/types/ui/tag.types.ts";
import addSymbolConditionExist from "@/utils/addSymbolConditionExist.ts";
import {Button} from "@/ui";

const ButtonTag: TTag = ({selected, children, text, borderStyle, sharp, ...props}) => {
    const sharpAdd = addSymbolConditionExist(sharp, "#")
    const inlineText = sharpAdd + addSymbolConditionExist(text, text)

    return <Button
        className={tagStyle()} text={inlineText}
        border={selected ? "lg" : undefined}
        borderStyle={borderStyle} {...props}>
        {children}
    </Button>
}


export default ButtonTag
