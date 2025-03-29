import {FC} from "react";
import {TButtonProps} from "@/types/ui/button.types.ts";

type TTagProps = {
    readonly selected: boolean;
    readonly sharp: boolean,
} & TButtonProps; // Подключаем типы кнопки

type TTag = FC<TTagProps>;

export default TTag;