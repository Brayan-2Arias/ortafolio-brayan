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
  role: "Bachiller · Conocimientos Intermedios en Programación e IA",
  tagline:
    "Tratando de mejorar cada día y aprender un poco más con proyectos prácticos en Python, análisis de datos y desarrollo web.",
  location: "Soyapango, San Salvador, El Salvador",
  email: "ba373001@gmail.com",
  github: "https://github.com/Brayan-2Arias",
  linkedin: "https://www.linkedin.com/",
  availability: "En formación constante · Tratando de ser mejor cada día",
};

export const aboutData = {
  summary: [
    "Soy estudiante becado del Programa ¡Supérate! Fundación Frech (promoción 2026) y bachiller graduado del Complejo Educativo Católico Fray Martín de Porres. Me interesa mucho la tecnología, el análisis de datos y la inteligencia artificial, y sigo practicando para mejorar mis bases.",
    "Mi meta es seguir formándome, estudiar Ingeniería en Ciencias de la Computación y continuar aprendiendo paso a paso sobre programación, datos y desarrollo web.",
  ],
  interests: [
    {
      title: "Inteligencia Artificial & ML",
      description:
        "Práctica inicial y progresiva con algoritmos de regresión, clasificación y agrupamiento en Python.",
    },
    {
      title: "Desarrollo Web",
      description:
        "Construcción de interfaces y proyectos básicos con React, Next.js, TypeScript y rutas API en aprendizaje.",
    },
    {
      title: "Adaptabilidad",
      description:
        "Soy una persona bastante adaptable a cualquier entorno y en lo que hace bastante dedicada.",
    },
    {
      title: "Mejora Continua",
      description:
        "Práctica constante de programación, Excel MOS e inglés intermedio (TOEIC).",
    },
  ],
};

export const experiences = [
  {
    period: "2024 — 2026",
    role: "Estudiante Becado — Área de Informática e Inglés",
    organization: "Programa ¡Supérate! Fundación Frech",
    description:
      "Formación de tres años en fundamentos de informática, análisis de datos, inglés y valores.",
    highlights: [
      "Desarrollo de actividades prácticas de Machine Learning y Ciencia de Datos en Python durante 10 semanas.",
      "Modelado de datos y reportes interactivos en Power BI (proyecto EcoCiudad).",
      "Prototipado de plataformas digitales y trabajo en equipo (proyecto Ingenia).",
    ],
    tags: ["Python", "Next.js", "Power BI", "Excel MOS", "Trabajo en equipo"],
  },
  {
    period: "2026",
    role: "Colaborador en Prototipo Web & Lógica de Negocio",
    organization: "Proyecto Académico — Plataforma Ingenia",
    description:
      "Apoyo en el diseño de flujos de usuario, lógica operativa y estructura inicial para conectar clientes, albañiles y ferreterías en El Salvador.",
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
    subtitle: "Predicción de SCORE a partir de HORAS_ESTUDIO con Scikit-Learn",
    shortDescription:
      "Implementación de un modelo de regresión lineal para analizar la relación entre horas de estudio y puntaje, calcular métricas R² y MSE, predecir valores y graficar la recta de ajuste.",
    problem:
      "Se requería modelar la relación entre la cantidad de horas de estudio (HORAS_ESTUDIO) y el resultado obtenido (SCORE) para estimar puntajes ante nuevos valores de estudio.",
    objective:
      "Construir un modelo de regresión lineal con LinearRegression, evaluar su rendimiento mediante R² y MSE, permitir consultas interactivas por consola y visualizar los datos reales junto a la predicción.",
    solution:
      "Se cargó el dataset en un DataFrame de Pandas, se entrenó LinearRegression sobre X = HORAS_ESTUDIO y y = SCORE, se imprimieron pendiente, intercepto, R² y MSE, se habilitó la predicción mediante input() y se graficó con Matplotlib.",
    results: [
      "Cálculo directo de pendiente (coef_[0]), intercepto, R² y error cuadrático medio (MSE).",
      "Predicción interactiva del puntaje ingresando las horas de estudio por consola.",
      "Gráfico de dispersión combinado con la línea de predicción generada por el modelo.",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-Learn"],
    codeSnippet: `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

data = {
    "HORAS_ESTUDIO": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "SCORE": [2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
}

df = pd.DataFrame(data)
print(df)

X = df[["HORAS_ESTUDIO"]]
y = df["SCORE"]

modelo = LinearRegression()
modelo.fit(X, y)
y_pred = modelo.predict(X)

print("Pendiente:", modelo.coef_[0])
print("Intercepto:", modelo.intercept_)
print("R²:", r2_score(y, y_pred))
print("MSE:", mean_squared_error(y, y_pred))

horas = float(input("Ingrese las horas de estudio: "))
prediccion = modelo.predict([[horas]])
print("Score predicho:", prediccion[0])

plt.scatter(X, y)
plt.plot(X, y_pred)
plt.xlabel("Horas de estudio")
plt.ylabel("Score")
plt.title("Regresión Lineal")
plt.show()`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Script en Python con LinearRegression, métricas R²/MSE y gráfico en Matplotlib.",
  },
  {
    id: "laberinto-arboles",
    tag: "Actividad 2 · Semana 4",
    title: "Resolución de Laberinto & Árboles de Decisión",
    subtitle: "Pac-Man Procedural Maze — Arcade Edition con Pygame",
    shortDescription:
      "Juego interactivo en Python con Pygame que genera laberintos proceduralmente, aumenta la dificultad por nivel, deja un rastro de puntos y cuenta los movimientos del jugador.",
    problem:
      "Crear un laberinto navegable y escalable en niveles donde el jugador pueda desplazarse con teclado, reiniciar el nivel si lo desea y avanzar automáticamente al alcanzar la meta.",
    objective:
      "Implementar generación procedural de laberintos mediante pila (stack) con retroceso y renderizado estilo arcade a 60 FPS usando Pygame.",
    solution:
      "Se desarrolló generar_laberinto() sobre una cuadrícula de paredes y pasillos, configurar_nivel() para ampliar dimensiones progresivamente (hasta 33x23) y un bucle principal con controles WASD/flechas, tecla R para reiniciar y panel inferior de estado.",
    results: [
      "Generación procedural de laberintos con incremento automático de nivel al llegar a la meta.",
      "Visualización estilo arcade con paredes azules, rastro de puntos, fantasma objetivo y personaje.",
      "Conteo de pulsaciones/movimientos y opción de reinicio rápido con la tecla R.",
    ],
    technologies: ["Python", "Pygame", "Random", "Algoritmos"],
    codeSnippet: `import pygame
import random
import sys

pygame.init()
pygame.mixer.init()

TAMANO_CELDA = 30
nivel = 1
ANCHO_COLS = 21
ALTO_FILAS = 15

def generar_laberinto(cols, filas):
    laberinto = [[1 for _ in range(cols)] for _ in range(filas)]
    def es_valido(r, c):
        return 0 <= r < filas and 0 <= c < cols
    stack = []
    inicio_r, inicio_c = 1, 1
    laberinto[inicio_r][inicio_c] = 0
    stack.append((inicio_r, inicio_c))
    while stack:
        r, c = stack[-1]
        direcciones = [(-2, 0), (0, 2), (2, 0), (0, -2)]
        random.shuffle(direcciones)
        movimiento_encontrado = False
        for dr, dc in direcciones:
            vecino_r, vecino_c = r + dr, c + dc
            if es_valido(vecino_r, vecino_c) and laberinto[vecino_r][vecino_c] == 1:
                laberinto[r + dr // 2][c + dc // 2] = 0
                laberinto[vecino_r][vecino_c] = 0
                stack.append((vecino_r, vecino_c))
                movimiento_encontrado = True
                break
        if not movimiento_encontrado:
            stack.pop()
    return laberinto`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Aplicación interactiva en Pygame con generación procedural por niveles y música opcional.",
  },
  {
    id: "ai-challenge-kmeans-knn",
    tag: "Actividad 3 · AI Challenge",
    title: "AI Challenge: K-Means y KNN",
    subtitle: "Segmentación con K-Means, clasificación con KNN y escalado de datos",
    shortDescription:
      "Simulación de 500 estudiantes para agrupar perfiles con K-Means, entrenar un clasificador KNN con StandardScaler, comparar valores de K con y sin normalización y predecir un caso de prueba.",
    problem:
      "Evaluar cómo se agrupan 500 registros estudiantiles según horas de estudio, asistencia y tareas entregadas, y medir cómo afecta la normalización al clasificar la aprobación con KNN.",
    objective:
      "Aplicar K-Means (3 y 4 clústeres), comparar el accuracy de KNN para distintos valores de K con y sin StandardScaler y resolver el caso de prueba final.",
    solution:
      "Se generó un dataset reproducible (np.random.seed(42)) con 500 estudiantes y umbral de aprobación nota_final >= 60, se ejecutó KMeans, se dividió el conjunto 75%/25%, se probó K en [1, 3, 5, 7, 11, 15, 21] y se evaluó un estudiante con 4.0 hrs, 55% asistencia y 50% tareas.",
    results: [
      "Agrupamiento con K-Means (3 y 4 grupos) y gráfico de dispersión con Seaborn.",
      "Tabla comparativa de accuracy entre datos normalizados y sin normalizar para múltiples valores de K.",
      "Predicción de clase y probabilidades de aprobación/reprobación para el caso de prueba.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
    codeSnippet: `import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report

np.random.seed(42)
n_estudiantes = 500
horas_estudio = np.random.uniform(2, 10, n_estudiantes)
asistencia = np.random.uniform(50, 100, n_estudiantes)
tareas_entregadas = np.random.uniform(40, 100, n_estudiantes)

nota_final = np.clip(
    (horas_estudio * 3.5) + (asistencia * 0.35) + (tareas_entregadas * 0.35) + np.random.normal(0, 4, n_estudiantes),
    0,
    100
)
aprobado = (nota_final >= 60).astype(int)

df = pd.DataFrame({
    "horas_estudio": horas_estudio,
    "asistencia": asistencia,
    "tareas_entregadas": tareas_entregadas,
    "nota_final": nota_final,
    "aprobado": aprobado
})

kmeans_3 = KMeans(n_clusters=3, random_state=42, n_init=10)
df["grupo_3"] = kmeans_3.fit_predict(df[["horas_estudio", "asistencia", "tareas_entregadas"]])

X = df[["horas_estudio", "asistencia", "tareas_entregadas"]]
y = df["aprobado"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_scaled, y_train)
y_pred = knn.predict(X_test_scaled)
print(f"Exactitud (Accuracy): {accuracy_score(y_test, y_pred) * 100:.2f}%")
print(classification_report(y_test, y_pred))`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Script de AI Challenge con K-Means, StandardScaler, comparativa de K y predicción final.",
  },
  {
    id: "hotspots-comerciales",
    tag: "Actividad 4 · Proyecto Geoespacial",
    title: "Hotspots Comerciales y Turísticos",
    subtitle: "Hoteles en Departamento de La Paz (Ref: Las Hojas Resort) con OSM, K-Means, KNN y Folium",
    shortDescription:
      "Análisis geoespacial en Python sobre datos de hoteles en el departamento de La Paz (export.geojson) usando K-Means, KNN con métrica haversine y mapas interactivos en Folium.",
    problem:
      "Analizar la distribución geográfica de hoteles en el departamento de La Paz para el caso de Grupo Superalitos, identificando clústeres y ubicando la cercanía real de referencia de Las Hojas Resort.",
    objective:
      "Limpiar coordenadas desde export.geojson, agrupar ubicaciones con K-Means (k=3), clasificar zonas y encontrar vecinos cercanos con KNN (metric='haversine') y exportar un mapa interactivo HTML con Folium.",
    solution:
      "Se parsearon puntos y centros de polígonos desde export.geojson, se eliminaron nulos y duplicados exportando dataset_hoteles_la_paz_limpio.csv, se aplicó KMeans en latitud/longitud, se entrenó KNN en radianes con haversine para (13.3210, -88.9450) y se generó mapa_hotspots_la_paz.html.",
    results: [
      "Limpieza de datos geoespaciales de OpenStreetMap y exportación a CSV limpio.",
      "Identificación de 3 clústeres y centroides con K-Means más gráfico de dispersión.",
      "Cálculo de distancias en km a vecinos cercanos con KNN (haversine) y mapa interactivo en Folium.",
    ],
    technologies: ["Python", "Folium", "GeoJSON / OSM", "K-Means", "KNN (Haversine)", "Pandas"],
    codeSnippet: `import json
import numpy as np
import pandas as pd
import folium
from sklearn.cluster import KMeans
from sklearn.neighbors import KNeighborsClassifier

with open("export.geojson", "r", encoding="utf-8") as f:
    data = json.load(f)

registros = []
for feature in data["features"]:
    props = feature.get("properties", {})
    geom = feature.get("geometry", {})
    coords = geom.get("coordinates", [])
    if geom.get("type") == "Point" and len(coords) >= 2:
        lon, lat = coords[0], coords[1]
    elif "center" in feature:
        lon, lat = feature["center"]["lon"], feature["center"]["lat"]
    else:
        continue
    registros.append({
        "name": props.get("name", "Sin nombre registrado"),
        "category": props.get("tourism", "hotel"),
        "latitude": float(lat),
        "longitude": float(lon),
    })

df = pd.DataFrame(registros).dropna(subset=["latitude", "longitude"])
df = df.drop_duplicates(subset=["name", "latitude", "longitude"]).reset_index(drop=True)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df["cluster"] = kmeans.fit_predict(df[["latitude", "longitude"]].values)

df["zona_etiqueta"] = np.where(df["latitude"] < 13.40, "Zona Costera / Playa", "Zona Interior / Urbana")
knn = KNeighborsClassifier(n_neighbors=3, metric="haversine")
knn.fit(np.radians(df[["latitude", "longitude"]].values), df["zona_etiqueta"].values)

nueva_lat, nueva_lon = 13.3210, -88.9450
distancias_rad, indices_vecinos = knn.kneighbors(np.radians([[nueva_lat, nueva_lon]]))
distancias_km = distancias_rad[0] * 6371.0

mapa = folium.Map(location=[nueva_lat, nueva_lon], zoom_start=13, tiles="Esri.WorldStreetMap")
mapa.save("mapa_hotspots_la_paz.html")`,
    repoUrl: "https://github.com/Brayan-2Arias",
    evidenceNote: "Script en Python con export.geojson, K-Means, KNN haversine y mapa mapa_hotspots_la_paz.html.",
  },
  {
    id: "arquitectura-web-backend",
    tag: "Desarrollo Full Stack · App & API",
    title: "Arquitectura Web Next.js & API REST",
    subtitle: "Proyecto práctico con Next.js App Router y ruta POST /api/contact",
    shortDescription:
      "Documentación de la construcción de este portafolio con Next.js, TypeScript, Tailwind CSS y endpoint POST /api/contact.",
    problem:
      "Armar un portafolio ordenado donde mostrar las actividades realizadas y practicar el funcionamiento de rutas y formularios en Next.js.",
    objective:
      "Organizar las secciones del sitio, conectar los datos en portfolioData.ts y validar el envío de mensajes desde el formulario.",
    solution:
      "Se estructuró el proyecto en app/page.tsx, app/data/portfolioData.ts y app/api/contact/route.ts para validar los campos del formulario y responder en formato JSON.",
    results: [
      "Sitio organizado por secciones con modal interactivo para revisar cada actividad.",
      "Formulario conectado a POST /api/contact con validación básica.",
      "Proyecto listo para subir a GitHub y probar despliegue en Vercel.",
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
    evidenceNote: "Proyecto de práctica en Next.js con formulario conectado a POST /api/contact.",
  },
];

export const skillCategories = [
  {
    category: "Lenguajes de Programación",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Desarrollo Web",
    skills: ["React", "Next.js (App Router)", "API REST"],
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
    skills: ["Power BI", "Power Query", "Modelado Estrella", "Microsoft Excel (MOS)"],
  },
  {
    category: "Herramientas Tecnológicas",
    skills: ["Git", "GitHub", "GitHub Desktop", "Vercel", "VS Code", "Google Colab"],
  },
  {
    category: "Habilidades Personales",
    skills: [
      "Resolución de problemas",
      "Trabajo en equipo",
      "Aprendizaje rápido",
      "Comunicación efectiva",
      "Inglés intermedio (TOEIC)",
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
      "Formación en Informática, Inglés y Valores.",
      "Prácticas de programación, análisis de datos y desarrollo web.",
    ],
    badges: ["Certificación Excel MOS", "Preparación TOEIC", "Prácticas en IA & Web"],
  },
  {
    period: "Graduado",
    title: "Bachillerato General",
    institution: "Complejo Educativo Católico Fray Martín de Porres",
    details: [
      "Graduado de bachillerato.",
      "Evaluación nacional AVANZO completada.",
    ],
    badges: ["Bachiller Graduado", "AVANZO"],
  },
];