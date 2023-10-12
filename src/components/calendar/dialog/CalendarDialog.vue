<script setup lang="ts">
import { ref } from 'vue';
import { useDisplayTime, useShowEvent } from '../calendar_stores/stores';
import ja from 'dayjs/locale/ja';
import { v4 as uuidv4 } from 'uuid';
import { watch } from 'vue';

const isShow = useShowEvent();
const showTime = useDisplayTime();
const selectedDay = useDisplayTime();

const editNewTask = ref<string>('');
const editExplanation = ref<string>('');

const addNewTask = () => {
  if (editNewTask.value !== '') {
    const Id = uuidv4();
    isShow.contentArray.push({
      title: editNewTask.value,
      explanation: editExplanation.value,
      id: Id,
      contentLength: isShow.contentArray.length + 1,
      day: selectedDay.time.format('YYYY-MM-DD'),
    });
    isShow.showDialog();
    editNewTask.value = '';
    editExplanation.value = '';
  } else {
    window.alert('タイトルは必須です');
  }
};

watch(isShow.contentArray, () => {
  console.log(isShow.contentArray);
});
</script>

<template>
  <q-dialog :model-value="isShow.isShowEvent" @update:model-value="isShow.showDialog">
    <q-card class="card1">
      <q-toolbar class="calendarHeader">
        <q-icon name="close" class="closeBtn" @click="isShow.showDialog" />
      </q-toolbar>

      <div class="insideContent">
        <q-card-section class="titleSession">
          <q-icon name="mdi-pencil" class="pencil" />
          <q-input v-model="editNewTask" placeholder="タイトルを追加" class="inputTilte" />
        </q-card-section>

        <q-card-section class="timeSession">
          <q-icon name="mdi-clock-time-five-outline" class="time" />
          <h5>{{ showTime.time.locale(ja).format('YYYY年 MM月 DD日 dddd') }}</h5>
        </q-card-section>

        <q-card-section class="explanationSession">
          <q-icon name="mdi-menu" class="explanation" />
          <q-input v-model="editExplanation" filled type="textarea" class="explanationArea" />
        </q-card-section>

        <q-card-actions class="delete">
          <q-icon name="mdi-delete" class="deleteIcon" />
        </q-card-actions>

        <q-card-actions class="dialogBtn1">
          <q-btn label="保存" color="primary" @click="addNewTask" class="dialogBtn" />
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.calendarHeader {
  background-color: rgb(225, 224, 224);
}
.closeBtn {
  position: absolute;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}
.card1 {
  width: 30rem;
  min-height: 30rem;
  position: relative;
  background-color: rgb(237, 237, 237);
}
.insideContent {
  padding-left: 1rem;
}
.titleSession {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.pencil {
  font-size: 1.5rem;
}
.inputTilte {
  min-width: 25rem;
  padding-left: 1rem;
}
.timeSession {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.time {
  font-size: 1.5rem;
  padding-right: 1rem;
}
.explanationSession {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.explanation {
  font-size: 1.5rem;
}
.explanationArea {
  min-width: 25rem;
  padding-left: 1rem;
}
.delete {
  position: absolute;
  bottom: 1rem;
  right: 11rem;
}
.deleteIcon {
  font-size: 2.3rem;
  cursor: pointer;
}
.dialogBtn1 {
  position: absolute;
  bottom: 1rem;
  right: 1.2rem;
}
.dialogBtn {
  width: 6rem;
}
</style>
