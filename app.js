/* ======================================================
   ZINA KNIT — E-Commerce Application & Customizer Engine
   ====================================================== */

// Products Database
const PRODUCTS = [
  {
    id: 'tote-caramel-luxury',
    name: 'Шопер из Рафии «Медовая Карамель»',
    category: 'tote',
    price: 8500,
    badge: 'Хит продаж',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_tote_caramel_1790529468951.jpg',
    desc: 'Вместительный шопер со съёмными ручками из натуральной итальянской кожи. Плотная вязка крючком.',
    material: '100% Натуральная рафия Isapie, Итальянская кожа',
    size: '38 x 30 x 14 см',
    rating: 5
  },
  {
    id: 'bucket-natural-wood',
    name: 'Ведерко «Натуральный Песок» с Деревянной Ручкой',
    category: 'bucket',
    price: 7200,
    badge: 'Бестселлер',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_bucket_natural_1790529483066.jpg',
    desc: 'Округлая сумка-ведерко с кольцевыми ручками из массива бука и встроенным льняным мешочком на утяжке.',
    material: 'Натуральная рафия, Массив дерева, 100% Лён',
    size: '22 x 25 x 18 см',
    rating: 4.9
  },
  {
    id: 'clutch-terracotta-fringe',
    name: 'Терракотовый Клатч с Пышной Бахромой',
    category: 'clutch',
    price: 6800,
    badge: 'Новинка',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_clutch_terracotta_1790529855066.jpg',
    desc: 'Вечерний клатч глубокого терракотового оттенка с длинной развивающейся бахромой ручной работы и пуговицей из дерева.',
    material: 'Окрашенная натуральная рафия, Деревянный пуговичный замок',
    size: '28 x 20 см (бахрома 18 см)',
    rating: 4.8
  },
  {
    id: 'sunhat-clutch-set',
    name: 'Комплект «Летний Бриз»: Шляпа + Клатч-кроссбоди',
    category: 'hat',
    price: 9400,
    badge: 'Комплект',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/raffia_hat_accessory_1790529501546.jpg',
    desc: 'Ажурная шляпа с широкими полями и гармонирующий клатч на длинном плетеном ремешке.',
    material: '100% Рафия Madagascar Premium',
    size: 'Шляпа: 56-58 см (регулируемый размер), Клатч: 24x16 см',
    rating: 5
  },
  {
    id: 'clutch-black-gold',
    name: 'Шоулдер-бэг «Вечерний Оникс» с Золотыми Бусинами',
    category: 'clutch',
    price: 7900,
    badge: 'Эксклюзив',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_black_gold_1790529870119.jpg',
    desc: 'Элегантная черная сумка через плечо с золотой фурнитурой, латунными бусинами и пышными кисточками.',
    material: 'Черная матовая пряжа, Латунный замок-фермуар, Золотистые бусины',
    size: '26 x 18 x 8 см',
    rating: 4.9
  },
  {
    id: 'tote-madagascar-classic',
    name: 'Классический Шопер «Мадагаскар»',
    category: 'tote',
    price: 8900,
    badge: 'Классика',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/hero_raffia_bag_1790529454496.jpg',
    desc: 'Премиальный трапециевидный шопер натурального соломенного цвета с гладкими кожаными ручками.',
    material: '100% Натуральная рафия, Натуральная кожа',
    size: '42 x 32 x 15 см',
    rating: 4.9
  },
  {
    id: 'clutch-boho-crossbody',
    name: 'Кроссбоди «Бохо-Терракота»',
    category: 'clutch',
    price: 6500,
    badge: '',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_clutch_terracotta_1790529855066.jpg',
    desc: 'Удобная сумочка через плечо на витом хлопковом шнуре для летних прогулок и путешествий.',
    material: 'Рафия Isapie, витой шнур',
    size: '24 x 18 см',
    rating: 4.7
  },
  {
    id: 'hat-openwork-panama',
    name: 'Ажурная Панама из Рафии',
    category: 'hat',
    price: 5400,
    badge: 'Тренды',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/raffia_hat_accessory_1790529501546.jpg',
    desc: 'Легкая дыхающая панама с нежным перфорированным узором, держащая форму на солнце.',
    material: '100% Эко-рафия',
    size: 'Размер 55-57 см',
    rating: 4.8
  },
  {
    id: 'bucket-mini-caramel',
    name: 'Мини-Ведерко «Карамельный Мокко»',
    category: 'bucket',
    price: 6900,
    badge: '',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_tote_caramel_1790529468951.jpg',
    desc: 'Компактная сумка-торба с короткими двойными ручками и внутренним замком.',
    material: 'Рафия, Кожаный канвас',
    size: '20 x 22 x 14 см',
    rating: 4.8
  },
  {
    id: 'clutch-onyx-evening',
    name: 'Вечерний Клатч «Черная Орхидея»',
    category: 'clutch',
    price: 7500,
    badge: 'Эксклюзив',
    image: '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_black_gold_1790529870119.jpg',
    desc: 'Утонченный черный клатч с золотыми акцентами для вечерних выходов.',
    material: 'Черная рафия, Позолоченная фурнитура',
    size: '25 x 15 см',
    rating: 5
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('zk_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('zk_wishlist') || '[]');
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let activePromo = null;

// Customizer State
const customizerState = {
  shape: 'tote',
  shapeName: 'Шопер (Tote Bag)',
  basePrice: 7800,
  color: 'natural',
  colorName: 'Натуральный песок',
  colorHex: '#E3B873',
  handle: 'leather',
  handleName: 'Итальянская кожа',
  handleExtra: 1200,
  hasLinenLining: true,
  liningExtra: 900,
  hasTassel: true,
  tasselExtra: 600,
  initials: ''
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initShopFilters();
  initCustomizer();
  initCartDrawer();
  initModals();
  initContactForm();

  renderFeaturedProducts();
  renderShopProducts();
  updateCartCounters();
  updateWishlistCounters();

  // Scroll Header Shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

/* ----------------------------------------------------
   1. NAVIGATION & ROUTING
   ---------------------------------------------------- */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-btn');
  const mobileToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  function setActivePage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-view').forEach(page => {
      page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active state in menu
    document.querySelectorAll('.site-nav .nav-link').forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    siteNav.classList.remove('open');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const page = link.dataset.page;
      if (page) {
        e.preventDefault();
        window.location.hash = page;
        setActivePage(page);
      }
    });
  });

  // Handle URL Hash change
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`page-${hash}`)) {
      setActivePage(hash);
    }
  });

  // Initial load hash check
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(`page-${initialHash}`)) {
    setActivePage(initialHash);
  }

  // Mobile menu toggle
  mobileToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

/* ----------------------------------------------------
   2. PRODUCT RENDERING & SHOP ENGINE
   ---------------------------------------------------- */
function createProductCardHTML(p) {
  const isWishlisted = wishlist.includes(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-photo">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="wishlist-btn-card ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" title="В избранное">
          <svg viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" onclick="openQuickView('${p.id}')">
      </div>
      <h3 onclick="openQuickView('${p.id}')" style="cursor:pointer;">${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="product-card-footer">
        <div class="price">${p.price.toLocaleString('ru-RU')} ₽</div>
        <button class="add-basket-btn" onclick="addToCart('${p.id}')">В корзину</button>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById('homeFeaturedGrid');
  if (!container) return;
  const featured = PRODUCTS.slice(0, 6);
  container.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
}

function renderShopProducts() {
  const container = document.getElementById('shopGrid');
  if (!container) return;

  let filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Sorting
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--ink-soft);">
        <p style="font-family: var(--font-serif); font-size: 22px;">Изделия по вашему запросу не найдены</p>
        <p style="font-size: 14px; margin-top: 8px;">Попробуйте выбрать другую категорию или сбросить поиск.</p>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
  }
}

function initShopFilters() {
  const catButtons = document.querySelectorAll('#categoryFilter button');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderShopProducts();
    });
  });

  const searchInput = document.getElementById('shopSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderShopProducts();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderShopProducts();
    });
  }
}

/* ----------------------------------------------------
   3. BAG CUSTOMIZER ENGINE
   ---------------------------------------------------- */
function initCustomizer() {
  // Shape buttons
  const shapeBtns = document.querySelectorAll('#custShape .cust-card');
  shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shapeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      customizerState.shape = btn.dataset.shape;
      customizerState.shapeName = btn.querySelector('strong').innerText;
      customizerState.basePrice = parseInt(btn.dataset.price);
      updateCustomizer();
    });
  });

  // Color Swatches
  const colorSwatches = document.querySelectorAll('#custColor .color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      customizerState.color = swatch.dataset.color;
      customizerState.colorName = swatch.dataset.colorName;
      customizerState.colorHex = swatch.style.backgroundColor;
      document.getElementById('colorSelectedName').innerHTML = `Выбран оттенок: <strong>${customizerState.colorName}</strong>`;
      updateCustomizer();
    });
  });

  // Handles
  const handleBtns = document.querySelectorAll('#custHandles .cust-btn');
  handleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      handleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      customizerState.handle = btn.dataset.handle;
      customizerState.handleName = btn.querySelector('strong').innerText;
      customizerState.handleExtra = parseInt(btn.dataset.extra);
      updateCustomizer();
    });
  });

  // Add-ons
  const chkLinen = document.getElementById('optLinenLining');
  const chkTassel = document.getElementById('optTassel');

  if (chkLinen) {
    chkLinen.addEventListener('change', () => {
      customizerState.hasLinenLining = chkLinen.checked;
      updateCustomizer();
    });
  }

  if (chkTassel) {
    chkTassel.addEventListener('change', () => {
      customizerState.hasTassel = chkTassel.checked;
      updateCustomizer();
    });
  }

  // Initials input
  const inputInitials = document.getElementById('inputInitials');
  if (inputInitials) {
    inputInitials.addEventListener('input', (e) => {
      customizerState.initials = e.target.value.toUpperCase();
      updateCustomizer();
    });
  }

  // Action Buttons
  const addCustomBtn = document.getElementById('addCustomToCart');
  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', () => {
      const customItem = {
        id: `custom-${Date.now()}`,
        name: `Индивидуальная сумка (${customizerState.shapeName})`,
        price: calculateCustomTotal(),
        image: getCustomizerImage(),
        desc: `Цвет: ${customizerState.colorName}, Ручки: ${customizerState.handleName}${customizerState.initials ? `, Инициалы: ${customizerState.initials}` : ''}`,
        isCustom: true
      };

      cart.push({ product: customItem, qty: 1 });
      saveCart();
      updateCartDrawer();
      openCartDrawer();
      showToast('Индивидуальная сумка добавлена в корзину!');
    });
  }

  const orderWhatsappBtn = document.getElementById('orderCustomWhatsapp');
  if (orderWhatsappBtn) {
    orderWhatsappBtn.addEventListener('click', () => {
      const total = calculateCustomTotal();
      const text = `Здравствуйте! Хочу заказать сумку через Конструктор Zina Knit:\n\n` +
                   `• Модель: ${customizerState.shapeName}\n` +
                   `• Цвет рафии: ${customizerState.colorName}\n` +
                   `• Ручки: ${customizerState.handleName}\n` +
                   `• Льняной подклад: ${customizerState.hasLinenLining ? 'Да' : 'Нет'}\n` +
                   `• Кисточка: ${customizerState.hasTassel ? 'Да' : 'Нет'}\n` +
                   `• Инициалы: ${customizerState.initials || 'Без инициалов'}\n\n` +
                   `Итоговая стоимость: ${total.toLocaleString('ru-RU')} ₽`;
      
      const url = `https://wa.me/79000000000?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  updateCustomizer();
}

function calculateCustomTotal() {
  let total = customizerState.basePrice + customizerState.handleExtra;
  if (customizerState.hasLinenLining) total += customizerState.liningExtra;
  if (customizerState.hasTassel) total += customizerState.tasselExtra;
  return total;
}

function getCustomizerImage() {
  if (customizerState.shape === 'tote') return '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_tote_caramel_1790529468951.jpg';
  if (customizerState.shape === 'bucket') return '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_bucket_natural_1790529483066.jpg';
  return '/Users/filipp/.gemini/antigravity/brain/e1e8ed24-b027-4dda-ba59-c6a8520223db/bag_clutch_terracotta_1790529855066.jpg';
}

function updateCustomizer() {
  // Update Summary lines
  document.getElementById('summaryShape').innerText = customizerState.shapeName;
  document.getElementById('summaryColor').innerText = customizerState.colorName;
  document.getElementById('summaryHandle').innerText = customizerState.handleName;
  document.getElementById('summaryInitials').innerText = customizerState.initials || 'Нет';

  const total = calculateCustomTotal();
  document.getElementById('custTotalAmount').innerText = `${total.toLocaleString('ru-RU')} ₽`;

  // Render Visual Canvas Elements
  const renderBody = document.getElementById('renderBody');
  const renderHandles = document.getElementById('renderHandles');
  const renderMonogram = document.getElementById('renderMonogram');
  const renderTassel = document.getElementById('renderTassel');

  if (renderBody) {
    renderBody.style.backgroundColor = customizerState.colorHex;

    if (customizerState.shape === 'bucket') {
      renderBody.style.borderRadius = '50px 50px 30px 30px';
      renderBody.style.height = '150px';
    } else if (customizerState.shape === 'clutch') {
      renderBody.style.borderRadius = '8px 8px 16px 16px';
      renderBody.style.height = '110px';
    } else {
      renderBody.style.borderRadius = '12px 12px 24px 24px';
      renderBody.style.height = '140px';
    }
  }

  if (renderHandles) {
    if (customizerState.handle === 'leather') {
      renderHandles.style.borderColor = '#5c3a21';
      renderHandles.style.borderRadius = '45px 45px 0 0';
    } else if (customizerState.handle === 'wood') {
      renderHandles.style.borderColor = '#d4a373';
      renderHandles.style.borderRadius = '50%';
      renderHandles.style.width = '60px';
      renderHandles.style.height = '60px';
    } else {
      renderHandles.style.borderColor = customizerState.colorHex;
      renderHandles.style.borderRadius = '45px 45px 0 0';
    }
  }

  if (renderMonogram) {
    renderMonogram.innerText = customizerState.initials;
  }

  if (renderTassel) {
    renderTassel.style.display = customizerState.hasTassel ? 'block' : 'none';
    renderTassel.style.backgroundColor = customizerState.colorHex;
  }
}

/* ----------------------------------------------------
   4. CART DRAWER & CHECKOUT SYSTEM
   ---------------------------------------------------- */
function saveCart() {
  localStorage.setItem('zk_cart', JSON.stringify(cart));
  updateCartCounters();
}

function updateCartCounters() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').innerText = totalCount;
  document.getElementById('cartDrawerCount').innerText = totalCount;
}

function openCartDrawer() {
  document.getElementById('cartBackdrop').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cartBackdrop').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('active');
}

function initCartDrawer() {
  document.getElementById('cartTrigger').addEventListener('click', () => {
    updateCartDrawer();
    openCartDrawer();
  });

  document.getElementById('cartClose').addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop').addEventListener('click', closeCartDrawer);

  // Apply promo button
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = document.getElementById('promoInput').value.trim().toUpperCase();
      if (code === 'ZINA10') {
        activePromo = { code: 'ZINA10', discountPercent: 10 };
        showToast('Промокод ZINA10 применен (-10%)!');
      } else if (code === 'ZINA15') {
        activePromo = { code: 'ZINA15', discountPercent: 15 };
        showToast('Промокод ZINA15 применен (-15%)!');
      } else {
        showToast('Неверный промокод');
      }
      updateCartDrawer();
    });
  }

  // WhatsApp Checkout
  document.getElementById('whatsappCheckoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Корзина пуста');
      return;
    }

    let text = `Здравствуйте! Хочу оформить заказ с сайта Zina Knit:\n\n`;
    let subtotal = 0;

    cart.forEach((item, index) => {
      const lineTotal = item.product.price * item.qty;
      subtotal += lineTotal;
      text += `${index + 1}. ${item.product.name} (x${item.qty}) — ${lineTotal.toLocaleString('ru-RU')} ₽\n`;
    });

    let discount = 0;
    if (activePromo) {
      discount = Math.round(subtotal * (activePromo.discountPercent / 100));
      text += `\nПромокод (${activePromo.code}): -${discount.toLocaleString('ru-RU')} ₽\n`;
    }

    const finalTotal = subtotal - discount;
    text += `\nИтого к оплате: ${finalTotal.toLocaleString('ru-RU')} ₽`;

    const url = `https://wa.me/79000000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });

  // Site Checkout Modal Trigger
  document.getElementById('siteCheckoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Корзина пуста');
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ product, qty: 1 });
  }

  saveCart();
  showToast(`«${product.name}» добавлена в корзину`);
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(item => item.product.id === productId);
  if (index !== -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartDrawer();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCart();
  updateCartDrawer();
}

function updateCartDrawer() {
  const container = document.getElementById('cartItemsList');
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: var(--ink-soft);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" style="width:48px;height:48px;color:var(--gold-deep);margin-bottom:12px;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>
        <p style="font-family: var(--font-serif); font-size: 20px;">Ваша корзина пуста</p>
        <p style="font-size: 13px; margin-top: 6px;">Выберите сумку в каталоге или воспользуйтесь конструктором.</p>
      </div>
    `;
    document.getElementById('cartSubtotal').innerText = '0 ₽';
    document.getElementById('cartGrandTotal').innerText = '0 ₽';
    document.getElementById('discountRow').style.display = 'none';
    document.getElementById('shippingProgressFill').style.width = '0%';
    document.getElementById('shippingMsg').innerText = 'Добавьте товаров для бесплатной доставки!';
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const lineTotal = item.product.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-item">
        <img src="${item.product.image}" alt="${item.product.name}">
        <div class="cart-item-info">
          <h4>${item.product.name}</h4>
          <p>${item.product.desc ? item.product.desc.substring(0, 45) + '...' : ''}</p>
          <div class="cart-qty-ctrl">
            <button onclick="updateCartQty('${item.product.id}', -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty('${item.product.id}', 1)">+</button>
          </div>
        </div>
        <div>
          <div class="cart-item-price">${lineTotal.toLocaleString('ru-RU')} ₽</div>
          <button class="remove-item-btn" onclick="removeFromCart('${item.product.id}')">Удалить</button>
        </div>
      </div>
    `;
  }).join('');

  // Free shipping logic
  const freeThreshold = 10000;
  const progress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  document.getElementById('shippingProgressFill').style.width = `${progress}%`;

  if (subtotal >= freeThreshold) {
    document.getElementById('shippingMsg').innerText = '🎉 Поздравляем! Вам доступна БЕСПЛАТНАЯ доставка по РФ!';
  } else {
    const remaining = freeThreshold - subtotal;
    document.getElementById('shippingMsg').innerText = `Добавьте еще на ${remaining.toLocaleString('ru-RU')} ₽ для бесплатной доставки!`;
  }

  document.getElementById('cartSubtotal').innerText = `${subtotal.toLocaleString('ru-RU')} ₽`;

  let discount = 0;
  if (activePromo) {
    discount = Math.round(subtotal * (activePromo.discountPercent / 100));
    document.getElementById('discountRow').style.display = 'flex';
    document.getElementById('cartDiscount').innerText = `-${discount.toLocaleString('ru-RU')} ₽`;
  } else {
    document.getElementById('discountRow').style.display = 'none';
  }

  const grandTotal = subtotal - discount;
  document.getElementById('cartGrandTotal').innerText = `${grandTotal.toLocaleString('ru-RU')} ₽`;
}

/* ----------------------------------------------------
   5. WISHLIST ENGINE
   ---------------------------------------------------- */
function toggleWishlist(productId, e) {
  if (e) e.stopPropagation();
  const index = wishlist.indexOf(productId);
  if (index !== -1) {
    wishlist.splice(index, 1);
    showToast('Удалено из Избранного');
  } else {
    wishlist.push(productId);
    showToast('Добавлено в Избранное');
  }

  localStorage.setItem('zk_wishlist', JSON.stringify(wishlist));
  updateWishlistCounters();
  renderFeaturedProducts();
  renderShopProducts();
}

function updateWishlistCounters() {
  document.getElementById('wishlistCount').innerText = wishlist.length;
}

/* ----------------------------------------------------
   6. QUICK VIEW & CHECKOUT MODALS
   ---------------------------------------------------- */
function initModals() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const productModal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');

  function closeModal() {
    modalBackdrop.classList.remove('active');
    productModal.classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // Checkout modal
  document.getElementById('checkoutClose').addEventListener('click', closeModal);
  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
    cart = [];
    saveCart();
    showToast('🎉 Заказ успешно оформлен! Мастер свяжется с вами в течение 15 минут.');
  });
}

function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="qv-grid">
      <div class="qv-gallery">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="qv-info">
        <h2>${p.name}</h2>
        <div class="qv-price">${p.price.toLocaleString('ru-RU')} ₽</div>
        <p class="qv-desc">${p.desc}</p>
        
        <div class="qv-specs">
          <div><strong>Состав / Материалы:</strong> ${p.material}</div>
          <div><strong>Габариты:</strong> ${p.size}</div>
          <div><strong>Срок изготовления:</strong> В наличии (отправка за 24 ч)</div>
        </div>

        <button class="btn-primary btn-block" onclick="addToCart('${p.id}'); document.getElementById('modalClose').click();">
          Добавить в корзину — ${p.price.toLocaleString('ru-RU')} ₽
        </button>
      </div>
    </div>
  `;

  document.getElementById('modalBackdrop').classList.add('active');
  document.getElementById('productModal').classList.add('active');
}

function openCheckoutModal() {
  let subtotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  let discount = activePromo ? Math.round(subtotal * (activePromo.discountPercent / 100)) : 0;
  let finalTotal = subtotal - discount;

  document.getElementById('checkoutFinalAmount').innerText = `${finalTotal.toLocaleString('ru-RU')} ₽`;
  document.getElementById('modalBackdrop').classList.add('active');
  document.getElementById('checkoutModal').classList.add('active');
}

/* ----------------------------------------------------
   7. CONTACT FORM & TOAST ENGINE
   ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      showToast('Спасибо! Ваше сообщение отправлено. Мастер скоро ответит вам.');
    });
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;color:var(--gold);"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
