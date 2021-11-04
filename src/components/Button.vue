<template>
  <button @click="redirectTo" class="button" :class="modify ? 'button--' + modify : ''">{{ message }}</button>
</template>

<script>
export default {
  props: ['message', 'modify', 'redirect'],
  methods: {
    redirectTo() {
      if (this.redirect == 'Library') {
        this.toLibrary();
        return;
      }
      if (this.redirect == 'About') {
        this.toAbout();
        return;
      }
    },
    toLibrary() {
      this.$router.push({ name: 'Library' });
    },
    toAbout() {
      this.$router.push({ name: 'About' });
    },
  },
};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/variables.scss' as *;
.button {
  font-family: inherit;
  padding: 0.25em 0.5em;
  cursor: pointer;
  z-index: 1;
}

.button--primary {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;

  @include desktop {
    position: relative;
    overflow: hidden;
    &:hover {
      color: black;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: white;
      border-radius: 50%;
      top: 0;
      left: 0;
      z-index: -1;

      transform: scale(0);
      transition: all 0.2s ease-out;
    }

    &:hover::before {
      transform: scale(1.4);
    }
  }
}

.button--secondary {
  background: white;
  color: black;
  text-transform: uppercase;
  border: none;
  @include desktop {
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-out;
    &:hover {
      border: 1px solid white;
      color: white;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: hsl($blue-800);
      border-radius: 50%;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%) scale(0);
      z-index: -1;
      transition: all 0.2s ease-out;
    }

    &:hover::before {
      transform: translate(-50%, -50%) scale(3);
    }
  }
}
</style>
