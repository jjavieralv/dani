import { useState } from "react";

const CATEGORIES = [
  {
    icon: "🏠",
    title: "Portada & Navegación",
    items: [
      { id: "hero_photo", name: "Foto/vídeo principal de la pareja", desc: "Imagen hero a pantalla completa" },
      { id: "countdown", name: "Cuenta atrás", desc: "Días, horas, minutos hasta el 7 de abril" },
      { id: "hashtag", name: "Hashtag de boda", desc: "Ej: #DaniYÁngel, #ElTrucoFinal" },
      { id: "monogram", name: "Monograma / Logo de la boda", desc: "esto ya lo teneis chachis" },
      { id: "add_calendar", name: "Botón 'Añadir al calendario'", desc: "Google Calendar, iCal, Outlook" },
      { id: "music_bg", name: "Música de fondo", desc: "Canción significativa de la pareja" },

    ],
  },
  {
    icon: "💕",
    title: "Nuestra Historia",
    items: [
      { id: "how_met", name: "Cómo nos conocimos", desc: "Relato de la historia de amor" },
      { id: "timeline", name: "Timeline visual de la relación", desc: "Hitos con fotos y fechas" },
      { id: "proposal", name: "Historia de la propuesta", desc: "Cómo fue la pedida de mano" },
      { id: "fun_facts", name: "Fun facts / Curiosidades", desc: "Datos random y divertidos sobre los dos" },
      { id: "video_msg", name: "Vídeo mensaje de bienvenida", desc: "Vídeo de la pareja para los invitados" },
      { id: "rpg_cards", name: "Fichas de personaje RPG", desc: "Stats tipo videojuego: Creatividad 10/10, Magia 9/10..." },
    ],
  },
  {
    icon: "📋",
    title: "Detalles del Evento",
    items: [
      { id: "ceremony", name: "Ceremonia", desc: "Hora, lugar, dirección de la Ermita" },
      { id: "cocktail", name: "Cóctel / Hora del vermú", desc: "Ubicación y hora" },
      { id: "dinner", name: "Banquete", desc: "Tipo de cena, hora, lugar" },
      { id: "party", name: "Fiesta / After party", desc: "Info de la fiesta posterior" },
      { id: "preboda", name: "Preboda", desc: "Cena previa, welcome drinks" },
      { id: "postboda", name: "Postboda / Brunch", desc: "Brunch de despedida al día siguiente" },
      { id: "day_timeline", name: "Cronograma visual del día", desc: "Programa con horarios y flujo" },
      { id: "unplugged", name: "Ceremonia unplugged", desc: "Aviso de no usar móviles en la ceremonia" },
    ],
  },
  {
    icon: "✉️",
    title: "RSVP / Confirmación",
    items: [
      { id: "rsvp_form", name: "Formulario de confirmación", desc: "Asiste / No asiste con nombre" },
      { id: "rsvp_menu", name: "Selección de menú", desc: "Carne, pescado, vegetariano, vegano" },
      { id: "rsvp_allergies", name: "Alergias / Restricciones", desc: "Campo libre o checkboxes" },
      { id: "rsvp_bus", name: "¿Necesitas autobús?", desc: "Conteo automático de plazas" },
      { id: "rsvp_song", name: "Petición de canción", desc: "¿Qué canción te saca a bailar?" },
      { id: "rsvp_custom", name: "Preguntas personalizadas", desc: "Hasta 5 preguntas extra" },
      { id: "rsvp_kids", name: "Info de niños", desc: "Número, edades, servicio de cuidadores" },
      { id: "rsvp_reminders", name: "Recordatorios automáticos", desc: "Email/SMS a quien no ha respondido" },
      { id: "guest_dashboard", name: "Panel de gestión de invitados", desc: "Dashboard con estadísticas y exportación" },
      { id: "seating", name: "Buscador 'Encuentra tu mesa'", desc: "Cada invitado busca su asiento" },
      { id: "rsvp_plus_one", name: "Acompañante / Plus-one", desc: "Invitado decide si lleva plus-one y rellena sus datos" },
      { id: "rsvp_confirmation_msg", name: "Mensaje de 'respuesta enviada'", desc: "Pantalla de confirmación tras el envío" },
      { id: "rsvp_email_verify", name: "Verificación por email", desc: "Mail al invitado confirmando su RSVP" },
      { id: "rsvp_contact", name: "Contacto directo desde RSVP", desc: "Enlace para escribirnos dudas al confirmar" },
    ],
  },
  {
    icon: "🎁",
    title: "Lista de Regalos",
    items: [
      { id: "cash_fund", name: "Sobre digital / Fondo monetario", desc: "Transferencia directa a cuenta" },
      { id: "honeymoon_fund", name: "Fondo de luna de miel", desc: "Con mapa del viaje y etapas" },
      { id: "experience_fund", name: "Fondo de experiencias", desc: "Actividades concretas que los invitados 'regalan'" },
      { id: "registry_links", name: "Links a registros externos", desc: "Amazon, El Corte Inglés, etc." },
      { id: "charity", name: "Donación solidaria", desc: "Donación a ONG en nombre de la pareja" },
      { id: "no_gifts", name: "Mensaje 'vuestra presencia es suficiente'", desc: "Opción elegante de no pedir regalos" },
    ],
  },
  {
    icon: "🗺️",
    title: "Viaje, Transporte y Alojamiento",
    items: [
      { id: "venue_map", name: "Mapa interactivo del venue", desc: "Google Maps embebido con 'Cómo llegar'" },
      { id: "bus_info", name: "Info de autobuses", desc: "Punto de recogida, horarios ida y vuelta" },
      { id: "parking", name: "Info de parking", desc: "Garajes cercanos, coste, restricciones" },
      { id: "hotels", name: "Hoteles recomendados", desc: "Con precios, distancia al venue y link de reserva" },
      { id: "airbnb", name: "Alternativas de alojamiento", desc: "Airbnb, hostales, distintos precios" },
      { id: "airport", name: "Info de aeropuerto/transporte público", desc: "Barajas, metro, cercanías" },
      { id: "madrid_guide", name: "Guía 'Qué hacer en Madrid'", desc: "Restaurantes, bares y planes favoritos" },
      { id: "visa_info", name: "Info de visados", desc: "Para invitados venezolanos/internacionales" },
      { id: "rideshare", name: "Integración con Uber/Lyft/Cabify", desc: "Enlaces directos para pedir coche al venue" },
    ],
  },
  {
    icon: "👗",
    title: "Dress Code & FAQ",
    items: [
      { id: "dresscode", name: "Dress code con fotos de ejemplo", desc: "Mood board visual de la etiqueta" },
      { id: "color_guide", name: "Guía de paleta de colores", desc: "'Bienvenido el lavanda, evitad el blanco'" },
      { id: "shoe_advice", name: "Consejo de calzado", desc: "Tipo de terreno del venue" },
      { id: "faq", name: "Preguntas frecuentes (FAQ)", desc: "Acordeón con respuestas a todo" },
      { id: "contact", name: "Contacto de emergencia", desc: "Email, teléfono, persona de referencia" },
    ],
  },
  {
    icon: "📸",
    title: "Galería y Multimedia",
    items: [
      { id: "photo_gallery", name: "Galería de fotos de la pareja", desc: "Preboda, engagement, timeline" },
      { id: "venue_photos", name: "Fotos del venue", desc: "Ermita de la Virgen del Puerto" },
      { id: "shared_album", name: "Álbum compartido de invitados", desc: "Subir fotos antes, durante y después" },
      { id: "live_wall", name: "Muro de fotos en vivo", desc: "QR + proyección en tiempo real en la boda" },
      { id: "photo_booth", name: "Photo booth virtual", desc: "Filtros, props y stickers AR" },
      { id: "post_wedding_gallery", name: "Galería post-boda", desc: "Fotos profesionales + vídeo resumen" },
    ],
  },
  {
    icon: "👫",
    title: "Wedding Party / Cortejo",
    items: [
      { id: "wedding_party", name: "Cortejo nupcial", desc: "Fotos, bios y rol de cada persona" },
      { id: "parents", name: "Padres y padrinos", desc: "Con fotos y dedicatorias" },
      { id: "toto_role", name: "Toto: Dog of Honor", desc: "Bio, foto y rol oficial de Toto" },
    ],
  },
  {
    icon: "🎩",
    title: "Personalización Temática (Magia, Pintura, Lego...)",
    items: [
      { id: "magic_narrative", name: "Historia narrada como show de magia", desc: "Tres actos: Preparación, Truco, Revelación" },
      { id: "watercolor_bg", name: "Fondos de acuarela lavanda", desc: "Estética pintada por Dani como base visual" },
      { id: "dani_illustrations", name: "Ilustraciones originales de Dani", desc: "Venue, flores, Toto, retratos en acuarela" },
      { id: "lego_minis", name: "Minifiguras Lego de la pareja y Toto", desc: "Ilustraciones pixel-art o renders 3D" },
      { id: "board_game_program", name: "Programa del día como tablero de juego", desc: "Casillas, dados, fichas y hitos" },
      { id: "escape_easter_eggs", name: "Easter eggs tipo escape room", desc: "Objetos ocultos que desbloquean contenido secreto" },
      { id: "page_404", name: "Página 404 personalizada", desc: "'Esta página desapareció como un truco de Ángel 🎩'" },
      { id: "magic_animations", name: "Animaciones mágicas", desc: "Humo, chispas, cartas y apariciones" },
      { id: "creative_names", name: "Nombres creativos para secciones", desc: "'La Gran Ilusión', 'Las Piezas que Faltan'..." },
    ],
  },
  {
    icon: "🎮",
    title: "Interactivos y Juegos",
    items: [
      { id: "quiz", name: "Quiz '¿Cuánto conoces a Dani y Ángel?'", desc: "Trivia con puntuación" },
      { id: "who_said", name: "'¿Quién dijo qué?'", desc: "Invitados adivinan quién dijo cada frase" },
      { id: "baby_photos", name: "Adivina la foto de bebé", desc: "Fotos de infancia de la pareja" },
      { id: "cocktail_vote", name: "Votación del cóctel signature", desc: "Invitados eligen el cóctel de la boda" },
      { id: "predictions", name: "Predicciones", desc: "¿Quién llorará primero? ¿Habrá tartazo?" },
      { id: "bingo", name: "Bingo de boda digital", desc: "Casillas: 'primeras lágrimas', 'chiste del padrino'..." },
      { id: "scavenger", name: "Búsqueda del tesoro QR", desc: "Pistas por el venue con fun facts" },
      { id: "language_mini_section", name: "Mini-sección 'Aprende a hablar como nosotros'", desc: "Frases venezolanas y españolas divertidas" },
    ],
  },
  {
    icon: "🎵",
    title: "Música y Guestbook",
    items: [
      { id: "spotify_collab", name: "Playlist colaborativa Spotify", desc: "Invitados añaden canciones" },
      { id: "our_soundtrack", name: "'Nuestra banda sonora'", desc: "Canciones significativas de la relación" },
      { id: "digital_guestbook", name: "Libro de firmas digital", desc: "Mensajes escritos + fotos + vídeos" },
      { id: "audio_guestbook", name: "Audio guestbook", desc: "Mensajes de voz grabados" },
      { id: "advice_corner", name: "Rincón de consejos de amor", desc: "Amigos y familia dejan consejos" },
      { id: "lego_wall", name: "Muro de ladrillos Lego virtual", desc: "Cada invitado añade un ladrillo con su nombre" },
    ],
  },
  {
    icon: "🇻🇪🇪🇸",
    title: "Fusión Cultural Venezuela-España",
    items: [
      { id: "two_cultures", name: "Sección 'Dos culturas, un amor'", desc: "Explicar tradiciones que vivirán los invitados" },
      { id: "hora_loca", name: "La Hora Loca", desc: "Aviso de la tradición venezolana con máscaras y fiesta" },
      { id: "traditions", name: "Tradiciones compartidas", desc: "Las Arras, El Lazo, Los Padrinos" },
      { id: "culture_map", name: "Mapa 'De Caracas a Madrid'", desc: "Viaje ilustrado de las raíces de ambos" },
      { id: "bilingual_phrases", name: "'Aprende a hablar como nosotros'", desc: "Frases venezolanas y españolas divertidas" },
      { id: "fusion_menu", name: "Preview del menú fusión", desc: "Pasapalos venezolanos + tapas españolas" },
    ],
  },
  {
    icon: "🐕",
    title: "El Rincón de Toto",
    items: [
      { id: "toto_page", name: "Página dedicada a Toto", desc: "Bio, galería, 'cargo oficial'" },
      { id: "toto_reviews", name: "Reseñas del venue por Toto", desc: "'4/5 patas — buen césped, ardillas sospechosas'" },
      { id: "toto_animated", name: "Toto animado por la web", desc: "Sigue el scroll, asoma por las esquinas" },
      { id: "toto_illustrations", name: "Ilustraciones de Toto nupcial", desc: "Con pajarita, chistera, ramo, como minifigura Lego" },
      { id: "toto_pawprints", name: "Huellas de pata decorativas", desc: "Como bullets, separadores y elementos" },
    ],
  },
  {
    icon: "⚙️",
    title: "Funcionalidades Técnicas",
    items: [
      { id: "password", name: "Web protegida con contraseña", desc: "Solo invitados acceden" },
      { id: "custom_domain", name: "Dominio propio", desc: "Ej: daniyangel.com (~15-20€/año)" },
      { id: "qr_code", name: "QR code para invitación física", desc: "Enlace directo a la web/RSVP" },
      { id: "responsive", name: "Diseño responsive / mobile-first", desc: "Perfecto en móvil, tablet y desktop" },
      { id: "seo_hidden", name: "Ocultar de Google", desc: "No indexar en buscadores" },
      { id: "analytics", name: "Analytics de visitas", desc: "Saber quién ha visitado la web" },
      { id: "whatsapp", name: "Compartir por WhatsApp", desc: "Botón directo de envío" },
      { id: "livestream", name: "Livestream para invitados remotos", desc: "Emisión en directo de la ceremonia" },
    ],
  },
];

const STATUS_CONFIG = {
  unset: { label: "—", color: "var(--muted)", bg: "transparent" },
  yes: { label: "Sí", color: "#4a7c59", bg: "#e8f5e9" },
  maybe: { label: "Quizás", color: "#b8860b", bg: "#fff8e1" },
  no: { label: "No", color: "#c0392b", bg: "#fce4ec" },
};

const CYCLE = ["unset", "yes", "maybe", "no"];

export default function WeddingChecklist() {
  const [statuses, setStatuses] = useState({});
  const [expandedCat, setExpandedCat] = useState(null);
  const [filter, setFilter] = useState("all");

  const toggle = (id) => {
    setStatuses((prev) => {
      const current = prev[id] || "unset";
      const idx = CYCLE.indexOf(current);
      const next = CYCLE[(idx + 1) % CYCLE.length];
      return { ...prev, [id]: next };
    });
  };

  const counts = { yes: 0, maybe: 0, no: 0, unset: 0 };
  let total = 0;
  CATEGORIES.forEach((cat) =>
    cat.items.forEach((item) => {
      total++;
      counts[statuses[item.id] || "unset"]++;
    })
  );

  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => {
      if (filter === "all") return true;
      return (statuses[item.id] || "unset") === filter;
    }),
  })).filter((cat) => cat.items.length > 0);

  const pctDone = Math.round(((total - counts.unset) / total) * 100);

  const [importMsg, setImportMsg] = useState(null);

  const STATUS_FROM_LABEL = {
    "sí": "yes", "si": "yes", "yes": "yes",
    "quizás": "maybe", "quizas": "maybe", "maybe": "maybe",
    "no": "no",
    "sin decidir": "unset", "unset": "unset", "—": "unset", "": "unset",
  };

  const generateCSV = () => {
    const header = "ID,Categoría,Elemento,Descripción,Decisión";
    const rows = CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => {
        const st = statuses[item.id] || "unset";
        const label = st === "yes" ? "Sí" : st === "maybe" ? "Quizás" : st === "no" ? "No" : "Sin decidir";
        const esc = (s) => `"${String(s).replace(/"/g, '""')}"`;
        return [esc(item.id), esc(cat.title), esc(item.name), esc(item.desc), esc(label)].join(",");
      })
    );
    return [header, ...rows].join("\n");
  };

  const formatTimestamp = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
  };

  const handleDownload = () => {
    const csv = "\uFEFF" + generateCSV();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dani-angel-checklist_${formatTimestamp()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const parseCSV = (text) => {
    const rows = [];
    let cur = [], field = "", inQ = false;
    const s = text.replace(/^\uFEFF/, "");
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (inQ) {
        if (c === '"') {
          if (s[i + 1] === '"') { field += '"'; i++; } else { inQ = false; }
        } else field += c;
      } else {
        if (c === '"') inQ = true;
        else if (c === ",") { cur.push(field); field = ""; }
        else if (c === "\n") { cur.push(field); rows.push(cur); cur = []; field = ""; }
        else if (c === "\r") { /* skip */ }
        else field += c;
      }
    }
    if (field.length || cur.length) { cur.push(field); rows.push(cur); }
    return rows.filter((r) => r.length && r.some((f) => f !== ""));
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const rows = parseCSV(String(ev.target.result || ""));
        if (!rows.length) throw new Error("CSV vacío");
        const [header, ...data] = rows;
        const idIdx = header.findIndex((h) => /^id$/i.test(h.trim()));
        const decIdx = header.findIndex((h) => /decisi[oó]n|decision/i.test(h.trim()));
        if (idIdx === -1 || decIdx === -1) throw new Error("Faltan columnas ID o Decisión");
        const validIds = new Set(CATEGORIES.flatMap((c) => c.items.map((i) => i.id)));
        const next = {};
        let loaded = 0;
        for (const row of data) {
          const id = (row[idIdx] || "").trim();
          const dec = (row[decIdx] || "").trim().toLowerCase();
          if (!validIds.has(id)) continue;
          const st = STATUS_FROM_LABEL[dec] ?? "unset";
          next[id] = st;
          loaded++;
        }
        setStatuses(next);
        setImportMsg(`✓ Cargado (${loaded} elementos)`);
      } catch (err) {
        setImportMsg(`✗ Error: ${err.message}`);
      } finally {
        e.target.value = "";
        setTimeout(() => setImportMsg(null), 3000);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      style={{
        fontFamily: "'Crimson Pro', 'Georgia', serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: "24px 16px",
        color: "#3d2f4a",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap');
        
        .checklist-header {
          text-align: center;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e8d5f0;
        }
        .checklist-title {
          font-family: 'Crimson Pro', serif;
          font-size: 28px;
          font-weight: 300;
          letter-spacing: 0.03em;
          color: #5b3a6e;
          margin: 0 0 4px;
        }
        .checklist-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #8a7a94;
          margin: 0;
        }
        
        .progress-bar-outer {
          background: #f0e6f6;
          border-radius: 20px;
          height: 10px;
          margin: 16px 0 8px;
          overflow: hidden;
        }
        .progress-bar-inner {
          height: 100%;
          background: linear-gradient(90deg, #b39ddb, #9c7cb8);
          border-radius: 20px;
          transition: width 0.4s ease;
        }
        
        .stats-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 12px 0 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
        }
        .stat-pill {
          padding: 4px 12px;
          border-radius: 20px;
          cursor: pointer;
          border: 1.5px solid transparent;
          transition: all 0.2s;
          user-select: none;
        }
        .stat-pill:hover { opacity: 0.85; }
        .stat-pill.active { border-color: #5b3a6e; }
        
        .category {
          margin-bottom: 8px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #ece3f2;
          background: #fdfbfe;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          cursor: pointer;
          user-select: none;
          background: linear-gradient(135deg, #f8f0fc, #f3eaf8);
          transition: background 0.2s;
        }
        .category-header:hover { background: linear-gradient(135deg, #f0e4f6, #ebe0f2); }
        .cat-icon { font-size: 20px; }
        .cat-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #4a2d5e;
          flex: 1;
        }
        .cat-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #8a7a94;
          background: #ece3f2;
          padding: 2px 8px;
          border-radius: 10px;
        }
        .cat-arrow {
          font-size: 12px;
          color: #9c7cb8;
          transition: transform 0.2s;
        }
        .cat-arrow.open { transform: rotate(90deg); }
        
        .items-list { padding: 0 8px 8px; }
        .item-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          margin: 2px 0;
          cursor: pointer;
          transition: background 0.15s;
        }
        .item-row:hover { background: #f5eef9; }
        
        .status-btn {
          min-width: 52px;
          padding: 3px 0;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
          border: 1.5px solid #ddd;
          cursor: pointer;
          transition: all 0.15s;
          user-select: none;
          flex-shrink: 0;
        }
        .status-btn:hover { transform: scale(1.05); }
        
        .item-info { flex: 1; min-width: 0; }
        .item-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #3d2f4a;
          line-height: 1.3;
        }
        .item-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #9a8ba6;
          line-height: 1.3;
          margin-top: 1px;
        }
        
        .help-text {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #a090ae;
          margin-top: 20px;
          padding: 12px;
          background: #f8f4fc;
          border-radius: 8px;
        }
        .export-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          padding: 10px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #9c7cb8, #7b5ea7);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(123,94,167,0.3);
        }
        .export-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(123,94,167,0.4);
        }
        .export-btn:active { transform: translateY(0); }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(59,35,74,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-box {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          max-width: 560px;
          width: 100%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(59,35,74,0.3);
        }
        .modal-title {
          font-family: 'Crimson Pro', serif;
          font-size: 22px;
          font-weight: 300;
          color: #5b3a6e;
          margin: 0 0 4px;
        }
        .modal-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #8a7a94;
          margin: 0 0 12px;
        }
        .csv-textarea {
          flex: 1;
          min-height: 200px;
          max-height: 40vh;
          font-family: 'DM Sans', monospace;
          font-size: 11px;
          padding: 12px;
          border: 1px solid #e8d5f0;
          border-radius: 8px;
          background: #fdfbfe;
          color: #3d2f4a;
          resize: none;
          line-height: 1.5;
        }
        .modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          justify-content: flex-end;
        }
        .modal-btn-secondary {
          padding: 8px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #8a7a94;
          background: #f0e6f6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .modal-btn-secondary:hover { background: #e8d5f0; }
      `}</style>

      <div className="checklist-header">
        <h1 className="checklist-title">Dani & Ángel para evitar que J se vuelva loco</h1>
        <p className="checklist-subtitle">
          Checklist de la web de boda — Toca cada elemento para marcar Sí / Quizás / No
          Abajo tienes la opcion de guardar y cargar.
          Si guardas, se te genera un fichero que puedes cargar mas tarde para seguir editando las opciones y poder guardarlo de nuevo mas tarde.
        </p>
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={{ width: `${pctDone}%` }} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#9c7cb8" }}>
          {pctDone}% decidido ({total - counts.unset} de {total})
        </div>
      </div>

      <div className="stats-row">
        {[
          { key: "all", label: `Todos (${total})`, bg: "#f0e6f6", color: "#5b3a6e" },
          { key: "yes", label: `Sí (${counts.yes})`, bg: "#e8f5e9", color: "#4a7c59" },
          { key: "maybe", label: `Quizás (${counts.maybe})`, bg: "#fff8e1", color: "#b8860b" },
          { key: "no", label: `No (${counts.no})`, bg: "#fce4ec", color: "#c0392b" },
          { key: "unset", label: `Sin decidir (${counts.unset})`, bg: "#f5f5f5", color: "#888" },
        ].map((f) => (
          <div
            key={f.key}
            className={`stat-pill ${filter === f.key ? "active" : ""}`}
            style={{ background: f.bg, color: f.color }}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </div>
        ))}
      </div>

      {filteredCategories.map((cat) => {
        const isOpen = expandedCat === cat.title;
        const catCounts = { yes: 0, maybe: 0, no: 0 };
        cat.items.forEach((i) => {
          const s = statuses[i.id] || "unset";
          if (s !== "unset") catCounts[s]++;
        });
        const decided = catCounts.yes + catCounts.maybe + catCounts.no;

        return (
          <div className="category" key={cat.title}>
            <div className="category-header" onClick={() => setExpandedCat(isOpen ? null : cat.title)}>
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-title">{cat.title}</span>
              {decided > 0 && (
                <span className="cat-badge">
                  {catCounts.yes > 0 && `✓${catCounts.yes}`}
                  {catCounts.maybe > 0 && ` ?${catCounts.maybe}`}
                  {catCounts.no > 0 && ` ✗${catCounts.no}`}
                </span>
              )}
              <span className={`cat-arrow ${isOpen ? "open" : ""}`}>▶</span>
            </div>
            {isOpen && (
              <div className="items-list">
                {cat.items.map((item) => {
                  const st = statuses[item.id] || "unset";
                  const cfg = STATUS_CONFIG[st];
                  return (
                    <div className="item-row" key={item.id} onClick={() => toggle(item.id)}>
                      <div
                        className="status-btn"
                        style={{
                          background: cfg.bg || "#f9f9f9",
                          color: cfg.color,
                          borderColor: st === "unset" ? "#ddd" : cfg.color,
                        }}
                      >
                        {cfg.label}
                      </div>
                      <div className="item-info">
                        <div className="item-name">{item.name}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div className="help-text">
        Toca cada elemento para cambiar: <strong>— → Sí → Quizás → No</strong>
        <br />
        Usa los filtros de arriba para ver solo los "Sí", "Quizás", etc.
        <br />
        Cuando termines, dime qué habéis decidido y monto la web final 🪄
        <br />
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 4 }}>
          <button className="export-btn" onClick={handleDownload}>
            📥 Descargar CSV
          </button>
          <label className="export-btn" style={{ cursor: "pointer" }}>
            📤 Cargar CSV
            <input
              type="file"
              accept=".csv,text/csv"
              onChange={handleImport}
              style={{ display: "none" }}
            />
          </label>
        </div>
        {importMsg && (
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#5b3a6e", marginTop: 10 }}>
            {importMsg}
          </div>
        )}
      </div>
    </div>
  );
}
