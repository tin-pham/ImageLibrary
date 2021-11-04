<template>
  <div class="about">
    <div class="about__field">
      <h1 class="about__title">Contact Me</h1>
      <Form />
    </div>
    <div class="about__field">
      <h1 class="about__title">Other Address</h1>
      <Address />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import Address from '@/components/Address.vue';
export default {
  components: { Form, Address },
};
</script>

<style lang="scss">
@use '@/assets/scss/mixins.scss' as *;
.about {
  padding: 1em;
  width: 100%;
  @include desktop {
    display: flex;
    justify-content: space-around;
  }
  &__field {
    flex: 1;
  }
  &__title {
    color: white;
  }
}
</style>
