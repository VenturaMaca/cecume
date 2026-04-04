document.addEventListener("DOMContentLoaded", () => {

    fetch('assets/json/actividades.json')
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById('actividades-container');
            container.innerHTML = ""; // Limpiar por si acaso

            data.forEach(dia => {

                // --- CONTENEDOR DEL DÍA ---
                const daySection = document.createElement('div');
                daySection.classList.add('day-section', 'mb-5');

                const dayTitle = document.createElement('h2');
                dayTitle.classList.add('day-title', 'text-primary', 'mb-4');
                dayTitle.textContent = dia.dia;

                daySection.appendChild(dayTitle);

                // --- GRID DE ACTIVIDADES ---
                const activitiesContainer = document.createElement('div');
                activitiesContainer.classList.add('row');

                dia.actividades.forEach(actividad => {

                    const col = document.createElement('div');
                    col.classList.add('col-md-4', 'mb-4');

                    col.innerHTML = `
                        <div class="card actividad-card h-100">
                            <img src="${actividad.imagen}" class="card-img-top" alt="${actividad.titulo}">
                            
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${actividad.titulo}</h5>

                                <p><strong>Hora:</strong> ${actividad.hora || "Por determinar"}</p>
                                <p><strong>Lugar:</strong> ${actividad.lugar || "Por determinar"}</p>

                                <p class="card-text">${actividad.descripcion}</p>

                                ${
                                    actividad.url !== "#"
                                    ? `<a href="${actividad.url}" target="_blank" class="btn btn-primary mt-auto">Más información</a>`
                                    : ``
                                }
                            </div>
                        </div>
                    `;

                    activitiesContainer.appendChild(col);
                });

                daySection.appendChild(activitiesContainer);
                container.appendChild(daySection);
            });
        })

        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            document.getElementById('actividades-container').innerHTML =
                "<p>Error al cargar las actividades.</p>";
        });

});
