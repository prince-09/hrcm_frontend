const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export async function fetchClaims() {
  const res = await fetch(`${baseURL}/analytics/claims`);
  console.log("Res", res)
  if (!res.ok) throw new Error("Failed to fetch claims");
  return res.json();
}

export async function fetchDenials() {
  const res = await fetch(`${baseURL}/analytics/denials`);
  if (!res.ok) throw new Error("Failed to fetch denials");
  return res.json();
}

export async function fetchPayments() {
  const res = await fetch(`${baseURL}/analytics/payments`);
  if (!res.ok) throw new Error("Failed to fetch payments");
  return res.json();
}
