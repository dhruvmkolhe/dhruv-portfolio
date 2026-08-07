import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faArrowDown,
  faEnvelope,
  faHeart,
  faDatabase,
  faMicrochip,
  faTerminal,
  faLayerGroup,
  faMugHot,
  faCode,
  faMoon,
  faBaseballBatBall,
  faTv,
  faClapperboard,
  faMusic,
  faLightbulb,
  faGraduationCap,
  faExternalLink,
  faCircleNodes,
  faLaptopCode,
  faFaceSmile,
  faLeaf,
  faFileCode,
  faPalette,
  faBolt,
  faServer,
  faWind,
  faRocket,
  faArrowRightArrowLeft,
  faPaperPlane,
  faBrain,
  faRobot,
  faHardDrive,
  faFileArrowDown,
  faXmark,
  faPrint,
  faMapPin,
  faPhone,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faPython,
  faJsSquare,
  faReact,
  faNodeJs,
  faDocker,
  faFigma,
  faGitAlt,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

// ── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.75, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={delay}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

type ShapeKind = "circle" | "square" | "donut" | "triangle";

function FloatShape({
  className,
  size,
  color,
  delay = 0,
  shape = "circle",
}: {
  className: string;
  size: number;
  color: string;
  delay?: number;
  shape?: ShapeKind;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -14, 0],
        rotate: shape === "square" ? [0, 12, 0] : [0, 4, 0],
      }}
      transition={{
        duration: 5 + delay * 0.7,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {shape === "circle" && (
        <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
      )}
      {shape === "square" && (
        <div className="w-full h-full rounded-lg rotate-12" style={{ backgroundColor: color }} />
      )}
      {shape === "donut" && (
        <div
          className="w-full h-full rounded-full border-[6px]"
          style={{ borderColor: color }}
        />
      )}
      {shape === "triangle" && (
        <svg viewBox="0 0 100 86" className="w-full h-full" fill={color}>
          <polygon points="50,0 100,86 0,86" />
        </svg>
      )}
    </motion.div>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const skills = [
  // Languages & Markup
  { label: "HTML",             icon: faFileCode,            brand: false, color: "#E34F26" },
  { label: "CSS",              icon: faPalette,             brand: false, color: "#1572B6" },
  { label: "JavaScript",       icon: faJsSquare,            brand: true,  color: "#F59E0B" },
  { label: "Python",           icon: faPython,              brand: true,  color: "#3B82F6" },
  { label: "C++",              icon: faMicrochip,           brand: false, color: "#8B5CF6" },
  { label: "SQL",              icon: faDatabase,            brand: false, color: "#EC4899" },
  // Frontend
  { label: "React",            icon: faReact,               brand: true,  color: "#06B6D4" },
  { label: "Next.js",          icon: faLayerGroup,          brand: false, color: "#2C1810" },
  { label: "Svelte",           icon: faBolt,                brand: false, color: "#FF3E00" },
  { label: "Tailwind CSS",     icon: faWind,                brand: false, color: "#38BDF8" },
  { label: "Vite",             icon: faRocket,              brand: false, color: "#646CFF" },
  // Backend
  { label: "Node.js",          icon: faNodeJs,              brand: true,  color: "#22C55E" },
  { label: "Express.js",       icon: faServer,              brand: false, color: "#444444" },
  { label: "FastAPI",          icon: faTerminal,            brand: false, color: "#009688" },
  { label: "REST APIs",        icon: faArrowRightArrowLeft, brand: false, color: "#6366F1" },
  // Databases
  { label: "PostgreSQL",       icon: faHardDrive,           brand: false, color: "#4169E1" },
  { label: "MongoDB",          icon: faLeaf,                brand: false, color: "#47A248" },
  // AI / ML
  { label: "Machine Learning", icon: faCircleNodes,         brand: false, color: "#A78BFA" },
  { label: "Scikit-learn",     icon: faBrain,               brand: false, color: "#F7931E" },
  { label: "Claude",           icon: faRobot,               brand: false, color: "#C95234" },
  // Tools
  { label: "Git",              icon: faGitAlt,              brand: true,  color: "#F97316" },
  { label: "GitHub",           icon: faGithub,              brand: true,  color: "#171717" },
  { label: "Docker",           icon: faDocker,              brand: true,  color: "#2496ED" },
  { label: "Linux",            icon: faLinux,               brand: true,  color: "#E8A800" },
  { label: "Postman",          icon: faPaperPlane,          brand: false, color: "#FF6C37" },
  { label: "Figma",            icon: faFigma,               brand: true,  color: "#C95234" },
];

const projects = [
  {
    icon: faLayerGroup,
    title: "ProjectHub",
    desc: "A community-driven platform where developers showcase projects, receive structured feedback, and build a public portfolio beyond simple repositories.",
    tags: ["Svelte 5", "SvelteKit", "MongoDB", "Three.js"],
    bgClass: "bg-[#FDF0EB]",
    borderClass: "border-[#f0cdc2]",
    iconColor: "#C95234",
    github: "https://github.com/dhruvmkolhe/project-hub",
  },
  {
    icon: faCode,
    title: "CodeX",
    desc: "A browser-based coding workspace combining live collaboration, AI assistance, and multi-language execution into a single developer environment.",
    tags: ["React", "Node.js", "WebSockets", "Docker", "PostgreSQL"],
    bgClass: "bg-[#EDF6EC]",
    borderClass: "border-[#c3dcc2]",
    iconColor: "#6D9E6A",
    github: "https://github.com/dhruvmkolhe/codex-ide",
  },
  {
    icon: faLink,
    title: "LinkForge",
    desc: "A scalable URL management platform with analytics, caching, security controls, and intelligent redirect handling.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    bgClass: "bg-[#FEFAEC]",
    borderClass: "border-[#edd98c]",
    iconColor: "#C9A020",
    github: "https://github.com/dhruvmkolhe/common",
  },
];

const funFacts = [
  { icon: faMugHot,          text: "coffee-powered"      },
  { icon: faCode,            text: "code-builder"        },
  { icon: faMoon,            text: "night-mode brain"    },
  { icon: faBaseballBatBall, text: "cricket enthusiast"  },
  { icon: faTv,              text: "anime explorer"      },
  { icon: faClapperboard,    text: "movie & series lover"},
  { icon: faMusic,           text: "music on repeat"     },
  { icon: faLightbulb,       text: "curiosity driven"    },
  { icon: faGraduationCap,   text: "forever learning"    },
];

const currently = [
  "building small things with code",
  "learning something new every day",
  "exploring web development & AI",
  "watching anime when I need a break",
  "following Formula 1 weekends",
  "enjoying movies, series & storytelling",
  "supporting my favourite sports teams",
  "collecting random knowledge",
  "trying to make ideas real",
];

const socials = [
  { icon: faGithub,   label: "github",   href: "https://github.com/dhruvmkolhe",   brand: true  },
  { icon: faLinkedin, label: "linkedin", href: "https://www.linkedin.com/in/dhruv-kolhe-409706303/", brand: true  },
  { icon: faEnvelope, label: "email",    href: "mailto:davpatal@gmail.com", brand: false },
];

// ── Resume Data ──────────────────────────────────────────────────────────────

const resumeData = {
  name: "Dhruv Kolhe",
  title: "Computer Science Student",
  contact: {
    email: "davpatal@gmail.com",
    location: "India",
    github: "github.com/dhruvmkolhe",
    linkedin: "linkedin.com/in/dhruv-kolhe-409706303",
  },
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Pimpri Chinchwad University",
      period: "2022 – 2026",
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Company Name",
      period: "2024",
      bullets: [
        "Worked on the software development lifecycle from planning to deployment.",
        "Collaborated with cross-functional teams on technical support and problem solving.",
        "Contributed to building and maintaining internal tools and features.",
      ],
    },
    {
      role: "Lab Tech Intern",
      company: "Lab / Institution",
      period: "2023",
      bullets: [
        "Provided technical support and troubleshooting across lab systems.",
        "Assisted in maintaining hardware and software environments.",
      ],
    },
  ],
  projects: [
    {
      name: "ProjectHub",
      stack: "Svelte 5 · SvelteKit · MongoDB · Three.js",
      desc: "Developer-first platform for displaying projects and receiving structured feedback.",
    },
    {
      name: "CodeX",
      stack: "React · Node.js · WebSockets · Docker · PostgreSQL",
      desc: "Collaborative browser-based IDE with real-time editing and multi-language execution.",
    },
    {
      name: "LinkForge",
      stack: "React · Node.js · PostgreSQL · Redis",
      desc: "Production-grade URL management system with analytics and caching.",
    },
  ],
  skills: {
    Languages:  ["HTML", "CSS", "JavaScript", "Python", "C++", "SQL"],
    Frontend:   ["React", "Next.js", "Svelte", "Tailwind CSS", "Vite"],
    Backend:    ["Node.js", "Express.js", "FastAPI", "REST APIs"],
    Databases:  ["PostgreSQL", "MongoDB"],
    "AI / ML":  ["Machine Learning", "Scikit-learn", "Claude AI"],
    Tools:      ["Git", "GitHub", "Docker", "Linux", "Postman", "Figma"],
  },
};

// ── Cover Letter Data ────────────────────────────────────────────────────────

const coverLetterData = {
  name: "Dhruv Kolhe",
  title: "Computer Science Student",
  contact: {
    email: "davpatal@gmail.com",
    location: "India",
    github: "github.com/dhruvmkolhe",
    linkedin: "linkedin.com/in/dhruv-kolhe-409706303",
  },
  paragraphs: [
    "I am a Computer Science student with a genuine passion for building, learning, and creating things that bring ideas to life. I am writing to express my interest in opportunities where I can contribute meaningfully, grow alongside talented people, and make something worth making.",
    "My journey has been shaped by learning through doing. Through personal projects and internships, I have developed hands-on experience across the full stack — from building responsive frontends with React and Svelte, to designing backend APIs with Node.js and FastAPI, to working with databases like PostgreSQL and MongoDB. I have also explored AI and machine learning, and I enjoy using these tools to solve real problems.",
    "Beyond the technical, I care deeply about collaboration, communication, and being a reliable teammate. My internship experience taught me a great deal about the software development lifecycle, technical support, and working effectively in a team — lessons I carry into every project I take on.",
    "I am always trying to improve myself a little bit every day, and I bring that same mindset to my work. I would love the opportunity to bring my curiosity, enthusiasm, and skills to your team.",
    "Thank you for your time and consideration. I look forward to the possibility of connecting.",
  ],
};

// ── Shared Doc Modal ─────────────────────────────────────────────────────────

function DocModal({ type, onClose }: { type: "resume" | "cover-letter"; onClose: () => void }) {
  const isResume = type === "resume";
  const filename = isResume ? "Dhruv Kolhe.pdf" : "cover-letter.pdf";
  const d = resumeData;
  const cl = coverLetterData;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-foreground/40 backdrop-blur-sm py-8 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full ${isResume ? "max-w-5xl" : "max-w-2xl"} bg-card rounded-3xl border border-border shadow-2xl overflow-hidden`}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40 print:hidden">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faFileArrowDown} className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm font-medium">{filename}</span>
          </div>
          <div className="flex items-center gap-3">
            {isResume && (
              <a
                href="/Dhruv%20Kolhe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Dhruv Kolhe.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                <FontAwesomeIcon icon={faExternalLink} className="w-3.5 h-3.5" />
                Open / Download PDF
              </a>
            )}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (isResume) {
                  window.open("/Dhruv%20Kolhe.pdf", "_blank");
                } else {
                  window.print();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card hover:bg-muted text-foreground rounded-full text-sm font-semibold shadow-sm transition-colors"
            >
              <FontAwesomeIcon icon={faPrint} className="w-3.5 h-3.5" />
              {isResume ? "Print PDF" : "Save as PDF"}
            </motion.button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {isResume ? (
          <div className="w-full h-[82vh] bg-muted/20">
            <iframe
              src="/Dhruv%20Kolhe.pdf"
              className="w-full h-full border-0"
              title="Dhruv Kolhe PDF"
            />
          </div>
        ) : (
          <div id="resume-print" className="p-8 md:p-12 font-body text-foreground bg-card">
            {/* Header — cover letter */}
            <div className="border-b-2 border-primary/30 pb-6 mb-7">
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-0.5">{d.name}</p>
              <p className="text-primary font-semibold text-sm mb-3">{d.title}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                {[
                  { icon: faEnvelope, text: d.contact.email },
                  { icon: faMapPin,   text: d.contact.location },
                  { icon: faLink,     text: d.contact.github },
                ].map(({ icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5">
                    <FontAwesomeIcon icon={icon} className="w-3 h-3 text-primary" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Cover letter body */}
            <div>
              <p className="text-foreground font-medium mb-6">Dear Hiring Manager,</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                {cl.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 space-y-1">
                <p className="text-foreground font-medium">Warm regards,</p>
                <p className="font-display text-lg font-bold text-primary">{cl.name}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentlyIdx, setCurrentlyIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [coverOpen, setCoverOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentlyIdx((i) => (i + 1) % currently.length),
      3200,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">

      {resumeOpen && <DocModal type="resume" onClose={() => setResumeOpen(false)} />}
      {coverOpen  && <DocModal type="cover-letter" onClose={() => setCoverOpen(false)} />}

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <a
          href="#home"
          className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          kolhe<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setResumeOpen(true)}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
        >
          <FontAwesomeIcon icon={faFileArrowDown} className="w-3.5 h-3.5" />
          Resume
        </motion.button>
      </motion.nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
      >
        {/* Memphis floating shapes */}
        <FloatShape className="top-24 left-6 md:left-16"           size={72} color="#C9523420" shape="circle"   delay={0}   />
        <FloatShape className="top-40 right-8 md:right-24"         size={44} color="#6D9E6A30" shape="square"   delay={1.4} />
        <FloatShape className="bottom-1/3 left-8 md:left-32"       size={56} color="#F2C14E30" shape="triangle" delay={0.6} />
        <FloatShape className="top-1/3 left-1/4"                   size={26} color="#C9523430" shape="donut"    delay={2.1} />
        <FloatShape className="bottom-1/3 right-8 md:right-40"     size={48} color="#6D9E6A25" shape="circle"  delay={0.9} />
        <FloatShape className="top-20 right-1/3"                   size={20} color="#F2C14E50" shape="circle"   delay={3}   />
        <FloatShape className="bottom-24 left-1/3"                 size={34} color="#C9523420" shape="square"   delay={1.8} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          {/* Greeting pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8"
          >
            <motion.span
              animate={{ rotate: [0, 16, -8, 16, -4, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3.5 }}
              className="inline-block origin-[70%_70%]"
            >
              <FontAwesomeIcon icon={faHand} className="w-4 h-4" />
            </motion.span>
            hey there, nice to meet you!
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display leading-[0.95] mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">
                {"I'm "}
                <span className="text-primary italic">Dhruv</span>
                {","}
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-muted-foreground italic mt-2">
                cse student &amp; builder of
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary italic mt-1">
                tiny, meaningful things.
              </span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I love to learn and create new things, and understand the world around
            me, one bug at a time. I write code, break it, fix it, and, every now
            and then, make something useful.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              <FontAwesomeIcon icon={faLaptopCode} className="w-4 h-4" />
              see my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground rounded-full font-semibold hover:bg-muted transition-colors"
            >
              <FontAwesomeIcon icon={faFaceSmile} className="w-4 h-4 text-secondary" />
              say hello
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCoverOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/80 transition-colors"
            >
              <FontAwesomeIcon icon={faFileArrowDown} className="w-4 h-4" />
              cover letter
            </motion.button>
          </motion.div>

          {/* Currently ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground font-body"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span>currently:</span>
            <motion.span
              key={currentlyIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-semibold text-foreground"
            >
              {currently[currentlyIdx]}
            </motion.span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
              01. about
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-12 leading-tight">
              a little about me
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <ScrollReveal delay={0.1} className="md:col-span-3">
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  I am a Computer Science student who loves to create, learn, and build.
                </p>
                <p>
                  I have experience in developing applications in various languages through
                  personal projects, as well as in technical support, problem-solving,
                  collaboration, and more through my internship.
                </p>
                <p>
                  Outside of computers, I enjoy anime, Formula 1, sports, music, and movies,
                  and generally trying new things. I always try to learn and create something
                  new, and improve myself a little bit every day.
                </p>
              </div>

              {/* Fun facts */}
              <div className="mt-8">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  a few honest facts
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={stagger}
                >
                  {funFacts.map((fact) => (
                    <motion.span
                      key={fact.text}
                      variants={popIn}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-card rounded-2xl border border-border text-sm font-medium cursor-default shadow-sm"
                    >
                      <FontAwesomeIcon icon={fact.icon} className="w-3.5 h-3.5 text-primary" />
                      {fact.text}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Photo column */}
            <ScrollReveal delay={0.2} className="md:col-span-2">
              <div className="relative max-w-xs mx-auto md:mx-0">
                <div className="aspect-square rounded-3xl bg-muted overflow-hidden relative border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop&auto=format"
                    alt="Code on a laptop screen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">status</p>
                    <p className="font-display font-bold text-foreground text-sm">undergrad</p>
                  </div>
                </motion.div>

                {/* Offset border */}
                <div className="absolute -bottom-2.5 -right-2.5 w-full h-full rounded-3xl border-2 border-secondary/40 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-muted/50 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
              02. skills
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-3 leading-tight">
              tools I reach for
            </h2>
            <p className="text-muted-foreground mb-12 text-base md:text-lg max-w-lg">
              Still learning, always adding to the list — here{"'"}s what I{"'"}m comfortable with right now.
            </p>
          </ScrollReveal>

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {skills.map(({ label, icon, color }) => (
              <motion.div
                key={label}
                variants={popIn}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-card rounded-xl border border-border shadow-sm cursor-default"
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4 flex-shrink-0" style={{ color }} />
                <span className="text-sm font-medium font-body">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
              03. projects
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-3 leading-tight">
              things I{"'"}ve built
            </h2>
            <p className="text-muted-foreground mb-12 text-base md:text-lg max-w-lg">
              Some practical, some just for fun, all made with genuine care. Source is always open.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, rotate: 0.4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`${project.bgClass} border ${project.borderClass} rounded-3xl p-6 h-full flex flex-col group`}
                >
                  {/* Icon */}
                  <div className="flex items-start mb-5">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [-4, 4, -4] }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: project.iconColor + "20" }}
                    >
                      <FontAwesomeIcon
                        icon={project.icon}
                        className="w-5 h-5"
                        style={{ color: project.iconColor }}
                      />
                    </motion.div>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-background/70 rounded-lg border border-border/60 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
                    view source
                    <FontAwesomeIcon icon={faExternalLink} className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/6" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/8" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
              04. contact
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-3 mb-4 leading-tight">
              {"let's be friends"}
              <span className="text-secondary italic"> :)</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Whether you want to talk about a project, collaborate on something cool, or
              just say hi — my inbox is always open. No formalities needed.
            </p>

            <motion.a
              href="mailto:davpatal@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-sm hover:shadow-md transition-shadow mb-12"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              drop me a line
            </motion.a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-10">
              {socials.map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                  <span className="text-xs font-mono">{label}</span>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground font-body flex items-center gap-1.5">
            made with{" "}
            <FontAwesomeIcon icon={faHeart} className="w-3.5 h-3.5 text-primary" />
            {" "}by dhruv kolhe &middot; {new Date().getFullYear()}
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            built with React + motion
          </p>
        </div>
      </footer>
    </div>
  );
}
