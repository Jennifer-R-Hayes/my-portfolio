// --- app/page.tsx --- (Home)
import Hero from '../components/Hero';
import Link  from 'next/link';

export default function HomePage() {
return (
<>
<Hero />
<section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-xl font-semibold">ERP Insights Dashboard</h2>
<p className="mt-2 text-gray-600">A sample BI + SQL + API project showing dynamic KPIs and mock data modeling.</p>
</div>
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-xl font-semibold">Data Quality Audit Tool</h2>
<p className="mt-2 text-gray-600">ETL validation pipeline with rule checks and exportable PDF summaries.</p>
</div>
<div className="p-6 bg-white rounded-2xl shadow">
<h2 className="text-xl font-semibold">Intranet Lite</h2>
<p className="mt-2 text-gray-600">Full-stack document and task management mock app with authentication.</p>
</div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold">AI-Driven Workflow Optimizer</h2>
          <p className="mt-2 text-gray-600">
          Optimizes complex workflows using AI and multi-language integration to cut runtime and boost automation efficiency.
          </p>
        </div>
</section>
</>
);
}
