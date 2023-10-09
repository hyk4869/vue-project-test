<script setup lang="ts">
import CalendarHeader from '@/components/calendar/header/CalendarHeader.vue';
import EventButton from './calendar/sidebar/EventButton.vue';
import SmallCalendar from './calendar/sidebar/SmallCalendar.vue';
</script>
<template>
  <CalendarHeader />
  <div class="sideBar">
    <EventButton />
    <SmallCalendar />
  </div>
</template>

<style scoped>
.sideBar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
