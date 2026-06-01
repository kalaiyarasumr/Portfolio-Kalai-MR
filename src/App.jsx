import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  FaChevronRight, FaGraduationCap, FaProjectDiagram, FaPhoneAlt, FaEnvelope, 
  FaInstagram, FaLinkedinIn, FaCertificate, FaBookOpen, FaFileAlt, FaCalendarAlt, 
  FaUser, FaExternalLinkAlt, FaGithub, FaAward, FaTrophy, FaMedal, FaStar, FaCode, 
  FaBrain, FaCloud, FaGlobe, FaChalkboardTeacher, FaPython, FaDatabase, 
  FaNetworkWired, FaShieldAlt, FaChartLine, FaRobot, FaMicrochip, FaIndustry,
  FaLinux, FaDocker, FaAws, FaMicrosoft, FaCheckCircle, FaUniversity, FaLaptopCode,
  FaClock, FaGraduationCap as FaEducation, FaChartBar, FaCogs, FaObjectGroup
} from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiInfosys, SiGooglecloud, SiPython, SiJavascript, SiReact } from 'react-icons/si';
import Navbar from './components/Navbar';
import TechnicalExpertise from './components/TechnicalExpertise';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Services from './components/Services';
import HealthcareShowcase from './components/HealthcareShowcase';
import EduMindShowcase from './components/EduMindShowcase';
import VyomanShowcase from './components/VyomanShowcase';
import EntertainmentShowcase from './components/EntertainmentShowcase';
import FeedbackSection from './components/FeedbackSection';
import Blog from './components/Blog';

// Home Page Component
function HomePage({ 
  setSelectedCaseStudy, 
  setSelectedEduMind, 
  setSelectedVyoman, 
  setSelectedEntertainment,
  projectsData,
  educationData 
}) {
  // Certifications Data - Your specific certifications
  const certifications = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      issuerIcon: SiCoursera,
      date: "2025",
      credential: "COURSERA-DSA-2025",
      icon: FaCode,
      color: "#06b6d4",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
      skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting", "Searching"],
      level: "Advanced",
      duration: "40 hours",
      certificateLink: "#"
    },
    {
      id: 2,
      title: "Object-Oriented Programming Advanced",
      issuer: "Udemy",
      issuerIcon: SiUdemy,
      date: "2025",
      credential: "UDEMY-OOP-2025",
      icon: FaObjectGroup,
      color: "#a855f7",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400",
      skills: ["Classes", "Inheritance", "Polymorphism", "Encapsulation", "Design Patterns", "SOLID Principles"],
      level: "Advanced",
      duration: "35 hours",
      certificateLink: "#"
    },
    {
      id: 3,
      title: "Python Developer Certification",
      issuer: "Infosys",
      issuerIcon: SiInfosys,
      date: "2025",
      credential: "INFOSYS-PYTHON-2025",
      icon: FaPython,
      color: "#f97316",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400",
      skills: ["Python Core", "Flask/Django", "APIs", "Testing", "Debugging", "Code Optimization"],
      level: "Professional",
      duration: "60 hours",
      certificateLink: "#"
    },
    {
      id: 4,
      title: "NASSCOM Digital 101 - Bronze",
      issuer: "NASSCOM",
      issuerIcon: FaCertificate,
      date: "2025",
      credential: "NASSCOM-DIGITAL-BRONZE",
      icon: FaAward,
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400",
      skills: ["Digital Literacy", "Industry 4.0", "Emerging Technologies", "Digital Transformation"],
      level: "Bronze",
      duration: "20 hours",
      certificateLink: "#"
    },
    {
      id: 5,
      title: "Cloud Computing",
      issuer: "NPTEL",
      issuerIcon: FaCertificate,
      date: "2025",
      credential: "NPTEL-CLOUD-2025",
      icon: FaCloud,
      color: "#06b6d4",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      skills: ["IaaS", "PaaS", "SaaS", "Virtualization", "Cloud Security", "AWS Basics"],
      level: "Elite",
      duration: "12 weeks",
      certificateLink: "#"
    },
    {
      id: 6,
      title: "Industrial Internet of Things (IIoT)",
      issuer: "NPTEL",
      issuerIcon: FaCertificate,
      date: "2025",
      credential: "NPTEL-IIOT-2025",
      icon: FaIndustry,
      color: "#f97316",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400",
      skills: ["IIoT Architecture", "Sensors", "Industrial Automation", "M2M Communication", "Edge Computing"],
      level: "Elite",
      duration: "12 weeks",
      certificateLink: "#"
    },
    {
      id: 7,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      issuerIcon: SiCoursera,
      date: "2025",
      credential: "COURSERA-ML-2025",
      icon: FaBrain,
      color: "#a855f7",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "NLP", "Computer Vision"],
      level: "Advanced",
      duration: "50 hours",
      certificateLink: "#"
    },
    {
      id: 8,
      title: "Design and Analysis of Algorithms",
      issuer: "Coursera",
      issuerIcon: SiCoursera,
      date: "2025",
      credential: "COURSERA-DAA-2025",
      icon: FaChartLine,
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
      skills: ["Algorithm Analysis", "Divide & Conquer", "Dynamic Programming", "Greedy Algorithms", "Graph Algorithms"],
      level: "Advanced",
      duration: "45 hours",
      certificateLink: "#"
    }
  ];

  // Publications Data
  const publications = [
    {
      id: 1,
      title: "A Secure and Anonymous Cloud Data Sharing Framework with Attribute-Based Proxy Re-Encryption",
      authors: "K. Karthikeyan, P. Narendar, Kalaiyarasu M R",
      conference: "2025 6th International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS)",
      publisher: "IEEE",
      location: "Bengaluru, India",
      year: "2025",
      date: "15-17 December 2025",
      addedToXplore: "01 January 2026",
      doi: "10.1109/ICICNIS66685.2025.11315528",
      abstract: "This research introduces a novel framework for secure cloud data sharing using attribute-based proxy re-encryption, ensuring data privacy and access control in cloud environments. The proposed framework leverages attribute-based encryption (ABE) with proxy re-encryption techniques to enable secure and anonymous data sharing in cloud computing platforms.",
      keywords: ["Cloud Security", "Proxy Re-Encryption", "Attribute-Based Encryption", "Data Privacy", "Cloud Computing", "Access Control"],
      isConference: true,
      link: "https://ieeexplore.ieee.org/document/11315528"
    }
  ];

  // Stats for certifications
  const totalCertifications = certifications.length;
  const uniqueIssuers = [...new Set(certifications.map(cert => cert.issuer))];

  return (
    <>
      <Hero />
      <AboutMe />
    <TechnicalExpertise />
    <Services />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute top-[20%] right-0 w-[280px] h-[280px] bg-purpleCustom/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-purpleCustom mb-2">
            <FaProjectDiagram />
            <span className="text-xs font-bold tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Recent <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-2xl mt-4">
            Innovative solutions and real-world applications I've developed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glassmorphism p-8 rounded-2xl border border-slate-800 hover:border-purpleCustom/40 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-cyanCustom/10 text-cyanCustom-light border border-cyanCustom/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon && <project.icon size={26} className="text-cyanCustom" />}
                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                  </div>
                  <ul className="space-y-2.5 text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-cyanCustom mt-1.5 flex-shrink-0">
                          <FaChevronRight size={10} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.isCaseStudy && (
                  <button 
                    onClick={() => setSelectedCaseStudy(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Investor Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isEduMindCaseStudy && (
                  <button 
                    onClick={() => setSelectedEduMind(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View AI Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isVyomanCaseStudy && (
                  <button 
                    onClick={() => setSelectedVyoman(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Pharma Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.isEntertainmentCaseStudy && (
                  <button 
                    onClick={() => setSelectedEntertainment(true)}
                    className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>View Entertainment Case Study</span>
                    <FaChevronRight size={12} />
                  </button>
                )}
                {project.githubUrl && !project.isCaseStudy && !project.isEduMindCaseStudy && !project.isVyomanCaseStudy && !project.isEntertainmentCaseStudy && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full inline-flex py-3.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all items-center justify-center space-x-2 border border-white/10"
                  >
                    <FaGithub size={14} />
                    <span>View on GitHub</span>
                    <FaChevronRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute top-[15%] left-0 w-[300px] h-[300px] bg-cyanCustom/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-cyanCustom mb-2">
            <FaBookOpen />
            <span className="text-xs font-bold tracking-widest uppercase">Research</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Publications</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-2xl mt-4">
            Research paper published in IEEE International Conference
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300"
            >
              <div className="flex flex-col gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30">
                      <span className="flex items-center gap-1">
                        <FaFileAlt size={10} />
                        IEEE Xplore
                      </span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purpleCustom/10 text-purpleCustom text-xs font-semibold border border-purpleCustom/30">
                      Conference Paper
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 hover:text-cyanCustom transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <p className="text-slate-300 text-sm md:text-base">
                      <span className="font-semibold text-cyanCustom">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-slate-300 text-sm md:text-base">
                      <span className="font-semibold text-cyanCustom">Conference:</span> {pub.conference}
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                      <p>
                        <span className="font-semibold text-slate-300">Publisher:</span> {pub.publisher}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-300">Location:</span> {pub.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                      <p>
                        <span className="font-semibold text-slate-300">Conference Date:</span> {pub.date}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-300">Added to IEEE Xplore:</span> {pub.addedToXplore}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm md:text-base mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, i) => (
                      <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-400">
                        #{keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    <a 
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyanCustom/20 to-purpleCustom/20 text-cyanCustom hover:text-purpleCustom transition-all duration-300 border border-cyanCustom/30 hover:border-purpleCustom/30"
                    >
                      <FaExternalLinkAlt size={12} />
                      View on IEEE Xplore
                    </a>
                    <span className="text-sm text-slate-500">
                      DOI: {pub.doi}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section - Your certifications */}
      <section id="certifications" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute bottom-[20%] right-0 w-[280px] h-[280px] bg-purpleCustom/10 rounded-full blur-[80px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-purpleCustom mb-2">
            <FaCertificate />
            <span className="text-xs font-bold tracking-widest uppercase">Credentials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Professional <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-2xl mt-4">
            Industry-recognized certifications from leading platforms
          </p>
          
          {/* Stats Badge */}
          <div className="mt-4 flex gap-3 flex-wrap justify-center">
            <div className="glassmorphism px-4 py-2 rounded-full border border-cyanCustom/30">
              <FaAward className="inline text-cyanCustom mr-2" />
              <span className="text-cyanCustom font-bold">{totalCertifications}+</span>
              <span className="text-slate-400 text-sm ml-1">Certifications</span>
            </div>
            <div className="glassmorphism px-4 py-2 rounded-full border border-purpleCustom/30">
              <FaUniversity className="inline text-purpleCustom mr-2" />
              <span className="text-purpleCustom font-bold">{uniqueIssuers.length}</span>
              <span className="text-slate-400 text-sm ml-1">Platforms</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const IssuerIcon = cert.issuerIcon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glassmorphism rounded-2xl overflow-hidden border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 right-2">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                      <Icon size={20} style={{ color: cert.color }} />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <div className="px-2 py-1 rounded-lg bg-black/50 backdrop-blur-sm flex items-center gap-1">
                      <IssuerIcon size={12} style={{ color: cert.color }} />
                      <span className="text-[10px] text-white font-semibold">{cert.issuer}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white group-hover:text-cyanCustom transition-colors line-clamp-2 flex-1">
                      {cert.title}
                    </h3>
                    <div className={`px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${
                      cert.level === 'Advanced' ? 'bg-purpleCustom/20 text-purpleCustom' :
                      cert.level === 'Professional' ? 'bg-cyanCustom/20 text-cyanCustom' :
                      cert.level === 'Elite' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {cert.level}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={10} />
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={10} />
                      {cert.duration}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.slice(0, 4).map((skill, i) => (
                      <span key={i} className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        +{cert.skills.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-[10px] text-slate-500 truncate">
                    <FaCheckCircle className="inline mr-1 text-green-500" size={8} />
                    {cert.credential}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Experience />

      {/* Education Section */}
      <section id="education" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="absolute bottom-0 right-[15%] w-[320px] h-[320px] bg-cyanCustom/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-cyanCustom mb-2">
            <FaGraduationCap />
            <span className="text-xs font-bold tracking-widest uppercase">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
          <p className="text-slate-400 max-w-2xl mt-4">
            Academic journey and educational qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300 relative flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-white pt-2">{edu.school}</h3>
                <p className="text-sm text-slate-400 font-medium">{edu.location}</p>
                <p className="text-slate-300 text-sm md:text-base pt-1">{edu.degree}</p>
              </div>
              <div className="md:text-right flex-shrink-0">
                <span className="text-lg font-bold text-cyanCustom">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FeedbackSection />

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 glassmorphism border-t border-slate-800/80 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Kalaiyarasu M R</h3>
            <p className="text-sm text-slate-400">Aspiring Software Development Engineer | Open for opportunities</p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <FaStar className="text-yellow-500 text-sm" />
              <span className="text-xs text-slate-500">Graduated: May 2026</span>
              <FaStar className="text-yellow-500 text-sm" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2.5 text-sm text-slate-400">
            <a href="mailto:kalaiyarasumr@gmail.com" className="hover:text-cyanCustom transition-colors duration-300 flex items-center space-x-2 group">
              <FaEnvelope className="group-hover:scale-110 transition-transform" /> 
              <span>kalaiyarasumr@gmail.com</span>
            </a>
            <a href="tel:+919709463351" className="hover:text-purpleCustom transition-colors duration-300 flex items-center space-x-2 group">
              <FaPhoneAlt className="group-hover:scale-110 transition-transform" /> 
              <span>+91-9709463351</span>
            </a>
            <a href="https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/" target="_blank" rel="noopener noreferrer" className="hover:text-cyanCustom transition-colors duration-300 flex items-center space-x-2 group">
              <FaLinkedinIn className="group-hover:scale-110 transition-transform" /> 
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://www.instagram.com/kalai._.rexx/" target="_blank" rel="noopener noreferrer" className="hover:text-purpleCustom transition-colors duration-300 flex items-center space-x-2 group">
              <FaInstagram className="group-hover:scale-110 transition-transform" /> 
              <span>@kalai._.rexx</span>
            </a>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs text-slate-600">Built with React & Tailwind</span>
              <span className="text-xs text-slate-600">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Main App Component with Routing
function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(false);
  const [selectedEduMind, setSelectedEduMind] = useState(false);
  const [selectedVyoman, setSelectedVyoman] = useState(false);
  const [selectedEntertainment, setSelectedEntertainment] = useState(false);

  const projectsData = [
    {
      title: "AI-Powered Healthcare Queue & Appointment Platform (Ongoing)",
      icon: FaRobot,
      techs: ["Next.js", "React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Prisma"],
      bullets: [
        "Developing a full-stack multi-tenant SaaS platform modeled after service-based systems like Zomato & OYO.",
        "Engineered real-time queue tracking & estimated waiting times via WebSockets (Socket.io) and smart ML models.",
        "Integrated AI Health Assistant symptom checker chatbot and secure Payment Gateways (Razorpay).",
        "Includes specialized, responsive dashboards for Patients, Doctors, Lab Partners, and Admins."
      ],
      isCaseStudy: true
    },
    {
      title: "CampusMarketPlace — React + Spring Boot",
      icon: FaLaptopCode,
      techs: ["React", "Spring Boot", "Java", "REST API", "MySQL"],
      bullets: [
        "Built a marketplace application with product listings, seller dashboard, and customer workflows.",
        "Implemented secure authentication, role-based access, and RESTful APIs across frontend and backend.",
        "Designed responsive React views for product browsing, cart management, and checkout flows.",
        "Engineered the backend to support scalable commerce operations and seller management." 
      ],
      githubUrl: "https://github.com/kalaiyarasumr/CampusMarketPlace---React-SpringBoot"
    },
    {
      title: "Learning DSA Series — Java Algorithms",
      icon: FaCode,
      techs: ["Java", "Algorithms", "Data Structures", "Interview Prep"],
      bullets: [
        "Created a complete DSA learning series with Java implementations for arrays, trees, graphs, and sorting.",
        "Structured algorithm examples for easy practice, comparison, and step-by-step learning.",
        "Focused on performance, readability, and reusable code for interview preparation.",
        "Built a strong foundation for technical interviews and problem-solving skills." 
      ],
      githubUrl: "https://github.com/kalaiyarasumr/Learning-DSA-Series"
    },
    {
      title: "NexLab — Hall Reservation UI",
      icon: FaLaptopCode,
      techs: ["Figma", "UI/UX", "Frontend", "Responsive Design"],
      bullets: [
        "Designed a modern, intuitive interface for a hall reservation system inspired by Figma and Behance.",
        "Created clear user flows for booking, scheduling, and event management in a polished dashboard style.",
        "Emphasized responsive layout, clean card design, and strong visual hierarchy for usability.",
        "Showcased UI/UX design excellence through a professional reservation portal concept." 
      ],
      githubUrl: "https://github.com/kalaiyarasumr/NexLab"
    },
    {
      title: "Music Streaming Service",
      icon: FaCloud,
      techs: ["JavaScript", "HTML", "CSS", "Audio Player", "UI/UX"],
      bullets: [
        "Developed a responsive music streaming interface with playlists, playback controls, and audio cards.",
        "Designed clean visuals for a modern listening experience across desktop and mobile.",
        "Implemented interactive controls, volume settings, and dynamic track browsing features.",
        "Showcased a polished frontend for music discovery and user engagement." 
      ],
      githubUrl: "https://github.com/kalaiyarasumr/Music-Streaming-Service"
    },
    {
      title: "Maharishi Organic Website",
      icon: FaGlobe,
      techs: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      bullets: [
        "Created an organic products marketing website with clean branding and product showcases.",
        "Built user-friendly navigation, product sections, and modern visuals for an ecommerce-style landing page.",
        "Optimized the layout for mobile-first browsing and strong conversion flow.",
        "Delivered a polished web presence for organic brand messaging and customer trust." 
      ],
      githubUrl: "https://github.com/kalaiyarasumr/Maharishi-Organic-Website"
    }
  ];

  const educationData = [
    {
      school: "K.S.R Rangasamy College of Technology",
      location: "Tiruchengode, Tamil Nadu",
      degree: "Bachelor of Technology in Computer Science and Business Systems",
      period: "2022 - 2026",
      grade: "CGPA: 8/10"
    },
    {
      school: "Sree Saravana Niketan Matric Higher Secondary School",
      location: "NERINJIPETTAI, AMMAPETTAI-ERODE, ERODE, Tamil Nadu",
      degree: " Higher Secondary (Class 12th) - State Board",
      period: "2020 - 2022",
      grade: "Percentage: 81.6%"
    },
    {
      school: "Sree Saravana Niketan Matric Higher Secondary School",
      location: "NERINJIPETTAI, AMMAPETTAI-ERODE, ERODE, Tamil Nadu",
      degree: "Secondary School (Class 10th) - State Board",
      period: "2019 - 2020",
      grade: "Percentage: 84.8%"
    }
  ];

  return (
    <Router>
      <div className="bg-transparent text-slate-100 min-h-screen flex flex-col font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <HomePage 
              setSelectedCaseStudy={setSelectedCaseStudy}
              setSelectedEduMind={setSelectedEduMind}
              setSelectedVyoman={setSelectedVyoman}
              setSelectedEntertainment={setSelectedEntertainment}
              projectsData={projectsData}
              educationData={educationData}
            />
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* Full-Screen Case Study Modals */}
        <AnimatePresence>
          {selectedCaseStudy && (
            <HealthcareShowcase onClose={() => setSelectedCaseStudy(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedEduMind && (
            <EduMindShowcase onClose={() => setSelectedEduMind(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedVyoman && (
            <VyomanShowcase onClose={() => setSelectedVyoman(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selectedEntertainment && (
            <EntertainmentShowcase onClose={() => setSelectedEntertainment(false)} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;