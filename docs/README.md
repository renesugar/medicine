# Translational Medicine — GitHub Pages Site

A Jekyll-based static site for publishing clinical frameworks, diagnostic guides, and treatment protocols on translational medicine.

**Live site:** `https://renesugar.github.io/medicine/`

---

## Quick Start

### Running locally

```bash
# Install Ruby dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

### Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. GitHub Actions will build and deploy automatically

> **Note:** GitHub Pages uses Jekyll by default. The `_config.yml` is already configured. No additional workflow file is needed.

---

## Project Structure

```
medicine/
│
├── index.html                          # Main landing page (article listing)
├── about.md                            # About page (rendered by Jekyll)
├── _config.yml                         # Jekyll configuration
├── Gemfile                             # Ruby gem dependencies
│
├── _layouts/
│   ├── default.html                    # Layout for markdown articles
│   └── article.html                    # Layout alias for article collection
│
├── assets/
│   ├── css/
│   │   └── style.css                   # Shared styles for markdown pages
│   └── js/
│       └── main.js                     # Shared JavaScript
│
└── articles/
    ├── microvascular-workflow-pack.html # Standalone HTML: clinical workflow pack
    ├── how-i-diagnose-and-treat.html   # Standalone HTML: narrative article
    ├── sample-markdown-article.md      # Template: markdown article
    ├── sample-markdown-article.html    # Pre-rendered version (for static serving)
    └── [your new articles here]
```

---

## Adding a New Article

### Option A: Markdown Article (recommended for written content)

1. Create `articles/your-article-name.md`

2. Add YAML front matter:

```yaml
---
layout: default
title: "Your Article Title"
subtitle: "A short italic subtitle"
series: "How I Diagnose and Treat"   # optional
date: 2025-06-15
category: "Clinical Article"          # shown as badge on index
tags:
  - "SSRI Withdrawal"
  - "Long COVID"
description: "A short description for the index page card (1–2 sentences)."
---

Your article content in Markdown follows here...
```

3. Write your article in standard Markdown. The following all render with the site design:
   - Tables
   - Blockquotes (rendered as pull quotes)
   - Code blocks (with syntax highlighting)
   - Ordered and unordered lists
   - Bold, italic, headings H2–H4

4. Add a card to `index.html` in the appropriate section:

```html
<a href="articles/your-article-name.html" class="article-card">
  <div class="article-card-inner">
    <div class="article-card-stripe" style="background:var(--step3)"></div>
    <div class="article-card-body">
      <div class="article-card-meta">
        <span class="meta-series">How I Diagnose and Treat</span>
        <span class="meta-dot"></span>
        <span class="meta-date">2025</span>
        <span class="meta-dot"></span>
        <span class="meta-type" style="background:#FFF5F5;color:#B71C1C">Clinical Article</span>
      </div>
      <div class="article-card-title">Your Article Title</div>
      <div class="article-card-subtitle">Your subtitle here</div>
      <p class="article-card-desc">A short description shown on the listing page.</p>
      <div class="article-card-footer">
        <div class="article-tags">
          <span class="tag tag-ssri">SSRI Withdrawal</span>
          <span class="tag tag-covid">Long COVID</span>
        </div>
        <span class="article-card-cta">Read article</span>
      </div>
    </div>
  </div>
</a>
```

5. Update the stat counter in `index.html` hero section.

---

### Option B: Standalone HTML Article

For rich interactive tools (like the workflow pack) with custom components:

1. Place your HTML file in `articles/your-tool.html`

2. Ensure the nav sidebar links back to the index:
   ```html
   <a href="../index.html" class="nav-brand">...</a>
   <!-- Add as first nav link: -->
   <a href="../index.html" class="nav-link"><span class="nav-num">↩</span><span>All Articles</span></a>
   ```

3. Add a card to `index.html` pointing to `articles/your-tool.html`

---

## Index Page Card Customisation

### Article card stripe colours

The left stripe on each card is a CSS inline style. Use any colour:

```html
<!-- Single step colour -->
<div class="article-card-stripe" style="background:var(--step3)"></div>

<!-- Gradient across all steps -->
<div class="article-card-stripe" style="background:linear-gradient(to bottom,var(--step1),var(--step2),var(--step3),var(--step4))"></div>

<!-- Condition colour -->
<div class="article-card-stripe" style="background:var(--ssri)"></div>
```

### Available CSS variables

```css
--step1: #2E7D32   /* Green  — Endothelium */
--step2: #E65100   /* Orange — Platelets   */
--step3: #1565C0   /* Blue   — Fibrin      */
--step4: #B71C1C   /* Red    — Fibrinolysis*/
--ssri:  #00695C   /* Teal   — SSRI        */
--covid: #4527A0   /* Purple — Long COVID  */
```

### Tag classes

```html
<span class="tag tag-step1">Endothelium</span>
<span class="tag tag-step2">Platelets</span>
<span class="tag tag-step3">Fibrin</span>
<span class="tag tag-step4">Fibrinolysis</span>
<span class="tag tag-ssri">SSRI Withdrawal</span>
<span class="tag tag-covid">Long COVID</span>
<span class="tag tag-default">General</span>
```

---

## Configuration

### `_config.yml`

Key settings:

```yaml
title: "Translational Medicine"
description: "Publishing clinical frameworks, diagnostic guides, and treatment protocols on translational medicine."
url: "https://renesugar.github.io"
baseurl: "/medicine"   # your repo name if not at root
```

> If your GitHub Pages site is at `username.github.io` (not in a subdirectory), set `baseurl: ""`

### Adding sections to the index

Open `index.html` and duplicate the section block pattern:

```html
<div id="your-section-id">
  <div class="section-header">
    <h2 class="section-title">Section Title</h2>
    <span class="section-count">N articles</span>
  </div>
  <div class="article-grid">
    <!-- article cards here -->
  </div>
</div>
```

Also add the section to the sidebar nav in `index.html`:

```html
<a href="#your-section-id" class="nav-link">
  <span class="nav-num">↓</span>
  <span>Section Title</span>
</a>
```

---

## Design System

This site uses:

- **IBM Plex Sans** — body text, UI elements
- **IBM Plex Mono** — code, citations, labels
- **DM Serif Display** — headings, pull quotes, article titles

The four-step colour system (green/orange/blue/red) is used consistently across all article components. Avoid introducing new brand colours without updating the CSS variables in both `index.html` and `assets/css/style.css`.

---

## Licence

Content is copyright the authors. The site code (HTML/CSS/JS structure) may be reused freely for non-commercial clinical publishing purposes.
