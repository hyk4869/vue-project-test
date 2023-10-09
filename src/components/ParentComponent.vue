<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStoreCounter } from '../stores/test_store';
import { QBtn, QInput, QList, QItem } from 'quasar';
import { useStoreTodoList } from '@/stores/todolist_store';

const counter = useStoreCounter();

type todoListType = {
  id: number;
  inputValue: string | null;
};
const todoList = reactive<Array<todoListType>>([]);
const newTaskInput = ref<string>('');

const addTodo = () => {
  if (newTaskInput.value !== '') {
    const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
    todoList.push({
      id: newId,
      inputValue: newTaskInput.value,
    });
    newTaskInput.value = '';
  }
};

const useStoreTodo = useStoreTodoList();
</script>

<template>
  <div>
    <div style="display: flex; flex-direction: column; position: relative; left: 11rem">
      <h3>Pinia入門</h3>
      <p>Count:{{ counter.count }}</p>
      <p>DoubleCount:{{ counter.doubleCount }}</p>

      <div>
        <q-btn @click="counter.increment" color="blue">Up</q-btn>
        <q-btn @click="counter.decrement" color="blue" style="margin-left: 2rem">Down</q-btn>
      </div>
    </div>

    <div class="todoListStyle">
      <div class="todoInput">
        <h3>通常のTodoList</h3>
        <div class="inputAndBtn">
          <q-input
            v-model="newTaskInput"
            @keyup.enter="addTodo"
            placeholder="Add a new task"
            class="inputValue"
          ></q-input>
          <q-btn @click="addTodo" color="blue" class="addBtn">Add Task</q-btn>
        </div>
        <q-list>
          <q-item v-for="task in todoList" :key="task.id">
            {{ task.inputValue }}
          </q-item>
        </q-list>
      </div>

      <div class="todoInput">
        <h3>Piniaを使ったTodoList</h3>
        <div class="inputAndBtn">
          <q-input
            v-model="useStoreTodo.newTaskInput2"
            @keyup.enter="useStoreTodo.addTodo2"
            placeholder="Add a new task"
            class="inputValue"
          ></q-input>
          <q-btn @click="useStoreTodo.addTodo2" color="blue" class="addBtn">Add Task</q-btn>
        </div>
        <q-list>
          <q-item v-for="task in useStoreTodo.todoList2" :key="task.id">
            {{ task.inputValue }}
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todoListStyle {
  display: flex;
  flex-direction: row;
}
.inputAndBtn {
  display: flex;
  flex-direction: row;
}
.todoInput {
  display: flex;
  flex-direction: column;
  max-height: 1rem;
  margin-bottom: 5rem;
  position: relative;
  left: 1rem;
  top: 3rem;
  padding-left: 10rem;
}
.inputValue {
  width: 15rem;
}
.addBtn {
  position: relative;
  top: 1rem;
  left: 1rem;
  width: 9rem;
  height: 2rem;
}
</style>
