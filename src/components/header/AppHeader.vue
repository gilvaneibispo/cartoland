<template>
  <header>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-space-between pa-0">
          <header-logo-area/>
          <header-link-group/>
        </v-col>
      </v-row>
    </v-container>

  </header>
</template>

<script>
import HeaderLogoArea from "@/components/header/HeaderLogoArea";
import HeaderLinkGroup from "@/components/header/HeaderLinkGroup";

export default {
  name: "AppHeader",
  components: {HeaderLogoArea, HeaderLinkGroup}
}

</script>

<style scoped>
header {
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: var(--bg-secondary);
  z-index: 100;

  color: #fab96b;
  color: #f19474;
  color: #ea777b;
  color: #94919a;
  color: #69a2a8;
}
</style>