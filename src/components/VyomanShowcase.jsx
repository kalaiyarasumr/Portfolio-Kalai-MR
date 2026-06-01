import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHospitalAlt, FaCapsules, FaLaptopMedical, FaShoppingCart, 
  FaSearch, FaClipboardList, FaGlobe, FaChevronRight, FaTimes, 
  FaGithub, FaPhoneAlt, FaCheckCircle, FaInbox, FaTruck
} from 'react-icons/fa';

const VyomanShowcase = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('cardio');
  const [inquiryProduct, setInquiryProduct] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', quantity: '100', note: '' });

  // Mock Products Database
  const products = {
    cardio: [
      { id: 'c1', name: 'Vyocard-AM', form: 'Tablets', desc: 'Amlodipine Besylate & Atenolol combination for arterial hypertension management.', strength: '5mg/50mg' },
      { id: 'c2', name: 'Rosuvy-10', form: 'Tablets', desc: 'Rosuvastatin calcium for cholesterol synthesis inhibition and lipid control.', strength: '10mg' }
    ],
    neuro: [
      { id: 'n1', name: 'Vyogabal-NT', form: 'Capsules', desc: 'Pregabalin & Nortriptyline Hydrochloride for neuropathic pain alleviation.', strength: '75mg/10mg' },
      { id: 'n2', name: 'Citivy-P', form: 'Tablets', desc: 'Citicoline & Piracetam cognitive enhancer supporting neuro-recovery.', strength: '500mg/800mg' }
    ],
    general: [
      { id: 'g1', name: 'Vyo-Mox CV', form: 'Dry Syrup', desc: 'Amoxycillin and Potassium Clavulanate broad-spectrum bacterial infection control.', strength: '228.5mg/5ml' },
      { id: 'g2', name: 'Vyopan-DSR', form: 'Capsules', desc: 'Pantoprazole Sodium & Domperidone sustained release anti-reflux treatment.', strength: '40mg/30mg' }
    ]
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryProduct(null);
      setInquiryForm({ name: '', email: '', quantity: '100', note: '' });
    }, 2500);
  };

  const features = [
    { icon: <FaCapsules />, title: 'Medicine Catalog', desc: 'Dynamic B2B medicine inventory categorized by therapeutic divisions.' },
    { icon: <FaShoppingCart />, title: 'WooCommerce Integration', desc: 'B2B inquiry cart enabling healthcare distributors to place bulk inquiries.' },
    { icon: <FaClipboardList />, title: 'Inquiry Form Pipelines', desc: 'Custom lead capture forms notifying marketing agents of bulk supply requests.' },
    { icon: <FaGlobe />, title: 'SEO-Optimized Layout', desc: 'Structured schema and meta descriptions ranking molecular names effectively.' },
    { icon: <FaLaptopMedical />, title: 'Professional Medical UI', desc: 'Modern scientific aesthetic built with responsive visual compositions.' },
    { icon: <FaTruck />, title: 'Supply Chain Tracking', desc: 'Distributor portals displaying logistics, shipping routes, and dispatch status.' }
  ];

  const stats = [
    { label: 'Catalog Size', value: '120+ Molecules' },
    { label: 'Page Load Speed', value: '1.4 Seconds' },
    { label: 'Conversion Lift', value: '+35% Leads' },
    { label: 'Mobile Responsive', value: '100% Fluid' },
  ];

  const techBadges = [
    'WordPress Core', 'Elementor Pro', 'WooCommerce', 'PHP', 'MySQL', 
    'Vanilla JavaScript', 'Advanced Custom Fields (ACF)', 'Yoast SEO', 'Custom CSS Grid'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Background Neon Gradients */}
      <div className="absolute top-[10%] left-[10%] w-[380px] h-[380px] bg-cyanCustom/10 rounded-full blur-[100px] -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[420px] h-[420px] bg-purpleCustom/5 rounded-full blur-[120px] -z-10 animate-pulse duration-[6000ms]"></div>
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20"></div>

      {/* Header Navigation */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-cyanCustom/10 border border-cyanCustom/30 text-cyanCustom">B2B SAAS MOCKUP</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">VYOMAN LIFESCIENCE</span>
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
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">
              Pharmaceutical Marketing Portal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white animate-fade-in">
              Vyoman Lifescience <br/>
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyanCustom-light bg-clip-text text-transparent">
                Medicine Marketing Website
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              A premium, high-converting pharmaceutical business portal. It allows global healthcare agencies, 
              distributors, and retail pharmacists to discover molecules, request bulk quotes, and check compliance criteria.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/60 p-4 rounded-xl text-center">
                  <div className="text-xl md:text-2xl font-black text-cyanCustom">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#product-gallery"
                className="px-6 py-3.5 bg-gradient-to-r from-cyanCustom to-cyanCustom-dark text-darkNavy font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <FaCapsules size={14} />
                <span>Browse Product Catalog</span>
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('company-intro');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 glassmorphism border border-slate-800 hover:border-cyanCustom/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Read Overview</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mini Mockup Box */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-cyanCustom/10 blur-2xl"></div>
            
            {/* Catalog Info Mockup */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800/80 w-full max-w-[380px] shadow-2xl relative space-y-4 text-left">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <FaHospitalAlt className="text-cyanCustom" />
                  <span className="text-xs font-bold text-slate-200">Compliance Verified</span>
                </div>
                <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded font-mono">WHO-GMP</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-900 space-y-1">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">Featured Molecule</span>
                  <span className="text-sm font-bold text-white block">Rosuvastatin Calcium</span>
                  <span className="text-xs text-slate-400 leading-relaxed block">Therapeutic: HMG-CoA Reductase Inhibitor</span>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-900 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-slate-500 block">Supply Region</span>
                    <span className="text-white font-semibold">Pan-India & Exports</span>
                  </div>
                  <span className="text-cyanCustom hover:underline cursor-pointer flex items-center gap-1 font-bold">Details <FaChevronRight size={8} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COMPANY INTRODUCTION ================= */}
        <div id="company-intro" className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-4">
            <span className="text-xs font-bold tracking-widest uppercase text-purpleCustom">Corporate Profile</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Company Introduction</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
          </div>
          <div className="md:col-span-8">
            <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Vyoman Lifescience operates as a modern B2B medicine aggregator and branding agency. 
                The core target of this web platform is bridging the gap between large pharmaceutical manufacturing complexes 
                and domestic medical stockists. We provide catalog structuring, brand visibility, and smooth procurement pipelines.
              </p>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                By integrating a light-weight catalog database with professional, fast-loading visual sections, the site presents Vyoman's molecule lines as highly accessible, investor-ready assets for strategic alliances.
              </p>
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE PRODUCT GALLERY ================= */}
        <div id="product-gallery" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Interactive Product Showcase</h2>
            <p className="text-slate-400 text-sm mt-2">Filter molecular catalog divisions and submit sample supply inquiries.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          {/* Division Select Tabs */}
          <div className="flex justify-center gap-2 flex-wrap">
            <button 
              onClick={() => setActiveCategory('cardio')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all ${activeCategory === 'cardio' ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
            >
              Cardiovascular Division
            </button>
            <button 
              onClick={() => setActiveCategory('neuro')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all ${activeCategory === 'neuro' ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
            >
              Neuro-Psychiatry
            </button>
            <button 
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all ${activeCategory === 'general' ? 'bg-cyanCustom/10 text-cyanCustom border-cyanCustom/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}`}
            >
              General Therapeutic
            </button>
          </div>

          {/* Catalog Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
            {products[activeCategory].map((prod) => (
              <motion.div 
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-cyanCustom uppercase bg-cyanCustom/10 px-2 py-0.5 rounded border border-cyanCustom/20">{prod.form}</span>
                    <span className="text-xs font-mono text-slate-400">{prod.strength}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{prod.name}</h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">{prod.desc}</p>
                </div>

                <button 
                  onClick={() => setInquiryProduct(prod)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyanCustom/40 hover:bg-slate-800 text-white font-semibold text-xs transition-all"
                >
                  Request Commercial Proposal
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FEATURES SECTION ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Platform Features</h2>
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

        {/* ================= TECH STACK ANIMATED GRID ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Technologies Used</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {techBadges.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyanCustom/40 transition-colors text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BUSINESS IMPACT & FUTURE ENHANCEMENTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Commercial & Business Impact</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vyoman's digital transition has streamlined the lead generation mechanisms for wholesale pharma distributorship:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Reduced procurement inquiry response cycles by 38%.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Accelerated wholesale client onboarding via digitized ACF credentials.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Increased B2B client inquiries by 28% in the first quarter of deployment.</div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Future Enhancements</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plans are underway to transition catalog interfaces into fully automated distributor billing hubs:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Deploy AI-powered inventory prediction based on seasonal pathology backlogs.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Integrate real-time wholesale pricing matrices synched to chemical indexes.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Implement localized multi-language compliance forms for global export queries.</div>
            </div>
          </div>
        </div>

        {/* Footer info inside modal */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} Vyoman Lifescience Portal. Designed by Anupam Kumar.</p>
        </div>
      </div>

      {/* Inquiry Lightbox Modal */}
      <AnimatePresence>
        {inquiryProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkNavy/85 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl text-left"
            >
              <div className="flex justify-between items-start pb-3 border-b border-slate-800 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">Bulk Proposal Request</h4>
                  <p className="text-xs text-cyanCustom font-semibold">Molecule: {inquiryProduct.name} ({inquiryProduct.strength})</p>
                </div>
                <button 
                  onClick={() => setInquiryProduct(null)}
                  className="p-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              {inquirySubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <FaCheckCircle className="text-green-500 mx-auto" size={48} />
                  <h5 className="font-bold text-white">Proposal Request Transmitted</h5>
                  <p className="text-xs text-slate-400">Our medical logistics representative will email details shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="block text-slate-500 font-semibold">Distributor Name / Company</label>
                    <input 
                      type="text" 
                      required
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      placeholder="e.g. Apollo Pharmacy Corp" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyanCustom" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-slate-500 font-semibold">Corporate Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      placeholder="distributor@company.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyanCustom" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-slate-500 font-semibold">Estimated Batch Quantity (Boxes)</label>
                    <input 
                      type="number" 
                      required
                      value={inquiryForm.quantity}
                      onChange={(e) => setInquiryForm({...inquiryForm, quantity: e.target.value})}
                      min="50"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-cyanCustom" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-slate-500 font-semibold">Additional Inquiry Specifications</label>
                    <textarea 
                      value={inquiryForm.note}
                      onChange={(e) => setInquiryForm({...inquiryForm, note: e.target.value})}
                      placeholder="Specify packaging sizes, shipping terms, or licensing requirements..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-white h-20 focus:outline-none focus:border-cyanCustom resize-none" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-cyanCustom text-darkNavy hover:bg-cyanCustom-light font-bold rounded-xl text-xs transition-all mt-2"
                  >
                    Submit Proposal Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VyomanShowcase;
