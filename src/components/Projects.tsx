"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, Project } from "@/data/data";

interface ProjectsProps {
  limit?: number;
  showViewAll?: boolean;
  showCardImage?: boolean;
}

const getProjectUrl = (url?: string) => {
  if (!url || url === "YOUR_GITHUB_REPO_URL") return "https://github.com/akbarzaqi";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

export default function Projects({
  limit,
  showViewAll = true,
  showCardImage = !limit,
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section
      id="project"
      className="relative py-12 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
          Projects
        </h2>

        {/* Small desktop link if on homepage */}
        {limit && projectsData.length > limit && (
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>View All</span>
            <span>&rarr;</span>
          </Link>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
        {displayedProjects.map((project) => (
          <div
            key={project.title}
            className="group relative p-5 sm:p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Gambar Display di Paling Atas Kartu (Hanya jika showCardImage aktif) */}
              {showCardImage && project.urlPictProject && project.urlPictProject.length > 0 && (
                <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4 border border-zinc-800/80 bg-zinc-950/80 group-hover:border-zinc-700/80 shadow-inner flex items-center justify-center p-1.5">
                  <Image
                    src={project.urlPictProject[0]}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}

              {/* Card Header: Title, Role & Status Action */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block text-[11px] font-medium text-indigo-400 mt-0.5">
                    {project.myRole}
                  </span>
                </div>

                {/* Status Badge & Link */}
                <div className="shrink-0 flex items-center">
                  {project.status === "Live Demo" && project.url ? (
                    <a
                      href={getProjectUrl(project.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                      title="View Live Demo"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Demo</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : project.status === "GitHub" && project.url ? (
                    <a
                      href={getProjectUrl(project.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/80 hover:bg-zinc-700/80 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-900 text-zinc-500 border border-zinc-800"
                      title="Private / Closed Source Project"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Private</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/50 mb-3.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-800/80 group-hover:border-zinc-700/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Case Study / Details Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full text-center py-2 px-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/60 text-zinc-300 hover:text-white text-xs font-medium transition-all duration-200"
              >
                Detail Proyek &amp; Studi Kasus &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* "View More Projects" Button on Homepage */}
      {showViewAll && limit && projectsData.length > limit && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 group shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View More Projects</span>
            <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      )}

      {/* Case Study Modal (Features, Challenge, Solution, Screenshots) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 transition-colors backdrop-blur-sm"
              aria-label="Tutup modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Gambar Display di Paling Atas Modal (Tampil penuh tanpa terpotong) */}
            {selectedProject.urlPictProject && selectedProject.urlPictProject.length > 0 && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-zinc-800/90 bg-zinc-950/90 shadow-lg flex items-center justify-center p-1 sm:p-2">
                <Image
                  src={selectedProject.urlPictProject[0]}
                  alt={`${selectedProject.title} display cover`}
                  fill
                  unoptimized
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Modal Title, Role & Status */}
            <div className="mb-5 pr-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {selectedProject.myRole}
                </span>
                <span className="text-zinc-600">&#8226;</span>
                <span className="text-xs font-medium text-zinc-400">
                  Status: {selectedProject.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Action Links based on Status (Ditaruh tepat di bawah deskripsi) */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {selectedProject.status === "Live Demo" && selectedProject.url && (
                  <a
                    href={getProjectUrl(selectedProject.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Kunjungi Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {selectedProject.status === "GitHub" && selectedProject.url && (
                  <a
                    href={getProjectUrl(selectedProject.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Lihat Repositori GitHub</span>
                  </a>
                )}

                {selectedProject.status === "Private Project" && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs">
                    <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Proyek Privat / Closed Source</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase text-zinc-300 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase text-zinc-300 mb-2.5">
                  Fitur Utama
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-1">&#8226;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-6">
              {selectedProject.challenge && (
                <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
                  <h5 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                    Tantangan (Challenge)
                  </h5>
                  {Array.isArray(selectedProject.challenge) ? (
                    <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
                      {selectedProject.challenge.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-1">&#8226;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  )}
                </div>
              )}

              {selectedProject.solution && (
                <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
                  <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    Solusi (Solution)
                  </h5>
                  {Array.isArray(selectedProject.solution) ? (
                    <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400">
                      {selectedProject.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">&#8226;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Project Screenshots / urlPictProject (Ditaruh di paling bawah) */}
            {selectedProject.urlPictProject && selectedProject.urlPictProject.length > 0 && (
              <div className="pt-2 border-t border-zinc-800/60">
                <h4 className="text-xs font-semibold uppercase text-zinc-300 mb-3 pt-3">
                  Tampilan Proyek
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.urlPictProject.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-md group flex items-center justify-center p-1"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                        fill
                        unoptimized
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
