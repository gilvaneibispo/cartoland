<template>
  <v-window-item :value="id" class="win-item-custom">
    <v-container fluid>
      <v-row>
        <v-col cols="10" class="app-pt">
          <round-picker :rounds="lab"/>
          <history-chart/>
        </v-col>
        <v-col cols="2" class="team-average-grade app-pt">
          <span>Média</span>
          <span>65.8</span>
        </v-col>
        <v-col cols="12">
          <line-chart :data="dt" :label="lab"/>
        </v-col>
      </v-row>
    </v-container>
  </v-window-item>
</template>

<script>
import RoundPicker from "@/components/team/RoundPicker";
import LineChart from "@/components/team/LineChart";
import HistoryChart from "@/components/general/HistoryChart";

export default {
  name: "ContentBody",
  components: {HistoryChart, LineChart, RoundPicker},
  props: {
    id: Number
  },
  data: () => {
    return {
      dt: [],
      lab: []
    }
  },

  created() {

    for(let i = 0; i < 38; i++){
      this.dt.push(this.getRandom(30, 85));
      this.lab.push((i+1).toString());
    }
  },

  methods: {
    getRandom(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style scoped>
.win-item-custom {
  padding: 1rem 1.5rem;
}

.team-average-grade span:first-child{
  display: block;
  position: relative;
  text-align: center;
  font-size: 14pt;
  color: #eef;
  opacity: 0.85;
}

.team-average-grade span:last-child{
  display: block;
  position: relative;
  text-align: center;
  font-size: 5rem;
  color: rgb(127, 195, 74);
  font-weight: 400;
  line-height: 1 !important;
}
</style>