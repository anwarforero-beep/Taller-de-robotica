document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const talleres = [
        { fecha: '2025-12-01', nombre: 'Introducción a la Robótica' },
        { fecha: '2025-12-10', nombre: 'Programación de Robots' },
        { fecha: '2025-12-20', nombre: 'Robótica Avanzada' }
    ];
    let html = '<ul class="list-group">';
    talleres.forEach(t => {
        html += `<li class="list-group-item">${t.fecha} - ${t.nombre}</li>`;
    });
    html += '</ul>';
    calendar.innerHTML = html;
});