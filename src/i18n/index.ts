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
    "projects.downloadIosApp": "Descargar App iOS",

    // Project descriptions
    "project.buckedup.description":
      "La app oficial de ecommerce de Bucked Up, marca estadounidense de suplementos deportivos, publicada en App Store y Google Play. Lidero el desarrollo mobile desde marzo de 2026: una app nativa con React Native y Expo (New Architecture), Expo Router, Zustand, TanStack Query y NativeWind, conectada a la API del backend de la marca. Incluye catálogo con stacks y bundles, carrito con cupones y envío gratis, checkout nativo también para invitados, y pagos con Braintree: tarjeta, PayPal, Venmo, Apple Pay y Google Pay, con express checkout que cotiza el envío dentro de la hoja de pago gracias a un parche nativo propio. Suma login con biometría, push notifications y deep links con Klaviyo, analítica con RudderStack, monitoreo con Sentry y actualizaciones OTA con EAS.",
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
    "exp.buckedup.date": "Marzo 2026 - Actualidad",
    "exp.buckedup.title":
      "Mobile Lead (React Native - Expo, E-commerce)",
    "exp.onde.date": "Julio 2025 - Febrero 2026",
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

    // Extended experience descriptions
    "exp.buckedup.description": `Bucked Up Shopping:
    App de ecommerce nativa para Bucked Up (iOS y Android), cliente de Devias
      Lidero el desarrollo mobile de la app oficial de compras de Bucked Up, marca estadounidense de suplementos deportivos, publicada en App Store y Google Play.

        ► App nativa con React Native, Expo SDK 54 (New Architecture), TypeScript, Expo Router, Zustand y TanStack Query
        ► Flujo de compra completo en nativo: catálogo, detalle con stacks y bundles, carrito, cupones, checkout, order bumps y upsells post-compra, con checkout para invitados y direcciones guardadas
        ► Pagos con Braintree: tarjetas con 3D Secure, PayPal, Venmo y métodos guardados, más express checkout con Apple Pay y Google Pay, parcheando el SDK nativo para cotizar el envío dentro de la hoja de pago
        ► Analítica con paridad web en RudderStack (eventos de ecommerce y atribución de campañas) y push notifications, deep links y universal/app links con Klaviyo
        ► Definición de la API REST mobile junto al equipo de backend, verificando cada endpoint en staging antes de integrarlo
        ► Releases con EAS Build, Submit y actualizaciones OTA, monitoreo con Sentry y cumplimiento de App Store y Google Play (formularios de privacidad, borrado de cuenta in-app, resolución de rechazos de revisión)`,
    "exp.onde.description": `Onde:
    Plataforma Inmobiliaria con IA
      Un marketplace inmobiliario full-stack con capacidades avanzadas de búsqueda por IA, descubrimiento semántico de propiedades y asistencia de chat inteligente. Construido con un enfoque de arquitectura dual moderna que combina APIs REST tradicionales con funciones serverless edge.

  <h1 class="text-lg font-bold text-stone-200">🤖 Integración de IA y Machine Learning</h1>

        <b>Integración con OpenAI</b>
        ► GPT-4o-mini para chat conversacional con IA y clasificación de intenciones
        ► API de Visión GPT-4o para análisis automatizado de imágenes de propiedades, extrayendo descripciones visuales detalladas de interiores, exteriores, colores, materiales y características arquitectónicas
        ► text-embedding-3-small (1536 dimensiones) para embeddings de texto de propiedades
        ► text-embedding-3-large (3072 dimensiones) para embeddings de imágenes y documentos
        ► Extracción inteligente de filtros desde consultas en lenguaje natural
        ► Recomendaciones de propiedades conscientes del contexto

        <b>Pipeline de Búsqueda Semántica</b>
        ► Pipeline de procesamiento de IA multi-etapa con tiempo de respuesta <3s
        ► Clasificación de intenciones y extracción de filtros en paralelo
        ► Modo de búsqueda visual para consultas como "casas con pisos verdes" o "propiedades con jardines"
        ► Integración de búsqueda por proximidad a POI (Puntos de Interés)
        ► Construcción inteligente de contexto desde coincidencias vectoriales

        <b>Salida de Datos Estructurados</b>
        ► Validación de esquemas con Zod para respuestas de API
        ► Extracción de filtros type-safe con interfaces TypeScript explícitas
        ► Respuestas JSON estructuradas desde modelos de IA usando function calling
        ► Detección determinística de referencias a propiedades ("la primera", "esa")

  <h1 class="text-lg font-bold text-stone-200">🗄️ Base de Datos Vectorial y Embeddings</h1>

        <b>Base de Datos Vectorial Pinecone</b>
        ► Tres índices especializados para diferentes tipos de contenido:
          ► Índice de Propiedades (text-embedding-3-small, 1536 dim): Descripciones, direcciones, características
          ► Índice de Imágenes (text-embedding-3-large, 3072 dim): Análisis visual de fotos de propiedades
          ► Índice de Documentos (text-embedding-3-large, 3072 dim): Planos, contratos, certificados
        ► Búsqueda vectorial paralela en todos los índices
        ► Filtrado por metadatos (precio, habitaciones, ubicación, amenidades)
        ► Deduplicación por property_id
        ► IDs de vectores basados en hash para operaciones idempotentes

        <b>Sistema de Generación de Embeddings</b>
        ► Procesamiento batch automatizado (5 imágenes en paralelo, hasta 50 imágenes por propiedad)
        ► IDs de vectores determinísticos basados en hash SHA-256 para prevenir duplicados
        ► Análisis de imágenes con prompts detallados para características exteriores/interiores
        ► Fragmentación de texto de propiedades con división semántica de oraciones
        ► Generación async de embeddings fire-and-forget con seguimiento de errores

  <h1 class="text-lg font-bold text-stone-200">☁️ Supabase Edge Functions (Deno)</h1>

        <b>Orquestador principal de chat IA</b>
        ► Pipeline de procesamiento de 5 pasos optimizado para rendimiento
        ► Clasificación de intenciones y extracción de filtros en paralelo
        ► Coordinación de búsqueda vectorial entre índices de Pinecone
        ► Generación de respuestas GPT-4o-mini con consciencia de contexto
        ► Gestión de historial de conversaciones con seguimiento de sesiones

        <b>Servicio de generación de embeddings</b>
        ► Integración de OpenAI Vision API para análisis de imágenes
        ► Distribución de embeddings multi-índice
        ► Normalización automática de metadatos
        ► Procesamiento de texto basado en chunks
        ► Almacenamiento de documentos en Supabase con generación de previews

        <b>Parser de consultas en lenguaje natural</b>
        ► Clasificación de intenciones (búsqueda, POI, comparar, actualizar_filtros)
        ► Extracción estructurada de filtros desde lenguaje natural
        ► Etiquetado de filtros IA (pet-friendly, cocina-moderna, barrio-tranquilo)
        ► Búsqueda de regiones con matching case-insensitive en base de datos
        ► Detección de referencias a propiedades

        <b>Coordinador de búsqueda semántica</b>
        ► Generación paralela de embeddings (modelos small + large)
        ► Búsqueda vectorial multi-índice
        ► Obtención de propiedades PostgreSQL con filtrado por región
        ► Deduplicación y scoring de resultados
        ► Integración de Google Places API para consultas de POI


  <h1 class="text-lg font-bold text-stone-200">🗺️ Integración de Mapas</h1>

        <b>Google Maps API</b>
        ► Places API para búsqueda de proximidad a POI
        ► Geocoding para validación de direcciones
        ► Cálculos de matriz de distancias
        ► Estimaciones de tiempo caminando
        ► Detalles de lugares con ratings y reseñas

  <h1 class="text-lg font-bold text-stone-200">🏗️ Arquitectura y Backend</h1>

        <b>Sistema de Arquitectura Dual</b>

        <b>API Express.js (Node.js)</b>
        ► Endpoints REST para operaciones CRUD de propiedades
        ► Integración JWT + Supabase Auth
        ► Chat en tiempo real con Socket.io y Redis pub/sub
        ► Clustering de workers con pools de conexiones por worker
        ► Protección CSRF y middleware de seguridad

        <b>Deno Edge Functions (Supabase)</b>
        ► Chat IA serverless y búsqueda semántica
        ► Deployment edge de baja latencia
        ► Estrategia de caching multi-tier (FIFO en memoria)
        ► Escalado automático y optimización de cold start

        <b>Base de Datos y Almacenamiento</b>
        ► PostgreSQL con PostGIS para consultas geoespaciales
        ► Query builder type-safe Kysely
        ► Connection pooler para escalado en producción
        ► Supabase Storage para imágenes de propiedades
        ► Redis para caching y pub/sub

        <b>Optimizaciones de Rendimiento</b>
        ► Caching multi-tier (embeddings: 24h, propiedades: 10min, búsquedas: 5min)
        ► Procesamiento batch paralelo para embeddings de imágenes
        ► Inputs de búsqueda con debounce (500ms)
        ► Prefetching de resultados de consultas al hacer hover
        ► Persistencia de historial de chat en localStorage


        <h1 class="text-lg font-bold text-stone-200">🎨 Stack Frontend</h1>

        <b>React 19 + TypeScript + Vite</b>
        ► Patrones modernos de React con hooks
        ► Desarrollo type-safe con TypeScript estricto
        ► HMR rápido con Vite

        <b>Gestión de Estado</b>
        ► TanStack Query v5 para estado del servidor
        ► Actualizaciones optimistas para favoritos y ofertas
        ► Caching inteligente con configuración staleTime
        ► URL params como única fuente de verdad para estado de búsqueda

        <b>UI y Estilos</b>
        ► Tailwind CSS para estilos utility-first
        ► Librería de componentes ShadcnUI + Radix UI
        ► Sistema de diseño personalizado (fuentes Montserrat, Saira, Inter)
        ► Diseño responsive con enfoque mobile-first

        <b>Funcionalidades Clave</b>
        ► Búsqueda conversacional potenciada por IA con historial de chat persistente
        ► Chat de propiedades en tiempo real con Socket.io
        ► Tarjetas de propiedades interactivas con links clickeables al chat IA
        ► Búsqueda basada en región y radio
        ► Modal de filtros avanzados con amenidades y condiciones
        ► Propiedades favoritas con actualizaciones optimistas
        ► Sistema de negociación de ofertas
        ► Programación de visitas


  <h1 class="text-lg font-bold text-stone-200">🔧 Experiencia de Desarrollo</h1>

        <b>Type Safety</b>
        ► Cobertura TypeScript de punta a punta
        ► Tipos de base de datos generados con Kysely
        ► Validación runtime con Zod
        ► Configuración estricta de ESLint + Prettier

        <b>Build y Deploy</b>
        ► Path aliases para imports limpios (@/, @controllers/, @services/)
        ► Configuración basada en environment
        ► Hot reload en desarrollo
        ► Clustering en producción con graceful shutdown

        <b>Testing y Monitoreo</b>
        ► Logging detallado en consola en edge functions
        ► Logging estructurado con Winston en Express
        ► Tracking de rendimiento (clasificación de intenciones, tasas de cache hit)
        ► Manejo de error boundaries


        <h1 class="text-lg font-bold text-stone-200">📊 Métricas Técnicas</h1>

        ► Tiempo de Respuesta IA: <3 segundos end-to-end
        ► Procesamiento de Embeddings: 5-10 minutos para 50 imágenes (batch paralelo)
        ► Búsqueda Vectorial: <500ms en 3 índices de Pinecone
        ► Tasa de Cache Hit: ~70% reducción en consultas repetidas
        ► Consultas a BD: Type-safe con tiempo de respuesta <100ms
        ► Chat en Tiempo Real: Entrega de mensajes sub-segundo con Socket.io


        <h1 class="text-lg font-bold text-stone-200">🚀 Funcionalidades Innovadoras</h1>

              1. Chat IA con Memoria - Historial de chat persistente usando localStorage, contexto de referencias a propiedades
              2. Búsqueda Visual Semántica - "Mostrame propiedades con cocinas de mármol" usando embeddings de imágenes
              3. Regiones en Lenguaje Natural - "Propiedades en Avenidas Novas" auto-completa la selección de región
              4. Detección Inteligente de Filtros - Extrae precio, habitaciones, amenidades de consultas conversacionales
              5. Links de Propiedades Clickeables en Chat - Navegar a detalles de propiedades directamente desde respuestas IA
              6. Embedding Batch Paralelo - Procesar 50 imágenes en 5-10 minutos con deduplicación
              7. Búsqueda Vectorial Multi-Índice - Combina embeddings de texto, imagen y documentos para resultados completos
              8. Inteligencia de Proximidad a POI - "Propiedades cerca de hospitales" con cálculos de distancia caminando`,

    "exp.sugarsync.description": `SugarSync:
    Ecosistema de gestión de diabetes potenciado por IA enfocado en nutrición personalizada, insights de glucosa y colaboración médico-paciente.

    <h1 class="text-lg font-bold text-stone-200">📱 App Móvil y UX</h1>

        <b>App multiplataforma</b>
        ► Construida con React Native, Expo y TypeScript para iOS y Android
        ► Flujos para registro diario de comidas, lecturas de glucosa y actividad física
        ► UX mobile-first para entrada rápida, recordatorios y seguimiento de progreso

        <b>Vistas de paciente y médico</b>
        ► Experiencias separadas para pacientes y profesionales
        ► Dashboards para profesionales para revisar tendencias, notas y alertas
        ► Compartición segura de registros para seguimiento remoto

    <h1 class="text-lg font-bold text-stone-200">🤖 IA, Nutrición e Insights de Glucosa</h1>

        <b>Inteligencia nutricional y de alimentos</b>
        ► Integración con APIs de USDA y Edamam para macronutrientes y conteo de carbohidratos
        ► Entrada de alimentos por voz y texto para registro más rápido
        ► Normalización de ingredientes y porciones en datos nutricionales estructurados

        <b>Insights predictivos de glucosa</b>
        ► Embeddings de Pinecone + OpenAI para correlacionar comidas, actividad e historial de glucosa
        ► Recuperación estilo RAG de días/comidas similares para sugerir riesgo o respuesta esperada
        ► Sugerencias inteligentes para timing y composición de comidas basadas en patrones históricos

    <h1 class="text-lg font-bold text-stone-200">☁️ Backend, Datos y Seguridad</h1>

        <b>Plataforma Supabase</b>
        ► Esquema PostgreSQL para usuarios, profesionales, registros, alertas y recomendaciones
        ► Row Level Security (RLS) para aislamiento estricto de datos multi-tenant
        ► Supabase Auth para gestión de cuentas y manejo de sesiones

        <b>Edge Functions para IA</b>
        ► Supabase Edge Functions (Deno) para orquestar llamadas a OpenAI y consultas a Pinecone
        ► Pipelines serverless para análisis nutricional y generación de insights de glucosa
        ► Salidas JSON estructuradas validadas con Zod para APIs type-safe

        <b>Mentalidad de seguridad y compliance</b>
        ► Flujos de datos modelados siguiendo principios tipo HIPAA (mínimo privilegio, auditabilidad)
        ► Separación de datos tipo PHI de metadatos de analytics
        ► Almacenamiento encriptado para información sensible donde aplique

    <h1 class="text-lg font-bold text-stone-200">🚀 Funcionalidades Clave y Métricas</h1>

        1. Conteo de carbohidratos asistido por IA vía USDA/Edamam con entrada por voz
        2. Espacio de trabajo compartido médico-paciente con contexto histórico y notas
        3. Tarjetas de insights predictivos para "riesgo del día" basado en días anteriores
        4. Recomendaciones event-driven corriendo en Edge Functions serverless
        5. Arquitectura multi-tenant protegida con RLS lista para pilotos clínicos`,

    "exp.sparkco.description": `Spark n Co:
    En este proyecto, contribuí a integrar una solución de chat potenciada por IA usando OpenAI y DeepSeek para automatizar y agilizar la gestión de tickets de Jira.
    El sistema aprovecha procesamiento de lenguaje natural avanzado para interpretar consultas de usuarios en tiempo real, generando tickets automáticamente, creando reportes de incidentes y despachando notificaciones sin intervención manual.
    Pursuit:
      Lideré el desarrollo de una app móvil usando React Native y Expo, que integra Supabase para servicios de backend y autenticación.
      También implementé un modelo de Retrieval and Augmented Generation (RAG) con Pinecone para almacenar planes de entrenamiento y nutrición personalizados basados en los datos personales de cada usuario, todos generados con un modelo de IA de OpenAI.
      La app combina IA, salida de datos estructurados y análisis de datos para proveer recomendaciones personalizadas que optimizan el rendimiento individual y el bienestar general.
      En el proceso, entrené al equipo en:
      ► APIs de modelos de IA generativa, conteo de tokens basado en costos, inyección de contexto, gestión de estructura de prompts y salida de datos estructurados.
      ► Creé embeddings y funciones de similitud para generar recomendaciones y búsquedas por similitud.
      ► Creé Supabase edge functions usando Deno.js y las optimicé para interactuar con los tiempos de request de OpenAI.
    Rentscape:
      Desarrollé una funcionalidad dentro de la plataforma Rentscape que presenta una solución de chat potenciada por IA.
      Este sistema aprovecha la interacción de chat con IA combinada con function_calling y salida de datos estructurados para generar datos precisos mientras la IA obtiene datos con cada mensaje.
      Esos datos se usan para generar embeddings y realizar búsquedas en Pinecone de las mejores propiedades en alquiler.
      La solución ofrece una experiencia de búsqueda intuitiva y personalizada basada en un cálculo matemático, agilizando el proceso de toma de decisiones en el mercado inmobiliario.
      En el proceso instruí al equipo en lo siguiente:
      ► Uso de modelos de razonamiento de IA que permiten function_calling y salida de datos estructurados al mismo tiempo.
      ► Gestión de bases de datos vectoriales y creación de clientes para Pinecone usando Edge functions de Supabase con Deno`,
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
    "projects.downloadIosApp": "Download iOS App",

    // Project descriptions
    "project.buckedup.description":
      "The official ecommerce app for Bucked Up, a US sports supplements brand, live on the App Store and Google Play. I have led mobile development since March 2026: a native app built with React Native and Expo (New Architecture), Expo Router, Zustand, TanStack Query and NativeWind, connected to the brand's backend API. It covers a catalog with stacks and bundles, a cart with coupons and free shipping, native checkout including guest checkout, and Braintree payments: cards, PayPal, Venmo, Apple Pay and Google Pay, with an express checkout that quotes shipping inside the payment sheet through a custom native patch. It also includes biometric sign-in, Klaviyo push notifications and deep links, RudderStack analytics, Sentry monitoring and EAS over-the-air updates.",
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
    "exp.buckedup.date": "March 2026 - Now",
    "exp.buckedup.title":
      "Mobile Lead (React Native - Expo, E-commerce)",
    "exp.onde.date": "July 2025 - February 2026",
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

    // Extended experience descriptions
    "exp.buckedup.description": `Bucked Up Shopping:
    Native e-commerce app for Bucked Up (iOS & Android), a Devias client
      I lead the mobile development of Bucked Up's official shopping app, a US sports supplements brand, live on the App Store and Google Play.

        ► Native app built with React Native, Expo SDK 54 (New Architecture), TypeScript, Expo Router, Zustand and TanStack Query
        ► Full native purchase flow: catalog, product detail with stacks and bundles, cart, coupons, checkout, order bumps and post-purchase upsells, with guest checkout and saved addresses
        ► Braintree payments: cards with 3D Secure, PayPal, Venmo and saved payment methods, plus Apple Pay and Google Pay express checkout, patching the native SDK to quote shipping inside the payment sheet
        ► Web-parity analytics with RudderStack (ecommerce events and campaign attribution) and Klaviyo push notifications, deep links and universal/app links
        ► Defined the mobile REST API with the backend team, verifying each endpoint against staging before integration
        ► Releases with EAS Build, Submit and over-the-air updates, Sentry monitoring, and App Store / Google Play compliance (privacy questionnaires, in-app account deletion, review resolutions)`,
    "exp.onde.description": `Onde:
    AI-Powered Real Estate Platform
      A full-stack real estate marketplace featuring advanced AI search capabilities, semantic property discovery, and intelligent chat assistance. Built with a modern dual-architecture approach combining traditional REST APIs with serverless edge functions.

  <h1 class="text-lg font-bold text-stone-200">🤖 AI & Machine Learning Integration</h1>

        <b>OpenAI Integration</b>
        ► GPT-4o-mini for conversational AI chat and intent classification
        ► GPT-4o Vision API for automated property image analysis, extracting detailed visual descriptions of interiors, exteriors, colors, materials, and architectural features
        ► text-embedding-3-small (1536 dimensions) for property text embeddings
        ► text-embedding-3-large (3072 dimensions) for image and document embeddings
        ► Intelligent filter extraction from natural language queries
        ► Context-aware property recommendations

        <b>Semantic Search Pipeline</b>
        ► Multi-stage AI processing pipeline with <3s response time
        ► Parallel intent classification and filter extraction
        ► Visual search mode for queries like "houses with green floors" or "properties with gardens"
        ► POI (Point of Interest) proximity search integration
        ► Smart context building from vector matches

        <b>Structured Data Output</b>
        ► Zod schema validation for API responses
        ► Type-safe filter extraction with explicit TypeScript interfaces
        ► Structured JSON responses from AI models using function calling
        ► Deterministic property reference detection ("la primera", "that one")

  <h1 class="text-lg font-bold text-stone-200">🗄️ Vector Database & Embeddings</h1>

        <b>Pinecone Vector Database</b>
        ► Three specialized indexes for different content types:
          ► Properties Index (text-embedding-3-small, 1536 dim): Property descriptions, addresses, features
          ► Images Index (text-embedding-3-large, 3072 dim): Visual analysis from property photos
          ► Documents Index (text-embedding-3-large, 3072 dim): Floor plans, contracts, certificates
        ► Parallel vector search across all indexes
        ► Metadata filtering (price, bedrooms, location, amenities)
        ► Deduplication by property_id
        ► Hash-based vector IDs for idempotent operations

        <b>Embedding Generation System</b>
        ► Automated batch processing (5 images parallel, up to 50 images per property)
        ► Deterministic SHA-256 hash-based vector IDs to prevent duplicates
        ► Image analysis with detailed prompts for exterior/interior features
        ► Property text chunking with semantic sentence splitting
        ► Fire-and-forget async embedding generation with error tracking

  <h1 class="text-lg font-bold text-stone-200">☁️ Supabase Edge Functions (Deno)</h1>

        <b>Main AI chat orchestrator</b>
        ► 5-step processing pipeline optimized for performance
        ► Parallel intent classification and filter extraction
        ► Vector search coordination across Pinecone indexes
        ► GPT-4o-mini response generation with context awareness
        ► Conversation history management with session tracking

        <b>Embedding generation service</b>
        ► OpenAI Vision API integration for image analysis
        ► Multi-index embedding distribution
        ► Automatic metadata normalization
        ► Chunk-based text processing
        ► Document storage in Supabase with preview generation

        <b>Natural language query parser</b>
        ► Intent classification (search, POI, compare, filter_update)
        ► Structured filter extraction from natural language
        ► AI filter tagging (pet-friendly, modern-kitchen, quiet-neighborhood)
        ► Region lookup with case-insensitive database matching
        ► Property reference detection

        <b>Semantic search coordinator</b>
        ► Parallel embedding generation (small + large models)
        ► Multi-index vector search
        ► PostgreSQL property fetching with region filtering
        ► Result deduplication and scoring
        ► Google Places API integration for POI queries


  <h1 class="text-lg font-bold text-stone-200">🗺️ Maps Integration</h1>

        <b>Google Maps API</b>
        ► Places API for POI proximity search
        ► Geocoding for address validation
        ► Distance matrix calculations
        ► Walking time estimations
        ► Place details with ratings and reviews

  <h1 class="text-lg font-bold text-stone-200">🏗️ Architecture & Backend</h1>

        <b>Dual Architecture System</b>

        <b>Express.js API (Node.js)</b>
        ► REST endpoints for property CRUD operations
        ► JWT + Supabase Auth integration
        ► Socket.io real-time chat with Redis pub/sub
        ► Worker clustering with per-worker connection pools
        ► CSRF protection and security middleware

        <b>Deno Edge Functions (Supabase)</b>
        ► Serverless AI chat and semantic search
        ► Low-latency edge deployment
        ► Multi-tier caching strategy (in-memory FIFO)
        ► Automatic scaling and cold start optimization

        <b>Database & Storage</b>
        ► PostgreSQL with PostGIS for geospatial queries
        ► Kysely type-safe query builder
        ► Connection pooler for production scaling
        ► Supabase Storage for property images
        ► Redis for caching and pub/sub

        <b>Performance Optimizations</b>
        ► Multi-tier caching (embeddings: 24h, properties: 10min, searches: 5min)
        ► Batch parallel processing for image embeddings
        ► Debounced search inputs (500ms)
        ► Query result prefetching on hover
        ► localStorage persistence for chat history


        <h1 class="text-lg font-bold text-stone-200">🎨 Frontend Stack</h1>

        <b>React 19 + TypeScript + Vite</b>
        ► Modern React patterns with hooks
        ► Type-safe development with strict TypeScript
        ► Fast HMR with Vite

        <b>State Management</b>
        ► TanStack Query v5 for server state
        ► Optimistic updates for favorites and offers
        ► Smart caching with staleTime configuration
        ► URL params as single source of truth for search state

        <b>UI & Styling</b>
        ► Tailwind CSS for utility-first styling
        ► ShadcnUI + Radix UI component library
        ► Custom design system (Montserrat, Saira, Inter fonts)
        ► Responsive design with mobile-first approach

        <b>Key Features</b>
        ► AI-powered conversational search with persistent chat history
        ► Real-time property chat with Socket.io
        ► Interactive property cards with clickable AI chat links
        ► Region-based and radius-based search
        ► Advanced filters modal with amenities and conditions
        ► Favorite properties with optimistic updates
        ► Offer negotiation system
        ► Visit scheduling


  <h1 class="text-lg font-bold text-stone-200">🔧 Developer Experience</h1>

        <b>Type Safety</b>
        ► End-to-end TypeScript coverage
        ► Generated database types with Kysely
        ► Zod runtime validation
        ► Strict ESLint + Prettier configuration

        <b>Build & Deploy</b>
        ► Path aliases for clean imports (@/, @controllers/, @services/)
        ► Environment-based configuration
        ► Hot reload in development
        ► Production clustering with graceful shutdown

        <b>Testing & Monitoring</b>
        ► Detailed console logging in edge functions
        ► Winston structured logging in Express
        ► Performance tracking (intent classification, cache hit rates)
        ► Error boundary handling


        <h1 class="text-lg font-bold text-stone-200">📊 Technical Metrics</h1>

        ► AI Response Time: <3 seconds end-to-end
        ► Embedding Processing: 5-10 minutes for 50 images (batch parallel)
        ► Vector Search: <500ms across 3 Pinecone indexes
        ► Cache Hit Rate: ~70% reduction in repeated queries
        ► Database Queries: Type-safe with <100ms response time
        ► Real-time Chat: Sub-second message delivery with Socket.io


        <h1 class="text-lg font-bold text-stone-200">🚀 Innovative Features</h1>

              1. AI Chat with Memory - Persistent chat history using localStorage, property reference context
              2. Semantic Visual Search - "Show me properties with marble kitchens" using image embeddings
              3. Natural Language Regions - "Properties in Avenidas Novas" auto-completes region selection
              4. Smart Filter Detection - Extracts price, bedrooms, amenities from conversational queries
              5. Clickable Property Links in Chat - Navigate to property details directly from AI responses
              6. Batch Parallel Embedding - Process 50 images in 5-10 minutes with deduplication
              7. Multi-Index Vector Search - Combines text, image, and document embeddings for comprehensive results
              8. POI Proximity Intelligence - "Properties near hospitals" with walking distance calculations`,

    "exp.sugarsync.description": `SugarSync:
    AI-powered diabetes management ecosystem focused on personalized nutrition, glucose insights, and doctor–patient collaboration.

    <h1 class="text-lg font-bold text-stone-200">📱 Mobile App & UX</h1>

        <b>Cross-platform app</b>
        ► Built with React Native, Expo and TypeScript for iOS and Android
        ► Flows for daily logging of meals, glucose readings and physical activity
        ► Mobile-first UX for quick entry, reminders and progress tracking

        <b>Patient & doctor views</b>
        ► Separate experiences for patients and clinicians
        ► Clinician dashboards to review trends, notes and alerts
        ► Secure sharing of records for remote follow-up

    <h1 class="text-lg font-bold text-stone-200">🤖 AI, Nutrition & Glucose Insights</h1>

        <b>Food & nutrition intelligence</b>
        ► Integration with USDA and Edamam APIs for macronutrients and carb counting
        ► Voice- and text-based food input for faster logging
        ► Normalization of ingredients and portions into structured nutritional data

        <b>Predictive glucose insights</b>
        ► Pinecone + OpenAI embeddings to correlate meals, activity and glucose history
        ► RAG-style retrieval of similar days/meals to suggest risk or expected response
        ► Smart suggestions for meal timing and composition based on historical patterns

    <h1 class="text-lg font-bold text-stone-200">☁️ Backend, Data & Security</h1>

        <b>Supabase platform</b>
        ► PostgreSQL schema for users, clinicians, logs, alerts and recommendations
        ► Row Level Security (RLS) for strict multi-tenant data isolation
        ► Supabase Auth for account management and session handling

        <b>Edge Functions for AI</b>
        ► Supabase Edge Functions (Deno) to orchestrate OpenAI calls and Pinecone queries
        ► Serverless pipelines for nutritional analysis and glucose insight generation
        ► Structured JSON outputs validated with Zod for type-safe APIs

        <b>Security & compliance mindset</b>
        ► Data flows modeled following HIPAA-like principles (least privilege, auditability)
        ► Separation of PHI-like data from analytics metadata
        ► Encrypted storage for sensitive information where applicable

    <h1 class="text-lg font-bold text-stone-200">🚀 Key Features & Metrics</h1>

        1. AI-assisted carb counting via USDA/Edamam with voice input
        2. Doctor–patient shared workspace with historical context and notes
        3. Predictive insight cards for "today's risk" based on past days
        4. Event-driven recommendations running on serverless Edge Functions
        5. RLS-protected multi-tenant architecture ready for clinical pilots`,

    "exp.sparkco.description": `Spark n Co:
    In this project, I contributed to integrating an AI-powered chat solution using OpenAI and DeepSeek to automate and streamline Jira ticket management.
    The system leverages advanced natural language processing to interpret user inquiries in real time, automatically generating tickets, creating incident reports, and dispatching notifications without manual intervention.
    Pursuit:
      I led the development of a mobile app using React Native and Expo, which integrates Supabase for backend services and authentication.
      I also implemented a Retrieval and Augmented Generation (RAG) model with Pinecone to store personalized training and nutrition plans based on each user's personal data, all generated with an OpenAI AI model.
      The app combines AI, structured data output, and data analytics to provide personalized recommendations that optimize individual performance and overall well-being.
      In the process, I trained the team on:
      ► Generative AI model APIs, cost-based token counting, context injection, prompting structure management, and structured data output.
      ► Created embeddings and similarity functions to generate similarity recommendations and searches.
      ► Created Supabase edge functions using Deno.js and optimized them to interact with OpenAI request times.
    Rentscape:
      I developed a feature within the Rentscape platform that features an AI-powered chat solution.
      This system leverages chat interaction with AI combined with function_calling and structured data output to generate accurate data as the AI obtains data with each message.
      That data is used to generate embeddings and perform Pinecone searches for the best rental properties.
      The solution offers an intuitive and personalized search experience based on a mathematical calculation, streamlining the decision-making process in the real estate market.
      In the process I instructed the team on the following:
      ► Use of AI reasoning models that allow function_calling and structured data output at the same time.
      ► Vector database management and client creation for Pinecone using Supabase's Edge functions with Deno`,
  },
} as const;

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)["en"]): string {
    return ui[lang][key] || ui[defaultLocale][key] || key;
  };
}
