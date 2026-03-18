<h1 align="center">Hi, I'm Boffin 👋</h1>

<p align="center">
  <strong>Independent Open Source Developer · Linux Enthusiast · Privacy Advocate</strong><br>
  <em>Crafting clean, fast, offline-first desktop & CLI tools that solve real problems.</em><br>
  Building the <strong>Forge Suite</strong> — developer productivity tools for Linux power users.
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

## 🔥 The Forge Suite

### 🧠 [ollama-forge](https://github.com/dev-boffin-io/ollama-forge)
> *Powerful local AI desktop app — fully offline, fully yours.*

Feature-rich PyQt5 GUI for [Ollama](https://ollama.com). Full LLM power without sending a byte to the cloud.

**Key Features:** Multi-turn chat · RAG knowledge base · Multi-agent Crew system · Model Manager · AppImage packaging

**Tech:** Python · PyQt5 · Ollama REST API · PyInstaller

---

### ☁️ [cloud-forge](https://github.com/dev-boffin-io/cloud-forge)
> *Mount any cloud storage as SFTP in one click.*

Turn Google Drive, Dropbox, S3, Mega — any rclone remote — into a scriptable SFTP endpoint. Go CLI backend with PyQt5 GUI and system tray integration.

**Key Features:** OAuth2 flow · Remote creation wizard · System tray · ARM64/Termux support

**Tech:** Go · Python · PyQt5 · rclone · PyInstaller

---

### 🖥️ [virt-forge](https://github.com/dev-boffin-io/virt-forge)
> *Modern QEMU VM manager for power users.*

Full-featured VM manager on QEMU/KVM with PyQt6 GUI and Go CLI. No overhead of GNOME Boxes or Virt-Manager.

**Key Features:** Disk snapshots · Live migration · VNC/SPICE display · Multi-arch (x86_64, ARM64, RISC-V)

**Tech:** Go · Python · PyQt6 · QEMU · Shell

---

### 🔑 [easy-ssh-dev](https://github.com/dev-boffin-io/easy-ssh-dev)
> *One command to rule all your SSH connections.*

Passwordless SSH manager with GTK3 + VTE tabbed terminal GUI. Named profiles, automated key rotation, Catppuccin Mocha theme.

**Key Features:** Key generation & rotation · Named profiles · Tabbed terminal · POSIX-safe shell

**Tech:** Go · Python · GTK3 · VTE · Shell

---

### ⚡ [quick-creator](https://github.com/dev-boffin-io/quick-creator)
> *From zero to project structure in seconds.*

Lightning-fast project scaffolding. Single binary, no runtime deps.

**Key Features:** Templates for Python, Go, Flutter, PyQt5/6, Shell · Auto-generates README, LICENSE, CI stubs

**Tech:** Go · Shell

---

### 📡 [sftp-forge](https://github.com/dev-boffin-io/sftp-forge)
> *The SFTP client that gets out of your way.*

Lightweight SFTP automation toolkit with batch transfers, auto-sync, and a single-file PyQt6 dark UI.

**Key Features:** Batch transfers · Auto-sync rules · Named remotes · QThread-safe design

**Tech:** Python · PyQt6 · sshfs · paramiko

---

### 🪪 [new-id](https://github.com/dev-boffin-io/new-id)
> *Linux user management — even inside Termux.*

PyQt6 GUI for Linux user accounts. Works correctly in both standard desktop and proot/Termux environments.

**Key Features:** Protected primary user detection · Lock/unlock accounts · SSH key per user · proot-safe

**Tech:** Python · PyQt6

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | Python · Go · C++ · Shell (POSIX/Bash) |
| **GUI Frameworks** | PyQt5 · PyQt6 · GTK3 · VTE |
| **AI / ML** | Ollama · llama.cpp · RAG pipelines |
| **Virtualization** | QEMU · KVM · libvirt |
| **Cloud / Storage** | rclone · SFTP · Google Drive · S3 · Dropbox |
| **Packaging** | PyInstaller · AppImage · .deb · Go modules |
| **Platforms** | Linux (primary) · ARM64 · Termux/proot · Windows & macOS (soon) |
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

[Ollama](https://ollama.com) · [rclone](https://rclone.org) · [QEMU](https://www.qemu.org) · [Qt / PyQt](https://riverbankcomputing.com) · [PyInstaller](https://pyinstaller.org) · [OpenSSH](https://www.openssh.com) · [Python](https://python.org) · [Go](https://go.dev) · [GTK](https://gtk.org) · [VTE](https://wiki.gnome.org/Apps/Terminal/VTE)

---

## 📬 Get in Touch

- **GitHub**: [@dev-boffin-io](https://github.com/dev-boffin-io)
- **Email**: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="ccaea3aaaaa5a28ca8a9bae1aea3aaaaa5a2e2a5a3">[email&#160;protected]</a>
- **Website**: *(coming soon — dev-boffin-io.github.io)*

---

<p align
