// Estructura organizada por año y semestre
const estructura = {
  "Primer Año": {
    "I semestre": [
      "Álgebra",
      "Cálculo I",
      "Comunicación en ingeniería",
      "Introducción en ingeniería",
      "Inglés I"
    ],
    "II semestre": [
      "Álgebra lineal",
      "Cálculo II",
      "Química",
      "Computación I",
      "Inglés II"
    ]
  },
  "Segundo Año": {
    "I semestre": [
      "Probabilidad y estadística",
      "Cálculo III",
      "Física I",
      "Computación II",
      "Inglés III"
    ],
    "II semestre": [
      "Análisis Multivariado",
      "Ecuaciones Diferenciales",
      "Física II"
    ],
    "Módulo Integrador de Ciencias Básicas": [
      "Modulo Integrador de Ciencias Básicas"
    ]
  },
  "Tercer Año": {
    "I semestre": [
      "Modelamiento Matemático y estocástico",
      "Diseño Industrial",
      "Termodinámica",
      "Administración y RRHH",
      "Introducción a la Fe"
    ],
    "II semestre": [
      "Logística",
      "Electricidad Industrial y Automatización",
      "Contabilidad y Finanzas",
      "Economía",
      "Base de Datos",
      "Ética Cristiana"
    ]
  },
  "Cuarto Año": {
    "I semestre": [
      "Investigación de Operaciones",
      "Procesos Industriales",
      "Emprendimiento y Creación Empresas",
      "Ingeniería Económica",
      "Metodología Investigación"
    ],
    "II semestre": [
      "Gestión de Operaciones",
      "Control de Gestión",
      "Desarrollo Personal y Liderazgo",
      "Creatividad Prototipaje y Negocios",
      "Módulo Integrador Licenciatura",
      "Certificación I"
    ]
  },
  "Quinto Año": {
    "I semestre": [
      "Optimización",
      "Gestión Análisis Información",
      "Formalización y Evaluación de Proyectos",
      "Propiedad Intelectual",
      "Marketing Estratégico",
      "Certificación II"
    ],
    "II semestre": [
      "Gestión y Calidad de Productos",
      "Electivo Evaluación de Proyectos",
      "Plan Estratégico y Gestión de Negocios",
      "Gestión Proyectos I+D+i+e",
      "Inteligencia, Competitividad",
      "Certificación III"
    ]
  },
  "Sexto Año": {
    "I semestre": [
      "Electivo Gestión de Operaciones y Procesos Industriales",
      "Electivo Gestión de Negocios",
      "Modulo Integrador formación Profesional"
    ]
  }
};

// Requisitos para cada ramo
const requisitos = {
  "Álgebra lineal": ["Álgebra"],
  "Cálculo II": ["Cálculo I"],
  "Física I": ["Cálculo I"],
  "Inglés II": ["Inglés I"],
  "Cálculo III": ["Cálculo II", "Álgebra lineal"],
  "Inglés III": ["Inglés II"],
  "Probabilidad y estadística": ["Álgebra lineal"],
  "Análisis Multivariado": ["Probabilidad y estadística"],
  "Ecuaciones Diferenciales": ["Cálculo III"],
  "Física II": ["Física I"],
  "Termodinámica": ["Física II"],
  "Computación II": ["Computación I"],
  "Base de Datos": ["Computación II"],
  "Modelamiento Matemático y estocástico": ["Análisis Multivariado"],
  "Logística": ["Modelamiento Matemático y estocástico"],
  "Investigación de Operaciones": ["Modelamiento Matemático y estocástico"],
  "Electricidad Industrial y Automatización": ["Diseño Industrial"],
  "Economía": ["Administración y RRHH"],
  "Ingeniería Económica": ["Economía"],
  "Gestión de Operaciones": ["Investigación de Operaciones"],
  "Control de Gestión": ["Procesos Industriales"],
  "Optimización": ["Gestión de Operaciones"],
  "Gestión Análisis Información": ["Control de Gestión"],
  "Formalización y Evaluación de Proyectos": ["Ingeniería Económica"],
  "Gestión Proyectos I+D+i+e": ["Propiedad Intelectual"],
  "Gestión y Calidad de Productos": ["Procesos Industriales"]
};

const estado = {}; // guarda qué ramos están aprobados

function crearMalla() {
  const contenedor = document.getElementById("malla");

  for (let año in estructura) {
    const divAño = document.createElement("div");
    divAño.className = "año";
    divAño.innerHTML = `<h2>${año}</h2>`;

    const semestres = estructura[año];
    for (let semestre in semestres) {
      const divSem = document.createElement("div");
      divSem.className = "semestre";
      divSem.innerHTML = `<h3>${semestre}</h3>`;

      const divRamos = document.createElement("div");
      divRamos.className = "ramos";

      semestres[semestre].forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo bloqueado";
        div.id = ramo;
        div.innerText = ramo;
        div.addEventListener("click", () => aprobar(ramo));
        divRamos.appendChild(div);
      });

      divSem.appendChild(divRamos);
      divAño.appendChild(divSem);
    }

    contenedor.appendChild(divAño);
  }

  actualizarMalla();
}

function aprobar(nombre) {
  estado[nombre] = true;
  actualizarMalla();
}

function actualizarMalla() {
  const todos = document.querySelectorAll(".ramo");
  todos.forEach(el => {
    const nombre = el.id;
    const req = requisitos[nombre] || [];
    const habilitado = req.every(r => estado[r]);

    if (estado[nombre]) {
      el.className = "ramo aprobado";
    } else if (habilitado || req.length === 0) {
      el.className = "ramo";
    } else {
      el.className = "ramo bloqueado";
    }
  });
}

window.onload = crearMalla;
