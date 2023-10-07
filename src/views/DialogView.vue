<script setup lang="ts">
import { QDialog, QCard, QCardSection } from 'quasar';
import { ref, type PropType } from 'vue';

//propsがいらない。 単一のものしか受け取れない。
// const { openDialog } = defineProps(['openDialog']);

const props = defineProps({
  openDialog: Boolean as PropType<boolean>,
});

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
        <div class="dialogBtn1">
          <q-btn label="OK" color="primary" @click="closeDialog" class="dialogBtn" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.card1 {
  width: 30rem;
  height: 20rem;
  position: relative;
  background: linear-gradient(to right, rgb(255, 255, 255), pink);
}
.dialogBtn1 {
  position: absolute;
  bottom: 1.2rem;
  right: 1.5rem;
}
.dialogBtn {
}
</style>
