import {
    FTAddValue,
    FTExtendFunctionChain,
    FTGenerateDayMap,
    FTGetNameWeekdayOrMonth,
    FTReadLastMonthDayIdx,
    TFGenerateLines,
    TFReadDayMap,
    TNameMonth,
} from "@/types/utils/calendar.types.ts";
import dayjs from "dayjs";
import memoizee from "memoizee";


/**
 * @class CalendarDjs
 * @classdesc Утилитарный класс для работы с календарными данными, такими как расчет
 * последнего дня предыдущего месяца и его индекса. Поддерживает цепочку вызовов.
 */
class CalendarDjs {
    public getNameWeekdayOrMonth: FTGetNameWeekdayOrMonth = memoizee(({whatsGet}) => {

        const weekdayCount = Array.from({length: 7}, (_, indexMonth) => indexMonth)
        const nameWeekday: TNameMonth = {
            fullNames: {
                msv: []
            },
            shortNames: {
                msv: []
            }
        }
        const addValue: FTAddValue = ({month, name, sliceName}) => {
            nameWeekday.fullNames[month] = name;
            nameWeekday.fullNames.msv.push(name);
            nameWeekday.shortNames[month] = sliceName;
            nameWeekday.shortNames.msv.push(sliceName);

        }
        weekdayCount.forEach((month) => {
            const name = dayjs().day(month).format(whatsGet);
            const sliceName = name.slice(0, 2);
            addValue({month, name, sliceName})
        })
        return nameWeekday

    })
    /**
     * Хранит информацию о последнем дне предыдущего месяца, включая его читаемое название и индекс.
     * @private
     * @type {FTReadLastMonthDayIdx | undefined}
     */
    private monthMap: ReturnType<TFReadDayMap> = []
    private lastMonthEndDayIndex: ReturnType<FTReadLastMonthDayIdx> | undefined = undefined;

    /**
     * Рассчитывает и сохраняет последний день предыдущего месяца на основе предоставленной даты.
     * Обновляет `lastMonthEndDayIndex` читаемым названием дня недели и индексом дня.
     *
     * @function
     * @name getLastMonthDayIdx
     * @memberof CalendarDjs
     * @instance
     * @param data - Объект Dayjs, представляющий дату начала для вычислений.
     * @returns  Возвращает текущий экземпляр класса для цепочки вызовов.
     */
    public getLastMonthDayIdx: FTExtendFunctionChain = ({data}) => {
        const initialData = data.add(-1, "month");
        const maxDay = initialData.daysInMonth();
        const newData = dayjs(`${initialData.year()}-${initialData.month() + 1}-${maxDay}`);
        this.lastMonthEndDayIndex = {
            humanReadableName: newData.format('dddd'),
            indexDayJs: newData.day()
        };
        return this;
    };

    /**
     * Получает сохраненную информацию о последнем дне предыдущего месяца.
     *
     * @function
     * @name readLastMonthDayIdx
     * @memberof CalendarDjs
     * @instance
     * @returns  Объект, содержащий название дня недели и индекс последнего дня.
     * @throws {Error} Выбрасывает ошибку, если `lastMonthEndDayIndex` не был установлен, что означает,
     * что метод `getLastMonthEndDayIndex` не был вызван.
     */
    public readLastMonthDayIdx: FTReadLastMonthDayIdx = () => this.checkAttr<typeof this.lastMonthEndDayIndex>(this.lastMonthEndDayIndex);

    /**
     * @function
     * @instance
     * @returns Карту дней в месяце с днями помеченные нулями в начале, это дни которые приходились на прошлый месяц, что бы
     * начать календарь с нужного дня недели.
     * @description Генерирует карту дней в месяце
     * @param data
     * @param mapssFn
     */
    public generateDayMap: FTGenerateDayMap = ({data, mapFn}) => {
        return Array.from({length: data.daysInMonth()}, mapFn ? mapFn : (_: unknown, day: number) => day + 1)

    }

    public readDayMap: TFReadDayMap = () => this.checkAttr<typeof this.monthMap>(this.monthMap);

    public generateDayMapWithPastMonth: FTExtendFunctionChain = ({data}) => {
        const pastMonth: ReturnType<typeof this.readLastMonthDayIdx> = this.getLastMonthDayIdx({data}).readLastMonthDayIdx()
        const genDayMap = this.generateDayMap({data, mapFn: (_, day) => day + 1})
        const pastMonthDay = Array.from({length: pastMonth.indexDayJs}, (): number => 0);
        const behaviourLength = genDayMap.length + pastMonthDay.length;
        this.monthMap = [
            ...pastMonthDay,
            ...genDayMap,
            ...Array.from({length: 36 - behaviourLength}, (): number => 0),

        ]


        return this

    }

    public generateLines: TFGenerateLines = ({chunkSize}) => {
        const array = this.monthMap
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    }

    private checkAttr = <TVarData>(variable: TVarData): NonNullable<TVarData> => {
        if (variable) return variable;
        else throw new Error(`The request for a variable was rejected because it does not exist. The variable is "${typeof variable}"`);
    };
}

//
// const x = new CalendarDjs
// const chain = x.getNameWeekdayOrMonth({whatsGet: EGetNameWeekdayOrMonth.month})
// console.log(chain)
export default CalendarDjs;