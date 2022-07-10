import { DoughnutChart } from "./Charts/DoughnutChart";
import { LineChart } from "./Charts/LineChart";

export function ChartComponents() {
  return (
    <div className="chartComponents">
      <LineChart />
      <DoughnutChart />
    </div>
  );
}
