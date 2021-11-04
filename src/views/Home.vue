<template>
  <div class="home">
    <TextBox class="home__text">
      <Button modify="primary" message="Visit my Library" redirect="Library" />
      <Button modify="secondary" message="Contact me" redirect="About" />
    </TextBox>

    <picture class="home__image">
      <source srcset="@/assets/images/gura/gura-1901x2850.webp" type="image/png" media="all and (min-width: 1366px)" />
      <source srcset="@/assets/images/gura/gura-1267x1900.webp" type="image/png" media="all and (min-width: 600px)" />
      <img srcset="@/assets/images/gura/gura-667x1000.webp" alt="gura image" />
    </picture>
  </div>
</template>

<script>
import TextBox from '@/components/TextBox.vue';
import Button from '@/components/Button.vue';
export default {
  name: 'Home',
  components: { TextBox, Button },
};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;

.home {
  position: relative;
  height: 90vh;
  flex-direction: column;
  overflow: hidden;
  padding: 1em;
  @include tablet {
    flex-direction: row;
  }
}
.home__text {
  max-width: 550px;
  margin-left: auto;

  @include tablet--landscape {
    margin-right: 0;
    margin-left: auto;
  }
  @include desktop {
    max-width: 700px;
  }
}
.home__image {
  order: -1;
  z-index: 0;
  position: relative;
  top: -5rem;

  @include tablet {
    position: absolute;

    top: -18rem;
    left: -14rem;
    transform: scale(0.7);
  }

  @include desktop {
    top: -20rem;
    left: -6rem;
    transform: scale(1);
  }
  img {
    object-fit: contain;
  }
}

.home__background {
  text-align: center;
  /*background: url('~@/assets/images/gura/gura-1267x1900.webp') -5rem -4rem / 200% no-repeat;*/
  /*@include tablet {*/
  /*background: url('~@/assets/images/gura/gura-1901x2850.webp') -7rem -9rem / 200% no-repeat;*/
  /*}*/
  /*@include tablet--landscape {*/
  /*background-position: -12rem -25rem;*/
  /*background-size: 150%;*/
  /*}*/
  /*@include desktop {*/
  /*background: url('~@/assets/images/gura/gura-1901x2850.webp') center -20rem / cover no-repeat;*/
  /*}*/
}
</style>
