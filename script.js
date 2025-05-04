let text = document.getElementById('text');
let catLeft = document.getElementById('cat-left');
let catRight = document.getElementById('cat-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.1 + 'px';
    catLeft.style.left = value * -1.5 + 'px';
    catRight.style.left = value * 1.5 + 'px'; 
    /*controls speed of objects moving when scrolling*/
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu when link is clicked
        document.getElementById('nav-toggle').checked = false;
    });
});

// Highlight active section based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navigation a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current || (link.getAttribute('href') === '#' && current === '')) {
            link.classList.add('active');
        }
    });
});

// cat fact api
function getCatFact() {
    const button = document.querySelector('.cat-fact-btn');
    const factElement = document.getElementById('catFact');
    
    // Add loading state
    button.disabled = true;
    factElement.innerText = 'Loading...';
    
    fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').innerText = data.data[0];
            button.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            factElement.innerText = 'Failed to fetch cat fact. Please try again.';
            button.disabled = false;
        });
}