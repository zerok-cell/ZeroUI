import {TSelector} from "@/types/ui/selector.types.ts";
import {SelectorProvider} from "@/providers/SelectorProvider.tsx";
import {ButtonSelector} from "@/ui/Selector/ButtonSelector.tsx";
import {Option} from "@/ui/Selector/CustomOption.tsx";
import {useSelector} from "@/hooks/useSelector.ts";
import {useEffect} from "react";
import {optionBlock} from "@/ui/Selector/css/option.css.ts";

const Selector: TSelector = ({options, welcome, ...props}) => {
    // const {activate,selected} = useSelector()
    // const [select, setSelect] = useState(() => options[0])
    const {selected} = useSelector()
    useEffect(() => {
        console.log(selected)
    }, [selected]);
    return (
        <SelectorProvider>
            <div>
                <ButtonSelector welcome={welcome}/>
                <div className={optionBlock()}>{options.map((option, index) => (
                    <Option option={option} index={index}/>
                ))}</div>
            </div>
        </SelectorProvider>


    )

}
export default Selector;