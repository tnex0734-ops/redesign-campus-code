/**
 * RibbonType — React Bits Dynamic 3D Curved Flowing Ribbon Marquee
 * Standalone vanilla implementation with 3D perspective curvature,
 * multi-track kinetic typography, spectrum gradient sheen, and cursor-reactive wave physics.
 */

(function() {
  window.initRibbonType = function(container, options = {}) {
    if (!container) return null;

    const words = options.words || [
      'IDEAS', 'PEOPLE', 'PROJECTS', 'POSSIBILITY',
      'DISCOVER', 'TEAM UP', 'BUILD', 'SHIP'
    ];
    const baseSpeed = options.speed || 1.2;
    const curvature = options.curvature !== undefined ? options.curvature : 0;
    const skew = options.skew !== undefined ? options.skew : 0;
    const palette = options.palette || ['#273FC5', '#5265DA', '#6855AD', '#F47742'];

    // Clear container
    container.innerHTML = '';
    container.classList.add('ribbon-type-stage');

    // Create ribbon elements
    const wrapper = document.createElement('div');
    wrapper.className = 'ribbon-type-wrapper';

    // Primary flowing ribbon track
    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon-type-band';

    // Highlight sheen overlay
    const sheen = document.createElement('div');
    sheen.className = 'ribbon-type-sheen';
    ribbon.appendChild(sheen);

    // Track 1 (Flowing forward)
    const track1 = document.createElement('div');
    track1.className = 'ribbon-type-track track-forward';

    // Build repeating text tokens
    const buildTrackContent = () => {
      let html = '';
      for (let r = 0; r < 4; r++) {
        words.forEach((word, idx) => {
          const isAccent = idx % 2 === 1;
          html += `<span class="ribbon-word ${isAccent ? 'accent-word' : ''}">${word}</span>`;
          html += `<span class="ribbon-marker" aria-hidden="true">◆</span>`;
        });
      }
      return html;
    };

    track1.innerHTML = buildTrackContent();
    ribbon.appendChild(track1);

    // Track 2 (Duplicate for continuous seamless loop)
    const track2 = document.createElement('div');
    track2.className = 'ribbon-type-track track-forward clone';
    track2.innerHTML = buildTrackContent();
    ribbon.appendChild(track2);

    wrapper.appendChild(ribbon);
    container.appendChild(wrapper);

    // State & Physics
    let offset = 0;
    let targetSpeed = baseSpeed;
    let currentSpeed = baseSpeed;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let waveTime = 0;
    let isHovered = false;
    let isVisible = true;
    let rafId = null;

    // Pointer listeners
    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouseX = (e.clientX - rect.left) / rect.width;
        mouseY = (e.clientY - rect.top) / rect.height;
        targetRotX = (mouseY - 0.5) * -16;
        targetRotY = (mouseX - 0.5) * 12;
      }
    };

    const onMouseEnter = () => {
      isHovered = true;
      targetSpeed = baseSpeed * 2.2;
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetSpeed = baseSpeed;
      targetRotX = 0;
      targetRotY = 0;
    };

    // Scroll reactive impulse
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      targetSpeed = Math.min(baseSpeed * 4, baseSpeed + delta * 0.08);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerenter', onMouseEnter);
    container.addEventListener('pointerleave', onMouseLeave);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !rafId) {
        lastTime = performance.now();
        tick(lastTime);
      }
    });
    intersectionObserver.observe(container);

    let lastTime = performance.now();

    function tick(now) {
      if (!isVisible) {
        rafId = null;
        return;
      }

      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;
      waveTime += dt * 1.8;

      // Speed spring
      currentSpeed += (targetSpeed - currentSpeed) * Math.min(1, dt * 6);
      if (!isHovered && targetSpeed > baseSpeed) {
        targetSpeed += (baseSpeed - targetSpeed) * Math.min(1, dt * 3);
      }

      // Smooth rotation spring
      currentRotX += (targetRotX - currentRotX) * Math.min(1, dt * 8);
      currentRotY += (targetRotY - currentRotY) * Math.min(1, dt * 8);

      // Track advancement (in percentage)
      offset += (currentSpeed * dt * 8);
      if (offset >= 50) {
        offset %= 50;
      }

      track1.style.transform = `translateX(-${offset}%)`;
      track2.style.transform = `translateX(-${offset}%)`;

      // 3D perspective subtle dynamic response
      const rotZ = skew;
      const rotX = currentRotX * 0.2;
      const rotY = currentRotY * 0.2;

      ribbon.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) skewX(${skew}deg)`;

      // Dynamic sheen translation
      const sheenPos = (Math.sin(waveTime * 0.8) * 50 + 50).toFixed(1);
      sheen.style.background = `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) ${sheenPos}%, transparent 100%)`;

      rafId = requestAnimationFrame(tick);
    }

    tick(performance.now());

    return {
      destroy() {
        if (rafId) cancelAnimationFrame(rafId);
        window.removeEventListener('scroll', onScroll);
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerenter', onMouseEnter);
        container.removeEventListener('pointerleave', onMouseLeave);
        intersectionObserver.disconnect();
        container.innerHTML = '';
      }
    };
  };
})();

