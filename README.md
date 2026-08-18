# Svelte + TS + Vite


demo: https://binder-ethz.github.io/boule/

## Pétanque Tournament Manager

A browser-based tournament manager for pétanque. All data is stored in `localStorage` — no server required.

### Leaderboard & Tie-Breaking Rules

After each round the ranking is updated using the following criteria **in order**:

| Priority | Criterion | Direction |
|---|---|---|
| 1 | Wins | Highest first |
| 2 | Point differential (`PointsDiff`) | Highest first |
| 3 | Gross points scored (`Pts+`) | Highest first |
| 4 | Team name | Alphabetical (A → Z) |

The `Pts+` column is shown on the final leaderboard so that tie-breaking is transparent.  
A brief explanation of the criteria is displayed below the leaderboard table.

### Round History After Game Completion

When the final round is evaluated, the result screen shows a **"View Round Details"** button. Clicking it expands a round-by-round table showing all match scores and outcomes. Round data is never cleared — it remains available in the browser's `localStorage` and in exported JSON files for later review.

### Workflow

1. **Preparation** – add teams; courts are generated automatically.
2. **Play** – start the timer, enter scores, stop and evaluate.
3. **Result** – view the provisional ranking and start the next round, or see the final trophy 🏆 and review round history.

### Export / Import

Use the 📤 / 📥 buttons to export or import a full tournament snapshot as JSON. The export includes all round history so that completed tournaments can be shared or reviewed offline.

---

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm test         # run unit tests (vitest)
```

## Technical Considerations

This project uses plain Svelte + Vite without SvelteKit to keep routing minimal. See the Svelte docs for migration guidance if SvelteKit capabilities are needed later.

