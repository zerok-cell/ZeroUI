import {createContext} from "react";
import {TSelectorContextState} from "@/types/providers/selector/selectorProvider.types.ts";

export const selectorContext = createContext<TSelectorContextState>({activate: false})
