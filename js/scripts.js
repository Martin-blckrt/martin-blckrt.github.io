/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const skillsDropdown = document.body.querySelector('#skillsDropdown');
        const dropdownItems = document.body.querySelectorAll('.dropdown-item');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && ((window.location.href === 'http://127.0.0.1:4000/' || window.location.href === 'http://127.0.0.1:4000/#about') || (window.location.href === 'https://martin-blanckaert.com/' || window.location.href === 'https://martin-blanckaert.com/#about'))) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
        if (!skillsDropdown && !dropdownItems) {
            return;
        }
        if (window.scrollY === 0 && ((window.location.href === 'http://127.0.0.1:4000/' || window.location.href === 'http://127.0.0.1:4000/#about') || (window.location.href === 'https://martin-blanckaert.com/' || window.location.href === 'https://martin-blanckaert.com/#about'))) {
            skillsDropdown.style.backgroundColor = "transparent";
            dropdownItems.forEach((item) => {
                item.style.backgroundColor = "transparent";
            });
        } else {
            skillsDropdown.style.backgroundColor = "#212529";
            dropdownItems.forEach((item) => {
                item.style.backgroundColor = "transparent";
            });
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // hover icon shows text
    const telIcon = document.body.querySelector('#phoneIcon');
    if (telIcon) {
        telIcon.addEventListener('mouseenter', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "My phone : +33761096401";
            };
        });
        telIcon.addEventListener('mouseleave', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "Feel free to contact me !";
            };
        });
    };

    // hover icon shows text
    const mailIcon = document.body.querySelector('#mailIcon');
    if (mailIcon) {
        mailIcon.addEventListener('mouseenter', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "My email : martin.blanckaert@utbm.fr";
            };
        });
        mailIcon.addEventListener('mouseleave', () => {
            const contactMe = document.body.querySelector('#contactMe');
            if (contactMe) {
                contactMe.innerHTML = "Feel free to contact me !";
            };
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// RESUME MODAL SECTION
function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("resumeModal").style.display = "block"
    document.getElementById("resumeModal").classList.add("show")
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("resumeModal").style.display = "none"
    document.getElementById("resumeModal").classList.remove("show")
}

// Get the modal
var modal = document.getElementById('resumeModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal()
    }
}

// HEADER & FOOTER
function highlightActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
    const currentPath = window.location.href; // Get the current page path

    navLinks.forEach(link => {
        // Check if the link's href matches the current path
        if (link.href === currentPath) {
            link.style.color = '#ffc800'; // Apply the active style
        } else {
            link.style.color = ''; // Reset the color for other links
        }
    });
}

const navPlaceholder = document.getElementById('mainNav');
const cachedNav = localStorage.getItem('nav');
if (cachedNav) {
    navPlaceholder.innerHTML = cachedNav;
    navPlaceholder.style.visibility = 'visible';
}

const resumePlaceholder = document.getElementById('resumeModal');
const cachedResume = localStorage.getItem('resume');
if (cachedResume) {
    resumePlaceholder.innerHTML = cachedResume;
    resumePlaceholder.style.visibility = 'visible';
}

const footerPlaceholder = document.getElementById('footer-placeholder');
const cachedFooter = localStorage.getItem('footer');
if (cachedFooter) {
    footerPlaceholder.innerHTML = cachedFooter;
    footerPlaceholder.style.visibility = 'visible';
}

fetch('components/navigation.html')
    .then(response => response.text())
    .then(data => {
        navPlaceholder.innerHTML = data;
        navPlaceholder.style.visibility = 'visible';
        localStorage.setItem('nav', data);
        highlightActiveNavLink();
    })
    .catch(error => console.error('Error loading navigation:', error));
fetch('components/resume.html')
    .then(response => response.text())
    .then(data => {
        resumePlaceholder.innerHTML = data;
        resumePlaceholder.style.visibility = 'visible';
        localStorage.setItem('resume', data);
        highlightActiveNavLink();
    })
    .catch(error => console.error('Error loading resume:', error));
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        footerPlaceholder.innerHTML = data;
        footerPlaceholder.style.visibility = 'visible';
        localStorage.setItem('footer', data);
        highlightActiveNavLink();
    })
    .catch(error => console.error('Error loading footer:', error));
/*
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Looking for an internship...';
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if(!isPageActive){
            blink();
        }else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

    function blink(){
        blinkEvent = setInterval(function() {
            if(document.title === attentionMessage){
                document.title = pageTitle;
            }else {
                document.title = attentionMessage;
            }
        }, 5000);
    }
};*/
