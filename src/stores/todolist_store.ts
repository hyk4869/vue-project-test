import { defineStore } from 'pinia';
import { computed, reactive, ref, type Ref } from 'vue';

export const useStoreTodoList = defineStore('todoList', () => {
  type todoListType2 = {
    id: number;
    inputValue: string | null;
  };
  const todoList2 = reactive<Array<todoListType2>>([]);
  const newTaskInput2: Ref<string> = ref('');

  const addTodo2 = () => {
    if (newTaskInput2.value !== '') {
      const newId = todoList2.length > 0 ? todoList2[todoList2.length - 1].id + 1 : 1;
      todoList2.push({
        id: newId,
        inputValue: newTaskInput2.value,
      });
      newTaskInput2.value = '';
    }
  };

  return { todoList2, newTaskInput2, addTodo2 };
});
