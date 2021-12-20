
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    price: { type: Number, default: 0 },
  },
  data() {
    return {
      chartdata: {
        labels: ["January", "February"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  watch: {
    chartData() {
      console.log("t", this.price);
      chartdata.datasets.data.push(this.price);
    },
  },
};
</script>

<style>
</style>