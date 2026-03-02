/**
 * ════════════════════════════════════════════════════════
 *  config.js — Central configuration for Shivam Raj's portfolio
 *  Edit this file to update all site content without touching
 *  index.html, style.css, or script.js.
 * ════════════════════════════════════════════════════════
 */

/* ── Personal Info ── */
const CONFIG_PERSONAL = {
    name: 'Sneha Bhardwaj',
    tagline: 'Fullstack Developer',          // shown under name
    location: 'Roorkee, India',
    birthday: '',
    email: 'snehabhardwaj083@gmail.com',
    phone: '+91 7209547221',
    website: 'https://portfolio-207.vercel.app/',
    avatar: 'https://github.com/sneha-bhardwaj.png',
    // Roles cycled in the typewriter — add/remove freely
    roles: [
        'Fullstack Developer',
        'MERN Stack Specialist',
        'AI Integration Dev',
        'Problem Solver',
    ],
};

/* ── Socials ── */
const CONFIG_SOCIALS = [
    { icon: 'fab fa-github', url: 'https://github.com/sneha-bhardwaj', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/sneha-bhardwaj-764b38290/', label: 'LinkedIn' },
    { icon: 'fas fa-code', url: 'https://leetcode.com/u/snehabhardwaj/', label: 'LeetCode' },
    { icon: 'fas fa-globe', url: 'https://portfolio-207.vercel.app/', label: 'Website' },
];

/* ── Navigation Tabs ── */
const CONFIG_NAV = [
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file-lines' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'mywork', label: 'Certifications', icon: 'fab fa-github' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' },
];

/* ── Stats (About section counters) ── */
const CONFIG_STATS = [
    { value: 500, suffix: '+', label: 'DSA Problems Solved' },
    { value: 2, suffix: '+', label: 'Production Projects' },
    { value: 1, suffix: '', label: 'Year Experience' },
    { value: 15, suffix: '+', label: 'Technical Events' },
];

/* ── Services / What I Do ── */
const CONFIG_SERVICES = [
    { icon: 'fas fa-server', title: 'Backend Development', desc: 'Node.js, Express.js — building scalable REST APIs with JWT authentication and WebSocket support.' },
    { icon: 'fas fa-react', title: 'Frontend Development', desc: 'React.js with Tailwind CSS — creating responsive and interactive user interfaces.' },
    { icon: 'fas fa-database', title: 'Database Design', desc: 'MongoDB, MySQL — efficient data modeling and database optimization.' },
    { icon: 'fas fa-brain', title: 'AI Integration', desc: 'LangChain, OpenAI API — AI-powered features like chatbots and automation.' },
    { icon: 'fas fa-cube', title: 'Cloud & DevOps', desc: 'AWS (S3, EC2, IAM) — deployment and cloud infrastructure management.' },
    { icon: 'fas fa-chess', title: 'Problem Solving', desc: 'DSA Problem Solving — strong algorithmic thinking and optimization.' },
];

/* ────────────────────────────────────────────────────
   RESUME
   ──────────────────────────────────────────────────── */

/* Education — add/remove objects freely */
const CONFIG_EDUCATION = [
    {
        date: '2023 — 2027',
        title: 'Quantum University, Roorkee',
        body: 'B.Tech (Computer Science) — CGPA: 8.79',
    },
];

/* Experience — add/remove objects freely */
const CONFIG_EXPERIENCE = [
    {
        date: 'Aug 2024 — Aug 2025',
        title: 'Core Team Member — Google Developer Group (GDG)',
        body: 'Coordinated technical events and workshops, conducted knowledge sessions on full-stack development.',
    },
    {
        date: 'May 2025 — Aug 2025',
        title: 'Backend Developer Intern — Digrows',
        body: 'Architected backend with Node.js/Express.js, JWT auth, REST APIs, chat systems on WebSocket, and calendar-based scheduling.',
    },
];
June 2025 — Sept 2025',
        title: 'Software Developer Intern — Swarajya Digital',
        body: 'Worked on full-stack web development, API integration, and backend development for real-world applications. Collaborated with design teams to convert Figma designs into functional user interfaces.',
    },
    {
        date: 'Aug 2024 — Aug 2025',
        title: 'Core Team Member — Google Developer Group (GDG) Quantum University',
        body: 'Organized and coordinated 15+ technical events, workshops, and hands-on sessions. Delivered knowledge sessions promoting community learning and developer growth
        items: [
            { name: 'Node.js & Express.js', width: 90 },
            { name: 'REST APIs & WebSocket', width: 85 },
            { name: 'Authentication & Authorization', width: 80 },
        ],
    },
    {
        group: 'Languages & Databases',
        items: [
            { name: 'JavaScript & Python', width: 90 },
            { name: 'MongoDB & MySQL', width: 85 },
            { name: 'Redis & AWS', width: 75 },85 },
            { name: 'REST APIs & WebSocket', width: 85 },
            { name: 'Authentication & Authorization (JWT)', width: 82 },
        ],
    },
    {
        group: 'Languages & Databases',
        items: [
            { name: 'JavaScript, C++, Python, Java', width: 88 },
            { name: 'MongoDB & MySQL', width: 85 },
            { name: 'AWS (S3, EC2, IAM)', width: 70 },
        ],
    },
    {
        group: 'Frontend & Tools',
        items: [
            { name: 'React.js & Tailwind CSS', width: 85 },
            { name: 'HTML5, CSS3, Responsive Design', width: 88 },
            { name: 'Git, GitHub, Postman, CI/CD
        chips: ['JavaScript', 'C++', 'SQL', 'C', 'Python', 'Java'],
    },
    {
        group: 'Backend',
        chips: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'Authentication', 'Authorization', 'JWT'],
    },
    {
        group: 'Frontend',
        chips: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
        group: 'Databases & Management',
        chips: ['MongoDB', 'MySQL', 'SQL', 'Data Modeling', 'Basic AWS (S3, EC2, IAM)'],
    },
    {
        group: 'Tools & Deployment',
        chips: ['Git', 'GitHub', 'Postman', 'VS Code', 'CI/CD Pipeline', 'API Documentation'],
    },
];

/* ────────────────────────────────────────────────────
   PROJECTS
   Each project:
     name        — display title
     cover       — image filename inside assets/images/ (or null)
     icon        — FA class used when no image
     category    — used for filter chip label
     github      — GitHub repo URL  (null to hide GH button)
     demo        — Live demo / try-it URL (null to hide Try button)
     description — short blurb shown on the card
   ──────────────────────────────────────────────────── */
const CONFIG_PROJECTS = [
    {
        name: 'Smart Pharmacy Management System',
        cover: null,
        icon: 'fas fa-pills',
        category: 'MERN Stack',
        github: null,
        demo: null,
        description: 'Full-stack Pharmacy Management System with role-based access for pharmacists and customers. Features include digital prescription handling, real-time stock alerts, and AI-powered medicine chatbot for queries.',
    },
    {
        name: 'AI-Powered Secure Outpass Approval System',
        cover: null,
        icon: 'fas fa-lock',
        category: 'Full Stack',
        github: null,
        demo: null,
        description: 'Automated parent approval system using AI, LangChain for decision-making, and OTP-based authentication. Supports secure notifications via WhatsApp, email, and voice messages.',
    },
];

/* ────────────────────────────────────────────────────
   CERTIFICATIONS
   Each certification:
     title       — certification name
     issuer      — issuing organization
     image       — image filename inside assets/images/
     url         — link to certification or issuer (optional)
     description — short description shown on the card
   ──────────────────────────────────────────────────── */
const CONFIG_CERTIFICATIONS = [
    {
        title: 'Postman API Fundamentals',
        issuer: 'Postman',
        image: 'postman.png',
        url: 'https://www.postman.com/',
        description: 'Gained hands-on experience in REST API testing, automation workflows, environment variables, and request handling with Postman.',
    },
    {
        title: 'Generative AI Study Jams',
        issuer: 'Google Developer Groups, Quantum University',
        image: 'genai.png',
        url: 'https://www.google.com/',
        description: 'Earned 15+ skill badges on GenAI Arcade labs, gaining practical exposure to generative AI tools and applications.',
    },
];

/* ── GitHub username for My Work section ── */
const CONFIG_GITHUB_USER = 'IMSHIVAMRAJ';

/* ── Contact map embed (Google Maps iframe src) ── */
const CONFIG_MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55361.614822005315!2d77.85362601237544!3d29.86136305384657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36e08b35119%3A0x798f5dc25ebd0a72!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1736681777777!5m2!1sen!2sin';
sneha-bhardwaj