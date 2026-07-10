const ORDER_STORAGE_KEY = "myscentdiary-latest-order";
const ORDER_HISTORY_KEY = "myscentdiary-orders";

let checkoutConfig = { whatsappBusinessNumber: "905488726497", deliveryFee: 12, currency: "USD", estimatedDelivery: "2–4 business days" };
let checkoutCart = [];

const checkoutMoney = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: checkoutConfig.currency
    }).format(value);
    
async function initCheckout() {
  console.log("Init started");

    const form = document.getElementById("checkoutForm");

    if (!form) return;

    try {
        const response = await fetch("checkout-config.json");

        if (response.ok) {
            checkoutConfig = await response.json();
        }

    } catch (e) {
        console.log("Using default checkout settings.");
    }

    checkoutCart = getCart()
        .map(item => ({
            ...products.find(product => product.id === item.id),
            quantity: item.quantity
        }))
        .filter(Boolean);

    if (checkoutCart.length === 0) {
        window.location.href = "cart.html";
        return;
    }

    renderCheckoutSummary();
    console.log("Summary rendered");

    document.getElementById("checkoutDate").textContent =
        new Date().toLocaleDateString();

    form.addEventListener("submit", placeOrder);

}

function renderCheckoutSummary() {
  const subtotal = checkoutCart.reduce((total, item) => total + item.price * item.quantity, 0);
  document.getElementById("checkoutItems").innerHTML = checkoutCart.map((item) => `
    <article class="checkout-item">
      <img src="${item.image}" alt="${item.name}">
      <div><strong>${item.name}</strong><span>${item.brand}</span><small>${checkoutMoney(item.price)} each</small></div>
      <span class="item-quantity">× ${item.quantity}</span>
      <strong>${checkoutMoney(item.price * item.quantity)}</strong>
    </article>
  `).join("");
  document.getElementById("checkoutSubtotal").textContent = checkoutMoney(subtotal);
  document.getElementById("checkoutDelivery").textContent = checkoutMoney(checkoutConfig.deliveryFee);
  document.getElementById("checkoutTotal").textContent = checkoutMoney(subtotal + checkoutConfig.deliveryFee);
}

function updateCheckoutPreview(event) {
  const form = event.currentTarget;
  const data = new FormData(form);
  const customerName = [data.get("firstName"), data.get("lastName")].filter(Boolean).join(" ");
  const address = [data.get("streetAddress"), data.get("apartment"), data.get("city"), data.get("country"), data.get("postalCode")].filter(Boolean).join(", ");
  document.querySelector("#customerPreview strong").textContent = customerName || "Complete your details";
  document.querySelector("#addressPreview strong").textContent = address || "Complete your address";
}

async function placeOrder(event) {

    alert("Place Order clicked!");

    event.preventDefault();

    const form = event.currentTarget;

    const status = document.getElementById("checkoutStatus");

    const button = document.getElementById("placeOrderButton");

    status.textContent = "";

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }

    button.disabled = true;

    button.textContent = "Preparing Order...";

    const data = Object.fromEntries(new FormData(form));

    const subtotal = checkoutCart.reduce(

        (total, item) => total + item.price * item.quantity,

        0

    );

    const deliveryFee = checkoutConfig.deliveryFee;

    const grandTotal = subtotal + deliveryFee;

    const now = new Date();

    const orderNumber =
        "MSD-" +
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") +
        "-" +
        Math.floor(Math.random() * 9000 + 1000);

    const invoiceNumber = "INV-" + orderNumber.replace("MSD-", "");

    const order = {

        orderNumber,

        invoiceNumber,

        createdAt: now.toISOString(),

        estimatedDelivery: checkoutConfig.estimatedDelivery,

        firstName: data.firstName,

        lastName: data.lastName,

        phone: data.phone,

        email: data.email,

        country: data.country,

        city: data.city,

        streetAddress: data.streetAddress,

        apartment: data.apartment,

        postalCode: data.postalCode,

        subtotal,

        deliveryFee,

        grandTotal,

        paymentMethod: "Pay on Delivery",

        items: checkoutCart.map(item => ({

            productId: item.id,

            name: item.name,

            brand: item.brand,

            image: item.image,

            quantity: item.quantity,

            unitPrice: item.price,

            lineTotal: item.price * item.quantity

        }))

    };

    saveCompletedOrder(order);

    localStorage.removeItem("myscentdiary-cart");

    if (typeof updateCartCount === "function") {

        updateCartCount();

    }

    const whatsappUrl = buildWhatsAppUrl(order);

    order.whatsappUrl = whatsappUrl;

    localStorage.setItem(

        ORDER_STORAGE_KEY,

        JSON.stringify(order)

    );

    window.open(whatsappUrl, "_blank");

    window.location.href = "invoice.html";

}


function saveCompletedOrder(order) {

    let history = [];

    try {

        history = JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY)) || [];

    } catch (e) {

        history = [];

    }

    history.unshift(order);

    localStorage.setItem(

        ORDER_HISTORY_KEY,

        JSON.stringify(history.slice(0, 25))

    );

    localStorage.setItem(

        ORDER_STORAGE_KEY,

        JSON.stringify(order)

    );

}
function buildWhatsAppUrl(order) {

    const address = [

        order.streetAddress,

        order.apartment,

        order.city,

        order.country,

        order.postalCode

    ]

    .filter(Boolean)

    .join(", ");

    const items = order.items

        .map(item =>
            `• ${item.name} × ${item.quantity} - ${checkoutMoney(item.lineTotal)}`
        )

        .join("\n");

    const message =

`🌸 Hello MyScentDiary!

I would like to place the following order.

━━━━━━━━━━━━━━

Order Number:
${order.orderNumber}

Invoice Number:
${order.invoiceNumber}

━━━━━━━━━━━━━━

Items:

${items}

━━━━━━━━━━━━━━

Subtotal:
${checkoutMoney(order.subtotal)}

Delivery:
${checkoutMoney(order.deliveryFee)}

Total:
${checkoutMoney(order.grandTotal)}

━━━━━━━━━━━━━━

Customer:

${order.firstName} ${order.lastName}

Phone:
${order.phone}

Email:
${order.email || "Not provided"}

Delivery Address:

${address}

Payment Method:

Pay on Delivery

Thank you ❤️`;

    const phone = String(checkoutConfig.whatsappBusinessNumber)

        .replace(/\D/g, "");

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}

document.addEventListener("DOMContentLoaded", initCheckout);
