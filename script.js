const ramos = {
  "Álgebra": [],
  "Álgebra lineal": ["Álgebra"],
  "Cálculo I": [],
  "Cálculo II": ["Cálculo I"],
  "Cálculo III": ["Álgebra lineal", "Cálculo II"],
  "Comunicación en ingeniería": [],
  "Introducción en ingeniería": [],
  "Química": [],
  "Computación I": [],
  "Computación II": ["Computación I"],
  "Probabilidad y estadística": ["Álgebra lineal"],
  "Análisis Multivariado": ["Probabilidad y estadística"],
  "Ecuaciones Diferenciales": ["Cálculo III"],
  "Física I": ["Cálculo I"],
  "Física II": ["Física I"],
  "Termodinámica": ["Física II"],
  "Inglés I": [],
  "Inglés II": ["Inglés I"],
  "Inglés III": ["Inglés II"],
  "Modelamiento Matemático y estocástico": ["Análisis Multivariado"],
  "Diseño Industrial": [],
  "Administración y RRHH": [],
  "Introducción a la Fe": [],
  "Logística": ["Modelamiento Matemático y estocástico"],
  "Electricidad Industrial y Automatización": ["Diseño Industrial"],
  "Contabilidad y Finanzas": [],
  "Economía": ["Administración y RRHH"],
  "Base de Datos": ["Computación II"],
  "Ética Cristiana": [],
  "Investigación de Operaciones": ["Modelamiento Matemático y estocástico"],
  "Procesos Industriales": ["Diseño Industrial"],
  "Ingeniería Económica": ["Economía"],
  "Emprendimiento y Creación Empresas": [],
  "Metodología Investigación": [],
  "Gestión de Operaciones": ["Investigación de Operaciones"],
  "Control de Gestión": ["Procesos Industriales"],
  "Desarrollo Personal y Liderazgo": [],
  "Creatividad Prototipaje y Negocios": [],
  "Optimización": ["Gestión de Operaciones"],
  "Gestión Análisis Información": ["Control de Gestión"],
  "Formalización y Evaluación de Proyectos": ["Ingeniería Económica"],
  "Propiedad Intelectual": [],
  "Marketing Estratégico": [],
  "Gestión y Calidad de Productos": ["Procesos Industriales"],
  "Electivo Evaluación de Proyectos": [],
  "Plan Estratégico y Gestión de Negocios": [],
  "Gestión Proyectos I+D+i+e": ["Propiedad Intelectual"],
  "Inteligencia, Competitividad": [],
  "Electivo Gestión de Operaciones y Procesos Industriales": [],
  "Electivo Gestión de Negocios": [],
  "Modulo Integrador formación Profesional": [],
  "Certificación I": [],
  "Certificación II": [],
  "Certificación III": [],
  "Módulo Integrador Licenciatura": [],
  "Modulo Integrador de Ciencias Básicas": []
};

const estado = {}; // guarda qué ramos están aprobados

function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (let nombre in ramos) {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.innerText = nombre;
    div.id = nombre;
    div.addEventListener("click", () => aprobar(nombre));
    contenedor.appendChild(div);
  }
  actualizarMalla();
}

function aprobar(nombre) {
  estado[nombre] = true;
  actualizarMalla();
}

function actualizarMalla() {
  for (let nombre in ramos) {
    const elem = document.getElementById(nombre);
    const requisitos = ramos[nombre];
    const cumplidos = requisitos.every(r => estado[r]);
    
    if (estado[nombre]) {
      elem.className = "ramo aprobado";
    } else if (cumplidos) {
      elem.className = "ramo";
    } else {
      elem.className = "ramo bloqueado";
    }
  }
}

window.onload = crearMalla;
