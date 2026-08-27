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
  // wa.me resolves usernames, so this links straight to a chat without
  // publishing a phone number.
  whatsapp: {
    username: 'ahmdsyabil',
    url: 'https://wa.me/ahmdsyabil',
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
  { value: '3.51', label: 'CGPA in Computer Science' },
  { value: '3x', label: "Dean's List awards" },
];

export const about = {
  headline: 'I like watching a manual process disappear.',
  paragraphs: [
    "I am a Computer Science graduate from UiTM. I finished in August 2026 with a CGPA of 3.51. Before that I did two internships that added up to 38 weeks. One was at a national bank and the other at a state development corporation.",
    "At Agrobank the department tracked every change request in a shared spreadsheet with 24 columns. Nobody could tell who had changed what. I mapped out how the process actually worked and then built a replacement in Next.js. It had proper logins, an approval flow with five stages and a full history of every edit.",
    "At PKINK I was halfway through the placement and had never used Flutter. I taught myself the framework and shipped a file tracking app with a REST API behind it. Closing the gap between how something works and how it should work is the part of this job I enjoy most.",
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
    context: 'Agrobank, IT Service Management',
    year: '2026',
    category: 'Full-Stack',
    problem:
      'The department tracked every change request in a spreadsheet with 24 columns. There was no access control and no record of who had changed what.',
    solution:
      'A web system that replaced the spreadsheet. It has logins with three permission levels, an intake form that validates what you type, automatic reference numbers and an approval flow with five stages that keeps the full status history.',
    highlights: [
      'CRUD REST endpoints on a Prisma layer with filtering across three fields and server side pagination at 50 rows',
      'Route protection so each role only ever sees its own data',
      'Four identifier columns stay frozen while the table scrolls sideways',
      'Unit tested every component layer and then verified the whole system locally',
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
      'Raw review text is messy and inconsistent. A model cannot learn anything useful from it until it has been cleaned properly.',
    solution:
      'A full NLP pipeline over the Kaggle IMDb 50K dataset. It handles tokenisation, stemming, lemmatisation and stop word removal. It then builds TF-IDF and Bag of Words features and splits the data for training and testing.',
    highlights: [
      '83% accuracy using a Naive Bayes classifier',
      'Measured accuracy, precision, recall and F1 rather than accuracy on its own',
      'A confusion matrix showed the model was strongest on negative sentiment',
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
      'Sorting MRI scans by disease stage is a hard visual task. Rules written by hand do not cope with it well.',
    solution:
      'A convolutional neural network trained on a cleaned MRI dataset. A Flask interface takes an uploaded scan and returns a prediction.',
    highlights: [
      'Checked against acceptance criteria that were written before development started',
      'Built the preprocessing and augmentation pipeline before any training began',
      'This is an academic prototype. It is not clinically validated and not approved for diagnosis.',
    ],
    stack: ['Python', 'TensorFlow', 'CNN', 'Flask', 'NumPy'],
    github: null,
    demo: null,
    featured: true,
  },
  {
    slug: 'file-scanner',
    title: 'File Scanner Mobile Application',
    context: 'PKINK Industrial Training',
    year: '2024',
    category: 'Mobile',
    problem:
      'Staff had to walk to a counter to ask where a file was. There was no way to check a record remotely.',
    solution:
      'A cross platform mobile app built from three modules. It covers login, QR and barcode scanning and profile management. A REST API connects it to a MySQL database.',
    highlights: [
      'Taught myself Flutter and Dart during the placement and rebuilt an MIT App Inventor prototype properly',
      'Tested the REST API integration in Dart before rollout',
      'Traced a bug that had run for days across all three modules and fixed it',
      'Designed the screens in Figma before writing any code',
    ],
    stack: ['Flutter', 'Dart', 'REST API', 'MySQL', 'XAMPP', 'Figma'],
    github: null,
    demo: null,
    featured: true,
  },

  /* ------------------------- ARCHIVE ------------------------- */
  {
    slug: 'cross-modal-pantun',
    title: 'Cross-Modal Pantun Retrieval Business Case',
    context: 'Software Project Management (CSC575)',
    year: 'Jan 2026',
    category: 'Analysis & Design',
    problem:
      'The team proposed a platform that matches a scanned image to a related Malay pantun. It needed a solid case before anyone would fund it.',
    solution:
      'A full project charter and business case. It sets out the current process, the problem, the proposed solution, the scope and the requirements. It also defines how the value would be measured once the system was live.',
    highlights: [
      'Three year financial model with a budget of RM 60,000 and a net present value of RM 109,755',
      'Return on investment inside 18 months',
      'Targets of 40% faster retrieval and 35% better search accuracy',
      'Work breakdown structure, Gantt chart, risk register and a review of four competitor segments',
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
      'The faculty ran final year project allocation over email and paper. Nobody could see which supervisors were already taken.',
    solution:
      'A web system built for three roles. Administrators, supervisors and students each get their own view. It handles supervisor requests, proposal submission, listings and profiles on a normalised schema.',
    highlights: ['Wrote the objectives, the site map, the interface design and the database documentation'],
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    slug: 'library-management-system',
    title: '5M Library Management System',
    context: 'Information System Development (ISP250). Role: System Analyst',
    year: '2023',
    category: 'Analysis & Design',
    problem:
      'A team of five needed a written specification they could test against before anyone started coding.',
    solution:
      'I worked as the system analyst and supervisor. I chose the solution the team would build and signed off all the project documentation.',
    highlights: [
      'Wrote the responsibilities matrix, the feasibility study, the objectives and the user requirements',
      'Specified the functional and non functional requirements and drew the data flow diagrams',
      'Wrote the test cases and traced each one back to a requirement',
    ],
    stack: ['Requirements Analysis', 'Feasibility Study', 'DFD', 'Test Case Design'],
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
      'The cafe took orders on paper. Records were duplicated and there was no way to query sales.',
    solution:
      'A relational database for the ordering process. I drew the entity relationship diagram and the dependency diagram, then normalised the schema to third normal form in Oracle SQL Developer.',
    highlights: [
      'Wrote ten SQL queries covering joins, aggregation and sub queries against the live schema',
      'Built the data model in Oracle SQL Developer Data Modeler',
    ],
    stack: ['Oracle SQL Developer', 'SQL', 'ERD', '3NF Normalisation', 'PHP'],
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
    title: 'CCNA 200-301 Implementing and Administering Cisco Solutions',
    issuer: 'Nexperts Academy Sdn Bhd',
    date: '11 to 25 Aug 2023',
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
    title: 'Sharing Session with a Computer Science Expert on AI in Real-World Applications',
    issuer: 'Faculty of Computer and Mathematical Sciences, UiTM Terengganu',
    date: '7 Jan 2026',
    tier: 'Technical & AI',
  },
  {
    title: 'Online Database for Literature (Information Literacy Skill Module)',
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
    title: 'Seminar MUET: Tips on Speaking and Writing',
    issuer: 'DiPAC, UiTM Cawangan Kelantan',
    date: '12 Jun 2023',
    tier: 'Academic Skills',
  },
  {
    title: 'Career Guide for Undergraduates: The First Step Towards Success After Graduation',
    issuer: 'Alumni Committee and Modelitic Club, UiTM Terengganu',
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

export type TargetRole = {
  title: string;
  /** lucide-react icon name, resolved in components/Roles.tsx */
  icon: 'Code2' | 'ChartNoAxesColumn' | 'Server' | 'ShieldCheck' | 'ClipboardList' | 'Workflow';
  blurb: string;
  evidence: string[];
};

export const targetRoles: TargetRole[] = [
  {
    title: 'Software Developer',
    icon: 'Code2',
    blurb:
      'I build web and mobile systems end to end. Next.js and React on the front, Prisma and REST APIs behind them.',
    evidence: ['Change Request System', 'File Scanner app', 'FYP Management System'],
  },
  {
    title: 'Data, Analytics and AI',
    icon: 'ChartNoAxesColumn',
    blurb:
      'I clean data, model it and train classifiers. I also check the results properly instead of quoting accuracy on its own.',
    evidence: ['Sentiment analysis at 83%', 'CNN on MRI scans', 'SQL and schema design'],
  },
  {
    title: 'IT Support and Infrastructure',
    icon: 'Server',
    blurb:
      'I spent 14 weeks inside a bank IT service management department. I am CCNA 200-301 certified.',
    evidence: ['Agrobank ITSM placement', 'CCNA 200-301', 'Helpdesk fixes at PKINK'],
  },
  {
    title: 'QA and Security',
    icon: 'ShieldCheck',
    blurb:
      'I write test cases that trace back to a stated requirement, and I unit test every layer before saying something works.',
    evidence: ['Traceable test cases', 'Unit testing across layers', 'Role based access control'],
  },
  {
    title: 'Business Analyst',
    icon: 'ClipboardList',
    blurb:
      'I gather requirements, map how a process actually runs today, and put real numbers behind the business case.',
    evidence: ['5 enhancement projects', 'Business case with NPV', 'As-is process mapping'],
  },
  {
    title: 'Business Systems Analyst',
    icon: 'Workflow',
    blurb:
      'The bridge role. I can write the specification with the business and then build the thing myself.',
    evidence: ['URS documentation', 'ERD and 3NF design', 'Gap analysis'],
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
    points: ['Graduated with a CGPA of 3.51', "Dean's List in 3 semesters"],
  },
  {
    period: 'Mar to Jul 2026',
    title: 'Software Development Intern',
    org: 'Agrobank, IT Service Management Department',
    kind: 'work',
    points: [
      'Built a change request system in Next.js and Prisma that replaced a spreadsheet with 24 columns',
      'Added logins with three permission levels so each role saw only its own data',
      'Gathered requirements across five enhancement projects and wrote them up for the delivery team',
    ],
  },
  {
    period: '2025',
    title: 'Programme Leader for the AI and Cybersecurity Webinar Series',
    org: 'UiTM Terengganu',
    kind: 'award',
    points: ['Led four committees covering technical operations, promotion, certification and event delivery'],
  },
  {
    period: 'Sep 2023 to Feb 2024',
    title: 'Mobile Development Intern',
    org: 'Perbadanan Kemajuan Iktisad Negeri Kelantan (PKINK)',
    kind: 'work',
    points: [
      'Taught myself Flutter and Dart during the placement and shipped an app built from three modules',
      'Built a REST API between the app and a MySQL database',
      'Fixed two further bugs in the helpdesk system the organisation used',
    ],
  },
  {
    period: 'Aug 2021 to Jan 2024',
    title: 'Diploma in Computer Science',
    org: 'Universiti Teknologi MARA, Kelantan',
    kind: 'education',
    points: ['CGPA of 3.31', "Dean's List in 2 semesters"],
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#roles', label: 'Roles' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
] as const;
