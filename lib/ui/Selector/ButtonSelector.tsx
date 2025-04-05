import flexBox from "@s/flex.css.ts";
import {arrowStyle} from "@/ui/Selector/css/arrow.css.ts";
import {Button} from "@/ui";
import {useSelector} from "@/hooks/useSelector.ts";
import Arrow from "public/images/arrow-select.svg?react";
import {FC} from "react";
import {TSelector} from "@/types/ui/selector.types.ts";

export const ButtonSelector: FC<Pick<Parameters<TSelector>[0], "welcome">> = ({welcome}) => {
    const {setActivate, selected, activate} = useSelector()
    return (
        <Button onClick={() => setActivate()}
                style={{
                    width: "100%",
                }}
        >
                <span className={flexBox({justifyContent: 'between', alignContent: 'center', alignItems: 'center'})}>
                    {selected?.text ? selected?.text : welcome}
                    <Arrow className={arrowStyle({rotate: activate})}/>
                </span>
        </Button>)


}