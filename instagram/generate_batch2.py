#!/usr/bin/env python3
"""SharpMargin Instagram Batch 2 — auto-scaling text, no bleed."""

from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
SIZE = (1080, 1080)
BG = (8, 8, 8)
WHITE = (255, 255, 255)
GREEN = (80, 200, 140)
BAR_H = 8
BAR_W = 80
ATTR = "— SharpMargin"
SAFE_W = SIZE[0] - 340  # 170px padding each side — generous safe zone

POSTS = [
    {"before": ["A Tacoma HVAC company", "was doing $40k/mo."], "green": "Keeping $3k.", "after": ["We fixed their", "labor pricing.", "Now they keep $11k."], "filename": "post-28.jpg"},
    {"before": ["You raised prices 10%.", "Profit barely moved."], "green": "Hidden overhead", "after": ["is eating your margin.", "Find it before", "your competition does."], "filename": "post-29.jpg"},
    {"before": ["Seattle rents", "went up 22%."], "green": "Your prices didn't.", "after": ["That's not loyalty.", "That's a slow", "business death."], "filename": "post-30.jpg"},
    {"before": ["Fully booked.", "Staff at max.", "Bank account empty."], "green": "Pricing problem.", "after": ["Not a marketing", "problem."], "filename": "post-31.jpg"},
    {"before": ["Most PNW contractors", "bid to win work."], "green": "The profitable ones", "after": ["bid to weed out", "the wrong clients."], "filename": "post-32.jpg"},
    {"before": ["Owner works 60 hrs/wk.", "Pays himself $3k/mo."], "green": "Two pricing changes.", "after": ["Same hours.", "$6,200/mo.", "This is fixable."], "filename": "post-33.jpg"},
    {"before": ["Tacoma restaurants", "run 3-5% margins."], "green": "The ones that survive", "after": ["obsess over food cost %,", "not foot traffic."], "filename": "post-34.jpg"},
    {"before": ["Avg small biz:", "14 software tools."], "green": "Uses 6.", "after": ["$400-800/mo", "to someone", "else's margin."], "filename": "post-35.jpg"},
    {"before": ["A Seattle cleaning co.", "added one upsell per job."], "green": "$180 → $240 avg ticket.", "after": ["Zero new customers.", "33% more revenue.", "Margins doubled."], "filename": "post-36.jpg"},
    {"before": ["Most owners find their", "margin leaks"], "green": "too late.", "after": ["Free 30-min audit", "finds them early.", "DM us to book."], "filename": "post-37.jpg"},
]


def load_font(size, bold=False):
    candidates = [
        f"/usr/share/fonts/truetype/dejavu/DejaVuSans{'-Bold' if bold else ''}.ttf",
        f"/usr/share/fonts/truetype/liberation/LiberationSans-{'Bold' if bold else 'Regular'}.ttf",
        f"/usr/share/fonts/truetype/freefont/{'FreeSansBold' if bold else 'FreeSans'}.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


def max_line_width(draw, lines, font):
    """Return the widest line width in pixels."""
    w = 0
    for line in lines:
        bb = draw.textbbox((0, 0), line, font=font)
        w = max(w, bb[2] - bb[0])
    return w


def fit_font_for_lines(draw, lines, bold, start_size=80, min_size=28):
    """Find largest font where every line fits within SAFE_W."""
    size = start_size
    while size >= min_size:
        font = load_font(size, bold=bold)
        if max_line_width(draw, lines, font) <= SAFE_W:
            return font
        size -= 2
    return load_font(min_size, bold=bold)


def block_height(draw, lines, font, line_gap=12):
    total = 0
    for i, line in enumerate(lines):
        bb = draw.textbbox((0, 0), line, font=font)
        total += bb[3] - bb[1]
        if i < len(lines) - 1:
            total += line_gap
    return total


def draw_lines(draw, lines, font, color, cx, y, line_gap=12):
    for i, line in enumerate(lines):
        bb = draw.textbbox((0, 0), line, font=font)
        w = bb[2] - bb[0]
        draw.text((cx - w // 2, y), line, font=font, fill=color)
        y += (bb[3] - bb[1])
        if i < len(lines) - 1:
            y += line_gap
    return y


def make_post(post):
    img = Image.new("RGB", SIZE, BG)
    draw = ImageDraw.Draw(img)
    cx = SIZE[0] // 2

    before = post.get("before", [])
    green_line = post.get("green", "")
    after = post.get("after", [])

    BLOCK_GAP = 32
    LINE_GAP = 10

    # Fit each section independently
    font_before = fit_font_for_lines(draw, before, bold=True, start_size=78) if before else None
    font_green = fit_font_for_lines(draw, [green_line], bold=True, start_size=82) if green_line else None
    font_after = fit_font_for_lines(draw, after, bold=True, start_size=78) if after else None
    font_attr = load_font(38, bold=False)

    # Calculate total content height
    total_h = 0
    if before and font_before:
        total_h += block_height(draw, before, font_before, LINE_GAP) + BLOCK_GAP
    if green_line and font_green:
        total_h += block_height(draw, [green_line], font_green, LINE_GAP) + BLOCK_GAP
    if after and font_after:
        total_h += block_height(draw, after, font_after, LINE_GAP) + BLOCK_GAP

    attr_bb = draw.textbbox((0, 0), ATTR, font=font_attr)
    attr_h = attr_bb[3] - attr_bb[1]
    total_h += 40 + attr_h

    # Start y centered
    y = (SIZE[1] - total_h) // 2

    if before and font_before:
        y = draw_lines(draw, before, font_before, WHITE, cx, y, LINE_GAP)
        y += BLOCK_GAP

    if green_line and font_green:
        y = draw_lines(draw, [green_line], font_green, GREEN, cx, y, LINE_GAP)
        y += BLOCK_GAP

    if after and font_after:
        y = draw_lines(draw, after, font_after, WHITE, cx, y, LINE_GAP)
        y += BLOCK_GAP

    # Attribution
    y += 20
    attr_bb = draw.textbbox((0, 0), ATTR, font=font_attr)
    attr_w = attr_bb[2] - attr_bb[0]
    draw.text((cx - attr_w // 2, y), ATTR, font=font_attr, fill=GREEN)

    # Green bars
    bar_x = cx - BAR_W // 2
    draw.rectangle([bar_x, 55, bar_x + BAR_W, 55 + BAR_H], fill=GREEN)
    draw.rectangle([bar_x, SIZE[1] - 63, bar_x + BAR_W, SIZE[1] - 63 + BAR_H], fill=GREEN)

    out_path = os.path.join(OUT_DIR, post["filename"])
    img.save(out_path, quality=95)
    print(f"✅ {post['filename']}")


if __name__ == "__main__":
    for p in POSTS:
        make_post(p)
    print(f"\nDone — {len(POSTS)} posts saved.")
