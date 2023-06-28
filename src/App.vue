<template>
  <app-header/>
  <v-container>
    <router-view class="app-render"></router-view>
  </v-container>
  <app-footer/>
</template>

<script>

import AppHeader from "@/components/header/AppHeader";
import AppFooter from "@/components/footer/AppFooter";
export default {
  name: 'App',
  components: {AppFooter, AppHeader}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
@import "@/assets/includes/css/global.css";

.app-render{
  padding-top: calc(3rem + 40px);
}
</style>
