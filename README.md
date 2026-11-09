<h1 align="center">Hi, I'm Boffin 👋</h1>

<p align="center">
  <strong>Independent Open Source Developer · Linux, Windows &amp; Android</strong><br>
  <em>Crafting clean, fast, offline-first desktop, CLI &amp; mobile tools that solve real problems.</em><br>
  Building the <strong>Forge Suite</strong> — 16 developer productivity tools, now expanding onto Android.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Qt-41CD52?logo=qt&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" />
  <img src="https://img.shields.io/badge/Windows-0078D4?logo=windows&logoColor=white" />
  <img src="https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white" />
  <img src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?logo=kotlin&logoColor=white" />
  <img src="https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white" />
  <img src="https://img.shields.io/badge/Local_AI-FF6A00?logoColor=white" />
  <img src="https://img.shields.io/badge/Shell_Scripting-4EAA25?logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/QEMU-FF6600?logoColor=white" />
  <img src="https://img.shields.io/badge/rclone-3D4FC4?logoColor=white" />
  <img src="https://img.shields.io/badge/Tailscale-242938?logo=tailscale&logoColor=white" />
  <img src="https://img.shields.io/badge/100%25_Open_Source-4CAF50?logo=opensource&logoColor=white" />
</p>

<p align="center">
  <a href="https://dev-boffin-io.github.io"><img src="https://img.shields.io/badge/Portfolio-dev--boffin--io.github.io-00E5A0?style=flat-square" /></a>
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
- 📱 **Now going mobile** — porting the same offline-first philosophy to Android
- 🤝 **Open source by default** — MIT-licensed and contribution-friendly

> *"The best tool is the one you actually use."*

---

## ⚒️ The Forge Suite

> **16 privacy-first, offline-first tools** — across the Forge Suite, Android Lab and AI studios — targeting Debian Linux, Windows, macOS, ARM64, and proot-Termux.

| # | Tool | Category | Stack |
|---|------|----------|-------|
| 1 | [🤖 ollama-forge](#-ollama-forge) | Local AI | JavaScript · Node.js |
| 2 | [🦊 forgejo-forge](#-forgejo-forge) | Git / DevOps | Go · PyQt6 |
| 3 | [☁️ cloud-forge](#️-cloud-forge) | Cloud / Storage | Go · Python · PyQt5 |
| 4 | [🚇 tunnel-forge](#-tunnel-forge) | Networking | Python · PyQt6 |
| 5 | [🖥️ virt-forge](#️-virt-forge) | Virtualization | Go · Python · PyQt6 |
| 6 | [🔒 sftp-forge](#-sftp-forge) | File Transfer | Flutter · Dart |
| 7 | [⚡ qbit-forge](#-qbit-forge) | Downloads | Go · Python · PyQt6 |
| 8 | [🦙 llama-forge](#-llama-forge) | Local AI | C++ · Python |
| 9 | [🔑 ssh-forge](#-ssh-forge) | SSH / DevOps | Go · GTK3 |
| 10 | [📡 share-forge](#-share-forge) | File Sharing | Python · PyQt6 · Flask |
| 11 | [🐍 py-forge](#-py-forge) | Dev Tools / Learning | Python · PyQt6 |
| 12 | [🌐 funnel-forge](#-funnel-forge) | Networking | Python · PyQt6 |
| 13 | [🔧 gh-forge](#-gh-forge) | Git / DevOps | Python · PyQt6 |
| 14 | [💻 terminal-forge](#-terminal-forge) | Android / Terminal | C · Android |
| 15 | [🎨 ollama-forge-studio](#-ollama-forge-studio) | AI / Studio | JavaScript · Node.js |
| 16 | [🧭 agent-forge-studio](#-agent-forge-studio) | AI / Agents | JavaScript · Node.js · Playwright |

---

### 🤖 [ollama-forge](https://github.com/dev-boffin-io/ollama-forge)
> *A zero-dependency web UI + CLI manager for Ollama — one self-contained binary.*

Manage [Ollama](https://ollama.com) from a browser or the terminal. Start and stop the server, browse, pull, create, push and remove models, chat with them, sign in to ollama.com, and install, upgrade or uninstall the Ollama binary. Compiles to a single self-contained executable.

**Key Features:** Web UI + CLI · Start/stop the Ollama server · Browse/pull/create/push/remove models · Chat with models · ollama.com sign-in · Install/upgrade/version-check/uninstall · Single-binary build (Node SEA)

**Tech:** `JavaScript` · `Node.js` (standard library only) · `Node SEA` · `Ollama REST API`

---

### 🦊 [forgejo-forge](https://github.com/dev-boffin-io/forgejo-forge)
> *Self-hosted Forgejo — fully managed from CLI or GUI.*

Self-contained Git forge management suite with a Go CLI and a PyQt6 GUI. Supports systemd and proot-Termux on Linux, plus Windows and macOS (amd64 and arm64). Includes Forge Drive, a Flask frontend proxying the Forgejo REST API with a dark UI.

**Key Features:** Full lifecycle control (start/stop/logs) · Forgejo REST API proxy (Forge Drive) · proot + systemd dual-mode · Runtime-configurable settings · Package registry management · Gitea fallback on Windows

**Tech:** `Go` · `Python` · `PyQt6` · `Flask` · `Forgejo REST API`

> 🪟 *Windows and 🍎 macOS supported — Gitea is used when the Forgejo binary is unavailable*

---

### ☁️ [cloud-forge](https://github.com/dev-boffin-io/cloud-forge)
> *Mount any cloud storage as SFTP in one click.*

Turn Google Drive, Dropbox, S3, Mega — any rclone remote — into a scriptable SFTP endpoint. Go CLI backend with a PyQt5 GUI and system tray integration. Modular architecture with fixed OAuth flows.

**Key Features:** OAuth2 flow · Remote creation wizard · System tray · Modular GUI · ARM64/Termux support

**Tech:** `Go` · `Python` · `PyQt5` · `rclone` · `PyInstaller`

---

### 🚇 [tunnel-forge](https://github.com/dev-boffin-io/tunnel-forge)
> *Cloudflared tunnel management — clean, modular, reliable.*

Modular PyQt6 GUI manager for Cloudflared tunnels. QThread signal-based worker decoupling, retry-with-backoff, persistent config, and platform-safe process termination.

**Key Features:** Modular architecture · QThread signal workers · Retry-with-backoff · One-click tunnel start/stop · Persistent config

**Tech:** `Python` · `PyQt6` · `cloudflared`

---

### 🖥️ [virt-forge](https://github.com/dev-boffin-io/virt-forge)
> *Modern QEMU VM manager for power users.*

QEMU/KVM VM manager with a Go CLI toolset (`qemu-run`, `qemu-ctl`, `qemu-disk`) and a PyQt6 GUI. Snapshot management, live migration and a disk manager for QCOW2 images. Multi-arch targets (x86_64, ARM64, RISC-V).

**Key Features:** QCOW2 snapshots · Live migration · Disk manager (create, resize, convert) · Multi-arch

**Tech:** `Go` · `Python` · `PyQt6` · `QEMU` · `Shell`

---

### 🔒 [sftp-forge](https://github.com/dev-boffin-io/sftp-forge)
> *The SFTP client that gets out of your way — now in your pocket too.*

Rewritten in Flutter for secure file transfer, automation, and remote file management over SFTP. Cross-platform on Linux **and Android**.

**Key Features:** Cross-platform Flutter UI · Secure file transfer · Automation · Remote file management · Linux + Android builds

**Tech:** `Flutter` · `Dart`

> 📱 *Android supported — first Forge tool to ship a mobile build*

---

### ⚡ [qbit-forge](https://github.com/dev-boffin-io/qbit-forge)
> *qbittorrent-nox — tray-managed, privacy-first.*

Single-instance tray manager for qbittorrent-nox. PTY-based password capture, `fcntl` single-instance lock, and a separate GTK WebView launcher. Full ARM64 + proot-Termux support.

**Key Features:** Single-instance lock (`fcntl`) · PTY password capture · System tray · `qb-webui` GTK WebView launcher · proot + ARM64 support

**Tech:** `Go` · `Python` · `PyQt6` · `GTK`

---

### 🦙 [llama-forge](https://github.com/dev-boffin-io/llama-forge)
> *llama.cpp on Linux — with a proper desktop GUI.*

Local LLM desktop GUI for llama.cpp, built on a pure C/C++ engine. Refactored into a Python package with a CMake-based PyInstaller build, deadlock-free subprocess streaming, and Linux mouse-wheel fixes.

**Key Features:** Chat · Quantize · Convert · Inference · CMake PyInstaller build · Deadlock-free streaming

**Tech:** `C++` · `Python` · `llama.cpp` · `CMake` · `PyInstaller`

> ⚠️ *Fork of [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) — custom GUI layer*

---

### 🔑 [ssh-forge](https://github.com/dev-boffin-io/ssh-forge)
> *One command to rule all your SSH connections.*

Passwordless SSH manager with CLI and GUI. Named profiles, key setup, a Doctor dialog, and a GTK3 + VTE tabbed terminal. Full ARM64 + proot-Termux support.

**Key Features:** Passwordless key setup · Named profiles · GTK3/VTE tabbed GUI · Doctor dialog · ARM64 + proot support

**Tech:** `Go` · `Python` · `GTK3` · `VTE` · `Shell`

---

### 📡 [share-forge](https://github.com/dev-boffin-io/share-forge)
> *LAN file sharing — one click, any device.*

PyQt6 desktop app with a Flask backend for zero-config LAN file sharing. Drag-and-drop upload, forced-download route, dark UI, and breadcrumb navigation.

**Key Features:** Dark UI · Flask file server · Drag-and-drop · Forced-download route · Breadcrumb nav · Windows & Linux builds

**Tech:** `Python` · `PyQt6` · `Flask` · `PyInstaller`

> 🪟 *Windows supported — pre-built `.exe` available via GitHub Actions*

---

### 🐍 [py-forge](https://github.com/dev-boffin-io/py-forge)
> *Python learning + dev environment — all in one GUI.*

PyQt6 desktop app combining a Bengali-language Python typing trainer, a code editor with syntax highlighting and run/stop, and a Python Manager for OS-aware version detection, PATH management, and installation.

**Key Features:** 93 learning modes · Full code editor · Python Manager tab · OS-aware Python detection · PATH management · Windows & Linux builds

**Tech:** `Python` · `PyQt6` · `PyInstaller`

> 🪟 *Windows supported — pre-built `.exe` available via GitHub Actions*

---

### 🌐 [funnel-forge](https://github.com/dev-boffin-io/funnel-forge)
> *Take a local server public — one click, one tunnel.*

PyQt6 GUI for managing a Tailscale Funnel, exposing a local web server to the public internet without port-forwarding.

**Key Features:** One-click Funnel start/stop · Status monitoring · No manual port-forwarding

**Tech:** `Python` · `PyQt6` · `Tailscale Funnel`

---

### 🔧 [gh-forge](https://github.com/dev-boffin-io/gh-forge)
> *Git remotes and GitHub Actions, one GUI.*

Bundled PyQt6 GUI with two tools: a local multi-remote Git Manager, and a `gh` CLI-powered GitHub Actions Manager for workflow runs, artifacts and cache cleanup.

**Key Features:** Multi-remote Git management · Workflow runs and live logs · Artifacts and cache cleanup · Repo code browser · Built via GitHub Actions for Linux amd64, Linux arm64 and Windows

**Tech:** `Python` · `PyQt6` · `gh CLI`

---

## 📱 Going Mobile — Android Lab

> New territory: taking the offline-first, no-telemetry philosophy of the Forge Suite onto Android.

### 🧠 [mind-forge-pro](https://github.com/dev-boffin-io/mind-forge-pro)
> *An agentic AI assistant that never leaves your phone.*

Offline, autonomous agentic AI personal assistant for Android, powered by native `llama.cpp`, Flutter, and a local RAG architecture.

**Tech:** `Flutter` · `Dart` · `llama.cpp` (native) · Local RAG

---

### 🖥️ [vm-forge](https://github.com/dev-boffin-io/vm-forge)
> *A Linux VM in your pocket. No root required.*

Native QEMU virtual machine launcher for Android, running ARM64 Linux VMs directly on-device without root.

**Tech:** `Kotlin` · `QEMU` · `KVM` · `ARM64`

---

### 💻 [terminal-forge](https://github.com/dev-boffin-io/terminal-forge)
> *A sleek, Material 3 terminal emulator for Android.*

Terminal emulator built on Termux's `TerminalView` — virtual keys, multiple sessions, and Debian, Alpine and Kali NetHunter rootfs sessions, with configurable keyboard shortcuts.

**Tech:** `C` · `Android (Gradle)` · `Termux TerminalView`

> 🍴 *Fork of [RohitKushvaha01/ReTerminal](https://github.com/RohitKushvaha01/ReTerminal)*

---

## 🧰 Other Tools

### 🛡️ [Linux-core-identity-manager](https://github.com/dev-boffin-io/Linux-core-identity-manager)
> *Linux user management — even inside Termux.*

PyQt6 GUI for Linux user accounts. Works in standard desktop and proot/Termux environments. Protected primary user detection, lock/unlock accounts, sudo management.

**Tech:** `Python` · `PyQt6`

---

### 🧭 [agent-forge-studio](https://github.com/dev-boffin-io/agent-forge-studio)
> *An autonomous agent assistant for any Ollama or OpenAI-compatible endpoint.*

Research, planning, content creation, scripts, edit decision lists, retention analysis and browser automation, with direct YouTube, Instagram, Facebook and Google operation. Playwright is the only dependency, loaded only when the browser tools are used.

**Tech:** `JavaScript` · `Node.js` · `Playwright` · `Ollama` · `OpenAI-compatible APIs`

---

### 🎨 [ollama-forge-studio](https://github.com/dev-boffin-io/ollama-forge-studio)
> *Vibe Coder — an agentic coding studio for any Ollama endpoint.*

A local agentic coding studio with build, plan, general and explore agents, saved and resumable sessions, tools, MCP, LSP, skills, web tools and snapshots. Works in whatever directory you launch it, with zero runtime dependencies.

**Tech:** `JavaScript` · `Node.js` (zero runtime deps) · `Ollama` · `MCP` · `LSP`

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | Python · Go · JavaScript · C · C++ · Dart · Kotlin · Shell (POSIX/Bash) |
| **GUI Frameworks** | PyQt5 · PyQt6 · GTK3 · VTE · Flutter · Web (vanilla JS) |
| **AI / ML** | Ollama · llama.cpp · RAG pipelines · multi-agent |
| **Virtualization** | QEMU · KVM · libvirt |
| **Cloud / Storage** | rclone · SFTP · Google Drive · S3 · Dropbox |
| **Networking** | cloudflared · Tailscale Funnel · SSH · sshfs · Forgejo REST API |
| **Packaging** | PyInstaller · AppImage · .deb · Go modules · Windows `.exe` · Android `.apk` |
| **Platforms** | Linux (primary) · Windows · macOS · Android · ARM64 · proot-Termux |
| **Dev Tools** | GitHub Actions · Git · gh CLI · flock · systemd |

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

- [ ] Bring the rest of the Forge Suite to Android, following `sftp-forge`
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
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=dev-boffin-io&theme=react-dark&hide_border=true&area=true&custom_title=Contribution+Activity" />
</div>

> *Stats update automatically via GitHub widgets above.*

---

## 🌐 Self-Hosted Git

I run my own [Forgejo](https://forgejo.org) instance, managed with **forgejo-forge** and pushed onto the open internet with **funnel-forge** (Tailscale Funnel) — no third-party Git host in the loop for my daily driver work.

**🔗 [git.bowfin-pleco.ts.net](https://git.bowfin-pleco.ts.net/)** — self-hosted Forgejo, publicly reachable via Tailscale Funnel.

> ⚠️ It's a personal instance, not a mirror of this GitHub org — expect it to go offline occasionally when the host machine is off. GitHub remains the primary, always-on home for all Forge Suite source code.

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

[Ollama](https://ollama.com) · [rclone](https://rclone.org) · [QEMU](https://www.qemu.org) · [Qt / PyQt](https://riverbankcomputing.com) · [PyInstaller](https://pyinstaller.org) · [Forgejo](https://forgejo.org) · [cloudflared](https://github.com/cloudflare/cloudflared) · [Tailscale](https://tailscale.com) · [llama.cpp](https://github.com/ggml-org/llama.cpp) · [Flutter](https://flutter.dev) · [GitHub CLI](https://cli.github.com) · [OpenSSH](https://www.openssh.com) · [Python](https://python.org) · [Go](https://go.dev) · [Kotlin](https://kotlinlang.org) · [GTK](https://gtk.org) · [VTE](https://wiki.gnome.org/Apps/Terminal/VTE)

---

## 📬 Get in Touch

- **GitHub**: [@dev-boffin-io](https://github.com/dev-boffin-io)
- **Portfolio**: [dev-boffin-io.github.io](https://dev-boffin-io.github.io)
- **Website (legacy)**: [dev-boffin-io.vercel.app](https://dev-boffin-io.vercel.app)
- **Self-hosted Git**: [git.bowfin-pleco.ts.net](https://git.bowfin-pleco.ts.net/)

---

<p align="center">
  <em>Built with 🔨 on Debian · ARM64 · proot-Termux · Android · <strong>MIT License</strong></em>
</p>
