/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// 1. Page loading event lister

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

// 2. create variable for sections


const sectionResults = document.querySelectorAll(".landing__container");
document.getElementsByClassName("landing__container");

// 3. loop over sections

const things = document.getElementsByClassName("landing__container");
console.log(things.length);

var nodeArray = [];
for (let i = 0; i < things.length; i++) {
  nodeArray[i] = NodeList[i];
  const addSection = document.createElement("a");
  addSection.setAttribute("href", `#section${i + 1}`);
  addSection.setAttribute("id", `link${i + 1}`);
  addSection.textContent = `Section ${i + 1} `;
  existingNav = document.querySelector("#navbar__list");
  existingNav.appendChild(addSection);
  console.log(addSection);
}
console.log(nodeArray);

// Add your-active-class to section in viewport

const sections = document.querySelectorAll("section");
const activeLink = document.querySelectorAll('a');

function makeSectionActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
      console.log(`Removing ${section.id}`);
    }
  }
}

// Add active class to nav links

function makeLinkActive() {
  // TODO: refactor this section to use makeSectionActive()
  for (const section2 of sections) {
    const box = section2.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {

      const activeNavLink = section2.id;
      console.log(`section2.id = ${section2.id}`);
      console.log(`activeNavLink = ${activeNavLink}`);

      const sectionNumberRegex = /[\d]/;
      const getSectionNumber = activeNavLink.match(sectionNumberRegex);
      const extractNumber = getSectionNumber[0];
      console.log(`sup ${extractNumber}`);
  
      const findId = document.querySelector(`#link${extractNumber}`);
      findId.classList.add("active");

    } else {
      // TODO: refactor to reuse code from if statement
      const activeNavLink = section2.id;
      const sectionNumberRegex = /[\d]/;
      const getSectionNumber = activeNavLink.match(sectionNumberRegex);
      const extractNumber = getSectionNumber[0];
      const findId = document.querySelector(`#link${extractNumber}`);

      findId.classList.remove("active");
    }
  }
}

document.addEventListener("scroll", function () {
  makeSectionActive(sections);
  makeLinkActive();
});


// Scroll to anchor ID using scrollTO event
document.addEventListener('click', function() {
  const navItems = document.querySelectorAll('a');
  navItems.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
