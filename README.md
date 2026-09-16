# Portal de Eventos Universitarios - React

Nombre:Ruben david borre perez

Descripción del proyecto:
Aplicación web interactiva desarrollada en React con Vite para la visualización y gestión de inscripciones a talleres y eventos universitarios. Permite consultar una lista dinámica de eventos y gestionar la inscripción mediante un formulario interactivo.

---

## Componentes creados:
- `Header.jsx`: Encabezado principal de la interfaz con navegación semántica (`<header>`, `<nav>`).
- `EventCard.jsx`: Componente modular reutilizable que renderiza los detalles de cada evento y maneja el estado local para mostrar u ocultar la información extendida.
- `RegistrationForm.jsx`: Formulario de inscripción dinámico que carga la lista de eventos mediante `.map()`, gestiona la prevención de recarga con `e.preventDefault()` y alterna el estado de inscripción.
- `Footer.jsx`: Pie de página semántico con información institucional y derechos de autor.
- `App.jsx`: Componente raíz que actúa como fuente de verdad para los datos y coordina el flujo de props hacia los componentes hijos.

---

## Conceptos de React utilizados:
- JSX: Sintaxis declarativa para combinar la estructura HTML con lógica de JavaScript.
- Componentes Funcionales y Props: Arquitectura modular con paso de datos unidireccional de padres a hijos.
- Estado Local (`useState`): Manejo de reactividad en la interfaz para alternar visibilidad de detalles y confirmar inscripciones.
- Renderizado de Listas (`.map()` y `key`): Generación dinámica de elementos del DOM garantizando la identidad única de cada nodo.
- HTML Semántico: Uso estricto de etiquetas como `<header>`, `<nav>`, `<main>`, `<article>`, `<form>` y `<footer>`.
- Manejo de Eventos: Control de eventos de envío (`onSubmit`) e interacción de usuario (`onClick`).

---

## Preguntas de reflexión:

### ¿Qué fue lo más difícil del ejercicio?
Comprender la desestructuración correcta de las props al transmitirlas entre componentes y asegurar el control del evento por defecto en el formulario (`e.preventDefault()`) para evitar que la página se refrescara y perdiera el estado.

### ¿Qué diferencia identifica ahora entre HTML y React?
En HTML tradicional la estructura es estática y la interacción requiere manipular directamente el DOM de forma imperativa con JavaScript. En React, la interfaz es declarativa: se construyen componentes reutilizables cuyo contenido se actualiza automáticamente en pantalla cuando cambia el estado (`useState`), mejorando el rendimiento y la mantenibilidad.