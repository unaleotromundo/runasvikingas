// Suponiendo que el array se llama runas y está declarado en el scope

function renderRuna(runa) {
  // Convierte el array de nombres alternativos en un string
  const alternativos = runa.nombre_alternativo && runa.nombre_alternativo.length
    ? runa.nombre_alternativo.join(', ')
    : '—';
  // Ruta de la imagen de la postura
  const posturaImg = `images/posturas/${runa.imagen}`;

  return `
  <div class="capitulo" id="${runa.nombre.toLowerCase()}">
    <h2>${runa.nombre} <span style="color:#b3983d;font-size:0.7em;">[${runa.letra}]</span></h2>
    <img src="images/${runa.imagen}" alt="${runa.nombre}" style="max-width:120px;">
    <h3>${runa.subnombre.charAt(0).toUpperCase() + runa.subnombre.slice(1)}</h3>
    <p><strong>Significado:</strong> ${runa.significado}</p>
    <p><strong>Detalle:</strong> ${runa.detalle}</p>
    ${runa.invertida ? `<p><strong>Invertida:</strong> ${runa.invertida}</p>` : ''}
    <div style="display:flex;align-items:center;gap:16px;">
      <div>
        <strong>Postura corporal:</strong>
        <span>${runa.postura_corporal}</span>
      </div>
      <img src="${posturaImg}" alt="Vikinga haciendo la postura de ${runa.nombre}" style="max-width:100px;border-radius:10px;">
    </div>
    <p><strong>Nombres alternativos:</strong> ${alternativos}</p>
    ${runa.ritual ? `<p><strong>Ritual:</strong> ${runa.ritual}</p>` : ''}
  </div>
  `;
}

// Ejemplo para renderizar todas las runas en un <section id="libro"></section> del HTML:
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('libro');
  contenedor.innerHTML = runas.map(renderRuna).join('\n');
});