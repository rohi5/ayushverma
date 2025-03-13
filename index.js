

const videoContainers = document.querySelectorAll('.page2');
const videoContainers1 = document.querySelectorAll('.page3');
const headings = document.querySelectorAll('.heading');
const headings1 = document.querySelectorAll('.quote');
const headings2 = document.querySelectorAll('.content');
const mail = document.querySelectorAll('.mail');
const whatsaap = document.querySelectorAll('.whatsapp');
const insta = document.querySelectorAll('.insta');

// Function to handle the scroll event
function handleScroll() {
    // Check visibility for videos
    videoContainers.forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            container.classList.add('visible');
        } else {
            container.classList.remove('visible');
        }
    });

    videoContainers1.forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            container.classList.add('visible');
        } else {
            container.classList.remove('visible');
        }
    });

    // Check visibility for headings (texts)
    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });

    headings1.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });

    headings2.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });

    mail.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });
    insta.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });
    whatsapp.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    });
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check in case any elements are already in view
handleScroll();


