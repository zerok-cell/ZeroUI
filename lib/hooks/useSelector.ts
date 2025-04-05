import {useContext} from "react";
import {selectorContext} from "@/types/providers/contexts.ts";
import {TSelectorContextState} from "@/types/providers/selector/selectorProvider.types.ts";


export const useSelector = (): TSelectorContextState => {
    const state = useContext(selectorContext)
    if (!state) throw new Error("Context not exist")
    return state

}