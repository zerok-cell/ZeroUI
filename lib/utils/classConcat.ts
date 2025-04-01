export const classConcat = (...args: string[]) => {
    let res = '';
    args.forEach((className, index) => {
        res += index === 0 ? className : ` ${className}`;
    });
    return res;
}
