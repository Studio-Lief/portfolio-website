/**
 * Studio Lief project detail page
 * Reusable project template populated from js/projects.js.
 */
document.addEventListener("DOMContentLoaded", () => {
  const project = getCurrentProject();
  if (!project) return;

  const galleryItems = getProjectGallery(project);
  renderProjectHeader(project);
  renderProjectAccordions(project);
  renderProjectGallery(project, galleryItems);
  renderNextProjectLink(project);
  initProjectLightbox(galleryItems, project);
});

function getCurrentProject() {
  if (!window.STUDIO_LIEF_PROJECTS) {
    console.error("Studio Lief projects database not available.");
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id") || "project-01";
  return window.STUDIO_LIEF_PROJECTS.getById(projectId);
}

function renderProjectHeader(project) {
  const title = getProjectDisplayTitle(project);
  document.title = project.seoTitle || `${title} — Studio Lief | Branding & Design`;

  const titleEl = document.getElementById("project-title");
  if (titleEl) titleEl.textContent = title;
}

function renderProjectAccordions(project) {
  const descriptionEl = document.getElementById("project-description");
  const serviceEl = document.getElementById("project-service");

  if (descriptionEl) descriptionEl.style.whiteSpace = "pre-line";
  if (descriptionEl) descriptionEl.textContent = project.description || project.about || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  if (serviceEl) serviceEl.textContent = project.service || "Branding Service";

  document.querySelectorAll("[data-project-accordion]").forEach(accordion => {
    const toggle = accordion.querySelector(".project-detail-accordion__toggle");
    const content = accordion.querySelector(".project-detail-accordion__content");
    const icon = accordion.querySelector(".project-detail-accordion__icon");
    if (!toggle || !content) return;

    toggle.addEventListener("click", () => {
      const isOpen = accordion.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      content.setAttribute("aria-hidden", String(!isOpen));
    });
  });
}

function renderProjectGallery(project, galleryItems) {
  const mount = document.getElementById("project-masonry-gallery");
  if (!mount) return;

  const fragment = document.createDocumentFragment();
  galleryItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "project-masonry-item";
    button.type = "button";
    button.dataset.lightboxIndex = String(index);
    button.setAttribute("aria-label", `Open afbeelding ${index + 1} van ${galleryItems.length}`);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt || `${getProjectDisplayTitle(project)} afbeelding ${index + 1}`;
    image.loading = index < 3 ? "eager" : "lazy";
    image.decoding = "async";

    const asset = window.STUDIO_LIEF_IMAGES && window.STUDIO_LIEF_IMAGES[item.src];
    if (asset) {
      image.width = asset.width;
      image.height = asset.height;
      image.srcset = asset.srcset;
      image.sizes = "(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1024px) calc((100vw - 5rem) / 2), calc((min(100vw, 1260px) - 5rem) / 3)";
    }

    button.appendChild(image);
    fragment.appendChild(button);
  });

  mount.replaceChildren(fragment);
}

function initProjectLightbox(galleryItems, project) {
  const lightbox = document.getElementById("project-lightbox");
  const image = document.getElementById("project-lightbox-image");
  const counter = document.getElementById("project-lightbox-counter");
  const gallery = document.getElementById("project-masonry-gallery");
  if (!lightbox || !image || !counter || !gallery || !galleryItems.length) return;

  let currentIndex = 0;
  let touchStartX = null;

  const update = (nextIndex, direction = 0) => {
    currentIndex = (nextIndex + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    lightbox.classList.remove("is-shifting-left", "is-shifting-right");
    if (direction > 0) lightbox.classList.add("is-shifting-right");
    if (direction < 0) lightbox.classList.add("is-shifting-left");

    window.requestAnimationFrame(() => {
      image.src = item.src;
      image.alt = item.alt || `${getProjectDisplayTitle(project)} afbeelding ${currentIndex + 1}`;
      counter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
      window.setTimeout(() => lightbox.classList.remove("is-shifting-left", "is-shifting-right"), 240);
    });
  };

  const open = index => {
    update(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  const next = () => update(currentIndex + 1, 1);
  const prev = () => update(currentIndex - 1, -1);

  gallery.addEventListener("click", event => {
    const trigger = event.target.closest("[data-lightbox-index]");
    if (!trigger) return;
    open(Number(trigger.dataset.lightboxIndex));
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach(el => el.addEventListener("click", close));
  const prevButton = lightbox.querySelector("[data-lightbox-prev]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");
  if (prevButton) prevButton.addEventListener("click", prev);
  if (nextButton) nextButton.addEventListener("click", next);

  lightbox.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener("touchend", event => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    if (delta > 0) prev();
  }, { passive: true });

  window.addEventListener("keydown", event => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  });
}

function renderNextProjectLink(project) {
  const nextLink = document.getElementById("project-next-link");
  const prevLink = document.getElementById("project-prev-link");
  if (!window.STUDIO_LIEF_PROJECTS) return;

  const nextProject = window.STUDIO_LIEF_PROJECTS.getNext(project.id);
  const previousProject = window.STUDIO_LIEF_PROJECTS.getPrevious ? window.STUDIO_LIEF_PROJECTS.getPrevious(project.id) : null;

  if (nextLink && nextProject) {
    nextLink.href = `project.html?id=${encodeURIComponent(nextProject.id)}`;
    nextLink.setAttribute("aria-label", `Volgend project: ${getProjectDisplayTitle(nextProject)}`);
  }

  if (prevLink && previousProject) {
    prevLink.href = `project.html?id=${encodeURIComponent(previousProject.id)}`;
    prevLink.setAttribute("aria-label", `Vorig project: ${getProjectDisplayTitle(previousProject)}`);
  }
}

function getProjectGallery(project) {
  const detailGallery = Array.isArray(project.detailGallery) ? project.detailGallery : [];
  const gallery = detailGallery.length
    ? detailGallery.map(src => ({ src, alt: `${getProjectDisplayTitle(project)} projectbeeld` }))
    : normalizeGalleryObjects(project.gallery, project);

  if (gallery.length) return gallery;
  return [{ src: project.heroImage, alt: `${getProjectDisplayTitle(project)} projectbeeld` }].filter(item => item.src);
}

function normalizeGalleryObjects(gallery, project) {
  if (!Array.isArray(gallery)) return [];
  return gallery
    .map(item => typeof item === "string" ? { src: item, alt: `${getProjectDisplayTitle(project)} projectbeeld` } : { src: item && item.src, alt: item && item.caption })
    .filter(item => item.src);
}

function getProjectDisplayTitle(project) {
  if (project.portfolioTitle) return project.portfolioTitle;
  return (project.title || "")
    .replace(/^Project\s*\d+\s*[—-]\s*/i, "")
    .trim();
}
