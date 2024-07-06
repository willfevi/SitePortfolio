document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const revealSection = (entries, observer) => {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
        section.classList.remove('visible'); // Ensure sections are hidden initially
    });
});
