export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["24h ago", "Now"];

export const data = {
  labels,
  datasets: [
    {
      label: "Cost in $",
      data: labels.map(() => Math.random(-1000, 1000) * 1000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointRadius: 10,
      pointHoverRadius: 15,
    }
  ],
};