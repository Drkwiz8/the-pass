# THE PASS — THE CAREER (restaurant progression)

Design spec, 2026-08-01. From Jaxon's brief:

> "i want them to progress through restaurants so they start as a line cook
> running 2 stations then they run 3 then 4 and then get more cooks and
> eventually are just the head chef calling out tickets then they can buy the
> restaurant and just have them run and then get the next restaurant and start
> it over again and maybe bring like one cook but then each restaurant can get
> more or different cooking stations and what not"

This is the real culinary career, and it is the correct spine for the whole
game. It replaces "grind bank forever" with an arc that has a beginning, a
promotion, an exit, and a reason to start over.

---

## 0. The shape

Each restaurant is a **tour**, and every tour runs the same five ranks:

| Rank | You are | Stations | Brigade | What you actually do |
|---|---|---|---|---|
| 1 COMMIS | new hire | 2 | none | fire, pull, plate — everything yourself |
| 2 LINE COOK | trusted | 3 | 1 cook | you still cook; one station covered |
| 3 CHEF DE PARTIE | senior | 4 | 2 cooks | you cook the hard stuff, they cover basics |
| 4 SOUS CHEF | second | all | 3 cooks + expo | you work windows + finishes, not raw volume |
| 5 HEAD CHEF | running it | all | full brigade | **you call the pass** — expedite, don't cook |
| — OWNER | bought it | — | — | it runs without you. Passive income. Move on. |

**Promotion is earned by grade, not by money.** Bank three A-or-better weeks
at your current rank and you move up. That makes the night grade (v14.6) the
spine of progression instead of a decoration — and it means CRAFT, the part
only the player can do, gates the whole career.

## 1. Why this fixes the endgame permanently

The old endgame problem (ENDGAME.md §0) was: content runs out at night 16,
difficulty caps at 13, and only the money bar keeps moving. This fixes it
structurally — every tour re-teaches the same five ranks with a different
menu, different stations, and a different rhythm. The *verbs* stay; the
*context* changes. That is a system, not content (roadmap principle #2).

It also gives THE PASS a real answer to "why keep playing after LEGEND":
you don't keep playing the same kitchen. You go get another one.

## 2. HEAD CHEF is the payoff, and it must play differently

Rank 5 is the promise in Jaxon's brief — "just the head chef calling out
tickets." If it is only "the same game but the crew is good", it is a letdown.
At HEAD CHEF the player stops touching pans:

- Cooks handle every pull on their station.
- The player's board becomes **the pass**: sequencing (fire cues — v15.2),
  calling tickets out (plating), CUT decisions, and directing cooks
  ("PUSH grill" — a temporary speed boost on one station, on a cooldown).
- The tight pass and the finish stay the player's own hands.

This is a genuinely different game loop built from parts that already exist,
which is why it is reachable.

## 3. BUYING THE RESTAURANT — the exit

At HEAD CHEF with the room at its top tier, the owner offers to sell. Price is
steep (a full tour's earnings). Buying it:

- Ends the tour. The restaurant becomes **passive**: it pays a nightly cut
  into your bank forever, shown on the title card.
- Banks a permanent **LEGACY** entry: name, final Guide stars, weeks graded.
- Unlocks the next restaurant.
- Lets you **bring one person** — pick a cook from your brigade (they keep
  their stage programs) to be your first hire at the next place. This is the
  emotional hook: the crew member who follows you across three restaurants.

You keep: stars, wardrobe, achievements, lifetime ledger, your chef.
You lose: the room, the upgrades, the rest of the brigade, the menu.
That is prestige, but with a fiction that actually makes sense.

## 4. THE RESTAURANTS

Each has its own stations, so the muscle memory has to be rebuilt.

1. **THE PASS** — American bistro. grill / sauté / fry / garde. The tutorial
   restaurant; what exists today.
2. **KIRIN** — izakaya. **robata** (skewers, many tiny items at once) /
   **fry** (kara-age, tempura) / **sushi** (no heat, knife precision) / sauté.
   Rhythm: high count, low cook time. Teaches volume.
3. **BRASA** — steakhouse. **wood grill** (temperature is the mechanic —
   rare/medium/well as distinct windows) / **plancha** / garde / **oven**.
   Rhythm: few tickets, huge stakes, long cooks. Teaches precision.
4. **LEVAIN** — bakery/café, morning service. **oven** (load hours ahead) /
   **proof** (early or late both punish) / **espresso** (instant, constant) /
   garde. Rhythm: planning over reaction. Teaches the opposite skill.

Restaurant 2+ starts you at COMMIS again — but with your stars, your gear,
your one cook, and a HEAD CHEF's understanding. The difficulty curve resets;
the player's skill does not.

## 5. Build order (each step ships on its own)

- **v16 — RANKS in THE PASS.** The five ranks gate stations and hires on the
  current restaurant. Rank card on the pre-service screen, promotion moment at
  the week close. No new restaurants yet. *This alone delivers "start on 2
  stations and work up" and is the foundation for everything else.*
- **v17 — HEAD CHEF loop.** Cooks take all pulls; PUSH command; the pass board.
- **v18 — BUY THE RESTAURANT + LEGACY + bring-one-cook.** The exit exists but
  loops back into THE PASS at COMMIS (prestige without new content yet).
- **v19 — KIRIN.** First genuinely new kitchen: proves the station system is
  data-driven rather than hardcoded.
- **v20+ — BRASA, LEVAIN.**

Gate: stations must become **per-restaurant data** in v16 rather than the
global STATIONS array with `unl:` night numbers. That refactor is the real
work of v16 and everything else rides on it.

## 6. What this replaces

- Renovation tiers stay, but scoped to the current restaurant.
- Prestige seasons (ENDGAME §6) are **superseded** — this is prestige, with a
  better story.
- Nights stay continuous within a tour; the tour is the chapter.
