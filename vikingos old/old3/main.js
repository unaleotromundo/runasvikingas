const RUNA_NAMES = [
  "FEHU", "URUZ", "THURISAZ", "ANSUZ", "RAIDHO", "KAUNAZ", "GEBO", "WUNJO",
  "HAGALAZ", "NAUDHIZ", "ISA", "JERA", "EIHWAZ", "PERDHRO", "ALGIZ", "SOWILO",
  "TIWAZ", "BERKANO", "EHWAZ", "MANNAZ", "LAGUZ", "INGWAZ", "DAGAZ", "OTHALAZ"
];
const TIRADA_KEYWORDS = [
  "CÓMO EXTRAER LAS RUNAS", "INTERPRETACIÓN DE UNA TIRADA", "DESCRIPCIÓN DE OTRA TIRADA", "DIFERENTES FORMAS DE TIRAR LAS RUNAS"
];
const RITUAL_KEYWORDS = [
  "RITUAL", "RITUALES"
];

function getRunaSVG(name) {
  // Puedes cambiar esto por SVGs artísticos de cada runa
  return `<svg class="runa-img" width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="24" fill="#efe4c3" stroke="#b3983d" stroke-width="3"/><text x="50%" y="58%" text-anchor="middle" font-size="1.9em" font-family="Montserrat" fill="#b3983d" font-weight="bold">${name[0]}</text></svg>`;
}

function detectarSecciones(raw) {
  const lines = raw.split(/\r?\n/);
  let secciones = [], buffer = [], current = { name: "INICIO", lines: [] };
  function pushCurrent() {
    if (buffer.join('\n').trim().length > 10)
      secciones.push({ name: current.name, content: buffer.join('\n').trim() });
    buffer = [];
  }
  for (let i = 0; i < lines.length; ++i) {
    const l = lines[i].trim();
    const runaMatch = RUNA_NAMES.find(r => l.toUpperCase().startsWith(r + ',') || l.toUpperCase().startsWith(r + ' '));
    const capituloMatch = l.match(/^(Dedicatorias|Pr[óo]logo|Indice|Primera parte|Segunda parte|Tercera parte|Recorrido por el primer octeto|Octeto \d|Pasaje por las œltimas ocho runas|Visi[óo]n del p[óo]rtico|Que las runas te murmuren el secreto)/i);
    const tiradaMatch = TIRADA_KEYWORDS.find(word => l.toUpperCase().includes(word));
    const ritualMatch = RITUAL_KEYWORDS.find(word => l.toUpperCase().includes(word));

    if (runaMatch) {
      pushCurrent(); current = { name: `RUNA_${runaMatch}`, lines: [] };
    } else if (tiradaMatch) {
      pushCurrent(); current = { name: "TIRADAS", lines: [] };
    } else if (ritualMatch && !current.name.startsWith("RITUAL")) {
      pushCurrent(); current = { name: "RITUALES", lines: [] };
    } else if (capituloMatch) {
      pushCurrent(); current = { name: capituloMatch[1].toUpperCase().replace(/ /g, '_'), lines: [] };
    }
    buffer.push(lines[i]); current.lines.push(lines[i]);
  }
  pushCurrent();
  return secciones.filter(s => s.content.length > 10);
}

function buildLibroMenu(secciones) {
  const menu = document.getElementById('secciones-menu');
  menu.innerHTML = secciones.map(sec => {
    if (sec.name === "INICIO") return '';
    let pretty = sec.name.replace(/^RUNA_/, '').replace(/_/g, ' ');
    if (sec.name === "TIRADAS") pretty = "Tiradas";
    if (sec.name === "RITUALES") pretty = "Rituales";
    return `<a href="#libro-${sec.name}">${pretty.charAt(0).toUpperCase() + pretty.slice(1).toLowerCase()}</a>`;
  }).join('');
}

function buildLibroContent(secciones) {
  const main = document.getElementById('libro-content');
  main.innerHTML = secciones.map(sec => {
    let pretty = sec.name.replace(/^RUNA_/, '').replace(/_/g, ' ');
    if (sec.name === "INICIO") return '';
    return `<section id="libro-${sec.name}">
      <h3>${pretty.charAt(0).toUpperCase() + pretty.slice(1).toLowerCase()}</h3>
      <div>${sec.content.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
    </section>`;
  }).join('');
}

function detectarRunasYTextos(txt) {
  // Divide el libro en bloques por runa
  const lines = txt.split(/\r?\n/);
  let runas = {};
  let current = null, buffer = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    const runa = RUNA_NAMES.find(rn => l.toUpperCase().startsWith(rn + ',') || l.toUpperCase().startsWith(rn + ' '));
    if (runa) {
      if (current) runas[current] = buffer.join('\n').trim();
      current = runa;
      buffer = [lines[i]];
    } else if (current) {
      buffer.push(lines[i]);
    }
  }
  if (current) runas[current] = buffer.join('\n').trim();
  return runas;
}

function mostrarGaleria(runas) {
  const galeria = document.getElementById('galeria-runas');
  galeria.innerHTML = RUNA_NAMES.map(name =>
    `<div class="runa-card">
      <div class="runa-titulo">${name}</div>
      ${getRunaSVG(name)}
      <div class="runa-content">${(runas[name]||"").replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</div>
    </div>`).join('');
}

function runaAzar() {
  return RUNA_NAMES[Math.floor(Math.random() * RUNA_NAMES.length)];
}

function mostrarTirada(runas) {
  const btn = document.getElementById('tirar-runa');
  const familia = document.getElementById('familia-vikinga');
  const runaGrande = document.getElementById('runa-grande');
  const respuesta = document.getElementById('respuesta-tirada');
  btn.onclick = () => {
    const pregunta = document.getElementById('pregunta').value;
    const runa = runaAzar();
    const svg = getRunaSVG(runa);
    // Animación de familia
    familia.classList.add('brillando');
    runaGrande.innerHTML = svg + '<br><b>' + runa + '</b>';
    runaGrande.style.display = 'block';
    setTimeout(() => familia.classList.remove('brillando'), 1800);
    // Muestra el texto literal del libro
    respuesta.innerHTML = `<blockquote>${(runas[runa]||"").replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')}</blockquote>`;
    if (pregunta) {
      respuesta.innerHTML = `<div style='font-weight:bold;font-size:1.1em;margin-bottom:8px;'>Pregunta: ${pregunta}</div>` + respuesta.innerHTML;
    }
    // Scroll suave a la respuesta
    respuesta.scrollIntoView({behavior:'smooth',block:'center'});
  };
}

fetch('document.txt')
.then(r=>r.text())
.then(txt=>{
  // Libro completo
  const secciones = detectarSecciones(txt);
  buildLibroMenu(secciones);
  buildLibroContent(secciones);
  // Galería y tirada
  const runas = detectarRunasYTextos(txt);
  mostrarGaleria(runas);
  mostrarTirada(runas);
});