<template>
  <div class="chart-wrapper">
    <Line :data="dataChart" :options="options"/>
  </div>
</template>

<script>
import {Line} from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'

export default {
  name: 'LineChart',

  components: {
    Line
  },

  props: {
    title: {
      type: String,
      default: 'Pontos'
    },
    data: {
      type: Array,
      required: true
    },
    label: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      dataChart: {
        labels: this.label,
        datasets: [
          {
            label: this.title,
            backgroundColor: '#ea777b',
            borderColor: '#ea777b',
            hoverBorderColor: 'red',
            tension: 0.2,
            data: this.data
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          colors: {
            enabled: false
          },
          tooltip: {
            titleColor: '#eef',
            backgroundColor: 'rgba(10, 10, 15, .8)',
            bodyColor: '#eef'
          }
        }
      }
    }
  },

  beforeCreate() {
    ChartJS.defaults.font.size = 14;
    ChartJS.defaults.font.family = "'Dosis', sans-serif";
    ChartJS.defaults.font.weight = '300';
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip
    );
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 18rem;
}
</style>