import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

/**指定した年と月に基づいてカレンダーを生成 */
export const ArrayDay = (year = dayjs().year(), month = dayjs().month() + 1) => {
  dayjs.locale(ja);
  const firstDayOfTheMonth = dayjs(new Date(year, month - 1, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month - 1, currentMonthCount));
    });
  });

  return daysMatrix;
};
