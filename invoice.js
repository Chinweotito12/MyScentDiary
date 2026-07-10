const latestOrder = (() => {
  try { return JSON.parse(localStorage.getItem("myscentdiary-latest-order")); } catch { return null; }
})();

const invoiceMoney = (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value));

function initInvoice() {
  if (!latestOrder) {
    window.location.replace("shop.html");
    return;
  }

  const address = [latestOrder.streetAddress, latestOrder.apartment, latestOrder.city, latestOrder.country, latestOrder.postalCode].filter(Boolean).join(", ");
  document.getElementById("invoiceNumber").textContent = latestOrder.invoiceNumber;
  document.getElementById("invoiceDate").textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(latestOrder.createdAt));
  document.getElementById("invoiceCustomer").textContent = `${latestOrder.firstName} ${latestOrder.lastName}`;
  document.getElementById("invoiceContact").textContent = [latestOrder.phone, latestOrder.email].filter(Boolean).join(" · ");
  document.getElementById("invoiceAddress").textContent = address;
  document.getElementById("invoiceItems").innerHTML = latestOrder.items.map((item) => `
    <tr><td><strong>${item.name}</strong><span>${item.brand}</span></td><td>${item.quantity}</td><td>${invoiceMoney(item.unitPrice)}</td><td>${invoiceMoney(item.lineTotal)}</td></tr>
  `).join("");
  document.getElementById("invoiceTotals").innerHTML = `
    <div><span>Subtotal</span><strong>${invoiceMoney(latestOrder.subtotal)}</strong></div>
    <div><span>Delivery</span><strong>${invoiceMoney(latestOrder.deliveryFee)}</strong></div>
    <div class="grand-total"><span>Grand Total</span><strong>${invoiceMoney(latestOrder.grandTotal)}</strong></div>
  `;
  document.getElementById("downloadInvoice").addEventListener("click", downloadInvoicePdf);
  let secondsRemaining = 10;
  const redirectNote = document.getElementById("invoiceRedirectNote");
  const redirectTimer = window.setInterval(() => {
    secondsRemaining -= 1;
    redirectNote.textContent = `Opening order confirmation in ${secondsRemaining} second${secondsRemaining === 1 ? "" : "s"}…`;
    if (secondsRemaining <= 0) {
      window.clearInterval(redirectTimer);
      window.location.href = "confirmation.html";
    }
  }, 1000);
}

async function downloadInvoicePdf() {
  const { jsPDF } = window.jspdf;
  const documentPdf = new jsPDF({ unit: "pt", format: "a4" });
  const left = 54;
  const right = 541;
  let y = 58;

  try {
    const logo = await loadInvoiceLogo();
    documentPdf.addImage(logo, "JPEG", left, 34, 48, 48);
  } catch {}

  documentPdf.setTextColor(47, 43, 45);
  documentPdf.setFont("helvetica", "bold");
  documentPdf.setFontSize(21);
  documentPdf.text("MyScentDiary", left + 60, y);
  documentPdf.setFontSize(28);
  documentPdf.text("INVOICE", right, y, { align: "right" });
  y += 28;
  documentPdf.setFont("helvetica", "normal");
  documentPdf.setFontSize(10);
  documentPdf.text(`Order ${latestOrder.orderNumber}`, right, y, { align: "right" });
  documentPdf.text(new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(latestOrder.createdAt)), right, y + 15, { align: "right" });
  documentPdf.setDrawColor(214, 205, 198);
  documentPdf.line(left, y + 31, right, y + 31);

  y += 64;
  documentPdf.setFont("helvetica", "bold");
  documentPdf.setFontSize(11);
  documentPdf.text("CUSTOMER DETAILS", left, y);
  documentPdf.text("SHIPPING ADDRESS", 310, y);
  documentPdf.setFont("helvetica", "normal");
  y += 18;
  documentPdf.text(`${latestOrder.firstName} ${latestOrder.lastName}`, left, y);
  documentPdf.text(latestOrder.phone, left, y + 15);
  if (latestOrder.email) documentPdf.text(latestOrder.email, left, y + 30);
  const address = [latestOrder.streetAddress, latestOrder.apartment, latestOrder.city, latestOrder.country, latestOrder.postalCode].filter(Boolean).join(", ");
  documentPdf.text(documentPdf.splitTextToSize(address, 220), 310, y);

  y += 75;
  documentPdf.setFillColor(245, 241, 236);
  documentPdf.rect(left, y, right - left, 25, "F");
  documentPdf.setFont("helvetica", "bold");
  documentPdf.text("Item", left + 8, y + 17);
  documentPdf.text("Qty", 365, y + 17, { align: "right" });
  documentPdf.text("Price", 450, y + 17, { align: "right" });
  documentPdf.text("Total", right - 8, y + 17, { align: "right" });
  y += 42;

  documentPdf.setFont("helvetica", "normal");
  latestOrder.items.forEach((item) => {
    documentPdf.text(item.name, left + 8, y);
    documentPdf.text(String(item.quantity), 365, y, { align: "right" });
    documentPdf.text(invoiceMoney(item.unitPrice), 450, y, { align: "right" });
    documentPdf.text(invoiceMoney(item.lineTotal), right - 8, y, { align: "right" });
    y += 24;
  });

  y += 12;
  documentPdf.line(330, y, right, y);
  y += 22;
  documentPdf.text("Subtotal", 400, y, { align: "right" });
  documentPdf.text(invoiceMoney(latestOrder.subtotal), right, y, { align: "right" });
  y += 20;
  documentPdf.text("Delivery", 400, y, { align: "right" });
  documentPdf.text(invoiceMoney(latestOrder.deliveryFee), right, y, { align: "right" });
  y += 25;
  documentPdf.setFont("helvetica", "bold");
  documentPdf.setFontSize(13);
  documentPdf.text("Grand Total", 400, y, { align: "right" });
  documentPdf.text(invoiceMoney(latestOrder.grandTotal), right, y, { align: "right" });

  y += 55;
  documentPdf.setFontSize(10);
  documentPdf.text("Payment Method: Pay on Delivery", left, y);
  documentPdf.text("Order Status: Awaiting Confirmation", left, y + 18);
  documentPdf.save(`${latestOrder.invoiceNumber}.pdf`);
}

function loadInvoiceLogo() {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = "img/logo.jpeg";
  });
}

document.addEventListener("DOMContentLoaded", initInvoice);
