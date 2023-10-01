<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  VApp,
  VAppBar,
  VToolbarTitle,
  VNavigationDrawer,
  VAppBarNavIcon,
  VSpacer,
  VToolbarItems,
  VBtn,
} from 'vuetify/components';

export default defineComponent({
  setup() {
    const isShowMenu = ref(false);
    const isShow = () => {
      isShowMenu.value = !isShowMenu.value;
    };
    return {
      isShowMenu,
      isShow,
    };
  },
  components: {
    VApp,
    VAppBar,
    VToolbarTitle,
    VNavigationDrawer,
    VAppBarNavIcon,
    VSpacer,
    VToolbarItems,
    VBtn,
  },
});
</script>

<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="isShowMenu">Navigation Lists</v-navigation-drawer>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="isShow"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>Button</v-btn>
        <v-btn>Button</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

// https://reffect.co.jp/vue/vuetify-for-beginner/
