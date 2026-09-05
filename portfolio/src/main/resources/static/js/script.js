// ---- mobile menu toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
}

// close the menu automatically when a link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
    });
});


// ---- hero neural network animation ----
const lines = document.querySelectorAll('#lines line');
const nodes = document.querySelectorAll('#nodes circle');

// draws the connecting lines one by one (adds 'drawn' class with a delay)
function drawNetwork() {
    for (let i = 0; i < lines.length; i++) {
        setTimeout(function () {
            lines[i].classList.add('drawn');
        }, i * 90);
    }
}

// the hero is always visible as soon as the page loads, so just draw
// the network straight away instead of waiting to detect a scroll
drawNetwork();

// if the user has asked for reduced motion, stop the flowing dots
// (the CSS media query already handles css animations, but SMIL/animateMotion
// needs to be turned off manually like this)
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const flowDots = document.getElementById('flow-dots');
    if (flowDots) flowDots.remove();
}

// every second or so, light up a random node just for a nice touch
function pulse() {
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    randomNode.classList.add('active');

    setTimeout(function () {
        randomNode.classList.remove('active');
    }, 700);
}

setInterval(pulse, 1100);
// ---- contact section scroll animation ----
window.addEventListener('load', function () {
    var contactItems = document.querySelectorAll('.contact-anim');

    contactItems.forEach(function (item) {
        var rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            // already visible on load - animate after short delay
            setTimeout(function () {
                item.classList.add('visible');
            }, 300);
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0 });

    contactItems.forEach(function (item) {
        if (!item.classList.contains('visible')) {
            observer.observe(item);
        }
    });
});