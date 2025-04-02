import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isYesterday from 'dayjs/plugin/isYesterday'
import Calendar from 'dayjs/plugin/calendar'
import 'dayjs/locale/ru';

dayjs.locale('ru');
/**
 * @description Получить номер дня в году
 */
dayjs.extend(dayOfYear);

/**
 * @description Является ли год високосным
 */
dayjs.extend(isLeapYear);

/**
 * @description Является ли дата той же или более поздней.
 */
dayjs.extend(isSameOrAfter);

/**
 * @description Является ли дата той же или более ранней.
 */
dayjs.extend(isSameOrBefore);

/**
 * @description Является ли дата сегодняшним днем.
 */
dayjs.extend(isToday);
/**
 * @description Является ли дата завтрашним днем.
 */
dayjs.extend(isTomorrow);
/**
 * @description Является ли дата вчерашним днем.
 */
dayjs.extend(isYesterday);

dayjs.extend(Calendar);


export default dayjs;


