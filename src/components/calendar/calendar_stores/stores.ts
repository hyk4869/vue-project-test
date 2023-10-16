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

  const colorList: string[] = ['#BAF1F1', '#F1BAF1', '#BAF1D6', '#F1F1BA', '#BABAF1'];

  const editNewTask = ref<string>('');
  const editExplanation = ref<string>('');
  const colorPick = ref<string>('');

  const showDialog = (id?: string) => {
    const isSameEvent = contentArray.find((a) => a.id === id);

    if (isSameEvent) {
      editNewTask.value = isSameEvent.title;
      editExplanation.value = isSameEvent.explanation;
      colorPick.value = isSameEvent.color;

      saveTask(isSameEvent.id);
    }

    isShowEvent.value = !isShowEvent.value;
  };

  const saveTask = (id?: string) => {
    if (editNewTask.value !== '') {
      contentArray.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            title: editNewTask.value,
            explanation: editExplanation.value,
            day: useSelectTime().selectTime.format('YYYY-MM-DD'),
            color: colorPick.value,
          };
        }
      });
      showDialog();
      editNewTask.value = '';
      editExplanation.value = '';
    } else {
      window.alert('タイトルは必須です');
    }
  };

  return { isShowEvent, showDialog, contentArray, colorList, editNewTask, editExplanation, colorPick, saveTask };
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
