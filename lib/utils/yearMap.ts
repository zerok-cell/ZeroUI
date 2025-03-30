import memoize from "memoizee";

type TMonthName = readonly string[];
type TYearMap = Record<number, number[]>;
type TLang = "En" | "Ru" | undefined


/**
 * @version 1.0.0
 * @class YearMap
 * @description Класс для работы с днями в году и месяцами. Подходит для генерации календарей и обработки данных о датах.
 */
class YearMap {

    /**
     * @type {TYearMap}
     * @description Объект, содержащий массивы дней для каждого месяца указанного года.
     */
    public yearMap: TYearMap = {};

    /**
     * @method getAllDayMonth
     * @description Возвращает массив всех дней указанного месяца и года.
     * @param {number} year - Год для вычисления.
     * @param {number} month - Месяц (0 для января, 11 для декабря).
     * @returns {number[]} Массив дней месяца.
     * @example
     * const yearMap = new YearMap();
     * const days = yearMap.getAllDayMonth(2024, 1);
     * console.log(days); // [1, 2, 3, ..., 29] для февраля високосного года.
     */
    public getAllDayMonth = memoize((year: number, month: number): number[] => {
        const date = new Date(year, month, 1);
        const dates: number[] = [];

        while (date.getMonth() === month) {
            dates.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    });

    /**
     * @method allDayInYear
     * @description Возвращает объект, содержащий массивы дней для всех месяцев указанного года.
     * @param {number} year - Год для вычисления.
     * @returns {TYearMap} Объект, где ключи - индексы месяцев, а значения - массивы дней.
     * @example
     * const yearMap = new YearMap();
     * const yearData = yearMap.allDayInYear(2025);
     * console.log(yearData[0]); // [1, 2, 3, ..., 31] для января.
     */
    public allDayInYear = memoize((year: number): TYearMap => {
        const yearData: TYearMap = {};
        Array.from({length: 12}, (_, month) => {
            yearData[month] = this.getAllDayMonth(year, month);
        });

        this.yearMap = yearData;
        return yearData;
    });

    /**
     * @type {TLang}
     * @description Язык названий месяцев. Возможные значения: `"En"`, `"Ru"`.
     */
    private readonly lang: NonNullable<TLang>;

    /**
     * @type {TMonthName}
     * @description Названия месяцев на русском языке.
     * @private
     */
    private readonly monthRu: TMonthName;

    /**
     * @type {TMonthName}
     * @description Названия месяцев на английском языке.
     * @private
     */
    private readonly monthEn: TMonthName;

    /**
     * @constructor
     * @description Инициализирует объект `YearMap` с указанным языком.
     * @param {TLang} [lang="En"] - Язык названий месяцев. `"En"` для английского, `"Ru"` для русского.
     * @example
     * const yearMapRu = new YearMap("Ru");
     * console.log(yearMapRu.nameMonth); // ["Январь", "Февраль", ..., "Декабрь"]
     *
     * const yearMapEn = new YearMap("En");
     * console.log(yearMapEn.nameMonth); // ["January", "February", ..., "December"]
     */
    constructor(lang: TLang = "En") {
        this.lang = lang;
        this.monthRu = [
            "Январь", "Февраль", "Март", "Апрель",
            "Май", "Июнь", "Июль", "Август",
            "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
        ];

        this.monthEn = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December",
        ];
    }

    /**
     * @method nameMonth
     * @description Возвращает массив названий месяцев на указанном языке.
     * @returns {TMonthName} Массив названий месяцев.
     * @throws {Error} Если язык не поддерживается.
     * @example
     * const yearMapRu = new YearMap("Ru");
     * console.log(yearMapRu.nameMonth); // ["Январь", "Февраль", ..., "Декабрь"]
     *
     * const yearMapEn = new YearMap("En");
     * console.log(yearMapEn.nameMonth); // ["January", "February", ..., "December"]
     */
    get nameMonth(): TMonthName {
        switch (this.lang) {
            case "En":
                return this.monthEn;
            case "Ru":
                return this.monthRu;
            default:
                throw new Error(`Unsupported language "${this.lang}". Supported languages: "Ru" and "En".`);
        }
    }
}

export default YearMap