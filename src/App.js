// import logo from "./logo.svg";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  DoughnutController,
  ArcElement,
} from "chart.js";
// import { DoughnutChart } from "./DoughnutChart";
// import { LineChart } from "./LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  DoughnutController,
  ArcElement
);

function App() {
  return (
    <div className="App">
      {/* <LineChart />
      <DoughnutChart /> */}
    </div>
  );
}

export default App;
