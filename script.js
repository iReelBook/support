// ==============================
// Countdown Timer
// ==============================

// غيّر تاريخ الإطلاق هنا حسب ما يناسبك
const launchDate = new Date('2026-02-30T00:00:00+03:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

// تحديث العد التنازلي كل ثانية
setInterval(updateCountdown, 1000);
updateCountdown();


// ==============================
// Email Form Handler
// ==============================
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');

if (emailForm && emailInput && successMessage) {
    emailForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (email) {
            // هنا توصل الإيميل للباك إند أو Google Sheet أو Mailchimp...
            console.log('Email submitted:', email);

            // إخفاء الفورم وإظهار رسالة النجاح
            emailForm.style.display = 'none';
            successMessage.classList.add('show');

            // Reset بعد 5 ثواني
            setTimeout(() => {
                emailForm.style.display = 'flex';
                successMessage.classList.remove('show');
                emailInput.value = '';
            }, 5000);
        }
    });
}


// ==============================
// CTA Form Handler
// ==============================
const ctaForm = document.getElementById('ctaForm');

if (ctaForm) {
    ctaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value.trim();

        if (email) {
            console.log('CTA Email submitted:', email);
            alert('✨ رائع! تم تسجيلك بنجاح في قائمة الانتظار');
            this.querySelector('input[type="email"]').value = '';
        }
    });
}


// ==============================
// Smooth scroll for anchor links
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ==============================
// Intersection Observer (Scroll Animations)
// ==============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .visual-card, .step-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
