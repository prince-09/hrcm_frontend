import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
import AnalyticsCard from "../layout";

const DenialsCard = ({ data }) => {
  const denialChartData = {
    labels: Object.keys(data.denialReasons || {}),
    datasets: [{
      label: "Denial Reasons Count",
      data: Object.values(data.denialReasons || {}),
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    }],
  };

  return (
    <AnalyticsCard title="Denials Dashboard">
      <div className="chart-container">
        <Bar data={denialChartData} />
      </div>
      <div className="card-footer">
        <span>Denial Rate: {data.denialRate}%</span>
      </div>
    </AnalyticsCard>
  );
};

export default DenialsCard;
