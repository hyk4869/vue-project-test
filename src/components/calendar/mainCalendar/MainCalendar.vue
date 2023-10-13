<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { ArrayDay } from '../common_content/ArrayDay';
import dayjs from 'dayjs';
import { useShowEvent, type contentArray } from '../calendar_stores/stores';

const currentMonth = ref(ArrayDay());
const yearIndex = ref<number>(dayjs().year());
const monthIndex = ref<number>(dayjs().month() + 1);
const isShow = useShowEvent();
const dayBox = ref<contentArray[]>([]);

watch([monthIndex], () => {
  currentMonth.value = ArrayDay(yearIndex.value, monthIndex.value);
});

const nowDay = (day: dayjs.Dayjs) => {
  const todayData = dayjs().format('YY-MM-DD');
  const currDay = day.format('YY-MM-DD');

  if (todayData === currDay) {
    return 'font-size: 0.75rem; line-height: 1rem; background-color: rgb(59 130 246); border-radius: 9999px; color: rgb(255 255 255); padding:2px';
  } else {
    return '';
  }
};

watch(isShow, () => {
  const events = isShow.contentArray.filter(
    (evt) => dayjs(evt.day).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
  );
  dayBox.value = events;
});
</script>

<template>
  <div class="calendar-container">
    <div class="calendar">
      <div v-for="(value, idx) in currentMonth" :key="idx" class="day-grid">
        <div v-for="(data, index) in value" :key="index" class="inner-day" @click="isShow.showDialog">
          <div class="day-wrapper">
            <p v-if="idx === 0" class="day-name">{{ data.format('dd') }}</p>
            <p class="day-full" :style="nowDay(data)">{{ data.format('DD') }}</p>
          </div>
          <div class="event">
            <div v-for="(box, number) in dayBox" :key="number" class="eventBox" @click="isShow.showDialog">
              <div v-if="box.day === data.format('YYYY-MM-DD')" class="eventName">{{ box.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  /**臨時で設定。もっといいのあればそっちを設定 */
  height: 100vh;
}
.calendar {
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  height: 100%;
}
.day-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
.inner-day {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(222, 222, 222);
  cursor: pointer;
}
.day-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.day-name {
  margin-bottom: 2px;
}
.day-full {
  margin: 5px 0 2px 0;
}
.event {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.eventBox {
  cursor: pointer;
}
.eventName {
  padding: 0.25rem;
  margin-right: 0.75rem;
  color: rgb(160, 160, 160);
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
