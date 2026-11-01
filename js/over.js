(function () {
  const section = document.querySelector('.over-page .over-projects');
  const track = document.querySelector('.over-page .over-projects__track');
  const prevButton = document.querySelector('.over-page .over-projects__arrow--prev');
  const nextButton = document.querySelector('.over-page .over-projects__arrow--next');

  if (!section || !track || !prevButton || !nextButton || !window.STUDIO_LIEF_PROJECTS) return;

  const projects = window.STUDIO_LIEF_PROJECTS.getAll().filter(project => project.showInFavorites !== false);

  function createProjectCard(project) {
    const card = document.createElement('a');
    card.className = 'over-project-card';
    card.href = `project.html?id=${project.id}`;
    card.setAttribute('aria-label', project.title);

    const image = document.createElement('img');
    image.src = project.heroImage;
    image.alt = project.title;
    image.width = 1280;
    image.height = 1600;
    image.loading = 'lazy';
    image.decoding = 'async';

    card.appendChild(image);
    return card;
  }

  track.replaceChildren(...projects.map(createProjectCard));

  let isAnimating = false;

  function getStep() {
    const firstCard = track.querySelector('.over-project-card');
    if (!firstCard) return 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap) || 0;
    return cardWidth + gap;
  }

  function moveNext() {
    if (isAnimating || track.children.length < 2) return;
    const step = getStep();
    if (!step) return;

    isAnimating = true;
    track.style.transition = 'transform var(--transition-slow)';
    track.style.transform = `translateX(-${step}px)`;

    track.addEventListener('transitionend', function handleTransitionEnd() {
      track.removeEventListener('transitionend', handleTransitionEnd);
      track.style.transition = 'none';
      track.appendChild(track.firstElementChild);
      track.style.transform = 'translateX(0)';
      track.offsetHeight;
      track.style.transition = '';
      isAnimating = false;
    }, { once: true });
  }

  function movePrev() {
    if (isAnimating || track.children.length < 2) return;
    const step = getStep();
    if (!step) return;

    isAnimating = true;
    track.style.transition = 'none';
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transform = `translateX(-${step}px)`;
    track.offsetHeight;
    track.style.transition = 'transform var(--transition-slow)';
    track.style.transform = 'translateX(0)';

    track.addEventListener('transitionend', function handleTransitionEnd() {
      track.removeEventListener('transitionend', handleTransitionEnd);
      track.style.transition = '';
      isAnimating = false;
    }, { once: true });
  }

  nextButton.addEventListener('click', moveNext);
  prevButton.addEventListener('click', movePrev);
})();

(function () {
  const toggle = document.querySelector('.over-page .over-intro__toggle');
  const more = document.querySelector('.over-page #over-intro-more');

  if (!toggle || !more) return;

  const text = toggle.querySelector('.over-intro__toggle-text');
  const arrow = toggle.querySelector('.over-intro__toggle-arrow');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let isAnimating = false;

  function setToggleState(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (text) text.textContent = isOpen ? 'LEES MINDER' : 'LEES MEER';
    if (arrow) arrow.textContent = isOpen ? '↑' : '↓';
  }

  function scrollBackToIntro() {
    const intro = document.querySelector('.over-page .over-intro');
    const header = document.querySelector('.site-header');
    if (!intro) return;

    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const targetTop = intro.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  }

  function openMore() {
    if (isAnimating) return;
    isAnimating = true;

    more.hidden = false;
    more.classList.add('is-open');
    more.style.height = '0px';
    more.offsetHeight;
    setToggleState(true);

    if (reduceMotion) {
      more.style.height = 'auto';
      isAnimating = false;
      return;
    }

    more.style.height = `${more.scrollHeight}px`;
  }

  function closeMore() {
    if (isAnimating) return;
    isAnimating = true;

    setToggleState(false);
    more.style.height = `${more.scrollHeight}px`;
    more.offsetHeight;
    more.classList.remove('is-open');

    if (reduceMotion) {
      more.style.height = '0px';
      more.hidden = true;
      isAnimating = false;
      scrollBackToIntro();
      return;
    }

    more.style.height = '0px';
    scrollBackToIntro();
  }

  more.addEventListener('transitionend', event => {
    if (event.propertyName !== 'height') return;

    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      more.style.height = 'auto';
    } else {
      more.hidden = true;
      more.style.height = '';
    }
    isAnimating = false;
  });

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMore();
    } else {
      openMore();
    }
  });
})();
