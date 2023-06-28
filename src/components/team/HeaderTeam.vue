<template>
  <v-col cols="12" class="name-shield-team">
    <figure>
      <img src="https://s.sde.globo.com/media/organizations/2014/04/14/palmeiras_60x60.png" alt="Escudo do Palmeiras.">
    </figure>
    <span class="name-team-range" :style="{backgroundColor: bgColor}">
      Palmeiras
      <i class="bi bi-shield-fill"></i>
    </span>
  </v-col>
</template>

<script>
export default {
  name: "HeaderTeam",
  props: {
    bgColor: {
      type: String,
      default: '#000019'
    }
  }
}
</script>

<style scoped>
.name-shield-team {
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 7rem;
  padding: 0;
  margin-top: 2rem;
}

.name-shield-team figure {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  border-radius: 1.2rem;
  width: 7rem;
  height: 100%;
  background: #eef;
}

.name-shield-team figure img {
  width: 70%;
}

.name-shield-team .name-team-range {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: calc(100% - 8rem);
  height: 100%;
  border-radius: 1.2rem;
  padding:1.5rem;
  font-size: 20pt;
}

.name-shield-team .name-team-range:after{
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 30%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 8, 15, 0.3) 100%);
  border-bottom-right-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
}

.bi-shield-fill{
  display: block;
  position: absolute;
  right: 2rem;
  opacity: 0.3;
}
</style>