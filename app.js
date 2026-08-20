document.querySelectorAll('a[href^="#"]').forEach((a) => {
 a.addEventListener('click', (e) => {
 e.preventDefault();
 const el = document.querySelector(a.getAttribute('href'));
 if (el) el.scrollIntoView({ behavior: 'smooth' });
 });
});

const counters = document.querySelectorAll('[data-count]');
counters.forEach((el) => {
 const target = Number(el.dataset.count);
 const dur = 900;
 const start = performance.now();
 const step = (t) => {
 const p = Math.min(1, (t - start) / dur);
 el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
 if (p < 1) requestAnimationFrame(step);
 };
 requestAnimationFrame(step);
});