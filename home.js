document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("[name='name']").value.trim();
      const email = form.querySelector("[name='email']").value.trim();
      const phone = form.querySelector("[name='number']").value.trim();
      const message = form.querySelector("[name='message']").value.trim();

      if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
      }

      const subject = encodeURIComponent(`Florlaine contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
      );

      window.location.href = `mailto:Florlaine@gmail.com?subject=${subject}&body=${body}`;
      window.location.assign("thank.html");
    });
  }

  // Support both the homepage search input and a future #searchBar input.
  const searchInput =
    document.getElementById("search-input") ||
    document.getElementById("searchBar");

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const searchForm = searchInput.closest("form");
        if (searchForm) searchForm.submit();
      }
    });
  }

  // Cart badge + night mode are handled site-wide by theme.js.
});
