/*
  Aikya Holidays website
  Configure the business WhatsApp number below before publishing.
  Use international format with digits only, e.g. India: 918464913143
*/
const WHATSAPP_NUMBER = "918464913143";

function makeWhatsAppUrl(message) {
  const number = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  if (!number || number.length < 10 || number.includes("XXXXXXXX")) {
    alert("Please set your business WhatsApp number in script.js first.");
    return null;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".wa-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const trip = link.dataset.trip;
    const message = trip
      ? `Hello Aikya Holidays! I'd like to request a quote for the ${trip} package. Please share details.`
      : "Hello Aikya Holidays! I'd like to plan a trip. Please share your holiday package options.";
    const url = makeWhatsAppUrl(message);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
