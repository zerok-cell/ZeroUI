import {FC, ReactNode, useState} from "react";
import {selectorContext} from "@/types/providers/contexts";
import {TSelectorContextState} from "@/types/providers/selector/selectorProvider.types.ts";


export const SelectorProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [activateState, setActivate] = useState(false)
    const [selected, setSelected] = useState<number>()

    const setActivateState: TSelectorContextState['setActivate'] = (activate) => {
        if (activate) setActivate(activate)
        else setActivate(!activateState)
    }

    const setSelectedState: TSelectorContextState['setSelected'] = (selected) => setSelected(selected)


    return (
        <selectorContext.Provider
            value={{activate: activateState, selected, setActivate: setActivateState, setSelected: setSelectedState}}>
            {children}
        </selectorContext.Provider>
    )
}
