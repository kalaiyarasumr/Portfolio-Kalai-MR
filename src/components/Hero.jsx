import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileDownload, FaExternalLinkAlt, FaTimes, FaCode, FaRobot, FaDatabase, FaServer, FaInstagram, FaGraduationCap, FaCalendarCheck } from 'react-icons/fa';

// ✅ FIXED: Use ES module imports instead of require()
import profileImg from '../assets/Profile-MR.jpg';
import resumeImg from '../assets/Kalai_Resume_MR.pdf';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* Decorative Neon Blurs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-cyanCustom/15 rounded-full blur-[80px] -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purpleCustom/15 rounded-full blur-[100px] -z-10 animate-pulse duration-[6000ms]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Welcome Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism-light border border-cyanCustom/30 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-cyanCustom animate-ping"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyanCustom-light">Available for Opportunities</span>
          </motion.div>

          {/* Intro Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="text-lg md:text-xl font-medium text-slate-400">Hi there, I am</h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-white">Kalaiyarasu </span>
              <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                M R
              </span>
            </h1>
          </motion.div>

          {/* Typing Text Role */}
          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-bold flex items-center space-x-2 text-slate-300">
            <span className="text-purpleCustom-light">&gt; </span>
            <TypeAnimation
              sequence={[
                'Software Development Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'AI & NLP Enthusiast',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-cyanCustom-light"
            />
          </motion.div>

          {/* Short Bio Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            Aspiring Software Development Engineer specializing in building interactive full-stack web applications and AI-driven products. Completed B.Tech in CSBS at K.S.R Rangasamy College of Technology, Tiruchengode.
          </motion.p>

          {/* Graduation Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 flex-wrap"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyanCustom/10 to-purpleCustom/10 border border-cyanCustom/20">
              <FaGraduationCap className="text-cyanCustom text-sm" />
              <span className="text-xs text-slate-300">B.Tech - CSBS</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <FaCalendarCheck className="text-purpleCustom text-sm" />
              <span className="text-xs text-slate-300">Completed: May 2026</span>
            </div>
          </motion.div>

          {/* CTA & Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={() => setShowResume(true)}
              className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyanCustom to-purpleCustom hover:from-cyanCustom-dark hover:to-purpleCustom-dark shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 border border-white/10"
            >
              <span>View Resume</span>
              <FaExternalLinkAlt size={14} />
            </button>
            <a 
              href="mailto:kalaiyarasumr@gmail.com"
              className="px-8 py-3.5 rounded-xl font-bold text-slate-300 hover:text-white glassmorphism border border-slate-700/80 hover:border-cyanCustom/50 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center space-x-2"
            >
              <span>Let's Connect</span>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-4 pt-4"
          >
            <a 
              href="https://github.com/kalaiyarasumr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyanCustom transition-all duration-300 p-3 hover:bg-cyanCustom/10 rounded-xl border border-slate-800 hover:border-cyanCustom/30 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-purpleCustom transition-all duration-300 p-3 hover:bg-purpleCustom/10 rounded-xl border border-slate-800 hover:border-purpleCustom/30 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a 
              href="mailto:kalaiyarasumr@gmail.com" 
              className="text-slate-400 hover:text-cyanCustom transition-all duration-300 p-3 hover:bg-cyanCustom/10 rounded-xl border border-slate-800 hover:border-cyanCustom/30 shadow-sm"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a 
              href="https://www.instagram.com/kalai._.rexx/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-purpleCustom transition-all duration-300 p-3 hover:bg-purpleCustom/10 rounded-xl border border-slate-800 hover:border-purpleCustom/30 shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[440px] md:w-[380px] md:h-[480px]"
          >
            {/* Spinning Gradient Ring Border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyanCustom via-purpleCustom to-cyanCustom opacity-40 blur-[4px] -z-10"
            ></motion.div>

            {/* Glowing Backdrop Frame */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyanCustom/20 to-purpleCustom/20 -z-10"></div>
            
            {/* Main Profile Photo Container */}
            <div className="w-full h-full rounded-2xl overflow-hidden glassmorphism p-3 relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-gradient-to-br from-cyanCustom/10 to-purpleCustom/10 flex items-center justify-center">
                {/* ✅ FIXED: Direct import used, no require(), no try/catch needed */}
                <img 
                  src={profileImg}
                  alt="Kalaiyarasu M R" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Kalaiyarasu+MR&background=06b6d4&color=fff&size=400&bold=true&length=2";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkNavy via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]"></div>
              </div>
            </div>

            {/* Floating Tech Stack Badges */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 rounded-2xl glassmorphism border border-cyanCustom/40 shadow-lg shadow-cyanCustom/10 text-cyanCustom flex items-center justify-center"
            >
              <FaCode size={20} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-12 -left-8 p-4 rounded-2xl glassmorphism border border-purpleCustom/40 shadow-lg shadow-purpleCustom/10 text-purpleCustom flex items-center justify-center"
            >
              <FaRobot size={20} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-4 right-10 p-3.5 rounded-2xl glassmorphism border border-cyanCustom/30 shadow-lg text-cyanCustom-light"
            >
              <FaServer size={18} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-24 -right-10 p-3 rounded-2xl glassmorphism border border-slate-700/50 shadow-md text-slate-400"
            >
              <FaDatabase size={16} />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-8 left-0 p-3 rounded-2xl glassmorphism border border-purpleCustom/40 shadow-lg shadow-purpleCustom/10 text-purpleCustom flex items-center justify-center bg-slate-900/80"
            >
              <FaGraduationCap size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Resume Lightbox Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkNavy/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Kalaiyarasu M R - Resume</h3>
                  <p className="text-xs text-slate-400">Curriculum Vitae | Completed: May 2026</p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={resumeImg}
                    download="Kalaiyarasu_M_R_Resume.pdf"
                    className="p-2.5 rounded-xl bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20 hover:bg-cyanCustom hover:text-darkNavy transition-all duration-300 flex items-center space-x-2 text-sm font-semibold"
                  >
                    <FaFileDownload size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto rounded-xl bg-slate-950 p-2 flex justify-center items-start">
                <embed
                  src={resumeImg}
                  type="application/pdf"
                  className="w-full h-[70vh] rounded-lg border border-slate-800"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;