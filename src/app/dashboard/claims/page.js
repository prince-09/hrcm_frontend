import AnalyticsCard from "../layout";

const ClaimsOverviewCard = ({ data }) => (
  <AnalyticsCard title="Claims Overview">
    <div className="card-stat">
      <span>Total Claims</span>
      <span>{data.totalClaims}</span>
    </div>
    <div className="card-stat">
      <span>Paid Claims</span>
      <span>{data.paidClaims}</span>
    </div>
    <div className="card-stat">
      <span>Denied Claims</span>
      <span>{data.deniedClaims}</span>
    </div>
    <div className="card-footer">
      <span>Average Days in AR: {data.averageDaysInAR}</span>
    </div>
  </AnalyticsCard>
);

export default ClaimsOverviewCard;
