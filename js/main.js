/**
 * ====================================================================
 * STUDIO LIEF - MAIN JAVASCRIPT
 * Navigation, Smooth Interactions & Form Handling
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNav();
  initContactForm();
  initServiceAccordions();
  initSmoothScroll();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const drawerLinks = document.querySelectorAll(".mobile-nav-links a, .mobile-drawer .btn-lets-talk");

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    toggleBtn.classList.add("active");
    drawer.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    toggleBtn.setAttribute("aria-expanded", "true");
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove("active");
    drawer.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  toggleBtn.addEventListener("click", () => {
    if (drawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/**
 * Active Navigation Link Detection
 */
function initActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const activePath = currentPath === "project.html" ? "portfolio.html" : currentPath;
  const navLinks = document.querySelectorAll(".nav-left-links a, .mobile-nav-links a");
  const letsTalkBtns = document.querySelectorAll(".btn-lets-talk");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkPath = href.split("/").pop().split("#")[0];

    if (linkPath === activePath || (activePath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Highlight LET'S TALK on contact page
  if (currentPath === "contact.html") {
    letsTalkBtns.forEach(btn => {
      btn.style.backgroundColor = "var(--color-dark-navy)";
      btn.style.color = "var(--color-white)";
    });
  }
}

/**
 * Simple Contact Form Feedback
 */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  let sending = false;
  const status = document.createElement("p");
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.hidden = true;
  form.appendChild(status);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (sending || !form.reportValidity()) return;
    sending = true;
    const btn = form.querySelector("button[type='submit']");
    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Bericht versturen...";
    status.hidden = true;
    try {
      const response = await fetch("api/contact.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error("Verzenden mislukt");
      status.textContent = "Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.";
      form.reset();
    } catch (error) {
      status.textContent = "Er is iets misgegaan bij het versturen van je bericht. Probeer het later opnieuw.";
    } finally {
      sending = false;
      btn.disabled = false;
      btn.textContent = label;
      status.hidden = false;
    }
  });
}


/**
 * Services Included Items Accordions
 */
function initServiceAccordions() {
  const accordions = document.querySelectorAll(".service-included-accordion");
  if (!accordions.length) return;

  accordions.forEach(accordion => {
    const toggle = accordion.querySelector(".service-included-accordion__toggle");
    const icon = accordion.querySelector(".service-included-accordion__icon");
    const content = accordion.querySelector(".service-included-accordion__content");
    if (!toggle || !icon || !content) return;

    toggle.addEventListener("click", () => {
      const isOpen = accordion.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      content.setAttribute("aria-hidden", String(!isOpen));
      icon.textContent = isOpen ? "−" : "+";
    });
  });
}

/**
 * Smooth Anchor Scroll
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}
