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
      scrollIntoView('.section--about .section-inner', 'end');
    });
  }

  const portfolioLinks = document.getElementsByClassName('js-portfolioLink');
  for (const link of portfolioLinks) {
    link.addEventListener('click', () => {
      scrollIntoView('.section--portfolio .section-inner');
    });
  }
};

function scrollIntoView(classname, blockPosition = 'start') {
  const element = document.querySelector(classname);
  element.scrollIntoView({
    behavior: 'smooth',
    block: blockPosition,
    inline: 'nearest',
  });
}