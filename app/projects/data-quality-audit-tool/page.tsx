"use client";

import { useState, useEffect } from "react";

interface AuditResult {
  ruleId: string;
  description: string;
  field: string;
  invalidValue: string | number;
  severity: string;
}

export default function DataQualityAuditPage() {
  const [results, setResults] = useState<AuditResult[]>([]);

  useEffect(() => {
    // Mock data (simulating Python audit output)
    setResults([
      {
        ruleId: "R001",
        description: "Missing Invoice Number",
        field: "InvoiceNumber",
        invalidValue: "N/A",
        severity: "High",
      },
      {
        ruleId: "R002",
        description: "Declared Value <= 0",
        field: "DeclaredValue",
        invalidValue: 0,
        severity: "High",
      },
      {
        ruleId: "R003",
        description: "Invalid Country Code",
        field: "ImportCountry",
        invalidValue: "FR",
        severity: "Medium",
      },
    ]);
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Data Quality Audit Tool</h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        A Python-based automation system that validates imported data against configurable business rules and
        generates exception reports and professional PDF summaries.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <StatCard title="Total Records Checked" value="1,000" />
        <StatCard title="Rules Applied" value="3" />
        <StatCard title="Issues Found" value={results.length.toString()} />
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Audit Findings</h2>
        <table className="w-full text-left text-gray-700 border-t">
          <thead>
            <tr className="border-b">
              <th className="py-2">Rule ID</th>
              <th>Description</th>
              <th>Field</th>
              <th>Invalid Value</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{r.ruleId}</td>
                <td>{r.description}</td>
                <td>{r.field}</td>
                <td>{r.invalidValue}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      r.severity === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {r.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex gap-4">
        <a
          href="/sample-pdfs/audit-report-example.pdf"
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          View Sample PDF Report
        </a>
        <a
          href="https://github.com/Jennifer-R-Hayes/"
          target="_blank"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          View Code on GitHub
        </a>
      </div>
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow text-center">
      <h3 className="text-sm text-gray-600 uppercase">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
    </div>
  );
}
