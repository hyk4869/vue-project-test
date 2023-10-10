<script setup lang="ts">
import { ref, watch } from 'vue';
import { ArrayDay } from '../common_content/ArrayDay';
import dayjs from 'dayjs';

const currentMonth = ref(ArrayDay());
const yearIndex = ref<number>(dayjs().year());
const monthIndex = ref<number>(dayjs().month() + 1);

watch([monthIndex], () => {
  currentMonth.value = ArrayDay(yearIndex.value, monthIndex.value);
});
</script>

<template>
  <div class="borderContent">
    <div class="MainCalendar">
      <div v-for="(value, idx) in currentMonth[0]" :key="idx" class="divDayOfWeek">
        <span class="dayOfWeek">
          {{ value.format('dd').charAt(0) }}
        </span>
      </div>
      <div class="grid-container">
        <div v-for="(value, idx) in currentMonth" :key="idx" class="grid-row">
          <div v-for="(day, index) in value" :key="index" class="grid-item">
            <button class="day">
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
.borderContent {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
.MainCalendar {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
}
.divDayOfWeek {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #ccc;
  height: 1.5rem;
}
.dayOfWeek {
  width: 11vw;
  text-align: center;
}
.grid-container {
  position: relative;
  display: grid;
}

.grid-row {
  display: flex;
  flex-direction: row;
}
.grid-row > * {
  flex: 1;
}
</style>
