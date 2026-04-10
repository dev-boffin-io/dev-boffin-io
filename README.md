<h1 align="center">Hi, I'm Boffin 👋</h1>

<p align="center">
  <strong>Independent Open Source Developer · Linux Enthusiast · Privacy Advocate</strong><br>
  <em>Crafting clean, fast, offline-first desktop &amp; CLI tools that solve real problems.</em><br>
  Building the <strong>Forge Suite</strong> — 8 developer productivity tools for Linux power users.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white" />
  <img src="https://img.shields.io/badge/Qt-41CD52?logo=qt&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" />
  <img src="https://img.shields.io/badge/Local_AI-FF6A00?logoColor=white" />
  <img src="https://img.shields.io/badge/Shell_Scripting-4EAA25?logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/QEMU-FF6600?logoColor=white" />
  <img src="https://img.shields.io/badge/rclone-3D4FC4?logoColor=white" />
  <img src="https://img.shields.io/badge/100%25_Open_Source-4CAF50?logo=opensource&logoColor=white" />
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=dev-boffin-io&color=blueviolet&style=flat-square&label=Profile+Views" />
</p>

---

## 👨‍💻 About Me

Self-taught developer. I turn complex, painful workflows into simple, beautiful tools.

My philosophy: **software should be lightweight, offline-first, and respect user privacy.** No telemetry. No bloat. No cloud lock-in.

Every project starts as a solution to my own frustration with existing tools on Linux — once it works well enough for me, I open-source it.

- 🔒 **Privacy-first** — your data stays on your machine
- ⚡ **Performance** — startup in milliseconds, not seconds
- 🎯 **Minimal dependencies** — ship as AppImage or single binary whenever possible
- 🐧 **Linux as a first-class platform** — not an afterthought
- 🤝 **Open source by default** — MIT-licensed and contribution-friendly

> *"The best tool is the one you actually use."*

---

## ⚒️ The Forge Suite

> **8 privacy-first, offline-first tools** — all targeting Debian Linux, ARM64, and proot-Termux.

| # | Tool | Category | Stack |
|---|------|----------|-------|
| 1 | [🤖 ollama-forge](#-ollama-forge) | Local AI | Python · PyQt5 |
| 2 | [🦊 forgejo-forge](#-forgejo-forge) | Git / DevOps | Go · PyQt6 |
| 3 | [☁️ cloud-forge](#️-cloud-forge) | Cloud / Storage | Go · Python · PyQt5 |
| 4 | [🚇 tunnel-forge](#-tunnel-forge) | Networking | Python · PyQt6 |
| 5 | [🖥️ virt-forge](#️-virt-forge) | Virtualization | Go · Python · PyQt6 |
| 6 | [🔒 sftp-forge](#-sftp-forge) | File Transfer | Python · PyQt6 |
| 7 | [⚡ qbit-forge](#-qbit-forge) | Downloads | Go · Python |
| 8 | [🦙 llama-forge](#-llama-forge) | Local AI | C++ · Python |

---

### 🤖 [ollama-forge](https://github.com/dev-boffin-io/ollama-forge)
> *Powerful local AI desktop app — fully offline, fully yours.*

Feature-rich PyQt5 GUI for [Ollama](https://ollama.com). Full LLM power without sending a byte to the cloud. Includes a Chainlit + terminal REPL `dev-assist` component for AI-powered DevOps workflows.

**Key Features:** Multi-turn chat · RAG knowledge base · Multi-agent Crew system · Model Manager · `dev-assist` AI DevOps REPL · SQLite schema migration · AppImage packaging

**Tech:** `Python` · `PyQt5` · `Ollama REST API` · `Chainlit` · `PyInstaller`

---

### 🦊 [forgejo-forge](https://github.com/dev-boffin-io/forgejo-forge)
> *Self-hosted Forgejo — fully managed from CLI or GUI.*

Go CLI + PyQt6 GUI suite for managing a self-hosted Forgejo instance. Supports both systemd and proot-Termux modes. Includes Forge Drive — a Flask frontend proxying the Forgejo REST API with a GitHub-style dark UI.

**Key Features:** Full lifecycle control (start/stop/logs) · Forgejo REST API proxy (Forge Drive) · proot + systemd dual-mode · Runtime-configurable settings · Package registry management

**Tech:** `Go` · `Python` · `PyQt6` · `Flask` · `Forgejo REST API`

---

### ☁️ [cloud-forge](https://github.com/dev-boffin-io/cloud-forge)
> *Mount any cloud storage as SFTP in one click.*

Turn Google Drive, Dropbox, S3, Mega — any rclone remote — into a scriptable SFTP endpoint. Go CLI backend with PyQt5 GUI and system tray integration. Modular 8-file architecture with fixed OAuth flows.

**Key Features:** OAuth2 flow · Remote creation wizard · System tray · 8-module GUI · ARM64/Termux support

**Tech:** `Go` · `Python` · `PyQt5` · `rclone` · `PyInstaller`

---

### 🚇 [tunnel-forge](https://github.com/dev-boffin-io/tunnel-forge)
> *Cloudflared tunnel management — clean, modular, reliable.*

Modular 13-file PyQt6 GUI manager for Cloudflared tunnels. QThread signal-based worker decoupling, retry-with-backoff, persistent config, and platform-safe process termination.

**Key Features:** Modular 13-file architecture · QThread signal workers · Retry-with-backoff · One-click tunnel start/stop · Persistent config

**Tech:** `Python` · `PyQt6` · `cloudflared`

---

### 🖥️ [virt-forge](https://github.com/dev-boffin-io/virt-forge)
> *Modern QEMU VM manager for power users.*

Full-featured VM manager on QEMU/KVM with PyQt6 GUI and Go CLI. No overhead of GNOME Boxes or Virt-Manager. Supports live migration, snapshots, and multi-arch targets.

**Key Features:** Disk snapshots · Live migration · VNC/SPICE display · Multi-arch (x86_64, ARM64, RISC-V)

**Tech:** `Go` · `Python` · `PyQt6` · `QEMU` · `Shell`

---

### 🔒 [sftp-forge](https://github.com/dev-boffin-io/sftp-forge)
> *The SFTP client that gets out of your way.*

Lightweight SFTP automation toolkit with batch transfers, auto-sync, sshfs mounting, and a single-file PyQt6 dark UI. QThread-safe design throughout.

**Key Features:** Batch transfers · Auto-sync rules · Named remotes · sshfs mounting · QThread-safe design

**Tech:** `Python` · `PyQt6` · `sshfs` · `paramiko`

---

### ⚡ [qbit-forge](https://github.com/dev-boffin-io/qbit-forge)
> *qbittorrent-nox — tray-managed, privacy-first.*

Single-instance PyQt6 system-tray manager for qbittorrent-nox. PTY-based password capture, `fcntl` single-instance lock, and a separate GTK WebView launcher. Full ARM64 + proot-Termux support.

**Key Features:** Single-instance lock (`fcntl`) · PTY password capture · System tray · `qb-webui` GTK WebView launcher · proot + ARM64 support

**Tech:** `Go` · `Python` · `PyQt6` · `GTK`

---

### 🦙 [llama-forge](https://github.com/dev-boffin-io/llama-forge)
> *llama.cpp on Linux — with a proper desktop GUI.*

Local LLM desktop GUI for llama.cpp. Pure C/C++ engine. Refactored into a Python package with CMake-based PyInstaller build, deadlock-free subprocess streaming, and Linux mouse wheel fixes.

**Key Features:** Chat · Quantize · Convert · Inference · CMake PyInstaller build · Deadlock-free streaming

**Tech:** `C++` · `Python` · `llama.cpp` · `CMake` · `PyInstaller`

> ⚠️ *fork of [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) — custom GUI layer*

---

## 🧰 Other Tools

### 🔑 [easy-ssh-dev](https://github.com/dev-boffin-io/easy-ssh-dev)
> *One command to rule all your SSH connections.*

Passwordless SSH manager with GTK3 + VTE tabbed terminal GUI. Named profiles, automated key rotation, Catppuccin Mocha theme, Doctor dialog, and structured logging.

**Tech:** `Go` · `Python` · `GTK3` · `VTE` · `Shell`

---

### 🛡️ [Linux-core-identity-manager](https://github.com/dev-boffin-io/Linux-core-identity-manager)
> *Linux user management — even inside Termux.*

PyQt6 GUI for Linux user accounts. Works correctly in both standard desktop and proot/Termux environments. Protected primary user detection, lock/unlock accounts, sudo management.

**Tech:** `Python` · `PyQt6`

---

### ⚙️ [quick-creator](https://github.com/dev-boffin-io/quick-creator)
> *From zero to project structure in seconds.*

Lightning-fast project scaffolding. Config-driven templates for Python, Go, Flutter, PyQt5/6, Shell. Auto-generates README, LICENSE, CI stubs.

**Tech:** `Go` · `Shell`

---

### 🐦 [flutter-tool-dev](https://github.com/dev-boffin-io/flutter-tool-dev)
> *Flutter SDK on ARM64 Linux — painlessly.*

CLI installer that downloads, installs, and manages Flutter SDK on ARM64 Linux via community-maintained GitHub releases.

**Tech:** `Shell` · `Dart`

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | Python · Go · C++ · Shell (POSIX/Bash) |
| **GUI Frameworks** | PyQt5 · PyQt6 · GTK3 · VTE · Chainlit |
| **AI / ML** | Ollama · llama.cpp · RAG pipelines · multi-agent |
| **Virtualization** | QEMU · KVM · libvirt |
| **Cloud / Storage** | rclone · SFTP · Google Drive · S3 · Dropbox |
| **Networking** | cloudflared · SSH · sshfs · Forgejo REST API |
| **Packaging** | PyInstaller · AppImage · .deb · Go modules |
| **Platforms** | Linux (primary) · ARM64 · proot-Termux |
| **Dev Tools** | GitHub Actions · Git · flock · systemd |

---

## 🏗️ How I Build

1. **Scratch your own itch first** — if I don't need it, I don't build it
2. **CLI first, GUI second** — the CLI is always fully functional on its own
3. **Single binary or AppImage** — no complex install steps for end users
4. **Safe shell scripting** — `set -euo pipefail`, `printf` over `echo`, no bashisms in POSIX scripts
5. **Portable by default** — ARM64/proot support from day one where feasible
6. **Acknowledge upstream** — every README credits the open-source tools it depends on

---

## 🚀 Roadmap

- [ ] Release **AppImage + .deb** packages for every Forge tool
- [ ] Add **automated CI/CD** with GitHub Actions across all projects
- [ ] Write **contribution guides** and open `good-first-issue` labels
- [ ] Launch **dev-boffin-io.github.io** with full documentation & live demos

---

## 📊 GitHub Stats & Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dev-boffin-io&layout=compact&theme=radical&hide_border=true&langs_count=4" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=dev-boffin-io&theme=radical&hide_border=true" />
</div>

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=dev-boffin-io&theme=react-dark&hide_border=true&area=true&custom_title=Contribution+Activity" />
</div>

> *Stats update automatically via GitHub widgets above.*

---

## 🤝 Open for Collaboration

All Forge projects welcome:
- 🐛 **Bug reports** — found something broken? Open an issue
- 💡 **Feature requests** — fits the project philosophy? Let's talk
- 🧪 **Testing** — especially on ARM, RISC-V, or non-x86_64 hardware
- 🎨 **UI/UX feedback** — honest critique is always welcome
- 🔧 **Pull requests** — contributions are always appreciated

---

## 🙏 Acknowledgements

[Ollama](https://ollama.com) · [rclone](https://rclone.org) · [QEMU](https://www.qemu.org) · [Qt / PyQt](https://riverbankcomputing.com) · [PyInstaller](https://pyinstaller.org) · [Forgejo](https://forgejo.org) · [cloudflared](https://github.com/cloudflare/cloudflared) · [llama.cpp](https://github.com/ggerganov/llama.cpp) · [OpenSSH](https://www.openssh.com) · [Python](https://python.org) · [Go](https://go.dev) · [GTK](https://gtk.org) · [VTE](https://wiki.gnome.org/Apps/Terminal/VTE)

---

## 📬 Get in Touch

- **GitHub**: [@dev-boffin-io](https://github.com/dev-boffin-io)
- **Email**: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ccaea3aaaaa5a28ca8a9bae1aea3aaaaa5a2e2a5a3">[email&#160;protected]</a>
- **Website**: [dev-boffin-io.vercel.app](https://dev-boffin-io.vercel.app)

---

<p align="center">
  <em>Built with 🔨 on Debian · ARM64 · proot-Termux · <strong>MIT License</strong></em>
</p>
