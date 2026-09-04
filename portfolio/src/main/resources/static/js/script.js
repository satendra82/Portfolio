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

// only start the animation once the svg actually scrolls into view
const svgObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            drawNetwork();
            svgObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

svgObserver.observe(document.getElementById('netSvg'));

// every second or so, light up a random node just for a nice touch
function pulse() {
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    randomNode.classList.add('active');

    setTimeout(function () {
        randomNode.classList.remove('active');
    }, 700);
}

setInterval(pulse, 1100);