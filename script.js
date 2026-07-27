// ===== Data & Content =====

// Dates below are month-accurate; adjust the exact days if you want them precise.
const blogPosts = [
  { date: '2025-09-08', content: 'Just got into the NeuroSpeech Research Project.' },
  { date: '2025-11-20', content: 'Just presented the NeuroSpeech Project at the UTD Crow Arts Museum.' },
  { date: '2025-12-08', content: 'Beginning my AI engineering externship with Outamation.' },
  { date: '2026-01-30', content: 'Just began the Backend Development Project for Google Developers Group!' },
  { date: '2026-02-27', content: 'Wrapped up the Outamation externship with the Completer Award, top 15 out of 100+ in the winter cohort.' },
  { date: '2026-04-17', content: 'Presented RNN, LSTM, GRU, and HM-RNN models at the UTD ML Research Symposium.' },
  { date: '2026-04-24', content: 'Shipped Algomize, an AI trading agent built on AWS Bedrock and ElevenLabs voice agents.' },
  { date: '2026-06-01', content: 'Started as an AI Intern at McAfee, 1 of 14 interns selected from 1,200+ applicants.' }
];

const educationData = {
  school: 'The University of Texas at Dallas',
  major: 'B.S. Computer Science',
  gradDate: 'May 2028',
  location: 'Richardson, TX',
  degree: [
    'The University of Texas at Dallas — Richardson, TX',
    'Bachelor of Science in Computer Science',
    'Expected graduation: May 2028'
  ],
  honors: ['Academic Excellence Scholarship (AES) Recipient', 'CV Scholar', 'Hobson Wildenthal Honors College'],
  coursework: ['Object-Oriented Programming', 'Computer Architecture', 'Data Structures and Algorithms'],
  organizations: ['Association for Computing Machinery (ACM) Research', 'Google Developers Group', 'Society of Automotive Engineers at Dallas Formula Racing']
};

const experience = [
  {
    role: 'AI Intern',
    company: 'McAfee',
    location: 'Frisco, TX',
    period: 'Jun 2026 - Present',
    description: [
      'Selected as 1 of 14 interns from 1,200+ applicants to engineer an internal tooling application for Databricks Genie AI agent development, enterprise analytics, and software automation workflows',
      'Designed a Flask-based Genie Agent Reviewer application with domain-restricted JWT authentication, enabling 100+ McAfee employees and C-suite leaders to query production Databricks Genie agents through a centralized web interface',
      'Integrated Databricks Genie REST APIs for CRUD-style operations, using Swagger and Postman for HTTP response testing, Git for version-controlled backend changes, and Jira for sprint-based planning, issue tracking, and development traceability',
      'Improved analytics data quality by 30%+ by developing autonomous test-query workflows with Databricks REST APIs, Unity Catalog schemas, and MLflow evaluations to flag 1,000+ inaccurate or partially correct SQL responses'
    ]
  },
  {
    role: 'Research Lead',
    company: 'Association for Computing Machinery',
    location: 'Richardson, TX',
    period: 'Sep 2025 - Apr 2026',
    description: [
      'Selected as 1 of 10 leads from 60 researchers, leading a team of 5 researchers to develop Python-based deep learning models using the Keras API with TensorFlow',
      'Increased Ethereum paper-trading returns by 20% by designing a novel Hierarchical Multiscale RNN model to detect short-term volatility zones and long-term market regimes on OHLC ETH-USD hourly price data from Yahoo Finance (2021-2026)',
      'Presented RNN, LSTM, GRU, and HM-RNN deep learning models at the UTD ML Research Symposium, evaluating performance with MSE and MAPE metrics'
    ]
  },
  {
    role: 'AI Engineering Extern',
    company: 'Outamation',
    location: 'Remote',
    period: 'Dec 2025 - Feb 2026',
    description: [
      'Created RAG pipelines to extract and classify data from 200+ page mortgage documents using Tesseract, PaddleOCR, and PyMuPDF Python libraries, improving document and image processing efficiency by 22%',
      'Explored performance differences between Gemini and open-source LLMs (Phi-2 and Mistral-7B) through chunk tuning and metadata filtering using LlamaIndex',
      'Deployed final end-to-end project with a testing UI using Azure App Service, earning the Outamation Completer Award (top 15 out of 100+ in the winter cohort)'
    ]
  },
  {
    role: 'Full Stack Development Intern',
    company: 'KAS Software Solutions LLC',
    location: 'Pompano Beach, FL',
    period: 'May 2025 - Aug 2025',
    description: [
      'Engineered full-stack web applications for two clients using Java, Spring Boot, HTML, CSS, and JavaScript, translating startup requirements into production-ready software serving 100+ monthly users',
      'Improved backend performance and user interactivity by optimizing SQL queries and implementing database indexing, reducing application response times by 38%',
      'Built responsive front-end interfaces and managed secure database systems to ensure reliable user interactions and safe data submissions'
    ]
  }
];

const projects = [
  {
    name: 'EnarcExchange',
    desc: 'AI-powered prediction market platform with a virtual token economy, reaching 10-12 active users. Implemented LMSR pricing and real-time betting updates with WebSockets, reducing market update latency by 20%, on a scalable Node.js, Express, PostgreSQL backend with JWT auth and the Gemini 2.5 Flash API.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'WebSockets', 'JWT', 'AWS', 'Gemini 2.5 Flash'],
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
    desc: 'EEG-based brain-computer interface work that improved phoneme recognition accuracy from 62% to 68% using RNN speech decoding models. Built with a 5-member team and a neuroscience professor, integrating 10,850+ neural trials from individuals with ALS for training and phoneme-level prediction.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'RNN'],
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
  },
  {
    name: 'Algomize',
    desc: 'AI trading agent using AWS Bedrock to orchestrate user-defined entry and exit conditions with ElevenLabs voice agents. Real-time scoring and agent learning in Node.js evaluate leverage trades and improve strategy execution, deployed full-stack on Render and Vercel.',
    tags: ['Amazon Nova 2 Lite', 'AWS Bedrock', 'ElevenLabs API', 'Node.js', 'Render', 'Vercel'],
    link: 'https://github.com/Shreyaj-Padigala/Algomize'
  }
];

const skills = [
  {
    name: 'Languages',
    file: 'languages.txt',
    items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    name: 'Frameworks & Tools',
    file: 'frameworks_tools.txt',
    items: ['Node.js', 'React', 'Git', 'Azure', 'AWS', 'Postman', 'Swagger', 'JIRA', 'CI/CD']
  },
  {
    name: 'Data',
    file: 'data.txt',
    items: ['Databricks', 'PySpark', 'Pandas', 'PostgreSQL', 'MongoDB']
  },
  {
    name: 'AI / ML',
    file: 'ai_ml.txt',
    items: ['Scikit-learn', 'TensorFlow', 'RNN', 'CNN', 'RAG']
  },
  {
    name: 'Certifications',
    file: 'certifications.txt',
    items: ['Microsoft Azure Fundamentals (AZ-900)']
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
  },
  {
    name: 'Amazon Nova AI Hackathon 2026',
    award: 'Amazon Nova Track',
    desc: 'Competed under the Amazon Nova Track. Built "Algomize", an AI-powered high-frequency trading tool leveraging Amazon Nova 2 Lite to orchestrate intelligent agents that analyze market signals and execute optimized trading strategies in real time.',
    links: {
      devpost: 'https://devpost.com/software/algomize',
      github: 'https://github.com/Shreyaj-Padigala/Algomize'
    }
  },
  {
    name: "Hook'em Hacks 2026",
    award: 'IBM Security Track',
    desc: 'Competed under the IBM Security Track. Built "PromptWall", a prompt injection defense layer for LLM applications: keeping your LLM apps on the web without prompt injection detection is like giving strangers your house keys. PromptWall scans incoming prompts, blocks attacks, and improves over time.',
    links: {
      devpost: 'https://devpost.com/software/b2b-saas-aero',
      github: 'https://github.com/Shreyaj-Padigala/PromptWall'
    }
  }
];

// ===== State =====
let activeTab = 'main';
let selectedFolders = {
  education: null,
  skills: null,
  experience: null,
  projects: null,
  hackathons: null
};

// ===== DOM Elements =====
const navTabs = document.getElementById('nav-tabs');
const contentArea = document.getElementById('content-area');

// ===== Utility Functions =====

function createFolderIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-lg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`;
}

function createTerminalIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`;
}

function createCloseIcon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
}

function createGithubIcon(size = 18) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
}

function createCodeIcon(size = 14) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
}

function typeText(element, text, callback) {
  element.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50);
}

// ===== Tab Navigation =====

function initTabNavigation() {
  navTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.nav-tab');
    if (!tab) return;

    const tabId = tab.dataset.tab;
    switchTab(tabId);
  });
}

function switchTab(tabId) {
  activeTab = tabId;

  // Update nav buttons
  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.remove('text-gray-500', 'dark:text-gray-400', 'hover:bg-gray-100', 'dark:hover:bg-gray-800', 'hover:text-gray-700', 'dark:hover:text-gray-300');
      btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm', 'active');
    } else {
      btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm', 'active');
      btn.classList.add('text-gray-500', 'dark:text-gray-400', 'hover:bg-gray-100', 'dark:hover:bg-gray-800', 'hover:text-gray-700', 'dark:hover:text-gray-300');
    }
  });

  // Show/hide content sections
  document.querySelectorAll('.tab-content').forEach(section => {
    if (section.id === `section-${tabId}`) {
      section.classList.remove('hidden');
      section.classList.add('active');
    } else {
      section.classList.add('hidden');
      section.classList.remove('active');
    }
  });

  // Reset folder selection for the section
  selectedFolders[tabId] = null;

  // Initialize section-specific content
  initSection(tabId);
}

// ===== Section Initialization =====

function initSection(section) {
  switch (section) {
    case 'main':
      initMainSection();
      break;
    case 'education':
      initEducationSection();
      break;
    case 'skills':
      initSkillsSection();
      break;
    case 'experience':
      initExperienceSection();
      break;
    case 'projects':
      initProjectsSection();
      break;
    case 'hackathons':
      initHackathonsSection();
      break;
    case 'future':
      // Future section is static
      break;
  }
}

// ===== Main Section =====

function initMainSection() {
  const container = document.getElementById('blog-posts-container');
  container.innerHTML = '';

  let visibleCount = 0;
  const interval = setInterval(() => {
    if (visibleCount < blogPosts.length) {
      const post = blogPosts[visibleCount];
      const postEl = document.createElement('div');
      postEl.className = 'blog-post group';
      postEl.innerHTML = `
        <div class="flex gap-2 text-green-400">
          <span>➜</span>
          <span class="text-blue-400">~</span>
          <span class="text-gray-400">echo</span>
          <span class="text-yellow-300">"${post.date}"</span>
        </div>
        <p class="text-gray-300 mt-1 pl-4 border-l-2 border-gray-700 group-hover:border-green-500 transition-colors">
          ${post.content}
        </p>
      `;
      container.appendChild(postEl);
      visibleCount++;

      // Auto-scroll
      container.scrollTop = container.scrollHeight;
    } else {
      clearInterval(interval);
      // Add cursor at the end
      const cursorEl = document.createElement('div');
      cursorEl.className = 'flex gap-2 text-green-400';
      cursorEl.innerHTML = `
        <span>➜</span>
        <span class="text-blue-400">~</span>
        <span class="w-2 h-5 bg-gray-400 block animate-pulse"></span>
      `;
      container.appendChild(cursorEl);
    }
  }, 500);
}

// ===== Education Section =====

function initEducationSection() {
  const spotlight = document.getElementById('education-spotlight');
  typeText(spotlight, 'The University of Texas at Dallas');

  const contentArea = document.getElementById('education-content');
  contentArea.classList.add('hidden');
  contentArea.innerHTML = '';

  // Reset folder selection visual
  document.querySelectorAll('#education-folders .desktop-folder').forEach(folder => {
    folder.classList.remove('selected');
  });

  // Setup folder click handlers
  document.querySelectorAll('#education-folders .desktop-folder').forEach(folder => {
    folder.onclick = () => handleEducationFolderClick(folder.dataset.folder);
  });
}

function handleEducationFolderClick(folderId) {
  const contentArea = document.getElementById('education-content');

  // Toggle selection
  if (selectedFolders.education === folderId) {
    selectedFolders.education = null;
    contentArea.classList.add('hidden');
    document.querySelectorAll('#education-folders .desktop-folder').forEach(f => f.classList.remove('selected'));
    return;
  }

  selectedFolders.education = folderId;

  // Update folder visuals
  document.querySelectorAll('#education-folders .desktop-folder').forEach(f => {
    if (f.dataset.folder === folderId) {
      f.classList.add('selected');
    } else {
      f.classList.remove('selected');
    }
  });

  // Show content
  const files = {
    degree: 'degree.txt',
    honors: 'honors.txt',
    coursework: 'coursework.txt',
    organizations: 'organizations.txt'
  };
  const data = educationData[folderId] || [];
  const title = files[folderId] || `${folderId}.txt`;

  contentArea.innerHTML = createTerminalWindow(title, `
    <div class="space-y-4">
      ${data.map(item => `
        <div class="flex gap-2 text-gray-300">
          <span class="text-green-400 shrink-0">➜</span>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  `, () => {
    selectedFolders.education = null;
    contentArea.classList.add('hidden');
    document.querySelectorAll('#education-folders .desktop-folder').forEach(f => f.classList.remove('selected'));
  });

  contentArea.classList.remove('hidden');
}

// ===== Skills Section =====

function initSkillsSection() {
  const spotlight = document.getElementById('skills-spotlight');
  typeText(spotlight, 'Technical Skills');

  const foldersContainer = document.getElementById('skills-folders');
  foldersContainer.innerHTML = skills.map((group, idx) => `
    <button data-folder="${idx}" class="desktop-folder flex flex-col items-center gap-2 group w-28 focus:outline-none">
      <div class="relative transition-all duration-200 group-hover:scale-105">
        ${createFolderIcon()}
      </div>
      <span class="folder-label text-xs font-medium text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md max-w-full truncate group-hover:bg-black/10 dark:group-hover:bg-white/10">${group.name}</span>
    </button>
  `).join('');

  const contentArea = document.getElementById('skills-content');
  contentArea.classList.add('hidden');
  contentArea.innerHTML = '';

  foldersContainer.querySelectorAll('.desktop-folder').forEach(folder => {
    folder.onclick = () => handleSkillsFolderClick(parseInt(folder.dataset.folder));
  });
}

function handleSkillsFolderClick(idx) {
  const contentArea = document.getElementById('skills-content');
  const foldersContainer = document.getElementById('skills-folders');

  if (selectedFolders.skills === idx) {
    selectedFolders.skills = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
    return;
  }

  selectedFolders.skills = idx;

  foldersContainer.querySelectorAll('.desktop-folder').forEach(f => {
    if (parseInt(f.dataset.folder) === idx) {
      f.classList.add('selected');
    } else {
      f.classList.remove('selected');
    }
  });

  const group = skills[idx];
  contentArea.innerHTML = createTerminalWindow(group.file, `
    <div class="flex gap-2 text-green-400 text-xs mb-4">
      <span>➜</span>
      <span class="text-blue-400">~</span>
      <span class="text-gray-400">cat ${group.file}</span>
    </div>

    <div class="skill-list">
      ${group.items.map(item => `<span>${item}</span>`).join('')}
    </div>
  `, () => {
    selectedFolders.skills = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
  });

  contentArea.classList.remove('hidden');
}

// ===== Experience Section =====

function initExperienceSection() {
  const spotlight = document.getElementById('experience-spotlight');
  typeText(spotlight, 'Work Experience');

  const foldersContainer = document.getElementById('experience-folders');
  foldersContainer.innerHTML = experience.map((job, idx) => `
    <button data-folder="${idx}" class="desktop-folder flex flex-col items-center gap-2 group w-28 focus:outline-none">
      <div class="relative transition-all duration-200 group-hover:scale-105">
        ${createFolderIcon()}
      </div>
      <span class="folder-label text-xs font-medium text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md max-w-full truncate group-hover:bg-black/10 dark:group-hover:bg-white/10">${job.company}</span>
    </button>
  `).join('');

  const contentArea = document.getElementById('experience-content');
  contentArea.classList.add('hidden');
  contentArea.innerHTML = '';

  // Setup folder click handlers
  foldersContainer.querySelectorAll('.desktop-folder').forEach(folder => {
    folder.onclick = () => handleExperienceFolderClick(parseInt(folder.dataset.folder));
  });
}

function handleExperienceFolderClick(idx) {
  const contentArea = document.getElementById('experience-content');
  const foldersContainer = document.getElementById('experience-folders');

  if (selectedFolders.experience === idx) {
    selectedFolders.experience = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
    return;
  }

  selectedFolders.experience = idx;

  foldersContainer.querySelectorAll('.desktop-folder').forEach(f => {
    if (parseInt(f.dataset.folder) === idx) {
      f.classList.add('selected');
    } else {
      f.classList.remove('selected');
    }
  });

  const job = experience[idx];
  contentArea.innerHTML = createTerminalWindow('job_description.txt', `
    <div class="mb-4 pb-4 border-b border-gray-700">
      <h3 class="text-xl font-bold text-white mb-1">${job.role}</h3>
      <div class="flex justify-between text-gray-400 text-xs">
        <span>${job.company}</span>
        <span>${job.period}</span>
      </div>
    </div>
    ${job.description.map(desc => `
      <div class="flex gap-2 mb-3">
        <span class="text-green-400 shrink-0">➜</span>
        <p class="text-gray-300 leading-relaxed">${desc}</p>
      </div>
    `).join('')}
  `, () => {
    selectedFolders.experience = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
  });

  contentArea.classList.remove('hidden');
}

// ===== Projects Section =====

function initProjectsSection() {
  const spotlight = document.getElementById('projects-spotlight');
  typeText(spotlight, 'My Projects');

  const foldersContainer = document.getElementById('projects-folders');
  foldersContainer.innerHTML = projects.map((project, idx) => `
    <button data-folder="${idx}" class="desktop-folder flex flex-col items-center gap-2 group w-28 focus:outline-none">
      <div class="relative transition-all duration-200 group-hover:scale-105">
        ${createFolderIcon()}
      </div>
      <span class="folder-label text-xs font-medium text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md max-w-full truncate group-hover:bg-black/10 dark:group-hover:bg-white/10">${project.name}</span>
    </button>
  `).join('');

  const contentArea = document.getElementById('projects-content');
  contentArea.classList.add('hidden');
  contentArea.innerHTML = '';

  foldersContainer.querySelectorAll('.desktop-folder').forEach(folder => {
    folder.onclick = () => handleProjectsFolderClick(parseInt(folder.dataset.folder));
  });
}

function handleProjectsFolderClick(idx) {
  const contentArea = document.getElementById('projects-content');
  const foldersContainer = document.getElementById('projects-folders');

  if (selectedFolders.projects === idx) {
    selectedFolders.projects = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
    return;
  }

  selectedFolders.projects = idx;

  foldersContainer.querySelectorAll('.desktop-folder').forEach(f => {
    if (parseInt(f.dataset.folder) === idx) {
      f.classList.add('selected');
    } else {
      f.classList.remove('selected');
    }
  });

  const project = projects[idx];
  contentArea.innerHTML = createTerminalWindow(`${project.name}.md`, `
    <div class="flex justify-between items-start mb-4 border-b border-gray-700 pb-2">
      <div class="text-yellow-300 font-bold"># ${project.name}</div>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white">
        ${createGithubIcon(18)}
      </a>
    </div>

    <div class="flex gap-2 text-green-400 text-xs mb-1">
      <span>➜</span>
      <span class="text-blue-400">~</span>
      <span class="text-gray-400">cat description</span>
    </div>
    <p class="text-gray-300 mb-6 pl-4 border-l-2 border-gray-700">${project.desc}</p>

    <div class="flex gap-2 text-green-400 text-xs mb-1">
      <span>➜</span>
      <span class="text-blue-400">~</span>
      <span class="text-gray-400">echo $TECH_STACK</span>
    </div>
    <div class="flex flex-wrap gap-2 pl-4">
      ${project.tags.map(tag => `
        <span class="text-purple-400 text-xs font-mono bg-purple-400/10 px-2 py-1 rounded">${tag}</span>
      `).join('')}
    </div>
  `, () => {
    selectedFolders.projects = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
  });

  contentArea.classList.remove('hidden');
}

// ===== Hackathons Section =====

function initHackathonsSection() {
  const spotlight = document.getElementById('hackathons-spotlight');
  typeText(spotlight, 'Hackathons');

  const foldersContainer = document.getElementById('hackathons-folders');
  foldersContainer.innerHTML = hackathons.map((hack, idx) => `
    <button data-folder="${idx}" class="desktop-folder flex flex-col items-center gap-2 group w-28 focus:outline-none">
      <div class="relative transition-all duration-200 group-hover:scale-105">
        ${createFolderIcon()}
      </div>
      <span class="folder-label text-xs font-medium text-gray-700 dark:text-gray-200 px-2 py-1 rounded-md max-w-full truncate group-hover:bg-black/10 dark:group-hover:bg-white/10">${hack.name}</span>
    </button>
  `).join('');

  const contentArea = document.getElementById('hackathons-content');
  contentArea.classList.add('hidden');
  contentArea.innerHTML = '';

  foldersContainer.querySelectorAll('.desktop-folder').forEach(folder => {
    folder.onclick = () => handleHackathonsFolderClick(parseInt(folder.dataset.folder));
  });
}

function handleHackathonsFolderClick(idx) {
  const contentArea = document.getElementById('hackathons-content');
  const foldersContainer = document.getElementById('hackathons-folders');

  if (selectedFolders.hackathons === idx) {
    selectedFolders.hackathons = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
    return;
  }

  selectedFolders.hackathons = idx;

  foldersContainer.querySelectorAll('.desktop-folder').forEach(f => {
    if (parseInt(f.dataset.folder) === idx) {
      f.classList.add('selected');
    } else {
      f.classList.remove('selected');
    }
  });

  const hack = hackathons[idx];
  contentArea.innerHTML = createTerminalWindow('hackathon_details.log', `
    <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
      <h3 class="text-white font-bold">${hack.name}</h3>
      <span class="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded border border-yellow-500/30">
        ${hack.award}
      </span>
    </div>

    <div class="flex gap-2 text-green-400 text-xs mb-1">
      <span>➜</span>
      <span class="text-gray-400">cat summary.txt</span>
    </div>
    <p class="text-gray-300 mb-6 pl-4 border-l-2 border-gray-700 leading-relaxed">
      ${hack.desc}
    </p>

    <div class="flex gap-4 mt-auto pt-4">
      <a href="${hack.links.devpost}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300">
        ${createCodeIcon(14)} Devpost
      </a>
      <a href="${hack.links.github}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-gray-400 flex items-center gap-1 hover:text-white">
        ${createGithubIcon(14)} Source
      </a>
    </div>
  `, () => {
    selectedFolders.hackathons = null;
    contentArea.classList.add('hidden');
    foldersContainer.querySelectorAll('.desktop-folder').forEach(f => f.classList.remove('selected'));
  });

  contentArea.classList.remove('hidden');
}

// ===== Terminal Window Helper =====

function createTerminalWindow(title, content, onClose) {
  const id = 'terminal-' + Date.now();

  setTimeout(() => {
    const closeBtn = document.getElementById(id + '-close');
    if (closeBtn && onClose) {
      closeBtn.onclick = onClose;
    }
  }, 0);

  return `
    <div class="terminal-content bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-sm border border-gray-700 flex flex-col h-auto min-h-[300px]">
      <div class="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700 shrink-0">
        <div class="flex items-center gap-2">
          ${createTerminalIcon()}
          <span class="text-gray-300 text-xs">${title}</span>
        </div>
        <button id="${id}-close" class="close-btn text-gray-400 hover:text-white transition-colors">
          ${createCloseIcon()}
        </button>
      </div>
      <div class="p-4 space-y-2 overflow-y-auto scroll-smooth flex-1">
        ${content}
      </div>
    </div>
  `;
}

// ===== Contact Form =====

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Placeholder - form doesn't actually submit
      const textarea = form.querySelector('textarea');
      if (textarea) {
        textarea.value = '';
      }
    });
  }
}

// ===== Initialize =====

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initMainSection();
  initContactForm();
});
