import { defineStore } from 'pinia';
import { computed, reactive, ref, type Ref } from 'vue';

// export const useStoreCounter = defineStore('counter', {
//   state: () => ({
//     count: 1,
//     count2: 2,
//     user: {
//       name: 'John Doe',
//     },
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
// });

// Pinia では defineStore のプロパティ actions に関数を追加して Store に定義したデータの更新を行います。
// Store で定義したデータに対して Computed プロパティの設定を行いたい時に利用することができます。

/**
 *
 * 以下のように記述することも可能
 *
 */
export const useStoreCounter = defineStore('counter', () => {
  const count = ref(1);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const doubleCount = computed(() => count.value * 2);

  return { count, increment, decrement, doubleCount };
});
