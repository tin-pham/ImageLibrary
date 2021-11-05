<template>
  <section v-if="isLoaded" class="library">
    <Card @click="viewImage(image)" v-for="image of images.slice().reverse()" :key="image.id" :image="image" />
  </section>
  <p v-else class="loading">Loading....</p>
  <Modal @close="closeModal" v-if="showModal" :showModal="showModal" :imageShowing="imageShowing" />
</template>

<script>
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
import getImages from '@/composables/getImages.js';
import { ref } from 'vue';
export default {
  components: { Card, Modal },
  setup() {
    const data = getImages();
    const images = ref([]);
    const isLoaded = ref(false);
    const cardInfo = ref(null);
    const modal = ref(null);

    const showModal = ref(false);
    const imageShowing = ref(null);

    data.then((image) => {
      images.value = image;
      isLoaded.value = true;
    });
    function viewImage(image) {
      showModal.value = true;
      imageShowing.value = image;
    }
    function closeModal() {
      showModal.value = false;
    }

    return { images, isLoaded, cardInfo, showModal, viewImage, imageShowing, closeModal, modal };
  },
};
</script>

<style lang="scss">
.library {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 500px;
  gap: 1em;

  padding-inline: 3em;
}
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

.loading {
  color: white;
}
</style>
