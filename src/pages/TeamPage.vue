<template>
  <v-row>
    <header-team bg-color="#145037"/>

    <v-card class="w-100 mt-5 tab-theme-custom v-theme--dark">

      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="end">
        <v-tab :value="1">Todos</v-tab>
        <v-tab :value="2">Mandante</v-tab>
        <v-tab :value="3">Visitante</v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <content-body :id="1"/>
        <content-body :id="2"/>
        <content-body :id="3"/>
      </v-window>
    </v-card>
  </v-row>
</template>

<script>
import HeaderTeam from "@/components/team/HeaderTeam";
import ContentBody from "@/components/team/ContentBody";

export default {
  name: "TeamPage",
  components: {ContentBody, HeaderTeam},
  data: () => ({
    tab: null,
  }),
}
</script>

<style scoped>
.tab-theme-custom{
  background-color: rgba(220, 220, 240, 0.1);
  border-radius: 1.2rem;
}
</style>