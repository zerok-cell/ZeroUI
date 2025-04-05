import {FC, useEffect, useState} from "react";
import {optionStyle} from "@/ui/Selector/css/option.css.ts";
import {useSelector} from "@/hooks/useSelector.ts";

export const Option: FC<{ option: string, index: number }> = ({option, index}) => {
    const {setSelected, selected} = useSelector()
    const [selectStyle, setSelectStyle] = useState<boolean>(false)

    useEffect(() => {
        setSelectStyle(selected?.id === index)
    }, [index, selected]);


    return <div className={optionStyle({selected: selectStyle})}
                onClick={() => setSelected({id: index, text: option})}
    >
        {/*<span>{option}</span>*/}
        <span>{option}</span>

    </div>
}