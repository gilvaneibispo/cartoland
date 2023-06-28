<template>
  <div class="w-100 d-flex justify-center">

  <span class="item-cell" v-for="m in mock" :key="m.id"
        :aria-label="m.result"
        :style="{background: m.bgColor}"></span>

  </div>
</template>

<script>
export default {
  name: "HistoryChart",
  data: () => {
    return {
      mock: []
    }
  },
  created() {
    this.buildMock();
  },
  methods: {

    buildMock() {

      for (let i = 0; i < 10; i++) {

        let m = this.getPlay();

        this.mock.push({
          id: i,
          result: m.result,
          bgColor: m.bgColor
        });
      }
    },

    getPlay() {
      const teams = [
        'Vasco',
        'Corinthians',
        'Coritiba',
        'Santos',
        'Bahia',
        'Fortaleza',
        'Grêmio',
        'Atlhetico PR',
        'Atletico MG',
        'América MG',
        'Cruzeiro',
        'Internacional',
        'São Paulo'
      ];

      const adversary = this.getRandom(1, 12);
      const goals = this.getRandom(0, 4);
      const diffGoals = this.getRandom(1, 3);
      const rst = this.getRandom(1, 3);


      let adGoals = 0;
      let bgColor = '#fff';

      if (rst <= 1) {
        // derrota

        adGoals = goals + diffGoals;
        bgColor = `rgb(255, 105, 97)`;
      } else if (rst <= 2) {
        // empate

        adGoals = goals;
        bgColor = `rgb(215, 222, 233)`;

      } else {
        // vitoria

        adGoals = goals - diffGoals;
        bgColor = `rgb(127, 195, 74)`;

        if (adGoals < 0)
          adGoals = 0;
      }

      const result = this.buildStringResult('Palmeiras', teams[adversary+1], goals, adGoals);
      return {result, bgColor}
    },

    buildStringResult(teamA, teamB, gA, gB) {
      const inHome = this.getRandom(0, 1);

      teamB = teamB ?? 'Bahia';

      if (inHome) {
        return `${teamA} ${gA} x ${gB} ${teamB}`;
      } else {
        return `${teamB} ${gB} x ${gA} ${teamA}`;
      }
    },

    getRandom(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style scoped>
.item-cell {
  display: inline-block;
  width: 25px;
  height: 25px;
  opacity: 0.7;
  transition: opacity .3s;
}

.item-cell:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: opacity .3s;
  border: 2px solid #eef;
}

.item-cell:first-child {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.item-cell:last-child {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}


.item-cell[aria-label] {
  position: relative;
}

.item-cell[aria-label]::after {
  content: attr(aria-label);
  display: none;
  position: absolute;
  top: 30px;
  left: -5rem;
  z-index: 9999999;
  pointer-events: none;
  padding: 10px 1.2rem;
  text-decoration: none;
  font-size: 12pt;
  color: #fff;
  background-color: rgba(10, 10, 18, 0.7);
  width: 12rem;
  font-weight: 300;
  border-radius: 1rem;
  opacity: 0.85;
}

.item-cell[aria-label]:hover::after {
  display: inline-block;
}
</style>