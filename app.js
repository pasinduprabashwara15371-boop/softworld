function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
    "Hello SoftWorld!%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Service: " + encodeURIComponent(service) + "%0A" +
    "Project: " + encodeURIComponent(message);

  window.open("https://wa.me/94710510428?text=" + text, "_blank");
}
