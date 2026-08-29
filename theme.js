// Florlaine — shared night-mode + cart-badge logic.
// Include this file on EVERY page (after theme.css, before other scripts is fine).

(function () {
  // Apply saved theme immediately (this file is loaded in <head> synchronously
  // on every page to avoid a flash of the wrong theme).
  try {
    var saved = localStorage.getItem("florlaine-theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  } catch (_) {}
})();

document.addEventListener("DOMContentLoaded", function () {
  // ---------- Night mode toggle ----------
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    });
    try {
      localStorage.setItem("florlaine-theme", theme);
    } catch (_) {}
  }

  // Sync any toggle buttons on the page with the theme already applied.
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.setAttribute(
      "aria-pressed",
      currentTheme() === "dark" ? "true" : "false"
    );
    btn.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  });

  // Keep every open tab in sync if the user flips the toggle elsewhere.
  window.addEventListener("storage", function (e) {
    if (e.key === "florlaine-theme") {
      applyTheme(e.newValue === "dark" ? "dark" : "light");
    }
  });

  // ---------- Shared cart badge (works on every page with a "View Cart" link) ----------
  function updateCartCount() {
    var cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (_) {}

    var count = cart.reduce(function (sum, item) {
      return sum + (Number(item.quantity) || 0);
    }, 0);

    document.querySelectorAll('a[href="cart.html"]').forEach(function (link) {
      var badge = link.querySelector(".cart-count");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "cart-count";
        link.appendChild(badge);
      }
      badge.textContent = count;
      badge.hidden = count === 0;
    });
  }

  updateCartCount();
  window.addEventListener("storage", function (e) {
    if (e.key === "cart") updateCartCount();
  });
  window.florlaineUpdateCartCount = updateCartCount;
});
