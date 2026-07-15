        // Copy all your JavaScript code from the original header's <script> block
        // (the entire script content from the bottom of your header.php)
        // Make sure to include all functions and event listeners.
        // For brevity, I'll include the full code from your paste:
        
        // ============================================
        // DATA
        // ============================================
        let activeQuotes = [];
        let currentTestimonialIndex = 0;
        let currentFilter = 'all';
        let isDragging = false;

        const testimonials = [
            { name: 'Sarah Jenkins', quote: 'JS Staging transformed our family home. It looked amazing and we received multiple offers within a week!', rating: 5 },
            { name: 'Robert Vance (Agent, Ray White)', quote: 'I\'ve worked with many staging companies, but JS Staging is by far the most reliable and professional. Highly recommend.', rating: 5 },
            { name: 'Marcus & Claire', quote: 'The team was so easy to work with. They listened to what we wanted and delivered beyond our expectations.', rating: 5 }
        ];

        const portfolioItems = [
            { id: 'p1', title: 'Living Room Staging, Craigieburn', category: 'Living Room', image: 'https://jsstaging.com.au/wp-content/uploads/2025/10/IMG_1439-1-scaled.jpg' },
            { id: 'p2', title: 'Master Suite Styling, Mickleham', category: 'Bedroom', image: 'https://jsstaging.com.au/wp-content/uploads/2025/10/IMG_1301-scaled.jpg' },
            { id: 'p3', title: 'Contemporary Lounge, Wollert', category: 'Living Room', image: 'https://jsstaging.com.au/wp-content/uploads/2025/10/IMG_1472-1500x430.jpg' },
            { id: 'p4', title: 'Penthouse Bedroom, Melbourne', category: 'Bedroom', image: 'https://jsstaging.com.au/wp-content/uploads/2025/10/IMG_1514-1500x430.jpg' }
        ];

        // ============================================
        // INIT
        // ============================================
        function init() {
            loadQuotesFromStorage();
            renderPortfolio();
            renderTestimonials();
            initSlider();
            updateQuoteCount();
            setupFileInputs();
        }

        // ============================================
        // FILE INPUT HANDLING
        // ============================================
        function setupFileInputs() {
            const fileInputs = document.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                input.addEventListener('change', function(e) {
                    const label = this.closest('.file-input-wrapper').querySelector('.file-label');
                    const count = this.files.length;
                    if (count > 0) {
                        const names = Array.from(this.files).map(f => f.name).join(', ');
                        label.textContent = count + ' file(s) selected';
                        const parent = this.closest('.file-input-wrapper');
                        let nameDisplay = parent.querySelector('.file-names-display');
                        if (!nameDisplay) {
                            nameDisplay = document.createElement('div');
                            nameDisplay.className = 'file-names-display text-[10px] text-gray-400 mt-1';
                            parent.appendChild(nameDisplay);
                        }
                        nameDisplay.textContent = names.length > 60 ? names.substring(0, 60) + '...' : names;
                    } else {
                        label.textContent = 'Click to upload photos or floor plans';
                        const parent = this.closest('.file-input-wrapper');
                        const nameDisplay = parent.querySelector('.file-names-display');
                        if (nameDisplay) nameDisplay.textContent = '';
                    }
                });
            });
        }

        // ============================================
        // QUOTE MANAGEMENT
        // ============================================
        function loadQuotesFromStorage() {
            const saved = localStorage.getItem('js_staging_submits');
            if (saved) {
                activeQuotes = JSON.parse(saved);
                updateQuoteCount();
                renderQuotesList();
            }
        }

        function saveQuotesToStorage() {
            localStorage.setItem('js_staging_submits', JSON.stringify(activeQuotes));
            updateQuoteCount();
            renderQuotesList();
        }

        function addQuote(quoteData) {
            const newQuote = {
                ...quoteData,
                id: 'quote_' + Date.now(),
                createdAt: new Date().toLocaleDateString('en-AU', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short' })
            };
            activeQuotes = [newQuote, ...activeQuotes];
            saveQuotesToStorage();
            showFloatingPanel();
        }

        function deleteQuote(id) {
            activeQuotes = activeQuotes.filter(q => q.id !== id);
            saveQuotesToStorage();
            if (activeQuotes.length === 0) {
                document.getElementById('floating-panel').classList.add('hidden');
            }
        }

        function updateQuoteCount() {
            const countSpan = document.getElementById('quote-count');
            if (countSpan) countSpan.innerText = `Quotes (${activeQuotes.length})`;
            if (activeQuotes.length > 0) {
                document.getElementById('floating-panel').classList.remove('hidden');
            } else {
                document.getElementById('floating-panel').classList.add('hidden');
            }
        }

        function renderQuotesList() {
            const container = document.getElementById('quotes-list');
            if (!container) return;
            if (activeQuotes.length === 0) {
                container.innerHTML = '<div class="text-xs text-gray-400 text-center py-4">No quotes yet</div>';
                return;
            }
            container.innerHTML = activeQuotes.map(q => `
                <div class="p-3 bg-luxury-sand text-left text-xs space-y-1 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div><div class="font-bold text-luxury-charcoal">${q.name}</div><div class="text-[10px] text-luxury-gold-dark font-semibold uppercase">${q.serviceType || 'Full Staging'}</div></div>
                        <button onclick="deleteQuote('${q.id}')" class="text-gray-400 hover:text-rose-600">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                    <div class="text-[10px] text-gray-500">${q.email} | ${q.phone}</div>
                    <div class="text-[9px] text-gray-400">${q.createdAt}</div>
                </div>
            `).join('');
        }

        function showFloatingPanel() {
            document.getElementById('floating-panel').classList.remove('hidden');
        }

        function toggleQuotesPanel() {
            const panel = document.getElementById('quotes-panel');
            panel.classList.toggle('hidden');
        }

        // ============================================
        // FORM SUBMISSIONS
        // ============================================
        function submitQuoteForm(event) {
            event.preventDefault();
            const fileInput = document.getElementById('quote-file');
            const files = fileInput.files;
            const fileNames = files.length > 0 ? Array.from(files).map(f => f.name).join(', ') : 'No files uploaded';
            
            const quoteData = {
                name: document.getElementById('quote-name').value,
                email: document.getElementById('quote-email').value,
                phone: document.getElementById('quote-phone').value,
                serviceType: document.getElementById('quote-service').value,
                propertyAddress: document.getElementById('quote-address').value,
                propertySize: document.getElementById('quote-size').value,
                message: document.getElementById('quote-message').value,
                files: fileNames
            };
            addQuote(quoteData);
            
            const form = document.getElementById('quote-form');
            const successDiv = document.getElementById('quote-success');
            form.classList.add('hidden');
            successDiv.classList.remove('hidden');
            setTimeout(() => {
                form.classList.remove('hidden');
                successDiv.classList.add('hidden');
                form.reset();
                document.querySelectorAll('.file-names-display').forEach(el => el.textContent = '');
            }, 4000);
        }

        function toggleMobileSubmenu(button) {
            const submenu = button.parentElement.querySelector('#services-submenu');
            const chevron = button.querySelector('svg');
            if (submenu) {
                submenu.classList.toggle('hidden');
                chevron.classList.toggle('rotate-180');
            }
        }

        function submitModalQuote(event) {
            event.preventDefault();
            const fileInput = document.getElementById('modal-file');
            const files = fileInput.files;
            const fileNames = files.length > 0 ? Array.from(files).map(f => f.name).join(', ') : 'No files uploaded';
            
            const quoteData = {
                name: document.getElementById('modal-name').value,
                email: document.getElementById('modal-email').value,
                phone: document.getElementById('modal-phone').value,
                serviceType: document.getElementById('modal-service').value,
                propertyAddress: document.getElementById('modal-address').value,
                propertySize: 'Not specified',
                message: '',
                files: fileNames
            };
            addQuote(quoteData);
            closeQuoteModal();
            alert('Thanks! We\'ll be in touch within 24 hours.');
        }

        // ============================================
        // MODAL CONTROLS
        // ============================================
        function openQuoteModal() {
            const modal = document.getElementById('quote-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeQuoteModal() {
            const modal = document.getElementById('quote-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }

        // ============================================
        // MOBILE MENU
        // ============================================
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('mobile-overlay');
            menu.classList.toggle('translate-x-full');
            overlay.classList.toggle('hidden');
            document.body.classList.toggle('menu-open');
        }

        // ============================================
        // SLIDER
        // ============================================
        function initSlider() {
            const container = document.getElementById('slider-container');
            const afterClip = document.getElementById('after-clip');
            const sliderHandle = document.getElementById('slider-handle');
            const afterInner = document.getElementById('after-inner');
            
            if (!container) return;
            
            function updateSlider(clientX) {
                const rect = container.getBoundingClientRect();
                let x = clientX - rect.left;
                x = Math.max(0, Math.min(rect.width, x));
                const percent = (x / rect.width) * 100;
                afterClip.style.width = percent + '%';
                sliderHandle.style.left = percent + '%';
            }
            
            function onMouseMove(e) {
                if (!isDragging) return;
                updateSlider(e.clientX);
            }
            
            function onTouchMove(e) {
                if (!isDragging) return;
                updateSlider(e.touches[0].clientX);
            }
            
            function onMouseUp() {
                isDragging = false;
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('touchmove', onTouchMove);
                window.removeEventListener('touchend', onMouseUp);
            }
            
            container.addEventListener('mousedown', (e) => {
                isDragging = true;
                updateSlider(e.clientX);
                window.addEventListener('mousemove', onMouseMove);
                window.addEventListener('mouseup', onMouseUp);
            });
            
            container.addEventListener('touchstart', (e) => {
                isDragging = true;
                updateSlider(e.touches[0].clientX);
                window.addEventListener('touchmove', onTouchMove);
                window.addEventListener('touchend', onMouseUp);
            });
            
            if (afterInner) {
                afterInner.style.width = container.offsetWidth + 'px';
            }
            window.addEventListener('resize', () => {
                if (afterInner) afterInner.style.width = container.offsetWidth + 'px';
            });
        }

        // ============================================
        // SERVICE DETAILS TOGGLE
        // ============================================
        function toggleServiceDetails(service) {
            const details = document.getElementById(`${service}-details`);
            const icon = document.getElementById(`${service}-icon`);
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>';
            } else {
                details.classList.add('hidden');
                if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>';
            }
        }

        // ============================================
        // PORTFOLIO
        // ============================================
        function renderPortfolio() {
            const grid = document.getElementById('portfolio-grid');
            if (!grid) return;
            const filtered = currentFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === currentFilter);
            grid.innerHTML = filtered.map(item => `
                <div class="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 p-2 cursor-pointer rounded-2xl" onclick="openLightbox('${item.id}')">
                    <div class="relative h-64 overflow-hidden mb-4 rounded-xl">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute top-3 left-3 bg-white/95 text-luxury-charcoal font-display text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">${item.category}</div>
                    </div>
                    <div class="p-4 flex justify-between items-center">
                        <div><h3 class="font-serif text-base font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">${item.title}</h3></div>
                        <div class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-luxury-charcoal">
                            <svg class="w-4 h-4 text-gray-500 group-hover:text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterPortfolio(category) {
            currentFilter = category;
            renderPortfolio();
        }

        function openLightbox(id) {
            const item = portfolioItems.find(i => i.id === id);
            if (!item) return;
            alert(`JS Staging Project: ${item.title}\nCategory: ${item.category}\n\nSee more of our work on our website or contact us for a quote.`);
        }

        // ============================================
        // TESTIMONIALS
        // ============================================
        function renderTestimonials() {
            const container = document.getElementById('testimonial-content');
            const counter = document.getElementById('testimonial-counter');
            if (!container) return;
            const t = testimonials[currentTestimonialIndex];
            container.innerHTML = `
                <div class="flex justify-center gap-1">${'<svg class="w-4 h-4 fill-luxury-gold text-luxury-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(t.rating)}</div>
                <p class="font-serif text-lg sm:text-xl md:text-2xl text-luxury-charcoal leading-relaxed max-w-2xl mx-auto font-medium">"${t.quote}"</p>
                <div class="pt-4 border-t border-gray-100 max-w-xs mx-auto"><span class="font-display text-sm font-bold uppercase tracking-wider text-luxury-charcoal block">${t.name}</span></div>
            `;
            if (counter) counter.innerText = `${currentTestimonialIndex + 1} / ${testimonials.length}`;
        }

        function prevTestimonial() {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            renderTestimonials();
        }

        function nextTestimonial() {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            renderTestimonials();
        }

        // ============================================
        // SCROLL HEADER
        // ============================================
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 20) {
                nav.classList.add('fixed', 'top-0', 'left-0', 'bg-luxury-cream/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                nav.classList.remove('relative', 'py-6');
            } else {
                nav.classList.remove('fixed', 'top-0', 'left-0', 'bg-luxury-cream/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                nav.classList.add('relative', 'py-6');
            }
        });

        // ============================================
        // GLOBAL EXPOSURE
        // ============================================
        window.openQuoteModal = openQuoteModal;
        window.closeQuoteModal = closeQuoteModal;
        window.toggleMobileMenu = toggleMobileMenu;
        window.submitQuoteForm = submitQuoteForm;
        window.submitModalQuote = submitModalQuote;
        window.toggleServiceDetails = toggleServiceDetails;
        window.filterPortfolio = filterPortfolio;
        window.prevTestimonial = prevTestimonial;
        window.nextTestimonial = nextTestimonial;
        window.deleteQuote = deleteQuote;
        window.toggleQuotesPanel = toggleQuotesPanel;

        document.addEventListener('DOMContentLoaded', init);
		
		
		
	// ✅ CORRECT WAY — Doesn't break Gravity Forms
jQuery(document).ready(function($) {
    // Use Gravity Forms' built-in events
    $(document).on('gform_post_render', function(event, formId) {
        if (formId === 5) {
            // Add custom validation without breaking GF
            $('#gform_5').on('submit', function(e) {
                var isValid = true;
                var firstError = null;
                
                $(this).find('.gfield_contains_required input, .gfield_contains_required select, .gfield_contains_required textarea').each(function() {
                    var $field = $(this);
                    var val = $field.val().trim();
                    
                    if ($field.is('input[type="file"]')) {
                        if ($field[0].files.length === 0) {
                            isValid = false;
                            firstError = $field;
                            $field.closest('.gfield').addClass('gfield_error');
                        }
                    } else if (val === '') {
                        isValid = false;
                        firstError = $field;
                        $field.closest('.gfield').addClass('gfield_error');
                    } else {
                        $field.closest('.gfield').removeClass('gfield_error');
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Please fill all required fields.');
                    if (firstError) {
                        firstError.focus();
                    }
                    return false;
                }
                // ✅ If valid, let Gravity Forms handle the AJAX submit
                return true;
            });
        }
    });
});
		
function openUniversalEmail() {
    // Your email details – customize these!
    var to = 'info@jsstaging.com.au';
    var subject = 'Quote Request';
    var body = 'Hi there,\n\nI would like to request a quote for my project.\n\nPlease find my details below:\n\nName: \nPhone: \nProject details: \n\nThank you.';

    // Create the mailto link
    var mailtoLink = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    // 1. Try to open the native mail app (works on Apple, Android, and Windows with Outlook)
    window.location.href = mailtoLink;
    
    // 2. Fallback for Windows/Desktop users who don't have a default mail client
    // If the user's browser doesn't handle mailto, they will stay on the page.
    // We wait 600ms, then open Gmail web as a backup.
    setTimeout(function() {
        if (document.hasFocus()) {
            var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) + 
                            '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.open(gmailLink, '_blank');
        }
    }, 600);
}

		
		
function openQuoteEmail() {
    // Email details
    var to = 'info@jsstaging.com.au';
    var subject = 'Quote Request';
    var body = 'Hi there,\n\nI would like to request a quote for my project.\n\nPlease find my details below:\n\nName: \nPhone: \nProject details: \n\nThank you.';

    // Create the mailto link
    var mailtoLink = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    // 1️⃣ Try to open the native email app (Apple Mail, Gmail app, Outlook, etc.)
    window.location.href = mailtoLink;
    
    // 2️⃣ FALLBACK: If nothing happens (e.g., Windows without a mail app), open Gmail web in a new tab after 600ms
    setTimeout(function() {
        // If the user is still on the page (mailto didn't open anything)
        if (document.hasFocus()) {
            var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) + 
                            '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.open(gmailLink, '_blank');
        }
    }, 600);
}
