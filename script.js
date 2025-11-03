// Alert when order buttons are clicked
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    if (button.type !== "submit") {
      alert("Thank you for your order! Your coffee will be ready soon ☕");
    }
  });
});

// Form submit event
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon ☕");
  contactForm.reset();
});
