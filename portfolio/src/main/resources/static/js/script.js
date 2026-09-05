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

// ---- contact list - ek ek line animation ----
document.addEventListener('DOMContentLoaded', function () {
    var contactList = document.getElementById('contact-list-anim');
    if (!contactList) return;

    var items = contactList.querySelectorAll('li');

    // Har li ko JS se hide karo
    items.forEach(function (li) {
        li.style.opacity = '0';
        li.style.transform = 'translateX(80px)';
        li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    function triggerAnimation() {
        var section = document.getElementById('contact');
        if (!section) return;
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            // Har li ek ek karke aaye - 200ms delay
            items.forEach(function (li, i) {
                setTimeout(function () {
                    li.style.opacity = '1';
                    li.style.transform = 'translateX(0)';
                }, i * 200);
            });
            window.removeEventListener('scroll', triggerAnimation);
        }
    }

    window.addEventListener('scroll', triggerAnimation);
    triggerAnimation();
});