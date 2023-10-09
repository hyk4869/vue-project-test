import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { reactive, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

/**メイン処理　予定などを管理する */
export const useShowEvent = defineStore('showevent', () => {
  type contentArray = {
    title: string;
    explanation: string;
    id: string;
    contentLength: number;
  };

  const isShowEvent = ref<boolean>(false);
  const contentArray = reactive<Array<contentArray>>([]);

  const showDialog = () => {
    isShowEvent.value = !isShowEvent.value;
  };

  return { isShowEvent, showDialog, contentArray };
});

/**カレンダーのヘッダー部分の処理 */
export const useDisplayMonth = defineStore('caledar', () => {
  const monthIndex: Ref<number> = ref(dayjs().month() + 1);
  const yearIndex: Ref<number> = ref(dayjs().year());

  const pastMonth = () => {
    monthIndex.value = monthIndex.value - 1;
    if (monthIndex.value < 1) {
      monthIndex.value = 12;
      yearIndex.value = yearIndex.value - 1;
    }
  };

  const nextMonth = () => {
    monthIndex.value = monthIndex.value + 1;
    if (monthIndex.value > 12) {
      monthIndex.value = 1;
      yearIndex.value = yearIndex.value + 1;
    }
  };

  const presentMonth = () => {
    yearIndex.value = dayjs().year();
    monthIndex.value = dayjs().month() + 1;
  };

  return { yearIndex, monthIndex, pastMonth, nextMonth, presentMonth };
});

/**ダイアログ内の日付 */
export const useDisplayTime = defineStore('time', () => {
  const time = ref(dayjs());
  return { time };
});

/**smallCalendarでどの日付を選択したのか */
export const useSelectTime = defineStore('selectTime', () => {
  const selectTime = ref(dayjs());
  return { selectTime };
});
