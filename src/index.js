import smoothscroll from 'smoothscroll-polyfill';

import './index.css';

window.onload = function() {
  smoothscroll.polyfill();

  var body = document.querySelector('body');

  // Play initial animations on page load
  window.setTimeout(() => {
    body.classList.remove('is-preload');
  }, 100);

  const aboutLinks = document.getElementsByClassName('js-aboutLink');
  for (const link of aboutLinks) {
    link.addEventListener('click', () => {
      scrollIntoView('.section--about');
    });
  }

  const portfolioLinks = document.getElementsByClassName('js-portfolioLink');
  for (const link of portfolioLinks) {
    link.addEventListener('click', () => {
      scrollIntoView('.section--portfolio');
    });
  }
};

function scrollIntoView(classname) {
  const element = document.querySelector(classname);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
}