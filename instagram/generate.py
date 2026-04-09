#!/usr/bin/env python3
"""SharpMargin Instagram post generator — black bg, white/green text, green bars."""

from PIL import Image, ImageDraw, ImageFont
import os, textwrap

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
SIZE = (1080, 1080)
BG = (8, 8, 8)
WHITE = (255, 255, 255)
GREEN = (80, 200, 140)
BAR_H = 8
BAR_W = 80
ATTR = "— SharpMargin"

# Each post: (lines_before_green, green_line, lines_after_green)
# Use None for green_line if no green highlight
POSTS = [
    # post-08
    {
        "before": ["If your business"],
        "green": "needs you there",
        "after": ["to survive,\nyou don't own a\nbusiness. You own a job."],
        "filename": "post-08.jpg",
    },
    # post-09
    {
        "before": ["Most small businesses\ndon't fail because\nof bad products."],
        "green": "They fail because",
        "after": ["of bad margins."],
        "filename": "post-09.jpg",
    },
    # post-10
    {
        "before": ["Stop discounting."],
        "green": "Start positioning.",
        "after": ["Customers pay\npremium prices\nfor premium framing."],
        "filename": "post-10.jpg",
    },
    # post-11
    {
        "before": ["Revenue is vanity."],
        "green": "Profit is sanity.",
        "after": ["Know the difference\nbefore it costs you\neverything."],
        "filename": "post-11.jpg",
    },
    # post-12
    {
        "before": ["The best time\nto fix your pricing\nwas at launch."],
        "green": "The second best time",
        "after": ["is today."],
        "filename": "post-12.jpg",
    },
    # post-13
    {
        "before": ["Your competitors\naren't beating you\non quality."],
        "green": "They're beating you",
        "after": ["on systems."],
        "filename": "post-13.jpg",
    },
    # post-14
    {
        "before": ["A 5% price increase\nwith the same volume"],
        "green": "can double",
        "after": ["your net profit.\nRun the math."],
        "filename": "post-14.jpg",
    },
    # post-15
    {
        "before": ["You don't have\na revenue problem."],
        "green": "You have a",
        "after": ["cost structure problem."],
        "filename": "post-15.jpg",
    },
    # post-16
    {
        "before": ["Busy isn't"],
        "green": "the same as",
        "after": ["profitable.\nAlways check\nyour numbers."],
        "filename": "post-16.jpg",
    },
    # post-17
    {
        "before": ["The easiest way\nto grow profit\nisn't more customers."],
        "green": "It's charging more",
        "after": ["to the right ones."],
        "filename": "post-17.jpg",
    },
    # post-18
    {
        "before": ["Your pricing\nshould reflect"],
        "green": "your value,",
        "after": ["not your\ninsecurity."],
        "filename": "post-18.jpg",
    },
    # post-19
    {
        "before": ["Cash flow problems\nare usually"],
        "green": "pricing problems",
        "after": ["in disguise."],
        "filename": "post-19.jpg",
    },
    # post-20
    {
        "before": ["Cutting costs\nis a floor."],
        "green": "Growing margin",
        "after": ["is a ceiling\nthat doesn't exist."],
        "filename": "post-20.jpg",
    },
    # post-21
    {
        "before": ["Most owners\nknow their revenue."],
        "green": "Almost none",
        "after": ["know their\nprofit per customer."],
        "filename": "post-21.jpg",
    },
    # post-22
    {
        "before": ["The market doesn't\nset your price."],
        "green": "You do.",
        "after": ["Act like it."],
        "filename": "post-22.jpg",
    },
    # post-23
    {
        "before": ["Every dollar\nyou discount"],
        "green": "comes directly",
        "after": ["out of\nyour profit.\nNot your revenue."],
        "filename": "post-23.jpg",
    },
    # post-24
    {
        "before": ["A great product\nat a bad price"],
        "green": "is still",
        "after": ["a bad business."],
        "filename": "post-24.jpg",
    },
    # post-25
    {
        "before": ["Build a business\nthat runs"],
        "green": "without you,",
        "after": ["or build\na very expensive\nhobby."],
        "filename": "post-25.jpg",
    },
    # post-26
    {
        "before": ["Your weakest\nlink isn't"],
        "green": "your product.",
        "after": ["It's your\nfinancial clarity."],
        "filename": "post-26.jpg",
    },
    # post-27
    {
        "before": ["Scale doesn't\nfix bad margins."],
        "green": "It amplifies them.",
        "after": ["Fix the math\nbefore you grow."],
        "filename": "post-27.jpg",
    },
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


def text_block_height(draw, text, font):
    """Total height of a multi-line text block."""
    lines = text.split("\n")
    total = 0
    for i, line in enumerate(lines):
        bbox = draw.textbbox((0, 0), line, font=font)
        total += bbox[3] - bbox[1]
        if i < len(lines) - 1:
            total += 14  # line spacing
    return total


def draw_text_block(draw, text, font, color, cx, y):
    """Draw centered multi-line block, return final y."""
    lines = text.split("\n")
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        draw.text((cx - w // 2, y), line, font=font, fill=color)
        y += (bbox[3] - bbox[1]) + 14
    return y


def make_post(post):
    img = Image.new("RGB", SIZE, BG)
    draw = ImageDraw.Draw(img)
    cx = SIZE[0] // 2

    font_main = load_font(88, bold=True)
    font_green = load_font(92, bold=True)
    font_attr = load_font(42, bold=False)

    LINE_GAP = 36  # gap between blocks

    # Measure total content height
    def block_h(text, font):
        return text_block_height(draw, text, font) if text else 0

    before = post.get("before", [])
    green = post.get("green")
    after_text = post.get("after", [])

    before_str = "\n".join(before) if before else ""
    after_str = "\n".join(after_text) if after_text else ""

    total_h = 0
    if before_str:
        total_h += block_h(before_str, font_main) + LINE_GAP
    if green:
        total_h += block_h(green, font_green) + LINE_GAP
    if after_str:
        total_h += block_h(after_str, font_main) + LINE_GAP
    # attr line
    attr_bbox = draw.textbbox((0, 0), ATTR, font=font_attr)
    attr_h = attr_bbox[3] - attr_bbox[1]
    total_h += 60 + attr_h  # spacing before attr

    y = (SIZE[1] - total_h) // 2 + 20

    if before_str:
        y = draw_text_block(draw, before_str, font_main, WHITE, cx, y)
        y += LINE_GAP

    if green:
        y = draw_text_block(draw, green, font_green, GREEN, cx, y)
        y += LINE_GAP

    if after_str:
        y = draw_text_block(draw, after_str, font_main, WHITE, cx, y)
        y += LINE_GAP

    # Attribution
    y += 30
    attr_bbox = draw.textbbox((0, 0), ATTR, font=font_attr)
    attr_w = attr_bbox[2] - attr_bbox[0]
    draw.text((cx - attr_w // 2, y), ATTR, font=font_attr, fill=GREEN)

    # Green bars top and bottom
    bar_x = cx - BAR_W // 2
    draw.rectangle([bar_x, 60, bar_x + BAR_W, 60 + BAR_H], fill=GREEN)
    draw.rectangle([bar_x, SIZE[1] - 68, bar_x + BAR_W, SIZE[1] - 68 + BAR_H], fill=GREEN)

    out_path = os.path.join(OUT_DIR, post["filename"])
    img.save(out_path, quality=95)
    print(f"✅ {post['filename']}")


if __name__ == "__main__":
    for p in POSTS:
        make_post(p)
    print(f"\nDone — {len(POSTS)} posts saved to {OUT_DIR}")
