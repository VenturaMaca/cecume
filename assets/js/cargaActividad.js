const params = new URLSearchParams(window.location.search);
const activityId = parseInt(params.get("id"));

if (!isNaN(activityId)) {
    fetch('assets/json/actividades.json')
        .then(response => response.json())
        .then(data => {
            let foundActivity = null;

            // Buscamos la actividad por su ID real en el JSON
            data.forEach(dia => {
                const actividad = dia.actividades.find(a => a.id === activityId);
                if (actividad) {
                    foundActivity = {
                        title: actividad.titulo,
                        description: actividad.descripcion,
                        image: actividad.imagen,
                        hora: actividad.hora || "Por definir",
                        lugar: actividad.lugar || "Por definir",
                        formLink: actividad.url
                    };
                }
            });

            if (foundActivity) {
                // Rellenar la página de detalle
                document.getElementById("activity-title").textContent = foundActivity.title;
                document.getElementById("activity-description").textContent = foundActivity.description;
                document.getElementById("activity-image").src = foundActivity.image;
                document.getElementById("activity-time").textContent = foundActivity.hora;
                document.getElementById("activity-location").textContent = foundActivity.lugar;

                const activityLink = document.getElementById("activity-form-link");
                if (foundActivity.formLink && foundActivity.formLink !== "#") {
                    activityLink.href = foundActivity.formLink;
                    activityLink.style.display = "inline-block";
                } else {
                    activityLink.style.display = "none";
                }
            } else {
                window.location.href = "index.html";
            }
        })
        .catch(error => console.error("Error cargando JSON:", error));
}