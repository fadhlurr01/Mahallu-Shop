/**
 * Mahallu Shop - Interactive Application JavaScript
 * Brand: Mahallu Shop BY: RAJIBA (Bandung)
 * Official WhatsApp CS / Catalog: https://wa.me/c/6285723450656
 */

document.addEventListener('DOMContentLoaded', () => {
  const WA_NUMBER = '6285723450656';
  const WA_CATALOG_URL = 'https://wa.me/c/6285723450656';

  // Helper function to build dynamic WhatsApp URL
  function buildWaUrl(productName = '', size = '', price = '') {
    if (productName) {
      const sizeText = size ? ` (Ukuran: ${size})` : '';
      const priceText = price ? ` - ${price}` : '';
      const message = `Halo Mahallu Shop! Saya tertarik dengan produk "${productName}"${sizeText}${priceText}, apakah masih tersedia?`;
      return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    } else {
      return WA_CATALOG_URL;
    }
  }

  // Official WhatsApp Brand SVG Path
  const WA_SVG_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.932 9.932 0 001.356 5.02L2 22l5.14-1.344a9.957 9.957 0 004.872 1.28h.005c5.507 0 9.99-4.479 9.992-9.985A9.95 9.95 0 0012.012 2zm5.834 14.498c-.247.692-1.242 1.306-1.996 1.472-.516.113-1.19.16-3.468-.781-2.914-1.205-4.786-4.17-4.933-4.364-.145-.195-1.195-1.593-1.195-3.038 0-1.445.756-2.155 1.025-2.449.27-.294.588-.368.784-.368.196 0 .392.002.563.01.182.007.427-.069.667.507.247.592.834 2.035.908 2.183.073.148.122.32.025.513-.098.196-.148.318-.295.49-.147.172-.309.385-.441.517-.147.147-.301.308-.13.6.172.293.766 1.264 1.644 2.046 1.13 1.006 2.083 1.317 2.376 1.464.294.147.466.123.638-.073.172-.196.736-.857.933-1.15.196-.294.392-.245.662-.147.27.098 1.716.809 2.01 1.956.294.147.49.294.564.417.073.123.073.71-.174 1.402z"/></svg>`;

  // --------------------------------------------------------------------------
  // 1. MOBILE NAV DRAWER TOGGLE
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-drawer .nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. PRODUCT DATA
  // --------------------------------------------------------------------------
  const products = [
    {
      id: 'prod-annisa-full',
      title: 'Annisa Syar\'i Set Maroon',
      category: 'syari',
      categoryLabel: 'Set Syar\'i',
      originalPrice: 'Rp 350.000',
      discountPrice: 'Rp 160.999',
      discountBadge: '-54%',
      sizes: [
        { size: 'M', originalPrice: 'Rp 350.000', discountPrice: 'Rp 160.999', badge: '-54%' },
        { size: 'L', originalPrice: 'Rp 350.000', discountPrice: 'Rp 165.999', badge: '-53%' },
        { size: 'XL', originalPrice: 'Rp 350.000', discountPrice: 'Rp 175.999', badge: '-50%' }
      ],
      material: 'Bahan Premium Ceruty Armany & Sulam Tangan Exquisite',
      image: 'assets/prod-annisa-exact-model.jpg',
      badgeClass: 'syari',
      desc: 'Annisa by Mahallu shop — Set Gamis Syar\'i mewah warna deep maroon dengan aplikasi sulam bunga anggun di khimar panjang & manset lengan. Busui friendly.'
    },
    {
      id: 'prod-yasmin-tara',
      title: 'Yasmin Tara Gamis Brokat Soft Beige',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      originalPrice: 'Rp 250.000',
      discountPrice: 'Rp 117.000',
      discountBadge: '-53%',
      sizes: [
        { size: 'M', originalPrice: 'Rp 250.000', discountPrice: 'Rp 117.000', badge: '-53%' },
        { size: 'XL', originalPrice: 'Rp 275.000', discountPrice: 'Rp 128.700', badge: '-53%' },
        { size: 'XXL', originalPrice: 'Rp 300.000', discountPrice: 'Rp 132.600', badge: '-56%' }
      ],
      material: 'Bahan Tile Brokat Etnik & Furing Katun Silk Adem',
      image: 'assets/prod-yasmin-tara-hd.jpg',
      badgeClass: 'gamis',
      desc: 'Yasmin Tara by Mahallu shop — Soft beige manis, brokat mewah & furing adem. Sangat cocok dipadukan dengan hijab voal untuk kondangan.'
    },
    {
      id: 'prod-karina-brown',
      title: 'Karina Gamis Outer Lace Espresso',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      originalPrice: 'Rp 250.000',
      discountPrice: 'Rp 117.000',
      discountBadge: '-53%',
      sizes: [
        { size: 'M', originalPrice: 'Rp 250.000', discountPrice: 'Rp 117.000', badge: '-53%' },
        { size: 'XL', originalPrice: 'Rp 275.000', discountPrice: 'Rp 128.700', badge: '-53%' }
      ],
      material: 'Outer Tile Etnik Lace & Inner Ceruty Armany',
      image: 'assets/prod-karina-exact-model.jpg',
      badgeClass: 'gamis',
      desc: 'Karina by Mahallu shop — Tampilan mewah dan elegan dengan outer lace cokelat espresso yang memberikan siluet tinggi & anggun.'
    },
    {
      id: 'prod-black-pearl',
      title: 'Gamis Exclusive Black Pearl',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      originalPrice: 'Rp 159.500',
      discountPrice: 'Rp 143.550',
      discountBadge: '-10%',
      sizes: [
        { size: 'S', originalPrice: 'Rp 159.500', discountPrice: 'Rp 143.550', badge: '-10%' },
        { size: 'M', originalPrice: 'Rp 159.500', discountPrice: 'Rp 143.550', badge: '-10%' },
        { size: 'L', originalPrice: 'Rp 159.500', discountPrice: 'Rp 143.550', badge: '-10%' },
        { size: 'XL', originalPrice: 'Rp 159.500', discountPrice: 'Rp 143.550', badge: '-10%' }
      ],
      material: 'Bahan Exclusive Jetblack & Mutiara Shoulder Ruffle',
      image: 'assets/prod-black-pearl-exact-model.jpg',
      badgeClass: 'gamis',
      desc: 'Exclusive Black Pearl by Mahallu shop — Warna hitam pekat elegan dengan aksen mutiara & ruffle di bahu. Sangat mewah untuk acara pesta malam.'
    },
    {
      id: 'prod-annisa-white',
      title: 'Annisa Syar\'i Set Pure White',
      category: 'syari',
      categoryLabel: 'Set Syar\'i',
      originalPrice: 'Rp 265.000',
      discountPrice: 'Rp 164.999',
      discountBadge: '-38%',
      sizes: [
        { size: 'S', originalPrice: 'Rp 265.000', discountPrice: 'Rp 164.999', badge: '-38%' },
        { size: 'M', originalPrice: 'Rp 265.000', discountPrice: 'Rp 170.999', badge: '-35%' },
        { size: 'L', originalPrice: 'Rp 265.000', discountPrice: 'Rp 175.999', badge: '-34%' },
        { size: 'XL', originalPrice: 'Rp 265.000', discountPrice: 'Rp 185.999', badge: '-30%' }
      ],
      material: 'Bahan Premium Ceruty Armany & Sulam Perak Exquisite',
      image: 'assets/prod-annisa-white.png',
      badgeClass: 'syari',
      desc: 'Annisa Syar\'i Set Pure White by Mahallu shop — Warna putih suci nan anggun dengan khimar senada & aplikasi sulam perak mewah pada lengan dan klim bawah.'
    },
    {
      id: 'prod-zahra-tunik-pink',
      title: 'Zahra Tunik & Lace Set Dusty Pink',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      originalPrice: 'Rp 250.000',
      discountPrice: 'Rp 117.000',
      discountBadge: '-53%',
      sizes: [
        { size: 'M', originalPrice: 'Rp 250.000', discountPrice: 'Rp 117.000', badge: '-53%' },
        { size: 'L', originalPrice: 'Rp 275.000', discountPrice: 'Rp 128.700', badge: '-53%' },
        { size: 'XL', originalPrice: 'Rp 300.000', discountPrice: 'Rp 140.400', badge: '-53%' }
      ],
      material: 'Bahan Brokat Floral Lace & Celana Soft Crepe Adem',
      image: 'assets/prod-zahra-tunik-pink.png',
      badgeClass: 'gamis',
      desc: 'Zahra Tunik Set Dusty Pink by Mahallu shop — Set Tunik & Celana warna dusty pink dengan lapisan brokat floral lace asimetris yang sangat feminin & manis.'
    }
  ];

  const catalogGrid = document.getElementById('catalogGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');

  function renderProducts(items) {
    if (!catalogGrid) return;

    if (items.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--ink-soft);">
          <p style="font-size: 1.2rem; font-family: var(--font-display); margin-bottom: 0.5rem;">Produk tidak ditemukan</p>
          <p style="font-size: 0.92rem;">Coba cari kata kunci lain atau pilih filter kategori diatas.</p>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = items.map((prod) => `
      <div class="product-card" data-category="${prod.category}">
        <div class="product-thumb">
          <img src="${prod.image}" alt="${prod.title}">
          <span class="category-pill ${prod.badgeClass}">${prod.categoryLabel}</span>
          <span class="shopee-ribbon-badge">${prod.discountBadge} DISKON</span>
        </div>
        <div class="product-details">
          <h3 class="product-title">${prod.title}</h3>
          <p class="product-material">${prod.material}</p>
          
          <!-- Shopee Style Price Anchoring -->
          <div class="product-price-section">
            <div class="price-anchoring-box">
              <span class="original-price-coret">${prod.originalPrice}</span>
              <span class="discount-price-highlight">${prod.discountPrice}</span>
              <span class="shopee-discount-badge">${prod.discountBadge}</span>
            </div>
          </div>

          <div class="product-actions">
            <a href="${buildWaUrl(prod.title, prod.sizes[0].size, prod.discountPrice)}" target="_blank" rel="noopener" class="btn-order-wa">
              ${WA_SVG_ICON}
              Order via WA
            </a>
            <button class="btn-quickview" data-id="${prod.id}" aria-label="Lihat detail ${prod.title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Rebind Quick View listeners
    document.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-id');
        openQuickView(prodId);
      });
    });
  }

  // Initial Render
  renderProducts(products);

  // Category Filtering Logic
  let currentCategory = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      filterAndSearch();
    });
  });

  // Search Logic
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterAndSearch();
    });
  }

  function filterAndSearch() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filtered = products.filter(prod => {
      const matchCat = (currentCategory === 'all') || (prod.category === currentCategory);
      const matchSearch = (prod.title.toLowerCase().includes(query) || prod.material.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });
    renderProducts(filtered);
  }

  // --------------------------------------------------------------------------
  // 3. QUICK VIEW MODAL LOGIC WITH DYNAMIC SIZE PRICE ANCHORING
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('quickViewModal');
  const modalCloseBtn = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPriceBox = document.getElementById('modalPriceBox');
  const modalDesc = document.getElementById('modalDesc');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const modalSizeOptions = document.getElementById('modalSizeOptions');

  let currentModalProd = null;
  let selectedSizeObj = null;

  function openQuickView(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod || !modalOverlay) return;

    currentModalProd = prod;
    modalImage.src = prod.image;
    modalImage.alt = prod.title;
    modalCategory.textContent = prod.categoryLabel;
    modalTitle.textContent = prod.title;
    modalDesc.textContent = prod.desc;

    // Render Size Option Buttons dynamically with price info
    renderSizeOptions(prod);

    // Default select first size
    selectSize(prod.sizes[0]);

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderSizeOptions(prod) {
    if (!modalSizeOptions) return;
    modalSizeOptions.innerHTML = prod.sizes.map((s, idx) => `
      <button class="size-btn ${idx === 0 ? 'selected' : ''}" data-size="${s.size}">
        <span>Size ${s.size}</span>
        <span class="size-price-sub">${s.discountPrice}</span>
      </button>
    `).join('');

    // Rebind size click events
    modalSizeOptions.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sz = btn.getAttribute('data-size');
        const sObj = prod.sizes.find(item => item.size === sz);
        if (sObj) {
          modalSizeOptions.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectSize(sObj);
        }
      });
    });
  }

  function selectSize(sObj) {
    selectedSizeObj = sObj;
    if (modalPriceBox) {
      modalPriceBox.innerHTML = `
        <div class="price-anchoring-box" style="font-size: 1.1rem;">
          <span class="original-price-coret" style="font-size: 1rem;">${sObj.originalPrice}</span>
          <span class="discount-price-highlight" style="font-size: 1.6rem;">${sObj.discountPrice}</span>
          <span class="shopee-discount-badge" style="font-size: 0.82rem; padding: 0.25rem 0.65rem;">${sObj.badge}</span>
        </div>
      `;
    }
    if (modalWaBtn && currentModalProd) {
      modalWaBtn.href = buildWaUrl(currentModalProd.title, sObj.size, sObj.discountPrice);
    }
  }

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // --------------------------------------------------------------------------
  // 4. FAQ ACCORDION INTERACTION LOGIC
  // --------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-question');
      if (!header) return;

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items for clean accordion effect
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isOpen) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    });
  }

  initFaqAccordion();

  // --------------------------------------------------------------------------
  // 5. INTERSECTION OBSERVER FOR SECTION HEADERS & MAJOR BLOCKS
  // --------------------------------------------------------------------------
  function initScrollReveals() {
    const targetSelectors = [
      '.section-header',
      '.hero-content',
      '.hero-card-wrapper',
      '.story-content',
      '.story-visual-wrapper',
      '.size-guide-card',
      '.faq-accordion',
      '.bank-trust-banner',
      '.cta-banner-card'
    ];

    targetSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('scroll-reveal');
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
    }
  }

  initScrollReveals();

  // --------------------------------------------------------------------------
  // 6. DYNAMIC SCROLLSPY NAVIGATION TRACKER (LINE FOLLOWS SCROLL)
  // --------------------------------------------------------------------------
  function initScrollspy() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link, .mobile-drawer .nav-link');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
      let currentSectionId = '';
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  initScrollspy();
});

