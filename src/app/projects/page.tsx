import Link from "next/link";
import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Akbar Zaqi Fiktarizaen",
  description:
    "Explore all projects, systems, and applications built by Akbar Zaqi Fiktarizaen.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 mb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>
      </div>

      <Projects showViewAll={false} />
    </main>
  );
}
