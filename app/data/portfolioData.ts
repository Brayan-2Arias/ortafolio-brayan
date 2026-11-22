export interface ActivityDetail {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  problem: string;
  objective: string;
  solution: string;
  results: string[];
  technologies: string[];
  codeSnippet: string;
  repoUrl?: string;
  evidenceNote: string;
}

export const personalInfo = {
  fullName: "Brayan Josué Arias Arias",
  shortName: "Brayan Arias",
  role: "Desarrollador Web & Entusiasta de IA / Ciencia de Datos",
  tagline:
    "Construyendo soluciones tecnológicas con Python, Machine Learning y desarrollo web moderno en Next.js.",
  location: "Soyapango, San Salvador, El Salvador",
  email: "ba373001@gmail.com",
  github: "https://github.com/Brayan-2Arias",
  linkedin: "https://www.linkedin.com/",
  availability: "Disponible para proyectos y oportunidades académicas",
};

export const aboutData = {
  summary: [
    "Soy estudiante becado del Programa ¡Supérate! Fundación Frech (promoción 2026) y bachiller graduado del Complejo Educativo Católico Fray Martín de Porres. Me apasiona la tecnología, el análisis de datos y la inteligencia artificial aplicada a problemas reales.",
    "Mi objetivo profesional es estudiar Ingeniería en Ciencias de la Computación y seguir desarrollando software escalable, modelos de aprendizaje automático y aplicaciones web que generen un impacto positivo en mi comunidad.",
  ],
  interests: [
    {
      title: "Inteligencia Artificial & ML",
      description:
        "Implementación de algoritmos de regresión, clasificación y agrupamiento con Python.",
    },
    {
      title: "Desarrollo Full Stack",
      description:
        "Creación de aplicaciones modernas con React, Next.js, TypeScript y APIs REST.",
    },
    {
      title: "Análisis Geoespacial y Datos",
      description:
        "Modelado de datos, Power BI y visualización de mapas interactivos con OpenStreetMap.",
    },
    {
      title: "Aprendizaje Continuo",
      description:
        "Preparación constante en inglés técnico (TOEIC) y herramientas de productividad.",
    },
  ],
};

export const experiences = [
  {
    period: "2024 — 2026",
    role: "Estudiante Becado — Área de Informática e Inglés",
    organization: "Programa ¡Supérate! Fundación Frech",
    description:
      "Formación intensiva de tres años en desarrollo de software, análisis de datos, inglés y valores.",
    highlights: [
      "Desarrollo de proyectos prácticos de Machine Learning y Ciencia de Datos en Python durante 10 semanas.",
      "Modelado de datos empresariales y reportes interactivos en Power BI (proyecto EcoCiudad).",
      "Prototipado de plataformas digitales y trabajo colaborativo con metodologías ágiles (proyecto Ingenia).",
    ],
    tags: ["Python", "Next.js", "Power BI", "Excel MOS", "Trabajo en equipo"],
  },
  {
    period: "2026",
    role: "Desarrollador de Prototipo Web & Lógica de Negocio",
    organization: "Proyecto Académico — Plataforma Ingenia",
    description:
      "Diseño de arquitectura de usuario, flujos de procesos y estructura web para conectar clientes, albañiles y ferreterías en El Salvador.",
    highlights: [
      "Elaboración de diagramas de flujo de usuario y lógica operativa.",
      "Diseño de interfaz inicial (wireframes) y propuesta de identidad visual.",
    ],
    tags: ["Diseño UI", "Lógica de Negocio", "Prototipado"],
  },
];

export const courseActivities: ActivityDetail[] = [
  {
    id: "regresion-lineal",
    tag: "Actividad 1 · Semana 3",
    title: "Modelo de Regresión Lineal",
    subtitle: "Predicción numérica y análisis de tendencias con Python",
    shortDescription:
      "Implementación de un modelo de regresión lineal para analizar la relación entre variables y predecir valores continuos a partir de datos reales.",
    problem:
      "Se necesitaba estimar comportamientos numéricos futuros a partir de registros históricos con múltiples observaciones, evaluando qué tan bien una recta de ajuste explica la variación de los datos.",
    objective:
      "Comprender los fundamentos matemáticos de la regresión lineal, entrenar el modelo en Python, calcular métricas de error y visualizar la línea de tendencia frente a los datos reales.",
    solution:
      "Se limpiaron y estructuraron los datos utilizando Pandas y NumPy, se dividió el conjunto en entrenamiento y prueba con Scikit-Learn y se generó una gráfica comparativa con Matplotlib.",
    results: [
      "Ajuste claro de la pendiente e intercepto sobre el conjunto de datos de prueba.",
      "Visualización de dispersión vs. recta de predicción para interpretar el margen de error.",
      "Comprensión práctica de cómo los modelos supervisados aprenden patrones lineales.",
    ],
    technologies: ["Python", "Google Colab", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
    codeSnippet: `import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# División de datos en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Entrenamiento del modelo de Regresión Lineal
modelo = LinearRegression()
modelo.fit(X_train, y_train)
predicciones = modelo.predict(X_test)

print(f"Pendiente (m): {modelo.coef_[0]:.4f}")
print(f"Intercepto (b): {modelo.intercept_:.4f}")`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Notebook ejecutado en Google Colab con gráficas de dispersión y métricas R².",
  },
  {
    id: "laberinto-arboles",
    tag: "Actividad 2 · Semana 4",
    title: "Resolución de Laberinto & Árboles de Decisión",
    subtitle: "Búsqueda de rutas óptimas y toma de decisiones algorítmica",
    shortDescription:
      "Algoritmo en Python capaz de explorar un laberinto representado como matriz, evaluar caminos válidos y tomar decisiones paso a paso hasta alcanzar la salida.",
    problem:
      "Dado un entorno con obstáculos, paredes y caminos libres, el sistema debía decidir qué dirección tomar en cada intersección sin quedar atrapado en ciclos infinitos.",
    objective:
      "Aplicar estructuras de decisión y algoritmos de exploración de estados para encontrar una ruta válida desde el punto inicial hasta la meta.",
    solution:
      "Se modeló el laberinto en una cuadrícula bidimensional, registrando celdas visitadas y evaluando condiciones de movimiento (arriba, abajo, izquierda, derecha) mediante reglas de decisión y retroceso.",
    results: [
      "Recorrido exitoso desde la entrada hasta la salida evitando callejones sin salida.",
      "Representación visual del camino recorrido paso a paso en consola y gráfica.",
      "Base lógica para comprender árboles de decisión y exploración de nodos.",
    ],
    technologies: ["Python", "Algoritmos", "Árboles de Decisión", "Estructuras de Datos"],
    codeSnippet: `def resolver_laberinto(laberinto, x, y, visitados, camino):
    filas, cols = len(laberinto), len(laberinto[0])
    if x < 0 or y < 0 or x >= filas or y >= cols or laberinto[x][y] == 1 or (x, y) in visitados:
        return False

    camino.append((x, y))
    visitados.add((x, y))

    if laberinto[x][y] == 2:  # Meta alcanzada
        return True

    for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
        if resolver_laberinto(laberinto, x + dx, y + dy, visitados, camino):
            return True

    camino.pop()
    return False`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Código fuente en Python con visualización de ruta encontrada en la matriz.",
  },
  {
    id: "ai-challenge-kmeans-knn",
    tag: "Actividad 3 · AI Challenge",
    title: "AI Challenge: K-Means y KNN",
    subtitle: "Aprendizaje no supervisado (clustering) y clasificación supervisada",
    shortDescription:
      "Comparación e implementación práctica de K-Means para segmentar grupos de datos y K-Nearest Neighbors (KNN) para clasificar nuevos registros según su cercanía.",
    problem:
      "Se requería descubrir agrupaciones naturales dentro de un dataset sin etiquetas previas y posteriormente clasificar nuevos puntos de datos basándose en los grupos detectados.",
    objective:
      "Combinar técnicas de clustering (K-Means) y clasificación por vecindad (KNN) para analizar patrones y validar la precisión de clasificación.",
    solution:
      "Se normalizaron las variables numéricas, se determinó el número óptimo de clústeres con K-Means y se entrenó un clasificador KNN evaluando distintos valores de K.",
    results: [
      "Identificación clara de centroides y segmentos diferenciados en el plano.",
      "Alta precisión al clasificar nuevos puntos mediante distancia euclidiana en KNN.",
      "Gráficas comparativas de los clústeres generados y fronteras de decisión.",
    ],
    technologies: ["Python", "K-Means", "KNN", "Scikit-Learn", "Pandas", "Matplotlib"],
    codeSnippet: `from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier

# 1. Agrupamiento con K-Means
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_scaled)

# 2. Clasificación con KNN usando los grupos obtenidos
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
exactitud = knn.score(X_test, y_test)
print(f"Precisión del modelo KNN: {exactitud * 100:.2f}%")`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Visualización de centroides K-Means y matriz de resultados KNN en Colab.",
  },
  {
    id: "hotspots-comerciales",
    tag: "Actividad 4 · Proyecto Geoespacial",
    title: "Hotspots Comerciales y Turísticos",
    subtitle: "Detección de zonas de alta concentración con OpenStreetMap, K-Means y Folium",
    shortDescription:
      "Análisis geoespacial en Python para identificar zonas de alta concentración comercial y hotelera en Departamento de La Paz, El Salvador, visualizadas en mapas interactivos.",
    problem:
      "Identificar estratégicamente dónde se concentran los principales puntos de actividad comercial y alojamiento turístico para apoyar decisiones de ubicación y análisis territorial.",
    objective:
      "Extraer coordenadas geográficas reales desde OpenStreetMap, agrupar zonas de alta densidad mediante K-Means/KNN y generar un mapa interactivo con Folium.",
    solution:
      "Se consultaron datos geográficos reales de La Paz (incluyendo zonas costeras como Hotel Las Hojas Resort), se aplicó clustering espacial y se exportó un mapa HTML interactivo con marcadores y áreas de calor.",
    results: [
      "Detección automática de los principales clústeres comerciales y turísticos de la zona.",
      "Mapa interactivo en Folium con capas, marcadores y clasificación por zona.",
      "Integración real de ciencia de datos, Machine Learning y visualización geográfica.",
    ],
    technologies: ["Python", "OpenStreetMap", "K-Means", "KNN", "Folium", "Google Colab"],
    codeSnippet: `import folium
from sklearn.cluster import KMeans

# Agrupamiento geoespacial por latitud y longitud
coords = df[["lat", "lon"]]
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df["hotspot"] = kmeans.fit_predict(coords)

# Creación del mapa interactivo con Folium
mapa = folium.Map(location=[13.34, -89.03], zoom_start=11)
for _, row in df.iterrows():
    folium.CircleMarker(
        location=[row["lat"], row["lon"]],
        radius=6,
        popup=row["nombre"],
        fill=True,
    ).add_to(mapa)`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Script en Google Colab con datos de OpenStreetMap y mapa interactivo en Folium.",
  },
  {
    id: "arquitectura-web-backend",
    tag: "Desarrollo Full Stack · App & API",
    title: "Arquitectura Web Next.js & API REST",
    subtitle: "Desarrollo frontend modular, backend en App Router y despliegue en Vercel",
    shortDescription:
      "Documentación técnica de la construcción de este portafolio digital con Next.js, TypeScript, Tailwind CSS y endpoint REST POST /api/contact.",
    problem:
      "Se requería construir una aplicación web rápida, responsiva y segura que integrara presentación profesional, documentación de proyectos de IA y comunicación directa mediante API REST.",
    objective:
      "Implementar una arquitectura moderna con Next.js App Router, componentes reutilizables en React, validación en cliente/servidor y protección de variables de entorno.",
    solution:
      "Se organizó el proyecto en app/page.tsx, app/data/portfolioData.ts y app/api/contact/route.ts. El endpoint valida nombre, correo electrónico y longitud de mensaje devolviendo respuestas JSON estructuradas.",
    results: [
      "Endpoint POST /api/contact operativo con validación de campos y códigos HTTP 200/400.",
      "Variables sensibles aisladas en .env.local fuera del control de versiones.",
      "Interfaz responsiva en azul marino y blanco desplegada en producción con Vercel.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API REST", "Vercel"],
    codeSnippet: `// Estructura del proyecto Next.js (App Router)
mi-portafolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Endpoint POST /api/contact con validaciones
│   ├── data/
│   │   └── portfolioData.ts  # Datos tipados y evidencias de las 4 actividades
│   ├── globals.css           # Estilos base y paleta azul marino/blanco
│   ├── layout.tsx            # Metadatos y fuente principal
│   └── page.tsx              # Las 7 secciones + modal interactivo de evidencias
├── .env.local                # Variables de entorno privadas
└── README.md                 # Documentación completa del repositorio`,
    repoUrl: "https://github.com/Brayan-2Arias/mi-portafolio",
    evidenceNote: "Aplicación en producción con formulario conectado a POST /api/contact.",
  },
];

export const skillCategories = [
  {
    category: "Lenguajes de Programación",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Desarrollo Web",
    skills: ["React", "Next.js (App Router)", "Tailwind CSS", "API REST", "Diseño Responsive"],
  },
  {
    category: "IA & Machine Learning",
    skills: [
      "Regresión Lineal",
      "Árboles de Decisión",
      "K-Means Clustering",
      "KNN",
      "Scikit-Learn",
      "Pandas & NumPy",
    ],
  },
  {
    category: "Bases de Datos & Análisis",
    skills: ["Power BI", "Power Query", "DAX", "Modelado Estrella", "Microsoft Excel (MOS)"],
  },
  {
    category: "Herramientas Tecnológicas",
    skills: ["Git", "GitHub", "GitHub Desktop", "Vercel", "VS Code", "Google Colab", "Folium"],
  },
  {
    category: "Habilidades Personales",
    skills: [
      "Resolución de problemas",
      "Trabajo en equipo",
      "Aprendizaje rápido",
      "Comunicación efectiva",
      "Inglés Intermedio (B1 / TOEIC)",
    ],
  },
];

export const educationList = [
  {
    period: "2024 — 2026 (En curso)",
    title: "Programa Empresarial ¡Supérate!",
    institution: "Centro ¡Supérate! Fundación Frech",
    details: [
      "Estudiante becado actualmente cursando el último año (graduación a finales de 2026).",
      "Formación integral en Informática, Inglés y Valores.",
      "Desarrollo de proyectos de Inteligencia Artificial, Machine Learning y Desarrollo Web.",
    ],
    badges: ["Certificación Excel MOS", "Preparación TOEIC", "IA & Machine Learning"],
  },
  {
    period: "Graduado",
    title: "Bachillerato General",
    institution: "Complejo Educativo Católico Fray Martín de Porres",
    details: [
      "Graduado de educación media con sólido rendimiento académico.",
      "Evaluación nacional AVANZO completada.",
    ],
    badges: ["Bachiller Graduado", "AVANZO"],
  },
];