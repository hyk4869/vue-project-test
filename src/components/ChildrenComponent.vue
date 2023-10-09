<script setup lang="ts">
import { useStoreTodoList } from '@/stores/todolist_store';
import { useStoreCounter } from '../stores/test_store';
const counter = useStoreCounter();
const useStoreTodo = useStoreTodoList();
</script>
<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
    "
  >
    <div>
      <h2 style="font-size: 1.5rem; line-height: 2rem; position: relative; bottom: 1rem">
        値を親で定義して,<br />ここでは表示のみを行っている
      </h2>
      <h3>Pinia入門</h3>
      <p>Count:{{ counter.count }}</p>
      <p>DoubleCount:{{ counter.doubleCount }}</p>
    </div>

    <div style="display: flex; flex-direction: column; position: relative; top: 5rem">
      <h3>Piniaを使ったTodoList</h3>
      <q-list>
        <q-item v-for="task in useStoreTodo.todoList2" :key="task.id">
          {{ task.inputValue }}
        </q-item>
      </q-list>
    </div>
  </div>
</template>
