/**
 * Microvascular Medicine — Site JavaScript
 * Lightweight utilities: active nav, smooth scroll, reading progress
 */

(function () {
  'use strict';

  /* ── Mark active nav link ──────────────────────────────────────────── */
  function setActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.site-nav a.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      // Exact match or prefix match for article pages
      const isActive = path === href ||
        (href !== '/' && href !== '/index.html' && path.startsWith(href.replace(/\.html$/, '')));
      link.classList.toggle('active', isActive);
    });
  }

  /* ── Reading progress bar ──────────────────────────────────────────── */
  function initProgressBar() {
    const bar = document.getElementById('reading-progress');
    if (!bar) return;

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      bar.style.width = pct + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Smooth in-page anchor scrolling ───────────────────────────────── */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Mobile nav toggle ──────────────────────────────────────────────── */
  function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Init ───────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initProgressBar();
    initSmoothAnchors();
    initMobileNav();
  });

})();
