/* ==========================================================================
   CampusCode Authenticated Student Application Controller
   Powers views, workspace, submission preflight, mascots, modals & drawers
   ========================================================================== */

// Active state
let currentTab = 'overview';
let currentWorkspaceSubtab = 'overview';
let activeEventId = 'rebuild-26';
let activeNotifFilter = 'all';

// Mock Events Catalog
const EVENTS_CATALOG = [
  {
    id: 'rebuild-26',
    title: "ReBuild '26 — Reconstruction Hackathon",
    badge: 'LIVE NOW',
    badgeType: 'live',
    category: 'hackathon',
    dates: 'Nov 6–7, 2026',
    mode: 'Solo (Team tracking enabled)',
    location: 'Online / Chennai Track',
    prizes: '₹15,000 Stipend Internship + Certificates',
    summary: "Recreate the CampusCode user flow faithfully (Landing, Login, Register, Student Portal) in desktop and mobile responsive layout. Round 1 submission open till 10:00 PM IST.",
    eligibility: 'All verified undergraduate and postgraduate engineering/tech students across India.',
    rules: [
      'Round 1: Recreate the core 4 pages with pure HTML/CSS/JS or approved client stack.',
      'Desktop-first design, mobile responsive with zero horizontal overflow.',
      'Must submit working GitHub repository URL and public live demo URL (Netlify/Vercel/GitHub Pages).',
      'Individual participation. Team name created on Unstop and portal is strictly for submission tracking.',
      'Round 2 takes place on Saturday, 7 Nov for Round 1 qualified builders only.'
    ]
  },
  {
    id: 'quiz-2',
    title: "FirstCommit '26 Quiz Competition 2.0",
    badge: 'LIVE ASSESSMENT',
    badgeType: 'live',
    category: 'quiz',
    dates: 'Nov 14–15, 2026',
    mode: 'Timed Assessment (Solo)',
    location: 'CampusCode Online Assessment Portal',
    prizes: '₹5,000 Cash Pool + Merit Certificates',
    summary: "National algorithmic problem solving, web fundamentals, and system architecture assessment.",
    eligibility: 'All students enrolled in accredited colleges. Timed 45-minute window.',
    rules: [
      '40 multiple choice algorithmic & systems questions.',
      'Strict anti-cheat browser environment.',
      'Top 10% receive CampusCode Gold Badges.'
    ]
  },
  {
    id: 'techsprint-26',
    title: "TechSprint '26 National Hackathon",
    badge: 'UPCOMING',
    badgeType: 'upcoming',
    category: 'hackathon',
    dates: 'Dec 5–6, 2026',
    mode: 'Teams of 2–4 Builders',
    location: 'Hybrid / Bangalore & Online',
    prizes: '₹50,000 Prize Pool + Founder Angel Mentorship',
    summary: "Build next-generation developer tooling, agentic AI sidecars, or decentralized identity protocols.",
    eligibility: 'Teams of 2 to 4 members. Cross-college teams welcome.',
    rules: [
      '36-hour non-stop sprint.',
      'Code must be committed to public GitHub repository created after hackathon start.'
    ]
  },
  {
    id: 'smartcampus-26',
    title: "SmartCampus IoT & Systems Hack",
    badge: 'UPCOMING',
    badgeType: 'upcoming',
    category: 'hackathon',
    dates: 'Jan 16–17, 2027',
    mode: 'Solo or Duos',
    location: 'Chennai Campus',
    prizes: '₹30,000 Grant + Incubation Fast-track',
    summary: "Develop embedded sensor systems, energy monitors, or autonomous campus navigation software.",
    eligibility: 'Hardware enthusiasts and embedded systems builders.',
    rules: [
      'Hardware simulation or physical prototype demo required.',
      'Working demo video must accompany project submission.'
    ]
  }
];

// Builders Catalog for HackMate Matchmaking
const HACKMATE_BUILDERS = [
  {
    id: 'CC-2026-4412',
    name: 'Aditi Roy',
    role: 'Frontend Architect & UI Designer',
    college: 'IIT Madras',
    skills: ['React', 'Figma', 'Tailwind CSS', 'Next.js'],
    matchRate: '96% Stack Match',
    mascotId: 'speed-lynx'
  },
  {
    id: 'CC-2026-9031',
    name: 'Karthik V',
    role: 'Backend & Cloud Engineer',
    college: 'Anna University (CEG)',
    skills: ['Go', 'Docker', 'PostgreSQL', 'Node.js'],
    matchRate: '92% Complementary',
    mascotId: 'builder-beaver'
  },
  {
    id: 'CC-2026-3189',
    name: 'Priya Sharma',
    role: 'AI / ML Engineer',
    college: 'BITS Pilani',
    skills: ['Python', 'PyTorch', 'FastAPI', 'LangChain'],
    matchRate: '89% Complementary',
    mascotId: 'sage-owl'
  },
  {
    id: 'CC-2026-7720',
    name: 'Rohan Mehta',
    role: 'Systems & Web3 Developer',
    college: 'NIT Trichy',
    skills: ['Rust', 'Solidity', 'TypeScript', 'GraphQL'],
    matchRate: '85% Match',
    mascotId: 'sprint-falcon'
  }
];

// RuleBot Knowledge Base
const RULEBOT_FAQ = [
  {
    q: "What is Round 1 in ReBuild '26?",
    a: "Round 1 is a faithful recreation hackathon. You rebuild the 4 core CampusCode pages (Public Landing, Login, Register, Student Portal) with clean layout, responsive behaviors, and zero build step dependencies. Submissions close Friday 10:00 PM IST."
  },
  {
    q: "Can I participate in a team for ReBuild '26?",
    a: "ReBuild '26 is an INDIVIDUAL hackathon. You write code alone. However, you must create a team name for tracking purposes across Unstop and the CampusCode portal (e.g. sai'steam)."
  },
  {
    q: "What are the submission requirements for Round 1?",
    a: "You must provide: 1) A public GitHub repository link containing your source code; 2) A live demo link (Netlify, Vercel, or GitHub Pages); 3) Optional Drive walkthrough link; 4) Organizer notes describing your implementation."
  },
  {
    q: "How does IdeaCheck AI evaluate preflight submissions?",
    a: "IdeaCheck inspects URL formats, checks live repository accessibility, runs automated layout heuristics, and scores technical completeness, design system consistency, and competition rule compliance."
  },
  {
    q: "What are the prizes for ReBuild '26?",
    a: "Winner: Official Winner Certificate + CampusCode Software Engineering Internship with ₹15,000 monthly stipend. Runner-up: Merit Certificate. All eligible participants receive verified credentials."
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderUserData();
  renderEventsCatalog();
  renderHackMateBuilders();
  renderRuleBotFaq();
  setupCommandPalette();
  setupKeyboardShortcuts();
  updateCountdownTimer();
  setInterval(updateCountdownTimer, 1000);

  // Check URL hash or query param to deep-link to tab
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const params = new URLSearchParams(window.location.search);
  const tabParam = params.get('tab') || hash;
  if (tabParam) {
    if (tabParam === 'workspace') {
      const sub = params.get('sub') || 'overview';
      openEventWorkspace('rebuild-26', sub);
    } else {
      switchTab(tabParam);
    }
  }
});

// Switch Main Tab
function switchTab(tabId) {
  currentTab = tabId;

  // Update Nav Items
  document.querySelectorAll('.nav-item-btn, .rail-icon-btn, .rail-btn, .topbar-tab-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  
  // Update Contextual Floating Pill Navigation
  const floatingNav = document.getElementById('topbarFloatingNav');
  if (floatingNav) {
    if (tabId === 'overview') {
      floatingNav.innerHTML = `
        <button type="button" class="pill-tab-item active" data-context-tab="overview" onclick="switchDashboardSub('overview')">Overview</button>
        <button type="button" class="pill-tab-item" data-context-tab="activity" onclick="switchDashboardSub('activity')">Activity</button>
        <button type="button" class="pill-tab-item" data-context-tab="deadlines" onclick="switchDashboardSub('deadlines')">Deadlines</button>
        <button type="button" class="pill-tab-item" data-context-tab="achievements" onclick="switchTab('certificates')">Achievements</button>
      `;
    } else if (tabId === 'events') {
      floatingNav.innerHTML = `
        <button type="button" class="pill-tab-item active" onclick="filterEvents('all', this)">All Events</button>
        <button type="button" class="pill-tab-item" onclick="filterEvents('hackathon', this)">Hackathons</button>
        <button type="button" class="pill-tab-item" onclick="filterEvents('quiz', this)">Timed Quizzes</button>
      `;
    } else if (tabId === 'workspace') {
      floatingNav.innerHTML = `
        <button type="button" class="pill-tab-item ${currentWorkspaceSubtab === 'overview' ? 'active' : ''}" onclick="switchWorkspaceSubtab('overview')">01 Overview</button>
        <button type="button" class="pill-tab-item ${currentWorkspaceSubtab === 'team' ? 'active' : ''}" onclick="switchWorkspaceSubtab('team')">02 My Team</button>
        <button type="button" class="pill-tab-item ${currentWorkspaceSubtab === 'submit' ? 'active' : ''}" onclick="switchWorkspaceSubtab('submit')">03 Submission</button>
        <button type="button" class="pill-tab-item ${currentWorkspaceSubtab === 'results' ? 'active' : ''}" onclick="switchWorkspaceSubtab('results')">04 Results</button>
      `;
    } else if (tabId === 'digital-id') {
      floatingNav.innerHTML = `
        <button type="button" class="pill-tab-item active" onclick="toggleGlassCardArise()">Tap Card to Arise</button>
        <button type="button" class="pill-tab-item" onclick="alert('Exporting verified credentials PDF...')">Download Pass ↗</button>
      `;
    } else {
      floatingNav.innerHTML = `
        <button type="button" class="pill-tab-item active" onclick="switchTab('${tabId}')">Active Context</button>
      `;
    }
  }

  // Update Views
  document.querySelectorAll('.app-view-section').forEach(view => {
    view.style.display = (view.id === 'view-' + tabId) ? 'block' : 'none';
  });

  // Update Breadcrumbs
  const titleMap = {
    'overview': 'HOME',
    'events': 'EXPLORE EVENTS',
    'my-events': 'MY EVENTS',
    'workspace': "WORKSPACE / REBUILD '26",
    'profile': 'PROFILE & SKILLS',
    'digital-id': 'DIGITAL STUDENT ID',
    'certificates': 'VERIFIED CREDENTIALS',
    'guide': 'STUDENT GUIDE & FAQS',
    'support': 'HELP & SUPPORT'
  };
  const titleEl = document.getElementById('topbarActiveTitle');
  if (titleEl) titleEl.innerText = titleMap[tabId] || 'WORKSPACE';

  // Close mobile sidebar if open
  closeMobileSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Switch Workspace Subtab
function switchWorkspaceSubtab(subtabId) {
  currentWorkspaceSubtab = subtabId;
  document.querySelectorAll('.workspace-subtab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subtab === subtabId);
  });
  document.querySelectorAll('.workspace-sub-panel').forEach(panel => {
    panel.style.display = (panel.id === 'ws-panel-' + subtabId) ? 'block' : 'none';
  });
}

// Open Workspace for an Event
function openEventWorkspace(eventId = 'rebuild-26', subtab = 'overview') {
  activeEventId = eventId;
  switchTab('workspace');
  switchWorkspaceSubtab(subtab);
}

// Render User Data Across Application
function renderUserData() {
  const user = getUser();

  // Topbar and Sidebar User Details
  const topbarName = document.getElementById('topbarUserName');
  if (topbarName) topbarName.innerText = user.name;

  const sidebarName = document.getElementById('sidebarUserName');
  if (sidebarName) sidebarName.innerText = user.name;

  const sidebarId = document.getElementById('sidebarUserId');
  if (sidebarId) sidebarId.innerText = user.campusId;

  // Avatars
  const topbarAvatar = document.getElementById('topbarAvatarContainer');
  if (topbarAvatar) topbarAvatar.innerHTML = renderUserAvatar(user, 32);

  const sidebarAvatar = document.getElementById('sidebarAvatarContainer');
  if (sidebarAvatar) sidebarAvatar.innerHTML = renderUserAvatar(user, 34);

  const profileAvatar = document.getElementById('profileAvatarPreview');
  if (profileAvatar) profileAvatar.innerHTML = renderUserAvatar(user, 110);

  const passAvatar = document.getElementById('passAvatarContainer');
  if (passAvatar) passAvatar.innerHTML = renderUserAvatar(user, 72);

  // Profile View Inputs & Texts
  setText('profileDisplayGreeting', user.name.split(' ')[0]);
  setText('profileDisplayName', user.name);
  setText('profileDisplayEmail', user.email);
  setText('profileDisplayId', user.campusId);
  setText('profileDisplayCollege', user.college || 'College of Engineering, Guindy');
  setText('profileDisplayBio', user.bio);

  setVal('inputProfileName', user.name);
  setVal('inputProfileEmail', user.email);
  setVal('inputProfileCollege', user.college || 'College of Engineering, Guindy');
  setVal('inputProfileBio', user.bio);
  setVal('inputProfileSkills', user.skills);

  // Digital ID Pass Card
  setText('passName', user.name);
  setText('passId', user.campusId);
  setText('passCollege', user.college || 'College of Engineering, Guindy');
  renderPassQr(user.campusId, user.name);

  // Workspace team details
  setText('wsTeamName', user.teamName || "sai'steam");
  setText('wsTrackingType', user.trackingType || 'Individual Participant (Solo)');
  setText('wsMemberName', user.name);
  setText('wsMemberId', user.campusId);

  // Submission Form Values
  if (user.submissions && user.submissions['rebuild-26']) {
    const sub = user.submissions['rebuild-26'];
    setVal('subGithubUrl', sub.githubUrl || '');
    setVal('subDemoUrl', sub.demoUrl || '');
    setVal('subDriveUrl', sub.driveUrl || '');
    setVal('subNotes', sub.notes || '');
    setText('subLastSavedTime', sub.lastSaved || 'Saved');
  }

  // Render Skill Chips
  renderSkillChips(user.skills);

  // Render Mascot Selection State
  renderMascotChoices(user.mascotId || 'code-fox');

  // Render Notification Unread Badge
  const unreadCount = user.notifications.filter(n => !n.read).length;
  const notifBadge = document.getElementById('notifUnreadBadge');
  if (notifBadge) {
    notifBadge.innerText = unreadCount;
    notifBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
  }
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerText = val || '';
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

// Render Skill Chips
function renderSkillChips(skillsString = '') {
  const container = document.getElementById('skillsClusterContainer');
  if (!container) return;
  const skills = skillsString.split(',').map(s => s.trim()).filter(Boolean);
  container.innerHTML = skills.map(skill => `
    <span class="skill-tag-pill">
      <span>${skill}</span>
      <button type="button" onclick="removeSkill('${skill}')" title="Remove ${skill}">×</button>
    </span>
  `).join('');
}

function addSkill(skill) {
  const user = getUser();
  const list = user.skills.split(',').map(s => s.trim()).filter(Boolean);
  if (!list.includes(skill)) {
    list.push(skill);
    user.skills = list.join(', ');
    setUser(user);
    renderUserData();
  }
}

function removeSkill(skill) {
  const user = getUser();
  const list = user.skills.split(',').map(s => s.trim()).filter(Boolean);
  const updated = list.filter(s => s !== skill);
  user.skills = updated.join(', ');
  setUser(user);
  renderUserData();
}

// Render Mascot Choices Grid
function renderMascotChoices(activeMascotId) {
  const container = document.getElementById('mascotGridContainer');
  if (!container) return;
  container.innerHTML = Object.entries(MASCOTS).map(([id, m]) => `
    <button type="button" class="mascot-choice-btn ${id === activeMascotId ? 'selected' : ''}" onclick="selectMascot('${id}')">
      <div style="width: 44px; height: 44px;">${m.svg}</div>
      <span>${m.name}</span>
    </button>
  `).join('');
}

function selectMascot(mascotId) {
  const user = getUser();
  user.avatarType = 'mascot';
  user.mascotId = mascotId;
  setUser(user);
  renderUserData();
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const user = getUser();
    user.avatarType = 'photo';
    user.photoUrl = e.target.result;
    setUser(user);
    renderUserData();
    alert('Profile photo uploaded successfully!');
  };
  reader.readAsDataURL(file);
}

// Save Profile Edits
function handleSaveProfile(e) {
  e.preventDefault();
  const user = getUser();
  user.name = document.getElementById('inputProfileName').value.trim() || user.name;
  user.college = document.getElementById('inputProfileCollege').value.trim() || user.college;
  user.bio = document.getElementById('inputProfileBio').value.trim();
  user.skills = document.getElementById('inputProfileSkills').value.trim();
  setUser(user);
  renderUserData();

  const alertBox = document.getElementById('profileSaveAlert');
  if (alertBox) {
    alertBox.style.display = 'flex';
    setTimeout(() => { alertBox.style.display = 'none'; }, 2400);
  }
}

// Render Events Catalog
function renderEventsCatalog(filter = 'all') {
  const container = document.getElementById('eventsCatalogGrid');
  if (!container) return;

  const searchVal = (document.getElementById('eventsSearchInput')?.value || '').toLowerCase();

  const filtered = EVENTS_CATALOG.filter(ev => {
    const matchesFilter = (filter === 'all') || (filter === ev.category);
    const matchesSearch = !searchVal || ev.title.toLowerCase().includes(searchVal) || ev.summary.toLowerCase().includes(searchVal);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px; text-align: center; background: var(--cc-surface); border-radius: var(--cc-radius-lg); border: 1px dashed var(--cc-border);">
        <p style="font-size: 15px; color: var(--cc-ink-muted);">No events found matching your criteria.</p>
        <button type="button" class="btn-open-link" onclick="resetEventFilters()" style="margin-top: 10px;">Clear Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ev => `
    <div class="event-catalog-card">
      <div class="event-card-top">
        <span class="event-badge-tag ${ev.badgeType === 'live' ? 'badge-status-live' : 'badge-status-upcoming'}">
          ${ev.badge}
        </span>
        <span style="font-family: var(--cc-font-mono); font-size: 11px; color: var(--cc-ink-muted);">
          ${ev.dates}
        </span>
      </div>

      <div class="event-card-body">
        <h3>${ev.title}</h3>
        <p>${ev.summary}</p>
      </div>

      <div class="event-card-meta-grid">
        <div class="event-meta-cell">
          <span>FORMAT</span>
          <strong>${ev.mode}</strong>
        </div>
        <div class="event-meta-cell">
          <span>LOCATION</span>
          <strong>${ev.location}</strong>
        </div>
        <div class="event-meta-cell" style="grid-column: 1/-1;">
          <span>PRIZES & RECOGNITION</span>
          <strong style="color: var(--cc-primary);">${ev.prizes}</strong>
        </div>
      </div>

      <div class="event-card-footer">
        <button type="button" class="btn-open-link" onclick="openEventDetailsModal('${ev.id}')">
          VIEW RULEBOOK & SPECS ↗
        </button>
        ${ev.id === 'rebuild-26' ? `
          <button type="button" class="btn-feature-primary" onclick="openEventWorkspace('rebuild-26')">
            ENTER WORKSPACE ↗
          </button>
        ` : `
          <button type="button" class="btn-feature-secondary" onclick="promptJoinEvent('${ev.title}')">
            REGISTER / JOIN
          </button>
        `}
      </div>
    </div>
  `).join('');
}

function filterEvents(category, btn) {
  document.querySelectorAll('.filter-chip-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderEventsCatalog(category);
}

function resetEventFilters() {
  const search = document.getElementById('eventsSearchInput');
  if (search) search.value = '';
  const firstChip = document.querySelector('.filter-chip-btn');
  if (firstChip) filterEvents('all', firstChip);
}

// Event Details Modal
function openEventDetailsModal(eventId) {
  const ev = EVENTS_CATALOG.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById('eventDetailsModal');
  const body = document.getElementById('eventDetailsModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
      <div>
        <span class="event-badge-tag ${ev.badgeType === 'live' ? 'badge-status-live' : 'badge-status-upcoming'}">${ev.badge}</span>
        <h2 style="font-family: var(--cc-font-display); font-size: 28px; font-weight: 400; margin-top: 8px;">${ev.title}</h2>
      </div>
    </div>

    <div style="background: var(--cc-surface-muted); padding: 14px 16px; border-radius: var(--cc-radius-md); border: 1px solid var(--cc-border); margin-bottom: 20px;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-family: var(--cc-font-mono); font-size: 11px;">
        <div><span>TIMELINE</span><strong style="display:block; color:var(--cc-ink); margin-top:2px;">${ev.dates}</strong></div>
        <div><span>FORMAT</span><strong style="display:block; color:var(--cc-ink); margin-top:2px;">${ev.mode}</strong></div>
        <div><span>VENUE</span><strong style="display:block; color:var(--cc-ink); margin-top:2px;">${ev.location}</strong></div>
      </div>
    </div>

    <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Competition Overview</h4>
    <p style="font-size: 13.5px; color: var(--cc-ink-secondary); line-height: 1.5; margin-bottom: 20px;">${ev.summary}</p>

    <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Eligibility Criteria</h4>
    <p style="font-size: 13.5px; color: var(--cc-ink-secondary); line-height: 1.5; margin-bottom: 20px;">${ev.eligibility}</p>

    <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Official Rules & Submission Protocol</h4>
    <ul style="font-size: 13px; color: var(--cc-ink-secondary); line-height: 1.6; padding-left: 18px; margin-bottom: 24px;">
      ${ev.rules.map(r => `<li>${r}</li>`).join('')}
    </ul>

    <div style="display: flex; gap: 10px; justify-content: flex-end; border-top: 1px solid var(--cc-border); padding-top: 16px;">
      <button type="button" class="sidebar-sub-btn" onclick="closeModal('eventDetailsModal')">Close</button>
      ${ev.id === 'rebuild-26' ? `
        <button type="button" class="btn-feature-primary" onclick="closeModal('eventDetailsModal'); openEventWorkspace('rebuild-26');">
          Open Live Workspace ↗
        </button>
      ` : `
        <button type="button" class="btn-feature-primary" onclick="closeModal('eventDetailsModal'); promptJoinEvent('${ev.title}');">
          Join Event
        </button>
      `}
    </div>
  `;

  modal.classList.add('open');
}

// Render HackMate Matchmaking Builders
function renderHackMateBuilders() {
  const container = document.getElementById('hackmateBuildersGrid');
  if (!container) return;

  container.innerHTML = HACKMATE_BUILDERS.map(b => `
    <div class="structured-item-row" style="background: var(--cc-surface);">
      <div class="structured-item-left">
        <div style="width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: var(--cc-surface-warm); border: 1px solid var(--cc-border); display: flex; align-items: center; justify-content: center;">
          ${MASCOTS[b.mascotId]?.svg || ''}
        </div>
        <div class="item-meta-col">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="item-title-text">${b.name}</span>
            <span class="nav-badge-pill nav-badge-blue">${b.matchRate}</span>
          </div>
          <span class="item-subtext">${b.role} · ${b.college}</span>
          <div style="display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap;">
            ${b.skills.map(s => `<span style="font-family: var(--cc-font-mono); font-size: 9.5px; background: var(--cc-surface-muted); padding: 1px 6px; border-radius: 4px; border: 1px solid var(--cc-border);">${s}</span>`).join('')}
          </div>
        </div>
      </div>
      <button type="button" class="btn-open-link" onclick="inviteBuilder('${b.name}', '${b.id}')">
        INVITE TO TEAM ↗
      </button>
    </div>
  `).join('');
}

// Global Toast Notification System
function showToast(title, msg, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const iconMap = {
    'success': '✓',
    'info': '✦',
    'warm': '⚡'
  };

  const pill = document.createElement('div');
  pill.className = `toast-pill ${type}`;
  pill.innerHTML = `
    <div class="toast-icon-circle">${iconMap[type] || '✦'}</div>
    <div class="toast-content">
      <span class="toast-title">${title}</span>
      <span class="toast-msg">${msg}</span>
    </div>
  `;

  container.appendChild(pill);
  setTimeout(() => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(12px) scale(0.96)';
    setTimeout(() => pill.remove(), 240);
  }, 3500);
}

function inviteBuilder(name, id) {
  showToast('Teammate Invited', `Invitation dispatched to ${name} (${id}) for upcoming collaborative competitions.`, 'info');
}

// Preflight & Submission Handlers
function runSubmissionPreflight() {
  const github = document.getElementById('subGithubUrl').value.trim();
  const demo = document.getElementById('subDemoUrl').value.trim();

  const isGithubValid = /^https:\/\/github\.com\/[a-zA-Z0-9_\-\.]+\/[a-zA-Z0-9_\-\.]+/.test(github);
  const isDemoValid = /^https?:\/\/.+/.test(demo);

  const gitIcon = document.getElementById('preflightGitIcon');
  const demoIcon = document.getElementById('preflightDemoIcon');
  const reportBox = document.getElementById('preflightReportBox');
  const lockBtn = document.getElementById('btnLockSubmission');

  if (gitIcon) {
    gitIcon.className = 'check-icon ' + (isGithubValid ? 'pass' : 'wait');
    gitIcon.innerText = isGithubValid ? '✓' : '!';
  }
  if (demoIcon) {
    demoIcon.className = 'check-icon ' + (isDemoValid ? 'pass' : 'wait');
    demoIcon.innerText = isDemoValid ? '✓' : '!';
  }

  if (isGithubValid && isDemoValid) {
    if (reportBox) reportBox.style.display = 'flex';
    if (lockBtn) lockBtn.removeAttribute('disabled');
    showToast('Preflight Passed', 'URLs verified, repository reachable, and IdeaCheck compliance confirmed.', 'success');
  } else {
    showToast('Invalid URLs', 'Please enter valid GitHub and Live Demo URLs before locking submission.', 'warm');
  }
}

function handleSaveDraft() {
  const user = getUser();
  const github = document.getElementById('subGithubUrl').value.trim();
  const demo = document.getElementById('subDemoUrl').value.trim();
  const drive = document.getElementById('subDriveUrl').value.trim();
  const notes = document.getElementById('subNotes').value.trim();

  user.submissions = user.submissions || {};
  user.submissions['rebuild-26'] = {
    ...user.submissions['rebuild-26'],
    githubUrl: github,
    demoUrl: demo,
    driveUrl: drive,
    notes: notes,
    lastSaved: 'Just now (' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ')'
  };
  setUser(user);
  setText('subLastSavedTime', user.submissions['rebuild-26'].lastSaved);
  showToast('Draft Saved', 'Your work has been saved locally to CampusCode state.', 'success');
}

function openConfirmSubmissionModal() {
  const github = document.getElementById('subGithubUrl').value.trim();
  const demo = document.getElementById('subDemoUrl').value.trim();

  if (!github || !demo) {
    showToast('Missing Fields', 'Both GitHub Repository URL and Live Demo URL are required.', 'warm');
    return;
  }

  document.getElementById('confirmModalGithub').innerText = github;
  document.getElementById('confirmModalDemo').innerText = demo;
  document.getElementById('submissionConfirmModal').classList.add('open');
}

function executeFinalSubmission() {
  const user = getUser();
  handleSaveDraft();
  user.submissions['rebuild-26'].status = 'SUBMITTED';
  setUser(user);

  closeModal('submissionConfirmModal');
  showToast('Submission Locked', 'Your project is queued for organizer evaluation. Good luck!', 'warm');
  switchWorkspaceSubtab('results');
}

// Render RuleBot FAQ
function renderRuleBotFaq() {
  const container = document.getElementById('rulebotFaqContainer');
  if (!container) return;

  container.innerHTML = RULEBOT_FAQ.map(item => `
    <div style="background: var(--cc-surface); border: 1px solid var(--cc-border); border-radius: var(--cc-radius-md); padding: 14px 16px; margin-bottom: 10px;">
      <strong style="font-size: 13.5px; color: var(--cc-ink); display: block; margin-bottom: 6px;">Q: ${item.q}</strong>
      <p style="font-size: 13px; color: var(--cc-ink-secondary); line-height: 1.5;">${item.a}</p>
    </div>
  `).join('');
}

// Countdown Timer for ReBuild '26 Round 1
function updateCountdownTimer() {
  // Target: Today 10:00 PM IST
  const now = new Date();
  const target = new Date();
  target.setHours(22, 0, 0, 0);

  let diff = target - now;
  if (diff <= 0) {
    setText('countdownHours', '00');
    setText('countdownMinutes', '00');
    setText('countdownSeconds', '00');
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  setText('countdownHours', String(hours).padStart(2, '0'));
  setText('countdownMinutes', String(mins).padStart(2, '0'));
  setText('countdownSeconds', String(secs).padStart(2, '0'));
}

// Digital ID Pass QR Code Generator
function renderPassQr(id = 'CC-2026-8841', name = 'Sai Harshith') {
  const box = document.getElementById('passQrContainer');
  if (!box) return;

  // Render a clean deterministic SVG QR code pattern
  box.innerHTML = `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFFFFF"/>
      <!-- Position Marks -->
      <rect x="10" y="10" width="24" height="24" fill="#000000"/>
      <rect x="14" y="14" width="16" height="16" fill="#FFFFFF"/>
      <rect x="18" y="18" width="8" height="8" fill="#000000"/>

      <rect x="66" y="10" width="24" height="24" fill="#000000"/>
      <rect x="70" y="14" width="16" height="16" fill="#FFFFFF"/>
      <rect x="74" y="18" width="8" height="8" fill="#000000"/>

      <rect x="10" y="66" width="24" height="24" fill="#000000"/>
      <rect x="14" y="70" width="16" height="16" fill="#FFFFFF"/>
      <rect x="18" y="74" width="8" height="8" fill="#000000"/>

      <!-- Matrix Patterns -->
      <rect x="42" y="14" width="6" height="6" fill="#000000"/>
      <rect x="52" y="14" width="6" height="6" fill="#000000"/>
      <rect x="42" y="26" width="6" height="6" fill="#000000"/>
      <rect x="14" y="42" width="6" height="6" fill="#000000"/>
      <rect x="26" y="42" width="6" height="6" fill="#000000"/>
      <rect x="42" y="42" width="16" height="16" fill="#000000"/>
      <rect x="66" y="42" width="8" height="6" fill="#000000"/>
      <rect x="80" y="42" width="8" height="6" fill="#000000"/>
      <rect x="66" y="54" width="6" height="8" fill="#000000"/>
      <rect x="78" y="54" width="10" height="8" fill="#000000"/>
      <rect x="42" y="66" width="8" height="8" fill="#000000"/>
      <rect x="56" y="66" width="8" height="8" fill="#000000"/>
      <rect x="42" y="78" width="16" height="8" fill="#000000"/>
      <rect x="66" y="70" width="6" height="16" fill="#000000"/>
      <rect x="78" y="70" width="10" height="6" fill="#000000"/>
      <rect x="78" y="82" width="10" height="6" fill="#000000"/>
    </svg>
  `;
}

// Notification Drawer Handlers
function toggleNotifDrawer() {
  const drawer = document.getElementById('notifDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!drawer || !backdrop) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  } else {
    renderNotifications(activeNotifFilter);
    drawer.classList.add('open');
    backdrop.classList.add('open');
  }
}

function filterNotifications(category, btn) {
  activeNotifFilter = category;
  document.querySelectorAll('.notif-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderNotifications(category);
}

function renderNotifications(category = 'all') {
  const container = document.getElementById('notifListContainer');
  if (!container) return;

  const user = getUser();
  const filtered = user.notifications.filter(n => category === 'all' || n.category === category);

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--cc-ink-muted); font-size: 13px; padding: 30px;">No notifications in this category.</p>`;
    return;
  }

  container.innerHTML = filtered.map(n => `
    <div class="notif-card-item ${n.read ? '' : 'unread'}">
      <div class="notif-top">
        <span>${n.category.toUpperCase()}</span>
        <span>${n.time}</span>
      </div>
      <div class="notif-title">${n.title}</div>
      <div class="notif-body-text">${n.body}</div>
    </div>
  `).join('');
}

function markAllNotificationsRead() {
  const user = getUser();
  user.notifications.forEach(n => { n.read = true; });
  setUser(user);
  renderUserData();
  renderNotifications(activeNotifFilter);
}

// CampusCode Assistant / RuleBot Drawer
function toggleAssistantDrawer() {
  const drawer = document.getElementById('assistantDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!drawer || !backdrop) return;

  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  } else {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  }
}

function askAssistantPrompt(questionText) {
  const input = document.getElementById('assistantChatInput');
  if (input) input.value = questionText;
  handleAssistantSubmit();
}

function handleAssistantSubmit() {
  const input = document.getElementById('assistantChatInput');
  const history = document.getElementById('assistantChatHistory');
  if (!input || !history) return;

  const q = input.value.trim();
  if (!q) return;

  // Append User Bubble
  history.innerHTML += `
    <div style="align-self: flex-end; background: var(--cc-primary); color: #FFF; padding: 10px 14px; border-radius: 12px 12px 2px 12px; font-size: 13px; max-width: 80%;">
      ${q}
    </div>
  `;
  input.value = '';

  // Match answer from RuleBot FAQ
  const match = RULEBOT_FAQ.find(item => item.q.toLowerCase().includes(q.toLowerCase()) || q.toLowerCase().includes(item.q.toLowerCase()));
  const answer = match ? match.a : "ReBuild '26 Round 1 requires faithful recreation of the 4 core pages (Landing, Login, Register, Student Portal). Ensure desktop and mobile responsiveness and valid GitHub/Demo links. Review the Workspace Submission tab for preflight checks.";

  setTimeout(() => {
    history.innerHTML += `
      <div style="align-self: flex-start; background: var(--cc-surface-muted); border: 1px solid var(--cc-border); color: var(--cc-ink); padding: 12px 14px; border-radius: 12px 12px 12px 2px; font-size: 13px; max-width: 85%; line-height: 1.45;">
        <span style="font-family: var(--cc-font-mono); font-size: 9.5px; color: var(--cc-primary); display: block; margin-bottom: 4px; font-weight: 700;">CAMPUSCODE RULEBOT</span>
        ${answer}
      </div>
    `;
    history.scrollTop = history.scrollHeight;
  }, 400);
}

// Command Palette (⌘K)
function setupCommandPalette() {
  const input = document.getElementById('cmdInput');
  const results = document.getElementById('cmdResults');
  if (!input || !results) return;

  const commands = [
    { title: "Home Overview", category: "Navigation", action: () => switchTab('overview') },
    { title: "Explore Events & Hackathons", category: "Navigation", action: () => switchTab('events') },
    { title: "ReBuild '26 Workspace", category: "Workspace", action: () => openEventWorkspace('rebuild-26', 'overview') },
    { title: "Round 1 Project Submission", category: "Workspace", action: () => openEventWorkspace('rebuild-26', 'submit') },
    { title: "HackMate Matchmaking", category: "Collaboration", action: () => openEventWorkspace('rebuild-26', 'team') },
    { title: "Digital Student ID Pass", category: "Credentials", action: () => switchTab('digital-id') },
    { title: "Verified Certificates", category: "Credentials", action: () => switchTab('certificates') },
    { title: "Profile & Avatar Chooser", category: "Account", action: () => switchTab('profile') },
    { title: "RuleBot AI Assistant", category: "Help", action: () => toggleAssistantDrawer() }
  ];

  function renderCommands(query = '') {
    const q = query.toLowerCase();
    const matches = commands.filter(c => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
    results.innerHTML = matches.map((c, idx) => `
      <div class="cmd-result-row ${idx === 0 ? 'selected' : ''}" onclick="executeCmd(${commands.indexOf(c)})">
        <span>${c.title}</span>
        <span style="font-family: var(--cc-font-mono); font-size: 10px; color: var(--cc-ink-muted);">${c.category}</span>
      </div>
    `).join('');
  }

  input.addEventListener('input', (e) => renderCommands(e.target.value));
  renderCommands();

  window.executeCmd = function(idx) {
    closeCommandPalette();
    commands[idx].action();
  };
}

function openCommandPalette() {
  const modal = document.getElementById('cmdModal');
  const input = document.getElementById('cmdInput');
  if (!modal) return;
  modal.classList.add('open');
  if (input) {
    input.value = '';
    input.focus();
  }
}

function closeCommandPalette() {
  const modal = document.getElementById('cmdModal');
  if (modal) modal.classList.remove('open');
}

// Global Keyboard Shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // ⌘K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    // Escape key closes modals and drawers
    if (e.key === 'Escape') {
      closeAllDrawers();
      closeCommandPalette();
      document.querySelectorAll('.app-modal.open').forEach(m => m.classList.remove('open'));
    }
  });
}

function closeAllDrawers() {
  document.querySelectorAll('.slide-drawer.open').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.drawer-backdrop.open').forEach(b => b.classList.remove('open'));
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.remove('open');
}

// Mobile Sidebar
function toggleMobileSidebar() {
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) sidebar.classList.toggle('mobile-open');
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) sidebar.classList.remove('mobile-open');
}

// Certificate Verification Modal
function verifyCertificate(certId) {
  const user = getUser();
  const cert = user.certificates.find(c => c.id === certId) || user.certificates[0];
  const modal = document.getElementById('certModal');
  const body = document.getElementById('certModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="border: 2px solid var(--cc-warm-border); background: var(--cc-surface); border-radius: var(--cc-radius-lg); padding: 32px; text-align: center; position: relative;">
      <div style="font-family: var(--cc-font-mono); font-size: 10px; color: var(--cc-primary); letter-spacing: 1.5px; margin-bottom: 8px;">CAMPUSCODE ARENA HONORS</div>
      <h2 style="font-family: var(--cc-font-display); font-size: 34px; font-weight: 400; color: var(--cc-ink); margin-bottom: 4px;">Certificate of Recognition</h2>
      <p style="font-size: 13px; color: var(--cc-ink-muted);">This credential certifies that</p>
      <h3 style="font-size: 24px; font-weight: 800; color: var(--cc-ink); margin: 12px 0;">${user.name}</h3>
      <p style="font-size: 14px; color: var(--cc-ink-secondary); max-width: 480px; margin: 0 auto 16px;">
        has earned the honor of <strong>${cert.honor}</strong> in <strong>${cert.event}</strong>.
      </p>
      <div style="display: flex; justify-content: space-around; border-top: 1px solid var(--cc-border); padding-top: 16px; margin-top: 24px; font-family: var(--cc-font-mono); font-size: 10px; color: var(--cc-ink-muted); text-align: left;">
        <div><span>CREDENTIAL ID</span><strong style="display:block; color:var(--cc-ink);">${cert.id}</strong></div>
        <div><span>DATE OF ISSUE</span><strong style="display:block; color:var(--cc-ink);">${cert.issueDate}</strong></div>
        <div><span>CRYPTO HASH</span><strong style="display:block; color:var(--cc-ink);">${cert.hash}</strong></div>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
      <button type="button" class="sidebar-sub-btn" onclick="closeModal('certModal')">Close</button>
      <button type="button" class="btn-feature-primary" onclick="alert('Downloading high-resolution verified PDF credential...')">Download PDF ↗</button>
    </div>
  `;

  modal.classList.add('open');
}

function promptJoinEvent(eventName) {
  const code = prompt(`Enter invitation access code for ${eventName}:`);
  if (code) {
    alert(`Access granted for ${eventName}! Added to your active registrations.`);
    switchTab('my-events');
  }
}


/* ==========================================================================
   GLASS DISSOLVE ARISE CARD & FINEXY DASHBOARD INTERACTIONS
   ========================================================================== */

let isGlassCardArisen = false;

// Initialize Glass Dissolve Card 3D Perspective & Sheen
function initGlassDissolveCard() {
  const stage = document.getElementById('glassCardStage');
  const tiltWrap = document.getElementById('glassCardTiltWrap');
  const card = document.getElementById('glassDissolveCard');
  const sheen = document.getElementById('glassSheen');

  if (!stage || !tiltWrap || !card) return;

  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    if (isGlassCardArisen) return; // Keep upright when verified/arisen

    const rect = tiltWrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mx = Math.max(0, Math.min(1, x / rect.width));
    const my = Math.max(0, Math.min(1, y / rect.height));

    // Perspective tilt range: rotX 10 to -10, rotY -14 to 14
    const rotX = (my - 0.5) * -18;
    const rotY = (mx - 0.5) * 24;

    tiltWrap.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;

    if (sheen) {
      sheen.style.background = `radial-gradient(circle at ${(mx * 100).toFixed(1)}% ${(my * 100).toFixed(1)}%, rgba(255,255,255,0.22), transparent 55%)`;
    }
  });

  stage.addEventListener('pointerleave', () => {
    if (isGlassCardArisen) return;
    tiltWrap.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    if (sheen) {
      sheen.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16), transparent 55%)';
    }
  });
}

// Toggle Glass Card Arise State (Tap to Arise & Show Clean Verified ID)
function toggleGlassCardArise() {
  isGlassCardArisen = !isGlassCardArisen;

  const stage = document.getElementById('glassCardStage');
  const tiltWrap = document.getElementById('glassCardTiltWrap');
  const card = document.getElementById('glassDissolveCard');
  const hintText = document.getElementById('glassCardHintText');
  const hintIcon = document.getElementById('glassCardHintIcon');

  if (!card) return;

  if (isGlassCardArisen) {
    card.classList.add('arisen');
    if (stage) stage.classList.add('is-arisen');
    if (tiltWrap) tiltWrap.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

    if (hintText) hintText.textContent = '✓ Cryptographically Verified Credential Active · Tap card to dock';
    if (hintIcon) hintIcon.textContent = '🔒';

    card.setAttribute('aria-pressed', 'true');
    showToast('Student Digital ID Arisen', 'Cryptographic credentials verified on CampusCode ledger.');
  } else {
    card.classList.remove('arisen');
    if (stage) stage.classList.remove('is-arisen');
    if (tiltWrap) tiltWrap.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';

    if (hintText) hintText.textContent = 'Tap card to arise & verify · Hover to tilt';
    if (hintIcon) hintIcon.textContent = '✨';

    card.setAttribute('aria-pressed', 'false');
  }
}

// Switch Dashboard Floating Pill Navigation (Overview, Activity, Deadlines)
function switchDashboardSub(subId) {
  document.querySelectorAll('.pill-tab-item').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.contextTab === subId);
  });

  if (subId === 'overview') {
    const el = document.getElementById('dashboard-top');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (subId === 'activity') {
    const el = document.getElementById('sec-activity');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (subId === 'deadlines') {
    const el = document.getElementById('sec-deadlines');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Filter Recent Activity Table Rows
function filterActivityTable(type, btn) {
  document.querySelectorAll('.filter-tab-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const rows = document.querySelectorAll('#recentActivityTable tbody tr');
  rows.forEach(row => {
    if (type === 'all' || row.dataset.type === type || row.dataset.type === 'all') {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initGlassDissolveCard();
  const uParams = new URLSearchParams(window.location.search);
  if (uParams.get('arise') === '1') {
    setTimeout(() => toggleGlassCardArise(), 100);
  }
});


// Interactive Activity Chart Tooltip (21st.dev style)
function showChartTooltip(el) {
  const tooltip = document.getElementById('chartFloatingTooltip');
  if (!tooltip) return;
  const day = el.dataset.day || 'Day';
  const commits = el.dataset.commits || '0';
  const checks = el.dataset.checks || '0';
  const score = el.dataset.score || '-';

  const dayEl = document.getElementById('tooltipDay');
  const commitsEl = document.getElementById('tooltipCommits');
  const checksEl = document.getElementById('tooltipChecks');
  const scoreEl = document.getElementById('tooltipScore');

  if (dayEl) dayEl.textContent = day;
  if (commitsEl) commitsEl.textContent = commits;
  if (checksEl) checksEl.textContent = checks;
  if (scoreEl) scoreEl.textContent = score;

  tooltip.classList.add('visible');
}

function hideChartTooltip() {
  const tooltip = document.getElementById('chartFloatingTooltip');
  if (tooltip) tooltip.classList.remove('visible');
}
