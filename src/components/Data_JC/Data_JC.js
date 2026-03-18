const data = {
  name: "Joao Miguel",
  address: "Basauri, Bizkaia",
  email: "miguel-cds@hotmail.com",
  avatar: "./CVProfile.jpg",

  aboutMe:
    "Soy estudiante de Desarrollo de Aplicaciones Web (DAW) y del Máster en Desarrollo Web Full Stack. Me estoy especializando en desarrollo backend con Node.js, Express y MongoDB, aunque también trabajo frontend con React. Provengo de un entorno técnico y de atención al cliente, lo que me ha aportado autonomía, organización y capacidad de resolución de problemas. Busco mi primera oportunidad como desarrollador junior para seguir creciendo profesionalmente y aportar valor desde el primer día.",

  aboutMe_English:
    "I am a Web Application Development (DAW) student and a Full Stack Web Development master’s student. I am mainly focused on backend development using Node.js, Express, and MongoDB, while also working with React on the frontend. Coming from a technical and customer-oriented background, I have developed strong problem-solving skills, autonomy, and good time management. I am currently looking for my first opportunity as a junior web developer.",

  education: [
    {
      degree: "CFGS en Desarrollo de Aplicaciones Web (DAW)",
      university: "The Power FP",
      graduationYear: "2024 - 2026",
      relevantCourses: `
      HTML, CSS y JavaScript, 
      Diseño de Aplicaciones Web Front y Backend con Node.js y Express, 
      Bases de Datos Relacionales y NoSQL, 
      APIs REST y autenticación`,
    },
    {
      degree: "Máster en Desarrollo Web Full Stack",
      university: "The Power",
      graduationYear: "2024 - 2026",
      relevantCourses: `HTML, CSS, JavaScript, React, Node.js, MongoDB Arquitectura Full Stack`,
    },
  ],

  workExperience: [
    {
      position: "Data Analyst Intern",
      company: "Mercanza",
      startDate: "Marzo ",
      endDate: "Junio 2026",
      description: [
        "Donde Realice las siguientes Tareas: ",
        "Procesamiento y limpieza de datos mediante Python y librerías como Pandas",
        "Transformación de datos (ETL) para su análisis y visualización",
        "Generación de datasets preparados para visualización",
        "Creación de dashboards e informes en Power BI",
        "Análisis de datos para obtención de insights",
      ],
    },
    {
      position: "Técnico de Campo",
      company: "Ista Metering Services Spain",
      startDate: "2019",
      endDate: "2026",
      description: [
        "Donde Realice las siguientes Tareas:",
        "Lectura, mantenimiento y revisión de equipos de medición",
        "Resolución de incidencias en campo, trabajo autónomo por rutas y trato directo con clientes",
        "Durante medio año realicé tareas de organización de personal, asignación de tareas y seguimiento del trabajo del equipo",
      ],
    },
  ],

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "APIs REST",
    "Git / GitHub",
    "Patrón DAO",
    "Mongoose",
    "SCRUM / Agile",
    "Java",
    "Bootstrap",
    "Tailwind CSS",
  ],

  projects: [
    {
      title: "Custom Pintarest - Async-Web",
      description:
        "Es una version custom de Pintarest. Esta centrado en JavaScript asíncrono, consumo de APIs y renderizado dinámico de datos.",
      link: "https://async-web-jc.netlify.app/",
      image: "./project1.avif",
      tecnologies: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Recipe Hub App - REACT",
      description:
        "Aplicación de recetas con React, consumo de TheMealDB API, favoritos con localStorage y diseño responsive",
      link: "https://recipehubapp.netlify.app/",
      image: "./project2.avif",
      technologies: ["React", "React Router DOM", "Context API", "TheMealDB API"],
    },
    {
      title: "Asignador de Zonas - Bilbao ",
      description:
        "Desarrollada en mis ratos libres, fue la mejor idea que tuve para poder quitarme la tediosa tarea de asignar las calles por zonas de un exel, facilitando asi muchas de mis tareas. Es una Aplicación web progresiva (PWA) que procesa archivos Excel con listados de calles y les asigna automáticamente su zona en Bilbao. ",
      link: "https://exeldirecciones-jcosta-dev.netlify.app/",
      image: "./project1.avif",
      tecnologies: ["JavaScript", "CSS", "HTML"]

    },
    {
      title: "Agenda De Eventos",
      description:
        "Aplicación web desarrollada con React y Vite para consultar y organizar eventos del centro: charlas, torneos, talleres y excursiones.",
      link: "https://eventos-by-jcosta.netlify.app/",
      image: "./project1.avif",
      tecnologies: ["JavaScript", "React", "HTML", "Vite"]
    },
    {
      title: "Backend Api Rest",
      description:
        "Esta API REST está desarrollada con Node.js, Express y MongoDB/Mongoose. Proporciona un sistema completo de gestión de usuarios, autenticación mediante JWT, subida y gestión de imágenes con Cloudinary, CRUD de canciones y un sistema de favoritos sin duplicados. El proyecto sigue una arquitectura modular y escalable, ideal para entornos de producción y aprendizaje avanzado",
      link: "https://github.com/Miguelcds/Backend_Api_Songs.git",
      image: "./project3.avif",
    },
    {
      title: "CSS Showcase",
      description:
        "Proyecto enfocado en CSS moderno con layouts responsive, animaciones y componentes reutilizables utilizando Flexbox y Grid.",
      link: "https://css-project-jcosta.netlify.app/",
      image: "./project4.avif",
    },
    {
      title: "E-Commerce",
      description:
        "Este Fue mi Primer proyecto con HTML y CSS. Lo conservo con cariño ya que aqui empecé a Rodar. Es una pagina responsive desarrollada con HTML y CSS, enfocada en estructura, diseño y experiencia de usuario.",
      link: "https://proyect-shop-css.netlify.app/",
      image: "./project1.avif",
    },
    {
      title: "Portfolio Website",
      description:
        "Mi primer Portfolio personal donde muestro mis proyectos, habilidades y evolución como desarrollador web. Actualmente esta en deuso, ya que diseñe esta nueva version, cuando fui desarrollando mas habilidades",
      link: "https://joaocosta-my-portfolio.vercel.app/#",
      image: "./project2.avif",
    },
  ],
};

export default data;
