import dayjs from "dayjs";
import {
    FTChainWorkingWithDayjs,
    FTGenerateDayMap,
    FTReadLastMonthEndDayIndex,
    TLastMonthEndDayIndex
} from "@/types/utils/calendar.types.ts";


/**
 * @class CalendarDjs
 * @classdesc Утилитарный класс для работы с календарными данными, такими как расчет
 * последнего дня предыдущего месяца и его индекса. Поддерживает цепочку вызовов.
 */
class CalendarDjs {
    /**
     * Хранит информацию о последнем дне предыдущего месяца, включая его читаемое название и индекс.
     * @private
     * @type {TLastMonthEndDayIndex | undefined}
     */
    private lastMonthEndDayIndex: TLastMonthEndDayIndex | undefined;

    /**
     * Рассчитывает и сохраняет последний день предыдущего месяца на основе предоставленной даты.
     * Обновляет `lastMonthEndDayIndex` читаемым названием дня недели и индексом дня.
     *
     * @function
     * @name getLastMonthEndDayIndex
     * @memberof CalendarDjs
     * @instance
     * @param data - Объект Dayjs, представляющий дату начала для вычислений.
     * @returns  Возвращает текущий экземпляр класса для цепочки вызовов.
     */
    public getLastMonthEndDayIndex: FTChainWorkingWithDayjs = (data) => {
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
     * @name readLastMonthEndDayIndex
     * @memberof CalendarDjs
     * @instance
     * @returns  Объект, содержащий название дня недели и индекс последнего дня.
     * @throws {Error} Выбрасывает ошибку, если `lastMonthEndDayIndex` не был установлен, что означает,
     * что метод `getLastMonthEndDayIndex` не был вызван.
     */
    public readLastMonthEndDayIndex: FTReadLastMonthEndDayIndex = () => {
        if (this.lastMonthEndDayIndex) return this.lastMonthEndDayIndex;
        throw new Error("`lastMonthEndDayIndex` не существует, возможно, вы не вызвали `getLastMonthEndDayIndex`");
    };

    /**
     * @function
     * @instance
     * @returns Карту дней в месяце с днями помеченные нулями в начале, это дни которые приходились на прошлый месяц, что бы
     * начать календарь с нужного дня недели.
     * @description Генерирует карту дней в месяце
     * @param data
     */
    public generateDayMap: FTGenerateDayMap = (data) => {
        return Array.from({length: data.daysInMonth()}, (_, day) => day + 1)
    }


    public generateDayMapWithPastMonth: FTGenerateDayMap = (data) => {
        const pastMonth = this.getLastMonthEndDayIndex(data).readLastMonthEndDayIndex()
        const nullableMonth = Array.from({length: pastMonth.indexDayJs}, () => 0)
        Array.from({length: data.daysInMonth()}, (_, day) => nullableMonth.push(day + 1))
        return nullableMonth
    }
}

const x = new CalendarDjs

const chain = x.generateDayMapWithPastMonth(dayjs().add(9, "month"))
console.log(chain)
export default CalendarDjs;