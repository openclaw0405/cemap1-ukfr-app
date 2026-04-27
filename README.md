# CeMAP 1 UKFR Memory Revision Lab

Standalone CeMAP 1 / UKFR-only web app with a 30-day plan, 161 grounded MCQs, grouped topic papers, single-topic drills, weak-area retry, mixed mock mode, and a memory-optimised study layout.

## Files
- `index.html` — app shell
- `styles.css` — UI styles for the framework-first / chunked layout
- `data.js` — embedded study plan + question bank
- `app.js` — app logic, daily memory workflow, explanation linking, and wrong-answer retry
- `build_data.py` — rebuilds `data.js` from existing CeMAP source JSON plus grounded extra questions

## Study flow per day
Each day follows the same order:
1. What this topic is about
2. Expanded high-yield framework
   - framework name
   - what it helps remember
   - component-by-component breakdown
   - exam use
   - common trap / warning
3. Exam-priority sprint
4. Full notes in chunks
5. Comparison table
6. Must memorise numbers / facts
7. Common mistakes + trap notes
8. Quick recall check
9. MC drill
10. Retry wrong answers

## Publish to GitHub Pages
Upload this folder as a static site, or push it to a repo root / `docs/` folder and enable GitHub Pages.

No build step is required for runtime.
