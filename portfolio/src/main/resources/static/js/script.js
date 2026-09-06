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

// ---- contact list - har baar scroll pe ek ek line aaye ----
document.addEventListener('DOMContentLoaded', function () {
    var contactList = document.getElementById('contact-list-anim');
    if (!contactList) return;

    var items = contactList.querySelectorAll('li');
    var animating = false;

    function resetItems() {
        items.forEach(function (li) {
            li.style.transition = 'none';
            li.style.opacity = '0';
            li.style.transform = 'translateX(80px)';
        });
    }

    function triggerAnimation() {
        var section = document.getElementById('contact');
        if (!section) return;
        var rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {
            // Section screen pe aa gaya - animate karo
            if (!animating) {
                animating = true;
                items.forEach(function (li, i) {
                    setTimeout(function () {
                        li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        li.style.opacity = '1';
                        li.style.transform = 'translateX(0)';
                    }, i * 200);
                });
            }
        } else {
            // Section screen se bahar gaya - reset karo
            animating = false;
            resetItems();
        }
    }

    resetItems();
    window.addEventListener('scroll', triggerAnimation);
    triggerAnimation();
});
// ---- scroll progress bar ----
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = progress + '%';
});

// ---- typing animation ----
var typingEl = document.getElementById('typing-text');
var text = 'Satendra Lodhi';
var i = 0;
var isDeleting = false;
var pause = false;

function type() {
    if (pause) return;

    if (!isDeleting && i <= text.length) {
        typingEl.textContent = text.slice(0, i);
        i++;
        if (i > text.length) {
            // Poora type ho gaya - 2 second ruko phir delete
            pause = true;
            setTimeout(function () {
                pause = false;
                isDeleting = true;
                type();
            }, 2000);
            return;
        }
    } else if (isDeleting && i >= 0) {
        typingEl.textContent = text.slice(0, i);
        i--;
        if (i < 0) {
            // Poora delete ho gaya - thoda ruko phir dobara type karo
            pause = true;
            setTimeout(function () {
                pause = false;
                isDeleting = false;
                i = 0;
                type();
            }, 500);
            return;
        }
    }

    setTimeout(type, isDeleting ? 60 : 100);
}

// Page load ke baad 500ms delay se shuru karo
setTimeout(type, 500);

// ---- certificate modal ----
function openCertModal(el) {
    var pdf = el.getAttribute('data-pdf');
    document.getElementById('certFrame').src = pdf;
    var modal = document.getElementById('certModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
    document.getElementById('certFrame').src = '';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCertModal();
});
// ---- internship cards scroll animation ----
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.internship-card');

    // Odd = left se, Even = right se
    cards.forEach(function (card, i) {
        if (i % 2 !== 0) {
            card.classList.add('even');
        }
    });

    function checkCards() {
        cards.forEach(function (card) {
            var rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
                // Reset direction
                if (card.classList.contains('even')) {
                    card.style.transform = 'translateX(80px)';
                } else {
                    card.style.transform = 'translateX(-80px)';
                }
                card.style.opacity = '0';
                // Force reflow
                void card.offsetWidth;
                card.style.transform = '';
                card.style.opacity = '';
            }
        });
    }

    window.addEventListener('scroll', checkCards);
    checkCards();
});