import {TSelector} from "@/types/ui/selector.types.ts";
import Array from "public/images/arrow-select.svg?react"
import {arrowStyle} from "@/ui/Selector/css/arrow.css.ts";
import {containerStyle} from "@/ui/Selector/css/containerSelect.css.ts";
import {useState} from "react";
import {Button} from "@/ui";
import {selectStyle} from "@/ui/Selector/css/select.css.ts";
import {Option} from "@/ui/Selector/CustomOption.tsx";
import {optionBlock} from "@/ui/Selector/css/option.css.ts";
import {flexBox} from "@s/flex.css.ts";

const Selector: TSelector = ({options, ...props}) => {
    const [active, setActive] = useState<boolean>(false)
    const [select, setSelect] = useState(() => options[0])
    return (
        <div className={containerStyle}>
            <Button
                onClick={() => setActive(!active)}
                className={selectStyle({...props})}>
                <div className={flexBox()}>
                    {select} <Array className={arrowStyle({rotate: active})}/>
                </div>
            </Button>


            <div className={optionBlock({active})}>
                {options.map((option) => (
                    <Option option={option}>
                        {option}
                    </Option>
                ))}
            </div>
        </div>

    )

}
export default Selector;