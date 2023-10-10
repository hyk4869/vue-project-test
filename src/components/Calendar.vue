<script setup lang="ts">
import CalendarHeader from '@/components/calendar/header/CalendarHeader.vue';
import EventButton from './calendar/sidebar/EventButton.vue';
import SmallCalendar from './calendar/sidebar/SmallCalendar.vue';
import MainCalendar from './calendar/mainCalendar/MainCalendar.vue';
</script>
<template>
  <CalendarHeader />
  <div class="content">
    <div class="sideBar">
      <EventButton />
      <SmallCalendar />
    </div>
    <div class="mainCalendar">
      <MainCalendar />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  min-width: 255px;
  height: 100vh;
}
.sideBar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mainCalendar {
  position: relative;
  left: 2rem;
  width: calc(100% - 2rem);
}
</style>
