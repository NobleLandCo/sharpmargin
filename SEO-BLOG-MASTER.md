# SharpMargin SEO Blog Master Template

This document is the complete guide for writing and publishing SharpMargin blog posts.
Auto-writing agents must follow this exactly.

---

## Slug Tracking

**ALWAYS check `/home/NobleLandCo/.openclaw/workspace/memory/sm-blog-log.md` before writing.**
Never write a post with a slug that already exists in that file.
After publishing, append the new slug and date to that file.

---

## State Angles & Target Keywords

### Idaho (state: "idaho")
- **Angle:** Fastest-growing state = operational chaos behind the revenue growth
- **Cities:** Boise, Meridian, Nampa, Coeur d'Alene, Twin Falls
- **Primary keywords:** operations consulting Boise Idaho, small business consultant Idaho, business efficiency consulting Boise
- **Tone:** Forward-looking, growth-minded, ambitious
- **Topic rotation:**
  1. How Boise Contractors Are Losing Margin in a Boom Market
  2. Operations Mistakes Idaho Businesses Make When Scaling Too Fast
  3. The Hidden Cost of Growth: What Boise Small Businesses Miss
  4. How to Tighten Your Operations Before Expanding in Idaho
  5. Meridian and Nampa Business Owners: Where Your Margin Is Going

### Nevada (state: "nevada")
- **Angle:** Hospitality/tourism economy with razor-thin margins
- **Cities:** Las Vegas, Reno, Henderson, Sparks, Carson City
- **Primary keywords:** operations consulting Reno Nevada, restaurant consulting Nevada, small business consultant Las Vegas
- **Tone:** Sharp, industry-savvy, margin-focused
- **Topic rotation:**
  1. Why Nevada Restaurants Bleed Margin (And How to Stop It)
  2. Las Vegas Small Business: The Overhead Mistakes Nobody Talks About
  3. Reno Service Business Owners: Your Vendor Contracts Are Costing You
  4. How Nevada Hospitality Businesses Can Recover $1,000+/Month
  5. The Real Reason Nevada Wellness Studios Can't Grow Their Margins

### Montana (state: "montana")
- **Angle:** Independent operators, self-built businesses, practical help
- **Cities:** Bozeman, Billings, Missoula, Great Falls, Helena
- **Primary keywords:** small business consulting Montana, operations consultant Bozeman, business efficiency Billings Montana
- **Tone:** Grounded, direct, no-nonsense, respects independence
- **Topic rotation:**
  1. What Montana Contractors Don't Know Is Costing Them $800/Month
  2. Bozeman's Growth Is Great — Here's Why Your Margins Aren't Keeping Up
  3. Montana Independent Business Owners: The Overhead Audit You've Never Done
  4. How Billings and Missoula Businesses Can Stop Leaving Money on the Table
  5. Running a Montana Trade Business? Here's What's Leaking Out the Back

### Tennessee (state: "tennessee")
- **Angle:** Nashville boom, contractors & restaurants too busy to audit
- **Cities:** Nashville, Memphis, Knoxville, Chattanooga, Murfreesboro
- **Primary keywords:** operations consulting Nashville Tennessee, small business consultant Memphis, contractor consulting Tennessee
- **Tone:** Urgent, opportunity-focused, speaks to "too busy" operators
- **Topic rotation:**
  1. Nashville Contractors: Being Busy Doesn't Mean You're Profitable
  2. Tennessee Restaurant Owners: The Margin You're Missing in a Hot Market
  3. How Memphis Independent Businesses Can Recover Overhead Waste
  4. Chattanooga Small Business: Why Growth Is Hiding Your Biggest Cost Problems
  5. What Tennessee Trades Operators Miss When They're Fully Booked

### Oklahoma (state: "oklahoma")
- **Angle:** Underserved market, big firms ignored them, straight-talking help
- **Cities:** Tulsa, Oklahoma City, Norman, Broken Arrow, Edmond
- **Primary keywords:** business consulting Tulsa Oklahoma, operations consultant Oklahoma City, small business consultant OKC
- **Tone:** Relatable, anti-corporate, straight-talking, underdog pride
- **Topic rotation:**
  1. Tulsa Contractors: The Operations Help You Never Had Access To
  2. OKC Small Business: What Years Without a Real Audit Is Costing You
  3. Why Oklahoma Business Owners Work Hard and Still Feel Stuck
  4. Broken Arrow and Edmond Operators: Your Back Office Is the Problem
  5. Oklahoma Trades Businesses: Here's Exactly Where Your Margin Is Going

---

## Blog Post Structure (800–1,200 words)

Every post follows this structure:

```
1. INTRO (100–150 words)
   - Hook that speaks directly to the state/industry audience
   - Identify the problem in plain language
   - One-sentence preview of what the post covers

2. SECTION H2 — The Core Problem (150–200 words)
   - One major operational issue specific to that state/industry
   - Use real dollar ranges ($X–$Y/month)

3. SECTION H2 — Why It Happens (100–150 words)
   - Explain the root cause (not a moral failing — structural)
   - Validate the operator

4. SECTION H2 — What to Look For (150–200 words)
   - 3–5 specific checkpoints (use a bullet list)
   - Make them actionable and specific to the state angle

5. SECTION H2 — How to Fix It (150–200 words)
   - Practical steps
   - Where SharpMargin fits in naturally (no hard sell)

6. CLOSING CTA (50–75 words)
   - Direct link to /contact
   - "Free 48-hour audit" language
   - Keep it low pressure

7. FAQs (3–4 Q&A pairs)
   - Questions people would actually search
   - Include state/city names where relevant
   - Answers: 2–4 sentences, specific
```

---

## Tone Guidelines by State

| State | Voice | Avoid |
|-------|-------|-------|
| Idaho | Optimistic, growth-forward | Doom and gloom |
| Nevada | Crisp, industry-savvy, margin-literate | Generic small business talk |
| Montana | Direct, no-nonsense, earned trust | Corporate jargon, strategy speak |
| Tennessee | Urgent but empathetic, busy-operator aware | Lecturing tone |
| Oklahoma | Straight talk, underdog solidarity | Condescension |

**Always avoid:**
- Generic phrases like "in today's competitive landscape"
- Anything that sounds like it was written for any business anywhere
- Vague recommendations without dollar amounts

---

## Adding Posts to blog-posts.ts

Append new posts to the `blogPosts` array in:
`/home/NobleLandCo/.openclaw/workspace/sharpmargin/src/lib/blog-posts.ts`

### Post Object Format

```typescript
{
  slug: "your-slug-here",                  // kebab-case, unique, no duplicates
  title: "Full Post Title Here",
  description: "150–160 char SEO description with primary keyword",
  date: "Month DD, YYYY",                  // e.g., "April 28, 2026"
  readTime: "X min read",                  // estimate based on word count
  tag: "Operations",                       // Operations | Cost Reduction | Growth | Profit Margin | Starting a Business
  state: "idaho",                          // idaho | nevada | montana | tennessee | oklahoma | undefined (general)
  content: `<HTML content string here>`,   // No article wrapper needed
  faqs: [
    { q: "Question?", a: "Answer." },
    { q: "Question?", a: "Answer." },
    { q: "Question?", a: "Answer." },
  ],
}
```

### Content HTML Rules

- Use semantic HTML: `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<a>`
- No `<article>` wrapper — the page component handles it
- Links: `<a href="/contact">` (not Next.js Link — this is an HTML string)
- No `class=` attributes needed — the page wrapper handles all styling
- Dollar ranges: use en dash `–` not hyphen `-` (e.g., `$800–2,400`)
- Escape `&` as `&amp;` in HTML strings if needed

---

## Slug Log

Track all published slugs in:
`/home/NobleLandCo/.openclaw/workspace/memory/sm-blog-log.md`

Format:
```
YYYY-MM-DD | slug-here | State | Tag
```

---

## Daily Cron Notes

- Cron runs Mon–Fri at 22:00 PT
- Writes 5 posts per run (one per state)
- After all 5 posts added to blog-posts.ts, commit and push:
  `git add -A && git commit -m "blog: add 5 state posts [date]" && git push origin main`
- Run from: `/home/NobleLandCo/.openclaw/workspace/sharpmargin`
- Haiku model, 600s timeout, silent delivery
