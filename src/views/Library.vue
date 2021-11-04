<template>
  <section v-if="isLoaded" class="images-container">
    <div @mouseover="zoomIn" @mouseout="zoomOut" class="card" v-for="image of images" :key="image.id">
      <img :src="image.fullImage" :alt="image.name" />
    </div>
  </section>
  <p v-else class="loading">Loading....</p>
</template>

<script>
import getImages from '@/composables/getImages.js';
import { ref } from 'vue';
export default {
  setup() {
    const data = getImages();
    const images = ref([]);
    const isLoaded = ref(false);
    const cardInfo = ref(null);

    data.then((image) => {
      images.value = image;
      isLoaded.value = true;
    });

    function zoomIn(e) {
      e.currentTarget.classList.add('zoomIn');
    }
    function zoomOut(e) {
      e.currentTarget.classList.remove('zoomIn');
    }

    return { images, isLoaded, cardInfo, zoomIn, zoomOut };
  },
};
</script>

<style lang="scss">
.images-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
  padding-inline: 3em;
}
.card {
  border: 1px solid white;
  position: relative;
  overflow: hidden;
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

.loading {
  color: white;
}
</style>
