import {FC} from "react";
import {TButtonProps} from "@/types/ui/button.types.ts";

type TTagProps = {
    readonly selected: boolean;
    readonly sharp: boolean,
} & TButtonProps;

type TTag = FC<TTagProps>;

export default TTag;