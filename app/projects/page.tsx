// --- app/projects/page.tsx ---
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";


export default function ProjectsPage() {
  const projects = [
    {
      title: "ERP Insights Dashboard",
      tech: ["Next.js", "FastAPI", "SQL"],
      desc: "Simulated ERP KPI dashboard using mock API data.",
      href: "/projects/erp-insights-dashboard/case-study",
    },
    {
      title: "Data Quality Audit Tool",
      tech: ["Python", "Pandas", "ReportLab"],
      desc: "Automated rule-based audit validation with exportable reports.",
      href: "/projects/data-quality-audit-tool/case-study",
    },
    {
      title: "Intranet Lite",
      tech: ["Next.js", "Supabase", "Clerk"],
      desc: "Lightweight internal portal for file and task management.",
      href: "/projects/intranet-lite/case-study"
    },
    {
      title: "AI-Driven Workflow Optimizer",
      tech: ["Python", "R", "C++", "Streamlit"],
      desc: "Demonstrates integrating multi-language scripts to cut runtime — an anonymized version of RPA/AI acceleration work.",
      href: "/projects/ai-driven-workflow-optimizer/case-study"
    },
  ];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Sample Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          // <ProjectCard key={p.title} {...p} />
          <Link key={p.title} href={p.href || "#"}><ProjectCard {...p} /></Link>
        ))}
      </div>
    </section>
  );
}
