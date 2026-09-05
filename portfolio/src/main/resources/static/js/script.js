// ---- mobile menu toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
}

navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
    });
});

// ---- hero neural network animation ----
const lines = document.querySelectorAll('#lines line');
const nodes = document.querySelectorAll('#nodes circle');

function drawNetwork() {
    for (let i = 0; i < lines.length; i++) {
        setTimeout(function () {
            lines[i].classList.add('drawn');
        }, i * 90);
    }
}

drawNetwork();

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const flowDots = document.getElementById('flow-dots');
    if (flowDots) flowDots.remove();
}

function pulse() {
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    randomNode.classList.add('active');
    setTimeout(function () {
        randomNode.classList.remove('active');
    }, 700);
}

setInterval(pulse, 1100);

// ---- contact animation ----
// Simple scroll listener - jab #contact section screen pe aaye
// toh .contact-anim elements par 'go' class lagao
function checkContact() {
    var section = document.getElementById('contact');
    if (!section) return;

    var rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        var items = section.querySelectorAll('.contact-anim');
        items.forEach(function(el) {
            el.classList.add('go');
        });
        // Observer ki zaroorat nahi ab, remove kar do
        window.removeEventListener('scroll', checkContact);
    }
}

window.addEventListener('scroll', checkContact);
// Page load pe bhi ek baar check karo
checkContact();