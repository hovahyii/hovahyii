import io, os, re, sys

base = "E:/hovahyii"
work = "E:/hovahyii/.agent-work/s-19949f13"

CAP  = chr(0x1F393)
BAG  = chr(0x1F4B0)
MYF  = chr(0x1F1F2) + chr(0x1F1FE)
BOT  = chr(0x1F916)
CARD = chr(0x1F4B3)
ROCK = chr(0x1F680)
DASH = chr(0x2014)
BULL = chr(0x2022)
ARR  = chr(0x2192)
WARN = chr(0x26A0) + chr(0xFE0F)

T = {"@CAP@": CAP, "@BAG@": BAG, "@MYF@": MYF, "@BOT@": BOT,
     "@CARD@": CARD, "@ROCK@": ROCK, "@DASH@": DASH, "@BULL@": BULL,
     "@ARR@": ARR, "@WARN@": WARN}

def rd(p):
    with open(p, "r", encoding="utf-8", newline="") as f:
        return f.read()

def wr(p, s):
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(s)

# --- 1) component ---
tpl = rd(os.path.join(work, "perplexity_template.txt"))
for k, v in T.items():
    tpl = tpl.replace(k, v)
left = re.findall(r"@[A-Z]+@", tpl)
assert not left, "leftover tokens: %s" % left

bp = os.path.join(base, "app/blog/data/blogPosts.ts")
src = rd(bp)
NL = "\r\n" if "\r\n" in src else "\n"
if NL == "\r\n" and "\r" not in tpl:
    tpl = tpl.replace("\n", "\r\n")

comp = os.path.join(base, "app/blog/[slug]/PerplexityStudentDiscountContent.tsx")
if os.path.exists(comp):
    print("component already exists, skipping")
else:
    wr(comp, tpl)
    print("component written:", len(tpl))

# --- 2) blogPosts entry ---
if "how-to-get-perplexity-pro-student-discount" in src:
    print("blogPosts entry already present")
else:
    title = CAP + " How I Got Perplexity Pro at 50% Off as a Student " + DASH + " Education Pro Walkthrough ($9/month)"
    desc = ("Step-by-step walkthrough of the Perplexity Education Program: fill the student verification form, "
            "check out Education Pro at $9/month " + DASH +
            " 50% off the $20 Pro plan (~RM 45 for Malaysian students) " + DASH +
            " and unlock every frontier model including GPT-5.6 and Kimi K3.")
    lines = [
        "  'how-to-get-perplexity-pro-student-discount': {",
        "    slug: 'how-to-get-perplexity-pro-student-discount',",
        "    title: '" + title + "',",
        "    date: '14 September 2026',",
        "    author: 'Hovah Yii',",
        "    description: '" + desc + "',",
        "    ogImage: '/blog/perplexity/education-pro-pricing.png',",
        "    categories: ['AI', 'Perplexity', 'Tutorial', 'Freemium'],",
        "  },",
    ]
    entry = NL.join(lines) + NL
    i = src.rfind("};")
    assert i != -1, "could not find closing };"
    src = src[:i] + entry + src[i:]
    wr(bp, src)
    print("blogPosts entry added")

# --- 3) BlogPostClient wiring ---
cl = os.path.join(base, "app/blog/[slug]/BlogPostClient.tsx")
c = rd(cl)
if "PerplexityStudentDiscountContent" in c:
    print("BlogPostClient already wired")
else:
    imp_anchor = "import FdeTransitionRoadmapContent from './FdeTransitionRoadmapContent';"
    assert imp_anchor in c, "import anchor missing"
    c = c.replace(imp_anchor, imp_anchor + NL + "import PerplexityStudentDiscountContent from './PerplexityStudentDiscountContent';", 1)

    branch_anchor = (
        "    } else if (slug === 'claude-smart-forking-permanent-memory') {" + NL +
        "      setPost({" + NL +
        "        ...postData," + NL +
        "        content: (" + NL +
        "          <ClaudeSmartForkingContent />" + NL +
        "        )" + NL +
        "      });" + NL +
        "    }" + NL +
        "  }, [slug, postData]);"
    )
    cnt = c.count(branch_anchor)
    assert cnt == 1, "branch anchor count: %d" % cnt
    new_branch = branch_anchor.replace(
        "    }" + NL + "  }, [slug, postData]);",
        "    } else if (slug === 'how-to-get-perplexity-pro-student-discount') {" + NL +
        "      setPost({" + NL +
        "        ...postData," + NL +
        "        content: (" + NL +
        "          <PerplexityStudentDiscountContent />" + NL +
        "        )" + NL +
        "      });" + NL +
        "    }" + NL +
        "  }, [slug, postData]);",
        1)
    c = c.replace(branch_anchor, new_branch, 1)
    wr(cl, c)
    print("BlogPostClient wired")

# --- 4) verify ---
c2 = rd(comp)
print("comp imgs:", [s for s in ("student-verification.png", "education-pro-pricing.png", "model-picker.png") if s in c2])
print("comp emoji ok:", CAP in c2 and MYF in c2 and WARN in c2)
s2 = rd(bp)
print("data key present:", "how-to-get-perplexity-pro-student-discount" in s2)
c3 = rd(cl)
print("import present:", "import PerplexityStudentDiscountContent from './PerplexityStudentDiscountContent';" in c3)
print("branch present:", "slug === 'how-to-get-perplexity-pro-student-discount'" in c3)
print("NL style:", "CRLF" if NL == "\r\n" else "LF")
