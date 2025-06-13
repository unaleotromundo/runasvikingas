import os
import re
import json

DOCUMENT_PATH = "document.txt"
IMAGES_DIR = "images"
OUTPUT_JSON = "runes.json"

def normalize(s):
    repl = (("á","a"),("é","e"),("í","i"),("ó","o"),("ú","u"),("ñ","n"))
    s = s.lower()
    for a, b in repl:
        s = s.replace(a, b)
    return s

# Cargar texto completo
with open(DOCUMENT_PATH, encoding="utf-8") as f:
    text = f.read()

# Buscar imágenes
img_files = [f for f in os.listdir(IMAGES_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
img_map = {normalize(os.path.splitext(f)[0]): f for f in img_files}

# Regex para bloques de runas
runa_regex = re.compile(
    r"(^[A-ZÁÉÍÓÚÑÜ][a-záéíóúñü]+),?\s+la\s+([^\n]+)\n(.*?)(?=^[A-ZÁÉÍÓÚÑÜ][a-záéíóúñü]+,|\Z)",
    re.DOTALL | re.MULTILINE
)

runes = []

for match in runa_regex.finditer(text):
    nombre = match.group(1).strip()
    subnombre = match.group(2).strip()
    contenido = match.group(3).strip()

    alt_names = []
    letra = ""
    alt_match = re.search(r"Tambi[ée]n llamada ([^\.]+)\. Corresponde a nuestra letra ([A-Z])\.", contenido)
    if alt_match:
        alt_names = [n.strip() for n in re.split(r",| y ", alt_match.group(1))]
        letra = alt_match.group(2).strip()
    
    significado = ""
    detalle = ""
    sig_match = re.search(r"^(.*?)\.\s*(.*?)(?=Cuando .*?invertida|Cuando .*?sale invertida|Postura corporal|$)", contenido, re.DOTALL)
    if sig_match:
        significado = sig_match.group(1).replace('\n',' ').strip()
        detalle = sig_match.group(2).replace('\n',' ').strip()
    invertida = ""
    invertida_match = re.search(r"(Cuando .{0,40}invertida.*?)(?=Postura corporal|$)", contenido, re.DOTALL)
    if invertida_match:
        invertida = invertida_match.group(1).strip()
    postura = ""
    postura_match = re.search(r"Postura corporal\n(.+?)(?=\n[A-ZÁÉÍÓÚÑÜ]|$)", contenido, re.DOTALL)
    if postura_match:
        postura = postura_match.group(1).strip().replace('\n', ' ')
    ritual = ""
    ritual_match = re.search(r"ritual.*?\n(.+?)(?=\n[A-ZÁÉÍÓÚÑÜ]|$)", contenido, re.IGNORECASE | re.DOTALL)
    if ritual_match:
        ritual = ritual_match.group(1).strip().replace('\n', ' ')
    imgkey = normalize(nombre)
    img = img_map.get(imgkey, "")

    runes.append({
        "nombre": nombre,
        "nombre_alternativo": alt_names,
        "letra": letra,
        "subnombre": subnombre,
        "imagen": img,
        "significado": significado,
        "detalle": detalle,
        "invertida": invertida,
        "postura_corporal": postura,
        "ritual": ritual
    })

with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(runes, f, indent=2, ensure_ascii=False)

print(f"Extraídas {len(runes)} runas y guardadas en {OUTPUT_JSON}")