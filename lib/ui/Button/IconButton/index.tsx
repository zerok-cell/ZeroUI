import {Button} from "@/ui";
import {TButton} from "@/types";

const IconButton: TButton = ({children, ...props}) => {
    return <Button {...props}>
        {children}
    </Button>
}

export default IconButton