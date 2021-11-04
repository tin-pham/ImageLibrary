<template>
  <ul class="address">
    <li class="address__field pixiv">
      <a href="https://www.pixiv.net/en/users/40411628" target="_blank">Pixiv </a>
    </li>
    <li class="address__field spotify">
      <a href="https://open.spotify.com/artist/5mo4kcenUfZYlaglJxkbsV?autoplay=true" target="_blank">Spotify</a>
    </li>
    <li class="address__field twitter">
      <a href="https://twitter.com/asanaren" target="_blank">Twitter</a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use '@/assets/scss/variables.scss' as *;
.address {
  position: relative;
  background: white;
  border: 1px solid white;
  max-width: 500px;
  margin-inline: auto;
  padding: 1em;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style: none;
  gap: 1em;

  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    position: relative;
    padding-left: 1em;
    left: 6rem;
  }
  li::marker {
    font-family: 'Font Awesome 5 Brands';
    position: relative;
  }
  .pixiv::marker {
    content: url('https://api.iconify.design/simple-icons/pixiv.svg?height=24');
  }
  .twitter::marker {
    content: '\f099';
  }
  .spotify::marker {
    content: '\f1bc';
  }
}
</style>
