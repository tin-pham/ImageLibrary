<template>
  <div @mouseover="zoomIn" @mouseout="zoomOut" @click="redirect" class="card">
    <img :src="image.smallImage" :alt="image.name" />
  </div>
</template>

<script>
export default {
  props: ['image'],
  methods: {
    zoomIn(e) {
      e.currentTarget.classList.add('zoomIn');
    },
    zoomOut(e) {
      e.currentTarget.classList.remove('zoomIn');
    },
  },
};
</script>

<style lang="scss">
/*function zoomIn(e) {*/
/*e.currentTarget.classList.add('zoomIn');*/
/*}*/
/*function zoomOut(e) {*/
/*e.currentTarget.classList.remove('zoomIn');*/
/*}*/
.card {
  border: 1px solid white;
  position: relative;
  overflow: hidden;
  &__link {
    position: absolute;
    inset: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: all 0.5s ease-out;
  }
}

.card.zoomIn {
  img {
    transform: scale(1.05);
  }
}
</style>
