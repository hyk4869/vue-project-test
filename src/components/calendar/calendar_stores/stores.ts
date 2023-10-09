import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { reactive, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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

export const useDisplayTime = defineStore('time', () => {
  const time = ref(dayjs());
  return { time };
});

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
