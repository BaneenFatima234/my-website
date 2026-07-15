/* =========================================================
   GAMEVAULT — gaming platform edition
   Game database (with real poster art), search/filter,
   homepage spotlight, and the game detail page renderer
   ========================================================= */

const GAMES = [
  {
    id: "zelda",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-Adventure",
    platform: "Nintendo Switch",
    year: 2017,
    releaseDate: "March 3, 2017",
    publisher: "Nintendo",
    developer: "Nintendo EPD",
    players: "Single-player",
    rating: 4.9,
    poster: "zelda.jpg",
    description: "An open-world adventure that hands players a huge kingdom and almost no instructions, rewarding curiosity, climbing, and creative problem-solving over a fixed story path.",
    reqType: "console",
    requirements: {
      platform: "Nintendo Switch (any model)",
      storage: "13.4 GB free space",
      extras: "Online features require a Nintendo Switch Online membership"
    }
  },
  {
    id: "minecraft",
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    year: 2011,
    releaseDate: "November 18, 2011",
    publisher: "Mojang Studios",
    developer: "Mojang Studios",
    players: "Single & Multiplayer",
    rating: 4.8,
    poster: "minecraft.jpg",
    description: "A block-building sandbox where players mine resources, construct anything they can imagine, and survive against monsters across procedurally generated worlds.",
    reqType: "pc",
    requirements: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i3-3210 / AMD A8-7600",
      memory: "4 GB RAM",
      graphics: "Intel HD 4000 / AMD Radeon R5",
      storage: "1 GB available space"
    }
  },
  {
    id: "witcher3",
    title: "The Witcher 3: Wild Hunt",
    genre: "Role-Playing",
    platform: "Multi-platform",
    year: 2015,
    releaseDate: "May 19, 2015",
    publisher: "CD Projekt",
    developer: "CD Projekt Red",
    players: "Single-player",
    rating: 4.9,
    poster: "witcher3.jpg",
    description: "A sprawling fantasy RPG following monster hunter Geralt of Rivia through morally grey quests, dense lore, and one of gaming's most memorable side-quest catalogs.",
    reqType: "pc",
    requirements: {
      os: "Windows 7/8/10 64-bit",
      processor: "Intel Core i5-2500K / AMD Phenom II X4 940",
      memory: "6 GB RAM",
      graphics: "Nvidia GTX 660 / AMD Radeon HD 7870",
      storage: "50 GB available space"
    }
  },
  {
    id: "portal2",
    title: "Portal 2",
    genre: "Puzzle",
    platform: "Multi-platform",
    year: 2011,
    releaseDate: "April 19, 2011",
    publisher: "Valve",
    developer: "Valve",
    players: "Single & Co-op",
    rating: 4.8,
    poster: "portal2.jpg",
    description: "A physics-based puzzle game built around a portal gun, sharp comedic writing, and test chambers that teach spatial reasoning without ever feeling like a tutorial.",
    reqType: "pc",
    requirements: {
      os: "Windows 7 / macOS / Linux",
      processor: "1.7 GHz dual-core",
      memory: "2 GB RAM",
      graphics: "DirectX 9-compatible, 128 MB VRAM",
      storage: "8 GB available space"
    }
  },
  {
    id: "stardew",
    title: "Stardew Valley",
    genre: "Simulation",
    platform: "Multi-platform",
    year: 2016,
    releaseDate: "February 26, 2016",
    publisher: "ConcernedApe",
    developer: "ConcernedApe",
    players: "Single & Multiplayer",
    rating: 4.7,
    poster: "stardew.jpg",
    description: "A cozy farming sim where players inherit a rundown farm, build relationships with townsfolk, and slowly turn overgrown fields into a thriving homestead.",
    reqType: "pc",
    requirements: {
      os: "Windows 10 / macOS / Linux",
      processor: "2 GHz",
      memory: "2 GB RAM",
      graphics: "256 MB video memory, shader model 3.0+",
      storage: "500 MB available space"
    }
  },
  {
    id: "hades",
    title: "Hades",
    genre: "Roguelike",
    platform: "Multi-platform",
    year: 2020,
    releaseDate: "September 17, 2020",
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    players: "Single-player",
    rating: 4.8,
    poster: "hades.jpg",
    description: "A fast, stylish dungeon-crawler where the Prince of the Underworld fights his way out of Hell over and over, with every failed run deepening the story.",
    reqType: "pc",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i3 or better",
      memory: "4 GB RAM",
      graphics: "Nvidia GeForce 9800 GTX or better",
      storage: "10 GB available space"
    }
  },
  {
    id: "amongus",
    title: "Among Us",
    genre: "Party / Social Deduction",
    platform: "Multi-platform",
    year: 2018,
    releaseDate: "June 15, 2018",
    publisher: "Innersloth",
    developer: "Innersloth",
    players: "Multiplayer",
    rating: 4.2,
    poster: "amongus.jpg",
    description: "A social deduction game where crewmates complete tasks aboard a spaceship while hidden impostors sabotage and eliminate them without getting caught.",
    reqType: "pc",
    requirements: {
      os: "Windows 7 or later",
      processor: "Dual-core 2.0 GHz",
      memory: "2 GB RAM",
      graphics: "Integrated graphics acceptable",
      storage: "250 MB available space"
    }
  },
  {
    id: "celeste",
    title: "Celeste",
    genre: "Platformer",
    platform: "Multi-platform",
    year: 2018,
    releaseDate: "January 25, 2018",
    publisher: "Maddy Makes Games",
    developer: "Maddy Makes Games",
    players: "Single-player",
    rating: 4.7,
    poster: "celeste.jpg",
    description: "A precision platformer about climbing a mountain, pairing punishing but fair level design with an honest story about anxiety and self-doubt.",
    reqType: "pc",
    requirements: {
      os: "Windows 7 64-bit or later",
      processor: "Dual-core 2.0 GHz",
      memory: "4 GB RAM",
      graphics: "Shader model 3.0 capable",
      storage: "1 GB available space"
    }
  },
  {
    id: "gow",
    title: "God of War",
    genre: "Action-Adventure",
    platform: "PS4 / PC",
    year: 2018,
    releaseDate: "April 20, 2018 (PC: January 14, 2022)",
    publisher: "Santa Monica Studio",
    developer: "Santa Monica Studio",
    players: "Single-player",
    rating: 4.8,
    poster: "godofwar.jpg",
    description: "A reinvention of the series that trades button-mashing combat for a slower, weightier axe-throwing brawler wrapped around a father-son story in Norse myth.",
    reqType: "pc",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-2500k / AMD Ryzen 3 1200",
      memory: "8 GB RAM",
      graphics: "Nvidia GTX 960 / AMD R9 290X",
      storage: "70 GB available space"
    }
  },
  {
    id: "overwatch2",
    title: "Overwatch 2",
    genre: "Hero Shooter",
    platform: "Multi-platform",
    year: 2022,
    releaseDate: "October 4, 2022",
    publisher: "Blizzard Entertainment",
    developer: "Blizzard Entertainment",
    players: "Multiplayer",
    rating: 4.0,
    poster: "overwatch.jpg",
    description: "A team-based shooter built around a roster of heroes with unique abilities, where coordinating roles matters as much as individual aim.",
    reqType: "pc",
    requirements: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i3 or AMD Phenom X3 8650",
      memory: "6 GB RAM",
      graphics: "Nvidia GTX 600 series / AMD HD 7000 series",
      storage: "50 GB available space"
    }
  },
  {
    id: "acnh",
    title: "Animal Crossing: New Horizons",
    genre: "Simulation",
    platform: "Nintendo Switch",
    year: 2020,
    releaseDate: "March 20, 2020",
    publisher: "Nintendo",
    developer: "Nintendo EPD",
    players: "Single & Multiplayer",
    rating: 4.6,
    poster: "animalcrossing.jpg",
    description: "A relaxed life-sim where players shape a deserted island in real time, decorating, fishing, and visiting friends' islands at their own pace.",
    reqType: "console",
    requirements: {
      platform: "Nintendo Switch (any model)",
      storage: "6.2 GB free space",
      extras: "Online multiplayer requires a Nintendo Switch Online membership"
    }
  },
  {
    id: "eldenring",
    title: "Elden Ring",
    genre: "Action RPG",
    platform: "Multi-platform",
    year: 2022,
    releaseDate: "February 25, 2022",
    publisher: "Bandai Namco Entertainment",
    developer: "FromSoftware",
    players: "Single & Co-op",
    rating: 4.9,
    poster: "eldenring.jpg",
    description: "A vast, unforgiving open-world RPG that pairs FromSoftware's brutal combat with a Lands Between shaped in part by fantasy author George R. R. Martin.",
    reqType: "pc",
    requirements: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      memory: "12 GB RAM",
      graphics: "Nvidia GTX 1060 3GB / AMD RX 580 4GB",
      storage: "60 GB available space"
    }
  }
];

/* ---------- Card rendering (index + games pages) ---------- */
function gameCard(game) {
  return `
    <a class="game-card" href="game.html?id=${game.id}">
      <div class="card-frame">
        <img src="${game.poster}" alt="${game.title} poster" loading="lazy">
        <span class="card-rating">★ ${game.rating.toFixed(1)}</span>
      </div>
      <div class="card-info">
        <h3>${game.title}</h3>
        <div class="card-meta">
          <span>${game.year}</span>
          <span>&middot;</span>
          <span>${game.genre}</span>
        </div>
      </div>
    </a>
  `;
}

function renderGrid(container, games) {
  if (!container) return;
  container.innerHTML = games.map(gameCard).join("");
}

/* ---------- Spotlight hero (index.html) ---------- */
function initSpotlight() {
  const media = document.getElementById("spotlight-media");
  const cta = document.getElementById("spotlight-cta");
  if (!media) return;
  const top = [...GAMES].sort((a, b) => b.rating - a.rating)[0];

  media.innerHTML = `
    <span class="spotlight-badge">★ ${top.rating.toFixed(1)} &middot; #1 Rated</span>
    <img src="${top.poster}" alt="${top.title} poster">
    <div class="spotlight-caption">
      <h3>${top.title}</h3>
      <span>${top.genre} &middot; ${top.year}</span>
    </div>
  `;

  const posterLink = document.getElementById("spotlight-link");
  if (posterLink) posterLink.href = `game.html?id=${top.id}`;
  if (cta) cta.href = `game.html?id=${top.id}`;
}

/* ---------- Featured (index.html) ---------- */
function initFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const top = [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 4);
  renderGrid(grid, top);
}

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

/* ---------- Game detail page (game.html?id=...) ---------- */
function requirementsRows(game) {
  if (game.reqType === "console") {
    return `
      <tr><td>Platform</td><td>${game.requirements.platform}</td></tr>
      <tr><td>Storage</td><td>${game.requirements.storage}</td></tr>
      <tr><td>Extras</td><td>${game.requirements.extras}</td></tr>
    `;
  }
  const r = game.requirements;
  return `
    <tr><td>OS</td><td>${r.os}</td></tr>
    <tr><td>Processor</td><td>${r.processor}</td></tr>
    <tr><td>Memory</td><td>${r.memory}</td></tr>
    <tr><td>Graphics</td><td>${r.graphics}</td></tr>
    <tr><td>Storage</td><td>${r.storage}</td></tr>
  `;
}

function initDetailPage() {
  const root = document.getElementById("detail-content");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const index = GAMES.findIndex((g) => g.id === id);

  if (index === -1) {
    root.innerHTML = `
      <p class="eyebrow">Not found</p>
      <h1>We couldn't find that title</h1>
      <p>The game you're looking for isn't in the database. Head back and pick one from the catalog.</p>
      <a class="btn btn-primary" href="games.html">Back to Browse</a>
    `;
    return;
  }

  const game = GAMES[index];
  const prev = GAMES[(index - 1 + GAMES.length) % GAMES.length];
  const next = GAMES[(index + 1) % GAMES.length];

  document.title = `${game.title} — GameVault`;

  root.innerHTML = `
    <a class="back-link" href="games.html">&larr; Back to Browse</a>
    <div class="detail-grid">
      <div class="detail-poster">
        <img src="${game.poster}" alt="${game.title} poster">
      </div>
      <div>
        <span class="eyebrow">${game.genre}</span>
        <h1>${game.title}</h1>
        <div class="detail-tags">
          <span class="pill pill-accent">${game.platform}</span>
          <span class="pill">${game.year}</span>
          <span class="pill">${game.players}</span>
        </div>
        <div class="detail-rating">★ ${game.rating.toFixed(1)} / 5</div>
        <p class="detail-description">${game.description}</p>

        <div class="fact-grid">
          <div class="fact-card"><dt>Publisher</dt><dd>${game.publisher}</dd></div>
          <div class="fact-card"><dt>Developer</dt><dd>${game.developer}</dd></div>
          <div class="fact-card"><dt>Release Date</dt><dd>${game.releaseDate}</dd></div>
          <div class="fact-card"><dt>Players</dt><dd>${game.players}</dd></div>
        </div>

        <h2>${game.reqType === "console" ? "Platform Requirements" : "System Requirements"}</h2>
        <table class="req-table">
          ${requirementsRows(game)}
        </table>
        <p class="req-note">Approximate minimum requirements for a typical setup — provided for reference as part of a class project.</p>

        <div class="detail-nav">
          <a href="game.html?id=${prev.id}">&larr; ${prev.title}</a>
          <a href="game.html?id=${next.id}">${next.title} &rarr;</a>
        </div>
      </div>
    </div>
  `;
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
  initSpotlight();
  initFeatured();
  initFilters();
  initDetailPage();
  initContactForm();
});
