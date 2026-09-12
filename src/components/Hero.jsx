import { personal } from '../data/portfolio'

/* ── Social icon SVGs ── */
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const MediumIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)

const SOCIALS = [
  { key: 'LinkedIn', Icon: LinkedinIcon },
  { key: 'GitHub',   Icon: GithubIcon   },
  { key: 'Medium',   Icon: MediumIcon   },
]

function ProfilePhoto() {
  if (personal.photo) {
    return (
      <img
        src={personal.photo}
        alt={personal.name}
        className="w-full h-full object-cover"
      />
    )
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-olive-100 select-none">
      <span className="font-display text-[80px] leading-none font-light text-olive-600 tracking-tight">
        {personal.initials}
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background dot grid decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full dot-grid opacity-40 pointer-events-none" />

      {/* Olive blob decoration */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-olive-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-warm-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-7">
            {/* Greeting */}
            <div
              className="flex items-center gap-3"
              style={{ animation: 'fadeUp 0.7s ease 0.1s both' }}
            >
              <span className="w-10 h-px bg-olive-400" />
              <span className="section-label">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-olive-900 leading-[0.95] tracking-tight"
              style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
            >
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-olive-500' : ''}`}>{word}</span>
              ))}
            </h1>

            {/* Role */}
            <p
              className="font-body text-lg text-olive-600 font-light tracking-wide"
              style={{ animation: 'fadeUp 0.7s ease 0.3s both' }}
            >
              {personal.role}
            </p>

            {/* Tagline */}
            <p
              className="font-body text-olive-700/80 leading-relaxed max-w-md"
              style={{ animation: 'fadeUp 0.7s ease 0.4s both' }}
            >
              {personal.tagline}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 pt-2"
              style={{ animation: 'fadeUp 0.7s ease 0.5s both' }}
            >
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="/resume/rohitha_resume.pdf" download="RohithaPonnapalli_Resume.pdf" className="btn-outline">
                Download Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Socials */}
            <div
              className="flex items-center gap-4 pt-2"
              style={{ animation: 'fadeUp 0.7s ease 0.6s both' }}
            >
              <span className="font-body text-xs text-olive-400 tracking-widest uppercase">Find me on</span>
              <div className="flex gap-3">
                {SOCIALS.map(({ key, Icon }) =>
                  personal.socials[key] ? (
                    <a
                      key={key}
                      href={personal.socials[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-olive-200
                                 text-olive-500 hover:bg-olive-600 hover:text-cream-50 hover:border-olive-600
                                 transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ) : null
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Photo frame ── */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animation: 'fadeIn 0.9s ease 0.3s both' }}
          >
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-olive-300 z-0" />
              {/* Dot accent */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 dot-grid opacity-70 z-0" />

              {/* Main photo frame */}
              <div
                className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 overflow-hidden
                            shadow-2xl shadow-olive-900/15"
              >
                <ProfilePhoto />

                {/* Subtle olive overlay tint */}
                <div className="absolute inset-0 bg-olive-600/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-4 left-6 z-20 bg-cream-50 border border-warm-200
                              shadow-lg shadow-olive-900/10 px-4 py-2.5 flex items-center gap-2">
                <span className="text-olive-500 text-xs">📍</span>
                <span className="font-body text-xs text-olive-600 font-medium">{personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-olive-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-olive-400 to-transparent" />
      </div>
    </section>
  )
}
