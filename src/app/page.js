"use client"
import { useState, useEffect } from "react";
import ClaimsOverviewCard from "./dashboard/claims/page";
import DenialsCard from "./dashboard/denials/page";
import PaymentsCard from "./dashboard/payments/page";
import { fetchClaims, fetchDenials, fetchPayments } from "../lib/api"

const IndexPage = () => {
  const [analyticsData, setAnalyticsData] = useState({});
  const [denialsData, setDenialsData] = useState({});
  const [paymentsData, setPaymentsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const [claims, denials, payments] = await Promise.all([
        fetchClaims(),
        fetchDenials(),
        fetchPayments()
      ]);
      console.log("Cla", claims)
      setAnalyticsData(claims);
      setDenialsData(denials);
      setPaymentsData(payments);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-4xl font-semibold mb-5">Healthcare Revenue Cycle Management Dashboard</h1>
      <ClaimsOverviewCard data={analyticsData} />
      <DenialsCard data={denialsData} />
      <PaymentsCard data={paymentsData} />
    </div>
  );
};

export default IndexPage;
