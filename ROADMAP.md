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
