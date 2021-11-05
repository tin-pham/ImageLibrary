<template>
  <div @click.self="closeModal" class="library-modal">
    <Frame :image="imageShowing" />
  </div>
</template>

<script>
import Frame from '@/components/Frame.vue';
export default {
  components: { Frame },
  props: ['imageShowing'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;
.library-modal {
  @include desktop {
    position: absolute;
    inset: 0;
    background-color: #e5e5e5;

    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade-in 250ms ease-out forwards;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
