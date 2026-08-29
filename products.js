// Shared "add to cart" logic for every product/occasion listing page.
// Buttons just need: class="cart-btn" data-name="" data-price="" data-image=""

document.addEventListener("DOMContentLoaded", () => {
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (window.florlaineUpdateCartCount) window.florlaineUpdateCartCount();
  }

  document.querySelectorAll(".cart-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const image = button.dataset.image;

      if (!name || Number.isNaN(price)) return;

      const cart = getCart();
      const existing = cart.find((item) => item.name === name);
      if (existing) {
        existing.quantity = (Number(existing.quantity) || 1) + 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }

      saveCart(cart);

      const original = button.textContent;
      button.textContent = "Added ✓";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
      }, 1000);
    });
  });
});
