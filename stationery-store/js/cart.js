const PRODUCT_DATA = [
  {
    id: 'cb-forest-friends',
    name: 'Forest Friends Coloring Book',
    price: 12.5,
    category: 'Coloring Books',
    image: 'images/coloring-book-forest.svg',
    shortDescription: '32 hand-drawn animal scenes with thick, bleed-safe pages.',
    description:
      'Unplug and color cozy woodland illustrations with premium, bleed-safe paper. Perfect for relaxing evenings and creative breaks.',
    featured: true
  },
  {
    id: 'jr-lavender-daily',
    name: 'Lavender Daily Journal',
    price: 9.99,
    category: 'Journals',
    image: 'images/journal-lavender.svg',
    shortDescription: 'Soft-touch cover, dotted pages, and habit tracker inserts.',
    description:
      'A dreamy dotted journal designed for notes, plans, and sketches. Includes monthly reflection pages and ribbon bookmarks.',
    featured: true
  },
  {
    id: 'pp-pastel-pencil-set',
    name: 'Pastel Color Pencil Set (24)',
    price: 15.0,
    category: 'Pens & Pencils',
    image: 'images/pencil-set.svg',
    shortDescription: 'Smooth-core blendable pencils in gentle pastel shades.',
    description:
      'A 24-piece pencil set with blend-friendly pigments and balanced barrel grip for detail work and effortless shading.',
    featured: true
  },
  {
    id: 'as-dual-tip-markers',
    name: 'Dual Tip Sketch Markers (18)',
    price: 18.5,
    category: 'Art Supplies',
    image: 'images/markers-set.svg',
    shortDescription: 'Brush tip + fine liner tip for lettering and illustrations.',
    description:
      'Vibrant alcohol-based markers with dual tips for smooth fills and precision lines. Great for calligraphy and poster art.',
    featured: true
  },
  {
    id: 'cb-mandala-calm',
    name: 'Mandala Calm Coloring Book',
    price: 11.25,
    category: 'Coloring Books',
    image: 'images/coloring-book-mandala.svg',
    shortDescription: 'Intricate mandalas for mindful coloring sessions.',
    description:
      'Designed for calm focus, this coloring book features 40 geometric and floral mandala compositions for all ages.',
    featured: false
  },
  {
    id: 'jr-mint-gratitude',
    name: 'Mint Gratitude Journal',
    price: 10.5,
    category: 'Journals',
    image: 'images/journal-mint.svg',
    shortDescription: 'Prompt-based gratitude pages and weekly check-ins.',
    description:
      'Build a joyful daily ritual with guided prompts, quote pages, and spacious layouts to document wins and ideas.',
    featured: false
  },
  {
    id: 'pp-gel-pen-rainbow',
    name: 'Rainbow Gel Pen Pack (12)',
    price: 8.75,
    category: 'Pens & Pencils',
    image: 'images/gel-pens.svg',
    shortDescription: 'Quick-dry ink with smooth 0.5mm precision tips.',
    description:
      'A colorful pen pack ideal for journaling, note-taking, and doodling. Smudge-resistant and easy-flow ink system.',
    featured: false
  },
  {
    id: 'as-watercolor-kit',
    name: 'Pocket Watercolor Kit',
    price: 21.0,
    category: 'Art Supplies',
    image: 'images/watercolor-kit.svg',
    shortDescription: 'Travel-ready palette with refillable water brush.',
    description:
      'Compact watercolor tin with rich pigments, mixing wells, and a water brush for painting anywhere inspiration strikes.',
    featured: false
  }
];

const CURRENCY = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function getCart() {
  const parsed = JSON.parse(localStorage.getItem('colornest_cart') || '[]');
  return Array.isArray(parsed) ? parsed : [];
}

function saveCart(cart) {
  localStorage.setItem('colornest_cart', JSON.stringify(cart));
}

function findProductById(id) {
  return PRODUCT_DATA.find((product) => product.id === id);
}

function getCartWithDetails() {
  return getCart()
    .map((item) => {
      const product = findProductById(item.id);
      if (!product) return null;
      return {
        ...item,
        product,
        lineTotal: product.price * item.quantity
      };
    })
    .filter(Boolean);
}

function formatPrice(value) {
  return CURRENCY.format(value);
}

function updateCartCount() {
  const badge = document.querySelector('[data-cart-count]');
  if (!badge) return;
  const totalItems = getCart().reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = String(totalItems);
}

function upsertCartItem(productId, quantity) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveCart(cart.filter((item) => item.quantity > 0));
  updateCartCount();
}

function setCartItemQuantity(productId, quantity) {
  const cart = getCart();
  const target = cart.find((item) => item.id === productId);
  if (!target) return;
  target.quantity = quantity;
  saveCart(cart.filter((item) => item.quantity > 0));
  updateCartCount();
}

function removeCartItem(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartCount();
}

function cardTemplate(product) {
  return `
    <article class="card page-animate">
      <a href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${product.name}">
        <img src="${product.image}" class="card-image" alt="${product.name}" />
      </a>
      <div class="card-body">
        <p class="inline-muted">${product.category}</p>
        <h3>${product.name}</h3>
        <p>${product.shortDescription}</p>
        <div class="card-actions">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="btn btn-primary" data-add-to-cart="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function wireAddToCartButtons(scope) {
  scope.querySelectorAll('[data-add-to-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-add-to-cart');
      upsertCartItem(productId, 1);
      button.textContent = 'Added';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.disabled = false;
      }, 900);
    });
  });
}

function renderFeaturedProducts() {
  const target = document.querySelector('[data-featured-grid]');
  if (!target) return;

  const featured = PRODUCT_DATA.filter((product) => product.featured);
  target.innerHTML = featured.map(cardTemplate).join('');
  wireAddToCartButtons(target);
}

function renderShopProducts(category = 'All') {
  const target = document.querySelector('[data-shop-grid]');
  if (!target) return;

  const filtered =
    category === 'All'
      ? PRODUCT_DATA
      : PRODUCT_DATA.filter((product) => product.category === category);

  target.innerHTML = filtered.map(cardTemplate).join('');
  wireAddToCartButtons(target);
}

function initShopFilters() {
  const wrap = document.querySelector('[data-filter-row]');
  if (!wrap) return;

  wrap.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');
      renderShopProducts(btn.getAttribute('data-filter') || 'All');
    });
  });

  renderShopProducts('All');
}

function renderProductDetails() {
  const shell = document.querySelector('[data-product-detail]');
  if (!shell) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = id ? findProductById(id) : PRODUCT_DATA[0];

  if (!product) {
    shell.innerHTML = '<div class="empty">Product not found.</div>';
    return;
  }

  shell.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="detail-image" />
    <div class="detail-info page-animate">
      <p class="inline-muted">${product.category}</p>
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p class="price">${formatPrice(product.price)}</p>
      <label class="qty-row" for="qty">
        Quantity
        <input type="number" min="1" max="12" id="qty" class="qty-input" value="1" />
      </label>
      <button class="btn btn-primary" data-add-detail="${product.id}">Add to Cart</button>
    </div>
  `;

  const addButton = shell.querySelector('[data-add-detail]');
  const qtyInput = shell.querySelector('#qty');

  if (addButton && qtyInput) {
    addButton.addEventListener('click', () => {
      const qty = Math.max(1, Math.min(12, Number.parseInt(qtyInput.value, 10) || 1));
      upsertCartItem(product.id, qty);
      addButton.textContent = 'Added to Cart';
      setTimeout(() => {
        addButton.textContent = 'Add to Cart';
      }, 1000);
    });
  }
}

function cartItemTemplate(line) {
  return `
    <article class="cart-item page-animate" data-cart-row="${line.id}">
      <img src="${line.product.image}" alt="${line.product.name}" />
      <div class="item-meta">
        <h3>${line.product.name}</h3>
        <p>${formatPrice(line.product.price)}</p>
        <label class="inline-muted">
          Qty
          <input type="number" min="1" max="12" value="${line.quantity}" data-qty-input="${line.id}" class="qty-input" />
        </label>
      </div>
      <div>
        <p class="price">${formatPrice(line.lineTotal)}</p>
        <button class="btn btn-secondary" data-remove-item="${line.id}">Remove</button>
      </div>
    </article>
  `;
}

function renderCartPage() {
  const list = document.querySelector('[data-cart-items]');
  const totalEl = document.querySelector('[data-cart-total]');
  const subtotalEl = document.querySelector('[data-cart-subtotal]');
  if (!list || !totalEl || !subtotalEl) return;

  const lines = getCartWithDetails();

  if (!lines.length) {
    list.innerHTML = '<div class="empty">Your cart is empty. Add colorful supplies from the shop.</div>';
    subtotalEl.textContent = formatPrice(0);
    totalEl.textContent = formatPrice(0);
    return;
  }

  list.innerHTML = lines.map(cartItemTemplate).join('');
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  subtotalEl.textContent = formatPrice(subtotal);
  totalEl.textContent = formatPrice(subtotal);

  list.querySelectorAll('[data-remove-item]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-remove-item');
      removeCartItem(id);
      renderCartPage();
    });
  });

  list.querySelectorAll('[data-qty-input]').forEach((input) => {
    input.addEventListener('change', () => {
      const id = input.getAttribute('data-qty-input');
      const quantity = Math.max(1, Math.min(12, Number.parseInt(input.value, 10) || 1));
      setCartItemQuantity(id, quantity);
      renderCartPage();
    });
  });
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const notice = form.querySelector('[data-form-notice]');
    if (notice) {
      notice.hidden = false;
    }
    form.reset();
  });
}

function init() {
  updateCartCount();
  renderFeaturedProducts();
  initShopFilters();
  renderProductDetails();
  renderCartPage();
  setupContactForm();
}

document.addEventListener('DOMContentLoaded', init);
