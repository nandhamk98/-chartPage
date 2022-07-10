import { Line } from "react-chartjs-2";

export const LineChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Earnings",
        data: [
          0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000,
          25000, 40000,
        ],
        backgroundColor: ["#4e73df"],
        borderColor: ["#4e73df"],
        borderWidth: 5,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          // This more specific font property overrides the global property
        },
      },
    },
    title: {
      display: true,
      text: "Earnings",
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10000,
        },
      },
    },
  };

  return (
    <div className="chartComp">
      <p className="chartTitle">Earnings Overview</p>
      <Line data={data} options={options} className="lineChart" />
    </div>
  );
};
