# SharpMargin Weekly Lead Gen — Agent Instructions

You are running an automated weekly lead generation task for **SharpMargin** (sharpmargin.com), an SMB operations consulting firm based in Puyallup, WA.

## Your Goal
Scrape chamber of commerce member directories, enrich 20 service businesses, draft personalized cold outreach, and save everything to a dated file.

## Target Businesses
- **Industries:** HVAC, plumbing, roofing/contractors, cleaning services, landscaping
- **Revenue range:** Estimated $500K–$5M (owner-operated, 5–50 employees)
- **Geography:** Puyallup, Tacoma, Pierce County, WA

## Step 1: Collect Raw Leads

**Primary sources (scrape these first):**

1. Puyallup/Sumner Chamber — fetch these category pages and extract business names + any contact info:
   - `https://business.puyallupsumnerchamber.com/list/category/plumbing-602`
   - `https://business.puyallupsumnerchamber.com/list/category/landscaping-supplies-688`
   - `https://business.puyallupsumnerchamber.com/list/category/cleaning-services-574`
   - `https://business.puyallupsumnerchamber.com/list/category/construction-contractor-services-576`

2. Tacoma-Pierce County Chamber — search for members in relevant categories:
   - `https://business.tacomachamber.org/list`
   - Try category filter URLs or alpha browsing

3. **Supplement with web search** if chamber directories yield fewer than 20 businesses. Search for:
   - "HVAC company Puyallup WA reviews"
   - "plumbing company Tacoma Pierce County reviews"
   - "landscaping Puyallup WA"
   - "cleaning service Puyallup Tacoma reviews"
   - BBB listings: `https://www.bbb.org/search?find_text=HVAC&find_loc=Puyallup%2C+WA`

## Step 2: Enrich Each Business (aim for 20 total)

For each business, find:
- **URL** — their website
- **Industry** — specific (e.g., "HVAC", "Residential Plumbing", "Commercial Cleaning")
- **Google Reviews** — star rating and review count (search "[business name] Puyallup reviews" or check their website)
- **Online booking** — does the site have online scheduling? (Yes/No)
- **Maintenance plan** — HVAC and plumbing businesses: do they offer a maintenance plan/service agreement? (Yes/No/Unknown)
- **Social presence** — do they have active Facebook/Instagram? (note which)
- **Notes** — any specific detail you noticed: slogan, specialties, recent news, number of trucks, family-owned callout, etc.

## Step 3: Write Cold Outreach Draft

For each business, write a 3–4 sentence cold email from SharpMargin. Rules:
- Must reference something SPECIFIC to that business (their slogan, review pattern, lack of online booking, their specialty, etc.)
- Hook = Free Audit: find operations bloat, show ROI before asking for a dime
- Tone: direct, confident, peer-to-peer — not salesy or corporate
- Sign off: "— Josh @ SharpMargin | sharpmargin.com"

**Example format:**
> Hi [Name], I came across [Business Name] while looking at Pierce County's top-rated [industry] companies — your [X reviews / specialization / family-owned story] caught my attention. At SharpMargin, we do a free operations audit for service businesses like yours that usually surfaces $30–80K in recoverable margin from scheduling gaps, supplier contracts, and overhead bloat. No pitch, no commitment — just a clear picture of what's leaking. Worth a 20-minute call?

## Step 4: Save Output

Save the file to:
`/home/NobleLandCo/.openclaw/workspace/sharpmargin/leads/YYYY-MM-DD-prospects.md`

Use today's actual date for YYYY-MM-DD.

## Output Format (one section per business)

```
## [Business Name]
- **URL:** https://...
- **Industry:** HVAC / Plumbing / Landscaping / Cleaning / Contractor
- **Reviews:** X.X stars (NNN reviews) [or "Not found"]
- **Online booking:** Yes / No / Unknown
- **Maintenance plan:** Yes / No / Unknown
- **Social:** Facebook ✓ / Instagram ✓ / None found
- **Source:** Puyallup Chamber / Tacoma Chamber / BBB / Web search
- **Notes:** [specific detail — slogan, specialty, size indicator, etc.]

**Draft outreach:**
Hi [Name or "there"],

[3–4 sentence personalized cold email]

— Josh @ SharpMargin | sharpmargin.com
```

## If Something Breaks

If you cannot fetch chamber directories (bot block, 404, etc.), fall back entirely to web search + BBB. Do NOT skip producing output — always generate 20 prospects even if sources are thin.

If the file cannot be written, log the error to:
`/home/NobleLandCo/.openclaw/workspace/sharpmargin/leads/errors.log`

## When Done

- Commit new files to git in the workspace repo
- Do NOT send any messages to Josh unless you encountered a hard failure
- Output is push-based — just save the file and exit
