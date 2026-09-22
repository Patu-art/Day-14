'use strict';

// The compact layout is enabled by the tiny bootstrap script in the document head.

const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('site-nav');
if (menuButton) menuButton.hidden = false;
const mobile = window.matchMedia('(max-width: 900px)');

function closeMenu(restoreFocus = false) {
  document.documentElement.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  if (restoreFocus) menuButton.focus();
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = document.documentElement.classList.contains('nav-open');
    if (open) return closeMenu();
    document.documentElement.classList.add('nav-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close menu');
    navigation.querySelector('a')?.focus();
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (!mobile.matches || !document.documentElement.classList.contains('nav-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      return closeMenu(true);
    }
    if (event.key !== 'Tab') return;
    const focusable = [menuButton, ...navigation.querySelectorAll('a')];
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
    if (document.documentElement.classList.contains('nav-open') &&
        !menuButton.contains(event.target) &&
        !navigation.contains(event.target)) closeMenu();
  });

  mobile.addEventListener('change', () => closeMenu());
}
