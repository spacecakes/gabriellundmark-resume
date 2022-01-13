document.addEventListener("DOMContentLoaded", () => AOS.init({}));
document.querySelector(
  ".copyright"
).innerText += ` - ${new Date().getFullYear()}`;
