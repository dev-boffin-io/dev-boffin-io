(() => {
  'use strict';

  /* ── Config ─────────────────────────────────────────────── */
  const CONFIG = {
    owner: 'dev-boffin-io',
    email: '',              // e.g. 'hello@yourdomain.com' — empty hides the button
    exclude: [],            // repo names to hide from the live list
    cacheKey: 'dbio-repos-v1',
    cacheTTL: 15 * 60 * 1000, // 15 minutes
  };

  /* ── Curated metadata (merged with live GitHub data) ───── */
  const CURATED = {
    'ollama-forge':   { group: 'forge', icon: '🤖', lang: 'JavaScript', tags: ['ollama', 'web-ui', 'cli', 'zero-dependency', 'single-binary'],
      desc: 'Zero-dependency web UI + CLI manager for Ollama — start/stop the server, browse, pull, create, push and remove models, chat with them, sign in to ollama.com and install/upgrade the Ollama binary. Compiles to one self-contained executable.' },
    'ollama-forge-studio': { group: 'other', icon: '🎨', lang: 'JavaScript', tags: ['agentic', 'coding', 'ollama', 'vibe-coder', 'zero-dependency'],
      desc: 'Vibe Coder — an agentic coding studio for any Ollama endpoint. Build, plan, general and explore agents; saved and resumable sessions; tools, MCP, LSP, skills, web tools and snapshots. Works in whatever directory you launch it; zero runtime dependencies.' },
    'forgejo-forge':  { group: 'forge', icon: '🦊', lang: 'Go', tags: ['forgejo', 'self-hosted', 'git'],
      desc: 'CLI and desktop suite for managing a self-hosted Forgejo instance — lifecycle control, logs and package registries. Works on Linux (systemd and proot-Termux), Windows and macOS.' },
    'cloud-forge':    { group: 'forge', icon: '☁️', lang: 'Python', tags: ['sftp', 'rclone', 'self-hosted'],
      desc: 'Turn any rclone remote (Google Drive, Dropbox, S3, Mega…) into a scriptable SFTP endpoint, with a GUI and system tray.' },
    'tunnel-forge':   { group: 'forge', icon: '🚇', lang: 'Python', tags: ['cloudflare', 'tunnel', 'networking'],
      desc: 'Cloudflared tunnel manager with a modular GUI — worker threads, retry-with-backoff and persistent config.' },
    'virt-forge':     { group: 'forge', icon: '🖥️', lang: 'Go', tags: ['qemu', 'kvm', 'arm64'],
      desc: 'QEMU/KVM virtual machine manager for power users — snapshots, live migration and multi-arch targets.' },
    'sftp-forge':     { group: 'forge', icon: '🔒', lang: 'Dart', tags: ['sftp', 'ssh', 'android'],
      desc: 'Secure SFTP file transfer and remote file management. Rewritten in Flutter — runs on Linux and Android.' },
    'qbit-forge':     { group: 'forge', icon: '⚡', lang: 'Go', tags: ['qbittorrent', 'debian', 'arm64'],
      desc: 'Tray-managed, single-instance manager for qbittorrent-nox with a GTK WebView launcher. ARM64 and proot-Termux support.' },
    'llama-forge':    { group: 'forge', icon: '🦙', lang: 'C++', tags: ['llama-cpp', 'local-ai', 'fork'],
      desc: 'Desktop GUI for llama.cpp on Linux and Windows — chat, quantize, convert and inference. A fork of ggml-org/llama.cpp with a custom GUI layer.' },
    'ssh-forge':      { group: 'forge', icon: '🔑', lang: 'Go', tags: ['ssh', 'cli', 'devops'],
      desc: 'Passwordless SSH manager with named profiles, key setup, a Doctor diagnostic and a GTK3/VTE tabbed terminal.' },
    'share-forge':    { group: 'forge', icon: '📡', lang: 'Python', tags: ['file-sharing', 'lan', 'flask'],
      desc: 'Zero-config LAN file sharing with a Flask backend — drag-and-drop uploads, forced downloads and a dark UI.' },
    'py-forge':       { group: 'forge', icon: '🐍', lang: 'Python', tags: ['python', 'learning', 'editor'],
      desc: 'Python learning and dev environment in one GUI — a typing trainer, a code editor with run/stop and a Python version manager.' },
    'funnel-forge':   { group: 'forge', icon: '🌐', lang: 'Python', tags: ['tailscale', 'funnel', 'self-hosted'],
      desc: 'One-click Tailscale Funnel manager — expose a local server publicly without port-forwarding.' },
    'gh-forge':       { group: 'forge', icon: '🔧', lang: 'Python', tags: ['git', 'github-actions', 'gh-cli'],
      desc: 'Multi-remote Git manager plus a gh-CLI-powered GitHub Actions manager for workflow runs and cache/artifact cleanup.' },
    'mind-forge-pro': { group: 'android', icon: '🧠', lang: 'Dart', tags: ['android', 'local-ai', 'rag'],
      desc: 'Offline agentic AI assistant for Android — native llama.cpp, Flutter and local RAG. Nothing leaves the phone.' },
    'vm-forge':       { group: 'android', icon: '🖥️', lang: 'Kotlin', tags: ['android', 'qemu', 'arm64'],
      desc: 'Native QEMU launcher for Android — runs ARM64 Linux VMs on-device without root.' },
    'terminal-forge': { group: 'android', icon: '💻', lang: 'C', tags: ['android', 'terminal', 'debian', 'kali'],
      desc: 'Material 3 Android terminal emulator built on Termux TerminalView — virtual keys, multiple sessions, and Debian, Alpine and Kali NetHunter rootfs sessions. A fork of ReTerminal.' },
    'Linux-core-identity-manager': { group: 'other', icon: '🛡️', lang: 'Python', tags: ['security', 'user-management', 'proot'],
      desc: 'PyQt6 GUI for Linux user accounts — lock/unlock, sudo management. Works on desktop and inside proot/Termux.' },
    'agent-forge-studio': { group: 'other', icon: '🧭', lang: 'JavaScript', tags: ['ai-agent', 'ollama', 'browser-automation', 'content-creation'],
      desc: 'Autonomous agent assistant for any Ollama/OpenAI-compatible endpoint — research, planning, content creation, scripts, edit decision lists, retention analysis and browser automation, with direct YouTube, Instagram, Facebook and Google operation. Only dependency: Playwright, loaded on demand.' },
    'dev-boffin-io':  { group: 'other', icon: '🌐', lang: 'HTML', tags: ['portfolio', 'profile'],
      desc: 'Profile and portfolio hub — the home of the Forge Suite.' },
    'proot-forge':    { group: 'other', icon: '📦', lang: 'C', local: true,
      desc: 'Proot Forge Android APK' },
  };

  const LANG_COLORS = {
    Python: '#3572a5', Go: '#00add8', 'C++': '#f34b7d', Dart: '#00b4ab',
    Kotlin: '#7f52ff', HTML: '#e34c26', Shell: '#89e051', C: '#555555', JavaScript: '#f1e05a',
  };

  const GROUPS = {
    forge:   { grid: 'grid-forge',   section: 'grid-forge',   count: 'c-forge' },
    android: { grid: 'grid-android', section: 'grid-android', count: 'c-android' },
    other:   { grid: 'grid-other',   section: 'grid-other',   count: 'c-other' },
  };

  const state = { repos: [], lang: 'all', query: '', sort: 'updated', syncedAt: null };

  /* ── Helpers ────────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);

  function h(tag, attrs = {}, ...kids) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v === true ? '' : String(v));
    }
    node.append(
      ...kids.flat()
        .filter((c) => c !== null && c !== undefined && c !== false)
        .map((c) => (c instanceof Node ? c : document.createTextNode(String(c))))
    );
    return node;
  }

  function timeAgo(iso) {
    const secs = (Date.now() - new Date(iso).getTime()) / 1000;
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [name, size] of units) {
      const n = Math.floor(secs / size);
      if (n >= 1) return `${n} ${name}${n > 1 ? 's' : ''} ago`;
    }
    return 'just now';
  }

  const setText = (sel, value) => { const el = $(sel); if (el) el.textContent = value; };
  const setStatus = (msg) => setText('#status', msg);

  /* ── Data ───────────────────────────────────────────────── */
  function normalize(r) {
    const meta = CURATED[r.name] || {};
    const isLocal = meta.local === true;
    return {
      name: r.name,
      url: isLocal 
        ? `https://git.bowfin-pleco.ts.net/dev-boffin-io/${r.name}`
        : r.html_url,
      desc: meta.desc || r.description || 'No description yet.',
      icon: meta.icon || '📦',
      tags: meta.tags || (r.topics || []).slice(0, 4),
      group: meta.group || 'other',
      lang: r.language || meta.lang || null,
      stars: r.stargazers_count ?? null,
      updated: r.pushed_at || null,
      fork: Boolean(r.fork),
      isLocal: isLocal
    };
  }

  // Static snapshot, used first and as a fallback if GitHub is unreachable.
  function fallbackRepos() {
    return Object.entries(CURATED).map(([name, m]) => {
      const isLocal = m.local === true;
      return {
        name,
        html_url: isLocal 
          ? `https://git.bowfin-pleco.ts.net/dev-boffin-io/${name}`
          : `https://github.com/${CONFIG.owner}/${name}`,
        description: m.desc || null,
        language: m.lang,
        stargazers_count: null,
        pushed_at: null,
        fork: ['llama-forge', 'terminal-forge'].includes(name),
        archived: false,
        topics: m.tags || [],
        isLocal: isLocal
      };
    });
  }

  function readCache() {
    try {
      const cached = JSON.parse(localStorage.getItem(CONFIG.cacheKey) || 'null');
      if (cached && Date.now() - cached.at < CONFIG.cacheTTL) return cached;
    } catch (_) { /* storage blocked or corrupt — ignore */ }
    return null;
  }

  function writeCache(data) {
    try { localStorage.setItem(CONFIG.cacheKey, JSON.stringify(data)); } catch (_) { /* ignore */ }
  }

  async function fetchLive() {
    const cached = readCache();
    if (cached) return cached;

    const base = `https://api.github.com/users/${CONFIG.owner}`;
    const get = async (url) => {
      const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      return res.json();
    };

    const [user, repos] = await Promise.all([
      get(base),
      get(`${base}/repos?per_page=100&sort=pushed&type=owner`),
    ]);

    const data = { user, repos, at: Date.now() };
    writeCache(data);
    return data;
  }

  /* ── Filtering & sorting ────────────────────────────────── */
  function visibleRepos() {
    const q = state.query.trim().toLowerCase();

    const items = state.repos.filter((r) => {
      if (state.lang !== 'all' && r.lang !== state.lang) return false;
      if (!q) return true;
      return [r.name, r.desc, r.lang, ...r.tags].filter(Boolean).join(' ').toLowerCase().includes(q);
    });

    const comparators = {
      updated: (a, b) => (b.updated || '').localeCompare(a.updated || ''),
      stars:   (a, b) => (b.stars ?? -1) - (a.stars ?? -1),
      name:    (a, b) => a.name.localeCompare(b.name),
    };
    return items.sort(comparators[state.sort]);
  }

  /* ── Rendering ──────────────────────────────────────────── */
  function card(r) {
    const color = LANG_COLORS[r.lang] || '#6a7890';
    return h('article', { class: 'card', style: `--accent-c:${color}` },
      h('div', { class: 'card-top' },
        h('div', { class: 'card-title' },
          h('a', { class: 'card-name', href: r.url, target: '_blank', rel: 'noopener', text: r.name }),
          r.group === 'forge' ? h('span', { class: 'pill', text: 'forge suite' }) : null,
          r.group === 'android' ? h('span', { class: 'pill pill-android', text: 'android' }) : null,
          r.fork ? h('span', { class: 'pill pill-warn', text: 'fork' }) : null,
          r.isLocal ? h('span', { class: 'pill', style: 'border-color: var(--accent2); color: var(--accent2);', text: 'local' }) : null,
        ),
        h('span', { class: 'card-icon', 'aria-hidden': 'true', text: r.icon }),
      ),
      h('p', { class: 'card-desc', text: r.desc }),
      h('ul', { class: 'tags' }, r.tags.map((t) => h('li', { class: 'tag', text: t }))),
      h('div', { class: 'card-foot' },
        h('div', { class: 'meta' },
          h('span', { class: 'dot', style: `background:${color}` }),
          h('span', { text: r.lang || 'Mixed' }),
          r.stars !== null ? h('span', { text: `★ ${r.stars}` }) : null,
          r.updated ? h('span', { text: `updated ${timeAgo(r.updated)}` }) : null,
        ),
        h('a', { class: 'card-link', href: r.url, target: '_blank', rel: 'noopener', text: 'View repo →',
          'aria-label': `View ${r.name} on ${r.isLocal ? 'local git' : 'GitHub'}` }),
      ),
    );
  }

  function renderChips() {
    const host = $('#lang-chips');
    if (!host) return;

    const counts = new Map();
    state.repos.forEach((r) => { if (r.lang) counts.set(r.lang, (counts.get(r.lang) || 0) + 1); });
    const langs = [...counts.entries()].sort((a, b) => b[1] - a[1]);

    const chip = (value, label, n) => {
      const btn = h('button', { type: 'button', class: 'chip', 'aria-pressed': String(state.lang === value), text: `${label} ${n}` });
      btn.addEventListener('click', () => { state.lang = value; render(); });
      return btn;
    };

    host.replaceChildren(
      chip('all', 'all', state.repos.length),
      ...langs.map(([lang, n]) => chip(lang, lang, n)),
    );
  }

  function render() {
    const list = visibleRepos();

    for (const [group, ids] of Object.entries(GROUPS)) {
      const grid = $(`#${ids.grid}`);
      if (!grid) continue;
      const items = list.filter((r) => r.group === group);
      grid.replaceChildren(...items.map(card));
      setText(`#${ids.count}`, items.length);
      const section = $(`#${ids.section}`);
      if (section) section.closest('section').hidden = items.length === 0;
    }

    const empty = $('#empty');
    if (empty) empty.hidden = list.length !== 0;
    renderChips();
    setText('#stat-forge', state.repos.filter((r) => r.group === 'forge').length);
  }

  /* ── Init ───────────────────────────────────────────────── */
  function bindControls() {
    const search = $('#search');
    const sort = $('#sort');
    if (search) search.addEventListener('input', (e) => { state.query = e.target.value; render(); });
    if (sort) sort.addEventListener('change', (e) => { state.sort = e.target.value; render(); });
  }

  async function init() {
    setText('#year', new Date().getFullYear());

    if (CONFIG.email) {
      const mail = $('#mail');
      if (mail) {
        mail.href = `mailto:${CONFIG.email}`;
        mail.textContent = 'Email';
        mail.hidden = false;
      }
    }

    bindControls();

    state.repos = fallbackRepos().map(normalize);
    render();
    setStatus('Showing curated list · fetching live data from GitHub…');

    try {
      const { user, repos, at } = await fetchLive();

      const live = repos
        .filter((r) => !CONFIG.exclude.includes(r.name))
        .filter((r) => CURATED[r.name] || (!r.fork && !r.archived))
        .map(normalize);

      const localOnly = fallbackRepos()
        .filter((r) => CURATED[r.name]?.local)
        .map(normalize)
        .filter((r) => !live.some((x) => x.name === r.name));

      state.repos = [...live, ...localOnly];

      const ownStars = repos
        .filter((r) => !r.fork)
        .reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

      if ($('#stat-repos')) setText('#stat-repos', user.public_repos);
      if ($('#stat-stars')) setText('#stat-stars', ownStars);
      if ($('#stat-followers')) setText('#stat-followers', user.followers);

      const time = new Date(at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setStatus(`Live from GitHub · synced ${time}`);
    } catch (err) {
      if ($('#stat-repos')) setText('#stat-repos', state.repos.length);
      setStatus(`Offline snapshot — couldn't reach GitHub (${err.message}).`);
    }

    render();
  }

  init();
})();
