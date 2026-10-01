# ⏱️ TimeBox

A minimalist study and productivity timer built with vanilla HTML, CSS, and JavaScript. TimeBox combines focused countdown sessions, a stopwatch mode, ambient sounds, switchable wallpapers, and a glassmorphism interface.

> **Status:** 🧪 Experimental / Beta — the core timer is functional, while Goal, Note, and AI features are still under development.

🔗 **Live Demo:** https://akrambenchaa.github.io/TimeBox/

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How to Use](#-how-to-use)
- [Current Limitations](#-current-limitations)
- [Roadmap](#-roadmap)
- [What I Learned](#-what-i-learned)
- [Credits](#-credits)
- [Author](#-author)

---

## 📌 About

TimeBox is my sixth JavaScript learning project. I built it as a practical way to work with DOM manipulation, timers, browser audio, dynamic backgrounds, responsive layouts, and state-based interactions.

The project is intentionally built with **vanilla web technologies** — no framework and no build system.

## ✨ Features

- **Focus timer** — 25-minute default session
- **Short Break** — 5 minutes
- **Long Break** — 15 minutes
- **Stopwatch mode** — counts upward in HH:MM:SS
- **Start / Pause / Replay** controls
- **Timer-end sound** when a countdown reaches zero
- **Ambient sounds** — Rain, Fire, Forest, and Off
- **Background switcher** — cycles through 10 wallpapers
- **Timer contrast toggle** — click the timer text to switch its display color
- **SweetAlert2 dialogs** for features that are still under development
- **Responsive layout** for desktop and mobile screens
- **Glassmorphism interface** with translucent panels and backdrop blur
- **Time-aware display logic** that shows MM:SS for countdown modes and HH:MM:SS for the stopwatch

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Layout, responsive design, variables, transitions, and glassmorphism |
| JavaScript (ES6) | Timer logic, DOM events, state handling, audio, and interactions |
| [SweetAlert2](https://sweetalert2.github.io/) | Development-status dialogs via CDN |

No frameworks, package manager, or build step is required.

## 📁 Project Structure

~~~text
TimeBox/
├── index.html
├── style.css
├── script.js
├── README.md
├── icons/          # UI icons
├── sounds/         # UI, timer-end, and ambient audio
└── imgs/           # Background wallpapers
~~~

## 🚀 Getting Started

### Run locally

~~~bash
git clone https://github.com/AkramBenChaa/TimeBox.git
cd TimeBox
~~~

Then open index.html in a modern browser.

No installation is required.

### GitHub Pages

The project is configured as a static site and can be deployed directly through GitHub Pages using the main branch and the repository root.

## 🎮 How to Use

1. Select **Focus**, **Short Break**, **Long Break**, or **Stopwatch**.
2. Press the play button to start the timer.
3. Press the same button again to pause.
4. Press **Replay** to reset the current mode.
5. Use the side menu to cycle ambient sounds or change the background.
6. Click the large timer text to toggle its contrast color.
7. The **Goal**, **Note**, and **AI** buttons currently display an under-development message.

## ⚠️ Current Limitations

- Goal tracking is not implemented yet.
- Notes are not implemented yet.
- The AI assistant is not implemented yet.
- Ambient sound volume controls are not available yet.
- User settings are not persisted between sessions.
- Automatic Focus/Break transitions are not implemented yet.

## 🗺️ Roadmap

- [ ] Goal tracking
- [ ] Notes and session reviews
- [ ] AI study assistant
- [ ] Save preferences with localStorage
- [ ] Ambient sound volume controls
- [ ] Browser tab timer updates
- [ ] Pomodoro session counter
- [ ] Automatic Focus → Break transitions
- [ ] Keyboard shortcuts
- [ ] Final UI and accessibility pass
- [ ] Finalize asset attribution and licensing

## 📚 What I Learned

- DOM selection and manipulation
- Event listeners and UI state
- Countdown and stopwatch logic
- Using Date.now() with timer calculations
- Working with the browser Audio API
- Dynamic background switching
- Responsive CSS with media queries
- CSS variables and reusable styling
- Integrating a third-party library through a CDN
- Structuring a small vanilla JavaScript project

## 🙏 Credits

- **SweetAlert2:** https://sweetalert2.github.io/
- **Project assets:** icon, audio, and wallpaper sources/licensing should be documented before the final release.

## 👤 Author

**Akram Ben Chaa**

- GitHub: [@AkramBenChaa](https://github.com/AkramBenChaa)
- LinkedIn: [Akram Ben Chaa](https://www.linkedin.com/in/akram-ben-chaa-b75256439/)

---

⭐ Feedback and suggestions are welcome while TimeBox is still experimental.
