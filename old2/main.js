// Nombres de las 24 runas para detección automática en español y variantes
const RUNA_NAMES = [
  "FEHU", "URUZ", "THURISAZ", "ANSUZ", "RAIDHO", "KAUNAZ", "GEBO", "WUNJO",
  "HAGALAZ", "NAUDHIZ", "ISA", "JERA", "EIHWAZ", "PERDHRO", "ALGIZ", "SOWILO",
  "TIWAZ", "BERKANO", "EHWAZ", "MANNAZ", "LAGUZ", "INGWAZ", "DAGAZ", "OTHALAZ"
];

// Palabras clave para detectar la sección de tiradas y rituales
const TIRADA_KEYWORDS = [
  "CÓMO EXTRAER LAS RUNAS", "INTERPRETACIÓN DE UNA TIRADA", "DESCRIPCIÓN DE OTRA TIRADA", "DIFERENTES FORMAS DE TIRAR LAS RUNAS"
];
const RITUAL_KEYWORDS = [
  "RITUAL", "RITUALES"
];

// Detección automática, navegación y renderizado
function detectarSecciones(raw) {
  // 1. Analiza por líneas, busca runas y secciones mayores
  const lines = raw.split(/\r?\n/);
  let secciones = [];
  let buffer = [];
  let current = { name: "INICIO", lines: [] };

  function pushCurrent() {
    if (buffer.join('\n').trim().length > 10) {
      secciones.push({ name: current.name, content: buffer.join('\n').trim() });
      buffer = [];
    }
  }

  // Busca títulos de runa y capítulos mayores
  for (let i = 0; i < lines.length; ++i) {
    const l = lines[i].trim();

    // Detecta runas
    const runaMatch = RUNA_NAMES.find(r => l.toUpperCase().startsWith(r + ',') || l.toUpperCase().startsWith(r + ' '));
    // Detecta capítulos/secciones importantes
    const capituloMatch = l.match(/^(Dedicatorias|Pr[óo]logo|Indice|Primera parte|Segunda parte|Tercera parte|Recorrido por el primer octeto|Octeto \d|Pasaje por las œltimas ocho runas|Visi[óo]n del p[óo]rtico|Que las runas te murmuren el secreto)/i);

    // Detecta tiradas y rituales
    const tiradaMatch = TIRADA_KEYWORDS.find(word => l.toUpperCase().includes(word));
    const ritualMatch = RITUAL_KEYWORDS.find(word => l.toUpperCase().includes(word));

    if (runaMatch) {
      pushCurrent();
      current = { name: `RUNA_${runaMatch}`, lines: [] };
    } else if (tiradaMatch) {
      pushCurrent();
      current = { name: "TIRADAS", lines: [] };
    } else if (ritualMatch && !current.name.startsWith("RITUAL")) {
      pushCurrent();
      current = { name: "RITUALES", lines: [] };
    } else if (capituloMatch) {
      pushCurrent();
      current = { name: capituloMatch[1].toUpperCase().replace(/ /g, '_'), lines: [] };
    }
    buffer.push(lines[i]);
    current.lines.push(lines[i]);
  }
  pushCurrent();
  // Filtra vacíos
  return secciones.filter(s => s.content.length > 10);
}

function buildNav(secciones) {
  const nav = document.getElementById('main-nav');
  nav.innerHTML = secciones.map(sec => {
    // No mostrar INICIO en navegación
    if (sec.name === "INICIO") return '';
    let pretty = sec.name.replace(/^RUNA_/, '').replace(/_/g, ' ');
    if (sec.name === "TIRADAS") pretty = "Tiradas";
    if (sec.name === "RITUALES") pretty = "Rituales";
    return `<a class="nav-btn" href="#sec_${sec.name}">${pretty.charAt(0).toUpperCase() + pretty.slice(1).toLowerCase()}</a>`;
  }).join('');
}

function buildMainContent(secciones) {
  const main = document.getElementById('main-content');

  // Galería de runas
  const galeriaRunas = secciones.filter(sec => sec.name.startsWith("RUNA_"));
  let galeriaHtml = '';
  if (galeriaRunas.length) {
    galeriaHtml = `
      <section class="seccion" id="sec_galeria">
        <h2>Galería de Runas</h2>
        <div class="galeria-runas">
          ${galeriaRunas
            .map(
              sec => `
            <div class="runa-card" id="sec_${sec.name}">
              <div class="runa-titulo">${sec.name.replace(/^RUNA_/, '').charAt(0) + sec.name.replace(/^RUNA_/, '').slice(1).toLowerCase()}</div>
              <div class="runa-content">${sec.content.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `;
  }

  // Otras secciones
  const otrasSecciones = secciones
    .filter(sec => !sec.name.startsWith("RUNA_"))
    .map(sec => {
      if (sec.name === "TIRADAS") {
        return `
          <section class="seccion tiradas-block" id="sec_${sec.name}">
            <h2>Tiradas</h2>
            <div>${sec.content.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
          </section>
        `;
      } else if (sec.name === "RITUALES") {
        return `
          <section class="seccion tiradas-block" id="sec_${sec.name}">
            <h2>Rituales</h2>
            <div>${sec.content.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
          </section>
        `;
      } else {
        return `
          <section class="seccion" id="sec_${sec.name}">
            <h2>${sec.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h2>
            <div>${sec.content.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
          </section>
        `;
      }
    })
    .join('');

  // Orden: portada, dedicatorias, prólogo, teoría, galería, tiradas, rituales, etc.
  main.innerHTML = otrasSecciones + galeriaHtml;
}

function autoLibro() {
  fetch('document.txt')
    .then(r => r.text())
    .then(texto => {
      const secciones = detectarSecciones(texto);
      buildNav(secciones.concat([{ name: "GALERIA", content: "" }])); // Agrega galería a nav
      buildMainContent(secciones);
    });
}

document.addEventListener('DOMContentLoaded', autoLibro);