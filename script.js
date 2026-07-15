/* =========================================================
   GAMEVAULT — game database + interactions
   ========================================================= */

const GAMES = [
  {
    id: "botw",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Adventure",
    genreClass: "g-action",
    glyph: "Z",
    platform: "Nintendo Switch",
    year: 2017,
    publisher: "Nintendo",
    players: "Single-player",
    rating: 4.9,
    description: "An open-world adventure that hands players a huge kingdom and almost no instructions, rewarding curiosity, climbing, and creative problem-solving over a fixed story path."
  },
  {
    id: "minecraft",
    title: "Minecraft",
    genre: "Sandbox",
    genreClass: "g-sim",
    glyph: "M",
    platform: "Multi-platform",
    year: 2011,
    publisher: "Mojang Studios",
    players: "Single & Multiplayer",
    rating: 4.8,
    description: "A block-building sandbox where players mine resources, construct anything they can imagine, and survive against monsters across procedurally generated worlds."
  },
  {
    id: "witcher3",
    title: "The Witcher 3: Wild Hunt",
    genre: "Role-Playing",
    genreClass: "g-rpg",
    glyph: "W",
    platform: "Multi-platform",
    year: 2015,
    publisher: "CD Projekt",
    players: "Single-player",
    rating: 4.9,
    description: "A sprawling fantasy RPG following monster hunter Geralt of Rivia through morally grey quests, dense lore, and one of gaming's most memorable side-quest catalogs."
  },
  {
    id: "portal2",
    title: "Portal 2",
    genre: "Puzzle",
    genreClass: "g-puzzle",
    glyph: "P",
    platform: "Multi-platform",
    year: 2011,
    publisher: "Valve",
    players: "Single & Co-op",
    rating: 4.8,
    description: "A physics-based puzzle game built around a portal gun, sharp comedic writing, and test chambers that teach spatial reasoning without ever feeling like a tutorial."
  },
  {
    id: "stardew",
    title: "Stardew Valley",
    genre: "Simulation",
    genreClass: "g-sim",
    glyph: "S",
    platform: "Multi-platform",
    year: 2016,
    publisher: "ConcernedApe",
    players: "Single & Multiplayer",
    rating: 4.7,
    description: "A cozy farming sim where players inherit a rundown farm, build relationships with townsfolk, and slowly turn overgrown fields into a thriving homestead."
  },
  {
    id: "hades",
    title: "Hades",
    genre: "Roguelike",
    genreClass: "g-roguelike",
    glyph: "H",
    platform: "Multi-platform",
    year: 2020,
    publisher: "Supergiant Games",
    players: "Single-player",
    rating: 4.8,
    description: "A fast, stylish dungeon-crawler where the Prince of the Underworld fights his way out of Hell over and over, with every failed run deepening the story."
  },
  {
    id: "amongus",
    title: "Among Us",
    genre: "Party / Social Deduction",
    genreClass: "g-party",
    glyph: "A",
    platform: "Multi-platform",
    year: 2018,
    publisher: "Innersloth",
    players: "Multiplayer",
    rating: 4.2,
    description: "A social deduction game where crewmates complete tasks aboard a spaceship while hidden impostors sabotage and eliminate them without getting caught."
  },
  {
    id: "celeste",
    title: "Celeste",
    genre: "Platformer",
    genreClass: "g-platform",
    glyph: "C",
    platform: "Multi-platform",
    year: 2018,
    publisher: "Maddy Makes Games",
    players: "Single-player",
    rating: 4.7,
    description: "A precision platformer about climbing a mountain, pairing punishing but fair level design with an honest story about anxiety and self-doubt."
  },
  {
    id: "gow2018",
    title: "God of War",
    genre: "Action-Adventure",
    genreClass: "g-action",
    glyph: "G",
    platform: "PS4 / PC",
    year: 2018,
    publisher: "Santa Monica Studio",
    players: "Single-player",
    rating: 4.8,
    description: "A reinvention of the series that trades button-mashing combat for a slower, weightier axe-throwing brawler wrapped around a father-son story in Norse myth."
  },
  {
    id: "overwatch2",
    title: "Overwatch 2",
    genre: "Hero Shooter",
    genreClass: "g-shooter",
    glyph: "O",
    platform: "Multi-platform",
    year: 2022,
    publisher: "Blizzard Entertainment",
    players: "Multiplayer",
    rating: 4.0,
    description: "A team-based shooter built around a roster of heroes with unique abilities, where coordinating roles matters as much as individual aim."
  },
  {
    id: "acnh",
    title: "Animal Crossing: New Horizons",
    genre: "Simulation",
    genreClass: "g-sim",
    glyph: "N",
    platform: "Nintendo Switch",
    year: 2020,
    publisher: "Nintendo",
    players: "Single & Multiplayer",
    rating: 4.6,
    description: "A relaxed life-sim where players shape a deserted island in real time, decorating, fishing, and visiting friends' islands at their own pace."
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    genre: "Action RPG",
    genreClass: "g-rpg",
    glyph: "E",
    platform: "Multi-platform",
    year: 2022,
    publisher: "FromSoftware",
    players: "Single & Co-op",
    rating: 4.9,
    description: "A vast, unforgiving open-world RPG that pairs FromSoftware's brutal combat with a Lands Between shaped in part by fantasy author George R. R. Martin."
  }
];

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function cartridgeCard(game) {
  return `
    <button class="cartridge" data-id="${game.id}" aria-haspopup="dialog">
      <div class="cartridge-label ${game.genreClass}">
        <div class="cartridge-notch"></div>
        <span class="cartridge-glyph" aria-hidden="true">${game.glyph}</span>
      </div>
      <div class="cartridge-body">
        <h3>${game.title}</h3>
        <div class="cartridge-meta">
          <span>${game.year}</span>
          <span>&middot;</span>
          <span>${game.platform}</span>
        </div>
        <span class="tag">${game.genre}</span>
        <div class="rating" aria-label="Rating ${game.rating} out of 5">${starString(game.rating)}</div>
      </div>
    </button>
  `;
}

function renderGrid(container, games) {
  if (!container) return;
  container.innerHTML = games.map(cartridgeCard).join("");
  container.querySelectorAll(".cartridge").forEach((card) => {
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
    <button class="modal-close" id="modal-close-btn" aria-label="Close details">✕</button>
    <div class="modal-badge ${game.genreClass}">
      <span class="cartridge-glyph" aria-hidden="true">${game.glyph}</span>
    </div>
    <span class="eyebrow">${game.genre}</span>
    <h3>${game.title}</h3>
    <div class="rating" aria-label="Rating ${game.rating} out of 5">${starString(game.rating)}</div>
    <p>${game.description}</p>
    <dl class="modal-facts">
      <div><dt>Publisher</dt><dd>${game.publisher}</dd></div>
      <div><dt>Release Year</dt><dd>${game.year}</dd></div>
      <div><dt>Platform</dt><dd>${game.platform}</dd></div>
      <div><dt>Players</dt><dd>${game.players}</dd></div>
    </dl>
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

  // populate genre + platform dropdowns from data
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
