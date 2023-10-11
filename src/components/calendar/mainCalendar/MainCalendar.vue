<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { ArrayDay } from '../common_content/ArrayDay';
import dayjs from 'dayjs';

const currentMonth = ref(ArrayDay());
const yearIndex = ref<number>(dayjs().year());
const monthIndex = ref<number>(dayjs().month() + 1);
const dayBox = ref<[]>([]);

watch([monthIndex], () => {
  currentMonth.value = ArrayDay(yearIndex.value, monthIndex.value);
});
</script>

<template>
  <div class="calendar-container">
    <div class="calendar">
      <div v-for="(value, idx) in currentMonth" :key="idx" class="day-grid">
        <div v-for="(data, index) in value" :key="index" class="inner-day">
          <div class="day-wrapper">
            <p v-if="idx === 0" class="day-name">{{ data.format('dd') }}</p>
            <p class="day-full">{{ data.format('DD') }}</p>
          </div>
          <div v-for="(box, number) in dayBox" :key="number" class="eventBox">
            <div class="eventName">{{ box }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  /**臨時で設定。もっといいのあればそっちを設定 */
  height: 85vh;
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
  justify-content: center;
  border: 1px solid rgb(222, 222, 222);
}
.day-wrapper {
}
.day-name {
  margin-bottom: 2px;
}
.day-full {
  margin: 5px 0 2px 0;
}
.eventBox {
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
