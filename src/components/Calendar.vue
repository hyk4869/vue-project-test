<script setup lang="ts">
import CalendarHeader from '@/components/calendar/header/CalendarHeader.vue';
import EventButton from './calendar/sidebar/EventButton.vue';
import SmallCalendar from './calendar/sidebar/SmallCalendar.vue';
import MainCalendar from './calendar/mainCalendar/MainCalendar.vue';
</script>
<template>
  <div class="tekito">
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
  </div>
</template>

<style scoped>
.tekito {
}
.content {
  display: flex;
  min-width: 255px;
}
.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 1rem;
}
.mainCalendar {
  position: relative;
  flex: 1;
}
</style>
