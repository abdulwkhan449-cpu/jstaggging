        document.addEventListener('DOMContentLoaded', function () {

            // --- Mobile Menu ---
            window.toggleMobileMenu = function () {
                const menu = document.getElementById('mobile-menu');
                const overlay = document.getElementById('mobile-overlay');
                if (menu) {
                    menu.classList.toggle('translate-x-full');
                    overlay.classList.toggle('hidden');
                    document.body.classList.toggle('menu-open');
                }
            };

            // --- Modal Controls ---
            window.openQuoteModal = function () {
                const modal = document.getElementById('quote-modal');
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                }
            };

            window.closeQuoteModal = function () {
                const modal = document.getElementById('quote-modal');
                if (modal) {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    document.body.style.overflow = '';
                }
            };

            window.submitModalQuote = function (event) {
                event.preventDefault();
                const name = document.getElementById('modal-name').value;
                const service = document.getElementById('modal-service').value;
                alert(`Thanks ${name}! We'll be in touch within 24 hours regarding your ${service} quote.`);
                closeQuoteModal();
                document.getElementById('modal-quote-form').reset();
            };

            // --- Scroll Header ---
            const nav = document.getElementById('main-nav');
            if (nav) {
                window.addEventListener('scroll', function () {
                    if (window.scrollY > 20) {
                        nav.classList.add('fixed', 'top-0', 'left-0', 'bg-luxury-cream/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                        nav.classList.remove('relative', 'py-6');
                    } else {
                        nav.classList.remove('fixed', 'top-0', 'left-0', 'bg-luxury-cream/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
                        nav.classList.add('relative', 'py-6');
                    }
                });
            }

            // Optional: close modal on ESC key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeQuoteModal();
                }
            });

            // Close modal on overlay click (already handled by onclick attribute, but we keep it)
        });
    </script>




    <!-- ============================================ -->
    <!-- FOOTER -->
    <!-- ============================================ -->
    <footer
        class="bg-luxury-charcoal text-luxury-cream pt-16 pb-8 px-6 md:px-12 border-t border-luxury-slate/30 relative">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none">
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
            <div class="md:col-span-4 space-y-6">
                <div class="flex flex-col">
                    <span class="font-serif text-3xl font-extrabold tracking-tight text-white leading-none">JS</span>
                    <span
                        class="text-[9px] tracking-[0.3em] text-luxury-gold font-bold uppercase leading-none mt-1">STAGING</span>
                </div>
                <p class="text-xs text-gray-400 font-sans font-light leading-relaxed">
                    Professional home staging services across Melbourne. We help homeowners and agents present
                    properties at their best — simply, affordably, and effectively.
                </p>
            </div>

            <div class="md:col-span-2 space-y-4">
                <h4 class="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold">Services</h4>
                <ul class="space-y-2 text-xs font-sans font-light text-gray-400">
                    <li><a href="https://jsstaging.com.au/full-property-stagging/"
                            class="hover:text-luxury-gold transition-colors">Full Home Staging</a></li>
                    <li><a href="https://jsstaging.com.au/partial-property-stagging/"
                            class="hover:text-luxury-gold transition-colors">Partial Staging</a></li>
                    <li><a href="https://jsstaging.com.au/personal-styling-service/s"
                            class="hover:text-luxury-gold transition-colors">Personal Styling Service</a></li>
                    <li><a href="#pricing" class="hover:text-luxury-gold transition-colors">Pricing</a></li>
                </ul>
            </div>

            <div class="md:col-span-3 space-y-4 text-xs font-sans font-light">
                <h4 class="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold">Contact</h4>
                <div class="space-y-3 text-gray-400">
                    <a href="tel:0434363874"
                        class="flex items-center gap-2.5 hover:text-luxury-gold transition-colors block">
                        <svg class="w-4 h-4 text-luxury-gold flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>00417829971</span>
                    </a>
                    <a href="mailto:enquiries@jsstaging.com.au"
                        class="flex items-center gap-2.5 hover:text-luxury-gold transition-colors block">
                        <svg class="w-4 h-4 text-luxury-gold flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>info@jsstaging.com.au</span>
                    </a>
                    <div class="flex items-center gap-2.5">
                        <svg class="w-4 h-4 text-luxury-gold flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Melbourne, VIC</span>
                    </div>
                </div>
            </div>

            <div class="md:col-span-3 space-y-4">
                <h4 class="font-display text-xs font-bold uppercase tracking-widest text-luxury-gold">Follow Us</h4>
                <div class="flex items-center gap-5 pt-4">
                    <a href="https://www.facebook.com/people/Js-Staging/61586566207572/?rdid=SCQtaNpGwJPdRCqw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PWwFViVsw%2F"
                        target="_blank" rel="noreferrer"
                        class="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 group">
                        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/js.staging/" target="_blank" rel="noreferrer"
                        class="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 group">
                        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>

        <div
            class="max-w-6xl mx-auto py-6 border-b border-gray-800/60 flex flex-col md:flex-row md:items-center justify-between text-xs text-gray-400 font-sans">
            <span class="font-display font-semibold uppercase tracking-wider text-luxury-gold mb-2 md:mb-0">Service
                Areas:</span>


            <div class="flex flex-wrap gap-x-3 gap-y-2 text-gray-300 font-medium">
                <span>Craigieburn</span><span>•</span>
                <span>Mickleham</span><span>•</span>
                <span>Donnybrook</span><span>•</span>
                <span>Wollert</span><span>•</span>
                <span>Epping</span><span>•</span>
                <span>Greenvale</span><span>•</span>
                <span>Mernda</span><span>•</span>
                <span>Pascoe Vale South</span> <span>•</span>
                <span>Strathmore</span><span>•</span>
                <span>Essendon</span><span>•</span>
                <span>Moonee Ponds</span><span>•</span>
                <span>Reservoir</span><span>•</span>
                <span>Preston</span><span>•</span>
                <span>Coburg</span><span>•</span>


            </div>
        </div>

        <div
            class="max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-display">
            <span>© 2026 JS Staging. All rights reserved.</span>
            <div class="flex gap-4 mt-4 sm:mt-0">
                <span class="hover:text-luxury-gold cursor-pointer transition-colors">Privacy Policy</span>
                <span>•</span>
                <span class="hover:text-luxury-gold cursor-pointer transition-colors">Terms</span>
            </div>
        </div>
    </footer>
    <!-- ============================================ -->
    <!-- QUOTE MODAL (moved from header) -->
    <!-- ============================================ -->


    <!-- ============================================ -->
    <!-- FLOATING QUOTES PANEL -->
    <!-- ============================================ -->
    <div id="floating-panel" class="fixed bottom-6 right-6 z-40 hidden">
        <div class="relative">
            <button onclick="toggleQuotesPanel()"
                class="flex items-center gap-2 bg-luxury-charcoal text-luxury-cream border-2 border-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal px-4 py-3 shadow-2xl font-display uppercase tracking-widest text-xs font-bold transition-all duration-300">
                <svg class="w-4 h-4 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span id="quote-count">Quotes (0)</span>
            </button>
            <div id="quotes-panel"
                class="absolute bottom-16 right-0 w-[300px] sm:w-[350px] bg-white shadow-2xl border border-gray-100 p-6 flex flex-col gap-4 border-t-4 border-luxury-gold hidden">
                <div class="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span class="font-display font-bold text-xs uppercase tracking-wider">Recent Quotes</span>
                    <button onclick="toggleQuotesPanel()" class="text-gray-400 hover:text-luxury-charcoal">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div id="quotes-list" class="space-y-3 max-h-[250px] overflow-y-auto"></div>
            </div>
        </div>
    </div>

    <!-- ============================================ -->
    <!-- SCRIPTS (all your JavaScript) -->
    <!-- ============================================ -->
    <script>
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
                input.addEventListener('change', function (e) {
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
        jQuery(document).ready(function ($) {
            // Use Gravity Forms' built-in events
            $(document).on('gform_post_render', function (event, formId) {
                if (formId === 5) {
                    // Add custom validation without breaking GF
                    $('#gform_5').on('submit', function (e) {
                        var isValid = true;
                        var firstError = null;

                        $(this).find('.gfield_contains_required input, .gfield_contains_required select, .gfield_contains_required textarea').each(function () {
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
            setTimeout(function () {
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
            setTimeout(function () {
                // If the user is still on the page (mailto didn't open anything)
                if (document.hasFocus()) {
                    var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) +
                        '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
                    window.open(gmailLink, '_blank');
                }
            }, 600);
        }
