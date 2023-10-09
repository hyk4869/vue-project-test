<script setup lang="ts">
import CalendarHeader from '@/components/calendar/header/CalendarHeader.vue';
import EventButton from './calendar/sidebar/EventButton.vue';
</script>
<template>
  <CalendarHeader />
  <div class="sideBar">
    <EventButton />
  </div>
</template>

<style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
}
</style>
