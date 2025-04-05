import {FC, useEffect, useState} from "react";
import {optionStyle} from "@/ui/Selector/css/option.css.ts";
import {useSelector} from "@/hooks/useSelector.ts";

export const Option: FC<{ option: string, index: number }> = ({option, index}) => {
    const {setSelected, selected} = useSelector()
    const [selectStyle, setSelectStyle] = useState<boolean>(false)

    useEffect(() => {
        setSelectStyle(selected?.id === index)
    }, [index, selected]);

    const onClick = () => {
        if (selected?.id === index) {
            setSelected({id: undefined, text: undefined})
            setSelectStyle(false)

        } else setSelected({id: index, text: option})

    }

    return <div className={optionStyle({selected: selectStyle})}
                onClick={onClick}
    >
        {/*<span>{option}</span>*/}
        <span>{option}</span>

    </div>
}