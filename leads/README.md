# SharpMargin Lead Gen — Leads Folder

## What This Is

Automatically generated weekly prospect lists for **SharpMargin** (sharpmargin.com) — SMB operations consulting targeting service businesses in the Puyallup / Tacoma / Pierce County area.

**Goal:** Find service businesses with ~$500K–$5M revenue that could benefit from a free operations audit showing where they're leaking money.

---

## Folder Structure

```
sharpmargin/leads/
├── README.md                        ← This file
├── YYYY-MM-DD-prospects.md          ← Weekly prospect file (one per Monday run)
│   (e.g. 2026-04-06-prospects.md)
└── ...
```

Each dated file contains **~20 enriched prospects** with:
- Business name, URL, industry
- Review count & rating (Google)
- Online booking capability
- Maintenance plan (HVAC/plumbing)
- Social presence
- Personalized cold outreach draft

---

## Target Industries

- HVAC / Heating & Cooling
- Plumbing
- General Contractors / Roofing
- Cleaning Services (residential & commercial)
- Landscaping

---

## Data Sources

1. **Puyallup/Sumner Chamber of Commerce** — `business.puyallupsumnerchamber.com/list`
   - Categories: Plumbing (602), Landscaping & Supplies (688), Cleaning Services (574), Construction & Contractor Services (576), Home Services (581)
2. **Tacoma-Pierce County Chamber** — `business.tacomachamber.org/list`
3. **BBB Puyallup/Tacoma** — `bbb.org/search` (supplement)
4. **Web search** — for enrichment when directories are sparse

---

## Cron Schedule

- **Runs:** Every Monday at 8:00 AM Pacific
- **Mode:** Isolated agent turn (silent)
- **Notifies:** No one unless it breaks

---

## Outreach Hook

> *"We help service businesses find the operations bloat that's quietly eating into margins — and we show the ROI before asking for anything. We call it the Free Audit."*

Cold emails are 3–4 sentences, personalized to something specific about each business.
