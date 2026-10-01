# ⏱️ TimeBox

A minimalist focus timer built with vanilla HTML, CSS, and JavaScript. TimeBox combines a Pomodoro-style countdown with a stopwatch, ambient background sounds, and switchable wallpapers, all wrapped in a clean glassmorphism interface.

> **Status:** 🚧 Beta. Core features work; several planned features are still in development (see [Roadmap](#-roadmap)).

🔗 **Live Demo:** _add your GitHub Pages link here_

![TimeBox preview](./screenshots/preview.png)

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How to Use](#-how-to-use)
- [How It Works](#-how-it-works)
- [Responsive Design](#-responsive-design)
- [Known Issues](#-known-issues)
- [Roadmap](#-roadmap)
- [What I Learned](#-what-i-learned)
- [Credits](#-credits)
- [Author](#-author)

---

## 📌 About

TimeBox is my sixth learning project, built about a month and a half after I started learning JavaScript. The goal was to practice DOM manipulation, timers, audio handling, and responsive layouts by building something I would actually use while studying.

## ✨ Features

- **Four modes**
  - Focus: 25 minutes
  - Short Break: 5 minutes
  - Long Break: 15 minutes
  - Stopwatch: counts up in `HH:MM:SS`
- **Start / Pause / Replay** controls with a play/pause icon that updates automatically
- **Sound alert** when a countdown reaches zero
- **Ambient sounds**: cycle through Rain → Fire → Forest → Off with a single button
- **Background switcher**: cycle through the available wallpapers
- **Click-to-dim timer**: click the time to change its color for better contrast on any background
- **SweetAlert2 popups** for features that are still under development
- **Responsive layout** for desktop, tablet, and phone screens
- **Glassmorphism UI** using `backdrop-filter` and translucent panels

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure and semantic layout |
| CSS3 | Flexbox, CSS variables, media queries, `backdrop-filter`, transitions |
| JavaScript (ES6) | Timer logic, DOM events, audio playback |
| [SweetAlert2](https://sweetalert2.github.io/) | Popup dialogs (loaded via CDN) |

No frameworks and no build tools. Just open the project and it runs.

## 📁 Project Structure

```
TimeBox/
├── index.html      # Page structure
├── style.css       # All styling and media queries
├── script.js       # Timer logic and interactions
├── README.md
├── icons/          # Play, pause, replay, and navigation icons
├── sounds/         # Click, mode-change, end-of-timer, and ambient sounds
└── imgs/           # Background wallpapers (1.jpg ... 10.jpg)
```

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/AkramBenChaa/TimeBox.git

# 2. Enter the project folder
cd TimeBox

# 3. Open index.html in your browser
```

No installation is required. You only need a modern browser (Chrome, Edge, Firefox, or Safari).

### Deploy with GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder.
4. Save, and your site will be live after a minute or two.

## 🎮 How to Use

1. Choose a mode from the bottom bar: **Focus**, **Short Break**, **Long Break**, or **Stopwatch**.
2. Press the **play** button to start. Press it again to pause.
3. Press **replay** to reset the current mode to its starting value.
4. Use the side menu:
   - **Sound**: switch between ambient sounds (Rain, Fire, Forest, Off)
   - **Img**: switch the background wallpaper
   - **Goal / Note / Ai**: coming soon
5. Click the big timer text to change its color if it is hard to read on the current background.

## ⚙️ How It Works

### Accurate timing with `Date.now()`

A naive timer decreases a counter by 1 inside `setInterval`. That approach drifts, and browsers can slow down timers in background tabs, so the time becomes wrong.

TimeBox avoids this by storing a fixed **end time** when the countdown starts and recalculating the remaining time from the real clock on every tick:

```js
endTime = Date.now() + totalSeconds * 1000;

timer = setInterval(function () {
    totalSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    updateDisplay();
}, 1000);
```

The stopwatch works the same way in reverse: it stores a **start time** and calculates how many seconds have passed since then.

### Display formatting

`padStart(2, "0")` keeps every part of the time two digits wide (`05` instead of `5`). The stopwatch shows hours, while the other modes show only minutes and seconds.

### Ambient sounds

A `numberOfSound` counter tracks which sound is active. Each click on the Sound button stops the current track, starts the next one with `loop = true`, and returns to silence after the last one.

## 📱 Responsive Design

The layout adapts using CSS media queries:

| Screen width | Layout changes |
| --- | --- |
| Above 768px | Vertical side menu on the left, wide bottom bar |
| Up to 768px | Side menu becomes a horizontal bar at the top, smaller timer |
| Up to 450px | Compact phone layout with smaller icons and text |
| Up to 380px | Extra adjustments for very small phones |

## 🐞 Known Issues

- Media query order should run from largest to smallest breakpoint so phone rules are not overridden.
- The **Focus** button is not highlighted when the page first loads.
- The default background in CSS (`10.jpg`) does not match the starting index in JavaScript.
- The timer text is black, which may be hard to read on dark wallpapers.

## 🗺️ Roadmap

- [ ] **Goal** feature: set and track a daily focus goal
- [ ] **Note** feature: quick notes during a session
- [ ] **AI** feature: an assistant for study planning
- [ ] Save settings (background, sound, last mode) with `localStorage`
- [ ] Show the remaining time in the browser tab title
- [ ] Pomodoro session counter
- [ ] Automatic switch from Focus to Break
- [ ] Volume control for ambient sounds
- [ ] Keyboard shortcuts (Space to start/pause, R to reset)

## 📚 What I Learned

- Selecting and updating elements with the DOM API
- Handling events with `addEventListener` and `forEach`
- Building accurate timers with `setInterval` and `Date.now()`
- Controlling audio with the `Audio` object (`play`, `pause`, `loop`, `currentTime`)
- Using `switch` statements to manage multiple states
- Writing responsive CSS with Flexbox and media queries
- Using CSS variables to keep styling consistent
- Integrating a third-party library through a CDN

## 🙏 Credits

Replace each line below with the real source and license.

- **Icons:** _source and license_
- **Sound effects:** _source and license_
- **Ambient sounds (rain, fire, forest):** _source and license_
- **Background images:** _source and license_
- **Popups:** [SweetAlert2](https://sweetalert2.github.io/) (MIT License)

## 👤 Author

**Akram Ben Chaa**

- GitHub: [@AkramBenChaa](https://github.com/AkramBenChaa)

---

⭐ If you find this project useful, feel free to give it a star!