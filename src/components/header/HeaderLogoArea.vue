<template>
  <div class="header-logo">
    <figure>
      <img src="https://picsum.photos/id/237/64/64" alt="Logo do site Cartoland">
    </figure>
    <span>Cartoland</span>
  </div>
</template>

<script>
export default {
  name: "HeaderLogoArea"
}
</script>

<style scoped>

.header-logo {
  display: inline-flex;
  align-items: center;
  font-family: 'Belanosima', sans-serif;
}

.header-logo figure img,
.header-logo figure {
  display: inline-block;
  width: 45px;
}

.header-logo span {
  font-size: 22pt;
  margin-left: 10px;
  line-height: 1;
  font-weight: bold;
  color: #39E198;
  background: linear-gradient(90deg, #fab96b 0%, #f19474 0%, #ea777b 47.54%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>