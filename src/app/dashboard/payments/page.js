import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
import AnalyticsCard from "../layout";

const PaymentsCard = ({ data }) => {
  const paymentChartData = {
    labels: Object.keys(data.payerPayments || {}),
    datasets: [{
      label: "Payments by Payer",
      data: Object.values(data.payerPayments || {}),
      backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#57FF33", "#FF33A8"],
    }],
  };

  return (
    <AnalyticsCard title="Payments Dashboard">
      <div className="chart-container">
        <Pie data={paymentChartData} />
      </div>
      <div className="card-footer">
        <span>Payment Collection Ratio: {data.paymentCollectionRatio}%</span>
      </div>
    </AnalyticsCard>
  );
};

export default PaymentsCard;
