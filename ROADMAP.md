# THE PASS — Roadmap

Lead designer: Jaxon (drkwiz8). Built with Cowork + hermes-air. Five versions
shipped on day one (2026-07-31) from live playtest notes.

## The two-mode answer (v6 core)

Jaxon's instinct about the "day system" and the leaderboard ask are the same
problem, solved by splitting into two modes:

**CAREER (current game)** — the progression sandbox. Nights, bank, stars,
brigade, wardrobe, modifiers. Your kitchen, your crew, your grind. Upgrades
make you stronger, which is the point — and exactly why career scores can
never be a fair leaderboard.

**ENDLESS RUSH (new)** — the competitive mode. One continuous service that
never closes, everyone plays the SAME fixed kitchen (no upgrades, no crew),
difficulty climbs forever, run ends at 3 walkouts. Score = tips. Comparable
by design -> this is the leaderboard mode, the "one more run" mode, and the
mode you demo in videos. Career = depth for owners; Endless = instant fun
for strangers.

## v6 — Endless Rush + local ghost
- [ ] ENDLESS RUSH mode on the title card (career untouched)
- [ ] Personal best + last-5-runs table (local)
- [ ] "Beat your ghost" marker: score pace vs your best run
- [ ] Run-end share text (copy button): "I made $X on THE PASS before the rail
      buried me - drkwiz8.github.io/the-pass" (free viral loop, zero backend)

## v7 — Global leaderboard (first backend)
Reality: a global board needs a tiny backend (someone must store scores).
Client-only JS means vibes-based anti-cheat only — accept it at this scale.
- Option A (recommended): Supabase free tier — insert-only anon key + RLS,
  top-100 read. ~1hr build. Jaxon owns the account (the human 5%).
- Option B: Cloudflare Worker + KV free tier — more control, slightly more code.
- Name field 10 chars, profanity-filtered client-side, board shows top 50 +
  "your rank".
- Research dive J4 (queued 2026-07-31) grounds the choice.

## v8 — Everyone can play
- [ ] Mobile touch controls (tap pan = pull, tap item = fire) — REQUIRED for
      portals; most CrazyGames traffic is mobile
- [ ] itch.io page (name-your-price) — first-dollar path
- [ ] CrazyGames submission (SDK integration, no exclusivity)
- [ ] Build-in-public clips: Jaxon filming dev + kitchen = the marketing

## v9 — THE WEEK + earned gear (SHIPPED 2026-07-31)
Built from hermes-air's ENDGAME + WARDROBE-40 design docs (#handoffs).
- [x] Week system: nights 17+ are MON-SAT with distinct identities (Staff Meal /
      Regulars / Industry Night / The Book Is Full / The Push / The Big One)
- [x] Week grade at SAT close (S-D avg of six nights) pays stars + bank bonus
- [x] DARK MONDAY after nights 22/28/34/40: staff dinner / R&D day / press
      dinner — bank vs people
- [x] META.life lifetime ledger (pulls, perfects, waste, flips, banked,
      per-station, dishes served, clean streaks) + per-member m.services
- [x] 30 new wardrobe items, 3 new slots (shoes/tattoo/accessory), unlock
      CONDITIONS on gear (visible while locked) — gear is a record, not a receipt
- [x] LOCKER ROOM: dedicated full-screen customization page off the title card
- [x] Food visibly cooks in the pan (raw → golden → charred stage filters)

## v10 — PIXEL FOOD (SHIPPED 2026-07-31)
- [x] All 24 dishes as 10x8 pixel sprites in the chef art style (same
      outline + edge-shade pass), embedded as FOOD_ART
- [x] Three palette states per dish — raw / cooked / burnt — the food in the
      pan IS the doneness readout now (pink salmon sears orange, lobster
      shell turns from blue-grey to red, steak chars)
- [x] Ticket chits show the pixel dish next to its name
- [x] Customize panel opens under the member being customized (no scrolling)
- Sprite redesign candidates flagged by the draft pass: RISOTTO (weak
  silhouette), CEVICHE vs CRUDO similarity, OCTOPUS abstraction

## v11 — THE REGULARS + THE GUIDE (SHIPPED 2026-07-31)
- [x] 4 named VIPs with memory (standing -2..+3): CHEF DUVALL (orders your
      best dish, Tuesdays), ROSA MERCADO ×6 (six plates, one table), DEACON
      RILEY ($9 ticket at BAR1 every single night), @PLATEDBYDEE (2 plates,
      short fuse, posts every plate — good clip = +25% volume tomorrow, bad
      clip = furious tables at open)
- [x] PATRON perks at +3 standing: DUVALL'S MISE (one late pull/night
      rescued), ROSA'S RECIPE (POZOLE, your menu only), THE HOUSE (Deacon
      auto-plates hottest ready ticket every 20s after 6 fast-fed nights),
      THE ALGORITHM (permanent +25% volume). At -2 they book at Meridian.
- [x] THE GUIDE (nights 23-28): one unmarked Ashe ticket per night, scored
      in silence; SAT sets a 0-3★ rating = +25/60/120% menu prices,
      permanent. STARRED TOQUE unlocks at 1★.
- [x] REGULARS BOOK panel in the back office; tier ladder retuned to
      $45k/$90k/$180k (LEGEND was ~200 nights away — now spans seasons)

## v12 — THE FINISH + MERIDIAN (SHIPPED 2026-07-31)
- [x] SEASON: a second universal verb — early cyan tap window on every cook
      (night 4+), +10% on the plate; lifetime counter + SALT CELLAR gear
- [x] THE FINISH (night 14+): six premium dishes are two-pass now — pull the
      cook, re-fire for the finish (SCALLOPS baste, RISOTTO mantecare, RIBEYE
      + WAGYU rest, DUCK crisp, LOBSTER butter baste). Both passes perfect =
      MASTERED ★ +25%. Rest windows are wide, bastes are tight.
- [x] THE COOK-OFF: every other week from night 29 (until beaten), Meridian
      sends one 3-plate challenge order a night — black chit, hard dishes,
      perfect + hot or lose the round. 4 of 6 by SAT beats them: +5⭐,
      +$2,500, stolen regulars come home, CHAMPION'S JACKET. Lose: their
      write-up thins your book for a week. Rivalry panel in the back office.
- [x] The book fills the week — 4 new regulars with arcs + patron perks:
      KENJI SATO (WED, Meridian's cook: pull windows +8%), MS. LEONA PRICE
      (THU: weeds drain −20%), ADRIAN VOSS (FRI, short fuse, priciest order:
      renovations −20%), VIVIAN ASHE (SAT once Guide-rated; patron = Guide
      rating +1★ permanent)
- [x] 3 new earned wardrobe pieces, 3 new achievements
- [x] v12.1 (Jaxon playtest note: "verbs feel useless with 3 cooks"): the
      brigade stands back from chef's work — cooks won't pull finish passes,
      and nobody (cooks/expo/Deacon) touches the Cook-Off ticket. With a full
      crew your job becomes: fire everything, work the season/flip windows,
      personally finish the premium dishes, win the duels.
- [x] v12.2 (Jaxon mobile note: "service closed screen is a mess — upgrades
      and cosmetics need to be separate"): the back office is TABS — ROOM /
      CREW / GEAR / LINE / GOALS, gold badges show affordable counts, last
      tab sticks, single-column cards + bigger touch targets on mobile.
      Achievements live in the GOALS tab (endless keeps its own board).

## v13 — next
- [ ] Prestige seasons (endgame doc §6) — the go-around-again layer
- [ ] Crew morale + staff storylines (endgame doc §4)
- [ ] Per-station verb identities (grill sear marks, fry shake, garde compose)
- [ ] Global leaderboard backend (Supabase — J4 research)

## Later / earn-it list
- True multiplayer (live co-op service, split stations) — real netcode + a
  server + an actual player base first. Async competition (leaderboard +
  ghosts) delivers most of the social value until then.
- Achievements board (stars already half-cover this)
- Sound/music toggle + volume
- Daily seed challenge ("everyone plays the same Tuesday night")
- Tutorial night (guided first service)

## Design principles (learned day one)
1. Jaxon's playtest notes drive versions. Ship, play, note, ship.
2. Content gets consumed faster than it's built — prefer SYSTEMS that create
   variety (modifiers, quirks, star economy) over one-off content.
3. Single-file, zero-dependency, tiny — instant load is a feature and a
   portal ranking factor. Break this only for the leaderboard call.
4. Career = power fantasy, Endless = fair fight. Never mix their economies.
