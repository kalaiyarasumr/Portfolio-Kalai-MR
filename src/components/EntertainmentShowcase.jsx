import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, 
  FaTv, FaMusic, FaExchangeAlt, FaMobileAlt, FaLaptop, FaChevronRight, 
  FaTimes, FaGithub, FaExternalLinkAlt, FaFolderOpen, FaLightbulb
} from 'react-icons/fa';

const EntertainmentShowcase = ({ onClose }) => {
  const [activePlatform, setActivePlatform] = useState('netflix'); // netflix or spotify
  
  // Spotify Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(42);
  const [volume, setVolume] = useState(70);
  const totalDuration = 180;
  const progressPercent = (currentTime / totalDuration) * 100;
  
  // Netflix Banner State
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamLog, setStreamLog] = useState([]);

  // Auto-advance song when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Format time (e.g. 0:42)
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Mock Movies Database
  const netflixMovies = [
    { id: 'm1', title: 'Cyberpunk Chronicles', category: 'Sci-Fi / Thriller', rating: '98% Match', year: '2026', desc: 'In a dystopian Gorakhpur, a rogue SDE agent discovers an encrypted pipeline leading to an antigravity anomaly.' },
    { id: 'm2', title: 'The Algorithm', category: 'Drama / Tech', rating: '95% Match', year: '2025', desc: 'A competitive coder attempts to solve a legendary NP-complete graph challenge while under recursive time limits.' },
    { id: 'm3', title: 'Synthwave Nightride', category: 'Action / Music', rating: '92% Match', year: '2026', desc: 'High-speed chases across retro-futuristic roads, syncopated to an infinite lo-fi cyberpunk soundscape.' }
  ];

  // Start Streaming Sim
  const triggerStreaming = (movie) => {
    setSelectedMovie(movie);
    setIsStreaming(true);
    setStreamLog([
      `[1] Initializing CDN edge server connection...`,
      `[2] Authenticating secure token hash...`
    ]);

    setTimeout(() => {
      setStreamLog(prev => [
        ...prev,
        `[3] Matching bandwidth protocol (HLS stream)...`,
        `[4] Decoding codec: H.265 / HEVC 10-bit...`
      ]);
    }, 1000);

    setTimeout(() => {
      setStreamLog(prev => [
        ...prev,
        `[5] Buffering video matrix (1080p Ultra-HD)...`,
        `[6] Stream Active. Playback running at 60 FPS.`
      ]);
    }, 2200);
  };

  const features = [
    { icon: <FaTv />, title: 'Responsive Hero Slider', desc: 'Immersive layouts adapting to wide monitors down to small smartphone viewports.' },
    { icon: <FaMusic />, title: 'Interactive Audio Player', desc: 'Custom media controllers featuring duration timelines and fluid pause/resume states.' },
    { icon: <FaFolderOpen />, title: 'Modular Card Taxonomy', desc: 'Reusable card grids mapping content dynamically depending on genre database structures.' },
    { icon: <FaMobileAlt />, title: 'Mobile-First Fluid UI', desc: 'Optimized touch gestures and media sliders ensuring responsive navigation.' },
    { icon: <FaExchangeAlt />, title: 'Dynamic Theme Adapters', desc: 'Red/accent lighting templates for video sections, matching dark green schemes for audio pages.' },
    { icon: <FaLightbulb />, title: 'SEO Optimized Schema', desc: 'Optimized index tags and structured descriptors to rank components on Google search indexes.' }
  ];

  const stats = [
    { label: 'Render Latency', value: '< 15 ms' },
    { label: 'Asset Load Speeds', value: '0.8 Seconds' },
    { label: 'Layout Fluidity', value: '100% Responsive' },
    { label: 'Component Reusability', value: '88% Shared' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Platform Neon Ambiance */}
      <div className={`absolute top-[10%] right-[10%] w-[380px] h-[380px] rounded-full blur-[100px] -z-10 transition-colors duration-500 ${activePlatform === 'netflix' ? 'bg-red-600/10' : 'bg-green-500/10'}`}></div>
      <div className="absolute bottom-[20%] left-[10%] w-[420px] h-[420px] bg-purpleCustom/5 rounded-full blur-[120px] -z-10 animate-pulse duration-[6000ms]"></div>
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-25"></div>

      {/* Header Sticky */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-purpleCustom/10 border border-purpleCustom/30 text-purpleCustom">ENTERTAINMENT INTERACTIVE</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">NETFLIX & SPOTIFY SHOWCASE</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/aroy67258" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-cyanCustom p-2 hover:bg-slate-800/50 rounded-xl border border-slate-800 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <button 
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all font-semibold text-sm"
          >
            <FaTimes />
            <span>Close Mockup</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* ================= HERO INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent">
              Immersive Streaming Clones
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Entertainment Web Apps — <br/>
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Netflix & Spotify Clones
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Responsive, dark-themed entertainment user interfaces built with React.js and Tailwind CSS. Focuses on dynamic content rendering, scroll layouts, and media control triggers.
            </p>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/60 p-4 rounded-xl text-center">
                  <div className="text-xl md:text-2xl font-black text-slate-200">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Platform Selection */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setActivePlatform('netflix')}
                className={`px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center space-x-2 border border-white/5 ${activePlatform === 'netflix' ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.25)]' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                <FaTv size={14} />
                <span>Launch Netflix UI</span>
              </button>
              <button 
                onClick={() => setActivePlatform('spotify')}
                className={`px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center space-x-2 border border-white/5 ${activePlatform === 'spotify' ? 'bg-green-500 text-darkNavy shadow-[0_0_20px_rgba(34,197,94,0.25)]' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                <FaMusic size={14} />
                <span>Launch Spotify Player</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Mockup Container */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-purpleCustom/5 blur-2xl"></div>

            <AnimatePresence mode="wait">
              {activePlatform === 'netflix' ? (
                // NETFLIX INTERACTIVE
                <motion.div 
                  key="netflix-mock"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glassmorphism p-6 rounded-2xl border border-red-500/20 w-full max-w-[380px] shadow-2xl relative space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-xs font-bold text-red-600 tracking-wider">NETFLIX STREAM CONTROLLER</span>
                    <span className="text-[10px] bg-red-600/10 text-red-400 border border-red-600/20 px-2 py-0.5 rounded font-mono">React Hooks</span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Trending Movies</span>
                    <div className="space-y-2">
                      {netflixMovies.map((movie) => (
                        <div 
                          key={movie.id}
                          onClick={() => triggerStreaming(movie)}
                          className="bg-slate-950/60 p-3 rounded-xl border border-slate-900 hover:border-red-600/40 transition-all cursor-pointer flex justify-between items-center"
                        >
                          <div>
                            <span className="text-xs font-bold text-white block">{movie.title}</span>
                            <span className="text-[10px] text-slate-500">{movie.category}</span>
                          </div>
                          <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">Play <FaPlay size={6} /></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                // SPOTIFY INTERACTIVE
                <motion.div 
                  key="spotify-mock"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glassmorphism p-6 rounded-2xl border border-green-500/20 w-full max-w-[380px] shadow-2xl relative space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <span className="text-xs font-bold text-green-500 tracking-wider">SPOTIFY AUDIO CONTROLLER</span>
                    <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded font-mono">Web Player Core</span>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 space-y-4">
                    {/* Track Info */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-bold text-white block">Synthwave Dreams</span>
                        <span className="text-[10px] text-slate-500">By RetroCoder</span>
                      </div>
                      <span className="text-green-500"><FaMusic className={isPlaying ? 'animate-bounce' : ''} /></span>
                    </div>

                    {/* Progress Slider */}
                    <div className="space-y-1">
                      <div className="w-full bg-slate-900 rounded-full h-1 relative overflow-hidden">
                        <div className="bg-green-500 h-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(totalDuration)}</span>
                      </div>
                    </div>

                    {/* Playback Buttons */}
                    <div className="flex justify-center items-center gap-4 text-slate-400">
                      <button className="hover:text-white" onClick={() => setCurrentTime(0)}><FaStepBackward size={12} /></button>
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2.5 rounded-full bg-green-500 text-darkNavy hover:scale-105 transition-all text-xs"
                      >
                        {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
                      </button>
                      <button className="hover:text-white" onClick={() => setCurrentTime(totalDuration)}><FaStepForward size={12} /></button>
                    </div>

                    {/* Volume Bar */}
                    <div className="flex items-center gap-2 pt-2 text-slate-500">
                      <FaVolumeUp size={10} />
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-green-500" 
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ================= INTERACTIVE COMPONENT DETAILS ================= */}
        <AnimatePresence mode="wait">
          {isStreaming && selectedMovie && activePlatform === 'netflix' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="bg-black/90 rounded-2xl border border-slate-800 p-6 text-left space-y-4 shadow-2xl relative overflow-hidden"
            >
              {/* Dynamic CDN Terminal Output */}
              <div className="flex justify-between items-center border-b border-slate-950 pb-3 mb-2">
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                  <span className="text-red-500 font-bold">STREAM_CDN_SIMULATOR</span>
                </div>
                <button 
                  onClick={() => setIsStreaming(false)}
                  className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs"
                >
                  Disconnect Stream
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3 font-mono text-xs text-slate-400 bg-slate-950/80 p-4 rounded-xl border border-slate-900 h-[140px] overflow-y-auto">
                  {streamLog.map((log, i) => (
                    <div key={i} className={log.includes('Active') ? 'text-green-400' : 'text-slate-300'}>{log}</div>
                  ))}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block">Playback Information</span>
                  <h4 className="text-lg font-bold text-white">{selectedMovie.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedMovie.desc}</p>
                  <div className="flex gap-4 pt-1 text-[11px] font-mono text-slate-500">
                    <span>Year: {selectedMovie.year}</span>
                    <span>Match: {selectedMovie.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= PLATFORM COMPONENT FEATURES ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Platform Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-500 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-slate-700/50 hover:shadow-[0_4px_20px_rgba(255,255,255,0.03)] transition-all group text-left"
              >
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 w-fit mb-4 group-hover:bg-white group-hover:text-darkNavy transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= TECH STACK LISTING ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Technologies Used</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-500 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {['React.js', 'Vanilla JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion', 'Responsive Grid Structures', 'GitHub Pages'].map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= LEARNING OUTCOMES & ARCHITECTURE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Learning Outcomes</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developing replication layers for production platforms like Netflix and Spotify provides key insights into heavy data presentation engineering:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Mastered asynchronous CSS custom scrollbar designs and media cards wrappers.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Implemented react state loops binding dynamic volume, durations, and play logs.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Optimized layout shifts (CLS) on device flips via flexible CSS Grid/Flex structures.</div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Future Enhancements</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We look forward to connecting the frontend layers with actual streaming database engines:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Connect Spotify nodes to actual Spotify Web Playback API for authentic token play.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Integrate custom TMDB API endpoints to fetch live film metadata and descriptions.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Deploy centralized server auth supporting multi-user chat loops for watch parties.</div>
            </div>
          </div>
        </div>

        {/* Footer info inside modal */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} Entertainment Clones. Designed by Anupam Kumar.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EntertainmentShowcase;
