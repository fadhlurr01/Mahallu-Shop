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
  // 2. PRODUCT DATA (4 PRISTINE MAHALLU SHOP INSTAGRAM PRODUCTS)
  // --------------------------------------------------------------------------
  const products = [
    {
      id: 'prod-annisa-full',
      title: 'Annisa Syar\'i Set Maroon',
      category: 'syari',
      categoryLabel: 'Set Syar\'i',
      price: 'Rp 285.000',
      material: 'Bahan Premium Ceruty Armany & Sulam Tangan Exquisite',
      image: 'assets/prod-annisa-maroon-full.jpg',
      badgeClass: 'syari',
      desc: 'Annisa by Mahallu shop — Set Gamis Syar\'i mewah warna deep maroon dengan aplikasi sulam bunga anggun di khimar panjang & manset lengan. Menggunakan kancing depan ramah busui.'
    },
    {
      id: 'prod-yasmin-tara',
      title: 'Yasmin Tara Gamis Brokat Soft Beige',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 265.000',
      material: 'Bahan Tile Brokat Etnik & Furing Katun Silk Adem',
      image: 'assets/prod-yasmin-tara.jpg',
      badgeClass: 'gamis',
      desc: 'Yasmin Tara by Mahallu shop — Warnanya soft beige manis, brokatnya mewah & tidak gatal di kulit. Lengan puff modern dengan kerah Shanghai yang sangat pas untuk kondangan.'
    },
    {
      id: 'prod-karina-brown',
      title: 'Karina Gamis Outer Lace Espresso',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 275.000',
      material: 'Outer Tile Etnik Lace & Inner Ceruty Armany',
      image: 'assets/prod-karina-lace-brown.jpg',
      badgeClass: 'gamis',
      desc: 'Karina by Mahallu shop — Kalau kamu suka gamis yang kelihatan mewah tapi tetap elegan, Karina ini wajib dimiliki. Outer lace bermotif floral dengan warna cokelat espresso mewah.'
    },
    {
      id: 'prod-black-pearl',
      title: 'Gamis Exclusive Black Pearl',
      category: 'gamis',
      categoryLabel: 'Gamis & Dress',
      price: 'Rp 255.000',
      material: 'Bahan Exclusive Jetblack & Mutiara Shoulder Ruffle',
      image: 'assets/dress-black-pearl.jpg',
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
              <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
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
