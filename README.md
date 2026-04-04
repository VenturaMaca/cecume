
# Consejo de Estudiantes - Centro Universitario de Mérida

Este repositorio contiene el código fuente de la web oficial del Consejo de Estudiantes del Centro Universitario de Mérida. La plataforma permite la publicación de información relevante, eventos, enlaces a formularios de actividades y todo lo que se le ocurra a nuestro sucesor/es.

## 📌 Características
- Información general sobre el Consejo de Estudiantes.
- Publicación dinámica de enlaces a formularios de actividades.
- Diseño responsivo optimizado para web y móvil.
- Interfaz intuitiva y accesible.

## Organización
```
webCECUME/
├── public/
│ ├── laligaCecume/
│ ├── web/
│ │ ├── assets/
│ │ │ ├── css/
│ │ │ ├── imgs/
│ │ │ ├── js/
│ │ │ ├── json/
│ │ │ ├── scss/
│ │ │ ├── vendors/
│ │ ├── components.html
│ │ ├── detalleActividad.html
│ │ ├── index.html <--LA PAGINA INICIAL
│ │ └── semanaCentro.html
│ ├── 404.css
  └── 404.html
```


## 🚀 Tecnologías Utilizadas
- **Frontend**: HTML, CSS, JavaScript.
- **Alojamiento**: Firebase (Authentication, Firestore, Hosting).
- **Despliegue**: Firebase Hosting.



## 📦 Instalación y Uso
1. Clona el repositorio:
   ```sh
   git clone https://github.com/javicone/webCecume.git
   ```
2. Entra en el directorio del proyecto:
   ```sh
   cd webCecume
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Configura Firebase:
   - Crea un proyecto en Firebase.
   ```sh
   firebase init
   ```
   - Agrega el archivo `firebase-config.js` con las credenciales del proyecto.

## 📌 Como desplegar la web
Solo el admin que posea las credenciales de firebase debería de actualizar el contenido de la web. Una vez que tienes configurado el proyecto es importante mantener el repositorio actualizado. Para desplegar los cambios ejecutamos el siguiente comando:
  ```sh
   firebase deploy
  ```
De esta forma se actualizará la web

## 📌 Contribuciones (sin despliegue)
Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama con tu funcionalidad o corrección de errores.
3. Realiza un pull request describiendo los cambios.


## 📄 Licencia
---
_Mantenido por el Consejo de Estudiantes del Centro Universitario de Mérida._
