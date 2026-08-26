/* ------------------------------------------------------------------
   Single source of truth for every piece of content on the site.
   Edit this file, not the components.
------------------------------------------------------------------- */

export const site = {
  name: 'Ahmad Syabil Nuruddin',
  fullName: 'Ahmad Syabil Nuruddin Bin Shamsul Amri',
  role: 'Software Engineer & AI/Data Enthusiast',
  location: 'Gombak, Selangor, Malaysia',
  email: 'mysyabil29@gmail.com',
  url: 'https://ahmadsyabil.github.io',
  // Drop your CV into /public and keep this filename in sync.
  resumeHref: '/Ahmad_Syabil_Resume.pdf',
  socials: {
    github: 'https://github.com/ahmadsyabil',
    linkedin: 'https://www.linkedin.com/in/ahmad-syabil-1084823a4',
  },
} as const;

/** Words cycled by the typewriter in the hero. */
export const rotatingRoles: string[] = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI & Data Enthusiast',
  'Systems Analyst',
];

export const heroStats: { value: string; label: string }[] = [
  { value: '38', label: 'Weeks of industry internship' },
  { value: '3.51', label: 'CGPA, BSc Computer Science' },
  { value: '3x', label: "Dean's List awards" },
];

export const about = {
  headline: 'I like watching a manual process disappear.',
  paragraphs: [
    "I'm a Computer Science graduate from UiTM (CGPA 3.51, August 2026) with 38 weeks of internship experience across two Malaysian organisations — a national bank and a state economic development corporation.",
    "At Agrobank I found a department tracking every change request in a 24-column shared spreadsheet with no access control and no record of who changed what. I mapped the process, then designed and built a full-stack replacement in Next.js, Prisma and SQLite with role-based access, a five-stage approval pipeline and an audit trail.",
    "Before that, halfway through a placement at PKINK, I had never touched Flutter. I taught myself the framework and shipped a cross-platform file-tracking app backed by a REST API. That gap between how something works and how it could work is the part of this job I actually enjoy.",
  ],
} as const;

export type SkillGroup = {
  title: string;
  /** lucide-react icon name, resolved in components/About.tsx */
  icon: 'Code2' | 'Layers' | 'BrainCircuit' | 'Database';
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'PHP', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Tools',
    icon: 'Layers',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Flutter', 'Flask', 'Prisma ORM', 'NextAuth.js', 'React Hook Form', 'Zod', 'Git & GitHub', 'Figma', 'XAMPP'],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    skills: ['TensorFlow', 'scikit-learn', 'NLTK', 'CNNs', 'NLP & Text Preprocessing', 'TF-IDF', 'Naive Bayes', 'Image Segmentation', 'FAISS Vector Search', 'Model Evaluation'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'MariaDB', 'SQLite', 'Schema Design', '3NF Normalisation', 'ERD Modelling', 'Migrations', 'REST APIs'],
  },
];

export const PROJECT_CATEGORIES = [
  'Full-Stack',
  'AI & Data',
  'Mobile',
  'Database',
  'Analysis & Design',
  'Fundamentals',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  slug: string;
  title: string;
  context: string;
  year: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  /** null hides the button rather than shipping a dead link */
  github: string | null;
  demo: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  /* ------------------------- FEATURED ------------------------- */
  {
    slug: 'change-request-system',
    title: 'Change Request Management System',
    context: 'Agrobank — IT Service Management',
    year: '2026',
    category: 'Full-Stack',
    problem:
      'The department tracked every change request in a manual 24-column spreadsheet. No access control, no approval trail, and no reliable answer to who changed what.',
    solution:
      'A full-stack web system replacing the spreadsheet: authenticated role-based access across three user groups, a five-section intake form with schema validation, automated reference numbering and a five-stage approval pipeline with persisted status history.',
    highlights: [
      'CRUD REST endpoints over a Prisma ORM layer with three-field filtering and 50-row server-side pagination',
      'Route protection and permission-scoped views so each role sees only its own data',
      'Frozen identifier columns during horizontal scroll, built with custom Tailwind overrides',
      'Unit tested across every component layer, then verified end to end in a local runtime',
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'NextAuth.js', 'Tailwind CSS', 'Zod'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    slug: 'sentiment-analysis',
    title: 'Sentiment Analysis of 50,000 Reviews',
    context: 'Special Topics in Computer Science (CSC649)',
    year: '2025',
    category: 'AI & Data',
    problem:
      'Raw review text is noisy, inconsistent and unusable as a model input without a disciplined preprocessing pipeline.',
    solution:
      'An end-to-end NLP pipeline over the Kaggle IMDb 50K corpus — tokenisation, stemming, lemmatisation and stop-word removal, then TF-IDF and Bag-of-Words feature engineering before a stratified train/test split.',
    highlights: [
      '83% classification accuracy with a Naive Bayes model',
      'Evaluated on accuracy, precision, recall and F1-score rather than accuracy alone',
      'Confusion-matrix analysis showed the model performed strongest on negative sentiment',
    ],
    stack: ['Python', 'scikit-learn', 'NLTK', 'TF-IDF', 'Naive Bayes'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    slug: 'alzheimers-mri',
    title: "Alzheimer's MRI Image Classification",
    context: 'Final Year Project',
    year: '2025 – 2026',
    category: 'AI & Data',
    problem:
      'Classifying MRI scans by disease stage is a high-dimensional visual task where hand-engineered features fall short.',
    solution:
      'A convolutional neural network trained on a preprocessed MRI dataset and served behind a Flask web interface that accepts an uploaded scan and returns a prediction.',
    highlights: [
      'Validated against acceptance criteria defined before development started',
      'Image preprocessing and augmentation pipeline built ahead of training',
      'Academic prototype — not clinically validated or approved for diagnostic use',
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'Flask', 'NumPy'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    slug: 'file-scanner',
    title: 'File Scanner Mobile Application',
    context: 'PKINK — Industrial Training',
    year: '2024',
    category: 'Mobile',
    problem:
      'Staff walked to a physical counter to ask where a file was. There was no way to look a record up remotely.',
    solution:
      'A cross-platform mobile app across three integrated modules — authentication, QR and barcode scanning, and profile management — on a providers-based state architecture, backed by a REST API to a MySQL database.',
    highlights: [
      'Self-taught Flutter and Dart mid-placement, migrating an MIT App Inventor prototype to a production-style build',
      'REST API integration verified with a Dart integration test before rollout',
      'Debugged a multi-day integration failure spanning all three modules by tracing data flow across the codebase',
      'Interface layouts and user journeys designed in Figma before implementation',
    ],
    stack: ['Flutter', 'Dart', 'REST API', 'MySQL', 'XAMPP', 'Figma'],
    github: null,
    demo: null,
    featured: true,
  },

  /* ------------------------- ARCHIVE ------------------------- */
  {
    slug: 'cross-modal-pantun',
    title: 'Cross-Modal Pantun Retrieval — Business Case',
    context: 'Software Project Management (CSC575)',
    year: 'Jan 2026',
    category: 'Analysis & Design',
    problem:
      'A proposed OCR and vector-search platform for matching scanned images to semantically related Malay pantun needed a defensible case before anyone funded it.',
    solution:
      'A full project charter and business case: as-is process, problem and opportunity analysis, proposed solution, scope, functional and non-functional requirements, and a Measurable Organisational Value framework.',
    highlights: [
      'Three-year financial model — RM 60,000 budget, NPV of RM 109,755, ROI inside 18 months',
      'KPIs of 40% faster retrieval and 35% higher search accuracy',
      'Work Breakdown Structure, Gantt chart, risk register and competitor benchmarking across four user segments',
    ],
    stack: ['MOV Framework', 'NPV & ROI Modelling', 'WBS', 'Gantt', 'Risk Register', 'FAISS', 'OCR'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'fyp-management-system',
    title: 'Final Year Project Management System',
    context: 'System Design (CSC584)',
    year: '2025',
    category: 'Full-Stack',
    problem:
      'The faculty final-year-project workflow ran on email and paper, with no shared view of supervisor allocation.',
    solution:
      'A web system supporting three roles — Administrator, Supervisor and Student — covering supervisor requests, proposal submission, listings and profile management, on a schema normalised to third normal form.',
    highlights: ['Authored the system objectives, user site map, interface design and database documentation'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'brain-tumour-detection',
    title: 'Brain Tumour Detection from MRI',
    context: 'Image Processing (CSC566)',
    year: '2025',
    category: 'AI & Data',
    problem:
      'Tumour regions in MRI scans need to be isolated from surrounding tissue before any classification is meaningful.',
    solution:
      'A GUI prototype applying segmentation, morphological operations and feature extraction to flag tumour presence from an uploaded scan.',
    highlights: ['Academic prototype — not clinically validated'],
    stack: ['Python', 'Image Segmentation', 'Feature Extraction'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'library-management-system',
    title: '5M Library Management System',
    context: 'Information System Development (ISP250) — Role: System Analyst',
    year: '2023',
    category: 'Analysis & Design',
    problem:
      'A five-member team needed a documented, testable specification before any code was written.',
    solution:
      'Appointed system analyst and system supervisor, owning solution evaluation and selection and approving all project documentation.',
    highlights: [
      'Authored the responsibilities matrix, feasibility study, system objectives and user requirements',
      'Specified functional and non-functional requirements and data flow diagrams',
      'Wrote test cases, tracing each one back to a stated requirement',
    ],
    stack: ['Requirements Analysis', 'Feasibility Study', 'DFD', 'Test Case Design'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'heritage-tales',
    title: 'Heritage Tales System',
    context: 'Requirements Analysis (CSC577)',
    year: 'Nov 2024',
    category: 'Analysis & Design',
    problem:
      'Malay Hikayat and folklore are scattered across physical collections with no searchable digital record.',
    solution:
      'A requirements specification for a digital archive — current process analysis, problem statement, objectives, scope, system features and use case diagram.',
    highlights: [],
    stack: ['Requirements Elicitation', 'Use Case Modelling', 'Scope Definition'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'gatsby-cafe',
    title: 'Gatsby Cafe Ordering System',
    context: 'Database Engineering (ICT502)',
    year: 'Oct 2024 – Feb 2025',
    category: 'Database',
    problem:
      'The cafe ran a manual, file-based ordering process with duplicated records and no way to query sales.',
    solution:
      'A relational database design for the ordering process — entity relationship diagram, dependency diagram and a schema normalised to third normal form, modelled in Oracle SQL Developer.',
    highlights: [
      'Wrote ten non-trivial SQL queries covering joins, aggregation and sub-queries against the live schema',
      'Built the data model in Oracle SQL Developer Data Modeler',
    ],
    stack: ['Oracle SQL Developer', 'SQL', 'ERD', '3NF Normalisation', 'PHP'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'e-shop',
    title: 'E-Shop E-Commerce Website',
    context: 'Web and Mobile Application (CSC264) — Group Project',
    year: '2023',
    category: 'Full-Stack',
    problem: 'Small sellers needed an online storefront without the cost of a physical shop.',
    solution:
      'An e-commerce site with customer registration, product browsing, cart management, quantity editing and a checkout flow supporting online banking and cash on delivery, plus an administrator view for stock and promotions.',
    highlights: ['Invoice generation on successful payment as proof of transaction'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'contact-manager',
    title: 'Contact Management Mobile App',
    context: 'Web and Mobile Application (CSC264) — Individual Project',
    year: '2023',
    category: 'Mobile',
    problem:
      'Paper systems and basic phonebook software fall short once the number of contacts grows.',
    solution:
      'A mobile contact manager storing phone numbers, emails, social links and organisation details, with full create, browse, edit and delete operations backed by a PHP and MySQL API.',
    highlights: ['Built solo, front end to database'],
    stack: ['MIT App Inventor', 'PHP', 'MySQL'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'university-research-db',
    title: 'University Research Database',
    context: 'Database Management Systems (ICT200)',
    year: '2022',
    category: 'Database',
    problem:
      'The faculty recorded professors, graduate students, advisors, projects and sponsors on paper. A lost file meant redoing the whole process.',
    solution:
      'A relational database replacing the paper record, modelling professors, multi-level student advisors, departments, projects, sponsors and budgets, with the entity relationships resolved before implementation.',
    highlights: [],
    stack: ['SQL', 'ERD', 'Relational Modelling', 'Normalisation'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'clinic-management',
    title: 'Clinic Management System',
    context: 'Fundamentals of Data Structures (CSC248)',
    year: 'Feb 2023',
    category: 'Fundamentals',
    problem:
      'Nurses manually directed patient flow between registration, treatment and pharmacy, with no visibility of queue position.',
    solution:
      'A patient-flow system implementing a queue for the waiting list and a stack for treatment records, tracking each patient from registration through to pharmacy.',
    highlights: ['Chosen scenario deliberately exercised both data structures in one realistic workflow'],
    stack: ['Java', 'Queue', 'Stack', 'Data Structures'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'properties-of-relation',
    title: 'Properties of Relation Analyser',
    context: 'Discrete Structures (CSC510)',
    year: '2024',
    category: 'Fundamentals',
    problem:
      'Determining whether a relation is reflexive, symmetric or transitive by hand is slow and error-prone.',
    solution:
      'A browser tool that reads a set and its relation, classifies it as reflexive, symmetric and/or transitive, and generates the reflexive, symmetric and transitive closures.',
    highlights: ['Implemented the closure algorithms directly rather than calling a library'],
    stack: ['JavaScript', 'HTML', 'Set Theory', 'Algorithm Design'],
    github: null,
    demo: null,
    featured: false,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  tier: 'Professional' | 'Technical & AI' | 'Academic Skills' | 'Participation';
};

export const CERT_TIERS = [
  'Professional',
  'Technical & AI',
  'Academic Skills',
  'Participation',
] as const;

export const certifications: Certification[] = [
  {
    title: 'CCNA 200-301 — Implementing and Administering Cisco Solutions',
    issuer: 'Nexperts Academy Sdn Bhd',
    date: '11 – 25 Aug 2023',
    tier: 'Professional',
  },
  {
    title: 'Certified Robotic Tutor',
    issuer: 'Jazro Robotic Academy · MDEC #mydigitalmaker',
    date: '2023',
    tier: 'Professional',
  },
  {
    title: 'From Classroom to Practice: Navigating AI in the Real World',
    issuer: 'UiTM Cawangan Terengganu, Kampus Kuala Terengganu',
    date: '21 Oct 2025',
    tier: 'Technical & AI',
  },
  {
    title: 'Sharing Session with Computer Science Expert — AI in Real-World Application',
    issuer: 'Faculty of Computer and Mathematical Sciences, UiTM Terengganu',
    date: '7 Jan 2026',
    tier: 'Technical & AI',
  },
  {
    title: 'Online Database for Literature — Information Literacy Skill Module',
    issuer: 'Perpustakaan Tun Abdul Razak, UiTM Shah Alam',
    date: '7 Apr 2025',
    tier: 'Academic Skills',
  },
  {
    title: 'Reference Management Software (Mendeley)',
    issuer: 'Perpustakaan Tun Abdul Razak, UiTM Shah Alam',
    date: '14 Apr 2025',
    tier: 'Academic Skills',
  },
  {
    title: 'Seminar MUET: Tips on Speaking & Writing',
    issuer: 'DiPAC, UiTM Cawangan Kelantan',
    date: '12 Jun 2023',
    tier: 'Academic Skills',
  },
  {
    title: 'Career Guide for Undergraduates: The First Step Towards Success After Graduation',
    issuer: 'Alumni Committee & Modelitic Club, UiTM Terengganu',
    date: '26 Oct 2024',
    tier: 'Participation',
  },
  {
    title: 'Professional Image and Career Grooming Programme',
    issuer: 'Unit Komunikasi Korporat, UiTM Cawangan Terengganu',
    date: '19 Nov 2025',
    tier: 'Participation',
  },
  {
    title: 'Program Jelajah Al-Ikhsan Sports Sdn. Bhd.',
    issuer: 'Industry, Community and Alumni Network Unit, UiTM Kelantan',
    date: '9 May 2023',
    tier: 'Participation',
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  kind: 'work' | 'education' | 'award';
  points: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: 'Aug 2026',
    title: 'BSc (Hons) Computer Science',
    org: 'Universiti Teknologi MARA, Terengganu',
    kind: 'education',
    points: ["Graduated with CGPA 3.51", "Dean's List in 3 semesters"],
  },
  {
    period: 'Mar – Jul 2026',
    title: 'Software Development Intern',
    org: 'Agrobank — IT Service Management Department',
    kind: 'work',
    points: [
      'Built a full-stack change request system in Next.js, Prisma and SQLite, replacing a 24-column manual spreadsheet',
      'Implemented NextAuth authentication with role-based authorisation across three user roles',
      'Elicited requirements across five enhancement projects and authored User Requirements Specification content',
    ],
  },
  {
    period: '2025',
    title: 'Programme Leader — AI & Cybersecurity Webinar Series',
    org: 'UiTM Terengganu',
    kind: 'award',
    points: ['Led four committees across technical operations, promotion, certification and event delivery'],
  },
  {
    period: 'Sep 2023 – Feb 2024',
    title: 'Mobile Development Intern',
    org: 'Perbadanan Kemajuan Iktisad Negeri Kelantan (PKINK)',
    kind: 'work',
    points: [
      'Self-taught Flutter and Dart mid-placement and shipped a three-module cross-platform application',
      'Built and integrated a REST API between the Flutter client and a MySQL database',
      'Resolved two further defects in the organisation helpdesk system',
    ],
  },
  {
    period: 'Aug 2021 – Jan 2024',
    title: 'Diploma in Computer Science',
    org: 'Universiti Teknologi MARA, Kelantan',
    kind: 'education',
    points: ["CGPA 3.31", "Dean's List in 2 semesters"],
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
] as const;
