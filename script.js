// Alex Carter Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("active");
      });
    });
  }

  // Form validation
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Name validation
      const nameInput = document.getElementById("name");
      const nameError = document.getElementById("name-error");
      if (!nameInput.value.trim()) {
        nameError.classList.remove("hidden");
        isValid = false;
      } else {
        nameError.classList.add("hidden");
      }

      // Email validation
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("email-error");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailError.classList.remove("hidden");
        isValid = false;
      } else {
        emailError.classList.add("hidden");
      }

      // Subject validation
      const subjectInput = document.getElementById("subject");
      const subjectError = document.getElementById("subject-error");
      if (!subjectInput.value.trim()) {
        subjectError.classList.remove("hidden");
        isValid = false;
      } else {
        subjectError.classList.add("hidden");
      }

      // Message validation
      const messageInput = document.getElementById("message");
      const messageError = document.getElementById("message-error");
      if (!messageInput.value.trim()) {
        messageError.classList.remove("hidden");
        isValid = false;
      } else {
        messageError.classList.add("hidden");
      }

      // If form is valid, show success message
      if (isValid) {
        const formSuccess = document.getElementById("form-success");
        formSuccess.classList.remove("hidden");

        // Reset form after successful submission
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          formSuccess.classList.add("hidden");
        }, 5000);
      }
    });
  }

  // Add CSS classes to project cards
  const projectCards = document.querySelectorAll("#projects .bg-white");
  projectCards.forEach((card) => {
    card.classList.add("project-card");
  });

  // Add CSS classes to skill tags
  const skillTags = document.querySelectorAll(".bg-indigo-100");
  skillTags.forEach((tag) => {
    tag.classList.add("skill-tag");
  });

  // Add CSS classes to buttons
  const primaryButtons = document.querySelectorAll(".bg-indigo-600");
  primaryButtons.forEach((button) => {
    button.classList.add("btn-primary");
  });

  // Add CSS class to profile image
  const profileImage = document.querySelector("#home .rounded-full img");
  if (profileImage) {
    profileImage.classList.add("profile-image");
  }

  // Intersection Observer for section animations
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const sectionObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Once the animation is done, unobserve the section
        observer.unobserve(entry.target);
      }
    });
  },
  observerOptions);

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
