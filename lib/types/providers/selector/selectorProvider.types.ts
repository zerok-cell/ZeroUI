export type TSelectorContextState = {
    activate: boolean
    selected?: {
        text: string,
        id: number
    }
    setActivate: (activate?: boolean) => void
    setSelected: (selected: TSelectorContextState["selected"]) => void
}

