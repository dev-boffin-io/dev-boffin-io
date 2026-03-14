<h1 align="center">Hi there, I'm Boffin 👋</h1>

<p align="center">
  <strong>Independent Open Source Developer · Linux Enthusiast · Privacy Advocate</strong><br>
  <em>Crafting clean, fast, offline-first desktop & CLI tools that solve real problems.</em><br>
  Building the <strong>Forge Suite</strong> — a growing collection of developer productivity tools for Linux power users.<br>
  Upcoming support for Windows, macOS & web.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white" />
  <img src="https://img.shields.io/badge/Qt-41CD52?logo=qt&logoColor=white" />
  <img src="https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black" />
  <img src="https://img.shields.io/badge/Local_AI-FF6A00?logoColor=white" />
  <img src="https://img.shields.io/badge/Shell_Scripting-4EAA25?logo=gnubash&logoColor=white" />
  <img src="https://img.shields.io/badge/QEMU-FF6600?logoColor=white" />
  <img src="https://img.shields.io/badge/rclone-3D4FC4?logoColor=white" />
  <img src="https://img.shields.io/badge/100%25_Open_Source-4CAF50?logo=opensource&logoColor=white" />
</div>

<br/>

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=dev-boffin-io&color=blueviolet&style=flat-square&label=Profile+Views" />
</div>

---

## 👨‍💻 About Me

I'm a self-taught developer who loves turning complex, painful workflows into simple, beautiful tools.

My philosophy is straightforward: **software should be lightweight, offline-first, and respect user privacy.** No telemetry. No bloat. No cloud lock-in. No subscription traps.

I build tools that I personally use every day — local AI assistants, cloud storage bridges, SSH managers, VM controllers, and project scaffolding utilities. Every single project starts as a solution to my own frustration with existing tools on Linux. Once it works well enough for me, I open-source it so others can benefit too.

I'm particularly passionate about:

- 🔒 **Privacy-first design** — your data stays on your machine
- ⚡ **Performance** — startup in milliseconds, not seconds
- 🎯 **Minimal dependencies** — ship as AppImage or single binary whenever possible
- 🐧 **Linux as a first-class platform** — not an afterthought
- 🤝 **Open source by default** — everything is MIT-licensed and contribution-friendly

Currently building a full suite of interconnected developer productivity tools under the **Forge Suite** umbrella. Each tool is independent and useful on its own, but they're all designed to work together.

> *"The best tool is the one you actually use."*

---

## 🔥 Featured Projects — The Forge Suite

### 🧠 [ollama-forge](https://github.com/dev-boffin-io/ollama-forge)
> *Powerful local AI desktop app — fully offline, fully yours.*

A feature-rich desktop GUI for [Ollama](https://ollama.com), built with PyQt5. Designed for developers and researchers who want the full power of large language models without sending a single byte to the cloud.

**Key Features:**
- 💬 Multi-turn chat interface with persistent conversation history
- 📚 **RAG knowledge base** — attach local documents, PDFs, and notes as context
- 🤖 **Multi-agent Crew system** — define and orchestrate multiple AI agents with distinct roles and personas
- 🗂️ **Model Manager** — download, delete, and switch between Ollama models with one click
- 🔄 External Ollama server detection with live heartbeat monitoring
- 🚀 One-command install via PyInstaller-built AppImage
- 🎨 Dark-themed, keyboard-friendly UI

**Tech:** Python, PyQt5, Ollama REST API, PyInstaller

---

### ☁️ [cloud-forge](https://github.com/dev-boffin-io/cloud-forge)
> *Mount any cloud storage as SFTP in one click.*

Turn Google Drive, Dropbox, OneDrive, Mega, S3 — or any rclone-supported remote — into a fully scriptable SFTP endpoint. Combines a Go CLI backend with a PyQt5 GUI frontend.

**Key Features:**
- 🔐 Full OAuth2 authentication flow built into the GUI
- ⚙️ Guided remote creation wizard (Google Drive, Dropbox, S3, SFTP, Mega, and more)
- 📁 Browse, upload, download, and sync files via any SFTP-compatible client
- 🖥️ System tray integration — runs silently in the background
- 🧮 Smart file size formatting and transfer progress tracking
- 🏗️ Separate sudo/non-sudo build scripts for clean system installs
- 📦 ARM64 support including proot/Termux environments

**Tech:** Go, Python, PyQt5, rclone, PyInstaller

---

### 🖥️ [virt-forge](https://github.com/dev-boffin-io/virt-forge)
> *Modern QEMU virtual machine manager for power users.*

A clean, full-featured VM manager built on QEMU/KVM, with a PyQt6 GUI and a powerful Go CLI backend. Built for Linux developers who need full control without the overhead of GNOME Boxes or Virt-Manager.

**Key Features:**
- ➕ Create, start, pause, stop, and delete VMs via GUI or CLI
- 📸 **Disk snapshot management** — create, restore, and delete snapshots with subcommand support
- 🔀 **Live migration** — migrate running VMs between hosts
- 🖱️ VNC and SPICE display output support
- ⏱️ Live uptime tracking per VM
- 📋 JSON-based VM registry with PID file management
- 🔒 `flock`-based atomic port locking to prevent conflicts
- 🌍 Multi-architecture: x86_64, ARM64, RISC-V

**Tech:** Go, Python, PyQt6, QEMU, Shell scripting

---

### 🔑 [easy-ssh-dev](https://github.com/dev-boffin-io/easy-ssh-dev)
> *One command to rule all your SSH connections.*

A passwordless SSH manager combining a powerful CLI with an optional GUI built on GTK3 + VTE terminal emulation. Set up keys, connect, and manage multiple remote servers without ever typing a password again.

**Key Features:**
- 🗝️ Automated SSH key generation, distribution, and rotation
- 📋 Named server profiles — connect by alias, not IP address
- 🖥️ GUI with tabbed terminal sessions (GTK3 + VTE)
- 🎨 Catppuccin Mocha dark theme with per-tab close buttons
- 🔧 Custom binary suite: `sshx`, `sshx-key`, and friends
- 📦 Unified Go build script with clean `bin/` output structure
- 🔒 POSIX-safe shell scripting throughout (`set -euo pipefail`)

**Tech:** Go, Python, GTK3, VTE, Shell scripting

---

### ⚡ [quick-creator](https://github.com/dev-boffin-io/quick-creator)
> *From zero to project structure in seconds.*

A lightning-fast project scaffolding tool. Pick a template, run one command, get a complete folder structure with boilerplate files, `.gitignore`, `README.md`, and build scripts — all ready to go.

**Key Features:**
- 📁 Templates for Python, Go, Flutter, PyQt5/PyQt6, and Shell projects
- 🧩 Composable — mix and match template components
- 📝 Auto-generates `README.md`, `LICENSE`, and CI workflow stubs
- 🏃 Single binary, no runtime dependencies

**Tech:** Go, Shell scripting

---

### 📡 [sftp-forge](https://github.com/dev-boffin-io/sftp-forge)
> *The SFTP client that gets out of your way.*

A lightweight but powerful SFTP client and automation toolkit. Built for developers who need reliable, scriptable file transfers — not a bloated FTP GUI.

**Key Features:**
- 🔄 Batch transfers with progress tracking
- 🔁 Auto-sync rules — watch a local folder and sync on change
- 🗝️ SSH key management built in
- 💾 Connection profile storage (named remotes)
- 🌑 Single-file Python app with PyQt6 dark UI
- 📐 Screen-aware window sizing and QThread-safe design

**Tech:** Python, PyQt6, sshfs, paramiko

---

### 🪪 [new-id](https://github.com/dev-boffin-io/new-id)
> *Linux user account management — even inside Termux.*

A PyQt6 GUI for managing Linux user accounts, designed to work correctly in both standard desktop environments and proot/Termux (where commands like `last` are unavailable).

**Key Features:**
- 🛡️ Protected primary user detection — prevents accidental self-lockout
- 🔍 Real-time search and filter across all accounts
- 🔒 Lock/unlock accounts with immediate visual feedback
- 🗝️ SSH key management per user
- 📅 Account expiry configuration
- 📓 Custom JSON-based activity log replacing unavailable system commands in proot
- 🎨 Dark GitHub-inspired theme

**Tech:** Python, PyQt6

---

## 🛠️ Tech Stack & Skills

| Category            | Technologies |
|---------------------|--------------|
| **Languages**       | Python · Go · C++ · Shell (POSIX/Bash) |
| **GUI Frameworks**  | PyQt5 · PyQt6 · GTK3 · VTE |
| **AI / ML**         | Ollama · llama.cpp · RAG pipelines |
| **Virtualization**  | QEMU · KVM · libvirt |
| **Cloud / Storage** | rclone · SFTP · Google Drive · S3 · Dropbox |
| **Build & Packaging** | PyInstaller · AppImage · .deb · Go modules |
| **Platforms**       | Linux (primary) · ARM64 · Termux/proot · Windows & macOS (in progress) |
| **Dev Tools**       | GitHub Actions · Git · flock · systemd |
| **Scripting**       | Bash · POSIX shell · `set -euo pipefail` best practices |

---

## 🏗️ How I Build

Every tool in the Forge Suite follows the same design principles:

1. **Scratch your own itch first** — if I don't need it, I don't build it
2. **CLI first, GUI second** — the CLI is always fully functional on its own
3. **Single binary or AppImage** — no complex install steps for end users
4. **Safe shell scripting** — `set -euo pipefail`, `printf` over `echo`, no bashisms in POSIX scripts
5. **Portable by default** — ARM64/proot support from day one where feasible
6. **Acknowledge upstream** — every project README credits the open-source tools it depends on

---

## 🚀 2026 Roadmap

- [ ] Release stable **AppImage + .deb + Windows installer** for every Forge tool
- [ ] Add **macOS support** for ollama-forge and cloud-forge
- [ ] Launch personal website **dev-boffin-io.github.io** with full documentation & live demos
- [ ] Write **contribution guides** and open good-first-issue labels across all repos
- [ ] Start **GitHub Sponsors** to support full-time open-source development
- [ ] Build at least one **new cross-platform tool** every quarter
- [ ] Add **automated CI/CD** with GitHub Actions for all Forge projects
- [ ] Publish **ARM64 static binary repo** documentation for offline deployments

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=dev-boffin-io&show_icons=true&theme=radical&hide_border=true&include_all_commits=true&count_private=true" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dev-boffin-io&layout=compact&theme=radical&hide_border=true" height="165" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=dev-boffin-io&theme=radical&hide_border=true" />
</div>

---

## 🤝 Open for Collaboration

All Forge projects are open for:

- 🐛 **Bug reports** — found something broken? Please open an issue
- 💡 **Feature requests** — have an idea that fits the project philosophy? Let's talk
- 🧪 **Testing** — especially on non-x86_64 hardware (ARM, RISC-V, etc.)
- 🎨 **UI/UX feedback** — I'm a developer, not a designer — honest feedback is welcome
- 🔧 **Pull requests** — code contributions are always appreciated

If you're a designer, tester, technical writer, or fellow developer — let's build better tools together!

---

## 🙏 Acknowledgements

These projects wouldn't exist without the incredible upstream open-source ecosystem:

[Ollama](https://ollama.com) · [rclone](https://rclone.org) · [QEMU](https://www.qemu.org) · [Qt / PyQt](https://riverbankcomputing.com) · [PyInstaller](https://pyinstaller.org) · [BusyBox](https://busybox.net) · [OpenSSH](https://www.openssh.com) · [Python](https://python.org) · [Go](https://go.dev) · [GTK](https://gtk.org) · [VTE](https://wiki.gnome.org/Apps/Terminal/VTE)

---

## 📬 Get in Touch

- **GitHub**: [@dev-boffin-io](https://github.com/dev-boffin-io)
- **X / Twitter**: *(coming soon)*
- **Email**: tradeguruboffin@gmail.com
- **Website**: *(coming soon — dev-boffin-io.github.io)*

---

<p align="center">
  <strong>Made with ❤️ for developers and power users who value simplicity, speed, and privacy.</strong><br>
  <em>All projects are MIT-licensed and free forever.</em>
</p>
