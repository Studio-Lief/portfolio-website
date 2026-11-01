/* Metadata only: leaves rendered content and project interactions untouched. */
document.addEventListener('DOMContentLoaded', () => {
  const api = window.STUDIO_LIEF_PROJECTS;
  if (!api) return;
  const requested = new URLSearchParams(location.search).get('id');
  const projects = api.getAll();
  const project = requested
    ? projects.find(item => item.id.toLowerCase() === requested.toLowerCase().trim() || (item.slug || '').toLowerCase() === requested.toLowerCase().trim())
    : projects[0];
  if (!project) {
    document.querySelector('meta[name="robots"]').content = 'noindex, follow';
    return;
  }
  const title = project.portfolioTitle || project.title.replace(/^Project\s*\d+\s*[—-]\s*/i, '');
  const description = project.seoDescription || `${title}: ${project.service}. Bekijk het project, de achtergrond en de ontwerpen van Studio Lief | Branding & Design.`;
  const url = `https://studio-lief.com/project.html?id=${encodeURIComponent(project.id)}`;
  document.querySelector('meta[name="description"]').content = description;
  if (project.seoTitle) document.title = project.seoTitle;
  document.querySelector('meta[property="og:title"]').content = project.seoTitle || `${title} — Studio Lief | Branding & Design`;
  document.querySelector('meta[property="og:description"]').content = description;
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = url;
  document.head.appendChild(canonical);
  const ogUrl = document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.content = url;
  document.head.appendChild(ogUrl);
});
