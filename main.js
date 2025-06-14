function getRunaImgTag(runa, className = '') {
  const src = "images/" + (runa.imagen || (runa.nombre.toLowerCase() + '.png'));
  return `<img src="${src}" alt="Runa ${runa.nombre}" class="${className}"
    onerror="this.onerror=null;this.style.display='none';this.insertAdjacentHTML('afterend',window.backupRunaSVG('${runa.nombre}','${className}'));">`;
}
window.backupRunaSVG = (nombre, className='') =>
  `<svg class="${className}" width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="24" fill="#efe4c3" stroke="#b3983d" stroke-width="3"/><text x="50%" y="58%" text-anchor="middle" font-size="1.9em" font-family="Montserrat" fill="#b3983d" font-weight="bold">${nombre[0].toUpperCase()}</text></svg>`;

function showSection(id) {
  document.querySelectorAll('.main-section').forEach(s=>s.style.display='none');
  document.getElementById(id).style.display = '';
  document.querySelectorAll('#main-nav a').forEach(a=>a.classList.remove('active'));
  document.querySelector(`#main-nav a[data-section="${id}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Navegación
  document.querySelectorAll('#main-nav a').forEach(a => {
    a.onclick = e => {
      e.preventDefault();
      showSection(a.dataset.section);
      window.scrollTo({top:0});
    };
  });

  // Tirada
  document.getElementById('tirar-runa').onclick = () => {
    const pregunta = document.getElementById('pregunta').value;
    const runa = runas[Math.floor(Math.random() * runas.length)];
    let html = getRunaImgTag(runa, 'tirada-img');
    html += `<div style="font-size:1.2em;font-weight:bold;">${runa.nombre} <span style="color:#b3983d">${runa.subnombre||''}</span></div>`;
    html += `<div style="margin:8px 0 10px 0;">${runa.significado}</div>`;
    html += `<div style="font-size:0.98em;">${runa.detalle||''}</div>`;
    if (runa.invertida && runa.invertida.length > 5) html += `<div style="margin-top:10px;"><b>Invertida:</b> ${runa.invertida}</div>`;
    if (runa.ritual && runa.ritual.length > 5) html += `<div style="margin-top:10px;"><b>Ritual:</b> ${runa.ritual}</div>`;
    if (runa.postura_corporal && runa.postura_corporal.length > 5) html += `<div style="margin-top:10px;"><b>Postura corporal:</b> ${runa.postura_corporal}</div>`;
    if (pregunta) html = `<div style='font-weight:bold;font-size:1.1em;margin-bottom:8px;'>Pregunta: ${pregunta}</div>` + html;
    document.getElementById('resultado-tirada').innerHTML = html;
  };

  // Galería - TODO el contenido
  document.getElementById('galeria-runas').innerHTML = runas.map(r =>
    `<div class="runa-card">
      ${getRunaImgTag(r)}
      <div class="runa-nombre">${r.nombre}</div>
      <div class="runa-subnombre">${r.subnombre || ''}</div>
      <div class="runa-content"><b>Letra:</b> ${r.letra || ''}</div>
      <div class="runa-content"><b>Significado:</b> ${r.significado || ''}</div>
      <div class="runa-content"><b>Detalle:</b> ${r.detalle || ''}</div>
      ${r.invertida && r.invertida.length > 3 ? `<div class="runa-content"><b>Invertida:</b> ${r.invertida}</div>` : ""}
      ${r.ritual && r.ritual.length > 3 ? `<div class="runa-content"><b>Ritual:</b> ${r.ritual}</div>` : ""}
      ${r.postura_corporal && r.postura_corporal.length > 3 ? `<div class="runa-content"><b>Postura corporal:</b> ${r.postura_corporal}</div>` : ""}
    </div>`
  ).join('');

  // Libro: muestra todas las runas con todo su contenido
  document.getElementById('libro-runas').innerHTML = runas.map(r =>
    `<div class="libro-runa">
      <h3>${r.nombre}${r.subnombre ? ' – <span style="color:#b3983d">'+r.subnombre+'</span>' : ''}</h3>
      ${getRunaImgTag(r)}
      <div><b>Letra:</b> ${r.letra || ''}</div>
      <div><b>Significado:</b> ${r.significado}</div>
      <div><b>Detalle:</b> ${r.detalle||''}</div>
      ${r.invertida && r.invertida.length>5 ? `<div><b>Invertida:</b> ${r.invertida}</div>` : ''}
      ${r.ritual && r.ritual.length>5 ? `<div><b>Ritual:</b> ${r.ritual}</div>` : ''}
      ${r.postura_corporal && r.postura_corporal.length>5 ? `<div><b>Postura corporal:</b> ${r.postura_corporal}</div>` : ''}
    </div>`
  ).join('');
});