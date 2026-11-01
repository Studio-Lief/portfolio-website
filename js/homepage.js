/* Homepage case marquees. Add links only to the original .marquee-sequence. */
(() => {
  const pixelsPerSecond = 12;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.marquee').forEach(marquee => {
    const track = marquee.querySelector('.marquee-track');
    const sequence = track.querySelector('.marquee-sequence');
    let animation;
    let frame;

    function rebuild() {
      const distance = sequence.getBoundingClientRect().width;
      if (!distance || !sequence.children.length) return;
      const oldDuration = animation?.effect.getTiming().duration;
      const phase = oldDuration ? (animation.currentTime % oldDuration) / oldDuration : 0;
      animation?.cancel();
      track.querySelectorAll('[data-marquee-clone]').forEach(copy => copy.remove());
      if (reducedMotion.matches) return;

      // Enough copies for any viewport, even if the source sequence is short.
      const copies = Math.ceil(marquee.clientWidth / distance) + 1;
      for (let i = 0; i < copies; i++) {
        const copy = sequence.cloneNode(true);
        copy.dataset.marqueeClone = '';
        copy.setAttribute('aria-hidden', 'true');
        copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        copy.querySelectorAll('a').forEach(link => link.tabIndex = -1);
        copy.querySelectorAll('img').forEach(img => img.loading = 'lazy');
        track.append(copy);
      }

      const frames = marquee.dataset.direction === 'right'
        ? [{ transform: `translateX(${-distance}px)` }, { transform: 'translateX(0)' }]
        : [{ transform: 'translateX(0)' }, { transform: `translateX(${-distance}px)` }];
      const duration = distance / pixelsPerSecond * 1000;
      animation = track.animate(frames, { duration, iterations: Infinity, easing: 'linear' });
      animation.currentTime = phase * duration;
    }

    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(rebuild);
    }

    const resize = new ResizeObserver(schedule);
    resize.observe(marquee);
    resize.observe(sequence);
    new MutationObserver(schedule).observe(sequence, { childList: true });
    reducedMotion.addEventListener('change', schedule);
    schedule();
  });
})();


/* Track real header/ticker heights, including font loading and browser zoom. */
(() => {
  const header = document.querySelector('.site-header');
  const ticker = document.querySelector('.ticker-strip');
  if (!header || !ticker) return;
  const updateHeroSpace = () => {
    const root = document.documentElement;
    root.style.setProperty('--home-header-height', `${header.getBoundingClientRect().height}px`);
    root.style.setProperty('--home-ticker-height', `${ticker.getBoundingClientRect().height}px`);
  };
  const observer = new ResizeObserver(updateHeroSpace);
  observer.observe(header);
  observer.observe(ticker);
  updateHeroSpace();
})();
