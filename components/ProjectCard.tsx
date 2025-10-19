// --- components/ProjectCard.tsx ---

import React from 'react';

type ProjectCardProps = {
  title: string;
  tech: string[];
  desc: string;
};

export default function ProjectCard({ title, tech, desc }: ProjectCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
      <ul className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <li key={t} className="bg-gray-200 px-2 py-1 rounded text-sm">{t}</li>
        ))}
      </ul>
    </div>
  );
}
