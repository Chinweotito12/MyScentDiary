const products = [
  {
    id: "allure-homme-sport",
    name: "Allure Homme Sport",
    brand: "Chanel",
    category: "him",
    price: 200,
    size: "100ml",
    image: "img/alluresport.jpeg",
    notes: "Orange, sea notes, pepper, neroli, cedar, vanilla, tonka bean, musk",
    description: "A clean woody-spicy fragrance with fresh citrus, marine brightness, and creamy warmth for everyday confidence.",
    featured: true
  },
  {
    id: "bleu-chanel",
    name: "Bleu de Chanel",
    brand: "Chanel",
    category: "him",
    price: 180,
    size: "100ml",
    image: "img/bleuchanel.jpeg",
    notes: "Grapefruit, incense, ginger, sandalwood, cedar",
    description: "Crisp citrus and smooth woods create a polished signature that works from desk to dinner.",
    featured: false
  },
  {
    id: "dior-homme",
    name: "Dior Homme",
    brand: "Dior",
    category: "him",
    price: 155,
    size: "100ml",
    image: "img/diorhomme.jpeg",
    notes: "Iris, amber, cacao, vetiver, leather",
    description: "Elegant iris and tailored woods give this scent a soft, refined edge.",
    featured: false
  },
  {
    id: "gentleman-society",
    name: "Gentleman Society",
    brand: "Givenchy",
    category: "him",
    price: 135,
    size: "100ml",
    image: "img/society2.jpeg",
    notes: "Sage, cardamom, narcissus, vetiver, cedarwood",
    description: "Fresh aromatics and textured woods with a polished, modern finish.",
    featured: true
  },
  {
    id: "ombre-leather",
    name: "Ombre Leather",
    brand: "Tom Ford",
    category: "him",
    price: 275,
    size: "100ml",
    image: "img/ombreleather.jpeg",
    notes: "Cardamom, jasmine sambac, black leather, patchouli, amber",
    description: "Supple leather, spice, and amber with a confident evening trail.",
    featured: true
  },
  {
    id: "jpg-la-male",
    name: "Le Male",
    brand: "Jean Paul Gaultier",
    category: "him",
    price: 125,
    size: "125ml",
    image: "img/jpglamale.jpeg",
    notes: "Mint, lavender, cinnamon, vanilla, amber",
    description: "An aromatic classic with mint freshness and smooth vanilla warmth.",
    featured: false
  },
  {
    id: "gucci-bloom",
    name: "Gucci Bloom",
    brand: "Gucci",
    category: "her",
    price: 145,
    size: "100ml",
    image: "img/guccibloom.jpeg",
    notes: "Jasmine bud, tuberose, rangoon creeper, musk",
    description: "A lush white floral bouquet with a graceful powdery finish.",
    featured: true
  },
  {
    id: "black-opium",
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    category: "her",
    price: 165,
    size: "90ml",
    image: "img/blackopium.jpeg",
    notes: "Coffee, pear, pink pepper, jasmine, vanilla, patchouli",
    description: "Bold coffee and glowing vanilla for a sparkling night-out signature.",
    featured: false
  },
  {
    id: "burberry-goddess",
    name: "Burberry Goddess",
    brand: "Burberry",
    category: "her",
    price: 150,
    size: "100ml",
    image: "img/burberrygoddes.jpeg",
    notes: "Vanilla infusion, lavender, cacao, ginger",
    description: "A warm vanilla fragrance with brightness, softness, and calm confidence.",
    featured: false
  },
  {
    id: "la-tulipe",
    name: "La Tulipe",
    brand: "Byredo",
    category: "her",
    price: 220,
    size: "100ml",
    image: "img/tulipe.jpeg",
    notes: "Rhubarb, cyclamen, tulip, blonde woods, vetiver",
    description: "A delicate fresh floral with clean green notes and soft woods.",
    featured: false
  },
  {
    id: "scandal",
    name: "Scandal",
    brand: "Jean Paul Gaultier",
    category: "her",
    price: 130,
    size: "100ml",
    image: "img/scandal2.jpeg",
    notes: "Blood orange, honey, gardenia, patchouli",
    description: "Honeyed florals with bright fruit and a confident finish.",
    featured: true
  },
  {
    id: "lancome-idole",
    name: "Idole",
    brand: "Lancome",
    category: "her",
    price: 142,
    size: "75ml",
    image: "img/lancome.jpeg",
    notes: "Rose, jasmine, bergamot, pear, white musk",
    description: "Clean rose and soft musk make a radiant modern floral.",
    featured: false
  },
  {
    id: "choco-musk",
    name: "Choco Musk",
    brand: "Al-Rehab",
    category: "unisex",
    price: 25,
    size: "50ml",
    image: "img/chocomusk.jpeg",
    notes: "Chocolate, vanilla, musk, cinnamon, amber",
    description: "Cozy cocoa and vanilla musk for a deliciously soft everyday scent.",
    featured: true
  },
  {
    id: "royal-amber",
    name: "Royal Amber",
    brand: "Orientica",
    category: "unisex",
    price: 90,
    size: "100ml",
    image: "img/royalamber.jpeg",
    notes: "Amber, saffron, woods, musk, vanilla",
    description: "Golden amber wrapped in spice and soft woods.",
    featured: true
  },
  {
    id: "royal-blend",
    name: "Royal Blend",
    brand: "Fragrance World",
    category: "unisex",
    price: 95,
    size: "100ml",
    image: "img/royalblend.jpeg",
    notes: "Cognac, cinnamon, tonka bean, oak, praline",
    description: "Warm, resinous, and smooth with a dessert-like glow.",
    featured: false
  },
  {
    id: "gucci-memoire",
    name: "Memoire d'une Odeur",
    brand: "Gucci",
    category: "unisex",
    price: 120,
    size: "100ml",
    image: "img/guccimemoire.jpeg",
    notes: "Chamomile, jasmine, musk, cedar, sandalwood",
    description: "A mineral herbal scent with soft woods and quiet nostalgia.",
    featured: false
  },
  {
    id: "gucci-intense-oud",
    name: "Intense Oud",
    brand: "Gucci",
    category: "unisex",
    price: 210,
    size: "90ml",
    image: "img/gucciintenseoud.jpeg",
    notes: "Oud, incense, amber, leather, woods",
    description: "Deep oud, smoke, and amber with a luxurious evening presence.",
    featured: false
  },
  {
    id: "mad-cassanova",
    name: "Mad Cassanova",
    brand: "Mad Parfum",
    category: "unisex",
    price: 66,
    size: "100ml",
    image: "img/madcassanova.jpeg",
    notes: "Citrus, lavender, amber, vanilla, musk",
    description: "Bright, smooth, and easy to wear with a creamy finish.",
    featured: true
  },
  {
    id: "costa-brazil-aroma-body-oil",
    name: "Aroma Body Oil",
    brand: "Costa Brazil",
    category: "unisex",
    price: 98,
    size: "100ml",
    image: "img/costa brazil body oil.jpeg",
    notes: "White jungle flora, Brazilian vetiver, sandalwood, patchouli",
    description: "A nourishing body oil with a warm, woody aroma designed for layering with a favorite fragrance.",
    featured: false
  }
];

const categoryLabels = {
  all: "All",
  her: "For Her",
  him: "For Him",
  unisex: "Unisex"
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initInterfaceEnhancements();
  renderProductLists();
  initProductDetail();
  initCartPage();
  initContactForm();
  updateCartCount();
});

function initInterfaceEnhancements() {
  normalizeCartLinks();
  initFooterSocials();
}

function normalizeCartLinks() {
  document.querySelectorAll(".cart-pill").forEach((link) => {
    const count = link.querySelector(".cart-count")?.textContent?.trim() || "0";
    link.setAttribute("aria-label", "View cart");
    link.innerHTML = `
      <span class="cart-icon" aria-hidden="true"></span>
      <span class="cart-count">${count}</span>
    `;
  });
}

function initFooterSocials() {
  const footerBrand = document.querySelector(".footer-brand");
  if (!footerBrand || footerBrand.querySelector(".social-links")) return;

  footerBrand.insertAdjacentHTML("beforeend", `
    <div class="social-links" aria-label="Social media links">
      <a href="https://www.instagram.com/myscentdiary" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.5"></circle><path d="M17.5 6.5h.01"></path></svg>
      </a>
      <a href="https://www.facebook.com/myscentdiary" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 8.5H13c-.8 0-1.2.4-1.2 1.2V12h2.6l-.4 2.8h-2.2V21H9v-6.2H7V12h2V9.7C9 7.2 10.5 6 12.8 6h1.7v2.5z"></path></svg>
      </a>
      <a href="https://www.tiktok.com/@myscentdiary" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a3.8 3.8 0 1 1-3.8-3.8"></path><path d="M14 6.5c1.1 1.8 2.6 2.8 4.8 3"></path></svg>
      </a>
    </div>
  `);
}

function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("overlay");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("dropdownToggle");

  setActiveNavigation();

  if (!hamburger || !navMenu || !overlay) return;

  const setMenu = (open) => {
    navMenu.classList.toggle("active", open);
    overlay.classList.toggle("active", open);
    document.body.classList.toggle("menu-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  };

  hamburger.addEventListener("click", () => setMenu(true));
  closeMenu?.addEventListener("click", () => setMenu(false));
  overlay.addEventListener("click", () => setMenu(false));

  dropdownToggle?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = dropdown?.classList.toggle("active") ?? false;
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
      dropdownToggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll(".nav-link, .dropdown-link").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
}

function setActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const shopPages = new Set(["shop.html", "shopall.html", "product.html", "forher.html", "forhim.html", "unisex.html"]);

  document.querySelectorAll(".nav-link, .dropdown-link").forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("?")[0];
    const isCurrentPage = linkPage === currentPage;
    const isShopParent = linkPage === "shop.html" && shopPages.has(currentPage);
    link.classList.toggle("active", isCurrentPage || isShopParent);
  });
}

function renderProductLists() {
  document.querySelectorAll("[data-product-list]").forEach((container) => {
    const listType = container.dataset.productList;
    const pageCategory = document.body.dataset.category || "all";
    let list = [...products];

    if (listType === "featured") {
      list = products.filter((product) => product.featured).slice(0, 8);
    }

    if (listType === "category") {
      list = products.filter((product) => product.category === pageCategory);
    }

    if (listType === "catalog") {
      initCatalogFilters(container);
      return;
    }

    container.innerHTML = list.map(productCard).join("");
  });
}

function initCatalogFilters(container) {
  const categoryFilter = document.getElementById("categoryFilter");
  const sortFilter = document.getElementById("sortFilter");
  const resultCount = document.getElementById("resultCount");

  const render = () => {
    const category = categoryFilter?.value || "all";
    const sort = sortFilter?.value || "featured";
    let list = category === "all" ? [...products] : products.filter((product) => product.category === category);

    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "featured") list.sort((a, b) => Number(b.featured) - Number(a.featured));

    container.innerHTML = list.map(productCard).join("");
    if (resultCount) resultCount.textContent = `${list.length} result${list.length === 1 ? "" : "s"}`;
  };

  categoryFilter?.addEventListener("change", render);
  sortFilter?.addEventListener("change", render);
  render();
}

function productCard(product) {
  return `
    <article class="product-card">
      <a href="product.html?id=${product.id}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name} by ${product.brand}" loading="lazy">
      </a>
      <div class="product-info">
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>${product.brand}</p>
        <div class="product-meta">
          <strong class="product-price">${money.format(product.price)}</strong>
          <span class="product-tag">${categoryLabels[product.category]}</span>
        </div>
        <button class="product-btn" type="button" data-add-to-cart="${product.id}">Add to cart</button>
      </div>
    </article>
  `;
}

function initProductDetail() {
  const mount = document.getElementById("productDetail");
  if (!mount) return;

  const productId = new URLSearchParams(window.location.search).get("id") || "allure-homme-sport";
  const product = products.find((item) => item.id === productId) || products[0];
  document.title = `${product.name} | MyScentDiary`;

  mount.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name} by ${product.brand}">
    </div>
    <div class="product-details">
      <p class="eyebrow">${categoryLabels[product.category]}</p>
      <h1>${product.name}</h1>
      <h3>${product.brand}</h3>
      <div class="stars" aria-label="Five star rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <h2>${money.format(product.price)}</h2>
      <div class="description">
        <h4>Description</h4>
        <p>${product.description}</p>
      </div>
      <div class="notes">
        <h4>Fragrance Notes</h4>
        <p>${product.notes}</p>
      </div>
      <p><strong>Size:</strong> ${product.size}</p>
      <div class="quantity-box" aria-label="Quantity selector">
        <button id="minus" type="button" aria-label="Decrease quantity">-</button>
        <span id="quantity">1</span>
        <button id="plus" type="button" aria-label="Increase quantity">+</button>
      </div>
      <div class="product-actions">
        <button class="add-cart" type="button" data-detail-add="${product.id}">Add to Cart</button>
        <a class="button ghost" href="shop.html">Back to shop</a>
      </div>
    </div>
  `;

  let quantity = 1;
  const quantityEl = document.getElementById("quantity");
  document.getElementById("minus")?.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    quantityEl.textContent = quantity;
  });
  document.getElementById("plus")?.addEventListener("click", () => {
    quantity += 1;
    quantityEl.textContent = quantity;
  });
  document.querySelector("[data-detail-add]")?.addEventListener("click", () => addToCart(product.id, quantity));
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button) return;
  addToCart(button.dataset.addToCart, 1);
});

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("myscentdiary-cart")) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("myscentdiary-cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, quantity) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  saveCart(cart);
  flashCartButtons(productId);
}

function flashCartButtons(productId) {
  document.querySelectorAll(`[data-add-to-cart="${productId}"], [data-detail-add="${productId}"]`).forEach((button) => {
    const original = button.textContent;
    button.textContent = "Added";
    setTimeout(() => {
      button.textContent = original;
    }, 1100);
  });
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((item) => {
    item.textContent = count;
  });
}

function initCartPage() {
  const mount = document.getElementById("cartItems");
  if (!mount) return;

  const subtotalEl = document.getElementById("cartSubtotal");
  const checkoutButton = document.getElementById("checkoutButton");
  const checkoutStatus = document.getElementById("checkoutStatus");

  const render = () => {
    const cart = getCart();
    const enriched = cart
      .map((item) => ({ ...products.find((product) => product.id === item.id), quantity: item.quantity }))
      .filter((item) => item.id);

    if (!enriched.length) {
      mount.innerHTML = `<div class="empty-state"><h2>Your cart is empty.</h2><p>Add a fragrance to review price, quantity, and checkout details.</p><a class="button primary" href="shop.html">Shop fragrances</a></div>`;
      subtotalEl.textContent = money.format(0);
      checkoutButton.disabled = true;
      return;
    }

    checkoutButton.disabled = false;
    mount.innerHTML = enriched.map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.brand} &middot; ${item.size}</p>
          <strong>${money.format(item.price)}</strong>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-box">
            <button type="button" data-cart-minus="${item.id}" aria-label="Decrease ${item.name} quantity">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-plus="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
          </div>
          <button class="icon-button" type="button" data-cart-remove="${item.id}">Remove</button>
        </div>
      </article>
    `).join("");

    const subtotal = enriched.reduce((sum, item) => sum + item.price * item.quantity, 0);
    subtotalEl.textContent = money.format(subtotal);
  };

  mount.addEventListener("click", (event) => {
    const plus = event.target.closest("[data-cart-plus]");
    const minus = event.target.closest("[data-cart-minus]");
    const remove = event.target.closest("[data-cart-remove]");
    const cart = getCart();
    const id = plus?.dataset.cartPlus || minus?.dataset.cartMinus || remove?.dataset.cartRemove;
    if (!id) return;

    const item = cart.find((entry) => entry.id === id);
    if (!item) return;

    if (plus) item.quantity += 1;
    if (minus) item.quantity -= 1;
    const nextCart = remove || item.quantity <= 0 ? cart.filter((entry) => entry.id !== id) : cart;
    saveCart(nextCart);
    render();
  });

  checkoutButton?.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  render();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    status.textContent = "Thank you. We received your message and will respond shortly.";
  });
}
