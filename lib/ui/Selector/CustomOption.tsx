import {clickElement} from "@s/generalBehaviour.css.ts";
import {FC} from "react";

export const Option: FC<{ option: number | string }> = ({option}) => {

    return <div className={clickElement} style={{
        height: "max-content"
    }}>
        <span>{option}</span>
    </div>
}