<script setup lang="ts">
import { useSelectTime, useAddNewEvent } from '../calendar_stores/stores';
import ja from 'dayjs/locale/ja';

const isShow = useAddNewEvent();
const selectTime = useSelectTime();
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
          <q-input v-model="isShow.editNewTask" placeholder="タイトルを追加" class="inputTilte" />
        </q-card-section>

        <q-card-section class="timeSession">
          <q-icon name="mdi-clock-time-five-outline" class="time" />
          <h5>{{ selectTime.selectTime.locale(ja).format('YYYY年 MM月 DD日 dddd') }}</h5>
        </q-card-section>

        <q-card-section class="explanationSession">
          <q-icon name="mdi-menu" class="explanation" />
          <q-input v-model="isShow.editExplanation" filled type="textarea" class="explanationArea" />
        </q-card-section>

        <q-card-actions class="color">
          <q-icon name="bookmark" class="bookmarkIcon" />
          <div v-for="(value, idx) in isShow.colorList" class="colorMap">
            <div :style="{ backgroundColor: value }" class="pickColor" @click="isShow.setColor(value)">
              <q-icon name="mdi-check" v-if="isShow.colorPick === value" class="checkedColor"></q-icon>
            </div>
          </div>
        </q-card-actions>

        <q-card-actions class="delete">
          <q-icon name="mdi-delete" class="deleteIcon" @click="isShow.deleteObj" />
        </q-card-actions>

        <q-card-actions class="dialogBtn1">
          <q-btn label="保存" color="primary" @click="isShow.saveTask" class="dialogBtn" />
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
  min-height: 33rem;
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
.color {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bookmarkIcon {
  font-size: 2.3rem;
  cursor: pointer;
}
.colorMap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.pickColor {
  border-radius: 9999px;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin-left: 2rem;
}
.checkedColor {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  opacity: 0.6;
  width: 2rem;
  height: 2rem;
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
