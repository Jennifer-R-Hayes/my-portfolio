// --- app/skills/page.tsx ---
export default function SkillsPage() {
const categories = {
'Data Engineering': ['SQL Server', 'T-SQL', 'dbt', 'Snowflake', 'ETL'],
'Backend Development': ['Python', 'FastAPI', 'C#', 'R'],
'Frontend Development': ['Next.js', 'React', 'TailwindCSS'],
'Automation & AI': ['RPA', 'AI Agents', 'Scheduling'],
'BI & Analytics': ['Power BI', 'Tableau', 'Sage SEI'],
};


return (
<section>
<h1 className="text-3xl font-bold mb-8">Skills & Technologies</h1>
{Object.entries(categories).map(([cat, skills]) => (
<div key={cat} className="mb-6">
<h2 className="text-xl font-semibold">{cat}</h2>
<ul className="flex flex-wrap gap-2 mt-2">
{skills.map((s) => (
<li key={s} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{s}</li>
))}
</ul>
</div>
))}
</section>
);
}