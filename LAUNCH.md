# THE PASS — launch pack

Everything needed to put the game up. Written 2026-08-01. Jaxon does the
account steps (they need his identity and his payout details); the copy below
is ready to paste.

---

## 1. itch.io — the 10 minutes

1. **itch.io/register** — username `drkwiz8` if it's free.
2. Dashboard → **Create new project**.
3. Fill it from §2 below.
4. **Kind of project:** HTML. **Upload** `the-pass.zip` (built by
   `build-itch.sh`, contains `index.html` + `og.png`).
5. Tick **"This file will be played in the browser"**.
6. **Embed options:** width `1280`, height `800`, tick *Mobile friendly* and
   *Fullscreen button*.
7. **Pricing:** "No payments" or "Name your own price" — name-your-price is the
   first-dollar path and costs nothing to try. Suggested price $3.
8. **Visibility → Public**, then **Save & view page**.

Payouts need a Stripe/PayPal connection before money can actually land — do
that once the page is up, not before.

---

## 2. Page copy — paste as-is

**Title:** `THE PASS`

**Tagline:** `A line-cook dinner rush. Fire it, pull it in the window, plate it hot.`

**Description:**

> You're on the pass. Tickets print faster than you can read them, four
> stations are going at once, and every dish has one window where it's
> perfect — miss it and it's raw, miss it the other way and it's in the bin.
>
> Fire the ribeye seven seconds before the oysters so they land together.
> Season the pan on the early beat, flip it on the yellow, pull it on the
> green. Send the table out hot.
>
> Then do it again tomorrow, with a harder book.
>
> **THE PASS** is a restaurant service sim built by a working line cook.
>
> **CAREER** — Start alone on two stations as a commis. Earn your rank by
> cooking, not by spending: line cook, chef de partie, sous, head chef. Hire a
> brigade, send them out on stages to learn real skills, dress every one of
> them. Renovate the room from a late-night window up to a Michelin room.
>
> **THE REGULARS** remember you. Feed Chef Duvall well three times and he
> becomes a patron. Send Rosa's family table out cold twice and they book at
> Meridian instead — and you'll see that in your book every week after.
>
> **THE GUIDE** eats here for a week, unmarked, any ticket. Saturday she rates
> you, and the rating is permanent money.
>
> **THE COOK-OFF** — Meridian sends a challenge order every night for a week.
> Win four and you take the street back.
>
> **ENDLESS RUSH** — one service that never closes, the same fixed kitchen for
> everybody, three walkouts and you're done. That's the one to beat your
> friends at.
>
> Two restaurants, 38 dishes, 47 pieces of gear that unlock from things you
> actually did, and a night that can genuinely beat you.
>
> Free in your browser. Desktop or phone.

**Genre:** Simulation · **Tags:** `cooking`, `restaurant`, `management`,
`pixel-art`, `singleplayer`, `time-management`, `arcade`, `html5`

**Controls (paste into the page):**
```
CLICK a dish on a ticket        fire it
CLICK a pan / press its key     pull it (green window)
F                               fire oldest — your panic button
SPACE                           plate the ready ticket
P                               pause
Plays on phones too — everything is tappable.
```

---

## 3. The launch post

Short version, for wherever you post:

> I'm a line cook. I built a game about the pass.
>
> Fire it, pull it in the window, plate it hot. Ranks, a brigade you dress,
> regulars who remember how you cooked for them, and a critic who eats there
> all week without telling you.
>
> Free in the browser: drkwiz8.github.io/the-pass
>
> Built over a few days. Feedback wanted — especially from other cooks.

The hook that does the work is **"I'm a line cook and I built this"** — lead
with it every time. That's the thing nobody else pitching a cooking game has.

---

## 4. Pushing for funding — the honest read

A browser game with no players is not fundable yet. What makes it fundable is
**traction**, and the cheapest traction here is the build-in-public angle:
a working cook building a game about his own job. Film the kitchen, film the
build, post the link.

Order that actually works:
1. **Ship to itch** (this doc) and get the link live.
2. **Post the build-in-public clip.** Kitchen footage + game footage. This is
   Lane 1 content and it markets the game for free.
3. **Get numbers** — plays, ratings, comments. Even 200 plays and 20 comments
   is a real signal to point at.
4. **Then** submit to CrazyGames / Poki (they pay per-play revenue share, and
   they want traffic history) and only then talk to anyone about money.

What to have ready before any funding conversation: play count, retention
(do people come back for night 2?), and one sentence on why you're the person
to build this. You already have the third one.

---

## 5. Before you hit publish

- [ ] Hard-refresh the live page and play one full night through to close
- [ ] Check it on your phone (portrait) — that's most portal traffic
- [ ] Confirm the footer version matches the latest commit
- [ ] Paste the URL into a Discord message and confirm the banner preview shows
