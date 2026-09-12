import { skills } from '../data/portfolio'

const ICONS = {
  Programming:         '※',
  'Backend & APIs':    '◈',
  Frontend:            '✦',
  'AI/LLM':            '◎',
  Security:            '◉',
  Databases:           '◇',
  'Cloud & Tools':     '⌘',
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-cream-100/40">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-3">What I work with</p>
            <h2 className="section-heading">Skills</h2>
          </div>
          <div className="w-24 h-px bg-olive-300 hidden sm:block mb-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="
                flex flex-col gap-5
                bg-cream-50
                border border-warm-200
                p-7
                hover:border-olive-200
                hover:shadow-lg hover:shadow-olive-900/5
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 pb-4 border-b border-warm-200">
                <span className="text-olive-400 text-lg">
                  {ICONS[group.category] || '✦'}
                </span>

                <h3 className="font-display text-xl font-semibold text-olive-800">
                  {group.category}
                </h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 group/item"
                  >
                    <span
                      className="
                        w-1.5 h-1.5 rounded-full
                        bg-olive-300 shrink-0
                        group-hover/item:bg-olive-500
                        transition-colors duration-200
                      "
                    />
                    <span className="font-body text-sm text-olive-700 font-light">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
