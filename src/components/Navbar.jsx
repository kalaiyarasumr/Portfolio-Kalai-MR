import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'About', path: '/#about', isHash: true },
    { 
      name: 'Skills', 
      path: '/#skills', 
      isHash: true,
      hasSubmenu: true,
      submenu: [
        { name: 'Technical Skills', path: '/#skills', isHash: true },
        { name: 'Certifications', path: '/#certifications', isHash: true }
      ]
    },
    { 
      name: 'Projects', 
      path: '/#projects', 
      isHash: true,
      hasSubmenu: true,
      submenu: [
        { name: 'Featured Projects', path: '/#projects', isHash: true },
        { name: 'Publications', path: '/#publications', isHash: true }
      ]
    },
    { name: 'Services', path: '/#services', isHash: true },
    { name: 'Experience', path: '/#experience', isHash: true },
    { name: 'Education', path: '/#education', isHash: true },
    { name: 'Blog', path: '/blog', isHash: false },
  ];

  const handleNavigation = (link) => {
    if (link.isHash) {
      if (location.pathname !== '/') {
        window.location.href = link.path;
      } else {
        const element = document.querySelector(link.path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (link.path === '/blog') {
      window.location.href = '/blog';
    } else {
      window.location.href = link.path;
    }
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const isActive = (link) => {
    if (link.isHash) {
      return location.pathname === '/' && window.location.hash === link.path.replace('/', '');
    }
    return location.pathname === link.path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a1a]/95 backdrop-blur-md py-4 shadow-lg shadow-black/10 border-b border-[#1e293b]' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-xl font-extrabold tracking-wider whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">Kalai mr.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 ml-8">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
                onMouseEnter={() => link.hasSubmenu && setOpenSubmenu(link.name)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {link.hasSubmenu ? (
                  <div>
                    <button
                      className={`text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-300 relative py-2 whitespace-nowrap flex items-center gap-1 ${
                        isActive(link) ? 'text-[#06b6d4]' : ''
                      }`}
                    >
                      {link.name}
                      <FaChevronDown className={`text-xs transition-transform duration-300 ${openSubmenu === link.name ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#06b6d4] to-[#a855f7] transition-all duration-300 ${
                        isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </button>
                    
                    {/* Submenu */}
                    <AnimatePresence>
                      {openSubmenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#0a0a1a]/95 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-[#1e293b] z-50"
                        >
                          {link.submenu.map((subItem, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigation(subItem)}
                              className="w-full text-left px-4 py-3 text-[#94a3b8] hover:text-[#06b6d4] hover:bg-[#1e293b]/50 transition-colors duration-300 text-sm"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.isHash ? (
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-300 relative py-2 whitespace-nowrap ${
                      isActive(link) ? 'text-[#06b6d4]' : ''
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#06b6d4] to-[#a855f7] transition-all duration-300 ${
                      isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-[#94a3b8] hover:text-[#06b6d4] transition-colors duration-300 relative py-2 whitespace-nowrap ${
                      location.pathname === link.path ? 'text-[#06b6d4]' : ''
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#06b6d4] to-[#a855f7] transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-3 ml-6 lg:ml-8"
          >
            <a 
              href="https://github.com/kalaiyarasumr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#64748b] hover:text-[#06b6d4] transition-colors duration-300 p-2 hover:bg-[#1e293b]/50 rounded-full border border-[#1e293b]"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#64748b] hover:text-[#a855f7] transition-colors duration-300 p-2 hover:bg-[#1e293b]/50 rounded-full border border-[#1e293b]"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2 text-sm font-semibold rounded-full border border-[#06b6d4]/50 text-[#06b6d4] hover:bg-[#06b6d4] hover:text-[#0a0a1a] transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] whitespace-nowrap"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-[#06b6d4] transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-[#0a0a1a]/95 backdrop-blur-md border-t border-[#1e293b] mt-4 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 space-y-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                        className={`flex items-center justify-between w-full text-[#94a3b8] hover:text-[#06b6d4] py-2 transition-colors duration-300 ${
                          isActive(link) ? 'text-[#06b6d4]' : ''
                        }`}
                      >
                        {link.name}
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${openSubmenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {link.submenu.map((subItem, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleNavigation(subItem)}
                                className="block w-full text-left text-[#64748b] hover:text-[#06b6d4] py-2 text-sm transition-colors duration-300"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.isHash ? (
                    <button
                      onClick={() => handleNavigation(link)}
                      className={`block text-[#94a3b8] hover:text-[#06b6d4] py-2 transition-colors duration-300 w-full text-left ${
                        isActive(link) ? 'text-[#06b6d4]' : ''
                      }`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-[#94a3b8] hover:text-[#06b6d4] py-2 transition-colors duration-300 ${
                        location.pathname === link.path ? 'text-[#06b6d4]' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-4 border-t border-[#1e293b] flex items-center space-x-6">
                <a 
                  href="https://github.com/kalaiyarasumr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#64748b] hover:text-[#06b6d4] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kalaiyarasu-m-r-801274272/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#64748b] hover:text-[#a855f7] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={22} />
                </a>
                <a 
                  href="mailto:kalaiyarasumr@gmail.com" 
                  className="text-[#64748b] hover:text-[#06b6d4] transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope size={22} />
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-center w-full py-2.5 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#a855f7] text-white font-semibold hover:shadow-lg hover:shadow-[#06b6d4]/20 transition-all duration-300"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;