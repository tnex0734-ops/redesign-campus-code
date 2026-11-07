/* ==========================================================================
   CampusCode Authenticated Application — Shared State & Services
   Handles demo state, user storage, authentication, submissions & certificates
   ========================================================================== */

const CAMPUSCODE_STORAGE_KEY = 'campuscode_user';

const DEFAULT_DEMO_USER = {
  name: 'Sai Harshith',
  email: 'sai@campuscode.co.in',
  role: 'STUDENT',
  campusId: 'CC-2026-8841',
  college: 'College of Engineering, Guindy',
  department: 'Computer Science & Engineering',
  batch: 'Class of 2026',
  bio: 'Full-stack builder passionate about hackathons, distributed systems, and shipping products.',
  skills: 'React, Next.js, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, Git',
  avatarType: 'mascot', // 'mascot' | 'photo'
  mascotId: 'code-fox',
  photoUrl: '',
  teamName: "sai'steam",
  trackingType: 'Individual Participant (Solo)',
  registeredEvents: ['rebuild-26', 'quiz-2'],
  submissions: {
    'rebuild-26': {
      projectName: 'CampusCode Arena Experience',
      githubUrl: 'https://github.com/sai-harshith/campuscode-rebuild',
      demoUrl: 'https://campuscode-rebuild.netlify.app',
      driveUrl: 'https://drive.google.com/file/d/1campuscode-walkthrough-demo',
      notes: 'Faithful recreation of all core views in pure semantic HTML/CSS/JS with warm editorial aesthetics, zero build steps, and deterministic preflight checks.',
      status: 'SUBMITTED',
      lastSaved: 'Today at 08:30 PM',
      preflightPassed: true,
      preflightReport: {
        githubVerified: true,
        demoReachable: true,
        noveltyScore: 88,
        feasibilityScore: 94,
        complianceScore: 100
      }
    }
  },
  notifications: [
    {
      id: 1,
      category: 'events',
      title: 'Round 1 Submission Window Open',
      body: 'ReBuild \'26 Round 1 is live until 10:00 PM IST. Preflight and submit your demo project.',
      time: '15m ago',
      read: false,
      eventId: 'rebuild-26'
    },
    {
      id: 2,
      category: 'team',
      title: 'HackMate: New Teammate Match',
      body: 'Aditi Roy (Frontend & Design, CC-2026-4412) matches your tech stack preferences.',
      time: '2h ago',
      read: false,
      actionText: 'View in HackMate'
    },
    {
      id: 3,
      category: 'system',
      title: 'Digital ID Pass Cryptographically Signed',
      body: 'Your student credential CC-2026-8841 has been verified on the CampusCode student registry.',
      time: '1d ago',
      read: true
    },
    {
      id: 4,
      category: 'events',
      title: 'FirstCommit \'26 Certificate Issued',
      body: 'Your Top 10% Participant verified credential is now available in your awards tab.',
      time: '3d ago',
      read: true
    }
  ],
  certificates: [
    {
      id: 'CERT-2026-FC01-992',
      event: 'FirstCommit \'26 Quiz 1.0',
      issueDate: '15 OCT 2026',
      honor: 'Top 10% Participant (Assessment Score: 94/100)',
      hash: '0x9b32a76ef10984de2a64c582881a4b',
      issuer: 'CampusCode Technical Board',
      status: 'VERIFIED'
    },
    {
      id: 'CERT-2026-RB26-004',
      event: 'ReBuild \'26 Hackathon',
      issueDate: '07 NOV 2026',
      honor: 'Round 1 Qualified Builder (Desktop & Mobile Track)',
      hash: '0x7e29c81bb604312fa89b2103f5647c',
      issuer: 'CampusCode Arena Council',
      status: 'ISSUED'
    }
  ]
};

// Mascot SVG library
const MASCOTS = {
  'code-fox': {
    name: 'Code Fox',
    tagline: 'Agile & Observant',
    bg: '#EBF1FC',
    color: '#D9531E',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#FDF4ED" stroke="#E6A93C" stroke-width="2"/>
      <path d="M25 72 C25 45 40 32 50 32 C60 32 75 45 75 72 Z" fill="#D9531E"/>
      <polygon points="28,42 35,20 45,35" fill="#D9531E"/>
      <polygon points="32,38 36,25 42,34" fill="#FBF0D8"/>
      <polygon points="72,42 65,20 55,35" fill="#D9531E"/>
      <polygon points="68,38 64,25 58,34" fill="#FBF0D8"/>
      <path d="M38 52 C44 64 56 64 62 52 Z" fill="#FFF"/>
      <circle cx="43" cy="48" r="3.5" fill="#1C1B19"/>
      <circle cx="57" cy="48" r="3.5" fill="#1C1B19"/>
      <circle cx="44" cy="47" r="1.2" fill="#FFF"/>
      <circle cx="58" cy="47" r="1.2" fill="#FFF"/>
      <polygon points="48,56 52,56 50,60" fill="#1C1B19"/>
    </svg>`
  },
  'sage-owl': {
    name: 'Sage Owl',
    tagline: 'Systems & Architecture',
    bg: '#EAF2F9',
    color: '#2D56B3',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#EBF1FC" stroke="#315CBF" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="26" ry="24" fill="#2D56B3"/>
      <circle cx="40" cy="46" r="10" fill="#FFF"/>
      <circle cx="60" cy="46" r="10" fill="#FFF"/>
      <circle cx="40" cy="46" r="4.5" fill="#1C1B19"/>
      <circle cx="60" cy="46" r="4.5" fill="#1C1B19"/>
      <polygon points="47,52 53,52 50,58" fill="#E6A93C"/>
      <polygon points="34,26 42,38 30,36" fill="#22438F"/>
      <polygon points="66,26 58,38 70,36" fill="#22438F"/>
    </svg>`
  },
  'speed-lynx': {
    name: 'Speed Lynx',
    tagline: 'Rapid Prototyper',
    bg: '#FCF4E6',
    color: '#C47A14',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#FCF4E6" stroke="#D98E1C" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="24" ry="22" fill="#C47A14"/>
      <polygon points="26,38 32,18 42,32" fill="#C47A14"/>
      <polygon points="74,38 68,18 58,32" fill="#C47A14"/>
      <circle cx="42" cy="50" r="3.5" fill="#1C1B19"/>
      <circle cx="58" cy="50" r="3.5" fill="#1C1B19"/>
      <path d="M46 58 Q50 62 54 58" stroke="#1C1B19" stroke-width="2" fill="none"/>
    </svg>`
  },
  'builder-beaver': {
    name: 'Builder Beaver',
    tagline: 'Deep Infrastructure',
    bg: '#E8F5EE',
    color: '#257849',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#E8F5EE" stroke="#257849" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="25" ry="23" fill="#6A462F"/>
      <circle cx="42" cy="46" r="3.5" fill="#1C1B19"/>
      <circle cx="58" cy="46" r="3.5" fill="#1C1B19"/>
      <ellipse cx="50" cy="55" rx="8" ry="6" fill="#3D2619"/>
      <rect x="47" y="60" width="3" height="4.5" fill="#FFF" rx="0.5"/>
      <rect x="50" y="60" width="3" height="4.5" fill="#FFF" rx="0.5"/>
    </svg>`
  },
  'sprint-falcon': {
    name: 'Sprint Falcon',
    tagline: 'High Performance',
    bg: '#F3EFE7',
    color: '#4A4843',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#F3EFE7" stroke="#7A776F" stroke-width="2"/>
      <path d="M30 64 C30 40 45 30 50 30 C55 30 70 40 70 64 Z" fill="#4A4843"/>
      <polygon points="50,46 58,54 50,56" fill="#E6A93C"/>
      <circle cx="44" cy="44" r="3.5" fill="#1C1B19"/>
      <circle cx="45" cy="43" r="1.2" fill="#FFF"/>
    </svg>`
  },
  'cyber-cat': {
    name: 'Terminal Cat',
    tagline: 'Night Owl Hacker',
    bg: '#EFEBFB',
    color: '#6E5BE8',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="#EFEBFB" stroke="#6E5BE8" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="24" ry="22" fill="#242132"/>
      <polygon points="30,42 36,22 46,36" fill="#242132"/>
      <polygon points="70,42 64,22 54,36" fill="#242132"/>
      <circle cx="41" cy="50" r="3.5" fill="#90D326"/>
      <circle cx="59" cy="50" r="3.5" fill="#90D326"/>
      <polygon points="48,56 52,56 50,59" fill="#F09B9B"/>
    </svg>`
  }
};

function getUser() {
  try {
    const raw = localStorage.getItem(CAMPUSCODE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name) {
        // Deep merge with defaults so newly added schema fields exist
        return { ...DEFAULT_DEMO_USER, ...parsed };
      }
    }
  } catch (e) {
    console.warn('CampusCode state parse error, falling back to demo state:', e);
  }
  return { ...DEFAULT_DEMO_USER };
}

function setUser(u) {
  try {
    localStorage.setItem(CAMPUSCODE_STORAGE_KEY, JSON.stringify(u));
  } catch (e) {
    console.error('Failed to save user to localStorage:', e);
  }
}

function genCaptcha() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function quickDemoLogin() {
  setUser({ ...DEFAULT_DEMO_USER });
  window.location.href = 'student.html';
}

function resetDemoData() {
  setUser({ ...DEFAULT_DEMO_USER });
  window.location.reload();
}

function logout() {
  try {
    localStorage.removeItem(CAMPUSCODE_STORAGE_KEY);
  } catch (e) {}
  window.location.href = 'login.html';
}

// Global user avatar renderer
function renderUserAvatar(user, sizePx = 36) {
  if (user && user.avatarType === 'photo' && user.photoUrl) {
    return `<img src="${user.photoUrl}" alt="${user.name}" style="width:${sizePx}px;height:${sizePx}px;border-radius:50%;object-fit:cover;border:1px solid var(--cc-border);">`;
  }
  const mascotId = (user && user.mascotId && MASCOTS[user.mascotId]) ? user.mascotId : 'code-fox';
  const mascot = MASCOTS[mascotId];
  return `<div style="width:${sizePx}px;height:${sizePx}px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;overflow:hidden;flex-shrink:0;">${mascot.svg}</div>`;
}
