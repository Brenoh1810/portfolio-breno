document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("section, footer");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(el => {
    el.classList.add("opacity-0", "translate-y-4", "transition", "duration-700");
    observer.observe(el);
  });
});

