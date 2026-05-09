import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code2, 
  Server, 
  Wrench, 
  GraduationCap, 
  Terminal,
  ArrowUp,
  FileDown,
  Menu,
  X,
  Quote,
  ArrowRight,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { useState, useEffect, useRef, ReactNode } from 'react';
import CommandCenter from './components/CommandCenter';

// --- Types ---

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

interface Skill {
  category: string;
  icon: ReactNode;
  items: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  tasks: string[];
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

// --- Components ---

function Tooltip({ children, text, className, position = "top" }: { children: ReactNode; text: string; className?: string; position?: "top" | "bottom"; key?: string | number }) {
  const [isVisible, setIsVisible] = useState(false);
  const isTop = position === "top";

  return (
    <div 
      className={`relative ${className || "flex items-center"}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isTop ? 5 : -5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute left-1/2 -translate-x-1/2 ${
              isTop ? "bottom-full mb-3" : "top-full mt-3"
            } px-3 py-1.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap z-[100] shadow-xl pointer-events-none`}
          >
            {text}
            {/* Arrow */}
            <div className={`absolute left-1/2 -translate-x-1/2 border-[6px] border-transparent ${
              isTop ? "top-full border-t-white" : "bottom-full border-b-white"
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "MeshSquare",
    role: "Full Stack Developer",
    period: "April 20, 2026 – Current",
    location: "Rawalpindi, Pakistan",
    tasks: [
      "Leading the development of DocHyve, a specialized medical billing platform designed to streamline healthcare financial operations.",
      "Architecting complex billing workflows and claim processing systems to improve accuracy and reduce administrative overhead.",
      "Implementing secure, HIPAA-compliant data handling and integration with healthcare provider systems.",
      "Optimizing front-end performance for data-intensive billing dashboards using React and advanced state management."
    ]
  },
  {
    company: "Goritmi Pvt Ltd",
    role: "Senior Developer | Team Lead",
    period: "Sept 1, 2025 – March 31, 2026",
    location: "Peshawar, Pakistan",
    tasks: [
      "Led a cross-functional development team in architecting and delivering a scalable, high-performance EPOS system using Laravel, Vue.js, and Tailwind CSS.",
      "Architected and implemented key modules, including POS order management, cashier and shift tracking, promotions and discounts.",
      "Built real-time customer view and live order updates, enhancing user engagement and operational efficiency.",
      "Integrated third-party services including Stripe, SendGrid, and AWS S3.",
      "Optimized database performance through efficient indexing, caching, and query tuning."
    ]
  },
  {
    company: "Cloud Rexpo",
    role: "Laravel Developer",
    period: "May 14, 2025 – 30 Aug, 2025",
    location: "Rawalpindi, Pakistan",
    tasks: [
      "Contributed to the development of a Real State CRM system built with Laravel.",
      "Collaborated with senior developers to debug complex issues and refactor legacy code.",
      "Engineered a secure user role-based access control (RBAC) system.",
      "Introduced real-time notifications, improving operational transparency."
    ]
  },
  {
    company: "Techinn360",
    role: "Full Stack Developer",
    period: "June 15, 2024 – May 2025",
    location: "Rawalpindi, Pakistan",
    tasks: [
      "Leveraged full-stack expertise (Laravel, Vue.js, React) for an e-commerce platform and a real-time speed auction application.",
      "Ensured compliance with Web Content Accessibility Guidelines (WCAG) 2.2.",
      "Applied Test-Driven Development (TDD) practices to deliver high-quality code.",
      "Enhanced team collaboration through Agile methodologies like Scrum."
    ]
  },
  {
    company: "TriTech Soft Solutions",
    role: "Junior Laravel Developer",
    period: "July 10, 2023 – August 2024",
    location: "Mardan, Pakistan",
    tasks: [
      "Developed and maintained RESTful APIs for a CRM system.",
      "Worked extensively with databases, JavaScript, React.js, Vue.js, and Laravel.",
      "Utilized Git version control for seamless collaboration."
    ]
  }
];

const SKILLS: Skill[] = [
  {
    category: "Frontend",
    icon: <Code2 className="w-5 h-5 text-brand" />,
    items: ["JavaScript", "React.js", "Redux", "React Query", "Vue.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    items: ["Laravel", "SQL", "Node.js", "Express.js", "MongoDB", "PHP"]
  },
  {
    category: "Developer Tools",
    icon: <Wrench className="w-5 h-5 text-purple-400" />,
    items: ["Git/GitHub", "VS Code", "Postman", "AWS", "Heroku", "Docker (Basics)"]
  },
  {
    category: "Other Skills",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    items: ["RESTful APIs", "WCAG 2.2", "TDD", "Agile/Scrum", "CI/CD", "Postman"]
  }
];

const PROJECTS: Project[] = [
  {
    title: "High-Performance EPOS System",
    category: "Full Stack / POS",
    problem: "Multi-outlet retail businesses were struggling with fragmented inventory and slow reporting across branches.",
    solution: "Architected a real-time synchronized POS ecosystem with a resilient Laravel backend and responsive Vue.js frontend.",
    impact: "Boosted operational efficiency by 40% and enabled instant inventory visibility for 20+ store locations.",
    description: "A scalable Electronic Point of Sale system featuring real-time inventory sync, automated reporting, and multi-module management.",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS S3", "Stripe"],
    github: "https://github.com/KashifKhan456",
    demo: "https://smashngrub.10xglobal.co.uk/"
  },
  {
    title: "Real Estate CRM SaaS",
    category: "SaaS / Management",
    problem: "Real estate firms lacked an integrated system for lead tracking, property management, and automated client billing.",
    solution: "Developed a multi-tenant SaaS platform with granular RBAC, Stripe subscription integration, and internal notification engines.",
    impact: "Streamlined lead management for 500+ active listings, reducing response time by 60%.",
    description: "Comprehensive CRM for real estate management with secure RBAC, notifications, and Stripe integrations.",
    tech: ["Laravel", "Stripe", "Google API", "PostgreSQL"],
    github: "https://github.com/KashifKhan456",
    demo: "https://crm10x2.nsolbpo.com/login"
  },
  {
    title: "Auto-Parts E-Commerce",
    category: "E-Commerce",
    problem: "UAE automotive retailers needed a high-traffic platform to handle complex parts searching without performance lag.",
    solution: "Built an optimized Redux-driven frontend and a robust Laravel API capable of handling tens of thousands of SKUs.",
    impact: "Handled 10k+ monthly active users with sub-second page loads and zero downtime during peak sales.",
    description: "UAE-based platform for automotive parts featuring advanced search and high-traffic optimization.",
    tech: ["React", "Laravel", "Redux", "Node.js"],
    github: "https://github.com/KashifKhan456",
    demo: "https://shopauto.ae/"
  },
  {
    title: "Speed Auction Platform",
    category: "Real-Time App",
    problem: "Traditional auction sites had high latency, leading to 'sniping' issues and unfair bidding advantages.",
    solution: "Implemented a low-latency event-driven architecture using Socket.io and Node.js for instantaneous price updates.",
    impact: "Reduced bidding latency to <100ms, enabling fair, high-frequency competition for rare assets.",
    description: "A fast-paced auction platform built for low latency and high concurrency with Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/KashifKhan456",
    demo: "https://alqaryahauction.com/"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Kashif is an exceptional developer who consistently delivers high-quality code. His ability to lead a team and architect complex systems is truly impressive.",
    name: "Ahmed Hassan",
    title: "CTO",
    company: "Goritmi Pvt Ltd"
  },
  {
    quote: "Working with Kashif was a pleasure. He has a deep understanding of both frontend and backend technologies and always finds creative solutions to technical challenges.",
    name: "Sara Ahmed",
    title: "Project Manager",
    company: "Techinn360"
  },
  {
    quote: "Kashif transformed our legacy systems into modern, scalable applications. His dedication to best practices and performance optimization is top-notch.",
    name: "Imran Khan",
    title: "Founder",
    company: "Cloud Rexpo"
  },
  {
    quote: "Kashif's expertise in Laravel and React is exceptional. He was able to grasp our project requirements almost instantly and delivered a robust solution ahead of schedule.",
    name: "Zainab Malik",
    title: "Senior Developer",
    company: "InnovateTech"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };

    // Scroll Spy Observer
    const sections = ['hero', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(el);
      return observer;
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(o => o?.disconnect());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Resume', id: 'resume', type: 'download' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen selection:bg-brand/30">
      {/* Header / Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      } px-6 md:px-12 flex justify-between items-center`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          KASHIF<span className="text-brand">.KHAN</span>
        </motion.div>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map((link) => {
            if (link.type === 'download') {
              return (
                <Tooltip key={link.id} text="Download Resume" position="bottom">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 hover:text-white transition-colors text-gray-400"
                  >
                    <FileDown className="w-4 h-4" />
                    {link.label}
                  </a>
                </Tooltip>
              );
            }
            if (link.id === 'contact') {
              return (
                <a 
                  key={link.id}
                  href="mailto:kashif.tech.317@gmail.com" 
                  className="px-4 py-2 bg-brand text-white rounded-full hover:bg-brand/80 transition-all shadow-lg shadow-brand/20"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`relative px-1 py-1 transition-colors ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-bg-card border-l border-white/10 z-[101] md:hidden shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-display font-bold">MENU</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  if (link.type === 'download') {
                    return (
                      <a 
                        key={link.id} 
                        href="/resume.pdf" 
                        download="Kashif_Khan_Resume.pdf" 
                        className="flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5"
                      >
                        <FileDown className="w-5 h-5 text-brand" />
                        {link.label}
                      </a>
                    );
                  }
                  if (link.id === 'contact') {
                    return (
                      <a 
                        key={link.id}
                        href="mailto:kashif.tech.317@gmail.com" 
                        className="mt-4 px-6 py-3 bg-brand text-white rounded-xl text-center font-bold shadow-lg shadow-brand/20"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className={`text-lg transition-colors py-2 border-b border-white/5 ${activeSection === link.id ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Technical Minimalism */}
      <header id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark selection:bg-brand/30 selection:text-white">
        {/* Modern Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-brand font-mono text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-brand/30" />
                Full-Stack Software Engineer
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">scalable</span> SaaS systems.
              </h1>

              <p className="text-lg md:text-xl text-text-dim leading-relaxed max-w-2xl mb-12">
                I specialize in building robust, high-performance web applications with the MERN stack and Laravel.
                Focused on delivering clean architecture and measurable business impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  View Selected Work
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-bg-card border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>

            {/* Tech Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                { label: "Frontend", items: "React, Next.js, Vue" },
                { label: "Backend", items: "Node.js, Laravel, PHP" },
                { label: "Database", items: "PostgreSQL, MongoDB, SQL" },
                { label: "DevOps", items: "AWS, Docker, CI/CD" }
              ].map((group) => (
                <div key={group.label} className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand font-bold">{group.label}</span>
                  <span className="text-sm text-text-dim font-medium">{group.items}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Vertical Social Dock - Fixed to persist on scroll, horizontal on mobile - HIDDEN ON MOBILE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="fixed hidden md:flex right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-8 px-4 py-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full pointer-events-auto shadow-2xl shadow-black/50"
        >
          {/* Subtle glow effect inside dock */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-brand/10 opacity-30 rounded-full" />
          
          <Tooltip text="GitHub Profile">
            <motion.a 
              href="https://github.com/KashifKhan456" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: 'var(--color-brand)' }}
              className="text-gray-400 transition-colors cursor-pointer relative z-10"
            >
              <Github size={18} strokeWidth={1.5} />
            </motion.a>
          </Tooltip>
          <Tooltip text="LinkedIn Profile">
            <motion.a 
              href="https://www.linkedin.com/in/kashif-khan456" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: 'var(--color-brand)' }}
              className="text-gray-400 transition-colors cursor-pointer relative z-10"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </motion.a>
          </Tooltip>
          <Tooltip text="Send Email">
            <motion.a 
              href="mailto:kashif.tech.317@gmail.com" 
              whileHover={{ scale: 1.1, color: 'var(--color-brand)' }}
              className="text-gray-400 transition-colors cursor-pointer relative z-10"
            >
              <Mail size={18} strokeWidth={1.5} />
            </motion.a>
          </Tooltip>
          <Tooltip text="WhatsApp Me">
            <motion.a 
              href="https://wa.me/923172296768" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: 'var(--color-brand)' }}
              className="text-gray-400 transition-colors cursor-pointer relative z-10"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
            </motion.a>
          </Tooltip>
        </motion.div>
      </header>

      {/* About & Skills Section - Technical Focus */}
      <section id="skills" className="py-24 bg-bg-dark scroll-mt-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="w-8 h-px bg-brand/30" />
                  Engineering Prowess
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                  Crafting robust <br />
                  <span className="text-text-dim">digital ecosystems.</span>
                </h2>
                <div className="space-y-6 text-text-dim text-lg leading-relaxed max-w-md">
                  <p>
                    With 3+ years of professional experience, I focus on the intersection of technical performance and scalable architecture.
                  </p>
                  <p>
                    Specializing in full-stack JavaScript and Laravel, I build systems that are high-performing, secure, and maintainable.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-bg-card border border-white/5 hover:border-brand/30 transition-all group"
                >
                  <div className="mb-6 p-3 bg-brand/10 rounded-xl w-fit group-hover:bg-brand transition-colors">
                    {idx === 0 ? <Code2 className="w-6 h-6 text-brand group-hover:text-white" /> :
                     idx === 1 ? <Server className="w-6 h-6 text-brand group-hover:text-white" /> :
                     idx === 2 ? <Wrench className="w-6 h-6 text-brand group-hover:text-white" /> :
                     <Terminal className="w-6 h-6 text-brand group-hover:text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-xs font-medium text-text-dim group-hover:text-white transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Minimalist Timeline */}
      <section id="experience" className="py-24 bg-bg-card/30 scroll-mt-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 text-brand font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Career Progression
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Professional Experience</h2>
            </div>

            <div className="space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.company + idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 sm:pl-12 border-l border-white/10 group pb-12 last:pb-0"
                >
                  <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-brand group-hover:ring-4 ring-brand/20 transition-all" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">{exp.company}</h3>
                      <p className="text-brand font-medium text-sm mt-1">{exp.role} • <span className="text-text-dim font-normal">{exp.location}</span></p>
                    </div>
                    <span className="text-xs font-mono font-bold text-text-dim px-3 py-1 bg-white/5 rounded-full whitespace-nowrap self-start sm:self-center uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex gap-4 text-text-dim leading-relaxed">
                        <span className="text-brand mt-1.5 shrink-0">•</span>
                        <p className="text-base sm:text-lg">{task}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Card Grid */}
      <section id="projects" className="py-24 bg-bg-dark scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Selected Work
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Featured Systems</h2>
              <p className="text-text-dim text-lg leading-relaxed">
                Production-scale platforms architected for performance, security, and measurable business impact.
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-full border border-white/5 text-xs font-bold text-text-dim uppercase tracking-widest">
                Full-Stack
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full border border-white/5 text-xs font-bold text-text-dim uppercase tracking-widest">
                SaaS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col bg-bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-brand/40 transition-all duration-500"
              >
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg text-text-dim hover:text-white hover:bg-white/10 transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg text-text-dim hover:text-white hover:bg-white/10 transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-dim leading-relaxed mb-8 text-lg font-medium">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 pt-8 border-t border-white/5">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-bold mb-3">Core Problem</h4>
                      <p className="text-sm text-text-dim leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand font-bold mb-3">Key Impact</h4>
                      <p className="text-sm text-white font-semibold leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-text-dim uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Clean Grid */}
      <section id="testimonials" className="py-24 bg-bg-dark border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Social Proof
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Professional Endorsements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-bg-card border border-white/5 flex flex-col group hover:border-brand/30 transition-all"
              >
                <Quote className="w-10 h-10 text-brand/20 mb-6 group-hover:text-brand transition-colors" />
                <p className="text-text-dim leading-relaxed mb-8 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-text-dim uppercase tracking-widest font-bold mt-0.5">
                      {testimonial.title} @ <span className="text-brand/80">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Minimalist */}
      <section id="education" className="py-24 bg-bg-card/30 border-t border-white/5 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-brand/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-brand" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Academic History</h2>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-white/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">University of Engineering and Technology Mardan</h3>
                  <p className="text-brand font-medium">Bachelor of Computer Software Engineering</p>
                </div>
                <span className="text-xs font-mono font-bold text-text-dim px-3 py-1 bg-white/5 rounded-full self-start md:self-center uppercase tracking-widest">
                  2020 – 2024
                </span>
              </div>
              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim font-bold block mb-1">Location</span>
                  <span className="text-white font-medium">Mardan, Pakistan</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-dim font-bold block mb-1">Status</span>
                  <span className="text-brand font-bold">Graduated with Distinction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Innovate / Contact - Minimalist */}
      <section id="contact" className="py-24 bg-bg-dark border-t border-white/5 scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-brand font-mono text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-10 leading-[0.9]">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-300">exceptional.</span>
            </h2>
            <p className="text-text-dim text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              I'm always open to discussing new projects, technical challenges, or strategic partnerships.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="mailto:kashif.tech.317@gmail.com"
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 px-8 py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </motion.a>
              <motion.a
                href="tel:+923172296768"
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Me
              </motion.a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-8 md:hidden">
          <Tooltip text="GitHub">
            <a href="https://github.com/KashifKhan456" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <Github size={20} />
            </a>
          </Tooltip>
          <Tooltip text="LinkedIn">
            <a href="https://www.linkedin.com/in/kashif-khan456" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <Linkedin size={20} />
            </a>
          </Tooltip>
          <Tooltip text="Email">
            <a href="mailto:kashif.tech.317@gmail.com" className="text-gray-500 hover:text-white">
              <Mail size={20} />
            </a>
          </Tooltip>
          <Tooltip text="WhatsApp">
            <a href="https://wa.me/923172296768" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <MessageCircle size={20} />
            </a>
          </Tooltip>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kashif Khan. All Right Reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60]">
            <Tooltip text="Back to Top">
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                onClick={scrollToTop}
                className="bg-brand text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-brand/40 hover:bg-brand transition-all group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </Tooltip>
          </div>
        )}
      </AnimatePresence>

      <CommandCenter />
    </div>
  );
}
