import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
//
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
//
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/ja';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const vuetify = createVuetify();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
app.use(Quasar, { plugins: {}, lang: quasarLang });
