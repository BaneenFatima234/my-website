/* =========================================================
   GAMEVAULT — minimalist edition
   Game database, original poster art, search/filter, modal
   ========================================================= */

const GAMES = [
  {
    id: "botw",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Adventure",
    platform: "Nintendo Switch",
    year: 2017,
    publisher: "Nintendo",
    players: "Single-player",
    rating: 4.9,
    description: "An open-world adventure that hands players a huge kingdom and almost no instructions, rewarding curiosity, climbing, and creative problem-solving over a fixed story path.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#7FA37A"/>
      <circle cx="215" cy="95" r="42" fill="#F6F1E4"/>
      <path d="M0 260 L110 150 L180 240 L300 130 V400 H0 Z" fill="#4E7350"/>
      <path d="M0 320 L90 250 L200 330 L300 260 V400 H0 Z" fill="#3A5A3D"/>
      <polygon points="150,340 158,362 180,362 162,375 169,398 150,384 131,398 138,375 120,362 142,362" fill="#F6F1E4"/>
    </svg>`
  },
  {
    id: "minecraft",
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    year: 2011,
    publisher: "Mojang Studios",
    players: "Single & Multiplayer",
    rating: 4.8,
    description: "A block-building sandbox where players mine resources, construct anything they can imagine, and survive against monsters across procedurally generated worlds.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#8B5E3C"/>
      <rect x="70" y="230" width="70" height="70" fill="#6E4A2E"/>
      <rect x="150" y="230" width="70" height="70" fill="#A9744A"/>
      <rect x="110" y="160" width="70" height="70" fill="#C08A57"/>
      <rect x="70" y="230" width="70" height="10" fill="#5A3B24"/>
      <rect x="150" y="230" width="70" height="10" fill="#8B5E3C"/>
      <rect x="110" y="160" width="70" height="10" fill="#9E6E43"/>
      <rect x="30" y="60" width="26" height="26" fill="#4E7350"/>
      <rect x="230" y="330" width="26" height="26" fill="#4E7350"/>
    </svg>`
  },
  {
    id: "witcher3",
    title: "The Witcher 3: Wild Hunt",
    genre: "Role-Playing",
    platform: "Multi-platform",
    year: 2015,
    publisher: "CD Projekt",
    players: "Single-player",
    rating: 4.9,
    description: "A sprawling fantasy RPG following monster hunter Geralt of Rivia through morally grey quests, dense lore, and one of gaming's most memorable side-quest catalogs.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#23262B"/>
      <circle cx="215" cy="95" r="36" fill="#E9E4D6"/>
      <circle cx="230" cy="85" r="36" fill="#23262B"/>
      <path d="M0 300 L60 240 L100 280 L150 220 L200 270 L260 210 L300 250 V400 H0 Z" fill="#171A1E"/>
      <line x1="60" y1="400" x2="60" y2="240" stroke="#E9E4D6" stroke-width="4"/>
      <line x1="60" y1="240" x2="80" y2="220" stroke="#E9E4D6" stroke-width="4"/>
    </svg>`
  },
  {
    id: "portal2",
    title: "Portal 2",
    genre: "Puzzle",
    platform: "Multi-platform",
    year: 2011,
    publisher: "Valve",
    players: "Single & Co-op",
    rating: 4.8,
    description: "A physics-based puzzle game built around a portal gun, sharp comedic writing, and test chambers that teach spatial reasoning without ever feeling like a tutorial.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#EDEBE3"/>
      <ellipse cx="120" cy="160" rx="55" ry="80" fill="none" stroke="#E07A3F" stroke-width="10"/>
      <ellipse cx="190" cy="250" rx="55" ry="80" fill="none" stroke="#3E7CB1" stroke-width="10"/>
      <circle cx="120" cy="160" r="10" fill="#E07A3F"/>
      <circle cx="190" cy="250" r="10" fill="#3E7CB1"/>
    </svg>`
  },
  {
    id: "stardew",
    title: "Stardew Valley",
    genre: "Simulation",
    platform: "Multi-platform",
    year: 2016,
    publisher: "ConcernedApe",
    players: "Single & Multiplayer",
    rating: 4.7,
    description: "A cozy farming sim where players inherit a rundown farm, build relationships with townsfolk, and slowly turn overgrown fields into a thriving homestead.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#F4C868"/>
      <circle cx="220" cy="80" r="34" fill="#F6F1E4"/>
      <polygon points="90,260 130,180 170,260" fill="#7A5B37"/>
      <polygon points="100,260 130,200 160,260" fill="#5E4429"/>
      <g stroke="#4E7350" stroke-width="6" stroke-linecap="round">
        <line x1="40" y1="330" x2="40" y2="280"/>
        <line x1="70" y1="330" x2="70" y2="270"/>
        <line x1="100" y1="330" x2="100" y2="285"/>
        <line x1="200" y1="330" x2="200" y2="275"/>
        <line x1="230" y1="330" x2="230" y2="285"/>
        <line x1="260" y1="330" x2="260" y2="270"/>
      </g>
    </svg>`
  },
  {
    id: "hades",
    title: "Hades",
    genre: "Roguelike",
    platform: "Multi-platform",
    year: 2020,
    publisher: "Supergiant Games",
    players: "Single-player",
    rating: 4.8,
    description: "A fast, stylish dungeon-crawler where the Prince of the Underworld fights his way out of Hell over and over, with every failed run deepening the story.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#2B1014"/>
      <path d="M150 90 C110 150 90 190 120 250 C90 260 80 300 110 330 C130 350 170 350 190 330 C220 300 210 260 180 250 C210 190 190 150 150 90 Z" fill="#E4623F"/>
      <path d="M150 150 C130 190 120 210 140 240 C160 240 170 220 160 200 C175 220 170 245 150 260 C130 245 125 220 140 200 Z" fill="#F6B04C"/>
    </svg>`
  },
  {
    id: "amongus",
    title: "Among Us",
    genre: "Party / Social Deduction",
    platform: "Multi-platform",
    year: 2018,
    publisher: "Innersloth",
    players: "Multiplayer",
    rating: 4.2,
    description: "A social deduction game where crewmates complete tasks aboard a spaceship while hidden impostors sabotage and eliminate them without getting caught.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#1B2A4A"/>
      <circle cx="60" cy="70" r="3" fill="#F6F1E4"/>
      <circle cx="220" cy="50" r="2" fill="#F6F1E4"/>
      <circle cx="260" cy="130" r="3" fill="#F6F1E4"/>
      <circle cx="40" cy="180" r="2" fill="#F6F1E4"/>
      <circle cx="150" cy="40" r="2" fill="#F6F1E4"/>
      <polygon points="150,120 230,170 230,280 150,330 70,280 70,170" fill="none" stroke="#E4623F" stroke-width="6"/>
      <circle cx="150" cy="225" r="30" fill="#E4623F"/>
    </svg>`
  },
  {
    id: "celeste",
    title: "Celeste",
    genre: "Platformer",
    platform: "Multi-platform",
    year: 2018,
    publisher: "Maddy Makes Games",
    players: "Single-player",
    rating: 4.7,
    description: "A precision platformer about climbing a mountain, pairing punishing but fair level design with an honest story about anxiety and self-doubt.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#C9DDE8"/>
      <circle cx="90" cy="90" r="30" fill="#F6B04C"/>
      <polygon points="0,320 130,140 190,240 300,110 300,400 0,400" fill="#345169"/>
      <polygon points="0,360 100,230 160,290 300,190 300,400 0,400" fill="#233A4D"/>
      <circle cx="150" cy="230" r="6" fill="#E4623F"/>
    </svg>`
  },
  {
    id: "gow2018",
    title: "God of War",
    genre: "Action-Adventure",
    platform: "PS4 / PC",
    year: 2018,
    publisher: "Santa Monica Studio",
    players: "Single-player",
    rating: 4.8,
    description: "A reinvention of the series that trades button-mashing combat for a slower, weightier axe-throwing brawler wrapped around a father-son story in Norse myth.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#1E1E1E"/>
      <rect x="140" y="60" width="20" height="220" fill="#E9E4D6"/>
      <path d="M150 60 L90 30 L80 90 L150 110 Z" fill="#E9E4D6"/>
      <path d="M150 60 L210 30 L220 90 L150 110 Z" fill="#BFBAAE"/>
      <line x1="150" y1="280" x2="150" y2="340" stroke="#8C2E24" stroke-width="6"/>
    </svg>`
  },
  {
    id: "overwatch2",
    title: "Overwatch 2",
    genre: "Hero Shooter",
    platform: "Multi-platform",
    year: 2022,
    publisher: "Blizzard Entertainment",
    players: "Multiplayer",
    rating: 4.0,
    description: "A team-based shooter built around a roster of heroes with unique abilities, where coordinating roles matters as much as individual aim.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#F2F2ED"/>
      <polygon points="150,90 220,130 220,210 150,250 80,210 80,130" fill="none" stroke="#2B4570" stroke-width="8"/>
      <polygon points="150,150 185,170 185,210 150,230 115,210 115,170" fill="#E4623F"/>
    </svg>`
  },
  {
    id: "acnh",
    title: "Animal Crossing: New Horizons",
    genre: "Simulation",
    platform: "Nintendo Switch",
    year: 2020,
    publisher: "Nintendo",
    players: "Single & Multiplayer",
    rating: 4.6,
    description: "A relaxed life-sim where players shape a deserted island in real time, decorating, fishing, and visiting friends' islands at their own pace.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#BFE3C4"/>
      <circle cx="150" cy="230" r="95" fill="#F6E7B4"/>
      <path d="M150 140 C170 160 175 190 150 220 C125 190 130 160 150 140 Z" fill="#4E7350"/>
      <circle cx="150" cy="230" r="95" fill="none" stroke="#3A5A3D" stroke-width="4"/>
    </svg>`
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    genre: "Action RPG",
    platform: "Multi-platform",
    year: 2022,
    publisher: "FromSoftware",
    players: "Single & Co-op",
    rating: 4.9,
    description: "A vast, unforgiving open-world RPG that pairs FromSoftware's brutal combat with a Lands Between shaped in part by fantasy author George R. R. Martin.",
    poster: `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="400" fill="#1A1512"/>
      <circle cx="150" cy="200" r="80" fill="none" stroke="#C8A24A" stroke-width="10"/>
      <circle cx="150" cy="200" r="46" fill="none" stroke="#C8A24A" stroke-width="4"/>
      <line x1="150" y1="120" x2="150" y2="150" stroke="#C8A24A" stroke-width="4"/>
      <line x1="150" y1="250" x2="150" y2="280" stroke="#C8A24A" stroke-width="4"/>
    </svg>`
  }
];

function ratingText(rating) {
  return `★ ${rating.toFixed(1)}`;
}

function posterCard(game) {
  return `
    <button class="poster-card" data-id="${game.id}" aria-haspopup="dialog">
      <div class="poster-frame">${game.poster}</div>
      <div class="poster-info">
        <h3>${game.title}</h3>
        <div class="poster-meta">
          <span>${game.year}</span>
          <span>&middot;</span>
          <span>${game.genre}</span>
          <span class="rating">${ratingText(game.rating)}</span>
        </div>
      </div>
    </button>
  `;
}

function renderGrid(container, games) {
  if (!container) return;
  container.innerHTML = games.map(posterCard).join("");
  container.querySelectorAll(".poster-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });
}

/* ---------- Modal ---------- */
let lastFocused = null;

function openModal(id) {
  const game = GAMES.find((g) => g.id === id);
  if (!game) return;
  const overlay = document.getElementById("game-modal");
  const content = document.getElementById("modal-content");
  if (!overlay || !content) return;

  content.innerHTML = `
    <div class="modal-poster">${game.poster}</div>
    <div class="modal-body">
      <button class="modal-close" id="modal-close-btn" aria-label="Close details">✕</button>
      <span class="eyebrow">${game.genre}</span>
      <h3>${game.title}</h3>
      <div class="rating">${ratingText(game.rating)} / 5</div>
      <p>${game.description}</p>
      <dl class="modal-facts">
        <div><dt>Publisher</dt><dd>${game.publisher}</dd></div>
        <div><dt>Release Year</dt><dd>${game.year}</dd></div>
        <div><dt>Platform</dt><dd>${game.platform}</dd></div>
        <div><dt>Players</dt><dd>${game.players}</dd></div>
      </dl>
    </div>
  `;

  lastFocused = document.activeElement;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  document.getElementById("modal-close-btn").focus();
}

function closeModal() {
  const overlay = document.getElementById("game-modal");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.addEventListener("click", (e) => {
  const overlay = document.getElementById("game-modal");
  if (overlay && e.target === overlay) closeModal();
});

/* ---------- Filtering (games.html) ---------- */
function initFilters() {
  const searchInput = document.getElementById("search-input");
  const genreSelect = document.getElementById("genre-select");
  const platformSelect = document.getElementById("platform-select");
  const grid = document.getElementById("game-grid");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");

  if (!grid) return;

  const genres = [...new Set(GAMES.map((g) => g.genre))].sort();
  const platforms = [...new Set(GAMES.map((g) => g.platform))].sort();

  genres.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    genreSelect.appendChild(opt);
  });

  platforms.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    platformSelect.appendChild(opt);
  });

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();
    const genre = genreSelect.value;
    const platform = platformSelect.value;

    const filtered = GAMES.filter((g) => {
      const matchesTerm = g.title.toLowerCase().includes(term);
      const matchesGenre = genre === "all" || g.genre === genre;
      const matchesPlatform = platform === "all" || g.platform === platform;
      return matchesTerm && matchesGenre && matchesPlatform;
    });

    renderGrid(grid, filtered);
    resultCount.textContent = `Showing ${filtered.length} of ${GAMES.length} titles`;
    emptyState.style.display = filtered.length === 0 ? "block" : "none";
    grid.style.display = filtered.length === 0 ? "none" : "grid";
  }

  searchInput.addEventListener("input", applyFilters);
  genreSelect.addEventListener("change", applyFilters);
  platformSelect.addEventListener("change", applyFilters);

  applyFilters();
}

/* ---------- Featured (index.html) ---------- */
function initFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const top = [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 4);
  renderGrid(grid, top);
}

/* ---------- Nav toggle (mobile) ---------- */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

/* ---------- Contact form (no backend — demo only) ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.getElementById("form-status");
    note.textContent = "Thanks! This is a static demo form, so nothing was actually sent.";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFeatured();
  initFilters();
  initContactForm();
});
