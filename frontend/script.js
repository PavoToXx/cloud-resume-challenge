const API_URL = "https://fg1jfmdws4.execute-api.us-east-1.amazonaws.com/visits";

const translations = {
    es: {
        navProfile: "Perfil",
        navExperience: "Experiencia",
        navProjects: "Proyectos",
        navSkills: "Habilidades",
        navEducation: "Formacion",
        navCertifications: "Certificaciones",
        navBadges: "Insignias",
        navLanguages: "Idiomas",
        heroEyebrow: "Cloud Infrastructure | ML | AI | Data",
        heroTitle: "Estudiante de Ingenieria en Sistemas Inteligentes | Graduado en Musica (Especialidad Guitarra) | Data Analyst & ML Engineer",
        location: "Ecuador",
        profileViews: "Visitas al perfil",
        profileHeading: "Perfil Profesional",
        profileP1: "Estudiante de Ingenieria en Sistemas Inteligentes en la Universidad Ecotec con una solida base en desarrollo de software, infraestructura en la nube y diseno de sistemas.",
        profileP2: "Cuento con experiencia practica en desarrollo movil, virtualizacion, redes y resolucion de problemas tecnicos. Actualmente amplio conocimientos en Machine Learning, Cloud e Inteligencia Artificial, incluyendo modelos predictivos para analisis deportivo.",
        profileP3: "He desarrollado competencias mediante pasantias preprofesionales en SENAE y formacion musical profesional, aportando disciplina, creatividad, atencion al detalle y aprendizaje continuo.",
        experienceHeading: "Experiencia Profesional",
        exp1Title: "Pasante de TI - Soporte Tecnico, SENAE (Servicio Nacional de Aduana del Ecuador)",
        exp1Date: "Junio 2025 - Agosto 2025",
        exp1Body: "Soporte tecnico en hardware y software, instalacion y configuracion de sistemas operativos y aplicaciones, recuperacion y migracion de datos, virtualizacion con VMware Workstation Pro y asistencia continua al personal.",
        exp2Title: "Pasante de TI - Departamento de Laboratorio",
        exp2Date: "Febrero 2019 - Marzo 2019",
        exp2Body: "Apoyo en gestion basica de bases de datos internas, registro y edicion de informacion, y soporte en tareas tecnicas y operativas del laboratorio.",
        projectsHeading: "Proyectos",
        viewGithub: "Ver en GitHub",
        project1Title: "Cloud Resume Challenge (AWS)",
        project1Desc: "CV serverless desplegado en AWS con frontend estatico, backend con Lambda y persistencia en DynamoDB. Incluye CI/CD con GitHub Actions y contador de visitas en tiempo real.",
        project2Title: "Prediccion de Fallos de Servidores",
        project2Desc: "Pipeline MLOps end-to-end para anticipar fallos con modelos de ML y despliegue cloud-native. Incluye entrenamiento, tracking, contenedorizacion, despliegue y monitoreo.",
        project3Title: "Modelo de Machine Learning para Prediccion de Partidos",
        project3Desc: "Desarrollo de modelo predictivo aplicando analisis de datos, feature engineering y evaluacion de algoritmos de ML.",
        repository: "Repositorio",
        demo: "Demo",
        project4Title: "Desarrollo de Apps Moviles y Videojuego Multijugador",
        project4Desc: "Creacion de aplicaciones Android con Kotlin para uso diario y organizacion personal, y desarrollo de videojuego multijugador en Unity con integraciones de pago.",
        project5Title: "Proyectos Academicos",
        project5Desc: "Participacion en proyectos universitarios sobre juegos en C++, configuracion de servidores virtuales y desarrollo colaborativo de sistemas.",
        project6Title: "J.A.R — Joseph's Assistant RAG",
        project6Desc: "Un asistente conversacional entrenado con mis propios documentos. Pregúntale lo que quieras sobre mi experiencia, proyectos o habilidades: recupera el contexto real y te da respuestas en tu idioma.",
        skillsHeading: "Habilidades Tecnicas",
        softSkillsHeading: "Habilidades Complementarias",
        soft1: "Analisis y resolucion logica de requerimientos e incidencias tecnicas.",
        soft2: "Fundamentos de gestion y coordinacion de proyectos tecnologicos.",
        soft3: "Comunicacion efectiva y colaboracion en equipos multidisciplinarios.",
        soft4: "Aprendizaje continuo y alta adaptabilidad a nuevas tecnologias.",
        soft5: "Disciplina y atencion al detalle aplicadas al desarrollo y analisis de datos.",
        soft6: "Etica profesional y buenas practicas en el manejo de informacion.",
        educationHeading: "Formacion Academica",
        edu1Title: "Ingenieria en Sistemas Inteligentes - Universidad Ecotec, Ecuador",
        edu1Date: "2022 - Actualidad (8vo semestre)",
        edu2Title: "Bachillerato en Artes (Especializacion en Guitarra) - Conservatorio Antonio Neumane, Guayaquil",
        edu2Date: "2011 - 2022",
        edu3Title: "Bachillerato en Ciencias - Colegio Eloy Alfaro",
        edu3Date: "Graduado en 2021",
        certHeading: "Certificaciones",
        insigniasHeading: "Insignias",
        viewCredly: "Ver en Credly",
        languagesHeading: "Idiomas",
        lang1: "Espanol: Nativo",
        lang2: "Ingles: Intermedio",
        footerText: "(c) 2026 Joseph Dominguez. Todos los derechos reservados."
    },
    en: {
        navProfile: "Profile",
        navExperience: "Experience",
        navProjects: "Projects",
        navSkills: "Skills",
        navEducation: "Education",
        navCertifications: "Certifications",
        navBadges: "Badges",
        navLanguages: "Languages",
        heroEyebrow: "Cloud Infrastructure | ML | AI | Data",
        heroTitle: "Intelligent Systems Engineering student | Music graduate (Guitar major) | Data Analyst & ML Engineer",
        location: "Ecuador",
        profileViews: "Profile views",
        profileHeading: "Professional Profile",
        profileP1: "Intelligent Systems Engineering student at Ecotec University with a solid foundation in software development, cloud infrastructure, and systems design.",
        profileP2: "I have hands-on experience in mobile development, virtualization, networking, and technical troubleshooting. I am currently expanding my knowledge in Machine Learning, Cloud, and Artificial Intelligence, including predictive models for sports analytics.",
        profileP3: "I have strengthened my skills through internships at SENAE and professional music training, bringing discipline, creativity, attention to detail, and continuous learning.",
        experienceHeading: "Professional Experience",
        exp1Title: "IT Intern - Technical Support, SENAE (National Customs Service of Ecuador)",
        exp1Date: "June 2025 - August 2025",
        exp1Body: "Technical support in hardware and software, operating system and application setup, data recovery and migration, virtualization with VMware Workstation Pro, and ongoing staff assistance.",
        exp2Title: "IT Intern - Laboratory Department",
        exp2Date: "February 2019 - March 2019",
        exp2Body: "Support in basic internal database management, information entry and editing, and technical and operational laboratory tasks.",
        projectsHeading: "Projects",
        viewGithub: "View on GitHub",
        project1Title: "Cloud Resume Challenge (AWS)",
        project1Desc: "Serverless resume deployed on AWS with a static frontend, Lambda backend, and DynamoDB persistence. Includes GitHub Actions CI/CD and a real-time visit counter.",
        project2Title: "Server Failure Prediction",
        project2Desc: "End-to-end MLOps pipeline to anticipate failures using ML models and cloud-native deployment. Includes training, tracking, containerization, deployment, and monitoring.",
        project3Title: "Machine Learning Model for Match Prediction",
        project3Desc: "Predictive model development using data analysis, feature engineering, and ML algorithm evaluation.",
        repository: "Repository",
        demo: "Demo",
        project4Title: "Mobile Apps and Multiplayer Game Development",
        project4Desc: "Built Android applications with Kotlin for daily use and personal organization, and a multiplayer game in Unity with payment integrations.",
        project5Title: "Academic Projects",
        project5Desc: "Participation in university projects involving C++ games, virtual server configuration, and collaborative systems development.",
        project6Title: "J.A.R — Joseph's Assistant RAG",
        project6Desc: "A conversational assistant trained with my own documents. Ask it anything about my experience, projects, or skills: it retrieves real context and gives you answers in your language.",
        skillsHeading: "Technical Skills",
        softSkillsHeading: "Complementary Skills",
        soft1: "Logical analysis and resolution of technical requirements and incidents.",
        soft2: "Foundations of technology project management and coordination.",
        soft3: "Effective communication and collaboration in multidisciplinary teams.",
        soft4: "Continuous learning and strong adaptability to new technologies.",
        soft5: "Discipline and attention to detail applied to development and data analysis.",
        soft6: "Professional ethics and best practices in information handling.",
        educationHeading: "Education",
        edu1Title: "Intelligent Systems Engineering - Ecotec University, Ecuador",
        edu1Date: "2022 - Present (8th semester)",
        edu2Title: "Arts High School Diploma (Guitar major) - Antonio Neumane Conservatory, Guayaquil",
        edu2Date: "2011 - 2022",
        edu3Title: "Science High School Diploma - Eloy Alfaro School",
        edu3Date: "Graduated in 2021",
        certHeading: "Certifications",
        insigniasHeading: "Badges",
        viewCredly: "View on Credly",
        languagesHeading: "Languages",
        lang1: "Spanish: Native",
        lang2: "English: Intermediate",
        footerText: "(c) 2026 Joseph Dominguez. All rights reserved."
    }
};

const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const languageToggleText = document.getElementById("languageToggleText");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const navLinks = document.querySelectorAll('.topbar__links a');
const observedSections = document.querySelectorAll('main section[id]');
const topbar = document.querySelector('.topbar');

function updateThemeButton(theme, language) {
    if (!themeToggleIcon) {
        return;
    }

    themeToggleIcon.textContent = theme === "light" ? "\u2600" : "\u263E";
    themeToggle.setAttribute(
        "aria-label",
        language === "en"
            ? (theme === "light" ? "Switch to dark mode" : "Switch to light mode")
            : (theme === "light" ? "Cambiar a modo nocturno" : "Cambiar a modo dia")
    );
}

function applyLanguage(language) {
    const copy = translations[language] || translations.es;

    translatableNodes.forEach((node) => {
        const key = node.dataset.i18n;
        if (copy[key]) {
            node.textContent = copy[key];
        }
    });

    document.documentElement.lang = language;
    languageToggleText.textContent = language === "es" ? "ES | EN" : "EN | ES";
    updateThemeButton(document.body.dataset.theme || "dark", language);
    localStorage.setItem("language", language);
}

function applyTheme(theme) {
    const currentTheme = theme === "light" ? "light" : "dark";
    document.body.dataset.theme = currentTheme;
    updateThemeButton(currentTheme, document.documentElement.lang || "es");
    localStorage.setItem("theme", currentTheme);
}

async function getVisits() {
    const counter = document.getElementById("contador");

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        counter.textContent = data.visits ?? "N/A";
    } catch (error) {
        counter.textContent = "N/A";
        console.error("Error fetching visits:", error);
    }
}

languageToggle?.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
    applyLanguage(nextLanguage);
});

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
});

document.querySelectorAll(".proyecto-media img").forEach((image) => {
    image.addEventListener("click", () => {
        window.open(image.src, "_blank", "noopener");
    });
});

function updateActiveNavLink() {
    const topbarHeight = topbar?.offsetHeight || 0;
    const currentOffset = window.scrollY + topbarHeight + 24;
    let activeId = observedSections[0]?.id;

    observedSections.forEach((section) => {
        if (section.offsetTop <= currentOffset) {
            activeId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isCurrent);
    });
}

window.addEventListener("scroll", updateActiveNavLink, { passive: true });
window.addEventListener("load", updateActiveNavLink);
window.addEventListener("resize", updateActiveNavLink);

const savedLanguage = localStorage.getItem("language") || "es";
const savedTheme = localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);
applyLanguage(savedLanguage);
getVisits();
