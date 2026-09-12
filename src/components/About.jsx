import { personal } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-28 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-3">Get to know me</p>
            <h2 className="section-heading">About <em className="not-italic text-olive-500">Me</em></h2>
          </div>
          <div className="w-24 h-px bg-olive-300 hidden sm:block mb-3" />
        </div>

        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="space-y-5">
            {personal.bio.map((para, i) => (
              <p key={i} className="font-body text-olive-700/90 leading-relaxed text-[15px]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="btn-primary">Explore my Work</a>
            <a href="#contact" className="btn-outline">Let's Connect</a>
          </div>
        </div>

      </div>
    </section>
  )
}