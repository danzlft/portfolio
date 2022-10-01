const introName = gsap.timeline({defaults: {ease: "power1.out"}});

introName.to('.intro-name', {y: '0',  duration: 1});

/*Link Click Animation*/
const projectLink = document.querySelector('.project_link');
const projectTranstition = document.querySelector('.figma-text');
const projectLine = document.querySelector('.workflow-line');
projectLink.addEventListener('click', (e) => {
    e.preventDefault();
    projectLine.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
});

const mobileLink = document.querySelector('.mobile_link');
mobileLink.addEventListener('click', (e) => {
    e.preventDefault();
    projectLine.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
});

const burgerMenu = document.querySelector('.hamburger-container');
const mobileMenu = document.querySelector('.mobile-nav-container');
let menuBtn = true;
burgerMenu.addEventListener('click', () => {
    if(menuBtn) {
        burgerMenu.classList.add('active');
        mobileMenu.classList.add('active');
        menuBtn = false;
    } else {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuBtn = true;
    }
})

window.addEventListener('scroll', mainProjectEffect);

/*Main Projects Scroll Animation */
function mainProjectEffect () {
    let mainProjects = document.querySelectorAll('.main-project');
    mainProjects.forEach((mainProject) => {
        let windowHeight = window.innerHeight;
        let userPosition = mainProject.getBoundingClientRect().top;
        let coordinate = 10;

        if(userPosition < windowHeight - coordinate) {
            mainProject.classList.add('active');
        } 
    })
}


/*Top Recent Scroll Animation*/ 
// window.addEventListener('scroll', recentProjects);
// function recentProjects () {
//     let topRecents = document.querySelectorAll('.top-projects');
//     topRecents.forEach((topRecent) => {
//         let windowHeight = window.innerHeight;
//         let userPosition = topRecent.getBoundingClientRect().top;
//         let coordinate = 100;
//         if(userPosition < windowHeight - coordinate) {
//             topRecent.classList.add('active');
//         }
//     });
// }

/* Show More Recent Projects */

const extendProject = document.getElementsByClassName('extend-project');
const lastExtend = document.getElementsByClassName('last-extend');
const topProject = document.querySelector('.top-projects');


/* Recent Projects Btn*/
const recentBtn = document.querySelector('.show-more');
const adjustFooter = document.querySelector('.footer-container');
let showMoreToggle = true;
// recentBtn.addEventListener('click', showMore);


function showMore () {
    if(showMoreToggle) {
        for(let i = 0; i < extendProject.length; i++){
            extendProject[i].classList.add('active');
        }
        recentBtn.classList.add('active');
        topProject.classList.add('active');
        adjustFooter.classList.add('active');
        recentBtn.textContent = "Show Less";
        showMoreToggle = false;
    } else {
        for(let i = 0; i < extendProject.length; i++){
            extendProject[i].classList.remove('active');
        }
        recentBtn.classList.remove('active');
        recentBtn.textContent = "Show More";
        adjustFooter.classList.remove('active');
        showMoreToggle = true;
    }
}
