import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Server, 
  Wrench, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  ChevronLeft,
  Terminal,
  Layers,
  Cpu,
  ArrowUp,
  FileDown,
  Menu,
  X,
  Quote,
  User2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const EXPERIENCE = [
  {
    company: "MeshSquare",
    role: "Full Stack Developer",
    period: "April 20, 2026 – Current",
    location: "Rawalpindi",
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

const SKILLS = [
  {
    category: "Frontend",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
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

const PROJECTS = [
  {
    title: "High-Performance EPOS System",
    category: "Full Stack / POS",
    description: "A scalable Electronic Point of Sale system featuring real-time inventory sync, automated reporting, and multi-module management.",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    github: "https://github.com/KashifKhan456",
    demo: "https://smashngrub.10xglobal.co.uk/",
    theme: "from-blue-600/20 to-indigo-600/5",
    accent: "blue"
  },
  {
    title: "Real Estate CRM",
    category: "SaaS / Management",
    description: "Comprehensive CRM for real estate management with secure RBAC, notifications, and Stripe integrations.",
    tech: ["Laravel", "Stripe", "Google API"],
    github: "https://github.com/KashifKhan456",
    demo: "https://crm10x2.nsolbpo.com/login",
    theme: "from-emerald-600/20 to-teal-600/5",
    accent: "emerald"
  },
  {
    title: "Auto-Parts E-Commerce",
    category: "E-Commerce",
    description: "UAE-based platform for automotive parts featuring advanced search and high-traffic optimization.",
    tech: ["React", "Laravel", "Redux", "Node.js"],
    github: "https://github.com/KashifKhan456",
    demo: "https://shopauto.ae/",
    theme: "from-amber-600/20 to-orange-600/5",
    accent: "amber"
  },
  {
    title: "Speed Auction Platform",
    category: "Real-Time App",
    description: "A fast-paced auction platform built for low latency and high concurrency with Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/KashifKhan456",
    demo: "https://alqaryahauction.com/",
    theme: "from-purple-600/20 to-pink-600/5",
    accent: "purple"
  }
];

const TESTIMONIALS = [
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
  const [activeTab, setActiveTab] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = window.innerWidth < 768 ? container.clientWidth * 0.8 : 450;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
    <div className="min-h-screen selection:bg-blue-500/30">
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
          KASHIF<span className="text-blue-500">.KHAN</span>
        </motion.div>
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map((link) => {
            if (link.type === 'download') {
              return (
                <a 
                  key={link.id} 
                  href="/resume.pdf" 
                  download="Kashif_Khan_Resume.pdf" 
                  className="hidden sm:flex items-center gap-2 hover:text-white transition-colors text-gray-400"
                >
                  <FileDown className="w-4 h-4" />
                  {link.label}
                </a>
              );
            }
            if (link.id === 'contact') {
              return (
                <a 
                  key={link.id}
                  href="mailto:kashif.tech.317@gmail.com" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
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
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full"
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
                        <FileDown className="w-5 h-5 text-blue-500" />
                        {link.label}
                      </a>
                    );
                  }
                  if (link.id === 'contact') {
                    return (
                      <a 
                        key={link.id}
                        href="mailto:kashif.tech.317@gmail.com" 
                        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl text-center font-bold shadow-lg shadow-blue-600/20"
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

      {/* Hero Section - Swiss Editorial Vibe */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505] selection:bg-blue-500 selection:text-white">
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Animated Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full" 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >
          <div className="flex flex-col items-center">
            {/* Typography Section - Replaced with a more humble but powerful intro */}
            <div className="relative w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="relative mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight leading-[1.1] text-white">
                    Crafting <span className="text-blue-500 italic font-serif">intentional</span> digital <br className="hidden md:block" /> 
                    experiences with technical precision.
                  </h1>
                </div>
              </motion.div>
            </div>

            {/* CTAs - Moved Up */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 mb-4 flex flex-col sm:flex-row items-center gap-6 w-full max-w-5xl md:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-4 md:px-10 md:py-5 border border-white/10 text-white font-black uppercase text-[10px] sm:text-[11px] tracking-[0.4em] overflow-hidden rounded-full transition-colors duration-500 hover:text-black flex justify-center items-center"
              >
                <span className="relative z-10">Explore History</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-6 px-12 py-4 md:px-10 md:py-5 bg-blue-600 rounded-full text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
              >
                Connect Now
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Brief Bio & Roles */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl pt-16 gap-12 md:gap-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center md:items-start gap-10"
              >
                <div className="flex flex-col items-center md:items-start max-w-md">
                  <div className="flex items-center gap-3 mb-8 text-blue-500 font-mono text-[10px] uppercase font-black tracking-[0.7em]">
                    Expertise
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl leading-[1.6] tracking-wide text-center md:text-left font-light italic font-serif opacity-90">
                    "I engineer digital ecosystems where high-performance architecture meets 
                    unapologetic visual clarity. Specializing in the intersection of robust backends 
                    and fluid, motion-driven interfaces."
                  </p>
                </div>
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                  {['React', 'Vue', 'Next.js', 'Laravel', 'Node.js'].map((tech) => (
                    <div key={tech} className="px-4 py-2 border border-white/5 rounded-full bg-white/[0.02] text-[9px] font-bold text-gray-500 uppercase tracking-widest hover:border-blue-500/50 hover:text-white transition-all cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Social Dock - Fixed to persist on scroll, horizontal on mobile - HIDDEN ON MOBILE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="fixed hidden md:flex right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-8 px-4 py-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full pointer-events-auto shadow-2xl shadow-black/50"
        >
          {/* Subtle glow effect inside dock */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-blue-500/10 opacity-30 rounded-full" />
          
          <motion.a 
            href="https://github.com/KashifKhan456" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            className="text-gray-400 transition-colors cursor-pointer relative z-10"
          >
            <Github size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/kashif-khan456" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            className="text-gray-400 transition-colors cursor-pointer relative z-10"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a 
            href="mailto:kashif.tech.317@gmail.com" 
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            className="text-gray-400 transition-colors cursor-pointer relative z-10"
          >
            <Mail size={18} strokeWidth={1.5} />
          </motion.a>
          <motion.a 
            href="https://wa.me/923172296768" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            className="text-gray-400 transition-colors cursor-pointer relative z-10"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </header>

      {/* About Section - Editorial Style */}
      <section id="about" className="section-padding bg-black scroll-mt-20 overflow-hidden text-left">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-12"
            >
              <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] uppercase font-black tracking-[0.5em]">
                <span className="w-12 h-px bg-blue-500" />
                Engineering Excellence
              </div>
              
              <h2 className="text-5xl md:text-8xl font-medium text-white leading-[0.9] tracking-tighter text-left">
                Crafting robust <br />
                <span className="text-gray-500 italic font-serif">digital ecosystems</span>
              </h2>
              
              <div className="max-w-xl space-y-8 text-gray-400 text-xl font-light leading-relaxed text-left">
                <p>
                  As a Software Engineer with 3+ years of experience, I focus on the intersection of deep technical logic and fluid user experiences.
                </p>
                <p>
                  I specialize in building scalable systems using the JavaScript ecosystem and Laravel. My architectural approach is rooted in simplicity, performance, and long-term maintainability.
                </p>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-white/5 backdrop-blur-md flex items-center justify-center text-[10px] font-black pointer-events-none">
                      {i === 1 ? 'JS' : i === 2 ? 'TS' : 'PH'}
                    </div>
                  ))}
                </div>
                <div className="text-xs uppercase font-bold tracking-widest text-gray-600">
                  Currently based in London, UK
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <div className="relative group">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
                <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-[3rem] lg:rounded-[4rem] border border-white/5 transition-all duration-700 shadow-2xl shadow-blue-500/10 bg-gray-900">
                  <img 
                    src="/profile.jpg" 
                    alt="Kashif Khan" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1492562080023-ab3dbdf9bbbd?fit=crop&w=800&q=80`;
                    }}
                  />
                </div>
                <div className="absolute top-8 -right-8 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-[8px] font-black uppercase tracking-tighter text-gray-500">Years Exp.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - High-Density Technical Grid */}
      <section id="skills" className="section-padding bg-[#030303] border-y border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-0">
          <div className="mb-32">
            <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-8">
              <span className="w-12 h-px bg-blue-500" />
              Technical Stack
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">
              Capabilities<span className="text-editorial text-gray-500 lowercase">.</span>
            </h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed pl-2 border-l border-white/10">
              Professional specializations across the modern web stack, from high-performance interfaces to resilient infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black p-8 sm:p-10 md:p-12 space-y-8 sm:space-y-10 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono text-blue-500">
                    0{idx + 1}
                  </div>
                  <Terminal className="w-4 h-4 text-gray-800 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <div className="text-left">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8 border-l border-blue-500 pl-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-4">
                    {skill.items.map(item => (
                      <li key={item} className="flex items-center gap-4 group/item">
                        <div className="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-blue-500 transition-colors shrink-0" />
                        <span className="text-gray-400 font-medium group-hover/item:text-white transition-colors cursor-default">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Clean Professional Timeline */}
      <section id="experience" className="section-padding bg-[#050505] scroll-mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-left">
            <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-6">
              <span className="w-12 h-px bg-blue-500" />
              Professional Path
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Experience<span className="text-blue-500">.</span>
            </h2>
            <p className="text-gray-500 max-w-xl font-light leading-relaxed text-lg">
              A chronological history of technical leadership, architectural decisions, and product-focused engineering.
            </p>
          </div>

          <div className="space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.company + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left group"
              >
                {/* Meta Information */}
                <div className="md:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-500" />
                    <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-black">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Role & Contributions */}
                <div className="md:col-span-8">
                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/[0.03] transition-colors duration-500">
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                      <h4 className="text-xl md:text-2xl font-bold text-white italic font-serif">
                        {exp.role}
                      </h4>
                      <Briefcase className="w-5 h-5 text-gray-700 group-hover:text-blue-500 transition-colors" />
                    </div>
                    
                    <ul className="space-y-6">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex gap-4 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10 mt-2.5 shrink-0 group-hover/item:bg-blue-500 transition-colors" />
                          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed group-hover/item:text-gray-200 transition-colors">
                            {task}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Wide Bento Layout */}
      <section id="projects" className="section-padding bg-[#050505] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] uppercase font-black tracking-[0.5em]">
                <span className="w-12 h-px bg-blue-500" />
                Curated Gallery
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-medium text-white tracking-tighter leading-none lowercase italic font-serif">
                Featured <span className="text-gray-500 not-italic font-sans font-black uppercase">Projects.</span>
              </h2>
            </div>
            <p className="max-w-xs text-gray-500 text-sm font-light leading-relaxed">
              A selection of high-performance architectural systems and complex front-end implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col min-h-[500px] ${
                  idx === 0 || idx === 3 ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5'
                } hover:border-blue-500/20 transition-all duration-700`}
              >
                {/* Visual Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                
                <div className="relative z-10 flex flex-col h-full p-6 sm:p-12 text-left">
                  <div className="flex justify-between items-start mb-auto">
                    <div className="space-y-2">
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex gap-3">
                       <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-600 transition-all">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-600 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-20 space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase md:grayscale group-hover:grayscale-0 transition-all duration-700">
                      {project.title.split(' ').map((word, i) => i === 0 ? <span key={i}>{word} </span> : <span key={i} className="text-gray-600 md:group-hover:text-gray-400 transition-colors">{word} </span>)}
                    </h3>
                    <p className="max-w-md text-gray-500 text-lg font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-12 mt-12 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-4">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[9px] font-mono font-black uppercase tracking-widest text-blue-500/60 group-hover:text-blue-500 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-blue-500 transition-colors">
                      Open <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-bg-dark border-b border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 px-4 sm:px-0 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-500 font-bold tracking-widest text-xs uppercase mb-3">
                <div className="w-8 h-[1px] bg-amber-500" />
                Testimonials
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                What People <span className="text-amber-500">Say</span>
              </h2>
            </div>
            <p className="max-w-xs text-gray-400 text-sm font-light leading-relaxed">
              Feedback from colleagues and partners I've worked with throughout my career.
            </p>
          </div>

          <div className="relative px-4 sm:px-0">
            {TESTIMONIALS.length > 1 && (
              <div className="flex md:absolute md:-top-24 right-0 gap-3 mt-8 md:mt-0 justify-center md:justify-start">
                <button 
                  onClick={() => scrollTestimonials('left')}
                  className="p-3 glass rounded-full hover:bg-amber-500/10 hover:text-amber-500 transition-all border border-white/5 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollTestimonials('right')}
                  className="p-3 glass rounded-full hover:bg-amber-500/10 hover:text-amber-500 transition-all border border-white/5 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div 
              ref={scrollContainerRef}
              className={`${TESTIMONIALS.length > 1 ? 'flex overflow-x-auto pb-12 gap-4 md:gap-8 no-scrollbar snap-x snap-mandatory scroll-smooth' : 'grid grid-cols-1 md:grid-cols-3 gap-8'} px-1`}
            >
              {TESTIMONIALS.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative glass p-6 sm:p-10 rounded-3xl group border border-white/5 hover:border-amber-500/20 transition-all duration-500 flex flex-col shrink-0 ${
                    TESTIMONIALS.length > 1 
                      ? 'w-[85vw] md:w-[450px] snap-center' 
                      : 'w-full'
                  }`}
                >
                  <Quote className="absolute top-8 right-10 w-16 h-16 text-amber-500/5 group-hover:text-amber-500/10 transition-colors pointer-events-none" />
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-white/90 italic mb-10 relative z-10 leading-relaxed text-lg md:text-xl font-light whitespace-normal overflow-visible">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 shrink-0">
                      <span className="text-amber-400 font-bold text-xl">{testimonial.name[0]}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-bold text-lg tracking-tight group-hover:text-amber-400 transition-colors truncate">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest shrink-0">{testimonial.title}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full shrink-0" />
                        <span className="text-gray-500 text-[10px] font-medium truncate">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {TESTIMONIALS.length > 3 && (
              <div className="flex justify-center gap-2 mt-8 md:hidden">
                {TESTIMONIALS.map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Education & About */}
      <section id="contact" className="section-padding bg-bg-card/30 border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white">University of Engineering and Technology Mardan</h3>
              <p className="text-blue-400 mb-2">Bachelor of Computer Software Engineering</p>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>Mardan, Pakistan</span>
                <span>2020 – 2024</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-400" />
              Ready to Innovate
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Thrives in collaborative environments and takes a proactive, ownership-driven approach 
              to delivering software that meets both user needs and business goals. Recognized 
              for rapidly adapting to evolving tech stacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="mailto:kashif.tech.317@gmail.com" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> <span className="truncate">kashif.tech.317@gmail.com</span>
              </a>
              <a href="tel:+923172296768" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> +92 3172296768
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-8 md:hidden">
          <a href="https://github.com/KashifKhan456" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kashif-khan456" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kashif.tech.317@gmail.com" className="text-gray-500 hover:text-white">
            <Mail size={20} />
          </a>
          <a href="https://wa.me/923172296768" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <MessageCircle size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kashif Khan. All Right Reserved.</p>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[60] bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-500/40 hover:bg-blue-500 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
      <SpeedInsights />
    </div>
  );
}
