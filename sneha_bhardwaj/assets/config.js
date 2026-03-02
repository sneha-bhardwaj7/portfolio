/**
 * ════════════════════════════════════════════════════════
 *  config.js — Central configuration for Sneha Bhardwaj's portfolio
 *  Edit this file to update all site content.
 * ════════════════════════════════════════════════════════
 */

/* ── Personal Info ── */
const CONFIG_PERSONAL = {
    name: 'Sneha Bhardwaj',
    tagline: 'Fullstack Developer',
    location: 'Roorkee, India',
    birthday: '',
    email: 'snehabhardwaj083@gmail.com',
    phone: '+91 7209547221',
    website: 'https://portfolio-207.vercel.app/',
    avatar: 'https://github.com/sneha-bhardwaj7.png',
    roles: [
        'Fullstack Developer',
        'MERN Stack Specialist',
        'AI Integration Developer',
        'Problem Solver',
    ],
};

/* ── Socials ── */
const CONFIG_SOCIALS = [
    { icon: 'fab fa-github', url: 'https://github.com/sneha-bhardwaj7', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/sneha-bhardwaj-764b38290/', label: 'LinkedIn' },
    { icon: 'fas fa-code', url: 'https://leetcode.com/u/snehabhardwaj083/', label: 'LeetCode' },
    { icon: 'fas fa-globe', url: 'https://portfolio-207.vercel.app/', label: 'Website' },
];

/* ── Navigation ── */
const CONFIG_NAV = [
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file-lines' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { id: 'mywork', label: 'Certifications', icon: 'fas fa-certificate' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-paper-plane' },
];

/* ── Stats ── */
const CONFIG_STATS = [
    { value: 500, suffix: '+', label: 'DSA Problems Solved' },
    { value: 2, suffix: '+', label: 'Production Projects' },
    { value: 1, suffix: '+', label: 'Year Experience' },
    { value: 15, suffix: '+', label: 'Technical Events' },
];

/* ── Services ── */
const CONFIG_SERVICES = [
    {
        icon: 'fas fa-server',
        title: 'Backend Development',
        desc: 'Building scalable REST APIs using Node.js and Express with JWT authentication and WebSocket integration.',
    },
    {
        icon: 'fas fa-react',
        title: 'Frontend Development',
        desc: 'Developing responsive and interactive UIs using React.js and Tailwind CSS.',
    },
    {
        icon: 'fas fa-database',
        title: 'Database Design',
        desc: 'Efficient database modeling and optimization using MongoDB and MySQL.',
    },
    {
        icon: 'fas fa-brain',
        title: 'AI Integration',
        desc: 'Integrating AI features using OpenAI APIs and LangChain.',
    },
    {
        icon: 'fas fa-cloud',
        title: 'Cloud & Deployment',
        desc: 'Deployment and infrastructure management using AWS (S3, EC2, IAM).',
    },
    {
        icon: 'fas fa-chess',
        title: 'Problem Solving',
        desc: 'Strong foundation in DSA and algorithm optimization.',
    },
];

/* ─────────────────────────────
   EDUCATION
   ───────────────────────────── */
const CONFIG_EDUCATION = [
    {
        date: '2023 — 2027',
        title: 'Quantum University, Roorkee',
        body: 'B.Tech (Computer Science) — CGPA: 8.79',
    },
];

/* ─────────────────────────────
   EXPERIENCE
   ───────────────────────────── */
const CONFIG_EXPERIENCE = [
    {
        date: 'Aug 2024 — Aug 2025',
        title: 'Core Team Member — Google Developer Group (GDG)',
        body: 'Coordinated technical events and workshops, conducted knowledge sessions on full-stack development.',
    },
    {
        date: 'May 2025 — Aug 2025',
        title: 'Backend Developer Intern — Digrows',
        body: 'Architected backend with Node.js/Express.js, JWT auth, REST APIs, chat systems on WebSocket, and scheduling systems.',
    },
    {
        date: 'June 2025 — Sept 2025',
        title: 'Software Developer Intern — Swarajya Digital',
        body: 'Worked on full-stack web development, API integration, and backend development for real-world applications. Collaborated with design teams to convert Figma designs into functional UIs.',
    },
];

/* ─────────────────────────────
   SKILLS
   ───────────────────────────── */
const CONFIG_SKILLS = [
    {
        group: 'Languages',
        chips: ['JavaScript', 'C++', 'Java', 'Python'],
    },
    {
        group: 'Backend',
        chips: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'JWT'],
    },
    {
        group: 'Frontend',
        chips: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
        group: 'Databases',
        chips: ['MongoDB', 'MySQL', 'AWS (S3, EC2, IAM)'],
    },
    {
        group: 'Tools',
        chips: ['Git', 'GitHub', 'Postman', 'VS Code', 'CI/CD'],
    },
];

/* ─────────────────────────────
   PROJECTS
   ───────────────────────────── */
const CONFIG_PROJECTS = [
    {
        name: 'Smart Pharmacy Management System',
        cover: null,
        icon: 'fas fa-pills',
        category: 'MERN Stack',
        github: null,
        demo: null,
        description:
            'Full-stack pharmacy management system with role-based access, digital prescriptions, stock alerts, and AI-powered medicine chatbot.',
    },
    {
        name: 'AI-Powered Secure Outpass Approval System',
        cover: null,
        icon: 'fas fa-lock',
        category: 'Full Stack',
        github: null,
        demo: null,
        description:
            'Automated parent approval system using AI and OTP authentication with secure notifications via WhatsApp and email.',
    },
];

/* ─────────────────────────────
   CERTIFICATIONS
   ───────────────────────────── */
const CONFIG_CERTIFICATIONS = [
    {
        title: 'Postman API Fundamentals',
        issuer: 'Postman',
        image: 'postman.png',
        url: 'https://www.postman.com/',
        description:
            'Hands-on experience in REST API testing, automation workflows, and environment handling using Postman.',
    },
    {
        title: 'Generative AI Study Jams',
        issuer: 'Google Developer Groups, Quantum University',
        image: 'genai.png',
        url: 'https://www.google.com/',
        description:
            'Earned 15+ skill badges on GenAI labs, gaining practical exposure to generative AI tools and applications.',
    },
];

/* ── GitHub username ── */
const CONFIG_GITHUB_USER = 'sneha-bhardwaj';

/* ── Google Maps Embed ── */
const CONFIG_MAP_URL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55361.614822005315!2d77.85362601237544!3d29.86136305384657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36e08b35119%3A0x798f5dc25ebd0a72!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1736681777777!5m2!1sen!2sin';