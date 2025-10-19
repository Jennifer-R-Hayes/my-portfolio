"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntranetLiteCaseStudy() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold mb-4">Intranet Lite</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A lightweight internal portal built with Next.js, Clerk, and Supabase — designed to
          simplify file management, task tracking, and collaboration for small teams.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/projects/intranet-lite"
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
          text="Internal teams often rely on scattered email threads, shared drives, and disconnected task lists — making it difficult to track work and share documents efficiently."
        />
        <CaseBlock
          title="The Solution"
          text="Built a secure, modular internal portal that integrates authentication (Clerk), cloud storage (Supabase), and task management within a single, user-friendly dashboard."
        />
        <CaseBlock
          title="The Results"
          text="Delivered a clean, unified workspace that improves visibility and collaboration — ideal for SMBs seeking a simple, cost-effective intranet alternative."
        />
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white p-8 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">System Architecture</h2>
        <div className="flex justify-center">
          <Image
            src="/images/intranet-architecture.png"
            alt="Intranet Lite Architecture Diagram"
            width={800}
            height={400}
            className="rounded-xl border"
          />
        </div>
        <p className="text-gray-600 text-center mt-4">
          Architecture flow showing Clerk Authentication → Next.js Frontend → Supabase Database & Storage,
          powering file management and task modules.
        </p>
      </div>

      {/* Demo Screenshot */}
      <div className="bg-blue-50 p-8 rounded-2xl shadow mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Demo Preview</h2>
        {/* <Image
          src="/images/intranet-dashboard-preview.png"
          alt="Intranet Lite Dashboard Preview"
          width={700}
          height={500}
          className="rounded-xl border mx-auto"
        /> */}
          <iframe
            src="/projects/intranet-lite"
            className="w-full h-[600px] rounded-xl border"
          ></iframe>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          The Intranet Lite dashboard provides side-by-side access to task management and file uploads,
          simulating a live portal environment for authenticated users.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-3 text-gray-700">
          {["Next.js", "Clerk", "Supabase", "React", "TailwindCSS", "Framer Motion"].map((tech) => (
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
