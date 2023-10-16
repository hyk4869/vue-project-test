<script setup lang="ts">
import dayjs from 'dayjs';
import { ref, watch } from 'vue';
import { ArrayDay } from '../common_content/ArrayDay';
import { useDisplayTime } from '../calendar_stores/stores';

//headerの矢印とは独立させる形
const monthIndex = ref<number>(dayjs().month() + 1);
const yearIndex = ref<number>(dayjs().year());

const displayTime = useDisplayTime();
const currentMonth = ref(ArrayDay());

watch([monthIndex], () => {
  currentMonth.value = ArrayDay(yearIndex.value, monthIndex.value);
});

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

const nowDay = (day: dayjs.Dayjs) => {
  const format = 'YY-MM-DD';
  const todayData = dayjs().format(format);
  const currDay = day.format(format);
  const selectDay = displayTime.displayTime && displayTime.displayTime.format(format);

  if (todayData === currDay) {
    return 'font-size: 0.75rem; line-height: 1rem; background-color: rgb(59 130 246); border-radius: 9999px; color: rgb(255 255 255);';
  } else if (currDay === selectDay) {
    return 'font-size: 0.75rem; line-height: 1rem; background-color: rgb(191 219 254); border-radius: 9999px; color: rgb(255 255 255);';
  } else {
    return '';
  }
};
</script>

<template>
  <div class="content">
    <div class="leftOrRight">
      <q-icon name="chevron_left" class="left" @click="pastMonth" />
      <h3>{{ yearIndex }}年{{ monthIndex }}月</h3>
      <q-btn @click="presentMonth" label="Today" class="todayBtn"></q-btn>
      <q-icon name="chevron_right" class="right" @click="nextMonth" />
    </div>

    <div class="smallCalendar">
      <div v-for="(value, idx) in currentMonth[0]" :key="idx" class="divDayOfWeek">
        <span class="dayOfWeek">
          {{ value.format('dd').charAt(0) }}
        </span>
      </div>
      <div class="grid-container">
        <div v-for="(value, idx) in currentMonth" :key="idx" class="grid-row">
          <div v-for="(day, index) in value" :key="index" class="grid-item">
            <button class="day" :style="nowDay(day)" @click="displayTime.displayTime = day">
              <span class="spanDay">
                {{ day.format('D') }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}
.leftOrRight {
  display: flex;
  flex-direction: row;
  align-items: center;
}
h3 {
  font-size: 0.8rem;
  display: flex;
  padding: 0 0.7rem;
}
.left {
  font-size: 1.4rem;
  cursor: pointer;
  padding: 10px;
}
.right {
  font-size: 1.4rem;
  cursor: pointer;
  left: 0.5rem;
  padding: 10px;
}
.todayBtn {
  background-color: rgb(255, 255, 195, 1);
  width: 2.7rem;
  font-size: 0.5rem;
}
/** */
.smallCalendar {
  display: grid;
  position: relative;
  top: 1rem;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  height: 15rem;
  width: 13.2rem;
}
.divDayOfWeek {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
}

.dayOfWeek {
  padding-left: 0.5rem;
  font-size: 0.7rem;
}

.grid-container {
  position: relative;
  padding-left: 1rem;
  display: grid;
}

.grid-row {
  display: flex;
  flex-direction: row;
}
.grid-row > * {
  flex: 1;
}

.grid-item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 0.6rem;
}
.day {
  padding: 0.5rem;
  user-select: none;
  cursor: pointer;
}
.spanDay {
  font-size: 0.7rem;
  padding-left: 0.1rem;
}
</style>
