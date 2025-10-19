"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIWorkflowCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-4">AI-Driven Workflow Optimizer</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A multi-language orchestration engine that combines Python, R, and C++ to intelligently
          accelerate data workflows using AI-based runtime optimization and cross-language execution.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects/ai-driven-workflow-optimizer"
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

      {/* Problem / Solution / Results */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <CaseBlock
          title="The Challenge"
          text="Legacy RPA systems were limited by single-threaded processes and sequential logic, causing high runtimes and maintenance overhead for complex analytics workloads."
        />
        <CaseBlock
          title="The Solution"
          text="Designed a multi-language workflow optimizer that coordinates Python, R, and C++ scripts through AI heuristics to determine the fastest and most efficient execution path."
        />
        <CaseBlock
          title="The Results"
          text="Reduced end-to-end runtime by over 80% in simulation testing, demonstrating the potential for AI-driven orchestration to replace legacy automation systems."
        />
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-8 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">System Architecture</h2>
        <div className="flex justify-center">
          <Image
            src="/images/ai-workflow-architecture.png"
            alt="AI Workflow Optimizer Architecture Diagram"
            width={800}
            height={400}
            className="rounded-xl border"
          />
        </div>
        <p className="text-gray-600 text-center mt-4">
          Architecture flow showing Streamlit UI orchestrating Python, R, and C++ engines via an AI-based path optimizer.
          The system dynamically selects the best language runtime for each task type.
        </p>
      </div>

      {/* Demo Preview */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Demo Preview</h2>
        {/* <Image
          src="/images/ai-workflow-demo-preview.png"
          alt="AI Workflow Demo Preview"
          width={700}
          height={500}
          className="rounded-xl border mx-auto"
        /> */}
          <iframe
            src="/projects/ai-driven-workflow-optimizer"
            className="w-full h-[600px] rounded-xl border"
          ></iframe>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          The demo interface allows users to select a workflow type, simulate multi-engine execution, and visualize runtime
          comparisons using animated progress bars and real-time charts.
        </p>
      </div>

      {/* Technical Overview */}
      <div className="bg-white p-8 rounded-2xl shadow mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Technical Overview</h2>
        <ul className="list-disc text-gray-700 leading-relaxed max-w-3xl mx-auto space-y-2">
          <li>Built using <strong>Python</strong> (core logic and AI heuristic), <strong>R</strong> (statistical modeling), and <strong>C++</strong> (performance-critical operations).</li>
          <li><strong>AI heuristic module</strong> predicts optimal language execution path using lightweight ML rules.</li>
          <li><strong>Streamlit interface</strong> provides dynamic runtime visualization and interactive workflow control.</li>
          <li>Achieved average simulated speedup of 4–6x compared to baseline single-language execution.</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-3 text-gray-700">
          {["Python", "R", "C++", "Streamlit", "Pandas", "rpy2", "Scikit-learn"].map((tech) => (
            <li key={tech} className="bg-white border rounded-full px-4 py-2 shadow-sm">
              {tech}
            </li>
          ))}
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
