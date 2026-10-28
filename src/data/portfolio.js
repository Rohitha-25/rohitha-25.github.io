export const personal = {
  name:      'Rohitha Ponnapalli',
  initials:  'Rohitha Ponnapalli',
  role:      'Full-Stack Developer | AI-Integrated & Secure Applications',
  tagline:   'Engineering thoughtful software where code, security, and AI come together.',
  bio: [
    'I\'m a Full-Stack Developer focused on building secure, scalable web applications using Java, Spring Boot, React.js, Python, and relational databases. My experience spans REST API development, authentication and authorization, cloud deployment, and AI-integrated systems, including RAG pipelines and agentic AI workflows.',
    'I\'m particularly interested in the intersection of software engineering, identity security, and AI. Through hands-on projects, I\'ve explored OAuth 2.0/OIDC, Okta identity and access management, and AI-assisted security monitoring, alongside LLM integration and multi-agent systems. I enjoy learning by building, experimenting with new technologies, and turning ideas into practical solutions.',
    'When I\'m away from the terminal, you\'ll find me moving chess pieces, recording a melody, or chasing my next destination with a camera.',
  ],
  location:  'Hyderabad, India',
  email:     'rohithaponnapalli25@gmail.com',
  photo:     '/photo/ro.jpg',
  socials: {
    LinkedIn: 'https://www.linkedin.com/in/rohithaponnapalli/',
    GitHub:   'https://github.com/Rohitha-25',
    Medium:   'https://medium.com/@rohithaponnapalli',
  },
}

export const experience = [
  {
    role:     'Developer I - Software Engineering',
    company:  'UST',
    period:   'Mar 2025 — Jul 2025',
    location: 'Trivandrum, India',
    desc: [
      'Completed a 5-month full-stack engineering training focused on Java, Spring Boot, React.js, SQL, and REST APIs.',
      'Co-designed and developed QuickConnect, a full-stack home services platform supporting authentication, service discovery, bookings, payments, reviews, and provider workflows.',
      'Built React.js interfaces, integrated Spring Boot REST APIs using Axios, and deployed applications on AWS Elastic Beanstalk using Docker.',
    ],
    stack:  ['Java', 'Spring Boot', 'React.js', 'MySQL', 'RESTful APIs', 'AWS', 'Docker'],
  },
]

export const projects = [
  {
    id:    1,
    name:  'A.E.G.I.S. — AI Enterprise Governance & Identity Security',
    desc:  'A secure multi-agent platform for governing AI agents in enterprise environments, combining identity, access control, RAG-based analysis, auditability, and privileged access workflows.',
    tags: [
      'Spring Boot',
      'Spring Security',
      'Spring AI',
      'React.js',
      'PostgreSQL',
      'Auth0',
      'Least Privilege',
      'PAM/JIT',
      'RAG',
      'Google Gemini',
    ],
    repo:  'https://github.com/Rohitha-25/Aegis-Backend',
    color: 'bg-olive-100',
  },
  {
    id:    2,
    name:  'Project P',
    desc:  'An AI-assisted privileged access monitoring prototype that integrates the Okta System Log API with Python and FastAPI to detect and prioritize security-relevant identity events. Uses LangGraph and Google Gemini to generate investigation assessments and recommendations for human review.',
    tags: [
      'Okta IAM',
      'Python',
      'FastAPI',
      'LangGraph',
      'Google Gemini',
      'REST APIs',
      'Security Monitoring',
    ],
    repo:  'https://github.com/Rohitha-25/Project-P',
    color: 'bg-warm-100',
  },
  {
    id:    3,
    name:  'Seek AI',
    desc:  'A secure full-stack RAG application for querying of uploaded documents using natural-language. Users authenticate with JWT, upload documents, and receive context-grounded answers through a pipeline powered by Apache Tika, Gemini embeddings, similarity search, and Google Gemini.',
    tags: [
      'Spring Boot',
      'Spring Security',
      'Spring AI',
      'React.js',
      'TypeScript',
      'PostgreSQL',
      'JWT',
      'Apache Tika',
      'Google Gemini',
    ],
    repo:  'https://github.com/Rohitha-25/Seek-AI-Backend',
    color: 'bg-cream-200',
  },
  {
    id:    4,
    name:  'QuickConnect',
    desc:  'A full-stack home services platform supporting service discovery, bookings, payments, reviews, and provider management. Implements JWT authentication, role-based authorization, OTP verification, and RESTful APIs for managing users, services, bookings, reviews, and payments.',
    tags: [
      'Spring Boot',
      'Spring Security',
      'JWT',
      'React.js',
      'MySQL',
      'REST APIs',
      'Google Gemini',
    ],
    repo:  'https://github.com/Rohitha-25/QuickConnect-Backend',
    color: 'bg-olive-100',
  },
]

export const skills = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Frameworks & APIs',
    items: [
      'Spring Boot',
      'Spring Security',
      'React.js',
      'FastAPI',
      'JPA/Hibernate',
      'RESTful APIs',
    ],
  },
  {
    category: 'AI & Agentic Systems',
    items: [
      'RAG',
      'LangChain',
      'LangGraph',
      'Spring AI',
      'Google Gemini',
    ],
  },
  {
    category: 'Security & IAM',
    items: [
      'Okta',
      'OAuth 2.0',
      'OIDC',
      'JWT',
      'MFA',
      'RBAC',
      'PAM/JIT',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    category: 'Cloud & Tools',
    items: [
      'AWS (EC2, S3, Elastic Beanstalk)',
      'Docker',
      'Git',
    ],
  },
]
