"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaPlayCircle, FaRobot, FaChartBar } from "react-icons/fa";
import IconWithFallback from "../../../components/IconWithFallback";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AIWorkflowOptimizerDemo() {
  const [taskType, setTaskType] = useState("Regression Modeling");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const taskOptions = [
    "Regression Modeling",
    "Monte Carlo Simulation",
    "Data Cleansing",
  ];

  const runSimulation = async () => {
    setIsRunning(true);
    setResult(null);

    // Simulate API delay and runtime differences
    await new Promise((res) => setTimeout(res, 2500));
    const runtimes = {
      "R Engine": Math.random() * (35 - 20) + 20,
      "C++ Engine": Math.random() * (10 - 5) + 5,
      "AI Optimized Path": Math.random() * (7 - 4) + 4,
    };

    setResult({
      taskType,
      runtimes,
      chosen: Object.entries(runtimes).reduce((a, b) =>
        a[1] < b[1] ? a : b
      )[0],
    });

    setIsRunning(false);
  };

  const chartData = result
    ? {
        labels: Object.keys(result.runtimes),
        datasets: [
          {
            label: "Runtime (seconds)",
            data: Object.values(result.runtimes),
            backgroundColor: ["#60a5fa", "#34d399", "#fbbf24"],
            borderRadius: 8,
          },
        ],
      }
    : null;

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">
        AI-Driven Workflow Optimizer
      </h1>
      <p className="text-gray-700 mb-8 max-w-3xl">
        This demo simulates an AI-powered orchestration engine that integrates
        Python, R, and C++ to minimize runtime across complex workflows. The
        system predicts the optimal execution path based on task type and data
        size.
      </p>

      {/* Task selection */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <IconWithFallback
            icon={<FaRobot className="text-blue-600" />}
            emoji="🤖"
            label="Task Type"
          />
          Select Task Type
        </h2>
        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="border px-4 py-2 rounded-lg text-gray-700"
        >
          {taskOptions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={`mt-4 flex items-center gap-2 px-5 py-2 rounded-lg text-white font-semibold shadow ${
            isRunning ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <IconWithFallback
            icon={<FaPlayCircle />}
            emoji="▶️"
            label="Run Optimization"
          />
          {isRunning ? "Running..." : "Run Optimization"}
        </button>
      </div>

      {/* Progress simulation */}
      {isRunning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden"
        >
          <motion.div
            className="bg-blue-600 h-4"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      )}

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <IconWithFallback
              icon={<FaChartBar className="text-blue-600" />}
              emoji="📊"
              label="Results"
            />
            Performance Summary
          </h2>

          <p className="text-gray-700 mb-6">
            <strong>Task:</strong> {result.taskType}
            <br />
            <strong>Optimal Execution Path:</strong>{" "}
            <span className="text-blue-600 font-semibold">
              {result.chosen}
            </span>
          </p>

          {chartData && (
            <div className="max-w-lg">
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    title: { display: true, text: "Runtime Comparison" },
                  },
                }}
              />
            </div>
          )}
        </motion.div>
      )}

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-8">
        * Demo uses mocked data for portfolio purposes. Real implementation
        integrates Python, R, and C++ engines with Streamlit frontend.
      </p>
    </section>
  );
}
