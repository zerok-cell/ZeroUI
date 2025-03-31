import {TIconButton} from "@/types/ui/iconButton.types.ts";
import {Button} from "@/ui";

const IconButton: TIconButton = ({children, variant, ...props}) => {
    console.log(variant)
    return <Button text={""} {...props} variant={variant}>
        {children}
    </Button>
}

export default IconButton