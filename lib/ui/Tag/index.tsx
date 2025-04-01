import TTag from "@/types/ui/tag.types.ts";
import addSymbolConditionExist from "@/utils/addSymbolConditionExist.ts";
import {Button} from "@/ui";

const ButtonTag: TTag = ({selected, children, borderStyle, sharp, ...props}) => {
    const sharpAdd = addSymbolConditionExist(sharp, "#")
    const selectedOrNot = selected ? "lg" : undefined
    return <Button
        border={selectedOrNot}
        borderStyle={borderStyle} {...props}>
        {sharpAdd}{children}
    </Button>
}


export default ButtonTag
