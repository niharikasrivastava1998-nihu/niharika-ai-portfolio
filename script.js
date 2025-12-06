// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Add hover class to cursor when hovering links
const links = document.querySelectorAll('a, .tags span, .stat-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#bd00ff';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#00f2ff';
    });
});

// Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.level-node, .stat-card, .inv-category');
hiddenElements.forEach((el) => observer.observe(el));

// Add CSS class for animation via JS
const style = document.createElement('style');
style.innerHTML = `
    .level-node, .stat-card, .inv-category {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
    }
    .show {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
