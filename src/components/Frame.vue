<template>
  <div @click="toggleZoom" class="frame">
    <p v-if="!isLoaded">Loading</p>
    <img @load="onImgLoad" :src="image.fullImage" alt="Image" />
  </div>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    toggleZoom(e) {
      e.currentTarget.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
      e.currentTarget.classList.toggle('zoomIn');
    },
    onImgLoad() {
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;
.frame {
  img {
    display: none;
  }
  @include desktop {
    max-width: 400px;
    cursor: zoom-in;
    display: block;

    will-change: transform;
    transform: scale(1);
    transition: all 300ms ease-out;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.frame.zoomIn {
  cursor: zoom-out;
  transform: scale(3);
}
</style>
