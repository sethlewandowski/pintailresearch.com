"use strict";


const config = {
  threshold: 0.5
};

const animatedElements = document.querySelectorAll('.animate-me');

let observer = new IntersectionObserver((item) => {
  item.forEach(x => {
    if (x.intersectionRatio > 0) {
      x.target.classList.add('isVisible');
      x.target.classList.add('animate');
    } /*else {
    	x.target.classList.remove('animate');
    } */
  });
}, config);

animatedElements.forEach(x => {
  observer.observe(x);
});