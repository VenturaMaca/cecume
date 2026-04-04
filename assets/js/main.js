// Importa Firebase y Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
//import { getAnalytics } from "../firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyANKNamd6AcXQ9bVcnl1vtBJPRU_Mi8vvM",
    authDomain: "webcume-a7281.firebaseapp.com",
    projectId: "webcume-a7281",
    storageBucket: "webcume-a7281.firebasestorage.app",
    messagingSenderId: "1057896196324",
    appId: "1:1057896196324:web:0e384eaa63a1aeb53aa4f1",
    measurementId: "G-94JP2DCK7D"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

// Smooth Scroll para navegación
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Manejo del formulario de contacto con Firebase y reCAPTCHA v3
emailjs.init("TrzCwXsaQD4lm5Yo2");

// Manejo del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto de enviar el formulario

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Datos del formulario:", nombre, email, mensaje);

    // Definir los parámetros de la plantilla
    const templateParams = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
    };

    // Enviar correo con EmailJS
    emailjs.send("service_a87k49d", "template_7flmg7b", templateParams)
        .then(function (response) {
            console.log("Correo enviado con éxito:", response);
            alert("¡Mensaje enviado correctamente!");
            document.getElementById("contact-form").reset();
        }, function (error) {
            console.error("Error al enviar correo:", error);
            alert("Hubo un error al enviar el mensaje.");
        });
});
