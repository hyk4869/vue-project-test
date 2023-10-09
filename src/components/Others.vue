<script setup lang="ts">
import { ref, type Ref } from 'vue';
import DialogView from '@/views/DialogView.vue';
import { QBtn } from 'quasar';
import { watch } from 'vue';

const openDialog: Ref<boolean> = ref(false);

const isOpen = () => {
  openDialog.value = !openDialog.value;
};

// watch(openDialog, () => console.log(openDialog.value));
</script>

<template>
  <div class="centered-container">
    <q-btn color="primary" label="Dialog Button" @click="isOpen" class="dialogBtn"></q-btn>
  </div>
  <DialogView :openDialog="openDialog" @update:openDialog="isOpen" />
</template>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
