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
import { NavBar } from "./Components/Search";
import { ChickletComponents } from "./Components/ChickletComponents";
import { ChartComponents } from "./Components/ChartComponents";

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
      <NavBar />
      <ChickletComponents />
      <ChartComponents />
    </div>
  );
}

export default App;
