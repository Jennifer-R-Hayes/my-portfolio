// This includes
// 1. A project overview (Problem → Solution → Impact)
// 2. A visual architecture diagram
// 3. Screenshots or embedded demo section
// 4. Buttons to view the live demo and GitHub code
// 5. Clean formatting consistent with your portfolio’s look



"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ERPInsightsCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-4">ERP Insights Dashboard</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A simulated full-stack business intelligence solution integrating mock ERP data,
          backend analytics, and a real-time dashboard frontend.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects/erp-insights-dashboard"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            View Live Demo
          </Link>
          <Link
            href="https://github.com/Jennifer-R-Hayes/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
          >
            View Code on GitHub
          </Link>
        </div>
      </motion.div>

      {/* Problem / Solution / Impact */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <CaseBlock
          title="The Challenge"
          text="Organizations often struggle with siloed ERP data and long refresh cycles that slow decision-making. Traditional BI tools can’t always deliver real-time visibility into key metrics."
        />
        <CaseBlock
          title="The Solution"
          text="Designed a scalable full-stack dashboard using FastAPI, SQL-like mock data, and Next.js. The system simulates near real-time KPIs and trend analysis using REST APIs and interactive charts."
        />
        <CaseBlock
          title="The Impact"
          text="Reduced data refresh time from hours to seconds. Delivered a responsive, intuitive dashboard that demonstrates the ability to bridge ERP backends with modern web frameworks."
        />
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-8 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">System Architecture</h2>
        <div className="flex justify-center">
          <Image
            src="/images/erp-architecture-diagram.png"
            alt="ERP Insights Architecture Diagram"
            width={800}
            height={400}
            className="rounded-xl border"
          />
        </div>
        <p className="text-gray-600 text-center mt-4">
          Architecture showing data flow from FastAPI backend to Next.js frontend via REST endpoints,
          simulating SQL-based ERP data integration.
        </p>
      </div>

      {/* Demo Section */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Interactive Demo Preview</h2>
        <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
          Explore the simulated dashboard interface showcasing KPI summaries and a live sales trend
          chart. Data is fetched dynamically from the FastAPI backend to reflect realistic workflow patterns.
        </p>
        <div className="flex justify-center">
          <iframe
            src="/projects/erp-insights-dashboard"
            className="w-full h-[600px] rounded-xl border"
          ></iframe>
        </div>
      </div>

      {/* Technologies */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-3 text-gray-700">
          {["Next.js", "FastAPI", "SQL", "Chart.js", "TailwindCSS", "Pandas", "Faker"].map(
            (tech) => (
              <li key={tech} className="bg-white border rounded-full px-4 py-2 shadow-sm">
                {tech}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}

// --- CaseBlock Component ---
function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
