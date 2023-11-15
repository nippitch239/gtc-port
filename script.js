// Function to simulate the typing effect with increasing speed
function typeText(targetElement, text, initialSpeed, acceleration) {
  const element = document.getElementById(targetElement);
  let index = 0;
  let currentSpeed = initialSpeed;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;

      // Reduce the current speed gradually with the acceleration factor
      currentSpeed -= acceleration;
      if (currentSpeed < 50) currentSpeed = 50; // Ensure a minimum speed

      setTimeout(type, currentSpeed);
    } else {
      // Reset the index and empty the content for infinite loop
      index = 0;
      element.textContent = "";

      // Reset the speed for the next loop
      currentSpeed = initialSpeed;

      setTimeout(type, initialSpeed); // Add a small delay before starting the next loop
    }
  }

  type();
}

// Call the typing function with your desired text, initial speed, and acceleration
const textToType = "NIPPITCH KONGHUAYROB";
const initialSpeed = 500; // milliseconds
const acceleration = 50; // milliseconds

typeText("headerText", textToType, initialSpeed, acceleration);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll(".bor li a");

  function setActiveLink() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const link = document.querySelector(`.bor li a[href="#${section.id}"]`);

      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        navbarLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Initial call on page load
  setActiveLink();

  // Listen for scroll events
  window.addEventListener("scroll", setActiveLink);
});
