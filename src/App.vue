<template>
  <MainNavbar />
  <router-view />
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';

export default {
  components: {
    MainNavbar
  }
};

</script>

<style>
/* Add your styles here */
</style>
