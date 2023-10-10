<script setup lang="ts">
import { useDisplayMonth } from '../calendar_stores/stores';

const presentTime = useDisplayMonth();
</script>

<template>
  <div class="header">
    <q-toolbar class="calendarHeader">
      <h1>カレンダー</h1>
      <q-btn @click="presentTime.presentMonth" label="Today" class="todayBtn"></q-btn>

      <div class="leftOrRight">
        <q-icon name="chevron_left" class="left" @click="presentTime.pastMonth" />
        <h3>{{ presentTime.yearIndex }}年{{ presentTime.monthIndex }}月</h3>
        <q-icon name="chevron_right" class="right" @click="presentTime.nextMonth" />
      </div>
    </q-toolbar>
  </div>
</template>

<style scoped>
.header {
  padding: 0;
  margin: 0;
  width: 100%;
}
h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}
.calendarHeader {
  background-color: rgb(237, 237, 237);
}
.todayBtn {
  left: 1rem;
  background-color: rgb(255, 255, 195, 1);
}
.leftOrRight {
  position: relative;
  left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
h3 {
  font-size: 1.3rem;
  display: flex;
  padding: 0 1rem;
}
.left {
  font-size: 2rem;
  cursor: pointer;
}
.right {
  font-size: 2rem;
  cursor: pointer;
}
</style>
