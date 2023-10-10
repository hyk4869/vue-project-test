<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { ArrayDay } from '../common_content/ArrayDay';
import dayjs from 'dayjs';

const currentMonth = ref(ArrayDay());
const yearIndex = ref<number>(dayjs().year());
const monthIndex = ref<number>(dayjs().month() + 1);

watch([monthIndex], () => {
  currentMonth.value = ArrayDay(yearIndex.value, monthIndex.value);
});

onMounted(() => {
  console.log(currentMonth.value);
});
</script>

<template>
  <div class="calendar-container">
    <div class="calendar">
      <div v-for="(value, idx) in currentMonth" :key="idx" class="week">
        <div v-for="(data, index) in value" :key="index" class="inner-day">
          <div class="day-wrapper">
            <p v-if="idx === 0" class="day-name">{{ data.format('dd') }}</p>
            <p class="day-full">{{ data.format('DD') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
}
.calendar {
}
.week {
}
.inner-day {
}
.day-wrapper {
}
.day-name {
}
.day-full {
}
</style>
