import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { reactive, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export type contentArray = {
  title: string;
  explanation: string;
  id: string;
  contentLength: number;
  day: string;
  color: string;
};

/**メイン処理　予定など新しく追加する */
export const useAddNewEvent = defineStore('showevent', () => {
  const isShowEvent = ref<boolean>(false);

  const contentArray = reactive<Array<contentArray>>([]);

  const colorList: string[] = ['#BAF1F1', '#F1BAF1', '#BAF1D6', '#F1F1BA', '#BABAF1'];

  const showDialog = (id?: string) => {
    isShowEvent.value = !isShowEvent.value;
  };

  return { isShowEvent, showDialog, contentArray, colorList };
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

/**mainCalendarでどの日付を選択したのか & ダイアログ内の日付 */
export const useSelectTime = defineStore('selectTime', () => {
  const selectTime = ref(dayjs());
  return { selectTime };
});

/**smallCalendarでどの日付を選択したのか & ダイアログ内の日付 */
export const useDisplayTime = defineStore('displayTime', () => {
  const displayTime = ref(dayjs());
  return { displayTime };
});

// day: useSelectTime().selectTime.format('YYYY-MM-DD'),
