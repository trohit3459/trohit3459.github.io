(async function () {
  'use strict';

  const ICONS = {
    rocket: '🚀', layers: '🧩', target: '🎯', lead: '👥',
    card: '💳', coin: '🪙', shield: '🛡', trophy: '🏆', stage: '🎤', bank: '🏛', up: '📈', phone: '📞', pin: '📍', clock: '🗓', globe: '🗣',
    code: '{ }', layout: '🖥', server: '⚙️', cloud: '☁️', database: '🗄', tool: '🔧',
    github: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    linkedin: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/></svg>`,
    twitter: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    whatsapp: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.29A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41"/></svg>`,
    mail: '✉️', arrow: '→', check: '✓', metric: '📊', download: '⬇'
  };

  // ── Fetch content ──
  let data;
  try {
    const res = await fetch('content.json');
    data = await res.json();
  } catch (e) {
    console.error('Failed to load content:', e);
    return;
  }

  // ── Navigation ──
  const navLinks = document.getElementById('navLinks');
  navLinks.innerHTML = data.navigation.map(n =>
    `<li><a href="${n.href}">${n.label}</a></li>`
  ).join('');

  // Mobile menu
  const mobileToggle = document.getElementById('mobileToggle');
  mobileToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Hero ──
  const hero = data.hero;
  document.getElementById('heroContent').innerHTML = `
    <p class="hero-greeting">${hero.greeting}</p>
    <h1 class="hero-name"><span class="gradient-text">${hero.name}</span></h1>
    <p class="hero-title">${hero.title}</p>
    <p class="hero-tagline">${hero.tagline}</p>
    <div class="hero-buttons">
      <a href="#projects" class="btn-primary">${hero.cta_primary} <span>${ICONS.arrow}</span></a>
      <a href="#contact" class="btn-secondary">${hero.cta_secondary}</a>
      ${hero.cv_url ? `<a href="${hero.cv_url}" class="btn-secondary" download>${ICONS.download} ${hero.cta_cv}</a>` : ''}
    </div>
    <div class="hero-stats">
      ${hero.stats.map(s => `
        <div class="stat-item">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('')}
    </div>
  `;

  // ── About ──
  const about = data.about;
  document.getElementById('aboutGrid').innerHTML = `
    <div class="about-text animate-in">
      ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="about-highlights animate-in">
      ${about.highlights.map(h => `
        <div class="highlight-card">
          <div class="highlight-icon">${ICONS[h.icon] || '✦'}</div>
          <div>
            <h4>${h.title}</h4>
            <p>${h.text}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // ── Skills ──
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = data.skills.categories.map(cat => `
    <div class="skill-category animate-in">
      <div class="skill-category-header">
        <span class="skill-category-icon">${ICONS[cat.icon] || '✦'}</span>
        <span class="skill-category-name">${cat.name}</span>
      </div>
      ${cat.tags ? `<div class="project-tags">${cat.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>` : ''}
      ${(cat.items || []).map(s => `
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name">${s.name}</span>
            <span class="skill-level">${s.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${s.level}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // ── Projects ──
  const projectSVGs = {
    analytics: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="50" width="12" height="20" rx="2" opacity="0.4"/><rect x="26" y="35" width="12" height="35" rx="2" opacity="0.6"/><rect x="42" y="20" width="12" height="50" rx="2" opacity="0.8"/><rect x="58" y="10" width="12" height="60" rx="2"/></svg>`,
    infrastructure: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="25" y="10" width="30" height="16" rx="3"/><rect x="25" y="32" width="30" height="16" rx="3"/><rect x="25" y="54" width="30" height="16" rx="3"/><circle cx="40" cy="18" r="3" fill="currentColor" opacity="0.5"/><circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.5"/><circle cx="40" cy="62" r="3" fill="currentColor" opacity="0.5"/></svg>`,
    gateway: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="40" cy="40" r="15"/><line x1="40" y1="10" x2="40" y2="25"/><line x1="40" y1="55" x2="40" y2="70"/><line x1="10" y1="40" x2="25" y2="40"/><line x1="55" y1="40" x2="70" y2="40"/><circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.3"/></svg>`,
    settlement: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="28" width="22" height="24" rx="3"/><rect x="50" y="28" width="22" height="24" rx="3"/><path d="M32 34h16m-4-4l4 4-4 4"/><path d="M48 46H32m4 4l-4-4 4-4"/></svg>`,
    mobile: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="26" y="8" width="28" height="64" rx="5"/><line x1="36" y1="64" x2="44" y2="64"/><circle cx="40" cy="36" r="9"/><path d="M36 36l3 3 5-6"/></svg>`,
    offline: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 34a34 34 0 0148 0"/><path d="M24 43a22 22 0 0132 0"/><path d="M32 52a10 10 0 0116 0"/><circle cx="40" cy="61" r="3" fill="currentColor"/><line x1="14" y1="14" x2="66" y2="66"/></svg>`,
    token: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="40" cy="40" r="26"/><circle cx="40" cy="40" r="18" opacity="0.5"/><path d="M33 40l5 5 9-10"/></svg>`,
    recruitment: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="30" cy="28" r="10"/><circle cx="50" cy="28" r="10"/><path d="M15 60c0-10 8-18 18-18h14c10 0 18 8 18 18"/></svg>`
  };

  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = data.projects.items.map(p => `
    <div class="project-card animate-in" data-project="${p.id}">
      <div class="project-visual" style="color: ${p.color}">
        <div class="project-visual-bg" style="background: linear-gradient(135deg, ${p.color}, ${p.color}88);"></div>
        ${projectSVGs[p.image] || ''}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <p class="project-desc">${p.description}</p>
        <div class="project-metric"><span>${ICONS.metric}</span> ${p.metric}</div>
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  // Project modal
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const proj = data.projects.items.find(p => p.id === card.dataset.project);
      if (!proj) return;
      modalContent.innerHTML = `
        <button class="modal-close" id="modalClose">&times;</button>
        <h2>${proj.title}</h2>
        <p class="project-subtitle">${proj.subtitle}</p>
        <div class="project-metric"><span>${ICONS.metric}</span> ${proj.metric}</div>
        <div class="modal-section"><h3>The Problem</h3><p>${proj.problem}</p></div>
        <div class="modal-section"><h3>The Solution</h3><p>${proj.solution}</p></div>
        <div class="modal-section"><h3>The Impact</h3><p>${proj.impact}</p></div>
        <div class="project-tags" style="margin-top:20px">${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      `;
      overlay.classList.add('active');
      document.getElementById('modalClose').addEventListener('click', () => overlay.classList.remove('active'));
    });
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('active'); });

  // ── Experience ──
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = data.experience.items.map(exp => `
    <div class="timeline-item animate-in">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <span class="timeline-role">${exp.role}</span>
        <span class="timeline-period">${exp.period}</span>
      </div>
      <div class="timeline-company">${exp.company}</div>
      <ul class="timeline-achievements">
        ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // ── Education (shown under Experience) ──
  const eduEl = document.getElementById('educationList');
  if (eduEl && data.education) {
    eduEl.innerHTML = `
      <h3 class="subsection-title animate-in">${data.education.heading}</h3>
      <div class="timeline">
      ${data.education.items.map(ed => `
        <div class="timeline-item animate-in">
          <div class="timeline-dot"></div>
          <div class="timeline-header">
            <span class="timeline-role">${ed.degree}</span>
            <span class="timeline-period">${ed.year}</span>
          </div>
          <div class="timeline-company">${ed.institution}</div>
          ${ed.coursework && ed.coursework.length ? `<div class="project-tags">${ed.coursework.map(c => `<span class="project-tag">${c}</span>`).join('')}</div>` : ''}
        </div>
      `).join('')}
      </div>
    `;
  }

  // ── Achievements ──
  const achEl = document.getElementById('achievementsGrid');
  if (achEl && data.achievements) {
    achEl.innerHTML = data.achievements.items.map(a => `
      <div class="highlight-card animate-in">
        <div class="highlight-icon">${ICONS[a.icon] || '✦'}</div>
        <div>
          <h4>${a.title}</h4>
          <p>${a.text}</p>
        </div>
      </div>
    `).join('');
  }

  // ── Contact ──
  const contact = data.contact;
  document.getElementById('contactGrid').innerHTML = `
    <div class="contact-info animate-in">
      <h3>Let's build something great together.</h3>
      <p>${contact.subheading}</p>
      <a href="mailto:${contact.email}" class="contact-email">${ICONS.mail} ${contact.email}</a>
      <ul class="contact-details">
        ${contact.phone ? `<li><span>${ICONS.phone}</span><span><a href="tel:${contact.phone.replace(/[^+\d]/g, '')}">${contact.phone}</a> <span class="contact-note">(WhatsApp / BOTIM)</span></span></li>` : ''}
        ${contact.location ? `<li><span>${ICONS.pin}</span><span>${contact.location}</span></li>` : ''}
        ${contact.availability ? `<li><span>${ICONS.clock}</span><span>${contact.availability}</span></li>` : ''}
        ${contact.languages ? `<li><span>${ICONS.globe}</span><span>${contact.languages}</span></li>` : ''}
      </ul>
      <div class="social-links">
        ${contact.whatsapp ? `<a href="https://wa.me/${contact.whatsapp}" class="social-link" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>` : ''}
        ${contact.social.map(s => `
          <a href="${s.url}" class="social-link" target="_blank" rel="noopener" aria-label="${s.platform}">${ICONS[s.icon] || s.platform}</a>
        `).join('')}
      </div>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-top:20px">${contact.response_time}</p>
    </div>
    <form class="contact-form animate-in" id="contactForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required placeholder="Tell me about your project..."></textarea>
      </div>
      <button type="submit" class="form-submit" id="formSubmit">Send Message</button>
      <div id="formStatus"></div>
    </form>
  `;

  // Contact form handler
  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    const status = document.getElementById('formStatus');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (!res.ok) throw new Error('API not available');

      const result = await res.json();
      status.className = 'form-status success';
      status.textContent = result.message;
      e.target.reset();
    } catch (err) {
      // Fallback for static hosting (GitHub Pages)
      console.log('Static hosting detected or API error, using mailto fallback');
      const mailtoLink = `mailto:${contact.email}?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
      window.location.href = mailtoLink;

      status.className = 'form-status success';
      status.textContent = 'Opening your email client...';
      setTimeout(() => {
        status.textContent = 'If your email client didn\'t open, please email me at ' + contact.email;
      }, 2000);
    }

    btn.disabled = false;
    btn.textContent = 'Send Message';
    setTimeout(() => { status.textContent = ''; status.className = ''; }, 6000);
  });

  // ── Footer year ──
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Scroll Animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animate skill bars when visible
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
})();
