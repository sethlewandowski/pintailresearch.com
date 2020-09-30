"use strict";

// open and close nav drawer (button functionality)
function toggleNavigationMenu() { 
  console.log('clicked');
	const nav = document.getElementById("menu"); // get hidden nav
  const background = document.getElementsByTagName('main')[0]; // get main part of document

  if (nav.style.height === ""){         // if nav is hidden
  	nav.style.height = "100%";         // open drawer to stated size
    background.style.opacity = ".3";    // and dim the background
  } else {                              // trigger if function is called and nav is already open 
  	nav.style.height = "";              // make drop down nav go away
    background.style.opacity = "";      // make opaque background go away
  } 
}

let lastPosition = window.pageYOffset; // set init value for scroll top
const nav = document.getElementById('nav-bar'); // get entire nav component
// initialize a threshold for hiding nav
window.addEventListener('scroll', () => {           // when user scrolls, this fires
  console.log('scroll detected');
  if (screen.width < 800) {         // run only on mobile device
    let currentPosition = window.pageYOffset; // set currentPosition
    
    console.log(`cp: ${currentPosition} \n lp: ${lastPosition}`)
    if (currentPosition > lastPosition) {         // detect if user has scrolled down
      nav.style.height = 0;                 // if so, hide entire nav
    } else if (currentPosition < lastPosition) {  // but if user has scrolled up
      nav.style.height = "";                     // show nav again
    }
    lastPosition = currentPosition;               // reset value for 'lastPosition';
  }
});