// --- components/Navbar.tsx ---
import Link from 'next/link';


export default function Navbar() {
const links = [
{ href: '/', label: 'Home' },
{ href: '/about', label: 'About' },
{ href: '/projects', label: 'Projects' },
{ href: '/skills', label: 'Skills' },
{ href: '/contact', label: 'Contact' },
];


return (
<nav className="bg-white shadow-sm sticky top-0 z-50">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<Link href="/" className="font-bold text-lg">Jennifer Hayes</Link>
<ul className="flex gap-6">
{links.map((l) => (
<li key={l.href}><Link href={l.href} className="text-gray-700 hover:text-blue-600">{l.label}</Link></li>
))}
</ul>
</div>
</nav>
);
}