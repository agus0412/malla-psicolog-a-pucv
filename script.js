document.querySelectorAll('.curso').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('completed');
    const next = el.dataset.next.trim().split(/\s+/).filter(x=>x);
    next.forEach(id => {
      const nextCurso = document.getElementById(id);
      if (nextCurso) {
        nextCurso.style.display = el.classList.contains('completed') ? 'block' : 'none';
      }
    });
  });
});

// Al cargar: ocultar todos los cursos que se abren desde otros.
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.curso').forEach(el => {
    const next = el.dataset.next.trim().split(/\s+/).filter(x=>x);
    next.forEach(id => {
      const nc = document.getElementById(id);
      if (nc) nc.style.display = 'none';
    });
  });
});
