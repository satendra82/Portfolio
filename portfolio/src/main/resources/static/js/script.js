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
// Pehle elements ko JS se hide karo (CSS se nahi)
// Taaki JS fail hone par bhi content dikhe
document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('#contact .contact-anim');

    // JS se hide karo
    items.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-80px)';
        el.style.transition = 'none';
    });

    function triggerAnimation() {
        var section = document.getElementById('contact');
        if (!section) return;
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            items.forEach(function (el, i) {
                setTimeout(function () {
                    el.classList.add('go');
                    el.style.opacity = '';
                    el.style.transform = '';
                    el.style.transition = '';
                }, i * 250);
            });
            window.removeEventListener('scroll', triggerAnimation);
        }
    }

    window.addEventListener('scroll', triggerAnimation);
    triggerAnimation();
});