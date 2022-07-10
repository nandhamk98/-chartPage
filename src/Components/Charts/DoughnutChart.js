import { Doughnut } from "react-chartjs-2";

export const DoughnutChart = () => {
  const labels = ["Social", "Referrel", "Direct"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [15, 30, 55],
        backgroundColor: ["#36b9cc", "#1cc88a", "#4e73df"],
        borderColor: ["#36b9cc", "#1cc88a", "#4e73df"],
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: 200,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    title: {
      display: true,
      text: "Earnings",
    },
  };

  return (
    <div className="chartComp">
      <p className="chartTitle">Revenue Sources</p>
      <Doughnut data={data} options={options} className="doughnutChart" />
    </div>
  );
};
