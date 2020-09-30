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

// Detect click outside of nav drawer
document.addEventListener("click", (click) => {     

    const nav = document.getElementById("menu");    // get navigation menu
    const background = document.getElementsByTagName('main')[0]; // get page content

    const menuButton = document.getElementById("hamburger-button");    // get navButton
    let targetElement = click.target;                           // assign target to const

    if (targetElement != nav && targetElement != menuButton) {  // if usr clicks on anything but nav or nav button
      nav.style.height = "";                                    // hide nav
      background.style.opacity = "";                            // 
    }
});

/*            // initialize a threshold for hiding nav
window.onscroll = () => {           // when user scrolls, this fires
  let lastPosition = 100; 
  if (screen.width < 800) {         // run only on mobile device
    let currentPosition = window.pageYOffset; // set currentPosition
    const nav = document.getElementById('navigation-bar'); // get entire nav component
    const background = document.getElementsByTagName('main')[0];
    background.style.opacity = ""

    console.log(`cp: ${currentPosition} \n lp: ${lastPosition}`)
    if (currentPosition > lastPosition) {         // detect if user has scrolled down
      nav.style.height = 0;                 // if so, hide entire nav
    } else if (currentPosition < lastPosition) {  // but if user has scrolled up
      nav.style.height = "";                     // show nav again
    }
    lastPosition = currentPosition;               // reset value for 'lastPosition';
  }
}*/