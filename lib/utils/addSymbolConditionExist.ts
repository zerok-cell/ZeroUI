const addSymbolConditionExist = (variable: string | boolean | number, symbol: string) => {
    if (variable) return symbol
    else return ''

}
export default addSymbolConditionExist