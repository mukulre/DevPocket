# DevPocket

<div align="center">
 
# 藺 DevPocket
 
**Free, privacy-first developer tools. One page, zero dependencies.**
 
[![Deploy](https://github.com/YOUR-USERNAME/devpocket/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR-USERNAME/devpocket/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-contributing)
 
[** Live Demo**](https://YOUR-USERNAME.github.io/devpocket/) · [Report Bug](https://github.com/YOUR-USERNAME/devpocket/issues) · [Request Feature](https://github.com/YOUR-USERNAME/devpocket/issues)
 
</div>
 
---
 
## ✨ Why DevPocket?
 
-  **100% private:** everything runs in your browser. Nothing is uploaded.
- ⚡ **Instant:** no frameworks, no build step, no loading spinners.
-  **Dark mode:** follows your system theme automatically.
-  **Works offline** once loaded.
- 里 **Easy to extend:** adding a new tool takes about 5 lines.
 
## ️ Tools
 
| Tool | What it does |
|------|--------------|
| JSON Format / Minify | Pretty-print or compress JSON, with clear error messages |
| Base64 Encode / Decode | Unicode-safe encoding and decoding |
| URL Encode / Decode | Safely encode query strings and components |
| Timestamp ⇄ Date | Convert Unix time to ISO/local date and back |
| UUID Generator | Cryptographically secure v4 UUIDs |
| Password Generator | Strong 20-character random passwords |
 
##  Quick Start
 
Use it online: **https://YOUR-USERNAME.github.io/devpocket/**
 
Or run locally:
 
```bash
git clone https://github.com/YOUR-USERNAME/devpocket.git
cd devpocket
# Just open index.html in your browser, or:
npx serve .
```
 
##  Project Structure
 
```
devpocket/
├── index.html      # Page layout
├── styles.css      # Styling and dark mode
├── scripts.js      # All tool logic
└── .github/workflows/deploy.yml   # CI/CD to GitHub Pages
```
 
## ➕ Add Your Own Tool
 
1. Add a button in `index.html`:
   ```html
   <button data-act="reverse">Reverse Text</button>
   ```
2. Add the logic in `scripts.js` inside `actions`:
   ```js
   reverse: s => [...s].reverse().join(''),
   ```
3. Open a pull request. That's it!
 
## 欄 Contributing
 
Contributions are welcome and appreciated!
 
1. Fork the repo
2. Create a branch: `git checkout -b feature/hash-generator`
3. Commit your changes: `git commit -m "Add hash generator"`
4. Push: `git push origin feature/hash-generator`
5. Open a Pull Request
 
Look for issues labeled [`good first issue`](https://github.com/YOUR-USERNAME/devpocket/labels/good%20first%20issue) to get started.
 
## ️ Roadmap
 
- [ ] Hash generator (SHA-256, SHA-512)
- [ ] Color converter (HEX, RGB, HSL)
- [ ] Regex tester
- [ ] JWT decoder
- [ ] Diff checker
- [ ] Copy-to-clipboard shortcuts
- [ ] PWA / installable app
 
## ⭐ Support
 
If DevPocket saves you time, please **star this repo**. It helps other developers find it!
 
##  License
 
Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
 
---
 
<div align="center">Made with ❤️ by <a href="https://github.com/YOUR-USERNAME">YOUR-NAME</a></div>
 