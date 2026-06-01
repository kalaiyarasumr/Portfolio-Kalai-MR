import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaGlobe, 
  FaBrain, 
  FaLayerGroup, 
  FaRocket, 
  FaTerminal,
  FaDownload,
  FaFilePdf,
} from 'react-icons/fa';

import mphasisPdf from '../assets/Mphasis-intrn.pdf';
import growPdf from '../assets/Grow-intern.pdf';

/* ─── STATISTICS DATA ──────────────────────────────────────── */
const stats = [
  { icon: FaBrain,      label: 'Core Focus',      value: 'AI & Full-Stack',  color: '#06b6d4' },
  { icon: FaGlobe,      label: 'Work Mode',       value: '100% Remote',      color: '#a855f7' },
  { icon: FaLayerGroup, label: 'Tech Stack',      value: '17+ Technologies', color: '#06b6d4' },
  { icon: FaRocket,     label: 'Company Type',    value: 'Tech Startup',     color: '#a855f7' },
];

/* ─── RESPONSIBILITIES ─────────────────────────────────────── */
const mphasisResponsibilities = [
  "Developing responsive frontend interfaces",
  "Working with React.js, JavaScript, and Tailwind CSS",
  "Assisting in backend integration and API handling",
  "Collaborating on AI-assisted web applications",
  "Debugging and improving UI/UX performance",
  "Exploring scalable startup product architecture",
];

const growResponsibilities = [
  "Built 10+ responsive frontend components using React.js and Bootstrap",
  "Assisted in backend development with Node.js and MySQL",
  "Managed and processed 1,000+ records efficiently",
  "Reduced application errors by 15% through software testing",
  "Improved cross-browser compatibility across devices",
  "Collaborated on new features and application responsiveness",
];

/* ─── TECH STACKS ──────────────────────────────────────────── */
const mphasisTechStack = [
  "React.js", "JavaScript", "Tailwind CSS", "FastAPI",
  "API Integration", "GitHub", "UI/UX", "Java",
  "Node.js", "Spring Boot", "Express.js", "REST APIs",
  "MySQL", "MongoDB", "AWS", "Bootstrap", "Git",
];

const growTechStack = [
  "React.js", "JavaScript", "Bootstrap",
  "Node.js", "MySQL", "REST APIs", "Git", "GitHub",
];

/* ─── PARTICLES ────────────────────────────────────────────── */
const particles = Array.from({ length: 12 }, (_, i) => ({
  size: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  color: i % 2 === 0 ? 'rgba(6,182,212,0.35)' : 'rgba(168,85,247,0.35)',
  dur: Math.random() * 6 + 6,
  delay: Math.random() * 4,
}));

/* ─── CERTIFICATE DOWNLOAD BUTTON ──────────────────────────── */
function CertificateDownloadBtn({ label, filePath, accentColor }) {
  const [hovered, setHovered]       = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!filePath) {
      alert('Certificate not available yet. Please check back later.');
      return;
    }
    try {
      setDownloading(true);
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('File not found');
      const blob = await response.blob();
      const url  = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href     = url;
      link.download = `${label}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
      alert('Certificate not available yet. Please check back later.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      disabled={downloading}
      className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase overflow-hidden border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      style={{
        background:  hovered ? `${accentColor}18` : `${accentColor}08`,
        borderColor: hovered ? `${accentColor}60` : `${accentColor}25`,
        color:        accentColor,
        boxShadow:   hovered ? `0 0 20px ${accentColor}20` : 'none',
      }}
    >
      {hovered && !downloading && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${accentColor}15 50%, transparent 60%)`,
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
      <FaFilePdf size={11} />
      <span>{downloading ? 'Downloading...' : label}</span>
      {downloading ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="ml-0.5 w-3 h-3 border border-current border-t-transparent rounded-full inline-block"
        />
      ) : (
        <FaDownload size={10} className="ml-0.5" />
      )}
    </motion.button>
  );
}

/* ─── EXPERIENCE CARD ──────────────────────────────────────── */
function ExperienceCard({
  title, company, duration, location, description,
  responsibilities, techStack, status, statusColor = '#06b6d4',
  certificateLabel, certificateFile,
  inView, delay = 0, slideDirection = 'right',
}) {
  const slideAnim = {
    initial: { opacity: 0, x: slideDirection === 'right' ? 40 : -40 },
    animate: inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  };

  return (
    <motion.div {...slideAnim} className="relative mb-8">

      {/* Timeline Dot */}
      <div className={`absolute top-6 flex items-center justify-center z-10
        ${slideDirection === 'right'
          ? '-left-[21px] sm:-left-[37px]'
          : '-right-[21px] sm:-right-[37px]'
        }`}
      >
        <span className="absolute w-6 h-6 rounded-full animate-ping"  style={{ background: `${statusColor}30` }} />
        <span className="absolute w-4 h-4 rounded-full animate-pulse" style={{ background: `${statusColor}50` }} />
        <span className="w-2.5 h-2.5 rounded-full"                    style={{ background: statusColor }} />
      </div>

      {/* Card */}
      <div className="glassmorphism rounded-2xl border border-slate-800 hover:border-cyanCustom/35 transition-all duration-500 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.05)] hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] group">

        {/* Top gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-cyanCustom via-purpleCustom to-cyanCustom" />

        <div className="p-6 md:p-8 flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">

              {/* Logo */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:border-cyanCustom/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyanCustom/10 to-purpleCustom/10 opacity-50" />
                <svg className="w-7 h-7 text-cyanCustom group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17"            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12"            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-purpleCustom rounded-full blur-[4px]" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-cyanCustom transition-colors duration-300">{title}</h4>
                <p className="text-sm font-semibold text-slate-300">{company}</p>
              </div>
            </div>

            {/* Status Badge */}
            <span
              className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-full text-xs font-bold border"
              style={{
                background:  `${statusColor}10`,
                color:        statusColor,
                borderColor: `${statusColor}30`,
                boxShadow:   `0 0 12px ${statusColor}25`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: statusColor }} />
              {status}
            </span>
          </div>

          {/* Duration & Location */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400 bg-slate-900/40 px-4 py-2.5 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-purpleCustom-light" />
              <span>{duration}</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <FaGlobe className="text-cyanCustom" />
              <span>{location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">{description}</p>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Responsibilities */}
          <div>
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Key Responsibilities</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {responsibilities.map((resp, rIdx) => (
                <motion.li key={rIdx} whileHover={{ x: 3 }} className="flex items-start gap-2.5 text-xs text-slate-400 group/item">
                  <span className="text-cyanCustom mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover/item:text-purpleCustom">
                    <FaChevronRight size={10} />
                  </span>
                  <span className="group-hover/item:text-slate-200 transition-colors duration-300 leading-relaxed">{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Tech Stack */}
          <div>
            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Technologies Stacked</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, tIdx) => (
                <motion.span
                  key={tIdx}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default"
                  style={{
                    background:  tIdx % 2 === 0 ? 'rgba(6,182,212,0.06)'  : 'rgba(168,85,247,0.06)',
                    borderColor: tIdx % 2 === 0 ? 'rgba(6,182,212,0.2)'   : 'rgba(168,85,247,0.2)',
                    color:       tIdx % 2 === 0 ? '#67e8f9'                : '#d8b4fe',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          {/* Certificate Download */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-slate-500 font-medium">
              {certificateFile
                ? '📄 Internship completion certificate available'
                : '🕐 Certificate will be available soon'}
            </p>
            <CertificateDownloadBtn
              label={certificateLabel}
              filePath={certificateFile}
              accentColor={statusColor}
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN EXPORT ──────────────────────────────────────────── */
export default function Experience() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  });

  const slideInLeft = (delay = 0) => ({
    initial:    { opacity: 0, x: -40 },
    animate:    inView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  });

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none -z-10"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: p.color }}
          animate={{ y: [0, -30, 0], x: [0, Math.sin(i) * 15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Backdrop Orbs */}
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-purpleCustom/[0.08] rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-0 w-[280px] h-[280px] bg-cyanCustom/[0.08] rounded-full blur-[100px] -z-10" />

      {/* Section Title */}
      <motion.div {...fadeUp(0)} className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-2 text-cyanCustom mb-3">
          <FaBriefcase className="animate-pulse" size={14} />
          <span className="text-xs font-bold tracking-widest uppercase">Career Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Internship{' '}
          <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-[2px] w-28 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full overflow-hidden relative">
          <motion.span
            className="block h-full w-1/3 bg-white/40 rounded-full absolute top-0 left-0"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ── Two-Column Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ════ LEFT COLUMN ════ */}
        <div className="lg:col-span-5 flex flex-col gap-8">

          {/* Summary */}
          <motion.div {...slideInLeft(0.1)} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Contributing to <span className="text-cyanCustom">Real-World Projects</span>
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Gaining hands-on development experience across startup and enterprise environments.
              Working under agile flows, building modular components, and shipping optimized software.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glassmorphism p-5 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 10% 10%, ${s.color}08, transparent 80%)` }} />
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                      <Icon size={14} style={{ color: s.color }} />
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{s.label}</p>
                  <p className="text-sm font-bold text-white mt-1 group-hover:text-cyanCustom transition-colors duration-300">{s.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <motion.div {...slideInLeft(0.3)} className="glassmorphism p-5 rounded-2xl border border-slate-800 hover:border-purpleCustom/20 transition-all duration-300 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyanCustom to-purpleCustom" />
            <div className="flex items-start gap-3.5">
              <FaTerminal className="text-purpleCustom mt-1 text-sm flex-shrink-0" />
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                "Developing software isn't just about syntax. It's about engineering solutions that bridge client vision with optimal performance."
              </p>
            </div>
          </motion.div>

        </div>

        {/* ════ RIGHT COLUMN - Both cards stacked here ════ */}
        <div className="lg:col-span-7 relative pl-4 sm:pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyanCustom via-purpleCustom to-cyanCustom/20" />

          {/* Grow Technologies Card */}
          <ExperienceCard
            title="Junior Software Web Developer Intern"
            company="Grow Technologies Pvt Ltd · Salem, India"
            duration="Jan 2024 – Mar 2024"
            location="On-site"
            status="Completed"
            statusColor="#a855f7"
            description="Built and maintained responsive frontend components for production web applications. Assisted in backend development and database management, improving application reliability and cross-device responsiveness."
            responsibilities={growResponsibilities}
            techStack={growTechStack}
            certificateLabel="Grow Technologies Certificate"
            certificateFile={growPdf}
            inView={inView}
            delay={0.1}
            slideDirection="right"
          />

          {/* Mphasis Card */}
          <ExperienceCard
            title="Trainee Associate Software Engineer"
            company="Mphasis Limited · Chennai, India"
            duration="Jan 2026 – Apr 2026"
            location="Hybrid"
            status="Completed"
            statusColor="#06b6d4"
            description="Worked on full-stack web application development and modern UI systems. Contributed to responsive frontend development, API integration, scalable architectures, and enterprise-grade real-world projects."
            responsibilities={mphasisResponsibilities}
            techStack={mphasisTechStack}
            certificateLabel="Mphasis Certificate"
            certificateFile={mphasisPdf}
            inView={inView}
            delay={0.3}
            slideDirection="right"
          />
        </div>

      </div>
    </section>
  );
}