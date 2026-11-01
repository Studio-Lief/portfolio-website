/**
 * Studio Lief portfolio overview
 * Renders four-panel project showcases from the same project data used by project.html.
 */
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.querySelector("[data-portfolio-projects]");
  if (!mount || !window.STUDIO_LIEF_PROJECTS) return;

  const projects = window.STUDIO_LIEF_PROJECTS.getAll();
  const fragment = document.createDocumentFragment();

  projects.forEach((project, projectIndex) => {
    const showcase = document.createElement("article");
    showcase.className = "portfolio-showcase";

    const projectHref = `project.html?id=${encodeURIComponent(project.id)}`;
    const projectTitle = getPortfolioTitle(project);

    const mediaLink = document.createElement("a");
    mediaLink.className = "portfolio-showcase__media";
    mediaLink.href = projectHref;
    mediaLink.setAttribute("aria-label", `Bekijk ${projectTitle}`);

    getPortfolioPanels(project).forEach((panel, panelIndex) => {
      const panelEl = document.createElement("span");
      panelEl.className = "portfolio-showcase__panel";

      const flipper = document.createElement("span");
      flipper.className = "portfolio-showcase__flipper";

      const front = createPanelFace(panel.front, `${projectTitle} beeld ${panelIndex + 1}`, projectIndex === 0, panel.frontPosition);
      front.classList.add("portfolio-showcase__face--front");

      const back = createPanelFace(panel.back, `${projectTitle} alternatief beeld ${panelIndex + 1}`, false, panel.backPosition);
      back.classList.add("portfolio-showcase__face--back");

      flipper.append(front, back);
      panelEl.appendChild(flipper);
      mediaLink.appendChild(panelEl);
    });

    const info = document.createElement("div");
    info.className = "portfolio-showcase__info";

    const titleLink = document.createElement("a");
    titleLink.className = "portfolio-showcase__title";
    titleLink.href = projectHref;
    titleLink.textContent = projectTitle;

    const viewLink = document.createElement("a");
    viewLink.className = "portfolio-showcase__view";
    viewLink.href = projectHref;
    viewLink.innerHTML = '<span>BEKIJK</span><span aria-hidden="true">⟶</span>';

    info.append(titleLink, viewLink);
    showcase.append(mediaLink, info);
    fragment.appendChild(showcase);
  });

  mount.replaceChildren(fragment);
});

function createPanelFace(src, alt, eager, position = "50% 50%") {
  const face = document.createElement("span");
  face.className = "portfolio-showcase__face";

  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = eager ? "eager" : "lazy";
  image.decoding = "async";
  image.style.objectPosition = position;

  face.appendChild(image);
  return face;
}

function getPortfolioPanels(project) {
  if (Array.isArray(project.portfolioImages) && project.portfolioImages.length) {
    return normalizePanels(project.portfolioImages);
  }

  const gallery = Array.isArray(project.gallery) ? project.gallery : [];
  const sources = [project.heroImage, ...gallery.map(item => item && item.src)].filter(Boolean);
  const fallbackSources = sources.length ? sources : [project.heroImage].filter(Boolean);

  return normalizePanels([0, 1, 2, 3].map(index => ({
    front: fallbackSources[index % fallbackSources.length],
    back: fallbackSources[(index + 1) % fallbackSources.length]
  })));
}

function normalizePanels(panels) {
  const validPanels = panels
    .map(panel => ({
      front: panel && panel.front,
      back: panel && (panel.back || panel.front),
      frontPosition: panel && (panel.frontPosition || panel.position || "50% 50%"),
      backPosition: panel && (panel.backPosition || panel.position || panel.frontPosition || "50% 50%")
    }))
    .filter(panel => panel.front);

  if (!validPanels.length) return [];

  while (validPanels.length < 4) {
    const source = validPanels[validPanels.length % validPanels.length] || validPanels[0];
    validPanels.push({
      front: source.front,
      back: source.back || source.front,
      frontPosition: source.frontPosition || "50% 50%",
      backPosition: source.backPosition || source.frontPosition || "50% 50%"
    });
  }

  return validPanels.slice(0, 4);
}

function getPortfolioTitle(project) {
  if (project.portfolioTitle) return project.portfolioTitle;
  return (project.title || "")
    .replace(/^Project\s*\d+\s*[—-]\s*/i, "")
    .trim();
}
