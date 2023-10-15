import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { reactive, ref, type Ref } from 'vue';

export type contentArray = {
  title: string;
  explanation: string;
  id: string;
  contentLength: number;
  day: string;
  color: string;
};

/**メイン処理　予定などを管理する */
export const useShowEvent = defineStore('showevent', () => {
  const isShowEvent = ref<boolean>(false);

  const contentArray = reactive<Array<contentArray>>([]);

  const showDialog = () => {
    isShowEvent.value = !isShowEvent.value;
  };
  const colorList: string[] = ['#BAF1F1', '#F1BAF1', '#BAF1D6', '#F1F1BA', '#BABAF1'];
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

/**smallCalendarでどの日付を選択したのか & ダイアログ内の日付 */
export const useSelectTime = defineStore('selectTime', () => {
  const selectTime = ref(dayjs());
  return { selectTime };
});
