// Certificate data with links
// PDFs stored in /static/certificates/ folder
// Add your PDF files to: static/certificates/

const certificates = {
    'Java Full Stack Development': '/static/certificates/certifi.pdf',
    'AI & ML Fundamentals': '/static/certificates/ai-ml-fundamentals.pdf',
    'Google Android Developer': '/static/certificates/google-android.pdf',
    'AWS Cloud Fundamentals': '/static/certificates/aws-cloud.pdf',
    'Zero Trust Cloud Security': '/static/certificates/zero-trust-security.pdf',
    'Ethical Hacking Internship': '/static/certificates/ethical-hacking.pdf'
};

// Function to open certificate
function viewCertificate(certName) {
    const url = certificates[certName];
    if (url && url !== 'path/to/' + certName.toLowerCase().replace(/\s+/g, '-') + '.pdf') {
        window.open(url, '_blank');
    } else {
        alert('Certificate link not yet added. Please update with your certificate URL.');
    }
}

// Update buttons with proper functionality
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cert-view-btn');

    buttons.forEach(btn => {
        const certName = btn.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        btn.onclick = function() {
            viewCertificate(certName);
        };
    });
});

// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});