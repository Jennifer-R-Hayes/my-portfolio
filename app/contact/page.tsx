// --- app/contact/page.tsx ---

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-4">
        Feel free to reach out to discuss projects, collaborations, or consulting opportunities.
      </p>

      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:jennifer.r.hayes1@gmail.com"
            className="text-blue-600 hover:underline"
          >
            jennifer.r.hayes1@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/jennifer-hayes-a69a97143"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/jennifer-hayes-a69a97143
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Jennifer-R-Hayes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/Jennifer-R-Hayes
          </a>
        </li>
      </ul>
    </section>
  );
}
