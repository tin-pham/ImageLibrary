<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/library">Library</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/variables.scss' as *;

#nav {
  padding: 30px;
  visibility: hidden;
  @include tablet {
    visibility: visible;
  }

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding-inline: 1em;
    opacity: 0.9;

    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: 2px;
      left: 50%;
      right: 50%;
      background-color: hsl($yellow);
      transition: all 200ms ease-out;
    }

    &:hover::before {
      left: 10%;
      right: 10%;
    }

    &.router-link-exact-active::before {
      left: 10%;
      right: 10%;
    }
  }
}
</style>
