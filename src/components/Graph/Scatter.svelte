<script>
  import Line from "svelte-chartjs/src/Line.svelte";
  export let data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Monthly Vists",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(98,  182, 239, 1)",
        borderColor: "rgba(98,  182, 239,0.4)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80],
      },
    ],
  };
</script>

<Line
  {data}
  width={500}
  height={250}
  options={{ responsive: true, maintainAspectRatio: false }}
/>
