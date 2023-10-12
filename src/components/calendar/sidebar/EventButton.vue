<script setup lang="ts">
import { useShowEvent } from '../calendar_stores/stores';
import CaledarDialog from '../dialog/CalendarDialog.vue';

const isShow = useShowEvent();
</script>

<template>
  <div class="btn" @click="isShow.showDialog">
    <q-btn flat q-ripple class="createEvent">
      <q-icon name="mdi-plus-box" class="plusBtn" />
      New
    </q-btn>
  </div>
  <CaledarDialog />
</template>

<style scoped>
.btn {
  position: relative;
  cursor: pointer;
  /* top: 9rem; */
  /* left: 1rem; */
}
.createEvent {
  display: flex;
  flex-direction: row;
  min-width: 12rem;
  border-radius: 30px;
  background-color: rgb(255, 255, 195, 1);
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
}
.plusBtn {
  padding-right: 10px;
}
</style>
