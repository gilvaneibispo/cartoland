<template>
  <div class="header-link-group">
    <router-link class="header-link" to="/">Home</router-link>
    <router-link class="header-link" to="/times">Times</router-link>
    <router-link class="header-link" to="/jogadores">Jogadores</router-link>
    <router-link class="header-link" to="/sobre">Sobre</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderLinkGroup"
}
</script>

<style scoped>

.header-link-group{
  display: inline-flex;
  justify-content: flex-end;
}

.header-link-group .header-link{
  display: inline-flex;
  position: relative;
  background: #eed;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  /*background: linear-gradient(90deg, #94919a 0%, #69a2a8 100%);*/
  background: linear-gradient(90deg, #fab96b 0%, #f19474 0%, #ea777b 47.54%);
  border-radius: 14px;
  color: #fff;
  padding: 10px 28px;
  font-size: 16px;
  font-weight: 500;
  height: auto;
  align-items: center;
}
</style>