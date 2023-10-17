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

/**メイン処理　編集用 */
export const useEditEvent = defineStore('showevent', () => {
  const isShowEvent = ref<boolean>(false);

  const contentArray = useAddNewEvent().contentArray;

  const colorList = useAddNewEvent().colorList;

  const editNewTask = ref<string>('');
  const editExplanation = ref<string>('');
  const colorPick = ref<string>('');
  const idValue = ref<string>('');
  const contentLength = ref<number>();
  const day = ref<string>('');

  const showDialog = (id?: string) => {
    const isSameEvent = contentArray.find((a) => a.id === id);

    if (isSameEvent) {
      editNewTask.value = isSameEvent.title;
      editExplanation.value = isSameEvent.explanation;
      colorPick.value = isSameEvent.color;
      idValue.value = isSameEvent.id;
      contentLength.value = isSameEvent.contentLength;
      day.value = isSameEvent.day;
      // saveTask(isSameEvent.id);
    }

    isShowEvent.value = !isShowEvent.value;
  };

  return { isShowEvent, showDialog, contentArray, colorList, editNewTask, editExplanation, colorPick };
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
export const useDisplayTime = defineStore('selectTime', () => {
  const displayTime = ref(dayjs());
  return { displayTime };
});

// day: useSelectTime().selectTime.format('YYYY-MM-DD'),
