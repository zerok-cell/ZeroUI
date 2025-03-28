import {FC} from "react";
import {TButtonProps} from "@/types/ui/button.types.ts";

type TTagProps = {
    readonly selected: boolean;
} & TButtonProps; // Подключаем типы кнопки

type TTag = FC<TTagProps>;

export default TTag;