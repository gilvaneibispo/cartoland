<template>
  <v-row>

    <v-col cols="12">
      Player Soccer
    </v-col>
    <v-col cols="6" class="d-flex justify-center">
      <v-btn prepend-icon="$vuetify" stacked variant="tonal" style="margin: 2rem auto">
        Button
      </v-btn>
      <br/>
    </v-col>
    <v-col cols="6" class="d-flex justify-center align-center">
      <v-combobox style="width: 10rem; margin: 2rem auto"
                  label="Combobox"
                  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      ></v-combobox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PlayerSoccer"
}
</script>

<style scoped>

</style>