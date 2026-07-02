document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer>
        <div class="container footer-container">
            <div class="footer-logo">STELLA</div>
            
            <div class="footer-socials" style="display: flex; gap: 20px; align-items: center; justify-content: center; margin-bottom: 5px;">
                <!-- Instagram (Outlined) -->
                <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="footer-social-link" style="color: #000000; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; transition: color var(--transition-speed) ease, transform var(--transition-speed) ease;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                
                <!-- Facebook (Solid Circle) -->
                <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="footer-social-link" style="color: #000000; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; transition: color var(--transition-speed) ease, transform var(--transition-speed) ease;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                
                <!-- X (Twitter) -->
                <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="footer-social-link" style="color: #000000; display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; transition: color var(--transition-speed) ease, transform var(--transition-speed) ease;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                
                <!-- LinkedIn (Solid Rounded Square) -->
                <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="footer-social-link" style="color: #000000; display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; transition: color var(--transition-speed) ease, transform var(--transition-speed) ease;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            </div>
            
            <div class="footer-info">
                <span>Jordan-Amman-Al Muqabalayn</span>
                <a href="mailto:info@stella-jo.com">info@stella-jo.com</a>
                <a href="tel:+962795591504" style="direction: ltr;">+962 795591504</a>
            </div>
            
            <div class="footer-copyright">
                © 2025 by stella-jo.com | Created by <a href="https://weblix-jo.com/" target="_blank">Weblix_jo</a>
            </div>
            
            <div class="footer-menu">
                <a href="countact-us"" class="footer-menu-link">تواصل معنا</a>
                <a href="services"" class="footer-menu-link">خدماتنا</a>
                <a href="our-project"" class="footer-menu-link">مشاريعنا</a>
                <a href="about-us"" class="footer-menu-link">من نحن</a>
                <a href="index"" class="footer-menu-link">الرئيسية</a>
            </div>
        </div>
    </footer>
    `;

    // Find and replace target <footer> tag on the page
    const footerEl = document.querySelector('footer');
    if (footerEl) {
        footerEl.outerHTML = footerHTML;
    } else {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = footerHTML;
        }
    }

    // Highlight active link in blue (#1085c5)
    let path = window.location.pathname.split('/').pop() || 'index';
    path = path.replace('.html', '');
    if (path === '' || path === '/' || path === 'index') {
        path = 'index';
    }

    const footerLinks = document.querySelectorAll('.footer-menu-link');
    footerLinks.forEach(link => {
        let href = link.getAttribute('href') || '';
        href = href.replace('.html', '');
        
        if (href === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Setup hover effect for SVGs
    const socialLinks = document.querySelectorAll('.footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#1085c5';
            link.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '#000000';
            link.style.transform = 'translateY(0)';
        });
    });
});
