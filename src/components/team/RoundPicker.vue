<template>
  <div class="d-flex justify-center align-start w-100">

    <v-btn stacked class="btn-theme-custom" @click.prevent="prevBtnAction" :disabled="isDisabled.prev">
      <i class="bi bi-chevron-double-left"></i>
    </v-btn>

    <v-combobox label="Rodada" :items="rounds" v-model="selected" @input.prevent="handleChange"></v-combobox>

    <v-btn stacked class="btn-theme-custom" @click.prevent="nextBtnAction" :disabled="isDisabled.next">
      <i class="bi bi-chevron-double-right"></i>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "RoundPicker",
  props: {
    rounds: Array
  },
  data: () => {
    return {
      //rounds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      selected: 0,
      isDisabled: {
        prev: true,
        next: false
      },
    }
  },
  watch: {
    selected: function (dt) {
      console.log(dt);
    }
  },
  methods: {

    handleChange(){
      console.log("Selecionado: ", this.selected);
      this.checkDisableBtn();
    },

    nextBtnAction() {
      if (this.selected < this.rounds.length){
        this.selected++;
        this.checkDisableBtn();
      }
    },

    prevBtnAction() {
      if (this.selected > 1) {
        this.selected--;
        this.checkDisableBtn();
      }
    },

    checkDisableBtn(){
      this.isDisabled.prev = this.selected === 1;
      this.isDisabled.next = this.selected === this.rounds.length;
    }
  }
}
</script>

<style scoped>
.btn-theme-custom {
  opacity: 0.7;
  background-color: #eef;
  border-radius: 1.2rem;
  font-size: 18pt !important;
  transition: opacity 0.3s;
}

.btn-theme-custom:hover {
  opacity: 0.9;
  transition: opacity 0.3s;
}

.btn-theme-custom:disabled{
  opacity: 0.5;
  color: #000;
}

/* Sobrescrevendo o VuetifyJS */
.v-input {
  flex: none !important;
  width: 10rem;
  height: 110px;
  margin: 0 1rem;
  max-width: calc(100% - 2rem - 160px) !important;
}
</style>