/** @format */

export type Locale = "es" | "en";

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLocale: Locale = "en";

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "es" || lang === "en") return lang;
  return defaultLocale;
}

export const ui = {
  es: {
    // Layout
    "layout.title": "Portfolio JoaEm - Ingeniero de IA y Desarrollador Móvil",
    "layout.description":
      "Contrata a Joaquín para desarrollar tus aplicaciones móviles y web, y para implementar soluciones de IA.",

    // Header
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy Joaquín",
    "hero.badge": "Disponible para contratación",
    "hero.role":
      "Ingeniero de IA y Desarrollador Móvil, y creador de contenido sobre Diabetes.",
    "hero.location": "De Córdoba, Argentina.",
    "hero.tagline": "Especializado en llevar tus ideas al código.",
    "hero.downloadCV": "Descargar CV",

    // Section titles
    "section.experience": "Experiencia Laboral",
    "section.projects": "Proyectos",
    "section.about": "Sobre Mí",

    // About Me
    "about.p1": `Mi nombre es <Joaquín Emanuel Lizarraga />, pero mis amigos me llaman Ema. Escribí mi primer programa en un PIC usando un grabador PIC en C cuando tenía 14 años. Después de eso, pasé a Arduino, construyendo sistemas de domótica y robótica con IoT.`,
    "about.p1.highlight":
      "Ahora, creo aplicaciones que interactúan con sensores y aprovechan la IA.",
    "about.p2": `Actualmente, estoy desarrollando`,
    "about.p2.project": "SugarSync",
    "about.p2.rest":
      ", una app para el control y manejo de la diabetes que permite a los usuarios leer datos de varias marcas de sensores, registrar su consumo de carbohidratos y mantener un registro completo accesible para sus médicos.",
    "about.p3": `Entre mis logros más orgullosos está mi experiencia durante el bootcamp de Henry, donde fui elegido como Teaching Assistant. Guié y apoyé a los nuevos ingresantes del bootcamp a través de un camino intensivo hasta la graduación, logrando una tasa de éxito del 100%. Hoy, soy un desarrollador`,
    "about.p3.highlight": "especializado en implementaciones de IA",
    "about.p3.rest":
      "para aplicaciones móviles, trabajando en proyectos innovadores que integran soluciones de chat impulsadas por IA, gestión automatizada de tickets y otras tecnologías de vanguardia.",

    // Projects
    "projects.viewCode": "Ver código fuente",
    "projects.goToWeb": "Ir al sitio web",
    "projects.downloadApp": "Descargar App Android",

    // Project descriptions
    "project.onde.description":
      "Un marketplace inmobiliario full-stack con capacidades avanzadas de búsqueda por IA, descubrimiento semántico de propiedades y asistencia de chat inteligente. Construido con un enfoque de arquitectura dual moderna que combina APIs REST tradicionales con funciones serverless edge.",
    "project.sugarsync.description":
      'Una app multiplataforma de gestión de diabetes impulsada por IA, enfocada en nutrición personalizada, insights de glucosa y colaboración médico-paciente. Construida con React Native, Expo y Supabase, integra APIs de USDA y Edamam para conteo de carbohidratos, registro de alimentos por voz y análisis nutricional estructurado. Usando OpenAI y Pinecone, SugarSync correlaciona comidas, actividad y datos históricos de glucosa para mostrar insights predictivos y tarjetas de "riesgo del día", todo sobre un backend seguro multi-tenant protegido con RLS listo para uso clínico.',
    "project.pursuit.description": `Una aplicación móvil desarrollada con React Native y Expo, integrando Supabase para servicios de backend y autenticación, y utilizando OpenAI.

Implementa un modelo de Retrieval Augmented Generation (RAG) con Pinecone para generar planes de entrenamiento y nutricionales personalizados basados en los datos personales de cada usuario.

La aplicación combina IA y análisis de datos para proporcionar recomendaciones personalizadas que optimizan el rendimiento individual y el bienestar general.`,
    "project.rentscape.description": `Una integración dentro de la plataforma Rentscape que presenta una solución de chat impulsada por IA.

Este sistema aprovecha el chat interactivo combinado con function calling para generar datos precisos, que luego se utilizan para realizar búsquedas en Pinecone de las mejores propiedades en alquiler.

La solución ofrece una experiencia de búsqueda intuitiva y personalizada, agilizando el proceso de toma de decisiones en el mercado inmobiliario.`,
    "project.pokedex.description":
      "App desarrollada con React Native y Expo usando la API de Pokemon, para mostrar información sobre pokemon. La persistencia de datos se maneja con la librería AsyncStorage.",
    "project.nasa.description":
      "Desarrollé una app con React Native CLI y TypeScript para ver las imágenes tomadas por el telescopio Hubble proporcionadas por la API 'Astronomy Picture of the Day' de NASA.",
    "project.pomodoro.description":
      "App desarrollada con React Native Expo y Tailwind es una herramienta simple pero efectiva para mejorar la productividad. Con una interfaz minimalista y fácil de usar, esta aplicación permite a los usuarios dividir su tiempo en períodos de trabajo y descanso usando la técnica Pomodoro.",
    "project.blog.description":
      'Blog dinámico entregado para incorporación al sitio web de la empresa. Colaboración entre estudiantes aplicando la metodología "scrum". Interfaz de usuario construida en Next.js 13, con implementación de Zustand para gestión de estado global. Servidor construido en AWS Lambda, configurando AWS Api Gateway como trigger de eventos. Sistema de almacenamiento de imágenes en AWS S3 Buckets.',

    // Experience
    "exp.onde.date": "Julio 2025 - Actualidad",
    "exp.onde.title":
      "Ingeniero de IA y Desarrollador Fullstack Móvil (React Native - Expo, Supabase e IA)",
    "exp.sugarsync.date": "Agosto 2025 - Actualidad",
    "exp.sugarsync.title":
      "Fundador e Ingeniero de IA Móvil (React Native, Supabase e IA para HealthTech)",
    "exp.sparkco.date": "Agosto 2024 - Junio 2025",
    "exp.sparkco.title":
      "Ingeniero de IA y Desarrollador Fullstack Móvil (React Native - Expo, Supabase e IA)",
    "exp.ha.date": "Febrero 2024 - Agosto 2024",
    "exp.ha.title": "HA - Henry Assistant",
    "exp.ha.description":
      "Las responsabilidades son: Pre-seleccionar nuevos Teaching Assistants. Entrenarlos en habilidades blandas. Realizar role-plays, donde los candidatos pre-seleccionados participan en una situación simulada. Finalmente elegir a los finalistas, quienes estarán a cargo de los estudiantes entrantes al bootcamp de Henry.",
    "exp.bocancorp.date": "Agosto 2023 - Enero 2024",
    "exp.bocancorp.title": "Ingeniero de Software",
    "exp.bocancorp.description":
      "Desarrollar una página dinámica usando AWS (DynamoDB, S3, Lambda), NextJs, Zustand, Tailwind, MaterialTailwind. Integrar sistema de markdown de texto enriquecido y gestión de archivos multimedia. Autenticación con token y formularios controlados. Desarrollar con metodologías SCRUM, ejercitar GitFlow, coordinar con tablero de tareas de Notion. Optimizar la funcionalidad del sitio, lograr interfaz de usuario ágil y dinámica, lograr estética atractiva según estándares de página principal y representativa de una empresa que provee servicios tecnológicos. Proponer ideas creativas y soluciones para mejora de procesos.",
    "exp.ta.date": "Julio 2023 - Septiembre 2023",
    "exp.ta.title":
      "TA - Teaching Assistant para estudiantes en Henry Bootcamp",
    "exp.ta.description":
      "Tareas principales: Coordinar un grupo de nuevos estudiantes durante toda la experiencia del bootcamp. Guiar a los estudiantes en los primeros pasos del curso y aclarar sus dudas. Proporcionar asistencia en la resolución de ejercicios y fomentar el trabajo en equipo (Pair Programming). Sugerir ideas para mejorar los procesos del Bootcamp. Promover la colaboración y construir comunidad entre los estudiantes.",
    "exp.foodapp.date": "Julio 2023 - Agosto 2023",
    "exp.foodapp.title": "Desarrollador Web",
    "exp.foodapp.description":
      "En esta posición, inicié un proyecto fullstack desde cero, como parte de mi propio proyecto de bootcamp, usando React, Redux, Html y Css para el frontend; node.js y express con morgan como middleware para el backend, con el desafío de una API defectuosa, con caídas frecuentes, y actualizaciones que cambiaban la estructura, aquí aprendí cómo crear mi propia API en github para hacer solicitudes de soporte, y estructurar el código para el manejo adecuado de errores y para funcionar ya sea que la API esté caída o no.",
    "exp.ricknmorty.date": "Junio 2023 - Julio 2023",
    "exp.ricknmorty.title": "Desarrollador Web",
    "exp.ricknmorty.description":
      "Comencé integrando los conocimientos del bootcamp en el frontend como React, Redux, Html y Css y en el backend con express en un proyecto integrador del bootcamp, el cual fue modificado de varias formas a lo largo del bootcamp mismo, avanzando en la parte funcional, y en las tarjetas es posible ver el progreso visual.",
    "exp.3dprinter.date": "2019 - 2022",
    "exp.3dprinter.title": "Programador de impresoras 3D y diseñador 3D",
    "exp.3dprinter.description":
      "Programé, actualicé y reparé impresoras 3D FDM",
  },
  en: {
    // Layout
    "layout.title": "Portfolio JoaEm - AI Engineer and Mobile Developer",
    "layout.description":
      "Hire Joaquin to develop your mobile and web applications, and to implement AI solutions.",

    // Header
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hey, I am Joaquin",
    "hero.badge": "Available for hire",
    "hero.role":
      "AI Engineer and Mobile Developer, and Diabetes content creator.",
    "hero.location": "From Córdoba, Argentina.",
    "hero.tagline": "Specialized in taking your ideas to code.",
    "hero.downloadCV": "Download CV",

    // Section titles
    "section.experience": "Work Experience",
    "section.projects": "Projects",
    "section.about": "About Me",

    // About Me
    "about.p1": `My name is <Joaquin Emanuel Lizarraga />, but my friends call me Ema. I wrote my first program on a PIC using a PIC burner in C when I was 14 years old. After that, I moved on to Arduino, building home automation systems and robotics with IoT.`,
    "about.p1.highlight":
      "Now, I create applications that interact with sensors and leverage AI.",
    "about.p2": `Currently, I'm developing`,
    "about.p2.project": "SugarSync",
    "about.p2.rest":
      ", an app for diabetes control and management that enables users to read data from various sensor brands, track their carbohydrate intake, and maintain a comprehensive record accessible to their doctors.",
    "about.p3": `Among my proudest achievements is my experience during Henry's bootcamp, where I was elected as a Teaching Assistant. I guided and supported new bootcamp entrants through an intensive path to graduation, achieving a 100% success rate. Today, I am a developer`,
    "about.p3.highlight": "specializing in AI implementations",
    "about.p3.rest":
      "for mobile applications, working on innovative projects that integrate AI-powered chat solutions, automated ticket management, and other cutting-edge technologies.",

    // Projects
    "projects.viewCode": "Watch source code",
    "projects.goToWeb": "Go to web site",
    "projects.downloadApp": "Download Android App",

    // Project descriptions
    "project.onde.description":
      "A full-stack real estate marketplace featuring advanced AI search capabilities, semantic property discovery, and intelligent chat assistance. Built with a modern dual-architecture approach combining traditional REST APIs with serverless edge functions.",
    "project.sugarsync.description":
      'A cross-platform, AI-powered diabetes management app focused on personalized nutrition, glucose insights, and doctor–patient collaboration. Built with React Native, Expo and Supabase, it integrates USDA and Edamam APIs for carb counting, voice-based food logging, and structured nutritional analysis. Using OpenAI and Pinecone, SugarSync correlates meals, activity and historical glucose data to surface predictive insights and "today\'s risk" cards, all on top of a secure, RLS-protected multi-tenant backend ready for clinical use.',
    "project.pursuit.description": `A mobile application developed with React Native and Expo, integrating Supabase for backend services and authentication, and utilizing OpenAI.

It implements a Retrieval Augmented Generation (RAG) model with Pinecone to generate personalized training and nutritional plans based on each user's personal data.

The application combines AI and data analysis to provide tailored recommendations that optimize individual performance and overall well-being.`,
    "project.rentscape.description": `An integration within the Rentscape platform that features an AI-powered chat solution.

This system leverages interactive chat combined with function calling to generate precise data, which is then used to perform searches on Pinecone for the best rental properties.

The solution offers an intuitive, personalized search experience, streamlining the decision-making process in the real estate market.`,
    "project.pokedex.description":
      "App developed with React Native and Expo using the Pokemon api, to display information about pokemon. Data persistence is handled with the AsyncStorage library.",
    "project.nasa.description":
      "I developed an app with React Native CLI and TypeScript to view the pictures taken by the Hubble telescope provided by NASA's 'Astronomy Picture of the Day' api.",
    "project.pomodoro.description":
      "App developed with React Native Expo and Tailwind is a simple but effective tool to improve productivity. With a minimalist and easy to use interface, this application allows users to divide their time into work and rest periods using the Pomodoro technique.",
    "project.blog.description":
      'Dynamic blog delivered for incorporation to the company website. Collaboration between students applying the "scrum" methodology. User Interface built on Next.js 13, with Zustand implementation for global state management. Server built on AWS Lambda, configuring AWS Api Gateway as event trigger. Image storage system on AWS S3 Buckets.',

    // Experience dates and titles - keep same as original
    "exp.onde.date": "July 2025 - Now",
    "exp.onde.title":
      "AI Engineer and Fullstack Mobile Developer (React Native - Expo, Supabase and AI)",
    "exp.sugarsync.date": "August 2025 - Now",
    "exp.sugarsync.title":
      "Founder & Mobile AI Engineer (React Native, Supabase & AI for HealthTech)",
    "exp.sparkco.date": "August 2024 - June 2025",
    "exp.sparkco.title":
      "AI Engineer and Fullstack Mobile Developer (React Native - Expo, Supabase and AI)",
    "exp.ha.date": "February 2024 - August 2024",
    "exp.ha.title": "HA - Henry Assistant",
    "exp.ha.description":
      "The responsibilities are: Pre-select new Teach Assistants. Train them in soft skills. Conduct role-plays, where the pre-selected candidates participate in a simulated situation. Finally choose the finalists, who will be in charge of the incoming students to Henry's bootcamp.",
    "exp.bocancorp.date": "August 2023 - January 2024",
    "exp.bocancorp.title": "Software Engineer",
    "exp.bocancorp.description":
      "Develop a dynamic page using AWS (DynamoDB, S3, Lambda), NextJs, Zustand, Tailwind, MaterialTailwind Integrate rich text markdown system and multimedia file management. Authenticate with token and controlled forms. Develop with SCRUM methodologies, exercise GitFlow, coordinate with Notion task board. Optimize site functionality, achieve agile and dynamic user interface, achieve attractive aesthetics according to home page standards and representative of a company that provides technology services. Propose creative ideas and solutions for process improvement.",
    "exp.ta.date": "July 2023 - September 2023",
    "exp.ta.title": "TA - Teaching Assistant for students at Henry Bootcamp",
    "exp.ta.description":
      "Main tasks: Coordinate a group of new joining students throughout the whole bootcamp experience. Guide students in the first steps of the course and clarify their doubts. Provide assistance in solving exercises and encourage group teamwork (Pair Programming). Suggest ideas to improve the Bootcamp processes. Promote collaboration and build community within the students.",
    "exp.foodapp.date": "July 2023 - August 2023",
    "exp.foodapp.title": "Web Developer",
    "exp.foodapp.description":
      "In this position, I started a fullstack project from scratch, as part of my own bootcamp project, using React, Redux, Html and Css for the frontend; node.js and express with morgan as middleware for the backend, with the challenge of a faulty API, with frequent crashes, and updates that changed the structure, here I learned how to create my own API on github to make support requests, and structure the code for proper error handling and to work whether the api is down or not.",
    "exp.ricknmorty.date": "June 2023 - July 2023",
    "exp.ricknmorty.title": "Web Developer",
    "exp.ricknmorty.description":
      "I started by integrating the knowledge of the bootcamp in the frontend such as React, Redux, Html and Css and in the backend with express in a bootcamp integrator project, which was modified in various ways throughout the bootcamp itself, advancing in the functional part, and in the cards it is possible to see the visual progress.",
    "exp.3dprinter.date": "2019 - 2022",
    "exp.3dprinter.title": "3D Printer programmer and 3D designer",
    "exp.3dprinter.description":
      "I programmed, updated and repaired 3D printers FDM",
  },
} as const;

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)["en"]): string {
    return ui[lang][key] || ui[defaultLocale][key] || key;
  };
}
