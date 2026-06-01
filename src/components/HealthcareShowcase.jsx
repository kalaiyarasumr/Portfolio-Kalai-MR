import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarCheck, FaVials, FaRobot, FaUserClock, FaRegClock, FaComments, 
  FaUserShield, FaCreditCard, FaBell, FaMobileAlt, FaTimes, FaGithub, 
  FaExternalLinkAlt, FaChartLine, FaArrowRight, FaExclamationTriangle, FaCheckCircle, 
  FaUser, FaUserMd, FaFlask, FaUserCog, FaChevronRight, FaPlay, FaCircle
} from 'react-icons/fa';

const HealthcareShowcase = ({ onClose }) => {
  const [activeDashboard, setActiveDashboard] = useState('patient');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotMessages, setChatbotMessages] = useState([
    { sender: 'ai', text: 'Hi! I am your AI Health Assistant. How can I help you today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [queuePosition, setQueuePosition] = useState(4);
  const [waitTime, setWaitTime] = useState(24);

  // Send a message in simulated AI chatbot
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...chatbotMessages, { sender: 'user', text: userInput }];
    setChatbotMessages(newMessages);
    setUserInput('');

    // Simulated reply
    setTimeout(() => {
      let reply = "I've analyzed your symptom description. Please consult a doctor immediately for an accurate diagnosis, but you can book an appointment with Dr. Sharma (General Medicine) right now.";
      if (userInput.toLowerCase().includes('headache')) {
        reply = "A tension headache is common. Make sure you stay hydrated. I recommend booking a quick consultation if it persists.";
      } else if (userInput.toLowerCase().includes('appointment') || userInput.toLowerCase().includes('book')) {
        reply = "You can book an appointment via the Patient Dashboard. Dr. Anupam (Neurologist) has slots available at 4:30 PM today.";
      }
      setChatbotMessages(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 1000);
  };

  // Mock Data
  const stats = [
    { label: 'Real-time Queue Tracking', value: 'Live WebSocket' },
    { label: 'AI Assistant Accuracy', value: '94.2%' },
    { label: 'Avg. Queue Reduction', value: '45% less wait' },
    { label: 'Booking Speed', value: '< 2 Seconds' },
  ];

  const features = [
    { icon: <FaCalendarCheck />, title: 'Doctor Appointment Booking', desc: 'Instant slot allocation with automated calendar synchronization.' },
    { icon: <FaVials />, title: 'Lab Test Scheduling', desc: 'Secure booking for home sample collection or diagnostic centers.' },
    { icon: <FaRobot />, title: 'AI Health Assistant', desc: 'Symptom-checking engine providing initial assessments and triage recommendation.' },
    { icon: <FaUserClock />, title: 'Real-Time Queue Tracking', desc: 'Live waiting queue numbers updated in real time via WebSockets.' },
    { icon: <FaRegClock />, title: 'Estimated Waiting Prediction', desc: 'Dynamic machine learning predictions for patient waiting times.' },
    { icon: <FaComments />, title: 'Healthcare Chatbot', desc: '24/7 AI conversational support for general inquiries and booking help.' },
    { icon: <FaUserShield />, title: 'Role-Based Dashboards', desc: 'Dedicated portals for Patients, Doctors, Lab Partners, and Admins.' },
    { icon: <FaCreditCard />, title: 'Secure Payment Integration', desc: 'Built-in Razorpay checkout for consultations, tests, and medicines.' },
    { icon: <FaBell />, title: 'Live Notifications', desc: 'SMS and web push notifications warning when your turn is approaching.' },
    { icon: <FaMobileAlt />, title: 'Mobile Responsive Design', desc: 'Tailored mobile views looking exactly like native Android/iOS apps.' },
  ];

  const problems = [
    { title: "Long Clinic Waiting Times", desc: "Patients spend hours in physical waiting halls without knowing when their turn will come." },
    { title: "Manual Queue Handling", desc: "Clerks manage registers manually, leading to booking conflicts and chaos." },
    { title: "Missed Appointments", desc: "No reminder systems lead to high no-show rates for busy doctors." },
    { title: "Unorganized Booking Systems", desc: "Separate platforms for doctor booking, lab tests, and medical records." }
  ];

  const solutions = [
    { title: "AI Queue Time Prediction", desc: "Intelligent ML algorithms predict exact wait times based on check-in rate." },
    { title: "Live Patient Tracking", desc: "Patients track their queue position live from their smartphones, arriving just in time." },
    { title: "Smart Booking Workflows", desc: "Double-booking protection and seamless schedule matching algorithms." },
    { title: "Real-Time Notifications", desc: "WebSockets trigger alerts as queue moves, keeping patients constantly updated." }
  ];

  const techStack = {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'Socket.io'],
    database: ['PostgreSQL', 'Prisma ORM'],
    integrations: ['Razorpay', 'Google OAuth', 'AI Chatbot', 'Real-time Notifications']
  };

  const dashboardTabs = [
    { id: 'patient', name: 'Patient Portal', icon: <FaUser /> },
    { id: 'doctor', name: 'Doctor Console', icon: <FaUserMd /> },
    { id: 'lab', name: 'Lab Partner Hub', icon: <FaFlask /> },
    { id: 'admin', name: 'Admin Analytics', icon: <FaUserCog /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40"></div>
      
      {/* Glowing backdrop elements */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-cyanCustom/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-purpleCustom/10 rounded-full blur-[150px] -z-10"></div>

      {/* Case Study Header & Sticky Navbar */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2 py-1 rounded bg-cyanCustom/10 border border-cyanCustom/30 text-cyanCustom">CASE STUDY</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">MEDCONNECT SAAS</span>
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
            <span>Exit Case Study</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* ================= HERO SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">
              INVESTOR-READY HEALTHCARE ECOSYSTEM
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              AI-Powered Healthcare <br/>
              <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent">
                Queue & Appointment
              </span> Platform
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              “Revolutionizing Healthcare Booking & Queue Management with AI and Real-Time Systems.” 
              A highly scalable, multi-tenant SaaS platform resolving scheduling inefficiency, long wait times, and clinic overcrowding.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/60 p-4 rounded-xl">
                  <div className="text-lg md:text-xl font-black text-cyanCustom-light">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#interactive-demo"
                className="px-6 py-3 bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <FaPlay size={12} />
                <span>Explore Interactive Demo</span>
              </a>
              <a 
                href="https://github.com/aroy67258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glassmorphism border border-slate-800 hover:border-cyanCustom/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaGithub />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Mockup / Dashboard Preview */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyanCustom to-purpleCustom opacity-20 blur-xl"></div>
            
            {/* Live Queue Status Simulator Panel */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 relative z-10 w-full shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-sm font-bold text-slate-200">Live Doctor Cabin 1 Queue</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/30">Dr. Sharma</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-center">
                  <div className="text-3xl font-black text-white">{queuePosition}</div>
                  <div className="text-xs text-slate-400 mt-1">Your Position</div>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 text-center">
                  <div className="text-3xl font-black text-cyanCustom">{waitTime} <span className="text-xs font-normal">mins</span></div>
                  <div className="text-xs text-slate-400 mt-1">Est. Waiting Time</div>
                </div>
              </div>

              {/* Patient Timeline */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-slate-400 line-through">Token #10: Patient Consulted (1:45 PM)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-slate-400 line-through">Token #11: Patient in Cabin (Consulting...)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FaCircle className="text-cyanCustom animate-pulse text-xs" />
                  <span className="text-white font-medium">Token #12: Patient 3 (In Waiting Room)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FaCircle className="text-purpleCustom text-xs" />
                  <span className="text-purpleCustom-light font-bold">Token #13: You (Arrive by 2:05 PM)</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button 
                  onClick={() => {
                    if (queuePosition > 1) {
                      setQueuePosition(queuePosition - 1);
                      setWaitTime(waitTime - 6);
                    } else {
                      setQueuePosition(4);
                      setWaitTime(24);
                    }
                  }}
                  className="w-full py-2.5 rounded-lg bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20 hover:bg-cyanCustom hover:text-darkNavy transition-all text-xs font-bold"
                >
                  Simulate Queue Movement
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROBLEM & SOLUTION SECTION ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">The Challenge & The Resolution</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Problems Side */}
            <div className="glassmorphism p-8 rounded-2xl border border-red-500/20 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-red-500/10"><FaExclamationTriangle size={120} /></div>
              <h3 className="text-xl font-bold text-red-400 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>The Problem in Traditional Systems</span>
              </h3>
              <div className="space-y-4">
                {problems.map((prob, i) => (
                  <div key={i} className="flex space-x-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm md:text-base">{prob.title}</h4>
                      <p className="text-xs md:text-sm text-slate-400">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Side */}
            <div className="glassmorphism p-8 rounded-2xl border border-green-500/20 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-green-500/10"><FaCheckCircle size={120} /></div>
              <h3 className="text-xl font-bold text-green-400 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>The MedConnect SaaS Solution</span>
              </h3>
              <div className="space-y-4">
                {solutions.map((sol, i) => (
                  <div key={i} className="flex space-x-3">
                    <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm md:text-base">{sol.title}</h4>
                      <p className="text-xs md:text-sm text-slate-400">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE DASHBOARD SHOWCASE ================= */}
        <div id="interactive-demo" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Multi-Tenant Dashboard Showcase</h2>
            <p className="text-slate-400 text-sm mt-2">Click tabs to toggle between distinct user roles within the platform.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {dashboardTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDashboard(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  activeDashboard === tab.id 
                    ? 'bg-gradient-to-r from-cyanCustom/20 to-purpleCustom/20 text-white border-cyanCustom/50 shadow-md shadow-cyanCustom/5'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Interactive Screen Display */}
          <div className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyanCustom/5 rounded-full blur-3xl pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {activeDashboard === 'patient' && (
                <motion.div
                  key="patient"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Welcome Back, Kalaiyarasu M R</h3>
                      <p className="text-xs text-slate-400">Patient ID: PAT-8493</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">Active Session</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Live Booking Card */}
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs text-slate-400 font-semibold uppercase">Consultation</span>
                          <span className="text-xs font-bold text-cyanCustom">Today</span>
                        </div>
                        <h4 className="font-bold text-white text-base">Dr. Sharma (Cardiologist)</h4>
                        <p className="text-xs text-slate-400 mt-1">Room 102, City Life Clinic</p>
                        <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between text-xs">
                          <div>
                            <span className="block text-slate-500 font-semibold">Your Token</span>
                            <span className="font-bold text-white text-lg">Token #13</span>
                          </div>
                          <div className="text-right">
                            <span className="block text-slate-500 font-semibold">Live Cabin #</span>
                            <span className="font-bold text-cyanCustom text-lg">Token #11</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setChatbotOpen(true)}
                        className="mt-4 w-full py-2 rounded-xl bg-cyanCustom text-darkNavy hover:bg-cyanCustom-light transition-all text-xs font-bold"
                      >
                        Consult AI Assistant
                      </button>
                    </div>

                    {/* Lab Reports Card */}
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase block">Recent Lab Bookings</span>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <span className="font-bold text-white block">Full Body Health Checkup</span>
                            <span className="text-slate-500">Collected: Yesterday</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-[10px]">Processing</span>
                        </div>
                        <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-900">
                          <div>
                            <span className="font-bold text-white block">Lipid Profile Test</span>
                            <span className="text-slate-500">Collected: 5 Days ago</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[10px]">Ready</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Appointment Booking */}
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase block">Quick Actions</span>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <button className="p-3 bg-slate-900 border border-slate-800 hover:border-cyanCustom/30 text-white rounded-xl transition-all font-semibold flex flex-col items-center justify-center space-y-2 text-center">
                          <FaCalendarCheck className="text-cyanCustom" size={16} />
                          <span>Book Doctor</span>
                        </button>
                        <button className="p-3 bg-slate-900 border border-slate-800 hover:border-purpleCustom/30 text-white rounded-xl transition-all font-semibold flex flex-col items-center justify-center space-y-2 text-center">
                          <FaVials className="text-purpleCustom" size={16} />
                          <span>Book Lab Test</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboard === 'doctor' && (
                <motion.div
                  key="doctor"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Dr. Anjali Sharma, MD</h3>
                      <p className="text-xs text-slate-400">Department: Cardiology | City Life Clinic</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20">Active Shift</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Patient Queue Management */}
                    <div className="lg:col-span-2 bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400 font-semibold uppercase">Consultation Queue ({queuePosition + 3} Patients Waiting)</span>
                        <span className="text-xs font-bold text-purpleCustom-light">Next up: Token #12</span>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left text-slate-300">
                          <thead>
                            <tr className="border-b border-slate-900 text-slate-500 uppercase">
                              <th className="py-2">Token</th>
                              <th className="py-2">Patient</th>
                              <th className="py-2">Symptom</th>
                              <th className="py-2">Status</th>
                              <th className="py-2 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-slate-900">
                              <td className="py-3 font-bold">#11</td>
                              <td className="py-3 text-white">Rajesh Kumar</td>
                              <td className="py-3">Mild Chest Tightness</td>
                              <td className="py-3"><span className="text-green-400 bg-green-500/10 px-2 py-0.5 rounded text-[10px]">In Consultation</span></td>
                              <td className="py-3 text-right">
                                <button className="px-3 py-1 bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20 rounded hover:bg-purpleCustom hover:text-white transition-all">Prescribe</button>
                              </td>
                            </tr>
                            <tr className="border-b border-slate-900 text-slate-400">
                              <td className="py-3 font-bold">#12</td>
                              <td className="py-3">Sunita Devi</td>
                              <td className="py-3">Follow-up BP Check</td>
                              <td className="py-3"><span className="text-cyanCustom bg-cyanCustom/10 px-2 py-0.5 rounded text-[10px]">Next</span></td>
                              <td className="py-3 text-right">
                                <button className="px-3 py-1 bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded transition-all">Call In</button>
                              </td>
                            </tr>
                            <tr className="text-slate-400">
                              <td className="py-3 font-bold">#13</td>
                              <td className="py-3">Kalaiyarasu M R</td>
                              <td className="py-3">Arrhythmia Screening</td>
                              <td className="py-3"><span className="text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded text-[10px]">Waiting</span></td>
                              <td className="py-3 text-right">
                                <span className="text-slate-600">—</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Schedule Slots overview */}
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase block">Shift Analytics</span>
                      <div className="space-y-3.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Shift Time:</span>
                          <span className="text-white">09:00 AM - 03:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Patients Met:</span>
                          <span className="text-white font-bold">14</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Average consult time:</span>
                          <span className="text-cyanCustom font-bold">11.8 Mins</span>
                        </div>
                        <div className="pt-3 border-t border-slate-900">
                          <span className="text-slate-500 font-semibold block mb-2">Dr. Status:</span>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] cursor-pointer">Active</span>
                            <span className="px-2 py-1 rounded bg-slate-900 text-slate-500 text-[10px] cursor-pointer">On Break</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboard === 'lab' && (
                <motion.div
                  key="lab"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Diagnostics Lab Portal</h3>
                      <p className="text-xs text-slate-400">Branch: Apollo Diagnostics, Sector 4</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purpleCustom/10 text-purpleCustom border border-purpleCustom/20">Lab Partner</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Collection Requests */}
                    <div className="md:col-span-2 bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase block">Pending Sample Collections</span>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs p-3 bg-slate-900/60 rounded-xl border border-slate-900">
                          <div>
                            <span className="font-bold text-white block">Home Collection (Lipid Profile)</span>
                            <span className="text-slate-500">Address: Flat 402, Block C, Samastipur</span>
                          </div>
                          <button className="px-3 py-1.5 bg-cyanCustom text-darkNavy font-bold rounded-lg hover:bg-cyanCustom-light transition-all text-[11px]">Assign Rider</button>
                        </div>
                        <div className="flex justify-between items-center text-xs p-3 bg-slate-900/60 rounded-xl border border-slate-900">
                          <div>
                            <span className="font-bold text-white block">Lab Visit (CBC Test)</span>
                            <span className="text-slate-500">Schedule Time: 04:30 PM Today</span>
                          </div>
                          <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded font-semibold text-[10px]">Patient Arriving</span>
                        </div>
                      </div>
                    </div>

                    {/* Upload Report Panel */}
                    <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-4">
                      <span className="text-xs text-slate-400 font-semibold uppercase block">Quick Report Upload</span>
                      <div className="space-y-3.5 text-xs">
                        <div className="space-y-1">
                          <label className="block text-slate-500">Patient ID / Booking ID</label>
                          <input type="text" placeholder="e.g. LAB-1049" className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white focus:outline-none focus:border-cyanCustom" />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-slate-500">Select PDF Report File</label>
                          <div className="border border-dashed border-slate-800 hover:border-purpleCustom/50 rounded-xl p-4 text-center cursor-pointer transition-colors text-slate-400 text-xs">
                            Click to upload PDF
                          </div>
                        </div>
                        <button className="w-full py-2 bg-purpleCustom hover:bg-purpleCustom-dark text-white font-bold rounded-xl transition-all">Submit & Notify Patient</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboard === 'admin' && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Central SaaS Controller</h3>
                      <p className="text-xs text-slate-400">Total Clinics Registered: 124</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Root Administrator</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Tiny Stat 1 */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-500 block">Total Bookings Today</span>
                      <span className="text-2xl font-black text-white">2,842</span>
                      <span className="text-[10px] text-green-400 block mt-1">+14.2% from yesterday</span>
                    </div>
                    {/* Tiny Stat 2 */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-500 block">Average System Delay</span>
                      <span className="text-2xl font-black text-cyanCustom">0.45s</span>
                      <span className="text-[10px] text-slate-500 block mt-1">Healthy latency</span>
                    </div>
                    {/* Tiny Stat 3 */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-500 block">Revenue processed</span>
                      <span className="text-2xl font-black text-purpleCustom-light">₹4.8L</span>
                      <span className="text-[10px] text-green-400 block mt-1">99.8% Payment success</span>
                    </div>
                    {/* Tiny Stat 4 */}
                    <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-500 block">WebSocket Connections</span>
                      <span className="text-2xl font-black text-white">14.1K</span>
                      <span className="text-[10px] text-green-400 block mt-1">Live active subscriptions</span>
                    </div>
                  </div>

                  {/* Simulated SVG Graph for System Analytics */}
                  <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                    <span className="text-xs text-slate-400 font-semibold uppercase block mb-4">Patient Queue Load (Hourly distribution)</span>
                    <div className="h-32 flex items-end gap-2 pt-4">
                      <div className="w-full bg-slate-900 rounded-t h-[20%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">9am: 20%</span></div>
                      <div className="w-full bg-slate-900 rounded-t h-[40%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">10am: 40%</span></div>
                      <div className="w-full bg-slate-900 rounded-t h-[75%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">11am: 75%</span></div>
                      <div className="w-full bg-slate-900 rounded-t h-[90%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">12pm: 90%</span></div>
                      <div className="w-full bg-slate-900 rounded-t h-[30%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">1pm: 30%</span></div>
                      <div className="w-full bg-slate-900 rounded-t h-[55%] relative group cursor-pointer hover:bg-cyanCustom/20"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2pm: 55%</span></div>
                      <div className="w-full bg-gradient-to-t from-cyanCustom/20 to-cyanCustom rounded-t h-[80%] relative group cursor-pointer"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-slate-850 px-1 py-0.5 rounded text-white opacity-100">Now: 80%</span></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ================= FEATURES SECTION ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-cyanCustom">ROBUST & SECURE ARCHITECTURE</span>
            <h2 className="text-3xl font-extrabold text-white">Full-Stack Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 hover:shadow-[0_4px_20px_rgba(6,182,212,0.06)] transition-all group text-left"
              >
                <div className="p-3.5 rounded-xl bg-cyanCustom/10 text-cyanCustom w-fit mb-4 group-hover:bg-cyanCustom group-hover:text-darkNavy transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= TECH STACK SECTION ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">The Tech Stack</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
            {/* Frontend */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 text-left">
              <h3 className="text-base font-bold text-cyanCustom mb-4 border-b border-slate-900 pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold">{t}</span>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 text-left">
              <h3 className="text-base font-bold text-purpleCustom mb-4 border-b border-slate-900 pb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold">{t}</span>
                ))}
              </div>
            </div>
            {/* Database */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 text-left">
              <h3 className="text-base font-bold text-cyanCustom-light mb-4 border-b border-slate-900 pb-2">Database</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.database.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold">{t}</span>
                ))}
              </div>
            </div>
            {/* Integrations */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 text-left">
              <h3 className="text-base font-bold text-purpleCustom-light mb-4 border-b border-slate-900 pb-2">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.integrations.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROJECT IMPACT SECTION ================= */}
        <div className="glassmorphism p-8 md:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyanCustom/10 to-purpleCustom/10 opacity-30"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-cyanCustom">MISSION STATEMENT</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Targeted Platform Impact</h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              MedConnect SaaS aims to streamline operations in highly complex clinics and medium-scale labs. By digitizing healthcare booking mechanics and providing predictive waiting graphs, we enhance quality of care and clinic workflows.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-xs font-bold text-slate-200">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Reduce waiting times</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Enhance patient UX</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Optimize clinic workload</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Digitize diagnostic pipelines</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Predict queue backlogs</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl md:col-span-1 col-span-2">Multi-role synchronization</div>
            </div>
          </div>
        </div>

        {/* Footer info inside modal */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} MedConnect Case Study. Engineered by Kalaiyarasu M R.</p>
        </div>
      </div>

      {/* Floating AI Agent Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {chatbotOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glassmorphism border border-cyanCustom/30 w-[300px] sm:w-[350px] h-[400px] rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden mb-4"
            >
              {/* Chat Header */}
              <div className="p-4 bg-gradient-to-r from-cyanCustom to-purpleCustom flex justify-between items-center text-white">
                <div className="flex items-center space-x-2">
                  <FaRobot />
                  <span className="text-xs font-bold uppercase tracking-wider">AI Assistant (Demo)</span>
                </div>
                <button onClick={() => setChatbotOpen(false)} className="text-white hover:text-darkNavy"><FaTimes /></button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs text-left bg-slate-950/80">
                {chatbotMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${msg.sender === 'user' ? 'bg-cyanCustom text-darkNavy font-medium rounded-tr-none' : 'bg-slate-800 text-slate-200 rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-2 border-t border-slate-900 bg-slate-900/60 flex items-center gap-2">
                <input 
                  type="text" 
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about symptoms or bookings..." 
                  className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyanCustom rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                />
                <button type="submit" className="px-3 py-2 bg-cyanCustom text-darkNavy font-bold rounded-lg text-xs">Send</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Button */}
        <button 
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="p-4 bg-gradient-to-r from-cyanCustom to-purpleCustom text-white rounded-full shadow-lg hover:shadow-cyanCustom/20 flex items-center justify-center transition-all hover:scale-105"
        >
          <FaRobot size={22} />
        </button>
      </div>

    </motion.div>
  );
};

export default HealthcareShowcase;
