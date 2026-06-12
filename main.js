/* ════════════════════════════════════════════════════════
   PORTAFOLIO — main.js
   ────────────────────────────────────────────────────────
   ÍNDICE:
   1. DATOS DE PROYECTOS     ← edita para agregar proyectos al grid
   2. BURBUJAS DE INTERESES  ← edita para la vista del home
   3. MAPA DE PÁGINAS
   4. NAVEGACIÓN + TRANSICIONES
   5. SLIDER DE IMÁGENES
   6. GRUPOS COLAPSABLES
   7. MENÚ MÓVIL
   8. RELOJ
   9. GENERACIÓN DE TARJETAS (no editar)
   10. CARGA DE PROYECTOS (no editar)
   11. VISTA BURBUJAS — lógica de dibujo (no editar)
════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════════
   1.1 DATOS DE PROYECTOS
   ────────────────────────────────────────────────────────
   Estos proyectos aparecen en el grid de Projects y en
   el nav lateral. Son independientes de las burbujas.

   ✏️  CÓMO AGREGAR UN PROYECTO:
   a) Copia un bloque y pégalo al final del array.
   b) Rellena los campos:
      · title    → nombre en la card y en el nav
      · category → 'series' | 'instalaciones' | 'publicaciones' | 'colaboraciones'
      · tag      → etiqueta corta (ej: 'fotografía')
      · color    → color de la pill (hex)
      · year     → año
      · desc     → descripción breve (2-3 líneas)
      · images   → rutas de imágenes para el slider. Deja [] si no tienes.
      · url      → ruta al HTML del proyecto (opcional, comenta si no existe)
════════════════════════════════════════════════════════ */
const projects = [

  {
    title:    'Radio frecuencia de un bosque en fuego',
    category: 'series',
    tags:     [
    { label: 'sound essay', color: '#BFECCA' },
    { label: 'radioarte',   color: '#c5ffc7' },
    { label: '2025',        color: '#e9c5ff' },
  ],
    tag:      'fotografía',
    color:    '#e87c5a',
    year:     '2025',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   ['Imagen/Radiofrecuencia/Radiofrecuencia_CSC_08.png'],
    url: 'Proyectos/radio_frecuencia.html',
  },

  {
    title:    'Quorum Sensing',
    category: 'series',
    tag:      'IA',
    color:    '#c8e8b4',
    year:     '2025 - ',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/qvorvm_sensing.html',
  },

  {
    title:    'Morfologías sintéticas',
    category: 'series',
    tag:      'fotografía',
    color:    '#d4a0c8',
    year:     '2024',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/morfologia_sintetica.html',
  },

  {
    title:    'Ecosistemas de una máquina que sueña',
    category: 'series',
    tag:      'Realidad Aumentada',
    color:    '#8fbcd4',
    year:     '2024',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/ecosistema_de_una_maquina.html',
  },
    {
    title:    'Lenguaje liminal',
    category: 'series',
    tag:      'Realidad Aumentada',
    color:    '#8fbcd4',
    year:     '2024',
    desc:     'Registro del paisaje ribereño y sus memorias de habitación.',
    images:   [],
    url: 'Proyectos/lenguaje_liminal.html',
  },
 
  {
    title:    'Cartografías Sensibles | DerivaLab',
    category: 'instalaciones',
    tag:      'instalación',
    color:    '#f5c842',
    year:     '2023',
    desc:     'Intervención espacial con materiales encontrados en zonas rurales abandonadas.',
    images:   [],
    url: 'Proyectos/derivas.html',
  },

  /* ──────────────────────────────────────────────────
     ✏️  PEGA AQUÍ TU PRÓXIMO PROYECTO:

     {
       title:    'Nombre del proyecto',
       category: 'series',
       tag:      'fotografía',
       color:    '#abc123',
       year:     '2025',
       desc:     'Descripción breve del proyecto.',
       images:   [],
       url: 'Proyectos/nombre.html',
     },
     ────────────────────────────────────────────────── */
];


/* ════════════════════════════════════════════════════════
   1.2 DATOS DE WORKSHPS
   ───────────────────────────────────────────────────────

   ✏️  CÓMO AGREGAR UN Workshop:
   a) Copia un bloque y pégalo al final del array.
   b) Rellena los campos:
      · title    → nombre en la card y en el nav
      · category → 'series' | 'instalaciones' | 'publicaciones' | 'colaboraciones'
      · tag      → etiqueta corta (ej: 'fotografía')
      · color    → color de la pill (hex)
      · year     → año
      · desc     → descripción breve (2-3 líneas)
      · images   → rutas de imágenes para el slider. Deja [] si no tienes.
      · url      → ruta al HTML del proyecto (opcional, comenta si no existe)
════════════════════════════════════════════════════════ */

const workshops = [
  {
    title:    'Nombre del taller',
    tag:      'taller',
    color:    '#ffcefb',
    year:     '2025',
    desc:     'Descripción breve.',
    url:      '', // opcional
  },
];

/* ════════════════════════════════════════════════════════
   2. BURBUJAS DE INTERESES
   ────────────────────────────────────────────────────────
   Esta es la vista principal del home. Es completamente
   independiente del array de proyectos de arriba.

   Cada entrada puede ser:
   · Una palabra suelta    → sin campo 'url'
   · Un proyecto con link  → con campo 'url' (abre el proyecto)

   CAMPOS:
   · word  → texto que aparece en la burbuja
   · color → color de la burbuja (hex)
   · rx    → posición horizontal (0 = izquierda, 1 = derecha)
   · ry    → posición vertical   (0 = arriba,    1 = abajo)
   · r     → radio relativo      (0.07 = pequeña, 0.14 = grande)
   · url   → (opcional) ruta al HTML del proyecto

   ✏️  PARA AGREGAR UNA BURBUJA:
   Copia cualquier bloque y ajusta los valores.
   Las conexiones se definen por separado en bubbleAffinities.
════════════════════════════════════════════════════════ */
const bubbleWords = [

  // ── Palabras sueltas ──────────────────────────────
  {
    word:  'Interfaz',
    color: '#D6C9FE',
    rx: 0.12, ry: 0.25, r: 0.20,
  },
  {
    word:  'Territorio',
    color: '#61C9C3',
    rx: 0.55, ry: 0.12, r: 0.25,
  },
  {
    word:  'Interespecie',
    color: '#4662ff',
    rx: 0.82, ry: 0.58, r: 0.19,
  },
  {
    word:  'memoria',
    color: '#ffa7d9',
    rx: 0.28, ry: 0.78, r: 0.30,
  },
  {
    word:  'paisaje sonoro',
    color: '#ff82b4',
    rx: 0.70, ry: 0.82, r: 0.09,
  },
  {
    word:  'interfaz',
    color: '#d4a0c8',
    rx: 0.42, ry: 0.48, r: 0.08,
  },

  // ── Proyectos con link ────────────────────────────
  {
    word:  'Qvorvm Sensing',
    color: '#c8e8b4',
    rx: 0.22, ry: 0.30, r: 0.11,
    url: 'Proyectos/qvorvm_sensing.html',
  },
  {
    word:  'Radio frecuencia\nde un bosque en fuego',
    color: '#BFECCA',
    rx: 0.50, ry: 0.22, r: 0.13,
    url: 'Proyectos/radio_frecuencia.html',
  },
  {
    word:  'Ecosistemas\nde una máquina que sueña',
    color: '#ffcd4d',
    rx: 0.76, ry: 0.35, r: 0.12,
    // url: 'Proyectos/ecosistemas.html',  // descomenta cuando esté lista
  },
  {
    word:  'Morfologías sintéticas',
    color: '#db9eff',
    rx: 0.35, ry: 0.62, r: 0.10,
    url: 'Proyectos/morfologia_sintetica.html',
  },
  {
    word:  'Cartografías Sensibles',
    color: '#87cefb',
    rx: 0.65, ry: 0.70, r: 0.13,
    url: 'Proyectos/derivas.html',
  },
  {
    word:  'Voces del humedal',
    color: '#ff9ef5',
    rx: 0.15, ry: 0.72, r: 0.09,
    url: 'Proyectos/voces_del_humedal.html',
  },

  /* ──────────────────────────────────────────────────
     ✏️  PEGA AQUÍ TU PRÓXIMA BURBUJA:

     {
       word:  'tu palabra o proyecto',
       color: '#abc123',
       rx: 0.50, ry: 0.50, r: 0.10,
       // url: 'Proyectos/nombre.html',   (opcional)
     },
     ────────────────────────────────────────────────── */
];

/* ── Conexiones entre burbujas (por afinidad temática) ──
   Escribe los pares [wordA, wordB] que quieras conectar
   con una línea punteada.                                 */
const bubbleAffinities = [
  ['deriva',          'territorio'],
  ['deriva',          'Cartografías Sensibles'],
  ['escucha',         'paisaje sonoro'],
  ['escucha',         'Voces del humedal'],
  ['memoria',         'Radio frecuencia\nde un bosque en fuego'],
  ['interfaz',        'Qvorvm Sensing'],
  ['interfaz',        'Ecosistemas\nde una máquina que sueña'],
  ['territorio',      'Morfologías sintéticas'],
  ['Qvorvm Sensing',  'Ecosistemas\nde una máquina que sueña'],
];


/* ════════════════════════════════════════════════════════
   3. MAPA DE PÁGINAS
   ────────────────────────────────────────────────────────
   ✏️  Si agregas una sección nueva:
   1. Crea <section id="page-NUEVA" class="page"> en index.html
   2. Agrega <li> en el nav con onclick="navigate('nueva')"
   3. Añade aquí: nueva: 'page-nueva',
════════════════════════════════════════════════════════ */
const pageMap = {
  home:      'page-home',
  about:     'page-about',
  texts:     'page-texts',
  workshops: 'page-workshops',
  research:  'page-research',
  contact:   'page-contact',
  proyectos: 'page-proyectos',
  proyecto:  'page-proyecto',
};


/* ════════════════════════════════════════════════════════
   4. NAVEGACIÓN + TRANSICIONES SUAVES
════════════════════════════════════════════════════════ */
function navigate(key) {
  const current = document.querySelector('.page.active, .split-page.active');
  const pageId  = pageMap[key];
  const nextEl  = pageId ? document.getElementById(pageId) : null;
  if (!nextEl || nextEl === current) return;

  const doShow = () => {
    nextEl.classList.add('active');
    void nextEl.offsetHeight;
    nextEl.classList.add('page-enter');
    nextEl.addEventListener('animationend', () => {
      nextEl.classList.remove('page-enter');
    }, { once: true });
  };

  if (current) {
    current.classList.add('page-exit');
    current.addEventListener('animationend', () => {
      current.classList.remove('active', 'page-exit');
      doShow();
    }, { once: true });
  } else {
    doShow();
  }

  document.querySelectorAll('.nav-section').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + key);
  if (navEl) navEl.classList.add('active');

  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;

  closeMobileNav();
}


/* ════════════════════════════════════════════════════════
   5. SLIDER DE IMÁGENES EN CARDS
════════════════════════════════════════════════════════ */
function initSlider(card, images) {
  const track   = card.querySelector('.slider-track');
  const dotsEl  = card.querySelector('.slider-dots');
  const btnPrev = card.querySelector('.slider-prev');
  const btnNext = card.querySelector('.slider-next');
  let current   = 0;

  function goTo(index) {
    current = ((index % images.length) + images.length) % images.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  if (btnPrev) btnPrev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  if (btnNext) btnNext.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });

  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
    dotsEl.appendChild(dot);
  });

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });
}


/* ════════════════════════════════════════════════════════
   6. GRUPOS COLAPSABLES DEL NAV
════════════════════════════════════════════════════════ */
function toggleGroup(id) {
  const children = document.getElementById('children-' + id);
  if (!children) return;
  children.classList.toggle('open');
}


/* ════════════════════════════════════════════════════════
   7. MENÚ MÓVIL
════════════════════════════════════════════════════════ */
function toggleMobileNav() {
  document.getElementById('left-nav').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('active');
}
function closeMobileNav() {
  document.getElementById('left-nav').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}


/* ════════════════════════════════════════════════════════
   8. RELOJ
════════════════════════════════════════════════════════ */
function updateClock() {
  const now = new Date();
  const h   = String(now.getHours()).padStart(2, '0');
  const m   = String(now.getMinutes()).padStart(2, '0');
  const el  = document.getElementById('clock');
  if (el) el.textContent = h + ':' + m;
}
updateClock();
setInterval(updateClock, 10000);


/* ════════════════════════════════════════════════════════
   9. GENERACIÓN DE TARJETAS
   No editar.
════════════════════════════════════════════════════════ */
function makeCard(p) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = p.category;

  if (p.url) {
    card.onclick = () => openProject(p.url, p.title, p.category);
    card.style.cursor = 'pointer';
  } else {
    card.onclick = () => filterCards(p.category);
    card.style.cursor = 'pointer';
  }

  const hasImages = Array.isArray(p.images) && p.images.length > 0;
  const hasSlider = hasImages && p.images.length > 1;

  let thumbHTML = '';
  if (hasImages) {
    const slides = p.images.map(src =>
      `<div class="slide"><img src="${src}" alt="${p.title}" loading="lazy"></div>`
    ).join('');
    const controls = hasSlider
      ? `<button class="slider-prev" aria-label="Anterior">‹</button>
         <button class="slider-next" aria-label="Siguiente">›</button>`
      : '';
    thumbHTML = `
      <div class="card-slider">
        <div class="slider-track">${slides}</div>
        ${controls}
        <div class="slider-dots"></div>
      </div>`;
  } else {
    thumbHTML = `
      <div class="card-thumb">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span>sin imagen</span>
      </div>`;
  }

  const tagsHTML = (p.tags || [])
    .map(t => `<span class="pill" style="background:${t.color}">${t.label}</span>`)
    .join('');

  card.innerHTML = `
    ${thumbHTML}
    <div class="card-body">
      <div class="tag-row">${tagsHTML}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      ${p.url ? '<span class="card-link-hint">Ver proyecto →</span>' : ''}
      <span class="card-year">${p.year}</span>
    </div>
  `;

  if (hasSlider) initSlider(card, p.images);
  return card;
}

function filterCards(category) {
  const pageEl = document.getElementById('page-proyectos');
  if (pageEl && !pageEl.classList.contains('active')) {
    navigate('proyectos');
    setTimeout(() => applyFilter(category), 380);
  } else {
    applyFilter(category);
  }
}

function applyFilter(category) {
  const cards = document.querySelectorAll('#grid-proyectos .card');
  cards.forEach(c => {
    const match = category === 'all' || c.dataset.category === category;
    c.style.display = match ? '' : 'none';
  });
  document.querySelectorAll('.chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
}

function buildNavProjects() {
  const ul = document.querySelector('#children-nav-proyectos-group');
  if (!ul) return;
  ul.innerHTML = '';
  projects.forEach((p, i) => {
    const li = document.createElement('li');
    li.className = 'nav-branch' + (i === projects.length - 1 ? ' last' : '');
    const a = document.createElement('a');
    a.textContent = p.title;
    a.dataset.url = p.url;
    if (p.url) {
      a.href = '#';
      a.onclick = (e) => { e.preventDefault(); openProject(p.url, p.title, p.category); };
    } else {
      a.href = '#';
      a.onclick = (e) => { e.preventDefault(); filterCards(p.category); };
    }
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function populateGrids() {
  const grid = document.getElementById('grid-proyectos');
  if (grid) projects.forEach(p => grid.appendChild(makeCard(p)));

  const gridHome = document.getElementById('grid-home');
  if (gridHome) projects.forEach(p => gridHome.appendChild(makeCard(p)));

  const gridWorkshops = document.getElementById('grid-workshops');
if (gridWorkshops) workshops.forEach(p => gridWorkshops.appendChild(makeCard(p)));
}



function initFilterChips() {
  document.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });
}

populateGrids();
buildNavProjects();
initFilterChips();

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get('filter');
  const page   = params.get('page');
  if (filter) {
    navigate('proyectos');
    setTimeout(() => applyFilter(filter), 50);
  } else if (page && pageMap[page]) {
    navigate(page);
  }
});


/* ════════════════════════════════════════════════════════
   10. CARGA DE PROYECTOS SIN IFRAME
   No editar.
════════════════════════════════════════════════════════ */
let _activeProjectUrl = null;

/* ════════════════════════════════════════════════════════
   SCROLL HINTS — indicador de scroll por columna
════════════════════════════════════════════════════════ */
function _initScrollHints(container) {
  const cols = container.querySelectorAll('.project-col-text, .project-col-images');
  cols.forEach(col => {
    /* Elimina hints anteriores */
    col.querySelectorAll('.scroll-hint').forEach(el => el.remove());

    const hint = document.createElement('div');
    hint.className = 'scroll-hint';
    col.appendChild(hint);

    let hidden = false;
    col.addEventListener('scroll', () => {
      if (!hidden && col.scrollTop > 40) {
        hint.classList.add('hidden');
        hidden = true;
      } else if (hidden && col.scrollTop <= 40) {
        hint.classList.remove('hidden');
        hidden = false;
      }
    }, { passive: true });
  });
}

async function openProject(url, title, category) {
  const container = document.getElementById('page-proyecto');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;
                height:100%;font-family:var(--font-mono);font-size:0.7rem;color:#aaa;">
      Cargando…
    </div>`;

  navigate('proyecto');

  const rightNav = document.querySelector('#right-nav span');
  if (rightNav) rightNav.textContent = category || '';

  try {
    const res  = await fetch(url);
    if (!res.ok) throw new Error('No se pudo cargar el proyecto');
    const html = await res.text();

    const parser = new DOMParser();
    const doc    = parser.parseFromString(html, 'text/html');
    const frag   = doc.querySelector('.project-split');

    if (!frag) {
      container.innerHTML = `<div class="content-block"><p>No se encontró contenido del proyecto.</p></div>`;
      return;
    }

    frag.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.includes('index.html')) {
        a.href = '#';
        const target = new URL(href, window.location.href);
        const pageParam   = target.searchParams.get('page');
        const filterParam = target.searchParams.get('filter');
        a.onclick = (e) => {
          e.preventDefault();
          if (pageParam && pageMap[pageParam]) navigate(pageParam);
          else if (filterParam) { navigate('proyectos'); setTimeout(() => applyFilter(filterParam), 380); }
          else navigate('proyectos');
        };
      } else if (href && href.endsWith('.html') && !href.startsWith('http')) {
        const matchedProject = projects.find(p => p.url && p.url.includes(href.split('/').pop()));
        if (matchedProject) {
          a.href = '#';
          a.onclick = (e) => {
            e.preventDefault();
            openProject(matchedProject.url, matchedProject.title, matchedProject.category);
          };
        }
      }
    });

    container.innerHTML = '';
    container.appendChild(frag);

    _activeProjectUrl = url;
    _highlightActiveProject();
    container.scrollTop = 0;

    /* Inyecta scroll hints en columnas de proyecto */
    _initScrollHints(container);

  } catch (err) {
    container.innerHTML = `
      <div class="content-block">
        <p style="color:#e87c5a">Error al cargar el proyecto.</p>
        <p class="muted">${err.message}</p>
      </div>`;
  }
}

function _highlightActiveProject() {
  document.querySelectorAll('#children-nav-proyectos-group a').forEach(a => {
    const isActive = _activeProjectUrl && a.dataset.url === _activeProjectUrl;
    a.style.color      = isActive ? '#3535c8' : '';
    a.style.fontWeight = isActive ? '500'     : '';
  });
}


/* ════════════════════════════════════════════════════════
   11. VISTA BURBUJAS — lógica de dibujo
   No editar. Los datos se configuran en la sección 2.
════════════════════════════════════════════════════════ */
let _bubblesReady = false;
let _currentView  = 'bubbles';

/* Estado de interacción */
let _mouseX = -9999, _mouseY = -9999;
let _ripples = [];   /* [{ x, y, r, maxR, alpha, color }] */
let _animFrame = null;

function _hexRgb(hex) {
  const c = parseInt(hex.replace('#', ''), 16);
  return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
}

/* Dibuja el grid de puntos de fondo */
function _drawGrid(ctx, W, H) {
  const spacing = 28;
  ctx.save();
  for (let x = spacing; x < W; x += spacing) {
    for (let y = spacing; y < H; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, 0.9, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.10)';
      ctx.fill();
    }
  }
  ctx.restore();
}

function _drawBubble(ctx, x, y, r, hex, hoverScale = 1) {
  const [red, g, b] = _hexRgb(hex);
  const steps = 12;
  const sr = r * hoverScale;
  for (let i = steps; i >= 0; i--) {
    const t      = i / steps;
    const radius = sr * (0.18 + 0.82 * t);
    const alpha  = (1 - t) * (0.52 + (hoverScale - 1) * 0.3);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${red},${g},${b},${alpha})`;
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(x, y, sr * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${red},${g},${b},0.75)`;
  ctx.fill();
}

/* Dibuja los ripples de click */
function _drawRipples(ctx) {
  _ripples = _ripples.filter(rp => rp.alpha > 0.01);
  _ripples.forEach(rp => {
    const [red, g, b] = _hexRgb(rp.color);
    ctx.beginPath();
    ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${red},${g},${b},${rp.alpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    rp.r     += (rp.maxR - rp.r) * 0.12;
    rp.alpha *= 0.88;
  });
}

function initBubbles() {
  const container = document.getElementById('view-bubbles');
  if (!container) return;

  const canvas = document.getElementById('bubble-canvas');
  const svg    = document.getElementById('bubble-connections');
  if (!canvas || !svg) return;

  const W = container.offsetWidth;
  const H = container.offsetHeight;
  if (W === 0 || H === 0) return;

  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  /* Calcula coordenadas absolutas para cada burbuja */
  const coords = {};
  const minR   = Math.min(W, H);
  bubbleWords.forEach(b => {
    coords[b.word] = {
      x: b.rx * W,
      y: b.ry * H,
      r: b.r  * minR,
    };
  });

  /* SVG: líneas de afinidad */
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width',   W);
  svg.setAttribute('height',  H);
  svg.innerHTML = '';

  bubbleAffinities.forEach(([wordA, wordB]) => {
    const a = coords[wordA];
    const b = coords[wordB];
    if (!a || !b) return;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', '#bbb');
    line.setAttribute('stroke-width', '0.6');
    line.setAttribute('stroke-dasharray', '4 5');
    line.setAttribute('opacity', '0.55');
    svg.appendChild(line);
  });

  /* Etiquetas: elimina anteriores y recrea */
  container.querySelectorAll('.bubble-label').forEach(el => el.remove());

  const isMobile = W < 600;

  bubbleWords.forEach(b => {
    const c = coords[b.word];
    if (!c) return;

    const label = document.createElement('div');
    label.className = 'bubble-label';

    const lines = b.word.split('\n');
    const displayText = isMobile && b.word.replace('\n', ' ').length > 22
      ? b.word.replace('\n', ' ').slice(0, 20) + '…'
      : lines.join('<br>');

    label.innerHTML = displayText;

    label.style.left = c.x + 'px';
    label.style.top  = (c.y + c.r * 0.42) + 'px';

    if (b.url) {
      label.style.cursor = 'pointer';
      label.title = 'Ver proyecto';
      label.onclick = () => {
        /* Ripple al hacer click */
        _ripples.push({ x: c.x, y: c.y, r: c.r * 0.2, maxR: c.r * 1.8,
                        alpha: 0.7, color: b.color });
        openProject(b.url, b.word.replace('\n', ' '), '');
      };
    }

    container.appendChild(label);
  });

  /* Loop de animación: hover + ripples */
  if (_animFrame) cancelAnimationFrame(_animFrame);

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#f9f7f2';
    ctx.fillRect(0, 0, W, H);

    _drawGrid(ctx, W, H);

    /* Líneas SVG se mantienen, solo redibujamos canvas */
    bubbleWords.forEach(b => {
      const c = coords[b.word];
      if (!c) return;
      const dx = _mouseX - c.x;
      const dy = _mouseY - c.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const hoverScale = dist < c.r * 1.1
        ? 1 + 0.12 * Math.max(0, 1 - dist / (c.r * 1.1))
        : 1;
      _drawBubble(ctx, c.x, c.y, c.r, b.color, hoverScale);
    });

    _drawRipples(ctx);
    _animFrame = requestAnimationFrame(draw);
  }
  draw();

  /* Listeners de mouse */
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    _mouseX = e.clientX - rect.left;
    _mouseY = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    _mouseX = -9999; _mouseY = -9999;
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    bubbleWords.forEach(b => {
      const c = coords[b.word];
      if (!c) return;
      const dx = mx - c.x, dy = my - c.y;
      if (Math.sqrt(dx * dx + dy * dy) < c.r) {
        _ripples.push({ x: c.x, y: c.y, r: c.r * 0.2, maxR: c.r * 2,
                        alpha: 0.6, color: b.color });
        if (b.url) openProject(b.url, b.word.replace('\n', ' '), '');
      }
    });
  });

  _bubblesReady = true;
}

/* ── Alterna entre vistas ── */
function setHomeView(v) {
  _currentView = v;

  const viewBubbles = document.getElementById('view-bubbles');
  const viewSplit   = document.getElementById('view-split');
  const btnBubbles  = document.getElementById('btn-bubbles');
  const btnSplit    = document.getElementById('btn-split');

  if (!viewBubbles || !viewSplit) return;

  if (v === 'bubbles') {
    if (!_bubblesReady) initBubbles();
    viewBubbles.classList.add('active');
    viewSplit.classList.remove('active');
    if (btnBubbles) btnBubbles.classList.add('active');
    if (btnSplit)   btnSplit.classList.remove('active');
  } else {
    viewSplit.classList.add('active');
    viewBubbles.classList.remove('active');
    if (btnSplit)    btnSplit.classList.add('active');
    if (btnBubbles)  btnBubbles.classList.remove('active');
  }
}

/* ── Redibuja al cambiar el tamaño de ventana ── */
let _resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => {
    _bubblesReady = false;
    if (_animFrame) { cancelAnimationFrame(_animFrame); _animFrame = null; }
    if (_currentView === 'bubbles') initBubbles();
  }, 150);
});

/* ── Inicializa al cargar ── */
document.addEventListener('DOMContentLoaded', () => {
  setHomeView('bubbles');
});