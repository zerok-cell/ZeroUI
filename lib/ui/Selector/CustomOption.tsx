import {clickElement} from "@s/generalBehaviour.css.ts";
import {FC} from "react";

export const Option: FC<{ option: number | string }> = ({option}) => {

    return <div className={clickElement}>
        <span>{option}</span>
    </div>
}