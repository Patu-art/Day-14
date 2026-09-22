'use strict';

const menuButton = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('#main-nav');
const mobileQuery = window.matchMedia('(max-width: 900px)');

function closeMenu(restoreFocus = false) {
  if (!menuButton || !mainNav) return;
  document.body.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  if (restoreFocus) menuButton.focus();
}

function toggleMenu() {
  if (!menuButton || !mainNav) return;
  const isOpen = document.body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  if (isOpen) mainNav.querySelector('a')?.focus();
}

if (menuButton && mainNav) {
  menuButton.addEventListener('click', toggleMenu);

  mainNav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (!document.body.classList.contains('nav-open')) return;

    if (event.key === 'Escape') {
      closeMenu(true);
      return;
    }
    if (event.key !== 'Tab' || !mobileQuery.matches) return;

    const focusable = [menuButton, ...mainNav.querySelectorAll('a')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('pointerdown', event => {
    const outsideMenu = !mainNav.contains(event.target) && !menuButton.contains(event.target);
    if (outsideMenu && document.body.classList.contains('nav-open')) closeMenu();
  });

  mobileQuery.addEventListener('change', () => closeMenu());
}

// All content remains readable if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: .05, rootMargin: '0px 0px 30px 0px' });

  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
}