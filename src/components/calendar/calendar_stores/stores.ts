import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { ref, type Ref } from 'vue';

export const useStoreCalendar = defineStore('caledar', () => {
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
