document.addEventListener("DOMContentLoaded", () => {
  let order = null;
  try { order = JSON.parse(localStorage.getItem("myscentdiary-latest-order")); } catch {}
  if (!order) {
    window.location.replace("shop.html");
    return;
  }

  document.getElementById("confirmationOrder").textContent = order.orderNumber;
  document.getElementById("confirmationInvoice").textContent = order.invoiceNumber;
  document.getElementById("confirmationDelivery").textContent = order.estimatedDelivery || "2–4 business days";
  if (order.whatsappUrl) {
    const link = document.getElementById("whatsappFallback");
    link.href = order.whatsappUrl;
    link.hidden = false;
  }
});
