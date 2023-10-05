<script setup lang="ts">
import { ref, type Ref } from 'vue';
import DialogView from '@/views/DialogView.vue';
import { QBtn } from 'quasar';
import { watch } from 'vue';

const openDialog: Ref<boolean> = ref(false);

const isOpen = () => {
  openDialog.value = !openDialog.value;
};

watch(openDialog, () => console.log(openDialog.value));
</script>

<template>
  <q-btn color="primary" label="Dialog Button" @click="isOpen"></q-btn>
  <DialogView :openDialog="openDialog" @update:openDialog="isOpen" />
</template>
