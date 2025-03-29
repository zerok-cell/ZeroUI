import {TBaseText} from "@/types";
import {FC} from "react";
import {borderSize} from "@s/generalBehaviour.css.ts";

type TBadge = FC<Pick<TBaseText, "text">
    &
    {
        readonly border?: boolean,
        readonly sizeBorder?: keyof typeof borderSize
    }
>
export default TBadge