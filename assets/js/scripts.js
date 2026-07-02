/* ============================================================
   HIRUNDO — front-end behaviour
   Mobile nav · sticky/solid header on scroll · reveal-on-scroll · back-to-top
   No dependencies.
   ============================================================ */
(function () {
   'use strict';

   var body = document.body;

   /* ---- Mobile navigation ---- */
   var toggle = document.querySelector('.nav-toggle');
   if (toggle) {
      toggle.addEventListener('click', function () {
         var open = body.classList.toggle('nav-open');
         toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // Close the menu when a link is tapped
      document.querySelectorAll('.primary-nav a').forEach(function (link) {
         link.addEventListener('click', function () {
            body.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
         });
      });
      // Close on Escape
      document.addEventListener('keyup', function (e) {
         if (e.key === 'Escape') {
            body.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
         }
      });
   }

   /* ---- Overlay header turns solid past the hero ---- */
   var header = document.querySelector('.site-header--overlay');
   if (header) {
      var solidify = function () {
         if (window.scrollY > 40) { header.classList.add('is-solid'); }
         else { header.classList.remove('is-solid'); }
      };
      solidify();
      window.addEventListener('scroll', solidify, { passive: true });
   }

   /* ---- Reveal on scroll ---- */
   var revealEls = document.querySelectorAll('.reveal');
   if ('IntersectionObserver' in window && revealEls.length) {
      var io = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting) {
               entry.target.classList.add('is-visible');
               io.unobserve(entry.target);
            }
         });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
   } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
   }

   /* ---- Smooth back-to-top ---- */
   var toTop = document.querySelector('.to-top');
   if (toTop) {
      toTop.addEventListener('click', function (e) {
         e.preventDefault();
         window.scrollTo({ top: 0, behavior: 'smooth' });
      });
   }
})();
