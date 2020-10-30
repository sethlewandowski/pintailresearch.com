"use strict";

const animatedElements = document.querySelectorAll('.animate');

let observer = new IntersectionObserver((item) => {
  item.forEach(x => {
    if (x.intersectionRatio > 0) {
      x.target.classList.add('animate');
    } 
  });
});

animatedElements.forEach(x => {
  observer.observe(x);
});