## Project tracking

Roadmap/status for Claude-initiated work lives on a Notion board, not markdown docs — full
command reference and rules in the root `lets-wingle/CLAUDE.md`'s "Project tracking" section.
Config: `wingle-backend/docs/notion-board.json`. This repo's tag: `MarketingWeb`.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
