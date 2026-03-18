export default function HomePage() {
  const interests = [
    "Statistics",
    "Data Science",
    "Computer Science",
    "C++",
    "GPU",
    "Open Source",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16">
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-8">
          <div className="inline-flex w-fit items-center rounded-full border border-neutral-800/80 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-100/90 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            minzure.com
          </div>

          <nav className="flex items-center gap-2 text-xs text-neutral-300/80 sm:gap-3 sm:text-sm">
            <a
              href="#about"
              className="rounded-full border border-neutral-800/80 bg-neutral-900/40 px-3 py-1.5 transition hover:bg-neutral-800/70"
            >
              About
            </a>
            <a
              href="#about"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-800/80 bg-neutral-900/40 px-3 py-1.5 transition hover:bg-neutral-800/70"
            >
              Blog
            </a>
          </nav>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.35fr_0.9fr] md:items-center md:gap-10">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-300/70 sm:text-sm">
              Hello, I’m
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Minjune Cha
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-100/90 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
              I am a student interested in Statistics and Computer Science. I study
              Applied Statistics at Chung-Ang University and I am building my
              technical foundation step by step.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              <span className="rounded-full border border-neutral-800/80 bg-neutral-900/50 px-3 py-1.5 text-xs text-neutral-200/90 sm:text-sm">
                CAU Applied Statistics 26
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              <a
                href="https://github.com/minzure"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700/70 bg-neutral-900/50 px-3.5 py-2 text-sm text-neutral-100/95 transition hover:bg-neutral-800/70 sm:px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.589 2 12.25c0 4.528 2.865 8.37 6.839 9.726.5.096.682-.223.682-.496 0-.245-.009-.894-.014-1.755-2.782.617-3.369-1.37-3.369-1.37-.455-1.19-1.11-1.507-1.11-1.507-.908-.638.069-.625.069-.625 1.004.072 1.532 1.06 1.532 1.06.892 1.57 2.341 1.116 2.91.853.091-.665.349-1.116.635-1.373-2.221-.261-4.555-1.14-4.555-5.074 0-1.121.389-2.038 1.029-2.756-.103-.262-.446-1.316.098-2.744 0 0 .84-.277 2.75 1.053A9.303 9.303 0 0 1 12 6.836a9.3 9.3 0 0 1 2.504.349c1.909-1.33 2.748-1.053 2.748-1.053.545 1.428.202 2.482.1 2.744.64.718 1.027 1.635 1.027 2.756 0 3.944-2.338 4.81-4.566 5.066.359.318.678.946.678 1.907 0 1.377-.012 2.487-.012 2.826 0 .275.18.597.688.495C19.138 20.616 22 16.776 22 12.25 22 6.589 17.523 2 12 2Z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/55 p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
            <p className="text-sm font-medium text-neutral-300/70">Current Focus</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-neutral-100/90 sm:space-y-4">
              <div className="rounded-2xl bg-neutral-950/70 p-4">
                <p className="font-semibold text-white">Study</p>
                <p className="mt-1">
                  Building a strong foundation in statistics and CS.
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-950/70 p-4">
                <p className="font-semibold text-white">Technical Interest</p>
                <p className="mt-1 break-words">
                  Algorithms, Operating System, GPU-related topics, and software tools.
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-950/70 p-4">
                <p className="font-semibold text-white">Next Step</p>
                <p className="mt-1">
                  This site is the starting point. A blog will be added later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-neutral-900/90 bg-neutral-950/70"
      >
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">About Me</h2>
              <p className="mt-4 text-sm leading-6 text-neutral-100/90 sm:text-base sm:leading-7">
                I prefer steady growth over shortcuts. My goal is to develop real
                technical ability by learning fundamentals carefully and applying
                them through projects.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/50 p-5 shadow-sm sm:p-6">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">Interests</h2>
              <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-neutral-700/70 bg-neutral-950 px-3 py-2 text-sm text-neutral-100/95 sm:px-4"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900/90">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 text-xs text-neutral-400/60 sm:px-6 sm:py-8 sm:text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 minzure.com</p>
          <p>Personal homepage, blog-ready later.</p>
        </div>
      </footer>
    </main>
  );
}