window.onload = () => {
  const signUpBTNlink = document.querySelector(".signUpBTN-link");
  const signInBTNlink = document.querySelector(".signInBTN-link");
  const wrapper = document.querySelector(".wrapper");

  // Toggle between Sign In and Sign Up
  signUpBTNlink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
  });

  signInBTNlink.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
  });

  // Sign In handling
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // This is a front-end demo with no real backend, so there is nothing to
    // authenticate against. We only remember the username (never the
    // password) so the greeting on other pages can say hello.
    if (username && password) {
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Sign Up handling
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signup-password").value;

    // Demo only: no backend to register against, and passwords are never
    // written to storage. Real accounts need a real server-side signup.
    if (email && password) {
      localStorage.setItem("signupEmail", email);
      window.location.href = "index.html";
    } else {
      alert("Please fill in all fields.");
    }
  });
};
