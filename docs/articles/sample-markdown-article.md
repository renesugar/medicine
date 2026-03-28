---
layout: default
title: "Adding Articles in Markdown Format"
subtitle: "A demonstration of how markdown files are rendered with the site's visual style"
series: "Site Guide"
date: 2025-01-01
category: "Guide"
tags: ["Markdown", "Jekyll", "Template"]
description: "A template and guide showing how to write new articles in Markdown format for this Jekyll-based site."
---

This sample article demonstrates how new content can be added to this site using plain Markdown. Jekyll processes the file through the shared layout, applying the full design — sidebar navigation, typography, tables, blockquotes, and code blocks — without you needing to write any HTML.

---

## How Markdown Articles Work

Place a `.md` file anywhere in the `articles/` directory. The YAML front matter block at the top tells Jekyll which layout to use and provides the metadata shown in the page header and on the index page.

### Required Front Matter

Every markdown article needs at minimum:

```yaml
---
layout: default
title: "Your Article Title"
date: 2025-06-01
---
```

### Optional Front Matter Fields

| Field | Type | Purpose |
|---|---|---|
| `subtitle` | string | Shown in italic below the title |
| `series` | string | Shown as the article series label |
| `category` | string | Article type badge on the index card |
| `tags` | list | Tag pills shown on the index card |
| `description` | string | Description shown on the index card |
| `toc` | list | Generates nav anchor links in sidebar |

---

## Typography

The body text renders in **IBM Plex Sans** at 0.92rem with generous line-height for comfortable reading. **Bold text** uses font-weight 600. *Italic text* renders in a gentle italic style.

Heading levels translate as follows:

- `## H2` → Section heading with red bottom border  
- `### H3` → Sub-heading in DM Serif Display italic  
- `#### H4` → Sub-sub-heading with left rule in grey  

---

## Tables

Tables render with the site's dark header style:

| Step | Pathology | Lab Marker | Action Threshold |
|---|---|---|---|
| Step 1 | Endothelium / NO | vWF Activity | >150% |
| Step 2 | Platelet Amplification | MPV | >11 fL |
| Step 3 | Dense Fibrin | Fibrinogen | >4.0 g/L |
| Step 4 | Fibrinolysis Shutdown | α2-Antiplasmin | >120% |

---

## Blockquotes

Blockquotes render as pull quotes in the DM Serif Display font:

> Treat upstream first. Do NOT jump to Step 3/4 without addressing Step 1/2. Adding anticoagulation before stabilising the endothelial environment produces incomplete and unstable responses.

---

## Lists

Unordered and ordered lists render cleanly:

**Unordered:**
- Diffuse head pressure
- Light sensitivity (non-migraine aura)
- Orthostatic dizziness and heat intolerance
- Air hunger / blood pressure fluctuation

**Ordered:**
1. Stabilise the endothelium (Step 1)
2. Normalise platelet behaviour (Step 2)
3. Address fibrin architecture if needed (Step 3)
4. Restore fibrinolysis only in refractory cases (Step 4)

---

## Code Blocks

Code blocks render with a dark background and green monospace text:

```yaml
# Example article front matter
---
layout: default
title: "The vWF–ADAMTS13 Axis in Post-Viral Illness"
series: "Mechanisms Series"
date: 2025-06-15
tags: ["vWF", "ADAMTS13", "Long COVID", "Microclotting"]
description: "A deep dive into the von Willebrand factor regulatory axis and its role in post-viral microvascular pathology."
---
```

---

## Adding This Article to the Index

After creating your markdown file, add a new article card to `index.html`:

```html
<a href="articles/your-article.html" class="article-card">
  <div class="article-card-inner">
    <div class="article-card-stripe" style="background:var(--step3)"></div>
    <div class="article-card-body">
      <div class="article-card-meta">
        <span class="meta-series">Your Series Name</span>
        <span class="meta-dot"></span>
        <span class="meta-date">2025</span>
      </div>
      <div class="article-card-title">Your Article Title</div>
      <div class="article-card-subtitle">Your subtitle here</div>
      <p class="article-card-desc">A short description of the article content.</p>
      <div class="article-card-footer">
        <div class="article-tags">
          <span class="tag tag-step3">Your Tag</span>
        </div>
        <span class="article-card-cta">Read article</span>
      </div>
    </div>
  </div>
</a>
```

---

## Available Tag Styles

Use these CSS classes for tag pills on the index page:

| Class | Colour | Use For |
|---|---|---|
| `tag-step1` | Green | Endothelium / NO topics |
| `tag-step2` | Orange | Platelet topics |
| `tag-step3` | Blue | Fibrin / coagulation topics |
| `tag-step4` | Red | Fibrinolysis topics |
| `tag-ssri` | Teal | SSRI-related content |
| `tag-covid` | Purple | Long COVID / post-viral content |
| `tag-default` | Grey | General / metadata tags |

---

*This is a sample article. Replace this content with your own clinical writing. The front matter, structure, and formatting demonstrated here are the template for all future markdown articles on this site.*
