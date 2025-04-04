import {TSelector} from "@/types/ui/selector.types.ts";
import Array from "public/images/arrow-select.svg?react"
import {arrowStyle} from "@/ui/Selector/css/arrow.css.ts";
import {containerStyle} from "@/ui/Selector/css/containerSelect.css.ts";
import {useState} from "react";
import {Button} from "@/ui";
import {selectContainer, selectStyle} from "@/ui/Selector/css/select.css.ts";
import {Option} from "@/ui/Selector/CustomOption.tsx";
import {optionBlock} from "@/ui/Selector/css/option.css.ts";
import {flexBox} from "@s/flex.css.ts";

const Selector: TSelector = ({options, ...props}) => {
    const [rotateArrow, setRotateArrow] = useState<boolean>(false)
    const [select, setSelect] = useState(() => options[0])
    return (
        <div className={containerStyle}>
            <div className={selectContainer}>
                <Button
                    onMouseLeave={() => setRotateArrow(false)}
                    onMouseDown={() => setRotateArrow(true)}
                    className={selectStyle({...props})}>
                    <div className={flexBox}>
                        {select} <Array className={arrowStyle({rotate: rotateArrow})}/>
                    </div>
                </Button>

            </div>


            {/*<select*/}
            {/*    onMouseDown={() => setRotateArrow(true)}*/}
            {/*    onMouseLeave={() => setRotateArrow(false)}*/}
            {/*    className={selectStyle({...props})}>*/}
            <div className={optionBlock}>
                {options.map((option) => (
                    <Option value={option}>
                        {option}
                    </Option>
                ))}
            </div>
            {/*</select>*/}
        </div>

    )

}
export default Selector;