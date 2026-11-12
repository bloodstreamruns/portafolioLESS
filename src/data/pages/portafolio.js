const portafolio = {
    perfil_nombre: "Daniel Enrique Sánchez Rodríguez",
    perfil_rol: "Estudiante de Ciencias de la Computación",
    perfil_foto_url: "/src/assets/foto-perfil.jpg",
    perfil_foto_alt: "Foto de perfil de Daniel Enrique Sánchez Rodríguez",
    perfil_biografia: "Estudiante de Ciencias de la Computación con interés en el desarrollo de herramientas prácticas que resuelven problemas concretos: desde aplicaciones de escritorio con inteligencia artificial local, hasta apps móviles con persistencia en la nube. Me interesa particularmente la arquitectura de sistemas en la nube y la administración de servidores Linux, áreas que busco seguir profundizando junto con el desarrollo de software.",
    contacto_email: "lispector.bazterrica@proton.me",
    navegacion: [
        { nav_texto: "Biografía", nav_enlace: "#biografia" },
        { nav_texto: "Proyectos", nav_enlace: "#proyectos" },
        { nav_texto: "Contacto", nav_enlace: "#contacto" }
    ],
    proyectos: [
        {
            proyecto_titulo: "Pipeline de Análisis de Datos con IA Local",
            proyecto_descripcion: "Aplicación de escritorio para análisis de datos asistido por inteligencia artificial ejecutada localmente, sin depender de servicios en la nube.",
            proyecto_stack: "Python · PyQt6 · Ollama (Phi-4) · Pandas · Matplotlib",
            proyecto_repositorio: "https://github.com/bloodstreamruns/Pipeline-de-An-lisis-de-Datos-con-IA-Local"
        },
        {
            proyecto_titulo: "AcadTrack",
            proyecto_descripcion: "App de Android para que estudiantes universitarios gestionen sus asignaturas y tareas: registro, seguimiento y visualización de progreso desde un panel central, con datos sincronizados en tiempo real.",
            proyecto_stack: "Kotlin · Jetpack Compose · Firebase Firestore · MVVM",
            proyecto_repositorio: "https://github.com/bloodstreamruns/AcadTrack"
        },
        {
            proyecto_titulo: "Herramienta de Manipulación de PDF",
            proyecto_descripcion: "Programa en Python para trabajar con archivos PDF: conversión a otros formatos y viceversa, fusión de varios archivos en uno solo, y extracción de texto.",
            proyecto_stack: "Python · pathlib · pypdf"
        }
    ],
    campos: [
        { campo_id: "nombre", campo_etiqueta: "Nombre", campo_tipo: "text" },
        { campo_id: "email", campo_etiqueta: "Email", campo_tipo: "email" },
        { campo_id: "mensaje", campo_etiqueta: "Mensaje", campo_multilinea: true }
    ],
    enlaces_pie: [
        { enlace_etiqueta: "Repositorio", enlace_url: "https://github.com/bloodstreamruns/" },
        { enlace_etiqueta: "Portafolio desplegado", enlace_url: "https://bloodstreamruns.github.io/Portafolio-Laboral/" }
    ]
};

export default portafolio;