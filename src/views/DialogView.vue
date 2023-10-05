<script setup lang="ts">
import { QDialog, QCard, QCardSection } from 'quasar';
import { ref, type PropType } from 'vue';

const props = defineProps({
  openDialog: Boolean as PropType<boolean>,
});

//propsがいらない。 単一のものしか受け取れない。
// const { openDialog } = defineProps(['openDialog']);

const emit = defineEmits();

const dialogVisible = ref(props.openDialog);

const closeDialog = () => {
  dialogVisible.value = false;
  emit('update:openDialog', false);
};

// :persistent="true"
// persistentプロパティを設定することで、
// 外部をクリックしたときにダイアログが閉じないようにすることができます。
</script>

<template>
  <q-dialog :model-value="props.openDialog" @update:model-value="closeDialog">
    <q-card class="card1">
      <q-card-section> <h3>Card Example</h3> </q-card-section>
      <q-card-section> <p>Click/Tap on the backdrop</p> </q-card-section>
      <q-card-actions>
        <q-btn label="OK" color="primary" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.card1 {
  width: 30rem;
  height: 20rem;
}
</style>
