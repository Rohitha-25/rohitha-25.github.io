import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <p className="section-label mb-3">Where I've worked</p>
            <h2 className="section-heading">Experience</h2>
          </div>
          <div className="w-24 h-px bg-olive-300 hidden sm:block mb-3" />
        </div>

        <div className="relative">
          <div className="absolute left-0 sm:left-[188px] top-2 bottom-8 w-px timeline-line hidden sm:block" />

          <div className="flex flex-col gap-14">
            {experience.map((job) => (
              <div key={job.id} className="sm:flex gap-10 group">

                <div className="hidden sm:flex flex-col items-end min-w-[180px] pt-1">
                  <span className="font-body text-sm text-olive-500 font-medium tracking-wide text-right">
                    {job.period}
                  </span>
                  <span className="font-body text-xs text-olive-400 text-right mt-1">{job.location}</span>
                </div>

                <div className="hidden sm:flex flex-col items-center relative">
                  <div
                    className="w-3 h-3 rounded-full border-2 border-olive-500 bg-cream-50 mt-1 z-10
                                group-hover:bg-olive-500 transition-colors duration-300 shrink-0"
                  />
                </div>

                <div className="flex-1 card group-hover:border-olive-200">
                  <p className="sm:hidden font-body text-xs text-olive-400 mb-2">{job.period}</p>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-olive-900 leading-tight">
                        {job.role}
                      </h3>
                      <p className="font-body text-sm text-olive-500 font-medium mt-0.5">{job.company}</p>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-olive-100 flex items-center justify-center
                                    group-hover:bg-olive-500 transition-colors duration-300">
                      <svg className="w-4 h-4 text-olive-600 group-hover:text-cream-50 transition-colors"
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {job.desc.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-olive-700/80 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-olive-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
