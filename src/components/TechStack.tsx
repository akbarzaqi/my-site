import { techStackData } from "@/data/data";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative py-12 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
          Tech Stack
        </h2>
      </div>

      {/* Tech Stack List - Div with Border across full width */}
      <div className="flex flex-wrap gap-2.5 w-full">
        {techStackData.map((tech) => (
          <div
            key={tech}
            className="px-3.5 py-1.5 rounded-lg border border-zinc-800/90 bg-zinc-900/50 hover:bg-zinc-800/70 hover:border-zinc-600 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-default shadow-sm"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
