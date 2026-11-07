/**
 * CAMPUSCODE WHITE SPECTRUM LANDING PAGE — MOTION & INTERACTION ENGINE
 * Technology: GSAP 3.12 + ScrollTrigger, Lenis Smooth Scroll, SVG Mandala Kinematics
 * Strict Rules: Pure white canvas, Sarvam continuous spectrum, top-pivot pendulum physics,
 * accessible touch/keyboard controls, progressive enhancement.
 */

(function () {
  'use strict';

  // 1. Accessibility: Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 2. Register GSAP Plugins safely
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 3. Lenis Smooth Scroll Setup (Progressive Enhancement)
  let lenis = null;
  if (!prefersReducedMotion && typeof Lenis !== 'undefined') {
    try {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 1.4,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.warn('Lenis smooth scroll fallback to native:', e);
    }
  }

  // Helper for smooth anchor scrolling
  function scrollToTarget(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70, duration: 0.9 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  }

  // 4. Header Scroll Elevation
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 5. Suspended Tactile Artefacts Motion (Reference 01 Physicality)
  const artefacts = [
    { id: 'artefactChallengeUnit', baseAngle: 1.4, duration: 5.2, delay: 0.1, target: 'hackathons' },
    { id: 'artefactTeamUnit', baseAngle: -1.6, duration: 6.0, delay: 0.3, target: 'collaboration' },
    { id: 'artefactProjectUnit', baseAngle: 1.3, duration: 5.6, delay: 0.2, target: 'preview' },
    { id: 'artefactCalendarUnit', baseAngle: -1.4, duration: 6.4, delay: 0.4, target: 'workflow' },
    { id: 'artefactCommunityUnit', baseAngle: 1.5, duration: 5.8, delay: 0.5, target: 'community' }
  ];

  function initSuspendedPhysics() {
    artefacts.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      // Ensure top-pivot rotation
      gsap.set(el, { transformOrigin: '50% 0px' });

      if (!prefersReducedMotion) {
        // Continuous subtle pendulum swing
        gsap.to(el, {
          rotation: item.baseAngle,
          duration: item.duration,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: item.delay
        });
      }

      // Pointer hover reaction
      el.addEventListener('mouseenter', () => {
        if (!prefersReducedMotion) {
          gsap.to(el, {
            rotation: item.baseAngle * 1.8,
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });

      el.addEventListener('mouseleave', () => {
        if (!prefersReducedMotion) {
          gsap.to(el, {
            rotation: item.baseAngle,
            duration: 1.2,
            ease: 'elastic.out(1, 0.4)',
            onComplete: () => {
              gsap.to(el, {
                rotation: -item.baseAngle,
                duration: item.duration,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
              });
            }
          });
        }
      });

      // Click / Tap Action: Tactile tug + navigation
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if (!prefersReducedMotion) {
          gsap.fromTo(el, 
            { scale: 0.97, rotation: item.baseAngle * 2.5 },
            { scale: 1, rotation: item.baseAngle, duration: 0.6, ease: 'elastic.out(1.2, 0.3)' }
          );
        }
        setTimeout(() => {
          scrollToTarget(item.target);
        }, 180);
      });

      // Keyboard accessible triggering
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          el.click();
        }
      });
    });
  }

  // 6. Mandala Background Geometric Scroll Reaction
  function initMandalaScrollReaction() {
    if (prefersReducedMotion) return;

    const mandala = document.querySelector('.hero-mandala-backdrop svg');
    if (mandala && typeof gsap !== 'undefined') {
      gsap.to(mandala, {
        rotation: 45,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    }
  }

  // 7. Interactive RevenueX Style Product Preview Switcher
  window.switchProductPreview = function (tabKey, btn) {
    document.querySelectorAll('.preview-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.preview-panel-view').forEach(p => p.classList.remove('active'));

    if (btn) btn.classList.add('active');
    const panel = document.getElementById('preview-panel-' + tabKey);
    if (panel) panel.classList.add('active');
  };

  // 8. Four-Stage Interactive Workflow Stepper
  const WORKFLOW_DETAILS = {
    'discover': {
      title: '01 · Discover Challenge Speeds & Themes',
      desc: 'Browse verified collegiate hackathons categorized by Artificial Intelligence, Distributed Systems, Modern Web, and Smart Campus IoT. Filter by solo or multi-builder formats.',
      metric: '4 Active Competitions Open',
      linkText: 'Explore Hackathons ↗',
      action: () => scrollToTarget('hackathons')
    },
    'teamup': {
      title: '02 · HackMate Cross-Disciplinary Matchmaking',
      desc: 'Connect with complementary builders across Indian engineering colleges. HackMate analyzes your tech stack (React, Node, Python, Figma) and pairs you with high-affinity teammates.',
      metric: 'Over 850+ Verified University Builders',
      linkText: 'Explore HackMate Network ↗',
      action: () => scrollToTarget('collaboration')
    },
    'build': {
      title: '03 · Client-First Rapid Construction',
      desc: 'Turn ideas into responsive, accessible web software. Build with pure semantic HTML/CSS/JS or modern component frameworks with zero artificial build hurdles.',
      metric: '48-Hour High-Intensity Arena',
      linkText: 'View Workspace Architecture ↗',
      action: () => window.location.href = 'student.html'
    },
    'ship': {
      title: '04 · IdeaCheck Preflight & Cryptographic Credentialing',
      desc: 'Run automated URL health and responsiveness checks. Lock your submission timestamp, undergo peer and faculty judging, and receive verified on-chain badges.',
      metric: '100% Deterministic Evaluation',
      linkText: 'View Digital Credentials ↗',
      action: () => window.location.href = 'student.html#certificates'
    }
  };

  window.selectWorkflowStep = function (stepKey, card) {
    document.querySelectorAll('.workflow-step-card').forEach(c => c.classList.remove('active'));
    if (card) card.classList.add('active');

    const data = WORKFLOW_DETAILS[stepKey];
    if (!data) return;

    const titleEl = document.getElementById('wfDetailTitle');
    const descEl = document.getElementById('wfDetailDesc');
    const metricEl = document.getElementById('wfDetailMetric');
    const actionBtn = document.getElementById('wfDetailAction');

    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerText = data.desc;
    if (metricEl) metricEl.innerText = data.metric;
    if (actionBtn) {
      actionBtn.innerText = data.linkText;
      actionBtn.onclick = data.action;
    }
  };

  // 9. Quick Demo Evaluator Direct Login
  window.quickDemoLogin = function () {
    const demoUser = {
      name: 'Sai Harshith',
      email: 'sai@campuscode.co.in',
      role: 'STUDENT',
      campusId: 'CC-2026-8841',
      college: 'College of Engineering, Guindy',
      department: 'Computer Science & Engineering',
      batch: 'Class of 2026',
      bio: 'Full-stack builder passionate about hackathons, distributed systems, and shipping products.',
      skills: 'React, Next.js, TypeScript, Node.js, Python, Tailwind CSS, PostgreSQL, Git',
      avatarType: 'mascot',
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
          notes: 'Faithful recreation of all core views in pure semantic HTML/CSS/JS with zero build steps, and deterministic preflight checks.',
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
    try {
      localStorage.setItem('campuscode_user', JSON.stringify(demoUser));
      localStorage.setItem('campuscode_session', 'active_demo_session_2026');
    } catch (e) {
      console.warn('Storage quota error:', e);
    }
    window.location.href = 'student.html';
  };

  // 10. SECTION 03: Translucent Tab Folders (User Specification Pattern)
  window.toggleFolderPin = function (wrapper) {
    if (!wrapper) return;
    const isPinned = wrapper.classList.toggle('pinned');
    wrapper.setAttribute('data-pinned', isPinned ? 'true' : 'false');
    const actionBtn = wrapper.querySelector('.folder-action-circle span');
    if (actionBtn) {
      actionBtn.innerText = isPinned ? '✕' : '+';
    }
  };

  window.filterFolders = function (category, btn) {
    document.querySelectorAll('.hackathons-filter-row .landing-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const query = (document.getElementById('landingFolderSearch')?.value || '').toLowerCase();
    applyFolderFilters(category, query);
  };

  window.handleFolderSearch = function (e) {
    const query = (e.target.value || '').toLowerCase();
    const activeCategory = document.querySelector('.hackathons-filter-row .landing-filter-btn.active')?.dataset.category || 'all';
    applyFolderFilters(activeCategory, query);
  };

  function applyFolderFilters(category, query) {
    const folders = document.querySelectorAll('.image-folder-wrapper');
    folders.forEach(folder => {
      const folderCat = folder.dataset.category || '';
      const text = folder.innerText.toLowerCase();
      const matchesCat = (category === 'all') || (folderCat === category);
      const matchesQuery = !query || text.includes(query);
      folder.style.display = (matchesCat && matchesQuery) ? 'block' : 'none';
    });
  }

  // 12. Interactive Collaboration Role Explorer
  const ROLES_INFO = {
    'frontend': {
      title: 'Frontend Engineers & Motion Designers',
      skills: ['React', 'Next.js', 'GSAP', 'Tailwind CSS', 'Accessible DOM'],
      complement: 'Best paired with Backend & AI Model Developers'
    },
    'backend': {
      title: 'Systems & Cloud Infrastructure Architects',
      skills: ['Node.js', 'Go', 'PostgreSQL', 'Docker', 'REST / GraphQL'],
      complement: 'Best paired with Frontend Engineers & Product Designers'
    },
    'ai': {
      title: 'AI / ML & Pipeline Developers',
      skills: ['Python', 'PyTorch', 'FastAPI', 'LangChain', 'Hugging Face'],
      complement: 'Best paired with Frontend UI Builders for client delivery'
    },
    'design': {
      title: 'UI / UX Product Designers',
      skills: ['Figma', 'Design Systems', 'Micro-interactions', 'Information Arch'],
      complement: 'Best paired with Full-Stack Frontend Engineers'
    }
  };

  window.selectRoleExplorer = function (roleKey, card) {
    document.querySelectorAll('.role-pill-card').forEach(c => c.classList.remove('selected'));
    if (card) card.classList.add('selected');

    const info = ROLES_INFO[roleKey];
    if (!info) return;

    const displayBox = document.getElementById('roleDetailDisplayBox');
    if (displayBox) {
      displayBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div>
            <h4 style="font-size:16px; font-weight:800; color:var(--ink);">${info.title}</h4>
            <p style="font-size:13px; color:var(--ink-secondary); margin-top:4px;">${info.complement}</p>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            ${info.skills.map(s => `<span class="role-skill-chip" style="background:#FFF; border-color:var(--spec-blue); color:var(--spec-blue); font-weight:700;">${s}</span>`).join('')}
          </div>
        </div>
      `;
    }
  };

  // 11. Dynamic Session Detection (Bi-directional Link)
  function initDynamicAuthCheck() {
    try {
      const raw = localStorage.getItem('campuscode_user');
      if (raw) {
        const u = JSON.parse(raw);
        if (u && u.name) {
          document.querySelectorAll('.btn-header-login').forEach(btn => {
            btn.innerText = 'Dashboard ↗';
            btn.href = 'student.html';
            btn.title = `Signed in as ${u.name}`;
            btn.style.fontWeight = '700';
            btn.style.color = 'var(--spec-blue)';
          });
        }
      }
    } catch (e) {}
  }

  // 12. Mobile Navigation Drawer Controls
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileClose = document.getElementById('mobileDrawerClose');

  window.openMobileDrawer = function () {
    if (mobileDrawer) mobileDrawer.classList.add('open');
  };

  window.closeMobileDrawer = function () {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  };

  if (mobileToggle) mobileToggle.addEventListener('click', window.openMobileDrawer);
  if (mobileClose) mobileClose.addEventListener('click', window.closeMobileDrawer);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) window.closeMobileDrawer();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeMobileDrawer();
  });

  // 13. Dynamic Landing Countdown
  function updateLandingCountdown() {
    const timerEl = document.getElementById('landingPreviewTimer');
    if (!timerEl) return;
    const now = new Date();
    const target = new Date();
    target.setHours(22, 0, 0, 0);
    let diff = target - now;
    if (diff <= 0) {
      timerEl.innerText = 'DEADLINE: ROUND 1 CLOSED (EVALUATION)';
      return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    timerEl.innerText = `DEADLINE: CLOSES IN ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
  }

  // 14. Cosmic Rotating & Pulsating Stars (Parallax + Gravity Repulsion)
  function initCosmicStarsMotion() {
    const stars = document.querySelectorAll('.cosmic-star');
    if (!stars.length) return;

    // A. Parallax scroll motion via GSAP ScrollTrigger
    if (!prefersReducedMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      stars.forEach((star) => {
        const speed = parseFloat(star.getAttribute('data-speed')) || 0.3;
        gsap.to(star, {
          y: () => speed * 300,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          }
        });
      });
    }

    // B. Mouse Proximity Gravity Repulsion & Spring
    if (!prefersReducedMotion) {
      const radius = 120;
      let mouseX = -9999;
      let mouseY = -9999;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;

        stars.forEach((star) => {
          const rect = star.getBoundingClientRect();
          const starCenterX = rect.left + window.scrollX + rect.width / 2;
          const starCenterY = rect.top + window.scrollY + rect.height / 2;

          const dx = mouseX - starCenterX;
          const dy = mouseY - starCenterY;
          const dist = Math.hypot(dx, dy);

          if (dist < radius) {
            const force = (1 - dist / radius) * 24;
            const angle = Math.atan2(dy, dx);
            const repelX = -Math.cos(angle) * force;
            const repelY = -Math.sin(angle) * force;

            if (typeof gsap !== 'undefined') {
              gsap.to(star, {
                x: repelX,
                y: repelY,
                duration: 0.3,
                overwrite: 'auto',
                ease: 'power2.out'
              });
            }
          } else {
            if (typeof gsap !== 'undefined') {
              gsap.to(star, {
                x: 0,
                y: 0,
                duration: 0.8,
                overwrite: 'auto',
                ease: 'elastic.out(1, 0.4)'
              });
            }
          }
        });
      }, { passive: true });
    }
  }

  // 15. Speedometer Gauge Dial Animation
  function initGaugeAnimation() {
    const needle = document.getElementById('gaugeCenterNeedle');
    if (!needle) return;

    if (!prefersReducedMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#workflow',
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(needle, 
            { rotation: 0 }, 
            { rotation: 48, duration: 1.4, ease: 'back.out(1.7)' }
          );
        }
      });
    }
  }

  // 16. Interactive 3D Card Hover Tilt and Smooth Motion
  function init3DCardTiltMotion() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.tactile-feature-card, .dashboard-preview-frame');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        if (typeof gsap !== 'undefined') {
          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            ease: 'power2.out',
            duration: 0.3
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        if (typeof gsap !== 'undefined') {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            ease: 'elastic.out(1, 0.4)',
            duration: 0.7
          });
        }
      });
    });

    // Staggered reveal of headings and cards on scroll
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.section-head-center').forEach((header) => {
        gsap.from(header, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      ScrollTrigger.batch('.tactile-feature-card', {
        onEnter: (batch) => gsap.from(batch, {
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power2.out'
        }),
        start: 'top 85%',
        once: true
      });
    }
  }

  // 17. React Bits Suite Integration
  function initReactBitsComponents() {
    // 1. RibbonType Marquee (Transition Strip - Fully Visible & Clean Edge-to-Edge)
    const ribbonContainer = document.getElementById('ribbonTypeContainer');
    if (ribbonContainer && typeof window.initRibbonType === 'function') {
      try {
        window.initRibbonType(ribbonContainer, {
          words: ['IDEAS', 'PEOPLE', 'PROJECTS', 'POSSIBILITY', 'DISCOVER', 'TEAM UP', 'BUILD', 'SHIP'],
          speed: 1.2,
          curvature: 0,
          skew: 0
        });
      } catch (e) {
        console.warn('RibbonType initialization fallback:', e);
      }
    }

    // 2. PatternWaves WebGL2 Background (Section 02 Preview)
    const patternWavesBg = document.getElementById('patternWavesBg');
    if (patternWavesBg && typeof window.initPatternWaves === 'function' && typeof window.OGL !== 'undefined') {
      try {
        window.initPatternWaves(patternWavesBg, {
          preset: 'silk',
          color: '#F47742',
          backgroundColor: 'transparent',
          fade: 'edges',
          interactive: true,
          cursorSize: 65,
          cursorStrength: 0.65
        });
      } catch (e) {
        console.warn('PatternWaves initialization fallback:', e);
      }
    }

    // 3. GradientASCII WebGL2 Matrix (Section 03 Workflow)
    const gradientAsciiBg = document.getElementById('gradientAsciiBg');
    if (gradientAsciiBg && typeof window.initGradientASCII === 'function') {
      try {
        window.initGradientASCII(gradientAsciiBg, {
          characters: ' =+xX0S8#@',
          colors: ['#273FC5', '#5265DA', '#6855AD', '#F47742'],
          shape: 'horizon',
          speed: 0.85,
          scale: 1.15,
          softness: 0.5,
          clickEffect: 'wave'
        });
      } catch (e) {
        console.warn('GradientASCII initialization fallback:', e);
      }
    }
  }

  // 18. Lifecycle Kickoff
  function init() {
    initSuspendedPhysics();
    initMandalaScrollReaction();
    initDynamicAuthCheck();
    initCosmicStarsMotion();
    initGaugeAnimation();
    init3DCardTiltMotion();
    initReactBitsComponents();
    updateLandingCountdown();
    setInterval(updateLandingCountdown, 1000);

    // Wire In-Page Smooth Scroll Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        if (targetId) {
          e.preventDefault();
          scrollToTarget(targetId);
        }
      });
    });

    // Support URL ?section= query param or hash for instant screenshot or deep-linking
    const urlParams = new URLSearchParams(window.location.search);
    const targetSection = urlParams.get('section') || (window.location.hash ? window.location.hash.slice(1) : null);
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          window.scrollTo(0, el.offsetTop - 40);
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }
      }, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
