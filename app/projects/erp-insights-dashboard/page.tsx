// This page:
// 1. Fetch live data from http://localhost:8000/summary and http://localhost:8000/sales-by-month
// Display four KPI cards (Sales, Orders, Margin, YOY Growth)
// Render a simple Sales by Month line chart
// Fit seamlessly into your existing portfolio style

"use client";

import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, BarElement);

interface Summary {
  total_sales: number;
  total_orders: number;
  avg_margin: number;
  yoy_growth: number;
}

interface MonthlySales {
  month: string;
  amount: number;
}

interface RegionalSales {
  region: string;
  amount: number;
}

export default function ERPInsightsDashboard() {
  const [summary, setSummary] = useState<Summary | null>(null);
  // const [salesByMonth, setSalesByMonth] = useState<MonthlySales[]>([]);
  const [salesByRegion, setSalesByRegion] = useState<RegionalSales[]>([]);
  const [salesByMonth, setSalesByMonth] = useState<MonthlySales[]>([]);


  // Fetch all datasets
  useEffect(() => {
    fetch("http://127.0.0.1:8000/summary")
      .then((res) => res.json())
      .then(setSummary)
      .catch((err) => console.error("Error fetching summary:", err));

    //fetch("http://127.0.0.1:8000/sales-by-month")
    //  .then((res) => res.json())
    //  .then(setSalesByMonth)
    //  .catch((err) => console.error("Error fetching sales data:", err));
  fetch("http://127.0.0.1:8000/sales/monthly")
    .then((res) => res.json())
    .then((data) => {
      // Handle both direct array and wrapped object formats
      if (Array.isArray(data)) setSalesByMonth(data);
      else if (Array.isArray(data.records)) setSalesByMonth(data.records);
      else setSalesByMonth([]);
    })
    .catch((err) => console.error("Error fetching sales data:", err));


//    fetch("http://127.0.0.1:8000/sales-by-region")
//      .then((res) => res.json())
//      .then(setSalesByRegion)
//      .catch((err) => console.error("Error fetching regional data:", err));
//  }, []);
  fetch("http://127.0.0.1:8000/sales/region")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) setSalesByRegion(data);
      else if (Array.isArray(data.records)) setSalesByRegion(data.records);
      else setSalesByRegion([]);
    })
    .catch((err) => console.error("Error fetching regional data:", err));
}, []);


  // Compute rolling average for realism
  const rollingAvg = salesByMonth.map((_, i, arr) => {
    const slice = arr.slice(Math.max(i - 2, 0), i + 1);
    const avg = slice.reduce((sum, r) => sum + r.amount, 0) / slice.length;
    return avg;
  });

  const salesChartData = {
    labels: salesByMonth.map((d) => d.month),
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: salesByMonth.map((d) => d.amount),
        fill: false,
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        tension: 0.3,
      },
      {
        label: "3-Mo Rolling Avg",
        data: rollingAvg,
        fill: false,
        borderColor: "#f59e0b",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  const regionChartData = {
    labels: salesByRegion.map((r) => r.region),
    datasets: [
      {
        label: "Regional Sales ($)",
        data: salesByRegion.map((r) => r.amount),
        backgroundColor: ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">ERP Insights Dashboard</h1>
      <p className="text-gray-700 mb-8">
        A realistic ERP KPI dashboard powered by FastAPI and deterministic data. The system simulates
        consistent regional growth, stable margins, and clear performance trends using static business rules.
      </p>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {summary ? (
          <>
            <KPIBlock title="Total Sales" value={`$${summary.total_sales.toLocaleString()}`} />
            <KPIBlock title="Total Orders" value={summary.total_orders.toLocaleString()} />
            <KPIBlock title="Avg. Margin" value={`${summary.avg_margin}%`} />
            <KPIBlock
              title="YOY Growth"
              value={`${summary.yoy_growth}%`}
              highlight={summary.yoy_growth >= 0}
            />
          </>
        ) : (
          <p className="text-gray-500 col-span-4">Loading metrics...</p>
        )}
      </div>

      {/* Charts Section */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Sales by Month */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Sales by Month</h2>
          <Line
            data={salesChartData}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true, position: "bottom" },
                tooltip: { mode: "index", intersect: false },
              },
              scales: { y: { beginAtZero: false } },
            }}
          />
        </div>

        {/* Sales by Region */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Sales by Region</h2>
          <Bar
            data={regionChartData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { display: false } },
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}

// --- Reusable KPI Block ---
function KPIBlock({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-6 bg-white rounded-2xl shadow text-center transition-all ${
        highlight ? "border-t-4 border-green-500" : "border-t-4 border-transparent"
      }`}
    >
      <h3 className="text-gray-600 text-sm uppercase tracking-wide">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
    </div>
  );
}
