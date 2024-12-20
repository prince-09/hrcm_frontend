const AnalyticsCard = ({ title, children, footer }) => (
  <div className="card">
    <div className="card-header">{title}</div>
    <div className="card-content">
      {children}
    </div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

export default AnalyticsCard;
