import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope,
  FaStar, FaCheckCircle, FaQuoteLeft, FaPaperPlane
} from 'react-icons/fa';

/* ─── TESTIMONIALS ──────────────────────────────────────────── */
const testimonials = [
  {
    name: 'Pradeep Londhae',
    role: 'Manager, Mphasis',
    avatar: 'PL',
    color: '#06b6d4',
    rating: 5,
    text: "Exceptional developer with strong problem-solving skills. Demonstrated excellent project management and ability to deliver quality results under tight deadlines. Highly recommended for senior roles.",
  },
  {
    name: 'Saranya Venkatesan',
    role: 'DevOps Engineer, Mphasis',
    avatar: 'SV',
    color: '#a855f7',
    rating: 5,
    text: "Great collaborative spirit and technical expertise. Kalaiyarasu quickly grasped complex infrastructure concepts and contributed meaningfully to our DevOps pipeline projects.",
  },
  {
    name: 'Dhanush Kumar',
    role: 'UI/UX Designer, My Team',
    avatar: 'DK',
    color: '#06b6d4',
    rating: 5,
    text: "Amazing to work with! Kalaiyarasu has a keen eye for design integration and always ensures the frontend looks and feels perfect. Great attention to detail and collaboration!",
  },
];

const feedbackTypes = [
  'General Feedback', 'Project Collaboration', 'Job Opportunity',
  'Freelance Project', 'Suggestion', 'Bug Report',
];

const ownerEmail = 'kalaiyarasumr@gmail.com';

/* ─── STAR RATING ───────────────────────────────────────────── */
function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-transform hover:scale-110"
        >
          <FaStar size={22}
            className={`transition-colors duration-150 ${
              star <= (hover || value) ? 'text-yellow-400' : 'text-slate-700'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

/* ─── FLOATING PARTICLE ─────────────────────────────────────── */
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: style.duration, repeat: Infinity, ease: 'easeInOut', delay: style.delay }}
    />
  );
}

const particles = Array.from({ length: 12 }, (_, i) => ({
  width: Math.random() * 4 + 2,
  height: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  background: i % 2 === 0 ? 'rgba(6,182,212,0.5)' : 'rgba(168,85,247,0.5)',
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 3,
}));

/* ─── MAIN COMPONENT ───────────────────────────────────────── */
export default function FeedbackSection() {
  const [form, setForm] = useState({ name: '', email: '', type: '', rating: 0, message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Name, email, and message are required.');
      return;
    }

    setError('');

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body?.error || 'Unable to send feedback.');
      }

      setSubmitted(true);
      setForm({ name: '', email: '', type: '', rating: 0, message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (sendError) {
      console.error(sendError);
      setError(sendError.message || 'Unable to send feedback.');
    }
  };

  const inputClass = (name) =>
    `w-full bg-slate-900/60 border rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 outline-none transition-all duration-300 ${
      focused === name
        ? 'border-cyanCustom shadow-[0_0_0_2px_rgba(6,182,212,0.15)] bg-slate-900/80'
        : 'border-slate-800 hover:border-slate-700'
    }`;

  return (
    <section id="feedback" className="py-24 relative overflow-hidden max-w-7xl mx-auto px-6 md:px-12 w-full">

      {/* Background particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* Background orbs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-cyanCustom/[0.06] rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] bg-purpleCustom/[0.06] rounded-full blur-[100px] -z-10" />

      {/* ── HEADER ── */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center mb-14"
      >
        <div className="flex items-center space-x-2 text-cyanCustom mb-3">
          <FaQuoteLeft size={12} />
          <span className="text-xs font-bold tracking-widest uppercase">Testimonials & Feedback</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          What People{' '}
          <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
            Think
          </span>
        </h2>
        <div className="h-[2px] w-28 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mb-5 overflow-hidden">
          <motion.span className="block h-full w-1/3 bg-white/40 rounded-full"
            animate={{ x: ['-100%', '400%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <p className="text-slate-400 max-w-lg text-base">
          Visited my portfolio? Share your feedback, suggestions, or opportunities.
        </p>
      </motion.div>

      {/* ── FORM CARD ── */}
      <div className="max-w-2xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glassmorphism p-8 rounded-3xl border border-slate-800 hover:border-cyanCustom/20 transition-all duration-500 shadow-[0_0_60px_rgba(6,182,212,0.05)]"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 gap-5 text-center"
              >
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <FaCheckCircle size={56} className="text-cyanCustom drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Feedback Sent!</h3>
                <p className="text-slate-400 max-w-sm">Thanks for reaching out. Your email client should have opened. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-5"
                initial={{ opacity: 1 }} exit={{ opacity: 0 }}
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      placeholder="Your name" required className={inputClass('name')} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      placeholder="you@example.com" required className={inputClass('email')} />
                  </div>
                </div>

                {/* Type dropdown */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Feedback Type</label>
                  <select name="type" value={form.type} onChange={handleChange}
                    onFocus={() => setFocused('type')} onBlur={() => setFocused('')}
                    className={`${inputClass('type')} cursor-pointer`}
                  >
                    <option value="" disabled>Select a type...</option>
                    {feedbackTypes.map(t => <option key={t} value={t} className="bg-slate-900">{t}</option>)}
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-2 block">Portfolio Rating</label>
                  <StarRating value={form.rating} onChange={v => setForm(p => ({ ...p, rating: v }))} />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    placeholder="Your feedback, suggestion, or opportunity details..."
                    rows={5} required
                    className={`${inputClass('message')} resize-none leading-relaxed`}
                  />
                </div>

                {/* Submit */}
                <button type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyanCustom to-purpleCustom hover:from-cyanCustom-dark hover:to-purpleCustom-dark shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.45)] transition-all duration-300 flex items-center justify-center gap-2.5 group border border-white/10"
                >
                  <FaPaperPlane size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Feedback
                </button>

                {error && (
                  <p className="text-center text-sm text-rose-400 mt-3">{error}</p>
                )}

                {/* Note */}
                <p className="text-center text-xs text-slate-600 flex items-center justify-center gap-1.5">
                  <FaEnvelope size={10} className="text-slate-700" />
                  Your feedback will be sent securely through the portfolio backend.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mt-6"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/kalaiyarasumr', label: 'GitHub', color: 'hover:border-slate-400 hover:text-slate-200' },
            { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/', label: 'LinkedIn', color: 'hover:border-cyanCustom hover:text-cyanCustom hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]' },
            { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]' },
            { icon: FaEnvelope, href: 'mailto:kalaiyarasumr@gmail.com', label: 'Email', color: 'hover:border-purpleCustom hover:text-purpleCustom hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]' },
          ].map(({ icon: Icon, href, label, color }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className={`p-3 rounded-full border border-slate-800 text-slate-500 transition-all duration-300 ${color}`}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name}
            initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.06)] transition-all duration-300 flex flex-col gap-4"
          >
            <FaQuoteLeft size={18} style={{ color: t.color }} className="opacity-60" />
            <p className="text-slate-400 text-sm leading-relaxed flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`, border: `1px solid ${t.color}40` }}
              >
                {t.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                <p className="text-slate-500 text-xs truncate">{t.role}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <FaStar key={s} size={10} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── FOOTER STRIP ── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-14 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 font-medium">Available for opportunities</span>
        </div>
        <a href={`mailto:${ownerEmail}`}
          className="hover:text-cyanCustom transition-colors duration-300 flex items-center gap-1.5"
        >
          <FaEnvelope size={10} /> {ownerEmail}
        </a>
        <span className="text-slate-600">Open to work · Freelance · Full-time</span>
      </motion.div>
    </section>
  );
}
