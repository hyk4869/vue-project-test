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
  VContainer,
  VListItem,
  VListItemTitle,
} from 'vuetify/components';
import { RouterLink } from 'vue-router';

export default defineComponent({
  setup() {
    const isShowMenu = ref(false);
    const isShow = () => {
      isShowMenu.value = !isShowMenu.value;
    };
    const closeDrawerOnClickOutside = () => {
      isShowMenu.value = false;
    };
    const nav_lists = [
      { name: 'Home', route: '/' },
      { name: 'Calendar', route: '/calendar' },
      { name: 'Quasar', route: '/quasar' },
      { name: 'Others', route: '/others' },
      { name: 'Parant', route: '/parant' },
      { name: 'Children', route: '/children' },
    ];
    return {
      isShowMenu,
      isShow,
      nav_lists,
      closeDrawerOnClickOutside,
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
    VContainer,
    VListItem,
    VListItemTitle,
    RouterLink,
  },
});
</script>

<template>
  <v-app :class="{ 'menu-open': isShowMenu }" class="headerMain">
    <v-navigation-drawer app clipped v-model="isShowMenu" @click="closeDrawerOnClickOutside">
      <v-container>
        <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
          <RouterLink :to="nav_list.route">
            <v-list-item-title class="title grey--text text--darken-2">{{ nav_list.name }}</v-list-item-title>
          </RouterLink>
        </v-list-item>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="isShow" clipped-left></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>Button</v-btn>
        <v-btn>Button</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

<style scoped>
.headerMain {
  max-height: 70px;
  transition: margin-left 0.3s;
}
</style>
