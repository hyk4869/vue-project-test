<script setup lang="ts">
import { useStoreTodoList } from '@/stores/todolist_store';
import { useStoreCounter } from '../stores/test_store';
const counter = useStoreCounter();
const useStoreTodo = useStoreTodoList();
</script>
<template>
  <h2>子</h2>
  <h3>Pinia入門</h3>
  <p>Count:{{ counter.count }}</p>
  <p>DoubleCount:{{ counter.doubleCount }}</p>

  <br />
  <br />
  <h3>Piniaを使ったTodoList</h3>
  <q-list>
    <q-item v-for="task in useStoreTodo.todoList2" :key="task.id">
      {{ task.inputValue }}
    </q-item>
  </q-list>
</template>
