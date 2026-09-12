import { projects } from '../data/portfolio'

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <p className="section-label mb-3">What I've built</p>
            <h2 className="section-heading">Projects</h2>
          </div>
          <div className="w-24 h-px bg-olive-300 hidden sm:block mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="group relative flex flex-col border border-warm-200 bg-cream-50 overflow-hidden
                         hover:shadow-2xl hover:shadow-olive-900/8 hover:-translate-y-1.5
                         transition-all duration-300"
            >
              <div className={`h-2 w-full ${proj.color} group-hover:h-3 transition-all duration-300`} />

              <div className="p-7 flex flex-col gap-4 flex-1">
                <span className="font-display text-6xl font-light text-olive-100 absolute top-4 right-5
                                 select-none pointer-events-none group-hover:text-olive-200 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <h3 className="font-display text-3xl font-semibold text-olive-900 leading-tight pr-5">
                  {proj.name}
                </h3>

                <p className="font-body text-sm text-olive-700/80 leading-relaxed flex-1">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-warm-200">
                  {proj.repo && (
                    <a href={proj.repo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 font-body text-xs font-medium text-olive-600
                                  hover:text-olive-800 transition-colors">
                      <GithubIcon /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
