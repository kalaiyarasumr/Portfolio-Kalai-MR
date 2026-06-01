import { motion } from 'framer-motion';
import { FaLaptopCode, FaCloud, FaShieldAlt, FaServer, FaPalette, FaDatabase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web & Frontend Development',
      desc: 'Responsive, accessible and performant SPAs using React, Vite and Tailwind.',
      icon: FaLaptopCode,
      color: '#06b6d4'
    },
    {
      id: 2,
      title: 'Backend & API Development',
      desc: 'Scalable REST and GraphQL APIs with Node.js, Express, and modern databases.',
      icon: FaServer,
      color: '#f97316'
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      desc: 'Cloud architecture, deployments, CI/CD pipelines, and container orchestration.',
      icon: FaCloud,
      color: '#a855f7'
    },
    {
      id: 4,
      title: 'UI/UX & Product Design',
      desc: 'Clean interfaces, user flows, and product polish for modern web experiences.',
      icon: FaPalette,
      color: '#ec4899'
    },
    {
      id: 5,
      title: 'Data & Automation',
      desc: 'Data pipelines, ETL workflows, and automation for smarter business solutions.',
      icon: FaDatabase,
      color: '#22c55e'
    },
    {
      id: 6,
      title: 'Security & Reliability',
      desc: 'Application security reviews, authentication, performance, and monitoring.',
      icon: FaShieldAlt,
      color: '#10b981'
    }
  ];

  return (
    <section id="services" className="py-20 relative max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center space-x-2 text-purpleCustom mb-2">
          <span className="text-xs font-bold tracking-widest uppercase">Offerings</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          My <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-cyanCustom to-purpleCustom rounded-full mt-4"></div>
        <p className="text-slate-400 max-w-2xl mt-4">Practical, production-ready engineering and design services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-cyanCustom/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg" style={{ background: s.color + '12' }}>
                  <Icon size={22} style={{ color: s.color }} />
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
              </div>
              <p className="text-slate-400">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
