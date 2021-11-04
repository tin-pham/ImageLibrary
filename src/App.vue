<template>
  <main class="container">
    <Nav />
    <router-view />
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: { Nav },
};
</script>

<style lang="scss">
@use '@/assets/scss/variables.scss' as *;
$appBackgroundColor: hsl($blue-800);
#app {
  font-family: $ff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  position: relative;
  background-color: $appBackgroundColor;
  overflow: hidden;
  min-height: 100vh;
}
</style>
