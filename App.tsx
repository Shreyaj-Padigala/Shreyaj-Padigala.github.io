import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Terminal, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Award, 
  Send,
  ExternalLink,
  Search,
  Folder,
  X as CloseIcon,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';

// --- Data & Content ---

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Shreyaj-Padigala' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/shreyaj-padigala' },
  { name: 'Devpost', icon: Code, url: 'https://devpost.com/shreyajofficial' },
  { name: 'Email', icon: Mail, url: 'mailto:shreyajpadigala@outlook.com' },
];

const navigation = [
  { id: 'main', label: 'Main', icon: Terminal },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Cpu },
  { id: 'hackathons', label: 'Hackathons', icon: Award },
  { id: 'future', label: 'Future', icon: Send },
];

const blogPosts = [
  { date: '2025-08-31', content: 'Initial commit of my portfolio v2.0. Learning lots of React!' },
  { date: '2025-09-08', content: 'Just got into NeuroSpeech Research Project.' },
  { date: '2025-11-20', content: 'Just presented NeuroSpeech Project at UTD Crow Arts Museum.' },
  { date: '2025-12-08', content: 'Beginning my software engineering externship with Outamation' },
  { date: '2025-12-15', content: 'Wrapping up the semester at UTD. Finals week was intense but rewarding.' },
  { date: '2026-01-30', content: 'Just began Backend Development Project for Google Developers Group!' }
];

const educationData = {
  school: 'University of Texas at Dallas',
  major: 'B.S. Data Science',
  gradDate: 'May 2028',
  honors: ['Hobson Wildenthal Honors College', 'Academic Excellence Scholarship'],
  organizations: ['Association for Computing Machinery (ACM) Research', 'Google Developers Group', 'Society of Automotive Engineers at Dallas Formula Racing']
};

const experience = [
  {
    role: 'Backend Software Engineer',
    company: 'Google Developers Group',
    location: 'Richardson, TX',
    period: 'Present',
    description: [
      'Built a UTD-exclusive prediction market platform supporting 500+ virtual token allocations per user by designing PostgreSQL schema and implementing Node/Express APIs with JWT authentication',
      'Implemented real-time market updates and live chat with sub-second latency by integrating Socket.io for live pricing and user interactions',
      'Developed core prediction market logic with automated market resolution, implementing LMSR pricing and market settlement workflows'
    ]
  },
  {
    role: 'Software Engineering Extern',
    company: 'Outamation',
    location: 'McKinney, TX',
    period: 'Dec 2025 - Present',
    description: [
      'Built AI-powered pipelines to extract, classify, and search data from 200+ page mortgage documents using Tesseract, PaddleOCR, and PyMuPDF, improving processing efficiency by 22%',
      'Developed a RAG-based document retrieval system using LlamaIndex for multi-document mortgage data, improving retrieval precision through chunk tuning and metadata filtering',
      'Evaluated document intelligence pipeline on 200+ page mortgage files, benchmarking OCR, RAG retrieval, and routing performance'
    ]
  },
  {
    role: 'Undergraduate Research Lead, Deep Learning Systems',
    company: 'ACM Research',
    location: 'Richardson, TX',
    period: 'Sept 2025 - Present',
    description: [
      'Increased Ethereum price forecast accuracy from 52% to 58% by designing a recurrent neural network using Python and TensorFlow to process multi-year financial datasets',
      'Built an automated data pipeline that cleaned and validated 5+ years of Ethereum metrics using Pandas and NumPy, reducing manual data processing time by 60%',
      'Led a 5-member research team to deliver a functional predictive model by coordinating weekly development sprints and collaborating with a finance professor'
    ]
  }
];

const projects = [
  {
    name: 'EnarcExchange',
    desc: 'UTD-exclusive prediction market platform with real-time betting on campus events, featuring secure authentication and live market pricing.',
    tags: ['PostgreSQL', 'Node.js', 'Gemini Flash 2.5', 'Express', 'Socket.io', 'JWT Auth','Swagger'],
    link: 'https://github.com/Owen-Isenhart/EnarcExchange'
  },
  {
    name: 'ProSolve',
    desc: 'AI-powered product management tool automating risk analysis and feasibility calculations with FastAPI backend and web frontend.',
    tags: ['Python', 'FastAPI', 'GroqCloud LLM', 'SQLite', 'HTML/CSS/JS'],
    link: 'https://github.com/Shreyaj-Padigala/ProSolve'
  },
  {
    name: 'NeuroSpeech',
    desc: 'Neural signal decoding system improving phoneme recognition accuracy to assist individuals with ALS using RNN architectures.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
    link: 'https://github.com/Aditya-Yan/NeuroSpeech'
  },
  {
    name: 'X-Toxicity',
    desc: 'ML-powered web app for analyzing Twitter content toxicity with custom NLP model and Flask backend.',
    tags: ['Python', 'Flask', 'NLP', 'Machine Learning'],
    link: 'https://github.com/Shreyaj-Padigala/X-Toxicity-Analyzer'
  },
  {
    name: 'Solana-Model',
    desc: 'LSTM-based model for predicting Solana cryptocurrency price movements using historical market data.',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Finance'],
    link: 'https://github.com/Shreyaj-Padigala/Solana-SOL--Price-Prediction-Model'
  }
];

const hackathons = [
  {
    name: 'HackUTD 2025',
    award: 'PNC Sponsor Track',
    desc: 'Competed under PNC Sponsor Track. Developed "ProSolve", an AI-powered product management tool that automates risk analysis and provides What-If scenarios to improve decision making.',
    links: { 
      devpost: 'https://devpost.com/software/prosolve',
      github: 'https://github.com/Shreyaj-Padigala/ProSolve'
    }
  },
  {
    name: 'TAMUhack 2026',
    award: 'AA Track',
    desc: 'Competed under American Airlines Track. Built a flight simulator displaying delays and flight status from major airports using flight data from the American Airlines Flight Engine repository.',
    links: { 
      devpost: 'https://devpost.com/software/aero-bujt4z', 
      github: 'https://github.com/krishjayanth/aero-tamu-hack'
    }
  }
];

// --- Components ---

const WindowControls = () => (
  <div className="flex gap-2 p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-t-xl items-center">
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer shadow-sm" />
      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer shadow-sm" />
      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer shadow-sm" />
    </div>
    <div className="flex-1 text-center text-xs font-medium text-gray-500 font-sans">
      shreyaj_portfolio — -zsh
    </div>
    <div className="w-10"></div>
  </div>
);

const TerminalWindow = ({ title, children, className = "h-64", autoScroll = false, onClose }) => {
  const scrollRef = React.useRef(null);
  
  useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  });

  return (
    <div className={`bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-sm border border-gray-700 flex flex-col ${className}`}>
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 shrink-0">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-gray-400" />
          <span className="text-gray-300 text-xs">{title}</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon size={14} />
          </button>
        )}
      </div>
      <div ref={scrollRef} className="p-4 space-y-2 overflow-y-auto scroll-smooth flex-1">
        {children}
      </div>
    </div>
  );
};

const SpotlightSearch = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 relative z-20">
      <div className="bg-gray-200/20 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl">
        <Search className="text-gray-500 dark:text-gray-400" size={24} />
        <span className="text-2xl text-gray-800 dark:text-gray-200 font-light tracking-wide font-sans border-r-2 border-blue-500 pr-1 animate-pulse">
          {displayText}
        </span>
      </div>
    </div>
  );
};

const DesktopFolder = ({ label, onClick, isSelected }) => (
  <button 
    onClick={onClick} 
    className="flex flex-col items-center gap-2 group w-28 focus:outline-none"
  >
    <div className={`relative transition-all duration-200 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
      <Folder 
        size={72} 
        fill="#3b82f6" 
        className="text-blue-500 drop-shadow-lg"
        strokeWidth={1}
      />
    </div>
    <span className={`
      text-xs font-medium text-white px-2 py-1 rounded-md max-w-full truncate
      ${isSelected ? 'bg-[#0058d0]' : 'text-gray-700 dark:text-gray-200 group-hover:bg-black/10 dark:group-hover:bg-white/10'}
    `}>
      {label}
    </span>
  </button>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
    {children}
  </h2>
);

// --- Sections ---

const MainSection = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev < blogPosts.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Shreyaj Padigala
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Welcome to my digital workspace. I'm an Honors Data Science student at UTD, interested in AI and Software Development.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">AI Engineering</div>
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">Software Engineering</div>
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">Machine Learning</div>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 ml-1">Latest Updates</h3>
        <TerminalWindow title="updates.sh" autoScroll={true}>
          <AnimatePresence mode="popLayout">
            {blogPosts.slice(0, visibleCount).map((post, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="flex gap-2 text-green-400">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">echo</span>
                  <span className="text-yellow-300">"{post.date}"</span>
                </div>
                <p className="text-gray-300 mt-1 pl-4 border-l-2 border-gray-700 group-hover:border-green-500 transition-colors">
                  {post.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="flex gap-2 text-green-400">
            <span>➜</span>
            <span className="text-blue-400">~</span>
            <span className="w-2 h-5 bg-gray-400 block animate-pulse"></span>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};

// Generic Folder View Component
// Replace your entire FolderView component with this version:
const FolderView = ({ spotlightText, items, renderContent }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [previousSelectedId, setPreviousSelectedId] = useState(null);

  const handleSelect = (id) => {
    setPreviousSelectedId(selectedId);
    setSelectedId(id === selectedId ? null : id);
  };

  const selectedItem = selectedId !== null ? items.find(i => i.id === selectedId) : null;

  return (
    <div className="min-h-[60vh] flex flex-col">
      <SpotlightSearch text={spotlightText} />
      
      <div className="flex flex-wrap gap-8 justify-center mb-10 px-4">
        {items.map((item) => (
          <DesktopFolder 
            key={item.id}
            label={item.label}
            isSelected={selectedId === item.id}
            onClick={() => handleSelect(item.id)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedId !== null && selectedItem && (
          <motion.div
            key={`content-${selectedId}`} // Crucial: unique key for each content
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="flex-1"
          >
            {renderContent(selectedItem.data, () => setSelectedId(null))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const EducationSection = () => {
  const items = [
    { id: 'honors', label: 'Honors', data: educationData.honors },
    { id: 'orgs', label: 'Organizations', data: educationData.organizations }
  ];

  return (
    <FolderView 
      spotlightText="The University of Texas at Dallas"
      items={items}
      renderContent={(data, onClose) => (
        <TerminalWindow title={Array.isArray(data) && data === educationData.honors ? "honors.txt" : "organizations.txt"} onClose={onClose} className="h-96">
          <div className="space-y-4">
            {data.map((item, i) => (
              <div key={i} className="flex gap-2 text-gray-300">
                <span className="text-green-400 shrink-0">➜</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </TerminalWindow>
      )}
    />
  );
};

const ExperienceSection = () => {
  const items = experience.map((job, idx) => ({
    id: idx,
    label: job.company,
    data: job
  }));

  return (
    <FolderView
      spotlightText="Work Experience"
      items={items}
      renderContent={(job, onClose) => (
        <TerminalWindow title="job_description.txt" onClose={onClose} className="h-auto min-h-[300px]">
          <div className="mb-4 pb-4 border-b border-gray-700">
            <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
            <div className="flex justify-between text-gray-400 text-xs">
              <span>{job.company}</span>
              <span>{job.period}</span>
            </div>
          </div>
          {job.description.map((desc, i) => (
            <div key={i} className="flex gap-2 mb-3">
               <span className="text-green-400 shrink-0">➜</span>
               <p className="text-gray-300 leading-relaxed">{desc}</p>
             </div>
          ))}
        </TerminalWindow>
      )}
    />
  );
};

const ProjectsSection = () => {
  const items = projects.map((p, idx) => ({
    id: idx,
    label: p.name,
    data: p
  }));

  return (
    <FolderView
      spotlightText="My Projects"
      items={items}
      renderContent={(project, onClose) => (
        <TerminalWindow title={`${project.name}.md`} onClose={onClose} className="h-auto min-h-[300px]">
          <div className="flex justify-between items-start mb-4 border-b border-gray-700 pb-2">
            <div className="text-yellow-300 font-bold"># {project.name}</div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={18} />
            </a>
          </div>
          
          <div className="flex gap-2 text-green-400 text-xs mb-1">
             <span>➜</span>
             <span className="text-blue-400">~</span>
             <span className="text-gray-400">cat description</span>
          </div>
          <p className="text-gray-300 mb-6 pl-4 border-l-2 border-gray-700">{project.desc}</p>

          <div className="flex gap-2 text-green-400 text-xs mb-1">
             <span>➜</span>
             <span className="text-blue-400">~</span>
             <span className="text-gray-400">echo $TECH_STACK</span>
          </div>
          <div className="flex flex-wrap gap-2 pl-4">
             {project.tags.map((tag, i) => (
               <span key={i} className="text-purple-400 text-xs font-mono bg-purple-400/10 px-2 py-1 rounded">
                 {tag}
               </span>
             ))}
          </div>
        </TerminalWindow>
      )}
    />
  );
};

const HackathonsSection = () => {
  const items = hackathons.map((h, idx) => ({
    id: idx,
    label: h.name,
    data: h
  }));

  return (
    <FolderView
      spotlightText="Hackathons"
      items={items}
      renderContent={(hack, onClose) => (
         <TerminalWindow title="hackathon_details.log" onClose={onClose} className="h-auto min-h-[300px]">
            <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
               <h3 className="text-white font-bold">{hack.name}</h3>
               <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded border border-yellow-500/30">
                 {hack.award}
               </span>
            </div>

            <div className="flex gap-2 text-green-400 text-xs mb-1">
               <span>➜</span>
               <span className="text-gray-400">cat summary.txt</span>
            </div>
            <p className="text-gray-300 mb-6 pl-4 border-l-2 border-gray-700 leading-relaxed">
              {hack.desc}
            </p>

            <div className="flex gap-4 mt-auto pt-4">
               <a href={hack.links.devpost} className="text-xs font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300">
                 <Code size={14} /> Devpost
               </a>
               <a href={hack.links.github} className="text-xs font-bold text-gray-400 flex items-center gap-1 hover:text-white">
                 <Github size={14} /> Source
               </a>
             </div>
         </TerminalWindow>
      )}
    />
  );
};

const FutureSection = () => (
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <SectionHeading>My Plans</SectionHeading>
        <TerminalWindow title="goals_2026.sh" className="h-auto p-2">
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-mono">1.</span>
              <span>Looking for a Summer 2026/2027 Software/AI Engineering Internship</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 font-mono">2.</span>
              <span>Developing AI start-up</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 font-mono">3.</span>
              <span>Attending more Hackathons?</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2 text-green-400 animate-pulse">
             <span>➜</span>
             <span className="w-2 h-4 bg-gray-400 block"></span>
          </div>
        </TerminalWindow>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="space-y-4"
      >
        <SectionHeading>Visitor Suggestions</SectionHeading>
        <TerminalWindow title="contact_form.exe" className="h-auto">
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-2 text-green-400 text-xs mb-1">
               <span>➜</span>
               <span className="text-gray-400">Enter message:</span>
            </div>
            <textarea 
              className="w-full p-3 rounded bg-[#1e1e1e] border border-gray-700 text-gray-300 text-sm focus:border-green-500 outline-none transition-colors resize-none h-32 font-mono"
              placeholder="_"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-green-600 text-white px-4 py-2 rounded text-xs font-mono font-medium hover:bg-green-500 transition-colors flex items-center gap-2">
                ./send_message <Send size={12} />
              </button>
            </div>
          </form>
        </TerminalWindow>
      </motion.div>
    </div>
  </div>
);

// Helper Icon Component
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('main');

  const renderContent = () => {
    switch (activeTab) {
      case 'main': return <MainSection />;
      case 'education': return <EducationSection />;
      case 'experience': return <ExperienceSection />;
      case 'projects': return <ProjectsSection />;
      case 'hackathons': return <HackathonsSection />;
      case 'future': return <FutureSection />;
      default: return <MainSection />;
    }
  };

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Window Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 flex flex-col overflow-hidden h-[90vh] md:h-[85vh]"
      >
        
        {/* Title Bar */}
        <WindowControls />

        {/* Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 bg-white/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm z-10 gap-4 md:gap-0">
          
          {/* Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {navigation.map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveTab(nav.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap
                  ${activeTab === nav.id 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                <nav.icon size={16} strokeWidth={2} />
                {nav.label}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pl-4 md:border-l border-gray-200 dark:border-gray-700">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth bg-white/40 dark:bg-gray-900/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl mx-auto h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status Bar / Footer */}
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
          <div>© 2026 Shreyaj Padigala</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Online
          </div>
        </div>

      </motion.div>
    </div>
  );
}
