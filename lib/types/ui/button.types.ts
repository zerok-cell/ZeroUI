import {FC, HTMLAttributes, PropsWithChildren} from "react";


type TButtonVariant = "filled"|"outlined"|"dashed"

type TButtonProps = {text:string,
variant?:TButtonVariant
}

 type TButton = FC<TButtonProps> & PropsWithChildren<
HTMLAttributes<HTMLButtonElement>
>
export default TButton