import { experienceData } from "@/data/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-12 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
          Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l border-zinc-800/90 ml-2.5 sm:ml-3 space-y-6 sm:space-y-8">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Indicator Dot */}
            <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-950 group-hover:bg-indigo-400 group-hover:scale-125 transition-all duration-300" />

            {/* Experience Card */}
            <div className="p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 shadow-sm">
              {/* Header: Role, Organization & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4 mb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-400 mt-0.5">
                    {exp.organization}
                  </p>
                </div>
                <div className="shrink-0 self-start sm:self-auto">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/60">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-indigo-400 mt-1 text-xs">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-4 pt-3.5 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

