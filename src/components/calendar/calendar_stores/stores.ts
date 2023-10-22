import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { reactive, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { ArrayDay } from '../common_content/ArrayDay';

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

  const editNewTask = ref<string>('');
  const editExplanation = ref<string>('');
  const colorPick = ref<string>('');
  const selectedId = ref<string>('');

  const showDialog = (id?: string) => {
    const a = contentArray.find((item) => item.id === id);
    if (a) {
      editNewTask.value = a.title;
      editExplanation.value = a.explanation;
      colorPick.value = a.color;
      selectedId.value = a.id;
    }

    isShowEvent.value = !isShowEvent.value;
  };

  const setColor = (value: string) => {
    colorPick.value = value;
  };

  const saveTask = () => {
    if (editNewTask.value !== '') {
      const existingIndex = contentArray.findIndex((a) => a.id === selectedId.value);

      if (existingIndex !== -1) {
        contentArray[existingIndex] = {
          ...contentArray[existingIndex],
          title: editNewTask.value,
          explanation: editExplanation.value,
          day: useSelectTime().selectTime.format('YYYY-MM-DD'),
          color: colorPick.value,
        };
      } else {
        const Id = uuidv4();
        contentArray.push({
          title: editNewTask.value,
          explanation: editExplanation.value,
          id: Id,
          contentLength: contentArray.length + 1,
          day: useSelectTime().selectTime.format('YYYY-MM-DD'),
          color: colorPick.value,
        });
      }
      showDialog();
      editNewTask.value = '';
      editExplanation.value = '';
      colorPick.value = '';
      selectedId.value = '';
    } else {
      window.alert('タイトルは必須です');
    }
  };

  const deleteObj = () => {
    if (selectedId.value !== '') {
      const findIndex = contentArray.findIndex((item) => item.id === selectedId.value);
      if (findIndex !== -1) {
        contentArray.splice(findIndex, 1);
      }
      showDialog();
      editNewTask.value = '';
      editExplanation.value = '';
      colorPick.value = '';
      selectedId.value = '';
    }
  };
  return {
    isShowEvent,
    showDialog,
    contentArray,
    colorList,
    saveTask,
    editNewTask,
    editExplanation,
    colorPick,
    setColor,
    selectedId,
    deleteObj,
  };
});

/**カレンダーのヘッダー部分の処理 */
export const useDisplayMonth = defineStore('caledar', () => {
  const monthIndex: Ref<number> = ref(dayjs().month() + 1);
  const yearIndex: Ref<number> = ref(dayjs().year());
  const currentMonth = ref(ArrayDay());

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

  return { currentMonth, yearIndex, monthIndex, pastMonth, nextMonth, presentMonth };
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

/**contentArrayから配列を探す */
export const findIdFromArray = defineStore('findIdFromArray', () => {
  const findId = (x: string) => {
    const result = useAddNewEvent().contentArray.find((a) => a.id === x)?.id;
    if (result) return useAddNewEvent().showDialog(result);
  };

  return { findId };
});
