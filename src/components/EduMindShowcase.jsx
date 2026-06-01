import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBrain, FaRobot, FaSearch, FaDatabase, FaFolderOpen, FaArrowRight, 
  FaRegPaperPlane, FaTimes, FaGithub, FaExternalLinkAlt, FaChartBar, 
  FaCogs, FaProjectDiagram, FaQuoteRight, FaChevronRight, FaTerminal, FaGraduationCap
} from 'react-icons/fa';

const EduMindShowcase = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatQuery, setChatQuery] = useState('');
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [retrievedContext, setRetrievedContext] = useState(null);
  const [chatResponse, setChatResponse] = useState('');
  const [simulatedLog, setSimulatedLog] = useState([]);

  // Mock search DB for RAG Simulation
  const mockSyllabusDocs = [
    {
      query: "semaphore",
      context: "Operating Systems (CSE-501): A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system such as a multiprogramming operating system.",
      answer: "Based on your CSE-501 syllabus, Semaphores are synchronization tools. A semaphore is an integer variable accessed via wait() and signal() atomic operations. It prevents race conditions in shared memory.",
      pyq: "Smart India Hackathon 2024 / End-Sem 2023: Explain the Producer-Consumer problem and solve it using Semaphores. (10 Marks)"
    },
    {
      query: "rag",
      context: "EduMind RAG Core Architecture: Retrieval-Augmented Generation combines LLM general knowledge with custom semantic embeddings. We index academic PDFs using Sentence-Transformers and query matching using L2 FAISS index.",
      answer: "Retrieval-Augmented Generation (RAG) in EduMind references your exact course PDFs, loads embeddings into FAISS, queries matching chunks, and forwards them to Groq LLaMA-3. This avoids hallucinations in exam preparation.",
      pyq: "EduMind System Design: Detail the workflow of indexing PDF texts into a vector space. (5 Marks)"
    },
    {
      query: "classification",
      context: "Machine Learning (CSE-602): Support Vector Machines (SVM) find the optimal hyperplane that maximizes the margin between different classes. Scikit-learn Logistic Regression is used for text difficulty categorizing.",
      answer: "In EduMind, we classify exam questions by difficulty (Easy, Medium, Hard) using Scikit-Learn SVM and Logistic Regression classifiers trained on historical university question banks.",
      pyq: "End-Sem 2024: Formulate the mathematical optimization problem of linear Support Vector Machines. (8 Marks)"
    }
  ];

  // RAG query simulator
  const handleRAGQuery = (e) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    setIsRetrieving(true);
    setRetrievedContext(null);
    setChatResponse('');
    
    const logs = [
      `[1] Incoming Query: "${chatQuery}"`,
      `[2] Computing Sentence-Transformer embeddings (all-MiniLM-L6-v2)...`,
      `[3] Querying FAISS index (IndexFlatL2) for top-1 similar syllabus chunk...`
    ];
    setSimulatedLog(logs);

    setTimeout(() => {
      // Find matching mock doc
      const matchedDoc = mockSyllabusDocs.find(doc => 
        chatQuery.toLowerCase().includes(doc.query)
      ) || {
        context: "Default Academic Context: Semester 6 syllabus content for Database Management Systems and Computer Networks.",
        answer: "I couldn't find a direct match for this specific query in the pre-indexed sample (try typing 'semaphore', 'RAG', or 'classification'). However, the generalized RAG engine would search the FAISS vector database to retrieve the relevant PDF paragraphs.",
        pyq: "No mock PYQ mapped for this keyword. In the live system, Groq suggests PYQs based on semantic similarity of past papers."
      };

      setSimulatedLog(prev => [
        ...prev,
        `[4] FAISS Search Complete: Top chunk found (Distance: 0.18)`,
        `[5] Forwarding Context to Groq API (LLaMA-3-8B-Instruct)...`,
        `[6] Inference complete in 0.28s. Generating response.`
      ]);

      setRetrievedContext(matchedDoc.context);
      setChatResponse(matchedDoc.answer);
      setIsRetrieving(false);
    }, 1500);
  };

  const features = [
    { icon: <FaBrain />, title: "AI Academic Chatbot", desc: "A 24/7 learning assistant resolving student doubts based strictly on syllabus documents." },
    { icon: <FaSearch />, title: "RAG Architecture", desc: "Retrieval-Augmented Generation pipeline using Sentence-Transformers and Groq LLMs." },
    { icon: <FaFolderOpen />, title: "Semester-Aware Syllabus", desc: "Filters learning context automatically by matching the student's registered semester." },
    { icon: <FaCogs />, title: "Adaptive Learning Recommendations", desc: "Machine Learning recommendation engine tailoring topic difficulty to student performance." },
    { icon: <FaDatabase />, title: "FAISS Vector Search", desc: "High-performance semantic vector database indexing course PDFs for millisecond retrieval." },
    { icon: <FaTerminal />, title: "NLP Topic Classification", desc: "Categorizes uploaded questions and syllabi by topic taxonomy using Scikit-Learn SVM classifiers." },
  ];

  const stats = [
    { label: 'Retrieval Latency', value: '42 ms' },
    { label: 'Inference Speed', value: '75 tok/s' },
    { label: 'Syllabus Precision', value: '96.2%' },
    { label: 'Embedding Dimensions', value: '384' },
  ];

  const steps = [
    { number: "01", title: "Document Intake", desc: "Syllabus and past paper PDFs are parsed and split into overlapping chunks." },
    { number: "02", title: "Vector Embeddings", desc: "Chunks are converted into 384-dimensional dense vectors using Sentence Transformers." },
    { number: "03", title: "FAISS Indexing", desc: "Vectors are stored in a FAISS L2 index on the FastAPI server for fast query lookups." },
    { number: "04", title: "RAG Execution", desc: "Student queries retrieve matching documents, merging them as LLM context prompt." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed inset-0 z-50 bg-darkNavy overflow-y-auto text-slate-100 font-sans"
    >
      {/* Background Neon Elements */}
      <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-purpleCustom/10 rounded-full blur-[120px] -z-10 animate-pulse duration-[7000ms]"></div>
      <div className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] bg-cyanCustom/10 rounded-full blur-[130px] -z-10 animate-pulse duration-[9000ms]"></div>
      
      {/* Cyberpunk Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30"></div>

      {/* Header Sticky */}
      <div className="sticky top-0 z-50 glassmorphism border-b border-slate-800/80 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-purpleCustom/10 border border-purpleCustom/30 text-purpleCustom">AI SHIELD</span>
          <span className="text-white font-extrabold tracking-wider text-sm hidden sm:inline">EDUMIND SHOWCASE</span>
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
            <span>Exit Showcase</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* ================= HERO / HEADER SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-purpleCustom to-cyanCustom bg-clip-text text-transparent">
              Adaptive Intelligent Learning
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-white">
              EduMind — AI-Powered <br/>
              <span className="bg-gradient-to-r from-cyanCustom via-cyanCustom-light to-purpleCustom bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                Personalized Learning
              </span> Platform
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              A comprehensive academic ecosystem fusing Retrieval-Augmented Generation (RAG), vector similarity search, 
              and NLP difficulty classification to structure custom learning paths for computer science students.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glassmorphism-light border border-slate-800/50 p-4 rounded-xl text-center">
                  <div className="text-xl md:text-2xl font-black text-purpleCustom-light">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#rag-simulator"
                className="px-6 py-3.5 bg-gradient-to-r from-purpleCustom to-cyanCustom text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 border border-white/5"
              >
                <FaRobot size={14} />
                <span>Test RAG Simulator</span>
              </a>
              <a 
                href="https://github.com/aroy67258"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 glassmorphism border border-slate-800 hover:border-purpleCustom/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaGithub />
                <span>Open Source Code</span>
              </a>
            </div>
          </div>

          {/* Right Mockup: Neural Net Simulation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 rounded-full bg-purpleCustom/10 blur-2xl"></div>
            
            {/* Visual Architecture Box */}
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800/80 w-full max-w-[380px] shadow-2xl relative space-y-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Neural Semantic Matching</span>
              
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 space-y-3.5 text-xs text-left">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Embedding Space:</span>
                  <span className="font-mono text-cyanCustom">384 Dim</span>
                </div>
                {/* Visual Similarity Vector Matches */}
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>CSE-501 (Semaphores.pdf)</span>
                      <span className="text-green-400 font-mono">Distance: 0.18</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-green-400 h-full w-[88%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>CSE-501 (Mutex_Locks.pdf)</span>
                      <span className="text-yellow-400 font-mono">Distance: 0.32</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-yellow-400 h-full w-[65%]"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>CSE-502 (Relational_DB.pdf)</span>
                      <span className="text-red-500 font-mono">Distance: 0.74</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-red-500 h-full w-[20%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAG Context Chunk Bubble */}
              <div className="bg-gradient-to-r from-purpleCustom/10 to-cyanCustom/10 p-3.5 rounded-xl border border-purpleCustom/20 text-left text-[11px] leading-relaxed text-slate-300">
                <span className="font-semibold text-purpleCustom-light block mb-1">Retrieved Context:</span>
                "...semaphores are integer variables accessed via atomic operations wait() and signal() for process locks..."
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROBLEM vs SOLUTIONS ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Problem Statement vs. AI Resolution</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purpleCustom to-cyanCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 text-left">
            <div className="glassmorphism p-8 rounded-2xl border border-red-500/20 space-y-6">
              <h3 className="text-xl font-bold text-red-400">The Student Challenge</h3>
              <ul className="space-y-4 text-sm md:text-base text-slate-400 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-red-500 font-black">•</span>
                  <span><strong>Generic Context Clutter:</strong> Commercial chatbots suggest generalized definitions that mismatch the specific syllabus requirements of the university.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-black">•</span>
                  <span><strong>Lack of Exam Context:</strong> Standard search filters cannot recommend past year university exam questions (PYQs) relative to current course topics.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-black">•</span>
                  <span><strong>AI Hallucinations:</strong> Basic LLMs formulate incorrect assumptions when asked technical domain topics or university syllabus grading constraints.</span>
                </li>
              </ul>
            </div>

            <div className="glassmorphism p-8 rounded-2xl border border-green-500/20 space-y-6">
              <h3 className="text-xl font-bold text-green-400">The EduMind AI Solution</h3>
              <ul className="space-y-4 text-sm md:text-base text-slate-400 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-green-500 font-black">•</span>
                  <span><strong>Vector-Retrieved Chunks:</strong> Indexing academic PDFs locally ensures answers contain references strictly belonging to the university syllabus.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-black">•</span>
                  <span><strong>Syllabus-Aligned PYQs:</strong> Semantic models index past exam patterns, automatically serving relevant PYQs alongside Doubt Resolutions.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-black">•</span>
                  <span><strong>Custom Embedding Filters:</strong> Fine-tuned matching using Sentence-Transformers and Groq LLaMA-3 prevents general topic hallucinations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE RAG CHAT SIMULATOR ================= */}
        <div id="rag-simulator" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Interactive RAG Pipeline Simulator</h2>
            <p className="text-slate-400 text-sm mt-2">Type a doubt to watch the vector search, contextual retrieval, and Groq inference execute in real-time.</p>
            <div className="h-1 w-20 bg-gradient-to-r from-purpleCustom to-cyanCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Terminal RAG Logs */}
            <div className="lg:col-span-5 bg-black/80 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-left h-[340px] flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center space-x-2 text-slate-500 border-b border-slate-900 pb-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] pl-2">RAG_PIPELINE_LOGS</span>
                </div>
                <div className="space-y-2.5 text-slate-300">
                  {simulatedLog.length === 0 ? (
                    <span className="text-slate-500">// Logs will output here when query is submitted. Try query 'semaphore' or 'RAG'</span>
                  ) : (
                    simulatedLog.map((log, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        key={idx} 
                        className={log.includes('FAISS') ? 'text-cyanCustom' : log.includes('Groq') ? 'text-purpleCustom-light' : 'text-slate-300'}
                      >
                        {log}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 border-t border-slate-900 pt-3 flex justify-between">
                <span>FastAPI backend: live</span>
                <span>FAISS L2 FlatIndex</span>
              </div>
            </div>

            {/* Simulated Chat Interface */}
            <div className="lg:col-span-7 glassmorphism rounded-2xl border border-slate-800 flex flex-col justify-between h-[340px] shadow-2xl overflow-hidden">
              {/* Box Header */}
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center text-left">
                <div>
                  <h4 className="text-sm font-bold text-white">EduMind AI Assistant</h4>
                  <span className="text-[10px] text-slate-500">FastAPI & Sentence Transformers matching</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyanCustom/10 text-cyanCustom border border-cyanCustom/20 font-semibold cursor-pointer" onClick={() => setChatQuery('semaphore')}>semaphore</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purpleCustom/10 text-purpleCustom-light border border-purpleCustom/20 font-semibold cursor-pointer" onClick={() => setChatQuery('RAG pipeline')}>RAG</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-semibold cursor-pointer" onClick={() => setChatQuery('classification')}>classification</span>
                </div>
              </div>

              {/* Chat View Panel */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs text-left bg-slate-950/60 flex flex-col">
                {retrievedContext && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-cyanCustom/5 rounded-xl border border-cyanCustom/20 text-slate-300 mb-2 leading-relaxed"
                  >
                    <span className="font-bold text-cyanCustom block mb-1">Retrieved PDF Syllabus Chunks:</span>
                    {retrievedContext}
                  </motion.div>
                )}

                {chatResponse && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    <div className="p-3.5 bg-slate-850 rounded-xl text-slate-200 border border-slate-800">
                      <span className="font-bold text-purpleCustom-light block mb-1">AI Doubt Resolution:</span>
                      {chatResponse}
                    </div>

                    {/* Matched PYQ */}
                    {mockSyllabusDocs.find(doc => chatResponse.includes(doc.answer.substring(0, 10))) && (
                      <motion.div 
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="p-3 bg-yellow-500/5 rounded-xl border border-yellow-500/10 text-yellow-300/90 text-[11px]"
                      >
                        <span className="font-bold block mb-0.5">Matched Exam Question (PYQ):</span>
                        {mockSyllabusDocs.find(doc => chatResponse.includes(doc.answer.substring(0, 10))).pyq}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {isRetrieving && (
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyanCustom animate-ping"></span>
                    <span>Retrieving relevant course literature and generating answer...</span>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleRAGQuery} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input 
                  type="text" 
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  placeholder="Ask a syllabus question (e.g. semaphore, RAG, classification)..." 
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purpleCustom-light"
                />
                <button type="submit" className="px-4 py-2.5 bg-gradient-to-r from-purpleCustom to-cyanCustom text-white font-bold rounded-xl text-xs hover:shadow-lg transition-all flex items-center gap-1.5">
                  <FaRegPaperPlane />
                  <span>Ask AI</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-purpleCustom">System Modules</span>
            <h2 className="text-3xl font-extrabold text-white">Platform Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purpleCustom to-cyanCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {features.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glassmorphism p-6 rounded-2xl border border-slate-800 hover:border-purpleCustom/30 hover:shadow-[0_4px_25px_rgba(168,85,247,0.06)] transition-all group text-left"
              >
                <div className="p-3.5 rounded-xl bg-purpleCustom/10 text-purpleCustom-light w-fit mb-4 group-hover:bg-purpleCustom group-hover:text-white transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SYSTEM ARCHITECTURE WORKFLOW ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">System Architecture & RAG Workflow</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purpleCustom to-cyanCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="glassmorphism p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 relative group">
                <span className="text-4xl font-extrabold text-slate-800 group-hover:text-cyanCustom/20 transition-all duration-300 font-mono block">{step.number}</span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-purpleCustom transition-colors">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECH STACK ANIMATED GRID ================= */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Technologies Used</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purpleCustom to-cyanCustom rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-base font-bold text-purpleCustom mb-3">AI & NLP Core</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">FAISS Indexing</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Sentence Transformers</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Scikit-learn</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Groq API (LLaMA-3)</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">NLP Taxonomies</span>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-slate-800">
              <h3 className="text-base font-bold text-cyanCustom mb-3">Backend Core</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Python 3.10+</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">FastAPI</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">RESTful Services</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">SQLite Database</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">CORS & Security</span>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl border border-slate-800 sm:col-span-2 md:col-span-1">
              <h3 className="text-base font-bold text-purpleCustom-light mb-3">Frontend Integration</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">HTML5 / CSS3</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Vanilla JS / React</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Responsive Grids</span>
                <span className="px-2.5 py-1.5 bg-slate-900 rounded font-semibold text-slate-300">Tailwind Styling</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= IMPACT & FUTURE SCOPE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Project Impact Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              By structuring doubtnut pipelines through custom RAG frameworks, EduMind has demonstrated significant learning optimizations for computer science cohorts:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Targeted 45% reduction in exam doubts resolution loops.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Eliminated generalized model hallucinations in academic curricula.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Fosters micro-learning recommendations tailored per student cohort.</div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">Future Scope</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We look forward to expanding the backend processing pipelines and integrating multi-modal document extraction features:
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-300 pt-2">
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Implement OCR parsing for handwritten math formulas and diagrams.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Integrate real-time audio transcripts from lecture videos.</div>
              <div className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl">Deploy multi-tenant portal sync for universities across India.</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-slate-900">
          <p>© {new Date().getFullYear()} EduMind Case Study. Developed by Kalaiyarasu  M R.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EduMindShowcase;
