/**
 * Mahallu Shop - Interactive Application JavaScript
 * Brand: Mahallu Shop BY: RAJIBA (Bandung)
 * WhatsApp CS: 0857-2345-065 (https://wa.me/628572345065)
 */

document.addEventListener('DOMContentLoaded', () => {
  const WA_NUMBER = '628572345065';

  // Helper function to build dynamic WhatsApp URL
  function buildWaUrl(productName = '', size = '') {
    let message = '';
    if (productName) {
      const sizeText = size ? ` (Ukuran: ${size})` : '';
      message = `Halo Mahallu Shop! Saya tertarik dengan produk "${productName}"${sizeText}, apakah masih tersedia?`;
    } else {
      message = `Halo Mahallu Shop! Saya lihat katalognya dan tertarik dengan koleksinya, boleh minta info lebih lanjut?`;
    }
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
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
  // 2. PRODUCT DATA (4 PRISTINE MAHALLU SHOP INSTAGRAM PRODUCTS WITH EXACT USER PRICES & PHOTOS)
  // --------------------------------------------------------------------------
  const products = [
    {
      id: 'prod-annisa-full',
      title: 'Annisa Syar\'i Set Maroon',
      category: 'syari',
      categoryLabel: 'Set Syar\'i',
      price: 'Rp 160.999',
      material: 'Bahan Premium Ceruty Armany & Sulam Tangan Exquisite',
      image: 'assets/prod-annisa-maroon-model.jpg',
      badgeClass: 'syari',
      desc: 'Annisa by Mahallu shop — Set Gamis Syar\'i mewah warna deep maroon dengan aplikasi sulam bunga anggun di khimar panjang & manset lengan. Busui friendly.'
    },
    {
      id: 'prod-yasmin-tara',
      title: 'Yasmin Tara Gamis Brokat Soft Beige',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 160.999',
      material: 'Bahan Tile Brokat Etnik & Furing Katun Silk Adem',
      image: 'assets/prod-yasmin-tara-wa.jpg',
      badgeClass: 'gamis',
      desc: 'Yasmin Tara by Mahallu shop — Warnanya soft beige manis, brokatnya mewah & tidak gatal di kulit. Lengan puff modern dengan kerah Shanghai yang sangat pas untuk kondangan.'
    },
    {
      id: 'prod-karina-brown',
      title: 'Karina Gamis Outer Lace Espresso',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 117.000',
      material: 'Outer Tile Etnik Lace & Inner Ceruty Armany',
      image: 'assets/prod-karina-lace-brown-model.jpg',
      badgeClass: 'gamis',
      desc: 'Karina by Mahallu shop — Kalau kamu suka gamis yang kelihatan mewah tapi tetap elegan, Karina ini wajib dimiliki. Outer lace bermotif floral dengan warna cokelat espresso mewah.'
    },
    {
      id: 'prod-black-pearl',
      title: 'Gamis Exclusive Black Pearl',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 139.000',
      material: 'Bahan Exclusive Jetblack & Mutiara Shoulder Ruffle',
      image: 'assets/dress-black-pearl-model.jpg',
      badgeClass: 'gamis',
      desc: 'Gamis Exclusive Black Pearl — Dress warna hitam pekat eksklusif dengan hiasan mutiara di leher & pundak ruffle bergelombang. Memberikan siluet tinggi & sangat anggun untuk pesta malam.'
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

    catalogGrid.innerHTML = items.map(prod => `
      <div class="product-card" data-category="${prod.category}">
        <div class="product-thumb">
          <img src="${prod.image}" alt="${prod.title}" loading="lazy">
          <span class="category-pill ${prod.badgeClass}">${prod.categoryLabel}</span>
          <span class="hanging-price-tag">${prod.price}</span>
        </div>
        <div class="product-details">
          <h3 class="product-title">${prod.title}</h3>
          <p class="product-material">${prod.material}</p>
          <div class="product-actions">
            <a href="${buildWaUrl(prod.title)}" target="_blank" rel="noopener" class="btn-order-wa">
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
  // 3. QUICK VIEW MODAL LOGIC
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('quickViewModal');
  const modalCloseBtn = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const sizeBtns = document.querySelectorAll('.size-btn');

  let selectedSize = 'M';

  function openQuickView(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod || !modalOverlay) return;

    modalImage.src = prod.image;
    modalImage.alt = prod.title;
    modalCategory.textContent = prod.categoryLabel;
    modalTitle.textContent = prod.title;
    modalPrice.textContent = prod.price;
    modalDesc.textContent = prod.desc;

    // Reset selected size to M
    selectedSize = 'M';
    sizeBtns.forEach(b => {
      b.classList.toggle('selected', b.getAttribute('data-size') === 'M');
    });

    // Update Modal WA link
    updateModalWaBtn(prod.title);

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateModalWaBtn(title) {
    if (modalWaBtn) {
      modalWaBtn.href = buildWaUrl(title, selectedSize);
    }
  }

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.getAttribute('data-size');
      if (modalTitle) {
        updateModalWaBtn(modalTitle.textContent);
      }
    });
  });

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
  // 4. INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.about-card, .trust-card, .step-card, .testimonial-card, .hero-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }
});
