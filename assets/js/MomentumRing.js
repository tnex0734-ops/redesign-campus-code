/**
 * MomentumRing — React Bits 3D Cylindrical Vertical Reel & Momentum Carousel
 * Standalone vanilla implementation with 3D cylindrical geometry (preserve-3d),
 * drag/touch momentum physics with inertia decay, velocity-based motion blur,
 * magnetic snap-to-center, and role detail synchronization.
 */

(function() {
  const DEFAULT_ROLES = [
    {
      id: 'frontend',
      roleNumber: 'ROLE 01',
      tag: 'CLIENT & MOTION',
      title: 'Frontend Engineers',
      desc: 'Craft responsive viewports, GSAP motion systems, and accessible client DOM with zero runtime bloat.',
      skills: ['React', 'Next.js', 'Tailwind', 'GSAP'],
      accent: '#273FC5',
      badgeColor: '#EDF1FF',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><rect x="5" y="8" width="30" height="24" rx="4" fill="#EDF1FF" stroke="#273FC5" stroke-width="1.8"/><circle cx="10" cy="14" r="1.5" fill="#EF4444"/><circle cx="15" cy="14" r="1.5" fill="#F59E0B"/><circle cx="20" cy="14" r="1.5" fill="#10B981"/><path d="M12 24l4-4-4-4m8 8l-4-4 4-4" stroke="#273FC5" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: 'backend',
      roleNumber: 'ROLE 02',
      tag: 'APIs & CLOUD',
      title: 'Systems & Backend',
      desc: 'Architect resilient distributed APIs, relational storage schemas, and containerized cloud services.',
      skills: ['Go', 'Node.js', 'PostgreSQL', 'Docker'],
      accent: '#5265DA',
      badgeColor: '#F0EEFA',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><ellipse cx="20" cy="12" rx="14" ry="5" fill="#F0EEFA" stroke="#5265DA" stroke-width="1.8"/><path d="M6 12v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#5265DA" stroke-width="1.8"/><path d="M6 20v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#5265DA" stroke-width="1.8"/></svg>`
    },
    {
      id: 'ai',
      roleNumber: 'ROLE 03',
      tag: 'MODELS & RETRIEVAL',
      title: 'AI & Autonomous Agents',
      desc: 'Train and serve inference pipelines, vector retrieval architectures, and multi-agent coordination loops.',
      skills: ['Python', 'PyTorch', 'LangChain', 'FastAPI'],
      accent: '#F47742',
      badgeColor: '#FFF0E8',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><circle cx="12" cy="14" r="4" fill="#FFF0E8" stroke="#F47742" stroke-width="1.8"/><circle cx="12" cy="26" r="4" fill="#FFF0E8" stroke="#F47742" stroke-width="1.8"/><circle cx="28" cy="20" r="5" fill="#F47742"/><path d="M16 14l8 5m-8 7l8-5" stroke="#F47742" stroke-width="1.8"/></svg>`
    },
    {
      id: 'design',
      roleNumber: 'ROLE 04',
      tag: 'DESIGN SYSTEMS',
      title: 'UI / UX Designers',
      desc: 'Create high-contrast design systems, harmonious typography hierarchy, and user-tested tactile prototypes.',
      skills: ['Figma', 'Design Tokens', 'Prototyping', 'UX Specs'],
      accent: '#6855AD',
      badgeColor: '#F0EEFA',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><rect x="8" y="8" width="24" height="24" rx="4" stroke="#6855AD" stroke-width="1.8" stroke-dasharray="3 3"/><circle cx="14" cy="14" r="3" fill="#6855AD"/><circle cx="26" cy="26" r="3" fill="#F47742"/><path d="M14 14c0 10 12 2 12 12" stroke="#6855AD" stroke-width="2"/></svg>`
    },
    {
      id: 'security',
      roleNumber: 'ROLE 05',
      tag: 'AUDIT & VERIFICATION',
      title: 'Cryptographic Security',
      desc: 'Implement tamper-proof submission signing, SHA-256 preflight AST scanners, and deterministic validation.',
      skills: ['Cryptography', 'AST Scanners', 'Docker OCI', 'Zero-Knowledge'],
      accent: '#273FC5',
      badgeColor: '#EDF1FF',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><path d="M20 6l13 5v8c0 9-6 15-13 17-7-2-13-8-13-17v-8l13-5z" fill="#EDF1FF" stroke="#273FC5" stroke-width="1.8"/><path d="M16 20l3 3 6-6" stroke="#273FC5" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
      id: 'fullstack',
      roleNumber: 'ROLE 06',
      tag: 'FAST SHIPPERS',
      title: 'Full-Stack Creators',
      desc: 'Bridge client interaction, database integrity, and production cloud deploys to ship winning MVPs fast.',
      skills: ['TypeScript', 'Full-Stack', 'Supabase', 'Vercel Edge'],
      accent: '#F47742',
      badgeColor: '#FFF0E8',
      icon: `<svg viewBox="0 0 40 40" width="36" height="36" fill="none"><path d="M8 12l12-6 12 6-12 6-12-6z" fill="#FFF0E8" stroke="#F47742" stroke-width="1.8"/><path d="M8 20l12 6 12-6" stroke="#F47742" stroke-width="1.8"/><path d="M8 28l12 6 12-6" stroke="#F47742" stroke-width="1.8"/></svg>`
    }
  ];

  window.initMomentumRing = function(container, options = {}) {
    if (!container) return null;

    const roles = options.roles || DEFAULT_ROLES;
    const onSelect = options.onSelect || null;
    const count = roles.length;
    const cardHeight = 220; // px
    const cardGap = 20;
    const totalSlotHeight = cardHeight + cardGap;
    // Calculate radius to form smooth cylindrical polygon
    const radius = Math.round((totalSlotHeight * count) / (2 * Math.PI));
    const stepAngle = 360 / count;

    container.innerHTML = '';
    container.classList.add('momentum-ring-viewport');

    // Reel cylinder container with 3D preserve
    const stage = document.createElement('div');
    stage.className = 'momentum-ring-stage';

    const cylinder = document.createElement('div');
    cylinder.className = 'momentum-ring-cylinder';
    stage.appendChild(cylinder);

    // Indicator / Navigation hints
    const controls = document.createElement('div');
    controls.className = 'momentum-ring-controls';
    controls.innerHTML = `
      <button type="button" class="ring-nav-btn ring-prev" aria-label="Previous builder role">↑</button>
      <div class="ring-indicator font-mono">
        <span class="active-index">01</span> / <span class="total-count">${String(count).padStart(2, '0')}</span>
      </div>
      <button type="button" class="ring-nav-btn ring-next" aria-label="Next builder role">↓</button>
    `;

    // Create cards
    const cardElements = [];
    roles.forEach((r, idx) => {
      const angle = idx * stepAngle;
      const card = document.createElement('div');
      card.className = `momentum-card ${idx === 0 ? 'card-active' : ''}`;
      card.dataset.index = idx;
      card.dataset.roleId = r.id;

      // Transform in 3D cylinder space
      card.style.transform = `rotateX(${angle}deg) translateZ(${radius}px)`;

      card.innerHTML = `
        <div class="momentum-card-inner" style="border-top: 3px solid ${r.accent};">
          <div class="momentum-card-header">
            <div class="momentum-card-icon" style="background:${r.badgeColor};">
              ${r.icon}
            </div>
            <div class="momentum-card-meta">
              <span class="momentum-role-num font-mono" style="color:${r.accent};">${r.roleNumber}</span>
              <span class="momentum-role-tag font-mono">${r.tag}</span>
            </div>
          </div>
          <h3 class="momentum-card-title">${r.title}</h3>
          <p class="momentum-card-desc">${r.desc}</p>
          <div class="momentum-card-skills">
            ${r.skills.map(s => `<span class="momentum-skill-pill">${s}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        snapToIndex(idx);
      });

      cylinder.appendChild(card);
      cardElements.push(card);
    });

    container.appendChild(stage);
    container.appendChild(controls);

    // Physics State
    let currentAngle = 0;
    let targetAngle = 0;
    let velocity = 0;
    let isDragging = false;
    let startY = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let autoRotate = true;
    let rafId = null;
    let isVisible = true;
    let activeIndex = 0;

    const snapToIndex = (idx) => {
      // Find nearest rotation matching idx
      const targetDeg = -idx * stepAngle;
      const fullRotations = Math.round((currentAngle - targetDeg) / 360) * 360;
      targetAngle = targetDeg + fullRotations;
      velocity = 0;
      autoRotate = false;
      updateActiveCard(idx);
    };

    const updateActiveCard = (idx) => {
      const normalized = ((idx % count) + count) % count;
      if (normalized !== activeIndex) {
        activeIndex = normalized;
        cardElements.forEach((c, i) => {
          c.classList.toggle('card-active', i === activeIndex);
        });
        const indexSpan = controls.querySelector('.active-index');
        if (indexSpan) {
          indexSpan.textContent = String(activeIndex + 1).padStart(2, '0');
        }
        if (onSelect) {
          onSelect(roles[activeIndex]);
        }
      }
    };

    // Navigation buttons
    controls.querySelector('.ring-prev')?.addEventListener('click', () => {
      snapToIndex(activeIndex - 1);
    });
    controls.querySelector('.ring-next')?.addEventListener('click', () => {
      snapToIndex(activeIndex + 1);
    });

    // Pointer events for dragging
    const onPointerDown = (e) => {
      isDragging = true;
      autoRotate = false;
      startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      lastY = startY;
      lastTime = performance.now();
      velocity = 0;
      container.classList.add('is-dragging');
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaY = clientY - lastY;
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);

      lastY = clientY;
      lastTime = now;

      // Convert deltaY to angle
      const angleDelta = (deltaY / radius) * (180 / Math.PI) * 1.5;
      currentAngle += angleDelta;
      targetAngle = currentAngle;
      velocity = (angleDelta / dt) * 16.6; // normalized velocity
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      container.classList.remove('is-dragging');

      // Snapping after drag
      const nearestIdx = Math.round(-currentAngle / stepAngle);
      targetAngle = -nearestIdx * stepAngle;
      updateActiveCard(nearestIdx);
    };

    container.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });

    // Wheel support
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      autoRotate = false;
      const delta = Math.sign(e.deltaY);
      snapToIndex(activeIndex + delta);
    }, { passive: false });

    // Visibility Observer
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !rafId) {
        lastTime = performance.now();
        tick(lastTime);
      }
    });
    intersectionObserver.observe(container);

    // Animation Tick
    function tick(now) {
      if (!isVisible) {
        rafId = null;
        return;
      }

      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      if (!isDragging) {
        if (autoRotate) {
          // Slow subtle drift when idle
          targetAngle -= 14 * dt;
          currentAngle += (targetAngle - currentAngle) * Math.min(1, dt * 4);
          const currentIdx = Math.round(-currentAngle / stepAngle);
          updateActiveCard(currentIdx);
        } else {
          // Spring toward target angle
          const diff = targetAngle - currentAngle;
          velocity += diff * 12 * dt;
          velocity *= Math.pow(0.85, dt * 60); // damping
          currentAngle += velocity * dt * 60;

          if (Math.abs(diff) < 0.1 && Math.abs(velocity) < 0.1) {
            currentAngle = targetAngle;
            velocity = 0;
          }
        }
      }

      // Motion blur proportional to speed
      const speed = Math.abs(velocity);
      const blurAmount = Math.min(6, speed * 0.35);
      cylinder.style.filter = blurAmount > 0.4 ? `blur(${blurAmount.toFixed(1)}px)` : 'none';

      // Apply 3D rotation
      cylinder.style.transform = `rotateX(${currentAngle.toFixed(2)}deg)`;

      // Dynamic opacity / shading for cards based on facing angle
      cardElements.forEach((card, idx) => {
        const nominalAngle = idx * stepAngle;
        const relativeAngle = ((nominalAngle + currentAngle) % 360 + 540) % 360 - 180;
        const facing = Math.cos((relativeAngle * Math.PI) / 180);
        if (facing < 0.1) {
          card.style.opacity = Math.max(0.12, (facing + 0.3) * 0.4).toFixed(2);
          card.style.pointerEvents = 'none';
        } else {
          card.style.opacity = Math.min(1, 0.4 + facing * 0.6).toFixed(2);
          card.style.pointerEvents = facing > 0.75 ? 'auto' : 'none';
        }
      });

      rafId = requestAnimationFrame(tick);
    }

    tick(performance.now());

    return {
      snapTo(idx) {
        snapToIndex(idx);
      },
      destroy() {
        if (rafId) cancelAnimationFrame(rafId);
        container.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
        intersectionObserver.disconnect();
        container.innerHTML = '';
      }
    };
  };
})();

