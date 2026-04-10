/* ============================================
   ZINTAGROW — STORE PAGE JS (store.js)
   Products data → products.js se aata hai
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SVG THUMBS (per product id) ── */
  const THUMBS = {
    'neobiz-theme': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="20" y="16" width="320" height="168" rx="12" fill="rgba(79,124,255,0.08)"/>
        <rect x="20" y="16" width="320" height="32" rx="12" fill="rgba(79,124,255,0.15)"/>
        <rect x="20" y="36" width="320" height="12" fill="rgba(79,124,255,0.1)"/>
        <circle cx="38" cy="32" r="5" fill="#ff5f56"/><circle cx="52" cy="32" r="5" fill="#ffbd2e"/><circle cx="66" cy="32" r="5" fill="#27c93f"/>
        <rect x="40" y="58" width="130" height="12" rx="6" fill="rgba(79,124,255,0.5)"/>
        <rect x="40" y="78" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.2)"/>
        <rect x="40" y="92" width="160" height="7" rx="3.5" fill="rgba(255,255,255,0.12)"/>
        <rect x="40" y="115" width="75" height="26" rx="13" fill="url(#sg1)"/>
        <rect x="180" y="52" width="140" height="110" rx="10" fill="rgba(155,95,255,0.12)" stroke="rgba(155,95,255,0.25)" stroke-width="1"/>
        <rect x="192" y="64" width="116" height="86" rx="6" fill="rgba(0,0,0,0.3)"/>
        <rect x="198" y="72" width="70" height="8" rx="4" fill="rgba(79,124,255,0.6)"/>
        <rect x="198" y="86" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
        <rect x="198" y="96" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
        <rect x="198" y="110" width="40" height="20" rx="10" fill="url(#sg1)" opacity="0.7"/>
        <defs><linearGradient id="sg1" x1="0" y1="0" x2="100%" y2="0"><stop offset="0%" stop-color="#4f7cff"/><stop offset="100%" stop-color="#9b5fff"/></linearGradient></defs>
      </svg>`,

    'portfoliox-theme': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="10" y="10" width="100" height="180" rx="16" fill="rgba(155,95,255,0.1)" stroke="rgba(155,95,255,0.2)" stroke-width="1"/>
        <rect x="18" y="24" width="84" height="10" rx="5" fill="rgba(155,95,255,0.4)"/>
        <rect x="18" y="40" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
        <rect x="18" y="70" width="74" height="36" rx="8" fill="rgba(155,95,255,0.15)"/>
        <rect x="18" y="114" width="34" height="34" rx="8" fill="rgba(79,124,255,0.2)"/>
        <rect x="58" y="114" width="34" height="34" rx="8" fill="rgba(255,123,53,0.2)"/>
        <rect x="122" y="10" width="228" height="180" rx="12" fill="rgba(15,15,30,0.6)" stroke="rgba(79,124,255,0.15)" stroke-width="1"/>
        <rect x="130" y="22" width="200" height="16" rx="8" fill="rgba(79,124,255,0.35)"/>
        <rect x="130" y="46" width="140" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
        <rect x="130" y="82" width="65" height="22" rx="11" fill="url(#sg2)"/>
        <rect x="130" y="116" width="200" height="64" rx="10" fill="rgba(79,124,255,0.06)" stroke="rgba(79,124,255,0.15)" stroke-width="1"/>
        <rect x="142" y="126" width="50" height="40" rx="6" fill="rgba(79,124,255,0.2)"/>
        <rect x="200" y="126" width="50" height="40" rx="6" fill="rgba(155,95,255,0.15)"/>
        <rect x="258" y="126" width="50" height="40" rx="6" fill="rgba(255,123,53,0.15)"/>
        <defs><linearGradient id="sg2" x1="0" y1="0" x2="100%" y2="0"><stop offset="0%" stop-color="#4f7cff"/><stop offset="100%" stop-color="#9b5fff"/></linearGradient></defs>
      </svg>`,

    'speedboost-pro': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="20" y="20" width="320" height="160" rx="12" fill="rgba(0,245,212,0.04)" stroke="rgba(0,245,212,0.1)" stroke-width="1"/>
        <rect x="40" y="36" width="90" height="10" rx="5" fill="rgba(0,245,212,0.5)"/>
        <rect x="40" y="54" width="130" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <path d="M240 130 A60 60 0 0 1 300 130" stroke="rgba(255,255,255,0.1)" stroke-width="12" fill="none"/>
        <path d="M240 130 A60 60 0 0 1 300 130" stroke="url(#spg)" stroke-width="12" fill="none" stroke-dasharray="95 188" stroke-dashoffset="-20"/>
        <text x="270" y="124" text-anchor="middle" fill="#00f5d4" font-size="16" font-weight="bold">98</text>
        <text x="270" y="140" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="8">SPEED SCORE</text>
        <rect x="40" y="92" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="92" width="160" height="6" rx="3" fill="rgba(0,245,212,0.4)"/>
        <rect x="40" y="106" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="106" width="172" height="6" rx="3" fill="rgba(79,124,255,0.5)"/>
        <rect x="40" y="120" width="180" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="120" width="145" height="6" rx="3" fill="rgba(155,95,255,0.5)"/>
        <defs><linearGradient id="spg" x1="0" y1="0" x2="100%" y2="0"><stop offset="0%" stop-color="#4f7cff"/><stop offset="100%" stop-color="#00f5d4"/></linearGradient></defs>
      </svg>`,

    'seo-master-toolkit': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <polyline points="40,150 80,130 120,120 160,95 200,85 240,60 280,50 320,40" stroke="url(#seog)" stroke-width="3" fill="none" stroke-linecap="round"/>
        <polygon points="40,150 80,130 120,120 160,95 200,85 240,60 280,50 320,40 320,160 40,160" fill="url(#seof)" opacity="0.12"/>
        <line x1="40" y1="160" x2="320" y2="160" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <circle cx="280" cy="50" r="6" fill="#ff7b35"/>
        <circle cx="280" cy="50" r="10" fill="rgba(255,123,53,0.3)"/>
        <rect x="28" y="28" width="82" height="42" rx="8" fill="rgba(255,123,53,0.12)" stroke="rgba(255,123,53,0.2)" stroke-width="1"/>
        <text x="69" y="46" text-anchor="middle" fill="#ff7b35" font-size="11" font-weight="bold">+312%</text>
        <text x="69" y="60" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="8">TRAFFIC BOOST</text>
        <defs>
          <linearGradient id="seog" x1="40" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#ff7b35"/><stop offset="100%" stop-color="#9b5fff"/></linearGradient>
          <linearGradient id="seof" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff7b35"/><stop offset="100%" stop-color="transparent"/></linearGradient>
        </defs>
      </svg>`,

    'convertkit-templates': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="20" y="16" width="320" height="168" rx="12" fill="rgba(79,124,255,0.05)"/>
        <rect x="30" y="52" width="200" height="50" rx="8" fill="rgba(79,124,255,0.1)" stroke="rgba(79,124,255,0.2)" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="130" y="82" text-anchor="middle" fill="rgba(79,124,255,0.6)" font-size="10">HERO SECTION</text>
        <rect x="240" y="52" width="90" height="50" rx="8" fill="rgba(155,95,255,0.1)" stroke="rgba(155,95,255,0.2)" stroke-width="1"/>
        <text x="285" y="82" text-anchor="middle" fill="rgba(155,95,255,0.6)" font-size="9">WIDGETS</text>
        <rect x="30" y="112" width="90" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <rect x="130" y="112" width="90" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
        <rect x="230" y="112" width="100" height="60" rx="8" fill="rgba(255,123,53,0.08)" stroke="rgba(255,123,53,0.15)" stroke-width="1"/>
        <rect x="38" y="120" width="74" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="38" y="132" width="55" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
      </svg>`,

    'zintacache-lite': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="20" y="20" width="320" height="160" rx="12" fill="rgba(79,124,255,0.04)"/>
        <rect x="20" y="20" width="70" height="160" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <rect x="28" y="36" width="54" height="8" rx="4" fill="rgba(79,124,255,0.4)"/>
        <rect x="28" y="52" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/>
        <rect x="28" y="64" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
        <rect x="100" y="20" width="240" height="160" rx="12" fill="rgba(15,15,30,0.5)"/>
        <rect x="108" y="32" width="120" height="10" rx="5" fill="rgba(79,124,255,0.5)"/>
        <rect x="108" y="84" width="220" height="50" rx="8" fill="rgba(0,245,212,0.06)" stroke="rgba(0,245,212,0.15)" stroke-width="1"/>
        <rect x="116" y="92" width="60" height="5" rx="2.5" fill="rgba(0,245,212,0.4)"/>
        <rect x="116" y="104" width="180" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="108" y="146" width="60" height="22" rx="11" fill="rgba(0,245,212,0.2)" stroke="rgba(0,245,212,0.3)" stroke-width="1"/>
        <text x="138" y="161" text-anchor="middle" fill="#00f5d4" font-size="9" font-weight="bold">ACTIVATE</text>
      </svg>`,

    'ai-tools': `
      <svg width="100%" height="100%" viewBox="0 0 360 200" fill="none">
        <rect x="20" y="20" width="320" height="160" rx="12" fill="rgba(79,124,255,0.04)"/>
        <rect x="20" y="20" width="70" height="160" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <rect x="28" y="36" width="54" height="8" rx="4" fill="rgba(79,124,255,0.4)"/>
        <rect x="28" y="52" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/>
        <rect x="28" y="64" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
        <rect x="100" y="20" width="240" height="160" rx="12" fill="rgba(15,15,30,0.5)"/>
        <rect x="108" y="32" width="120" height="10" rx="5" fill="rgba(79,124,255,0.5)"/>
        <rect x="108" y="84" width="220" height="50" rx="8" fill="rgba(0,245,212,0.06)" stroke="rgba(0,245,212,0.15)" stroke-width="1"/>
        <rect x="116" y="92" width="60" height="5" rx="2.5" fill="rgba(0,245,212,0.4)"/>
        <rect x="116" y="104" width="180" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="108" y="146" width="60" height="22" rx="11" fill="rgba(0,245,212,0.2)" stroke="rgba(0,245,212,0.3)" stroke-width="1"/>
        <text x="138" y="161" text-anchor="middle" fill="#00f5d4" font-size="9" font-weight="bold">ACTIVATE</text>
      </svg>`,
  };

  const BADGE_CLASS = { hot:'badge-hot', new:'badge-new', sale:'badge-sale', free:'badge-free', popular:'badge-popular' };

  /* ── RENDER PRODUCTS ── */
  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid || typeof PRODUCTS === 'undefined') return;

    grid.innerHTML = PRODUCTS.map((p, idx) => {
      const stars      = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);
      const priceHtml  = p.price === 0
        ? `<span class="price-free">FREE</span>`
        : `<span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
           ${p.originalPrice ? `<span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}`;

      const cartStyle  = p.price === 0
        ? `style="background:linear-gradient(135deg,#00f5d4,#0d9488);box-shadow:0 4px 16px rgba(0,245,212,0.25)"` : '';
      const cartText   = p.price === 0 ? 'Download' : 'Add to Cart';

      const previewLabel = p.category.includes('plugin')   ? 'View Plugin ↗'  :
                           p.category.includes('seo')      ? 'View Preview ↗' :
                           p.category.includes('template') ? 'Live Preview ↗' : 'Live Preview ↗';

      return `
        <div class="product-card reveal" data-cat="${p.category}" data-price="${p.price}" data-sales="${p.sales}" data-index="${idx}">
          <div class="product-badge ${BADGE_CLASS[p.badge] || ''}">${p.badgeText}</div>
          <button class="wishlist-btn" data-name="${p.name}" onclick="toggleWishlist(this,'${p.name}')">🤍</button>

          <div class="product-thumb" style="background:${p.thumbBg};">
            ${THUMBS[p.id] || ''}
            <div class="product-thumb-overlay">
              <a href="${p.previewUrl}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-btn prim">${previewLabel}</a>
              <a href="${p.detailsUrl}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="preview-btn sec">Details</a>
            </div>
          </div>

          <div class="product-body">
            <div class="product-category">${p.categoryLabel}</div>
            <div class="product-name">${p.name}</div>
            <p class="product-desc">${p.desc}</p>
            <div class="product-meta">
              ${p.meta.map(m => `<span class="product-meta-item">${m}</span>`).join('')}
            </div>
            <div class="product-stars">${stars} <span>(${p.reviews} reviews)</span></div>
          </div>

          <div class="product-footer">
            <div class="product-price">${priceHtml}</div>
            <button class="add-to-cart" ${cartStyle}
              onclick="addToCart(this,'${p.name}','${p.category.split(' ')[0]}',${p.price},'${p.icon}')">
              ${cartText}
            </button>
          </div>
        </div>`;
    }).join('');

    const countEl = document.getElementById('productCount');
    if (countEl) countEl.textContent = PRODUCTS.length + ' products';

    // animate cards in
    document.querySelectorAll('.product-card.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 80 + i * 70);
    });
  }

  /* ── BUNDLE LINKS ── */
  function initBundleLinks() {
    if (typeof BUNDLE === 'undefined') return;
    const previewBtn = document.getElementById('bundlePreviewBtn');
    const detailsBtn = document.getElementById('bundleDetailsBtn');
    if (previewBtn) previewBtn.href = BUNDLE.previewUrl;
    if (detailsBtn) detailsBtn.href = BUNDLE.detailsUrl;
  }

  /* ── CART ── */
  let cart = JSON.parse(localStorage.getItem('zg-cart') || '[]');
  const saveCart = () => localStorage.setItem('zg-cart', JSON.stringify(cart));

  window.addToCart = function(btn, name, type, price, icon) {
    if (cart.find(i => i.name === name)) {
      showToast('⚠️ ' + name + ' pehle se cart mein hai!');
      openCart(); return;
    }
    cart.push({ name, type, price, icon });
    saveCart();
    const orig = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('added'); }, 2000);
    updateCartUI();
    showToast('🛒 ' + name + ' add ho gaya!');
  };

  window.removeFromCart = function(idx) {
    cart.splice(idx, 1); saveCart(); updateCartUI();
  };

  function updateCartUI() {
    const count   = cart.length;
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const footEl  = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    const waBtn   = document.getElementById('cartWhatsapp');

    if (countEl) { countEl.textContent = count; countEl.classList.toggle('show', count > 0); }
    if (!itemsEl) return;

    if (count === 0) {
      itemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛍️</div><div style="font-weight:600">Cart khali hai!</div><div style="font-size:0.78rem;margin-top:4px">Koi product add karein</div></div>`;
      if (footEl) footEl.style.display = 'none';
      return;
    }

    itemsEl.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-type">${capitalize(item.type)}</div>
          <div class="cart-item-price">${item.price === 0 ? 'FREE' : '₹' + item.price.toLocaleString('en-IN')}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
      </div>`).join('');

    const total = cart.reduce((s, i) => s + i.price, 0);
    if (totalEl) totalEl.textContent = total === 0 ? 'FREE' : '₹' + total.toLocaleString('en-IN');
    if (footEl)  footEl.style.display = 'block';
    if (waBtn) {
      const lines = cart.map(i => `• ${i.name} (${i.price === 0 ? 'FREE' : '₹'+i.price})`).join('\n');
      const msg   = encodeURIComponent(`Hii Akash! Main ye products kharidna chahta hoon:\n\n${lines}\n\nTotal: ${total === 0 ? 'FREE' : '₹'+total}\n\nPlease payment details send karein.`);
      waBtn.href  = `https://wa.me/919693641958?text=${msg}`;
    }
  }

  window.openCart  = () => { document.getElementById('cartDrawer')?.classList.add('open'); document.getElementById('cartOverlay')?.classList.add('show'); document.body.style.overflow = 'hidden'; };
  window.closeCart = () => { document.getElementById('cartDrawer')?.classList.remove('open'); document.getElementById('cartOverlay')?.classList.remove('show'); document.body.style.overflow = ''; };

  window.checkout = function() {
    if (!cart.length) return;
    const total = cart.reduce((s,i) => s+i.price, 0);
    alert(`✅ Order Confirm!\n\n${cart.map(i=>'• '+i.name).join('\n')}\n\nTotal: ${total===0?'FREE':'₹'+total}\n\nAapko 24 ghante mein download link milega! 🚀`);
    cart = []; saveCart(); updateCartUI(); closeCart();
  };

  /* ── TOAST ── */
  let toastTimer;
  window.showToast = function(msg) {
    let t = document.getElementById('zgToast');
    if (!t) { t = document.createElement('div'); t.id = 'zgToast'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    clearTimeout(toastTimer);
    t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  };

  /* ── FILTERS ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });
  document.getElementById('storeSearch')?.addEventListener('input', applyFilters);
  document.getElementById('storeSort')?.addEventListener('change', applyFilters);

  function applyFilters() {
    const filter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const search = (document.getElementById('storeSearch')?.value || '').toLowerCase().trim();
    const sort   = document.getElementById('storeSort')?.value || 'default';
    const grid   = document.getElementById('productsGrid');
    const cards  = [...document.querySelectorAll('.product-card')];

    if (sort === 'price-asc')  cards.sort((a,b) => +a.dataset.price - +b.dataset.price);
    else if (sort === 'price-desc') cards.sort((a,b) => +b.dataset.price - +a.dataset.price);
    else if (sort === 'popular')    cards.sort((a,b) => +b.dataset.sales - +a.dataset.sales);
    else cards.sort((a,b) => +a.dataset.index - +b.dataset.index);

    let visible = 0;
    cards.forEach(card => {
      grid.appendChild(card);
      const cat  = (card.dataset.cat || '').toLowerCase();
      const name = (card.querySelector('.product-name')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.product-desc')?.textContent || '').toLowerCase();
      const ok   = (filter === 'all' || cat.includes(filter)) && (!search || name.includes(search) || desc.includes(search));
      card.style.display   = ok ? '' : 'none';
      if (ok) { card.style.animation = 'fadeUp 0.35s ease both'; visible++; }
    });

    let empty = document.getElementById('productsEmpty');
    if (visible === 0) {
      if (!empty) {
        empty = document.createElement('div');
        empty.id = 'productsEmpty'; empty.className = 'products-empty';
        empty.innerHTML = `<div class="products-empty-icon">🔍</div><h3>Koi product nahi mila</h3><p>Filter change karein ya search clear karein</p>`;
        grid.appendChild(empty);
      }
      empty.style.display = '';
    } else if (empty) empty.style.display = 'none';

    const countEl = document.getElementById('productCount');
    if (countEl) countEl.textContent = visible + ' products';
  }

  /* ── WISHLIST ── */
  let wishlist = JSON.parse(localStorage.getItem('zg-wishlist') || '[]');
  window.toggleWishlist = function(btn, name) {
    const idx = wishlist.indexOf(name);
    if (idx === -1) { wishlist.push(name); btn.textContent = '❤️'; btn.classList.add('active'); showToast('❤️ Wishlist mein add hua!'); }
    else { wishlist.splice(idx,1); btn.textContent = '🤍'; btn.classList.remove('active'); showToast('💔 Wishlist se remove hua'); }
    localStorage.setItem('zg-wishlist', JSON.stringify(wishlist));
  };

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ── INIT ── */
  renderProducts();
  initBundleLinks();
  // restore wishlist after render
  setTimeout(() => {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      if (wishlist.includes(btn.dataset.name)) { btn.textContent = '❤️'; btn.classList.add('active'); }
    });
  }, 200);
  updateCartUI();

});
