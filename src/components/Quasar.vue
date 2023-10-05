<script lang="ts">
import { defineComponent } from 'vue';
import { QBtn, QCard, QCardSection, QIcon } from 'quasar';
export default defineComponent({
  setup() {},
  components: { QBtn, QCard, QCardSection, QIcon },
});
</script>
<template>
  <q-btn color="primary" text-color="black" label="Standard" />
  <br />
  quasar
  <br />
  bbbbbbbbb

  <div>
    <q-card class="card">
      <q-card-section class="cardSection1">
        <q-icon name="warning" color="warning" size="1.5rem" />
        <h2>現在の状況</h2>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="cardSection2"><p>静岡市の現在の状況をお知らせいたします。</p></q-card-section>
      <q-separator dark inset />
      <q-card-section class="cardSection3"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p></q-card-section>

      <q-separator dark inset />
    </q-card>
  </div>
</template>

<style scoped>
.card {
  background: white;
  max-width: 450px;
  border-radius: 10px;
  transform: translateY(40px);
}
.cardSection1 {
  background: linear-gradient(to right, rgb(65, 164, 253, 1), rgb(14, 244, 255, 1));
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 120%;
  max-height: 1rem;
  padding-left: 10px;
}
.cardSection2 {
  background: #fff3c3;
}
p {
  font-size: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
