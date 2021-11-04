<template>
  <form class="form" action="https://formsubmit.co/asaaidesu@gmail.com" method="POST" autocomplete="off" spellcheck="false">
    <div class="form__field">
      <label for="name"><i class="fas fa-user"></i></label>
      <input id="name" type="text" placeholder="Your Name" name="name" required />
    </div>
    <div class="form__field">
      <label for="email"><i class="fas fa-envelope"></i></label>
      <input id="email" type="email" placeholder="Your Email" name="email" required />
    </div>
    <div class="form__field">
      <textarea id="content" placeholder="" name="content"></textarea>
      <label for="content"><i class="fas fa-paper-plane"></i></label>
    </div>
    <Button message="Send" modify="primary" />
  </form>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  components: { Button },
};
</script>

<style lang="scss">
.form {
  margin-inline: auto;
  max-width: 600px;
  color: white;
}
.form__field {
  padding: 0.25em;
  position: relative;
  input,
  textarea {
    width: 100%;
    display: block;
    font-family: inherit;
    font-weight: 200;
    border: 2px solid white;
    background-color: transparent;
    padding: 0.5em;
    padding-left: 2em;
    color: white;

    position: relative;
  }
  textarea {
    height: 200px;
  }
  label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  textarea + label {
    top: 2rem;
  }
}
</style>
