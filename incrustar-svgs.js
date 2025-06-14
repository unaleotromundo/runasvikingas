const RUNAS = [
  {
    key: "fehu",
    es: { nombre: "Fehu", significado: "Riqueza, inicio, fertilidad", desc: "Representa el ganado, la riqueza, los inicios y la energía creadora.", invertido: "Pérdida material, estancamiento, codicia." },
    en: { nombre: "Fehu", significado: "Wealth, beginning, fertility", desc: "Represents cattle, wealth, beginnings, and creative energy.", invertido: "Material loss, stagnation, greed." },
    pt: { nombre: "Fehu", significado: "Riqueza, início, fertilidade", desc: "Representa o gado, a riqueza e a energia criadora.", invertido: "Perda material, estagnação, ganância." },
    fr: { nombre: "Fehu", significado: "Richesse, début, fertilité", desc: "Représente le bétail, la richesse, les débuts et l'énergie créatrice.", invertido: "Perte matérielle, stagnation, avidité." },
    de: { nombre: "Fehu", significado: "Reichtum, Anfang, Fruchtbarkeit", desc: "Steht für Vieh, Reichtum, Neubeginn und schöpferische Energie.", invertido: "Materieller Verlust, Stillstand, Gier." }
  },
  {
    key: "uruz",
    es: { nombre: "Uruz", significado: "Fuerza, vitalidad, salud", desc: "Simboliza la fuerza bruta, la vitalidad y la energía de la vida.", invertido: "Debilidad, inercia, oportunidad perdida." },
    en: { nombre: "Uruz", significado: "Strength, vitality, health", desc: "Symbolizes raw strength, vitality, and life force.", invertido: "Weakness, inertia, missed opportunity." },
    pt: { nombre: "Uruz", significado: "Força, vitalidade, saúde", desc: "Simboliza a força bruta e a energia vital.", invertido: "Fraqueza, inércia, oportunidade perdida." },
    fr: { nombre: "Uruz", significado: "Force, vitalité, santé", desc: "Symbole de force brute, vitalité et énergie de vie.", invertido: "Faiblesse, inertie, occasion manquée." },
    de: { nombre: "Uruz", significado: "Stärke, Vitalität, Gesundheit", desc: "Symbolisiert rohe Kraft, Vitalität und Lebensenergie.", invertido: "Schwäche, Trägheit, verpasste Chance." }
  },
  {
    key: "thurisaz",
    es: { nombre: "Thurisaz", significado: "Protección, límite, desafío", desc: "Es la defensa ante peligros, los desafíos y los cambios bruscos.", invertido: "Vulnerabilidad, peligro, impulsividad." },
    en: { nombre: "Thurisaz", significado: "Protection, boundary, challenge", desc: "Defense against dangers, challenges, and sudden changes.", invertido: "Vulnerability, danger, impulsiveness." },
    pt: { nombre: "Thurisaz", significado: "Proteção, limite, desafio", desc: "Defesa contra perigos, desafios e mudanças bruscas.", invertido: "Vulnerabilidade, perigo, impulsividade." },
    fr: { nombre: "Thurisaz", significado: "Protection, limite, défi", desc: "Défense contre les dangers, défis et changements brusques.", invertido: "Vulnérabilité, danger, impulsivité." },
    de: { nombre: "Thurisaz", significado: "Schutz, Grenze, Herausforderung", desc: "Verteidigung gegen Gefahren, Herausforderungen und plötzliche Veränderungen.", invertido: "Verletzlichkeit, Gefahr, Impulsivität." }
  },
  {
    key: "ansuz",
    es: { nombre: "Ansuz", significado: "Comunicación, inspiración, sabiduría", desc: "La runa de la palabra, el mensaje y la conciencia divina.", invertido: "Malentendidos, engaños, falsa información." },
    en: { nombre: "Ansuz", significado: "Communication, inspiration, wisdom", desc: "Rune of speech, message, and divine consciousness.", invertido: "Misunderstandings, deception, false information." },
    pt: { nombre: "Ansuz", significado: "Comunicação, inspiração, sabedoria", desc: "Runa da palavra, mensagem e consciência divina.", invertido: "Mal-entendidos, enganos, falsa informação." },
    fr: { nombre: "Ansuz", significado: "Communication, inspiration, sagesse", desc: "Rune de la parole, du message et de la conscience divine.", invertido: "Malentendus, tromperie, fausse information." },
    de: { nombre: "Ansuz", significado: "Kommunikation, Inspiration, Weisheit", desc: "Rune des Wortes, der Botschaft und des göttlichen Bewusstseins.", invertido: "Missverständnisse, Täuschung, Falschinformation." }
  },
  {
    key: "raidho",
    es: { nombre: "Raidho", significado: "Viaje, movimiento, ritmo", desc: "Representa el viaje físico o espiritual, el ciclo y el movimiento correcto.", invertido: "Desorientación, retraso, desvío." },
    en: { nombre: "Raidho", significado: "Journey, movement, rhythm", desc: "Represents physical or spiritual journey, cycle, and right movement.", invertido: "Disorientation, delay, detour." },
    pt: { nombre: "Raidho", significado: "Viagem, movimento, ritmo", desc: "Representa a viagem física ou espiritual, o ciclo e o movimento correto.", invertido: "Desorientação, atraso, desvio." },
    fr: { nombre: "Raidho", significado: "Voyage, mouvement, rythme", desc: "Représente le voyage physique ou spirituel, le cycle, le bon mouvement.", invertido: "Désorientation, retard, détour." },
    de: { nombre: "Raidho", significado: "Reise, Bewegung, Rhythmus", desc: "Repräsentiert die physische oder spirituelle Reise, den Zyklus und die richtige Bewegung.", invertido: "Desorientierung, Verzögerung, Umweg." }
  },
  {
    key: "kaunaz",
    es: { nombre: "Kaunaz", significado: "Antorcha, revelación, creatividad", desc: "Ilumina, revela lo oculto y da claridad e inspiración.", invertido: "Oscuridad, confusión, bloqueo creativo." },
    en: { nombre: "Kaunaz", significado: "Torch, revelation, creativity", desc: "Illumination, reveals the hidden, brings clarity and inspiration.", invertido: "Darkness, confusion, creative block." },
    pt: { nombre: "Kaunaz", significado: "Tocha, revelação, criatividade", desc: "Ilumina, revela o oculto e traz inspiração.", invertido: "Escuridão, confusão, bloqueio criativo." },
    fr: { nombre: "Kaunaz", significado: "Torche, révélation, créativité", desc: "Illumine, révèle l’occulte et apporte clarté et inspiration.", invertido: "Obscurité, confusion, blocage créatif." },
    de: { nombre: "Kaunaz", significado: "Fackel, Offenbarung, Kreativität", desc: "Erleuchtet, enthüllt das Verborgene, bringt Klarheit und Inspiration.", invertido: "Dunkelheit, Verwirrung, kreative Blockade." }
  },
  {
    key: "gebo",
    es: { nombre: "Gebo", significado: "Regalo, intercambio, amor", desc: "Es la generosidad, la reciprocidad y las relaciones equilibradas.", invertido: "Desequilibrio, dependencia, sacrificio obligado." },
    en: { nombre: "Gebo", significado: "Gift, exchange, love", desc: "Generosity, reciprocity, and balanced relationships.", invertido: "Imbalance, dependency, forced sacrifice." },
    pt: { nombre: "Gebo", significado: "Presente, troca, amor", desc: "Generosidade, reciprocidade, relações equilibradas.", invertido: "Desequilíbrio, dependência, sacrifício forçado." },
    fr: { nombre: "Gebo", significado: "Cadeau, échange, amour", desc: "Générosité, réciprocité, relations équilibrées.", invertido: "Déséquilibre, dépendance, sacrifice forcé." },
    de: { nombre: "Gebo", significado: "Geschenk, Austausch, Liebe", desc: "Großzügigkeit, Gegenseitigkeit, ausgewogene Beziehungen.", invertido: "Ungleichgewicht, Abhängigkeit, erzwungenes Opfer." }
  },
  {
    key: "wunjo",
    es: { nombre: "Wunjo", significado: "Alegría, armonía, bienestar", desc: "La felicidad, el gozo interior y la realización.", invertido: "Tristeza, conflicto, insatisfacción." },
    en: { nombre: "Wunjo", significado: "Joy, harmony, well-being", desc: "Happiness, inner joy, and fulfillment.", invertido: "Sadness, conflict, dissatisfaction." },
    pt: { nombre: "Wunjo", significado: "Alegria, harmonia, bem-estar", desc: "Felicidade, alegria interior e realização.", invertido: "Tristeza, conflito, insatisfação." },
    fr: { nombre: "Wunjo", significado: "Joie, harmonie, bien-être", desc: "Le bonheur, la joie intérieure et l’accomplissement.", invertido: "Tristesse, conflit, insatisfaction." },
    de: { nombre: "Wunjo", significado: "Freude, Harmonie, Wohlbefinden", desc: "Glück, innere Freude, Erfüllung.", invertido: "Traurigkeit, Konflikt, Unzufriedenheit." }
  },
  {
    key: "hagalaz",
    es: { nombre: "Hagalaz", significado: "Disrupción, transformación, cambio súbito", desc: "La fuerza natural que transforma y cambia todo a su paso.", invertido: "Resistencia al cambio, caos prolongado." },
    en: { nombre: "Hagalaz", significado: "Disruption, transformation, sudden change", desc: "The natural force that transforms and changes everything in its path.", invertido: "Resistance to change, prolonged chaos." },
    pt: { nombre: "Hagalaz", significado: "Disrupção, transformação, mudança súbita", desc: "A força natural que transforma e muda tudo ao seu redor.", invertido: "Resistência à mudança, caos prolongado." },
    fr: { nombre: "Hagalaz", significado: "Perturbation, transformation, changement soudain", desc: "La force naturelle qui transforme et change tout sur son passage.", invertido: "Résistance au changement, chaos prolongé." },
    de: { nombre: "Hagalaz", significado: "Störung, Transformation, plötzliche Veränderung", desc: "Die Naturkraft, die alles verändert.", invertido: "Widerstand gegen Veränderung, anhaltendes Chaos." }
  },
  {
    key: "naudhiz",
    es: { nombre: "Naudhiz", significado: "Necesidad, restricción, resistencia", desc: "Las dificultades, la superación y el aprendizaje a través de la necesidad.", invertido: "Auto-imposición, sufrimiento innecesario." },
    en: { nombre: "Naudhiz", significado: "Necessity, restriction, resistance", desc: "Difficulties, overcoming and learning through need.", invertido: "Self-imposed suffering, unnecessary hardship." },
    pt: { nombre: "Naudhiz", significado: "Necessidade, restrição, resistência", desc: "Dificuldades, superação e aprendizado pela necessidade.", invertido: "Sofrimento autoimposto, dificuldades desnecessárias." },
    fr: { nombre: "Naudhiz", significado: "Nécessité, restriction, résistance", desc: "Difficultés, dépassement, apprentissage à travers le besoin.", invertido: "Souffrance auto-imposée, difficulté inutile." },
    de: { nombre: "Naudhiz", significado: "Notwendigkeit, Einschränkung, Widerstand", desc: "Schwierigkeiten, Überwindung, Lernen durch Notwendigkeit.", invertido: "Selbst auferlegtes Leiden, unnötige Mühsal." }
  },
  {
    key: "isa",
    es: { nombre: "Isa", significado: "Hielo, quietud, detención", desc: "La inmovilidad, la paciencia y la concentración.", invertido: "Estancamiento, soledad, falta de avance." },
    en: { nombre: "Isa", significado: "Ice, stillness, stop", desc: "Immobility, patience, and concentration.", invertido: "Stagnation, loneliness, lack of progress." },
    pt: { nombre: "Isa", significado: "Gelo, quietude, parada", desc: "Imobilidade, paciência e concentração.", invertido: "Estagnação, solidão, falta de progresso." },
    fr: { nombre: "Isa", significado: "Glace, immobilité, arrêt", desc: "Immobilité, patience et concentration.", invertido: "Stagnation, solitude, absence de progrès." },
    de: { nombre: "Isa", significado: "Eis, Stille, Stillstand", desc: "Unbeweglichkeit, Geduld, Konzentration.", invertido: "Stillstand, Einsamkeit, fehlender Fortschritt." }
  },
  {
    key: "jera",
    es: { nombre: "Jera", significado: "Cosecha, ciclo, recompensa", desc: "El tiempo de la retribución, la cosecha y el ciclo anual.", invertido: "Retraso en la recompensa, ciclos estancados." },
    en: { nombre: "Jera", significado: "Harvest, cycle, reward", desc: "Time of retribution, harvest, and the annual cycle.", invertido: "Delayed reward, stagnant cycles." },
    pt: { nombre: "Jera", significado: "Colheita, ciclo, recompensa", desc: "Tempo de retribuição, colheita e o ciclo anual.", invertido: "Recompensa atrasada, ciclos estagnados." },
    fr: { nombre: "Jera", significado: "Récolte, cycle, récompense", desc: "Temps de rétribution, récolte et cycle annuel.", invertido: "Récompense retardée, cycles stagnants." },
    de: { nombre: "Jera", significado: "Ernte, Zyklus, Belohnung", desc: "Zeit der Vergeltung, Ernte, Jahreszyklus.", invertido: "Verzögerte Belohnung, stagnierende Zyklen." }
  },
  {
    key: "eihwaz",
    es: { nombre: "Eihwaz", significado: "Defensa, tránsito, puente", desc: "El eje, la columna vertebral y la transición.", invertido: "Bloqueo, estancamiento, incapacidad de avanzar." },
    en: { nombre: "Eihwaz", significado: "Defense, transition, bridge", desc: "Axis, backbone, and transition.", invertido: "Blockage, stagnation, inability to move forward." },
    pt: { nombre: "Eihwaz", significado: "Defesa, transição, ponte", desc: "Eixo, coluna vertebral e transição.", invertido: "Bloqueio, estagnação, incapacidade de avançar." },
    fr: { nombre: "Eihwaz", significado: "Défense, transition, pont", desc: "Axe, colonne vertébrale et transition.", invertido: "Blocage, stagnation, incapacité d'avancer." },
    de: { nombre: "Eihwaz", significado: "Verteidigung, Übergang, Brücke", desc: "Achse, Rückgrat, Übergang.", invertido: "Blockade, Stillstand, Unfähigkeit voranzukommen." }
  },
  {
    key: "perdhro",
    es: { nombre: "Perdhro", significado: "Destino, misterio, lo oculto", desc: "El secreto, el azar y la iniciación.", invertido: "Misterio sin resolver, azar negativo, cierre." },
    en: { nombre: "Perdhro", significado: "Destiny, mystery, the hidden", desc: "Secrecy, chance, and initiation.", invertido: "Unresolved mystery, bad luck, closure." },
    pt: { nombre: "Perdhro", significado: "Destino, mistério, oculto", desc: "O segredo, o acaso e a iniciação.", invertido: "Mistério não resolvido, azar, encerramento." },
    fr: { nombre: "Perdhro", significado: "Destin, mystère, caché", desc: "Le secret, le hasard et l'initiation.", invertido: "Mystère non résolu, malchance, fermeture." },
    de: { nombre: "Perdhro", significado: "Schicksal, Geheimnis, das Verborgene", desc: "Geheimnis, Zufall, Initiation.", invertido: "Ungelöstes Geheimnis, Pech, Abschluss." }
  },
  {
    key: "algiz",
    es: { nombre: "Algiz", significado: "Protección, conexión divina, escudo", desc: "La defensa espiritual, la guía y la conexión con lo divino.", invertido: "Falta de protección, aislamiento, peligro espiritual." },
    en: { nombre: "Algiz", significado: "Protection, divine connection, shield", desc: "Spiritual defense, guidance and divine connection.", invertido: "Lack of protection, isolation, spiritual danger." },
    pt: { nombre: "Algiz", significado: "Proteção, conexão divina, escudo", desc: "Defesa espiritual, orientação e conexão divina.", invertido: "Falta de proteção, isolamento, perigo espiritual." },
    fr: { nombre: "Algiz", significado: "Protection, connexion divine, bouclier", desc: "Défense spirituelle, guidance et connexion divine.", invertido: "Manque de protection, isolement, danger spirituel." },
    de: { nombre: "Algiz", significado: "Schutz, göttliche Verbindung, Schild", desc: "Spiritueller Schutz, Führung, göttliche Verbindung.", invertido: "Mangel an Schutz, Isolation, spirituelle Gefahr." }
  },
  {
    key: "sowilo",
    es: { nombre: "Sowilo", significado: "Sol, éxito, realización", desc: "La luz, la victoria, el logro y el sentido.", invertido: "Fracaso, oscuridad, falta de claridad." },
    en: { nombre: "Sowilo", significado: "Sun, success, achievement", desc: "Light, victory, achievement and sense.", invertido: "Failure, darkness, lack of clarity." },
    pt: { nombre: "Sowilo", significado: "Sol, sucesso, realização", desc: "Luz, vitória, realização e sentido.", invertido: "Fracasso, escuridão, falta de clareza." },
    fr: { nombre: "Sowilo", significado: "Soleil, succès, réalisation", desc: "Lumière, victoire, accomplissement et sens.", invertido: "Échec, obscurité, absence de clarté." },
    de: { nombre: "Sowilo", significado: "Sonne, Erfolg, Erfüllung", desc: "Licht, Sieg, Erfüllung, Sinn.", invertido: "Misserfolg, Dunkelheit, Unklarheit." }
  },
  {
    key: "tiwaz",
    es: { nombre: "Tiwaz", significado: "Justicia, honor, coraje", desc: "El sacrificio, la rectitud y la valentía.", invertido: "Injusticia, cobardía, derrota." },
    en: { nombre: "Tiwaz", significado: "Justice, honor, courage", desc: "Sacrifice, righteousness and bravery.", invertido: "Injustice, cowardice, defeat." },
    pt: { nombre: "Tiwaz", significado: "Justiça, honra, coragem", desc: "Sacrifício, retidão e valentia.", invertido: "Injustiça, covardia, derrota." },
    fr: { nombre: "Tiwaz", significado: "Justice, honneur, courage", desc: "Sacrifice, droiture et bravoure.", invertido: "Injustice, lâcheté, défaite." },
    de: { nombre: "Tiwaz", significado: "Gerechtigkeit, Ehre, Mut", desc: "Opfer, Rechtschaffenheit, Mut.", invertido: "Ungerechtigkeit, Feigheit, Niederlage." }
  },
  {
    key: "berkano",
    es: { nombre: "Berkano", significado: "Nacimiento, madre, protección", desc: "El crecimiento, el nacimiento y la nutrición.", invertido: "Retraimiento, estancamiento, problemas familiares." },
    en: { nombre: "Berkano", significado: "Birth, mother, protection", desc: "Growth, birth and nurturing.", invertido: "Withdrawal, stagnation, family problems." },
    pt: { nombre: "Berkano", significado: "Nascimento, mãe, proteção", desc: "Crescimento, nascimento e nutrição.", invertido: "Retraimento, estagnação, problemas familiares." },
    fr: { nombre: "Berkano", significado: "Naissance, mère, protection", desc: "Croissance, naissance, nutrition.", invertido: "Retrait, stagnation, problèmes familiaux." },
    de: { nombre: "Berkano", significado: "Geburt, Mutter, Schutz", desc: "Wachstum, Geburt, Fürsorge.", invertido: "Rückzug, Stillstand, familiäre Probleme." }
  },
  {
    key: "ehwo",
    es: { nombre: "Ehwo", significado: "Caballo, movimiento, confianza", desc: "El viaje, la asociación y la colaboración.", invertido: "Falta de confianza, desunión, obstáculos." },
    en: { nombre: "Ehwo", significado: "Horse, movement, trust", desc: "Journey, partnership and collaboration.", invertido: "Lack of trust, disunity, obstacles." },
    pt: { nombre: "Ehwo", significado: "Cavalo, movimento, confiança", desc: "Viagem, parceria e colaboração.", invertido: "Falta de confiança, desunião, obstáculos." },
    fr: { nombre: "Ehwo", significado: "Cheval, mouvement, confiance", desc: "Voyage, partenariat et collaboration.", invertido: "Manque de confiance, désunion, obstacles." },
    de: { nombre: "Ehwo", significado: "Pferd, Bewegung, Vertrauen", desc: "Reise, Partnerschaft, Zusammenarbeit.", invertido: "Vertrauensmangel, Uneinigkeit, Hindernisse." }
  },
  {
    key: "mannaz",
    es: { nombre: "Mannaz", significado: "Humanidad, yo, sociedad", desc: "El ser humano, la individualidad y la cooperación.", invertido: "Aislamiento, egoísmo, falta de apoyo." },
    en: { nombre: "Mannaz", significado: "Humanity, self, society", desc: "Human being, individuality and cooperation.", invertido: "Isolation, selfishness, lack of support." },
    pt: { nombre: "Mannaz", significado: "Humanidade, eu, sociedade", desc: "O ser humano, individualidade e cooperação.", invertido: "Isolamento, egoísmo, falta de apoio." },
    fr: { nombre: "Mannaz", significado: "Humanité, moi, société", desc: "L'être humain, individualité, coopération.", invertido: "Isolement, égoïsme, absence de soutien." },
    de: { nombre: "Mannaz", significado: "Menschheit, Ich, Gesellschaft", desc: "Der Mensch, Individualität, Kooperation.", invertido: "Isolation, Egoismus, fehlende Unterstützung." }
  },
  {
    key: "laguz",
    es: { nombre: "Laguz", significado: "Agua, intuición, lo inconsciente", desc: "La fluidez, la emoción profunda y la conexión con el inconsciente.", invertido: "Confusión emocional, bloqueos, miedo." },
    en: { nombre: "Laguz", significado: "Water, intuition, the unconscious", desc: "Flow, deep emotion and connection with the unconscious.", invertido: "Emotional confusion, blockages, fear." },
    pt: { nombre: "Laguz", significado: "Água, intuição, inconsciente", desc: "Fluidez, emoção profunda, conexão com o inconsciente.", invertido: "Confusão emocional, bloqueios, medo." },
    fr: { nombre: "Laguz", significado: "Eau, intuition, inconscient", desc: "Fluidité, émotion profonde, connexion à l'inconscient.", invertido: "Confusion émotionnelle, blocages, peur." },
    de: { nombre: "Laguz", significado: "Wasser, Intuition, Unbewusstes", desc: "Fluss, tiefe Emotion, Verbindung zum Unbewussten.", invertido: "Emotionale Verwirrung, Blockaden, Angst." }
  },
  {
    key: "ingwaz",
    es: { nombre: "Ingwaz", significado: "Semilla, potencial, gestación", desc: "El inicio de algo nuevo, la fertilidad y la incubación.", invertido: "Potencial sin activar, proyectos detenidos." },
    en: { nombre: "Ingwaz", significado: "Seed, potential, gestation", desc: "Beginning of something new, fertility and incubation.", invertido: "Unfulfilled potential, stalled projects." },
    pt: { nombre: "Ingwaz", significado: "Semente, potencial, gestação", desc: "Início de algo novo, fertilidade e incubação.", invertido: "Potencial não realizado, projetos parados." },
    fr: { nombre: "Ingwaz", significado: "Graine, potentiel, gestation", desc: "Début de quelque chose de nouveau, fertilité, incubation.", invertido: "Potentiel non réalisé, projets bloqués." },
    de: { nombre: "Ingwaz", significado: "Same, Potenzial, Reifung", desc: "Anfang von etwas Neuem, Fruchtbarkeit, Inkubation.", invertido: "Unentwickeltes Potenzial, gestoppte Projekte." }
  },
  {
    key: "dagaz",
    es: { nombre: "Dagaz", significado: "Amanecer, transformación, claridad", desc: "El cambio total, el despertar y la revelación.", invertido: "Estancamiento, falta de visión, indecisión." },
    en: { nombre: "Dagaz", significado: "Dawn, transformation, clarity", desc: "Total change, awakening and revelation.", invertido: "Stagnation, lack of vision, indecision." },
    pt: { nombre: "Dagaz", significado: "Amanhecer, transformação, clareza", desc: "Mudança total, despertar e revelação.", invertido: "Estagnação, falta de visão, indecisão." },
    fr: { nombre: "Dagaz", significado: "Aube, transformation, clarté", desc: "Changement total, éveil, révélation.", invertido: "Stagnation, manque de vision, indécision." },
    de: { nombre: "Dagaz", significado: "Morgendämmerung, Wandel, Klarheit", desc: "Totale Veränderung, Erwachen, Offenbarung.", invertido: "Stillstand, fehlende Vision, Unentschlossenheit." }
  },
  {
    key: "othalaz",
    es: { nombre: "Othalaz", significado: "Patrimonio, hogar, herencia", desc: "El legado, la propiedad, la familia y el sentido de pertenencia.", invertido: "Pérdida de herencia, disputas familiares, desarraigo." },
    en: { nombre: "Othalaz", significado: "Heritage, home, inheritance", desc: "Legacy, property, family and sense of belonging.", invertido: "Loss of inheritance, family disputes, uprooting." },
    pt: { nombre: "Othalaz", significado: "Patrimônio, lar, herança", desc: "Legado, propriedade, família e sentido de pertencimento.", invertido: "Perda de herança, disputas familiares, desenraizamento." },
    fr: { nombre: "Othalaz", significado: "Patrimoine, foyer, héritage", desc: "L'héritage, la propriété, la famille et le sentiment d'appartenance.", invertido: "Perte d'héritage, disputes familiales, déracinement." },
    de: { nombre: "Othalaz", significado: "Erbe, Heim, Abstammung", desc: "Vermächtnis, Eigentum, Familie, Zugehörigkeit.", invertido: "Erbverlust, Familienstreit, Entwurzelung." }
  }
];