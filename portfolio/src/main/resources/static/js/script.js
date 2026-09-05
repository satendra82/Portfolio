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

// ---- contact animation - har baar scroll pe ----
document.addEventListener('DOMContentLoaded', function () {
    var contactList = document.getElementById('contact-list-anim');
    if (!contactList) return;

    contactList.style.opacity = '0';
    contactList.style.transform = 'translateX(80px)';
    contactList.style.transition = 'opacity 1.5s ease, transform 1.5s ease';

    window.addEventListener('scroll', function () {
        var section = document.getElementById('contact');
        if (!section) return;
        var rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {
            // Section visible - animate in
            contactList.style.opacity = '1';
            contactList.style.transform = 'translateX(0)';
        } else {
            // Section bahar - reset karo
            contactList.style.opacity = '0';
            contactList.style.transform = 'translateX(80px)';
        }
    });
});
