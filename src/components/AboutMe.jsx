import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram,
  FaDownload, FaMapMarkerAlt, FaPhone, FaGraduationCap,
  FaCode, FaBrain, FaLayerGroup, FaStar, FaQuoteLeft
} from 'react-icons/fa';
import resumeImg from '../assets/Kalai_Resume_MR.pdf';

/* ─── DATA ─────────────────────────────────────────────────── */
const stats = [
  { icon: FaLayerGroup, label: 'Projects Completed', value: 10, suffix: '+', color: '#06b6d4' },
  { icon: FaBrain,      label: 'AI Experiments',     value: 5,  suffix: '+', color: '#a855f7' },
  { icon: FaCode,       label: 'Technologies',       value: 35, suffix: '+', color: '#06b6d4' },
  { icon: FaStar,       label: 'Commitment Quality', value: 100, suffix: '%', color: '#f97316' },
];

const socials = [
  { icon: FaGithub,    href: 'https://github.com/kalaiyarasumr',                              label: 'GitHub',    glow: '#94a3b8' },
  { icon: FaLinkedinIn,href: 'https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/',      label: 'LinkedIn',  glow: '#06b6d4' },
  { icon: FaEnvelope,  href: 'mailto:kalaiyarasumr@gmail.com',                            label: 'Email',     glow: '#a855f7' },
  { icon: FaInstagram, href: 'https://www.instagram.com/kalai._.rexx/', label: 'Instagram', glow: '#f97316' },
];

const infoGrid = [
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Salem, Tamil Nadu — 637101', color: '#06b6d4' },
  { icon: FaEnvelope,     label: 'Email',    value: 'kalaiyarasumr@gmail.com',     color: '#a855f7' },
  { icon: FaPhone,        label: 'Phone',    value: '+91-9486734269',              color: '#06b6d4' },
  { icon: FaGraduationCap,label: 'Education',value: 'B.Tech CSBS · KSR · 2026',  color: '#a855f7' },
];

const techTags = ['React.js','JavaScript','Python','FastAPI','Node.js','AI Tools','NLP','Prompt Engineering','Framer Motion','MongoDB','AWS','Git & GitHub','Tailwind CSS','Docker','CI/CD','TypeScript','Next.js','SQL','NoSQL','REST APIs','GraphQL'];

/* ─── ANIMATED COUNTER ─────────────────────────────────────── */
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = [value, () => {}]; // static fallback
  // Simple CSS animation via key trick
  return (
    <motion.span ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView ? value : 0}{suffix}
    </motion.span>
  );
}

/* ─── FLOATING PARTICLE ─────────────────────────────────────── */
const particles = Array.from({ length: 10 }, (_, i) => ({
  size: Math.random() * 5 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  color: i % 2 === 0 ? 'rgba(6,182,212,0.45)' : 'rgba(168,85,247,0.45)',
  dur: Math.random() * 4 + 5,
  delay: Math.random() * 3,
}));

/* ─── MAIN COMPONENT ───────────────────────────────────────── */
export default function AboutMe() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  });

  return (
    <section id="about" ref={sectionRef}
      className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full"
    >
      {/* ── Background ── */}
      {particles.map((p, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none -z-10"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left, background: p.color }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute top-[10%] left-0 w-[300px] h-[300px] bg-cyanCustom/[0.07] rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-purpleCustom/[0.07] rounded-full blur-[100px] -z-10" />

      {/* ── Section Badge ── */}
      <motion.div {...fadeUp(0)} className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center space-x-2 text-cyanCustom mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom animate-ping" />
          <span className="text-xs font-bold tracking-widest uppercase">Get To Know Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About{' '}
          <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="h-[2px] w-28 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full overflow-hidden">
          <motion.span className="block h-full w-1/3 bg-white/40 rounded-full"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ── Split Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ════ LEFT COLUMN ════ */}
        <div className="flex flex-col gap-8">

          {/* Intro */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-4">
              I'm an aspiring{' '}
              <span className="text-cyanCustom font-semibold">Software Developer</span>{' '}
              passionate about building intelligent, scalable, and visually refined digital products.
              My work spans full-stack web development, AI experimentation, and crafting responsive
              UIs that feel as good as they look.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              I enjoy solving complex problems with clean code, exploring modern AI tools, and
              turning ambitious ideas into production-ready applications — from dynamic React
              interfaces to FastAPI-powered backends and RAG-based AI systems.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-3 flex-wrap">
            {socials.map(({ icon: Icon, href, label, glow }) => (
              <motion.a key={label} href={href}
                target="_blank" rel="noopener noreferrer" aria-label={label}
                whileHover={{ y: -4, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative p-3 rounded-xl border border-slate-800 text-slate-400 transition-all duration-300 group"
                style={{ '--glow': glow }}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 16px ${glow}40, inset 0 0 0 1px ${glow}50` }} />
                <Icon size={17} className="relative z-10 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}

            {/* Resume Download */}
            <motion.a href={resumeImg} download="Kalai_Resume_MR.pdf"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="relative ml-2 flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white overflow-hidden border border-white/10"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
            >
              {/* shine sweep */}
              <motion.span
                className="absolute inset-0 bg-white/20 skew-x-[-20deg] -translate-x-full"
                whileHover={{ x: '300%' }}
                transition={{ duration: 0.6 }}
              />
              <FaDownload size={13} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stat Cards */}
          <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glassmorphism p-4 rounded-2xl border border-slate-800 hover:border-cyanCustom/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                      <Icon size={13} style={{ color: s.color }} />
                    </div>
                    <span className="text-xl font-extrabold" style={{ color: s.color }}>
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs font-medium">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Animated glowing orbit ring */}
          <motion.div
            className="absolute -inset-3 rounded-3xl opacity-30 -z-10"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7, #06b6d4)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'conic-gradient(from 0deg, #06b6d440, #a855f740, #06b6d440)',
              borderRadius: '1.5rem',
              filter: 'blur(8px)',
            }}
          />

          <div className="glassmorphism rounded-3xl border border-slate-800 hover:border-cyanCustom/25 transition-all duration-500 overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.06)]">

            {/* Card Header bar */}
            <div className="h-1 w-full bg-gradient-to-r from-cyanCustom via-purpleCustom to-cyanCustom" />

            <div className="p-8 flex flex-col gap-7">

              {/* Quote + Bio */}
              <div className="relative">
                <FaQuoteLeft size={28} className="text-cyanCustom/20 absolute -top-1 -left-1" />
                <p className="text-slate-300 leading-relaxed pl-8 text-sm md:text-base">
                  I thrive at the intersection of{' '}
                  <span className="text-cyanCustom font-semibold">engineering precision</span> and{' '}
                  <span className="text-purpleCustom-light font-semibold">creative design</span>.
                  Currently pursuing B.Tech in CSBS at{' '}
                  <span className="text-white font-medium">K.S.R Rangasamy College of Technology, Tiruchengode</span> (2022–2026),
                  I build full-stack platforms powered by modern AI, clean APIs, and
                  performance-first UI/UX — always with the end user in mind.
                </p>
              </div>

              {/* Tech Tags */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Core Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag, i) => (
                    <motion.span key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.04 }}
                      whileHover={{ scale: 1.08 }}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-default"
                      style={{
                        background: i % 2 === 0 ? 'rgba(6,182,212,0.08)' : 'rgba(168,85,247,0.08)',
                        borderColor: i % 2 === 0 ? 'rgba(6,182,212,0.25)' : 'rgba(168,85,247,0.25)',
                        color: i % 2 === 0 ? '#67e8f9' : '#d8b4fe',
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

              {/* Personal Info Grid */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Personal Information</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {infoGrid.map(({ icon: Icon, label, value, color }) => (
                    <motion.div key={label}
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-lg mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                        <Icon size={11} style={{ color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">{label}</p>
                        <p className="text-slate-300 text-xs font-medium leading-snug truncate">{value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="flex items-center gap-3 pt-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-green-400 font-semibold">Available for internships, freelance & full-time opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
