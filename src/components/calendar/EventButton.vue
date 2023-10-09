<script setup lang="ts">
import { watch } from 'vue';
import { useShowEvent } from './calendar_stores/stores';
import CaledarDialog from './CalendarDialog.vue';

const isShow = useShowEvent();
// watch(isShow, () => console.log(isShow.isShowEvent));
</script>

<template>
  <div class="btn">
    <q-btn class="createEvent" @click="isShow.showDialog">
      <q-icon name="mdi-plus-box" class="plusBtn" />
      New
    </q-btn>
  </div>
  <CaledarDialog />
</template>

<style scoped>
.btn {
  position: absolute;
}
.createEvent {
  position: relative;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: row;
  max-width: 10rem;
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
