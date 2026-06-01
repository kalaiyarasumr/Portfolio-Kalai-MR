import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import {
  FaCode, FaBrain, FaDatabase, FaGlobe, FaWrench, FaUsers,
  FaCodeBranch, FaLayerGroup, FaMicrochip, FaStar, FaTrophy,
  FaRocket, FaFlask, FaHandshake, FaClock, FaComments,
  FaLightbulb, FaBullseye, FaChevronRight, FaBolt, FaGraduationCap,
  FaCloud, FaJava, FaReact, FaNodeJs, FaAws, FaGitAlt, FaPython,
  FaGithub, FaSpinner, FaCalendarAlt
} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiTailwindcss, SiExpress, SiFastapi } from 'react-icons/si';

/* ─── DATA ─────────────────────────────────────────────────── */
const skillCategories = [
  {
    id: 'lang', label: 'Programming Languages', icon: FaCode, color: '#06b6d4',
    skills: [
      { name: 'Java', level: 75 }, { name: 'JavaScript', level: 88 }, { name: 'Python', level: 82 },
      { name: 'TypeScript', level: 72 }, { name: 'SQL', level: 80 }, { name: 'C', level: 70 },
      { name: 'C++', level: 75 },
    ]
  },
  {
    id: 'fe', label: 'Frontend Development', icon: FaReact, color: '#06b6d4',
    skills: [
      { name: 'React.js', level: 90 }, { name: 'Tailwind CSS', level: 88 }, { name: 'Bootstrap', level: 85 },
      { name: 'HTML5', level: 95 }, { name: 'CSS3', level: 90 }, { name: 'Framer Motion', level: 80 },
      { name: 'Redux', level: 65 },
    ]
  },
  {
    id: 'be', label: 'Backend Development', icon: FaNodeJs, color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 85 }, { name: 'Express.js', level: 85 }, { name: 'Spring Boot', level: 80 },
      { name: 'FastAPI', level: 72 }, { name: 'REST APIs', level: 88 }, { name: 'JWT / Auth', level: 75 },
      { name: 'API Integration', level: 85 },
    ]
  },
  {
    id: 'db', label: 'Database & Cloud', icon: FaCloud, color: '#06b6d4',
    skills: [
      { name: 'MySQL', level: 82 }, { name: 'MongoDB', level: 82 }, { name: 'AWS', level: 75 },
      { name: 'PostgreSQL', level: 70 }, { name: 'Firebase', level: 65 }, { name: 'MongoDB Atlas', level: 78 },
    ]
  },
  {
    id: 'ai', label: 'AI & Modern Tools', icon: FaBrain, color: '#a855f7',
    skills: [
      { name: 'OpenAI API', level: 80 }, { name: 'Gemini API', level: 78 }, { name: 'Prompt Engineering', level: 85 },
      { name: 'RAG Systems', level: 72 }, { name: 'LangChain', level: 65 }, { name: 'Cursor AI', level: 88 },
      { name: 'Antigravity', level: 90 },
    ]
  },
  {
    id: 'tools', label: 'Tools & Platforms', icon: FaGitAlt, color: '#06b6d4',
    skills: [
      { name: 'Git / GitHub', level: 88 }, { name: 'VS Code', level: 95 }, { name: 'Vercel', level: 85 },
      { name: 'Figma', level: 70 }, { name: 'Postman', level: 78 }, { name: 'Linux', level: 65 },
      { name: 'Netlify', level: 80 },
    ]
  },
];

const radarData = [
  { skill: 'Frontend', level: 90 }, { skill: 'Backend', level: 85 },
  { skill: 'Database', level: 78 }, { skill: 'Cloud/AWS', level: 72 },
  { skill: 'AI/ML', level: 78 }, { skill: 'UI/UX', level: 70 },
];

const professionalSkills = [
  { name: 'Team Collaboration', icon: FaUsers, level: 88 },
  { name: 'Problem Solving', icon: FaLightbulb, level: 90 },
  { name: 'Communication', icon: FaComments, level: 82 },
  { name: 'Project Management', icon: FaBullseye, level: 78 },
  { name: 'Critical Thinking', icon: FaBrain, level: 85 },
  { name: 'Agile Workflow', icon: FaBolt, level: 85 },
  { name: 'Time Management', icon: FaClock, level: 82 },
  { name: 'Client Communication', icon: FaHandshake, level: 78 },
  { name: 'Leadership', icon: FaUsers, level: 80 },
  { name: 'Adaptability', icon: FaRocket, level: 88 },
];

/* ─── GITHUB API FETCHING ──────────────────────────────────── */
const GITHUB_USERNAME = 'kalaiyarasumr';

async function fetchGitHubStats() {
  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!userRes.ok) throw new Error('Failed to fetch user data');
    const userData = await userRes.json();
    
    // Fetch repositories
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!reposRes.ok) throw new Error('Failed to fetch repos');
    const reposData = await reposRes.json();
    
    // Calculate stats
    const totalRepos = reposData.length;
    const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
    const totalForks = reposData.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);
    const totalLanguages = new Set(reposData.flatMap(repo => Object.keys(repo.language || {}))).size;
    
    // Get top languages
    const languageStats = {};
    reposData.forEach(repo => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });
    const topLanguages = Object.entries(languageStats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang]) => lang);
    
    // Fetch contribution events (last 90 days)
    const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`);
    let totalContributions = 0;
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      totalContributions = events.filter(event => 
        event.type === 'PushEvent' || 
        event.type === 'PullRequestEvent' || 
        event.type === 'IssuesEvent'
      ).length;
    }
    
    return {
      publicRepos: userData.public_repos || totalRepos,
      followers: userData.followers || 0,
      following: userData.following || 0,
      totalStars: totalStars,
      totalForks: totalForks,
      totalLanguages: totalLanguages,
      topLanguages: topLanguages,
      totalContributions: totalContributions || 155,
      joinedDate: userData.created_at,
      avatarUrl: userData.avatar_url,
      bio: userData.bio
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      publicRepos: 8,
      followers: 0,
      following: 0,
      totalStars: 6,
      totalForks: 0,
      totalLanguages: 4,
      topLanguages: ['Java', 'JavaScript', 'HTML'],
      totalContributions: 155,
      joinedDate: null,
      avatarUrl: null,
      bio: "Computer Science student passionate about software development"
    };
  }
}

/* ─── ANIMATED COUNTER ─────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{Math.floor(count)}{suffix}</span>;
}

/* ─── SKILL BAR ────────────────────────────────────────────── */
function SkillBar({ name, level, color, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{name}</span>
        <span style={{ color }} className="font-bold">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

/* ─── CIRCULAR PROGRESS ─────────────────────────────────────── */
function CircularProgress({ value, color, size = 80 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const r = 32, c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1e293b" strokeWidth="6" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={inView ? { strokeDashoffset: c - (c * value) / 100 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <span className="absolute text-xs font-bold" style={{ color }}>{value}%</span>
    </div>
  );
}

/* ─── GITHUB STATS WIDGET ───────────────────────────────────── */
function GitHubStatsWidget() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && !stats) {
      fetchGitHubStats().then(data => {
        setStats(data);
        setLoading(false);
      });
    }
  }, [inView, stats]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-purpleCustom/20 bg-slate-950/90 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.08)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
        <FaGithub className="text-purpleCustom text-sm" />
        <span className="text-xs text-slate-400 font-mono">github.com/kalaiyarasumr</span>
      </div>
      
      <div className="p-5">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <FaSpinner className="text-purpleCustom text-2xl animate-spin mb-3" />
            <p className="text-slate-400 text-xs">Fetching GitHub stats...</p>
          </div>
        ) : stats ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-xl bg-cyanCustom/5 border border-cyanCustom/20">
                <p className="text-cyanCustom font-bold text-xl">
                  <AnimatedCounter target={stats.publicRepos} />
                </p>
                <p className="text-slate-500 text-[10px] uppercase">Repositories</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-purpleCustom/5 border border-purpleCustom/20">
                <p className="text-purpleCustom font-bold text-xl">
                  <AnimatedCounter target={stats.totalStars} />
                </p>
                <p className="text-slate-500 text-[10px] uppercase">Stars Earned</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-cyanCustom/5 border border-cyanCustom/20">
                <p className="text-cyanCustom font-bold text-xl">
                  <AnimatedCounter target={stats.totalContributions} />
                </p>
                <p className="text-slate-500 text-[10px] uppercase">Contributions</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-purpleCustom/5 border border-purpleCustom/20">
                <p className="text-purpleCustom font-bold text-xl">
                  <AnimatedCounter target={stats.totalLanguages} />
                </p>
                <p className="text-slate-500 text-[10px] uppercase">Languages Used</p>
              </div>
            </div>
            
            {stats.topLanguages && stats.topLanguages.length > 0 && (
              <div className="pt-2">
                <p className="text-slate-500 text-[10px] uppercase mb-2">Top Languages</p>
                <div className="flex flex-wrap gap-2">
                  {stats.topLanguages.map((lang, i) => (
                    <span key={lang} className="px-2 py-1 rounded-lg bg-slate-800 text-xs text-slate-300">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-2 text-center border-t border-slate-800 mt-2">
              <p className="text-xs text-slate-500 mb-2">
                <FaCalendarAlt className="inline mr-1 text-cyanCustom text-[10px]" />
                Recently active - May 2026
              </p>
              <a
                href="https://github.com/kalaiyarasumr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyanCustom transition-colors"
              >
                <FaGithub size={12} />
                View GitHub Profile
                <FaChevronRight size={8} />
              </a>
            </div>
          </div>
        ) : (
          <p className="text-slate-400 text-xs text-center py-4">Unable to fetch GitHub stats</p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── TERMINAL WIDGET ───────────────────────────────────────── */
function TerminalWidget() {
  const [displayStats, setDisplayStats] = useState([]);
  const [gitHubStats, setGitHubStats] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    
    fetchGitHubStats().then(stats => {
      setGitHubStats(stats);
    });
  }, [inView]);

  useEffect(() => {
    if (!gitHubStats) return;
    
    const stats = [
      { label: 'GitHub Repositories', value: gitHubStats.publicRepos, suffix: '' },
      { label: 'Total Contributions', value: gitHubStats.totalContributions, suffix: '' },
      { label: 'Technologies Used', value: gitHubStats.totalLanguages, suffix: '+' },
      { label: 'Active Projects', value: 6, suffix: '' },
      { label: 'Open Source Contributions', value: 2, suffix: '' },
    ];
    
    let mounted = true;
    stats.forEach((stat, i) => {
      setTimeout(() => {
        if (mounted) {
          setDisplayStats(prev => [...prev, `> ${stat.label}: ${stat.value}${stat.suffix}`]);
        }
      }, i * 400 + 300);
    });
    
    return () => { mounted = false; };
  }, [gitHubStats]);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}
      className="rounded-2xl border border-cyanCustom/20 bg-slate-950/90 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)]"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-400 font-mono">dev-stats.sh — kalaiyarasumr@portfolio</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2 min-h-[240px]">
        <p className="text-green-400">$ ./run-developer-analytics.sh</p>
        <p className="text-cyanCustom-light">{'>'} Analyzing GitHub profile: kalaiyarasumr</p>
        {displayStats.map((line, i) => (
          <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }} className="text-cyanCustom-light"
          >{line}</motion.p>
        ))}
        {displayStats.length === 5 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-green-400">✓ Analytics complete. Status: Active Developer
          </motion.p>
        )}
        <span className="text-slate-500 animate-pulse">█</span>
      </div>
    </motion.div>
  );
}

/* ─── ACTIVITY CARD ───────────────────────────────────────── */
function ActivityCard({ icon: Icon, label, count, sub, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative glassmorphism p-7 rounded-2xl border border-slate-800 overflow-hidden group cursor-default"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${color}12, transparent 70%)` }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}50, 0 0 20px ${color}10` }}
      />

      <div className="flex items-center justify-between mb-5">
        <div
          className="p-3.5 rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ background: `${color}15`, border: `1px solid ${color}35` }}
        >
          <Icon size={20} style={{ color, filter: `drop-shadow(0 0 6px ${color}80)` }} />
        </div>
        <span
          className="text-3xl font-extrabold tabular-nums"
          style={{ color, textShadow: `0 0 16px ${color}60` }}
        >
          {count}
        </span>
      </div>

      <h4 className="text-white font-bold text-base mb-1.5 group-hover:text-cyanCustom-light transition-colors duration-300">
        {label}
      </h4>
      <p className="text-slate-500 text-xs flex items-center gap-1.5">
        <FaChevronRight size={8} style={{ color }} />
        {sub}
      </p>

      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}00, ${color}, ${color}00)` }}
      />
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────────────────── */
export default function TechnicalExpertise() {
  const [activeCategory, setActiveCategory] = useState('lang');
  const [leetCodeCount, setLeetCodeCount] = useState('200+');
  const activeCat = skillCategories.find(c => c.id === activeCategory);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query getUserProfile($username: String!) { matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count submissions } } } }`,
            variables: { username: 'kalaimr' },
          }),
        });

        const data = await response.json();
        const allCount = data?.data?.matchedUser?.submitStats?.acSubmissionNum?.find((item) => item.difficulty === 'All')?.count;
        if (typeof allCount === 'number') {
          setLeetCodeCount(`${allCount}+`);
        }
      } catch (error) {
        console.error('Failed to fetch LeetCode count:', error);
      }
    };
    fetchLeetCodeStats();
  }, []);

  const activities = [
    { icon: FaLayerGroup, label: 'Full Stack Projects', count: '3+', sub: 'End-to-end delivered', color: '#06b6d4' },
    { icon: FaGlobe, label: 'UI/UX Practice', count: '2+', sub: 'Screens designed', color: '#a855f7' },
    { icon: FaBrain, label: 'AI Experiments', count: '1+', sub: 'Models & integrations', color: '#a855f7' },
    { icon: FaRocket, label: 'Freelance Projects', count: '3+', sub: 'Clients served', color: '#f97316' },
    { icon: FaTrophy, label: 'Hackathons', count: '1+', sub: 'Participated', color: '#a855f7' },
    { icon: FaStar, label: 'Problem Solving', count: leetCodeCount, sub: 'LeetCode solved', color: '#06b6d4' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/* Background orbs */}
      <div className="absolute top-0 left-[5%] w-[400px] h-[400px] bg-cyanCustom/[0.07] rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-[5%] w-[350px] h-[350px] bg-purpleCustom/[0.07] rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyanCustom/[0.04] rounded-full blur-[150px] -z-10" />

      {/* ── HEADER ── */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="flex items-center space-x-2 text-cyanCustom mb-3">
          <FaMicrochip size={14} />
          <span className="text-xs font-bold tracking-widest uppercase">Core Competencies</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Technical{' '}
          <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <div className="h-[2px] w-32 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mb-5 overflow-hidden relative">
          <motion.span
            className="absolute inset-0 bg-white/30 rounded-full"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-slate-400 max-w-xl text-base md:text-lg">
          Building intelligent, scalable, and modern digital experiences with full-stack expertise.
        </p>
      </motion.div>



      {/* ── SKILL DASHBOARD ── */}
      <div className="mb-20">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {skillCategories.map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'border-cyanCustom/60 bg-cyanCustom/10 text-cyanCustom shadow-[0_0_16px_rgba(6,182,212,0.2)]'
                    : 'border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                <Icon size={12} />
                {cat.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
            className="glassmorphism p-8 rounded-2xl border border-slate-800 hover:border-cyanCustom/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl" style={{ background: `${activeCat.color}18`, border: `1px solid ${activeCat.color}30` }}>
                <activeCat.icon size={20} style={{ color: activeCat.color }} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{activeCat.label}</h3>
                <p className="text-slate-500 text-xs">{activeCat.skills.length} technologies</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeCat.skills.map((sk, i) => (
                <SkillBar key={sk.name} name={sk.name} level={sk.level} color={activeCat.color} delay={i * 0.07} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── RADAR + GITHUB STATS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glassmorphism p-8 rounded-2xl border border-slate-800 hover:border-purpleCustom/20 transition-all duration-300"
        >
          <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
            <FaBullseye className="text-purpleCustom" size={14} /> Skill Radar
          </h3>
          <p className="text-slate-500 text-xs mb-6">Domain expertise overview</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Radar name="Level" dataKey="level" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.15}
                strokeWidth={2} dot={{ r: 3, fill: '#06b6d4' }} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, color: '#e2e8f0', fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="space-y-5">
          <GitHubStatsWidget />
          <div className="grid grid-cols-3 gap-4">
            {[{ label: 'Frontend', val: 90, color: '#06b6d4' }, { label: 'Backend', val: 85, color: '#a855f7' }, { label: 'Database', val: 78, color: '#06b6d4' }].map(s => (
              <div key={s.label} className="glassmorphism p-4 rounded-xl border border-slate-800 flex flex-col items-center gap-2">
                <CircularProgress value={s.val} color={s.color} />
                <span className="text-xs text-slate-400 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROFESSIONAL SKILLS ── */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-20"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center space-x-2 text-purpleCustom mb-2">
            <FaUsers size={14} />
            <span className="text-xs font-bold tracking-widest uppercase">Soft Skills</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            Management &amp;{' '}
            <span className="bg-gradient-to-r from-purpleCustom to-cyanCustom bg-clip-text text-transparent">
              Professional Skills
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {professionalSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glassmorphism p-5 rounded-2xl border border-slate-800 hover:border-purpleCustom/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 flex flex-col items-center text-center gap-3 group"
              >
                <div className="p-3 rounded-xl bg-purpleCustom/10 border border-purpleCustom/20 group-hover:bg-purpleCustom/20 transition-all">
                  <Icon size={16} className="text-purpleCustom" />
                </div>
                <p className="text-slate-300 text-xs font-semibold group-hover:text-white transition-colors">{skill.name}</p>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-purpleCustom to-cyanCustom"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.06 + 0.3 }}
                  />
                </div>
                <span className="text-[10px] text-purpleCustom font-bold">{skill.level}%</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── DEVELOPER ACTIVITIES ── */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-cyanCustom mb-3">
            <FaBolt size={13} />
            <span className="text-xs font-bold tracking-widest uppercase">Track Record</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Developer{' '}
            <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">
              Activities
            </span>
          </h3>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full overflow-hidden">
            <motion.span className="block h-full w-1/3 bg-white/40 rounded-full"
              animate={{ x: ['-100%', '400%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activities.map((act, i) => (
            <ActivityCard
              key={act.label}
              icon={act.icon}
              label={act.label}
              count={act.count}
              sub={act.sub}
              color={act.color}
              delay={i * 0.08}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}