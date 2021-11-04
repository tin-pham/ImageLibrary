<template>
  <div class="text-box">
    <h1 class="text-box__title">I'm <span>asa-ai</span></h1>
    <p>An artist</p>
    <div class="text-box__other">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/animations.scss' as *;

.text-box {
  color: white;
  /* push textBox to top */
  /*@include tablet {*/
  /*text-align: right;*/
  /*margin-right: 2rem;*/
  /*}*/
  /*@include desktop {*/
  /*position: absolute;*/
  /*bottom: 5rem;*/
  /*right: 2rem;*/
  /*}*/
  @include tablet {
    text-align: right;
  }
  @include desktop {
    text-align: right;
  }
  p {
    /*text-align: right;*/
    margin-right: 1.5rem;
  }
}

.text-box__title {
  font-weight: $bolder;
  font-size: calc(2rem + 1vw);
  @include desktop {
    text-align: left;
  }

  span {
    display: block;
    text-transform: uppercase;
    color: transparent;
    font-size: calc(3rem + 5vw);
    -webkit-text-stroke: 1px white;
    background: url('~@/assets/images/others/back.png');
    -webkit-background-clip: text;
    background-position: 0 0;
    animation: slide 20s linear infinite;
  }
}

.text-box__other {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  @include tablet {
    justify-content: flex-end;
  }
  @include desktop {
    justify-content: center;
  }
}
</style>
