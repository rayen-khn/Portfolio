/* =========================================================
   Portfolio — shared JavaScript
   Dark mode, language (EN/FR), mobile menu, scroll reveal,
   filters, validation
   ========================================================= */

(function () {
  'use strict';

  /* ---------- i18n dictionaries ---------- */
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.greeting': '👋 Hello, I\'m',
      'hero.subtitle': 'Computer Science Engineering Student · Full-Stack Developer',
      'hero.desc': 'Integrated prep cycle at ESPRIT (Tunisia). I build modern web & desktop applications combining clean UI with solid back-end, from Symfony platforms to JavaFX apps.',
      'hero.viewProjects': 'View Projects',
      'hero.downloadCv': 'Download CV',
      'skills.title': 'Skills <span class="accent">Preview</span>',
      'skills.subtitle': 'A snapshot of the technologies and tools I work with daily.',
      'skill.languages': 'Languages',
      'skill.frameworks': 'Frameworks',
      'skill.web': 'Web',
      'skill.databases': 'Databases',
      'skill.tools': 'Tools',
      'skill.os': 'Operating Systems',
      'featured.title': 'Featured <span class="accent">Projects</span>',
      'featured.subtitle': 'Selected work from my recent development journey.',
      'proj1.desc': 'Full-stack platform with synchronized Web and Desktop apps: residences, apartments, events, complaints, forum, email notifications and external services.',
      'proj2.desc': 'Dynamic website with front-end & back-end integration and practical SQL database usage, built with VS Code & XAMPP.',
      'proj3.desc': 'Desktop application in C++ with Qt Creator, Oracle Database management and Arduino-integrated external devices.',
      'btn.webRepo': 'Web Repo',
      'btn.desktopRepo': 'Desktop Repo',
      'btn.viewGithub': 'View on GitHub',
      'btn.allProjects': 'See all projects →',
      'cta.title': 'Let\'s work together',
      'cta.desc': 'Looking for an internship opportunity? I\'d love to contribute and grow. Get in touch and let\'s connect.',
      'cta.contact': 'Contact Me',
      'footer.copyright': '© 2026 Mohamed Rayen Kahloun. All rights reserved.',
      'about.lead': 'Computer Science Engineering Student · ESPRIT, Tunisia',
      'about.p1': 'I am a Computer Science Engineering student (integrated prep cycle completed, now in first year of engineering cycle), passionate about software development, web platforms and desktop applications. I enjoy building full-stack solutions that combine clean user interfaces with robust back-ends.',
      'about.p2': 'Graduating in June 2026. Currently seeking internship opportunities where I can contribute, learn, and grow as a developer.',
      'about.downloadCv': 'Download CV',
      'about.contact': 'Get in touch',
      'about.education': 'Education',
      'about.edu1.date': 'Completed',
      'about.edu1.title': 'Integrated Prep Cycle in Computer Science',
      'about.edu1.org': 'ESPRIT — Tunisia',
      'about.edu1.li': 'Completed the integrated preparatory cycle in computer science.',
      'about.edu2.date': 'In progress · Graduation Jun 2026',
      'about.edu2.title': 'Engineering Cycle (1st year)',
      'about.edu2.org': 'ESPRIT — Tunisia',
      'about.edu2.li1': 'Currently in first year of the engineering cycle.',
      'about.edu2.li2': 'Expected graduation: June 2026.',
      'about.experience': 'Work Experience',
      'about.exp1.date': 'Jun 2024 – Jul 2024',
      'about.exp1.title': 'Observation Internship',
      'about.exp1.org': 'The Tunisian Post Office',
      'about.exp1.li1': 'Observed daily operations at a public postal branch.',
      'about.exp1.li2': 'Monitored internal desktop platforms for transactions and queue management.',
      'about.exp1.li3': 'Observed postal distribution systems and automated machines.',
      'about.exp1.li4': 'Developed communication and interpersonal skills.',
      'about.languages': 'Languages',
      'about.lang1.title': 'French',
      'about.lang1.level': 'Professional proficiency',
      'about.lang2.title': 'English',
      'about.lang2.level': 'Professional proficiency',
      'about.lang3.title': 'Arabic',
      'about.lang3.level': 'Native',
      'about.interests': 'Interests',
      'about.int1': 'Software Development',
      'about.int2': 'Web Technologies',
      'about.int3': 'Desktop Apps',
      'about.int4': 'Problem Solving',
      'about.int5': 'Open Source',
      'about.int6': 'Continuous Learning',
      'about.projects': 'See my projects',
      'proj.page.title': 'My <span class="accent">Projects</span>',
      'proj.page.subtitle': 'A collection of web and desktop applications I\'ve built.',
      'filter.all': 'All',
      'filter.web': 'Web',
      'filter.desktop': 'Desktop',
      'proj1.title': 'Residential Management Platform (Web & Desktop)',
      'proj1.desc': 'Full-stack platform using Symfony 6.4, MySQL, HTML, CSS, JS, JavaFX and Java. Synchronized Web and Desktop applications sharing identical features.',
      'proj1.details': '<strong>Auth:</strong> CRUD, Google login, password recovery, CAPTCHA, Face ID.<br><strong>Modules:</strong> residences, apartments, events, complaints, forum.<br><strong>Extras:</strong> email notifications, Maps, Weather API, chatbot/live chat, bad-words detection, Google Drive.',
      'proj2.title': 'Startup & Investment Platform',
      'proj2.desc': 'Complete website with front-end and back-end integration and practical SQL database usage. Environment: VS Code, XAMPP.',
      'proj3.title': 'Conservation Company Management App',
      'proj3.desc': 'Desktop application in C++ using Qt Creator with interactive GUI, Oracle Database management and external devices integrated through Arduino IDE.',
      'contact.title': 'Get in <span class="accent">Touch</span>',
      'contact.subtitle': 'Have a question or an internship opportunity? Send me a message.',
      'contact.label.name': 'Name',
      'contact.label.email': 'Email',
      'contact.label.subject': 'Subject',
      'contact.label.message': 'Message',
      'contact.ph.name': 'Your name',
      'contact.ph.email': 'you@example.com',
      'contact.ph.subject': 'Subject',
      'contact.ph.message': 'Your message...',
      'contact.send': 'Send Message',
      'contact.fix': 'Please fix the errors above.',
      'contact.sending': 'Sending...',
      'contact.infoTitle': 'Contact Information',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.location': 'Location',
      'contact.socialTitle': 'Find me online',
      'err.name': 'Please enter your name.',
      'err.email': 'Please enter a valid email.',
      'err.subject': 'Please enter a subject.',
      'err.message': 'Message must be at least 10 characters.'
    },
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'hero.greeting': '👋 Bonjour, je suis',
      'hero.subtitle': 'Étudiant en génie informatique · Développeur Full-Stack',
      'hero.desc': 'Cycle préparatoire intégré à l\'ESPRIT (Tunisie). Je conçois des applications web et de bureau modernes alliant interfaces soignées et back-ends robustes, des plateformes Symfony aux applications JavaFX.',
      'hero.viewProjects': 'Voir les projets',
      'hero.downloadCv': 'Télécharger le CV',
      'skills.title': 'Aperçu des <span class="accent">compétences</span>',
      'skills.subtitle': 'Un aperçu des technologies et des outils que j\'utilise au quotidien.',
      'skill.languages': 'Langages',
      'skill.frameworks': 'Frameworks',
      'skill.web': 'Web',
      'skill.databases': 'Bases de données',
      'skill.tools': 'Outils',
      'skill.os': 'Systèmes d\'exploitation',
      'featured.title': 'Projets <span class="accent">phares</span>',
      'featured.subtitle': 'Quelques réalisations récentes de mon parcours.',
      'proj1.desc': 'Plateforme full-stack avec applications web et de bureau synchronisées : résidences, appartements, événements, réclamations, forum, notifications par email et services externes.',
      'proj2.desc': 'Site web dynamique avec intégration front-end et back-end et utilisation pratique d\'une base de données SQL, réalisé sous VS Code et XAMPP.',
      'proj3.desc': 'Application de bureau en C++ avec Qt Creator, gestion de base Oracle et périphériques externes intégrés via Arduino.',
      'btn.webRepo': 'Dépôt Web',
      'btn.desktopRepo': 'Dépôt Bureau',
      'btn.viewGithub': 'Voir sur GitHub',
      'btn.allProjects': 'Voir tous les projets →',
      'cta.title': 'Travaillons ensemble',
      'cta.desc': 'Vous cherchez un stagiaire ? J\'aimerais contribuer et évoluer. Contactons-nous et connectons-nous.',
      'cta.contact': 'Me contacter',
      'footer.copyright': '© 2026 Mohamed Rayen Kahloun. Tous droits réservés.',
      'about.lead': 'Étudiant en génie informatique · ESPRIT, Tunisie',
      'about.p1': 'Je suis étudiant en génie informatique (cycle préparatoire intégré achevé, actuellement en première année du cycle ingénieur), passionné par le développement logiciel, les plateformes web et les applications de bureau. J\'aime concevoir des solutions full-stack alliant interfaces soignées et back-ends robustes.',
      'about.p2': 'Diplômé en juin 2026. Je recherche actuellement des opportunités de stage où je peux contribuer, apprendre et progresser en tant que développeur.',
      'about.downloadCv': 'Télécharger le CV',
      'about.contact': 'Me contacter',
      'about.education': 'Formation',
      'about.edu1.date': 'Terminé',
      'about.edu1.title': 'Cycle préparatoire intégré en informatique',
      'about.edu1.org': 'ESPRIT — Tunisie',
      'about.edu1.li': 'Achevé le cycle préparatoire intégré en informatique.',
      'about.edu2.date': 'En cours · Diplôme juin 2026',
      'about.edu2.title': 'Cycle ingénieur (1re année)',
      'about.edu2.org': 'ESPRIT — Tunisie',
      'about.edu2.li1': 'Actuellement en première année du cycle ingénieur.',
      'about.edu2.li2': 'Diplôme prévu : juin 2026.',
      'about.experience': 'Expérience professionnelle',
      'about.exp1.date': 'Juin 2024 – Juillet 2024',
      'about.exp1.title': 'Stage d\'observation',
      'about.exp1.org': 'La Poste Tunisienne',
      'about.exp1.li1': 'Observation des opérations quotidiennes dans une agence postale.',
      'about.exp1.li2': 'Suivi des plateformes bureautiques internes pour les transactions et la gestion des files.',
      'about.exp1.li3': 'Observation des systèmes de distribution postale et des machines automatisées.',
      'about.exp1.li4': 'Développement des compétences en communication et relationnelles.',
      'about.languages': 'Langues',
      'about.lang1.title': 'Français',
      'about.lang1.level': 'Maîtrise professionnelle',
      'about.lang2.title': 'Anglais',
      'about.lang2.level': 'Maîtrise professionnelle',
      'about.lang3.title': 'Arabe',
      'about.lang3.level': 'Langue maternelle',
      'about.interests': 'Centres d\'intérêt',
      'about.int1': 'Développement logiciel',
      'about.int2': 'Technologies web',
      'about.int3': 'Applications de bureau',
      'about.int4': 'Résolution de problèmes',
      'about.int5': 'Open Source',
      'about.int6': 'Apprentissage continu',
      'about.projects': 'Voir mes projets',
      'proj.page.title': 'Mes <span class="accent">projets</span>',
      'proj.page.subtitle': 'Ensemble d\'applications web et de bureau que j\'ai développées.',
      'filter.all': 'Tous',
      'filter.web': 'Web',
      'filter.desktop': 'Bureau',
      'proj1.title': 'Plateforme de gestion résidentielle (Web & Bureau)',
      'proj1.desc': 'Plateforme full-stack utilisant Symfony 6.4, MySQL, HTML, CSS, JS, JavaFX et Java. Applications web et de bureau synchronisées aux fonctionnalités identiques.',
      'proj1.details': '<strong>Auth :</strong> CRUD, connexion Google, récupération de mot de passe, CAPTCHA, Face ID.<br><strong>Modules :</strong> résidences, appartements, événements, réclamations, forum.<br><strong>Extras :</strong> notifications email, cartes, API météo, chatbot/live chat, détection de gros mots, Google Drive.',
      'proj2.title': 'Plateforme Startup & Investissement',
      'proj2.desc': 'Site web complet avec intégration front-end et back-end et utilisation pratique d\'une base de données SQL. Environnement : VS Code, XAMPP.',
      'proj3.title': 'Application de gestion pour entreprise de conservation',
      'proj3.desc': 'Application de bureau en C++ avec Qt Creator, interface graphique interactive, gestion de base Oracle et périphériques externes via Arduino IDE.',
      'contact.title': 'Me <span class="accent">contacter</span>',
      'contact.subtitle': 'Une question ou une opportunité de stage ? Envoyez-moi un message.',
      'contact.label.name': 'Nom',
      'contact.label.email': 'E-mail',
      'contact.label.subject': 'Sujet',
      'contact.label.message': 'Message',
      'contact.ph.name': 'Votre nom',
      'contact.ph.email': 'vous@exemple.com',
      'contact.ph.subject': 'Sujet',
      'contact.ph.message': 'Votre message...',
      'contact.send': 'Envoyer le message',
      'contact.fix': 'Veuillez corriger les erreurs ci-dessus.',
      'contact.sending': 'Envoi en cours...',
      'contact.infoTitle': 'Informations de contact',
      'contact.email': 'E-mail',
      'contact.phone': 'Téléphone',
      'contact.location': 'Localisation',
      'contact.socialTitle': 'Retrouvez-moi en ligne',
      'err.name': 'Veuillez saisir votre nom.',
      'err.email': 'Veuillez saisir un e-mail valide.',
      'err.subject': 'Veuillez saisir un sujet.',
      'err.message': 'Le message doit contenir au moins 10 caractères.'
    }
  };

  const LANG_KEY = 'portfolio-lang';

  function getStoredLang() {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  }
  function setStoredLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function t(key) {
    const lang = getStoredLang() || 'en';
    const dict = translations[lang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] !== undefined ? translations.en[key] : key);
  }

  function currentLang() {
    return getStoredLang() || 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    // Update CV download links based on language
    // User's files live in subfolders (with spaces in paths)
    const cvFile = lang === 'fr'
      ? 'assets/files/version fr/Mohamed rayen kahloun.pdf'
      : 'assets/files/version ang/Mohamed Rayen Kahloun.pdf';
    document.querySelectorAll('.cv-link').forEach(a => { a.setAttribute('href', cvFile); });

    // Update toggle button label to show the OTHER language
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';

    setStoredLang(lang);
  }

  function toggleLang() {
    applyLang(currentLang() === 'en' ? 'fr' : 'en');
  }

  /* ---------- Theme toggle ---------- */
  const THEME_KEY = 'portfolio-theme';

  function getStoredTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function setStoredTheme(theme) { try { localStorage.setItem(THEME_KEY, theme); } catch (e) {} }

  function moonIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'; }
  function sunIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'; }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) toggle.innerHTML = theme === 'dark' ? sunIcon() : moonIcon();
  }

  function initTheme() {
    const stored = getStoredTheme();
    let theme = stored;
    if (!theme) {
      theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setStoredTheme(next);
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Project filter ---------- */
  function initFilter() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('[data-category]');
    if (!buttons.length || !cards.length) return;
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        cards.forEach(card => {
          const cats = (card.getAttribute('data-category') || '').split(' ');
          const show = filter === 'all' || cats.includes(filter);
          card.classList.toggle('hidden', !show);
        });
      });
    });
  }

  /* ---------- Contact form validation ---------- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const status = document.getElementById('form-status');

    function setError(field, msg) {
      const group = field.closest('.form-group');
      if (!group) return;
      group.classList.toggle('error', !!msg);
      const err = group.querySelector('.form-error');
      if (err) err.textContent = msg || '';
    }

    function validateEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    form.addEventListener('submit', (e) => {
      let ok = true;
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const subject = form.querySelector('[name="subject"]');
      const message = form.querySelector('[name="message"]');

      if (!name.value.trim() || name.value.trim().length < 2) { setError(name, t('err.name')); ok = false; }
      else setError(name, '');

      if (!validateEmail(email.value.trim())) { setError(email, t('err.email')); ok = false; }
      else setError(email, '');

      if (!subject.value.trim()) { setError(subject, t('err.subject')); ok = false; }
      else setError(subject, '');

      if (!message.value.trim() || message.value.trim().length < 10) { setError(message, t('err.message')); ok = false; }
      else setError(message, '');

      if (!ok) {
        e.preventDefault();
        if (status) { status.textContent = t('contact.fix'); status.className = 'form-status error'; }
        return;
      }
      if (status) { status.textContent = t('contact.sending'); status.className = 'form-status'; }
    });

    form.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', () => {
        const g = el.closest('.form-group');
        if (g && g.classList.contains('error')) {
          g.classList.remove('error');
          const err = g.querySelector('.form-error');
          if (err) err.textContent = '';
        }
      });
    });
  }

  /* ---------- Active nav link ---------- */
  function markActiveNav() {
    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const current = path === '' ? 'index.html' : path;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      if (href === current) link.classList.add('active');
    });
  }

  /* ---------- Force CV download (works even on file://) ---------- */
  function initCvDownload() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('.cv-link');
      if (!a) return;
      e.preventDefault();
      const url = a.getAttribute('href');
      const filename = (document.documentElement.getAttribute('lang') === 'fr')
        ? 'Mohamed_Rayen_Kahloun_CV_FR.pdf'
        : 'Mohamed_Rayen_Kahloun_CV_EN.pdf';
      // Try fetch + blob download first
      fetch(encodeURI(url))
        .then(res => res.blob())
        .then(blob => {
          const obj = URL.createObjectURL(blob);
          const tmp = document.createElement('a');
          tmp.href = obj;
          tmp.download = filename;
          document.body.appendChild(tmp);
          tmp.click();
          tmp.remove();
          setTimeout(() => URL.revokeObjectURL(obj), 1000);
        })
        .catch(() => {
          // Fallback: open in new tab
          window.open(url, '_blank');
        });
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initTheme();
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    // Apply stored language before rendering visible swaps
    applyLang(currentLang());

    initMobileMenu();
    initCvDownload();
    markActiveNav();
    initReveal();
    initFilter();
    initContactForm();

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
