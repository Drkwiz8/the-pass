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

## v13 — THE COACH (SHIPPED 2026-08-01)
Jaxon's ask: a tutorial for the beginning and for every new-thing debut.
- [x] Guided first service (career night 1, once): coach banner walks
      fire → pull (with raw-pull correction) → plate, gated on actually
      doing each action; spawns run 60% slower while the coach is talking
- [x] One-time in-service callouts the first time a FLIP window, SEASON
      window, or FINISH second pass appears
- [x] "HOW IT WORKS" explainer block on the pre-night card for every debut
      night (flip 3, season 4, combo 5, VIPs 6, bus 7, mods 8, 86'd 9,
      critic 10, 4-tops 12, finish 14, THE WEEK 17, THE GUIDE 23, COOK-OFF 29)
- [x] Everything remembered in META.tut; veterans pre-seeded from lifetime
      stats so the coach never lectures someone who already flips/seasons

## v14 — STAKES, YOU, AND THE LATE LADDER (SHIPPED 2026-08-01)
Jaxon's batch: difficulty relief, real failure, his own character, stages.
- [x] FAILURE: 6 walkouts in a career night = DOORS CLOSED EARLY — tips
      gone, calendar frozen, run the night back until you close it standing.
      (Design call: nights stay CONTINUOUS — the restaurant's service
      history, not levels. Redo exists only through failure, so nobody can
      farm easy Tuesdays. Jaxon can override.)
- [x] THE CHEF: you are a character now — always on the pass dock, first
      locker in the locker room, CROWN / STARRED TOQUE / HALO are CHEF ONLY
- [x] STAGES: send a cook out for 3 nights ($500, line runs short) — they
      return with a permanent ★ (+7% hands, stacks to 3). NOMA, LE
      BERNARDIN, ATELIER LUX, THE FRENCH ROOM, SAISON.
- [x] 9 late-ladder upgrades: 4th pan all four stations (16 pan keys now:
      1-0 q w e r t y), EXPO WHEEL (+1 rail), FINISHING TOUCH (finish
      windows +20%), GARNISH STATION (+5% plates), WALK-IN II, TRAINING III

## v14.1 — THE RAMP (SHIPPED 2026-08-01)
Jaxon stuck on night 24, short a staged cook, no way through.
- [x] Deadlock fix: stages count SERVICES RUN, not calendar nights — a
      failed night still passes a night for the stagiaire
- [x] MERCY: each consecutive fail on a night lightens the next attempt
      (+8% patience, +8% slower tickets, stacks ×3, resets on a win) —
      framed as "word got around." Stuck is a ramp now, not a wall.

## v14.2 — GUIDE WEEK RETARGET (SHIPPED 2026-08-01)
Jaxon's playtest: night 24 was stalling on VIPs — three high-stakes patrons
(Duvall, Rosa, Dee) plus a hidden Guide ticket and regular volume on one night.
- [x] During Guide week (nights 23-28), @PLATEDBYDEE doesn't book Tuesday
      — she appears WED–SAT instead. Duvall and Rosa still book every Tuesday;
      the Guide still eats unmarked. Tuesday in Guide week is now "beat Duvall
      and Rosa" instead of "survive four simultaneous pressure sources."

## v14.3 — WAYS OUT (SHIPPED 2026-08-01)
Jaxon: still stuck on 24; "if you end the service it just moves you on";
"25 is unbeatable — i got 86 locked out and tickets just died."
- [x] BUGFIX: END SERVICE called finish() — it banked the tips AND advanced
      the night. Walking out counted as closing. Career now abandons the
      night (confirm prompt, nothing banks, night stays put); endless
      unchanged. Stagiaires still tick so nothing deadlocks.
- [x] BUGFIX: the 86 event picked from STATIONS — every station in the game,
      including ones not on the player's line — and ignored the rail. It
      could kill the busiest station with four tickets pending. Now it only
      downs a LIVE station, prefers the least-loaded, and never picks one
      whose tickets can't survive the outage.
- [x] THE FIX: tap a downed station's header 4× to bring it back early
- [x] 86 A DISH: every dish on a chit gets a small 86 button (from night 9).
      Cut it for a $12 comp — the rest of the ticket still plates and NOBODY
      WALKS. Cut the last dish and the table is comped out, no walkout.
      This is the general escape hatch for any dead end, not just outages.
- [x] Mercy deepened: cap 3 → 6 stacks, and at 2+ one less thing breaks,
      at 4+ nothing breaks at all ("the tech finally came by")

## v14.4 — NEVER A WALL (SHIPPED 2026-08-01)
Jaxon: "im already stuck on 25 because of the bug and i cant beat it."
- [x] CALL IT A NIGHT: after two failed attempts at the same night, the fail
      card offers to write it off — the night closes as a D, nothing banks,
      no stars, the D goes on the week grade, and the calendar MOVES. A
      permanent wall is worse design than any difficulty; a real kitchen's
      disaster night still ends with tomorrow. Failure still stings without
      ever being terminal.

## v14.5 — DISCOVERABILITY (SHIPPED 2026-08-01)
Jaxon: "i didnt know i could push f to fire tickets and doing that i was able
to S rank night 25." Fourteen versions with the strongest verb in the game
hidden on a keyboard shortcut — and unreachable entirely on mobile.
- [x] 🔥 FIRE OLDEST is a real button in the footer, styled hot, always
      visible (mobile had NO way to do this at all before)
- [x] The coach teaches it: at the end of the guided first service, and again
      as a one-time callout the first time 4+ tickets are live on the rail
- [x] "86" the dish-cut button renamed CUT — it collided with 86 meaning a
      station outage. Two meanings, one label, entirely my fault.
- [x] GOALS tab renamed ACHIEVEMENTS: bigger two-column rows, unlocked ones
      lit green instead of locked ones greyed to mud, a progress bar, earned
      ones sorted first, and every row states its ⭐1 payout out loud

## v14.6 — THE GRADE, AND THE STAGE REWORKED (SHIPPED 2026-08-01)
Jaxon: "how does the ranking work cause i felt like that was easy" · "i feel
like im not flipping or seasoning because how many orders there are and how
often the other cooks miss and the other cooks also dont season" · "i wanna
rework the stage training thing again."
- [x] GRADE BUG: the old score was `tips × service rate` vs a fixed 1100 for
      S. Tips inflate with menu upgrades, renovation tiers, the Guide
      multiplier, garnish and VIP doubles — so by the mid-20s S cleared
      itself. The grade was measuring UPGRADES, not cooking. Now it is four
      ratios that cannot inflate: PERFECT 40 / SERVICE 30 / CLEAN 15 /
      CRAFT 15, where CRAFT counts only the player's own seasons, flips and
      MASTERED finishes over the player's own pulls. A crew can carry the
      first three; S requires the chef to work the windows.
- [x] WHY <grade> panel on the close card: four bars, weights, and what the
      next grade needs — plus a pointed note at the weakest line.
- [x] STAGES REWORKED: no more faceless +7%. A stage now teaches a NAMED
      SKILL the player picks — MISE EN PLACE (NOMA, seasons every dish they
      pull), PRECISION (Le Bernardin, never spaces out), SPEED (Atelier Lux),
      COMPOSURE (The French Room, quirks and the weeds stop biting). Up to
      three per cook, badges on the crew card, old numeric skill migrates.
- [x] MISE EN PLACE directly answers "the cooks dont season" — a trained
      brigade stops handing over bare product. FLIP and THE FINISH are still
      never taught (v12.1 rule): the crew frees your hands for the windows
      rather than replacing you at them.
- [x] Crew seasons tracked separately (G.crewSeasons) so they never inflate
      the player's CRAFT score or the lifetime SALT CELLAR count

## v14.7 — HOW STAGING ACTUALLY WORKS (SHIPPED 2026-08-01)
Jaxon, who cooks for a living: "a chef shouldnt miss a service when they
stage." Correct, and the old design was fiction: a stage is unpaid MORNING
work on your days off — you are still on your own line at service that night.
- [x] Staging cooks stay on the line for all three services and work them
      TIRED — 55% slower reactions, ~2.2× the slips, and no MISE seasoning
      while they are running on no sleep. The cost of training is fatigue,
      not absence, so it can never strand you mid-week.
- [x] Their service count ticks (they are working), and the copy everywhere
      reflects mornings-away rather than a disappearance
- [x] PREVIEWS: every wardrobe card renders the piece on a chef through the
      real sprite pipeline — locked pieces too, in greyscale, so you can see
      what you are working toward. Owned pieces no longer render dimmed.
      (The customize panel already live-previewed the assembled chef.)

## v14.8 — STAGE EXPLOIT CLOSED (SHIPPED 2026-08-01)
Jaxon: "people can bypass stage nights by just ending the service."
- [x] abandonNight() ticked m.stage.left, so you could open the doors, walk
      straight out, and burn off a cook's three tired services without ever
      cooking one — training for free. A stage now only counts when the
      service is actually worked: finish() and failNight() tick it (both
      were cooked), walking out does not. The walk-out card says so.

## v15 — THE TIGHT PASS (SHIPPED 2026-08-01)
Jaxon: "im just spaming fire and clicking orders over and over i want
something else to do." The sharpest note yet, and structural: nothing
punished firing every dish on a ticket at once. Heat decay existed but
floored at 30% — a soft, invisible tax — so spam WAS optimal. The game had
actions but no decisions.
- [x] THE TIGHT PASS: a table's dishes pulled within 4.5s of each other pay
      +40% (within 9s, +15%). Expediting — the actual job of a pass — becomes
      the core decision: a 9.5s ribeye fires seven seconds before a 2s plate
      of oysters so they land together.
- [x] Cook time printed on every chit item — you cannot plan a stagger you
      cannot see. Live sync readout per ticket (⟡ TIGHT 2.1s / ◇ / apart).
- [x] The crew pulls but the PLAYER fires, so a full brigade can never erode
      this decision — the standing answer to "verbs feel useless with 3 cooks"
- [x] Tight passes weight triple in the grade's CRAFT component; 2 new
      achievements (ON THE PASS, EXPEDITER) and THE EXPO'S TOWEL at 100
      lifetime tight passes

## v16 — CREWS (multiplayer, the honest path)
"Guild-like things" = crews. Needs the backend the leaderboard needs — one
Supabase project covers both (J4 research picked it; Jaxon owns the account).
1. Global leaderboard first (endless scores, name + crew tag field)
2. CREWS v1 — async guilds: create/join by code, crew tag shows on the
   board, crew score = sum of members' weekly best, weekly crew ladder
3. CREW ACTIVITIES — same-seed challenge night (everyone cooks the same
   service, compare grades), crew goals (collective covers this week)
4. Live co-op service stays in "Later" — netcode after there are players
The chef character (v14) is the identity that travels: your chef + name +
crew tag is what other players see.

## v17 — next
- [ ] Prestige seasons (endgame doc §6) — the go-around-again layer
- [ ] Crew morale + staff storylines (endgame doc §4)
- [ ] Per-station verb identities (grill sear marks, fry shake, garde compose)

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
