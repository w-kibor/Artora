const RAW_PRODUCT_DATA = [
  {
    id: 'cb-forest-friends',
    name: 'Forest Friends Coloring Book',
    price: 1250,
    category: 'Coloring Books',
    image: 'images/Forest Friends Coloring Book - Cute, Fun and Engaging Animal Illustrations for Kids (Ages 4-8).jpeg',
    shortDescription: '32 hand-drawn animal scenes with thick, bleed-safe pages.',
    description:
      'Unplug and color cozy woodland illustrations with premium, bleed-safe paper. Perfect for relaxing evenings and creative breaks.',
    featured: true
  },
  {
    id: 'jr-lavender-daily',
    name: 'Lavender Daily Journal',
    price: 999,
    category: 'Journals',
    image: 'images/_ (4).jpeg',
    shortDescription: 'Soft-touch cover, dotted pages, and habit tracker inserts.',
    description:
      'A dreamy dotted journal designed for notes, plans, and sketches. Includes monthly reflection pages and ribbon bookmarks.',
    featured: true
  },
  {
    id: 'pp-pastel-pencil-set',
    name: 'Pastel Color Pencil Set (24)',
    price: 1500,
    category: 'Pens & Pencils',
    image: 'images/PEOPLE-PLACES-THINGS-ETC.jpeg',
    shortDescription: 'Smooth-core blendable pencils in gentle pastel shades.',
    description:
      'A 24-piece pencil set with blend-friendly pigments and balanced barrel grip for detail work and effortless shading.',
    featured: true
  },
  {
    id: 'as-dual-tip-markers',
    name: 'Dual Tip Sketch Markers (18)',
    price: 1850,
    category: 'Art Supplies',
    image: 'images/SHEIN.jpeg',
    shortDescription: 'Brush tip + fine liner tip for lettering and illustrations.',
    description:
      'Vibrant alcohol-based markers with dual tips for smooth fills and precision lines. Great for calligraphy and poster art.',
    featured: true
  },
  {
    id: 'cb-mandala-calm',
    name: 'Mandala Calm Coloring Book',
    price: 1125,
    category: 'Coloring Books',
    image: 'images/Relax with 50 Mandala Coloring Book in 2025 – Embrace Calm and Creativity!.jpeg',
    shortDescription: 'Intricate mandalas for mindful coloring sessions.',
    description:
      'Designed for calm focus, this coloring book features 40 geometric and floral mandala compositions for all ages.',
    featured: false
  },
  {
    id: 'jr-mint-gratitude',
    name: 'Mint Gratitude Journal',
    price: 1050,
    category: 'Journals',
    image: 'images/new 2024 journal.jpeg',
    shortDescription: 'Prompt-based gratitude pages and weekly check-ins.',
    description:
      'Build a joyful daily ritual with guided prompts, quote pages, and spacious layouts to document wins and ideas.',
    featured: false
  },
  {
    id: 'pp-gel-pen-rainbow',
    name: 'Rainbow Gel Pen Pack (12)',
    price: 875,
    category: 'Pens & Pencils',
    image: 'images/Caneta Colorida - Preço mais baixo que concorrentes!.jpeg',
    shortDescription: 'Quick-dry ink with smooth 0.5mm precision tips.',
    description:
      'A colorful pen pack ideal for journaling, note-taking, and doodling. Smudge-resistant and easy-flow ink system.',
    featured: false
  },
  {
    id: 'as-watercolor-kit',
    name: 'Pocket Watercolor Kit',
    price: 2100,
    category: 'Art Supplies',
    image: 'images/watercolor-painting.jpeg',
    shortDescription: 'Travel-ready palette with refillable water brush.',
    description:
      'Compact watercolor tin with rich pigments, mixing wells, and a water brush for painting anywhere inspiration strikes.',
    featured: false
  },
  {
    id: 'cb-kids-animal-adventure',
    name: 'Kids Animal Adventure Coloring Book',
    price: 850,
    category: 'Coloring Books',
    image: 'images/Animal Adventure Coloring Book for Kids Fun Riding Animals Activity Pages Printable PDF (10 Pages).jpeg',
    shortDescription: 'Friendly animals, big outlines, and easy pages for little artists.',
    description:
      'A playful coloring journey for kids with cheerful scenes, thick lines, and parent-friendly single-sided pages.',
    featured: false
  },
  {
    id: 'cb-kids-fun-shapes',
    name: 'Kids Fun Shapes Coloring Book',
    price: 780,
    category: 'Coloring Books',
    image: 'images/Shapes and Patterns Coloring Book - Toddler and Preschool Activity (Printable PDF).jpeg',
    shortDescription: 'Simple shapes and joyful activities for preschool creativity.',
    description:
      'Helps children build confidence through simple patterns, cheerful objects, and beginner-friendly coloring spaces.',
    featured: false
  },
  {
    id: 'cb-mandala-deep-calm',
    name: 'Mandala Deep Calm Edition',
    price: 1200,
    category: 'Coloring Books',
    image: 'images/The Mandala Colouring Book_ Beautiful Designs To Inspire Creativity.jpeg',
    shortDescription: 'Advanced mandala details for calm focus and mindful breaks.',
    description:
      'A premium adults-only mandala collection with layered geometric designs made for long, relaxing sessions.',
    featured: false
  },
  {
    id: 'cb-mandala-zen-night',
    name: 'Mandala Zen Night Collection',
    price: 1350,
    category: 'Coloring Books',
    image: 'images/Geometric Mandala Coloring Design for Beginners.jpeg',
    shortDescription: 'Night-themed mandala pages with intricate floral symmetry.',
    description:
      'Designed for evening wind-down routines, featuring rich mandalas ideal for pencils, gel pens, and fine liners.',
    featured: false
  },
  {
    id: 'cb-animation-despicable-me',
    name: 'Despicable Me Coloring Book',
    price: 1450,
    category: 'Coloring Books',
    image: 'images/Despicable_Me.jpeg',
    shortDescription: 'Mischievous fun pages inspired by the Despicable Me universe.',
    description:
      'Bring playful energy to your coloring routine with character-inspired scenes and bold, friendly line work.',
    featured: false
  },
  {
    id: 'cb-animation-zootopia',
    name: 'Zootopia Coloring Book',
    price: 1550,
    category: 'Coloring Books',
    image: 'images/Zootopia.jpeg',
    shortDescription: 'City adventure scenes featuring animal-world style storytelling.',
    description:
      'Packed with lively city backdrops and expressive characters, ideal for fans of detective adventure themes.',
    featured: false
  },
  {
    id: 'cb-animation-frozen',
    name: 'Frozen Coloring Book',
    price: 1500,
    category: 'Coloring Books',
    image: 'images/Frozen.jpeg',
    shortDescription: 'Snowy fantasy scenes inspired by icy royal adventures.',
    description:
      'Color enchanting winter worlds, elegant gowns, and magical moments inspired by the Frozen vibe.',
    featured: false
  },
  {
    id: 'cb-animation-disney-princesses',
    name: 'Disney Princesses Coloring Book',
    price: 1650,
    category: 'Coloring Books',
    image: 'images/Disney Princesses.jpeg',
    shortDescription: 'Royal-themed pages with timeless princess-inspired scenes.',
    description:
      'A graceful collection of princess-inspired illustrations made for dreamy palettes and elegant finishing touches.',
    featured: false
  },
  {
    id: 'cb-animation-toy-story',
    name: 'Toy Story Coloring Book',
    price: 1520,
    category: 'Coloring Books',
    image: 'images/Toy Story.jpeg',
    shortDescription: 'Adventure-filled toy world pages with energetic characters.',
    description:
      'Capture playful action and friendship-themed scenes inspired by classic toy adventure storytelling.',
    featured: false
  },
  {
    id: 'cb-animation-minions',
    name: 'Minions Coloring Book',
    price: 1420,
    category: 'Coloring Books',
    image: 'images/Minions.jpeg',
    shortDescription: 'Funny and chaotic pages for colorful laughter-filled sessions.',
    description:
      'A cheerful collection of silly expressions and action scenes inspired by the Minions style.',
    featured: false
  }
];

function validateCatalog(products) {
  return products.filter((product) => {
    const validPrice = Number.isInteger(product.price) && product.price > 0;
    if (!validPrice) {
      console.warn(
        `[catalog] Skipping product "${product.id}" because price must be a positive integer KES value. Received: ${product.price}`
      );
    }
    return validPrice;
  });
}

const PRODUCT_DATA = validateCatalog(RAW_PRODUCT_DATA);

const CURRENCY = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES'
});

const CART_STORAGE_KEY = 'colornest_cart';
const MIN_QTY = 1;
const MAX_QTY = 12;

function normalizeQuantity(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed)) return MIN_QTY;
  return Math.min(MAX_QTY, Math.max(MIN_QTY, parsed));
}

function sanitizeCartPayload(payload) {
  if (!Array.isArray(payload)) return [];

  const sanitized = [];

  payload.forEach((item) => {
    if (!item || typeof item !== 'object') return;
    if (typeof item.id !== 'string') return;
    if (!findProductById(item.id)) return;

    sanitized.push({
      id: item.id,
      quantity: normalizeQuantity(item.quantity)
    });
  });

  return sanitized;
}

function getCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
    const sanitized = sanitizeCartPayload(parsed);

    // Auto-heal localStorage if it contains malformed cart entries.
    if (JSON.stringify(parsed) !== JSON.stringify(sanitized)) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(sanitized));
    }

    return sanitized;
  } catch {
    localStorage.setItem(CART_STORAGE_KEY, '[]');
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(sanitizeCartPayload(cart)));
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
  const product = findProductById(productId);
  if (!product) return;
  const normalizedQty = normalizeQuantity(quantity);

  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity = normalizeQuantity(existing.quantity + normalizedQty);
  } else {
    cart.push({ id: productId, quantity: normalizedQty });
  }

  saveCart(cart.filter((item) => item.quantity > 0));
  updateCartCount();
}

function setCartItemQuantity(productId, quantity) {
  const cart = getCart();
  const target = cart.find((item) => item.id === productId);
  if (!target) return;
  target.quantity = normalizeQuantity(quantity);
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

function renderColoringBooksSections() {
  const sections = [
    {
      selector: '[data-coloring-kids-grid]',
      ids: ['cb-kids-animal-adventure', 'cb-kids-fun-shapes']
    },
    {
      selector: '[data-coloring-mandala-grid]',
      ids: ['cb-mandala-deep-calm', 'cb-mandala-zen-night']
    },
    {
      selector: '[data-coloring-animation-grid]',
      ids: [
        'cb-animation-despicable-me',
        'cb-animation-zootopia',
        'cb-animation-frozen',
        'cb-animation-disney-princesses',
        'cb-animation-toy-story',
        'cb-animation-minions'
      ]
    }
  ];

  sections.forEach((section) => {
    const target = document.querySelector(section.selector);
    if (!target) return;

    const products = section.ids
      .map((id) => findProductById(id))
      .filter(Boolean);

    target.innerHTML = products.map(cardTemplate).join('');
    wireAddToCartButtons(target);
  });
}

function renderJournalsSection() {
  const target = document.querySelector('[data-journal-grid]');
  if (!target) return;

  const journalProducts = ['jr-lavender-daily', 'jr-mint-gratitude']
    .map((id) => findProductById(id))
    .filter(Boolean);

  target.innerHTML = journalProducts.map(cardTemplate).join('');
  wireAddToCartButtons(target);
}

function initShopFilters() {
  const wrap = document.querySelector('[data-filter-row]');
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category') || 'All';

  wrap.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
      btn.classList.add('active');
      renderShopProducts(btn.getAttribute('data-filter') || 'All');
    });
  });

  const initialButton = Array.from(wrap.querySelectorAll('.filter-btn')).find(
    (btn) => btn.getAttribute('data-filter') === initialCategory
  );

  if (initialButton) {
    wrap.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    initialButton.classList.add('active');
  }

  renderShopProducts(initialButton ? initialCategory : 'All');
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
  renderColoringBooksSections();
  renderJournalsSection();
  renderProductDetails();
  renderCartPage();
  setupContactForm();
}

document.addEventListener('DOMContentLoaded', init);
