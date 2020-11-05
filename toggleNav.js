"use strict";

// Open/Close Mobile Nav
function toggleNavigationMenu() { 
	const nav = document.getElementById("menu"); // get hidden nav
  const background = document.getElementsByTagName('main')[0]; // get main part of document

  if (nav.style.height === ""){         // if nav is hidden
  	nav.style.height = "100%";         // open drawer to stated size
  } else {                              // trigger if function is called and nav is already open 
  	nav.style.height = "";              // make drop down nav go away
  } 
}

// Transition Effects

let lastPosition = window.pageYOffset; // set init value for scroll top
const nav = document.getElementById('nav-bar'); // get entire nav component
// initialize a threshold for hiding nav
  window.addEventListener('scroll', () => {           // when user scrolls, this fires
  let currentPosition = window.pageYOffset; // set currentPosition
    if (currentPosition > lastPosition && currentPosition > 40) {         // detect if user has scrolled down quite a bit
      nav.style.height = '0';                 // if so, hide entire nav
    } else if (currentPosition < lastPosition -5) {  // but if user has scrolled up
      nav.style.height = '90px';                     // show nav again
    }
    lastPosition = currentPosition;               // reset value for 'lastPosition';
});