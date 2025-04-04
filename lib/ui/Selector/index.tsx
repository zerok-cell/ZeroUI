import {TSelector} from "@/types/ui/selector.types.ts";
import {selectStyle} from "@/ui/Selector/css/select.css.ts";
import Array from "public/images/arrow-select.svg?react"
import {arrowStyle} from "@/ui/Selector/css/arrow.css.ts";
import {contanerStyle} from "@/ui/Selector/css/containerSelect.css.ts";

const Selector: TSelector = ({options}) => {
    return (
        <div className={contanerStyle}>

            <select className={selectStyle()}>
                {options.map((option) => (
                    <option>
                        {option}
                    </option>
                ))}
            </select>
            <Array className={arrowStyle}/>
        </div>

    )

}
export default Selector;