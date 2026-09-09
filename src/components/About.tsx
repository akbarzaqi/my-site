import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-16 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full flex flex-col items-start gap-6">
        {/* Header: Photo on the left, aligned with Name and Role */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Profile Photo with distinct grey border */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-zinc-500 bg-zinc-900 shadow-xl shadow-black/60">
              <Image
                src="/foto.jpeg"
                alt="Akbar Zaqi Fiktarizaen"
                width={96}
                height={96}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>

          {/* Name & Role */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-1.5">
              Akbar Zaqi Fiktarizaen
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-zinc-400">
              Junior Software &amp; AI Engineer
            </p>
          </div>
        </div>

        {/* About Description (English) */}
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
          Software &amp; AI Engineer focused on modern web development and computer vision implementation. Passionate about exploring cutting-edge technologies and designing scalable, efficient, and impactful digital solutions through clean code.
        </p>

        {/* Action Links: GitHub, LinkedIn, Email, Download CV */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* GitHub */}
          <a
            href="https://github.com/akbarzaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/akbarzaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:zakiakbar143@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Email</span>
          </a>

          {/* Download CV */}
          <a
            href="/CV_AkbarZaqiFiktarizaen_WebDev.pdf"
            download="CV_AkbarZaqiFiktarizaen_WebDev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
